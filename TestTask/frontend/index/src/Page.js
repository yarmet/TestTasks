import React, {Component} from 'react';
import {connect} from 'react-redux';
import StoreCommands from "./store/storecommands";
import AddBlock from "./addBlock";
import EditBlock from "./editBlock";
import DeleteBlock from './deleteBlock';
import ajax from './ajax';


class Page extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filteredRows: [],
            dispatchRow: {rowIdInArray: null, row: null},

            addBlockOn: false,
            editBlockOn: false,
            deleteBlockOn: false,

            blocked: false
        };
        this.updateTable = this.updateTable.bind(this);
    }


    componentDidMount() {
        ajax("/user", "GET", null, true).then((users) => {
            let parsedUsers = JSON.parse(users);
            this.setState({filteredRows: parsedUsers});
            this.props.updateAll(parsedUsers);
        })
    }

    updateTable() {
        let inputValue = this.refs.inp.value.toLowerCase();

        let filteredRows = this.props.elements.filter(function (row) {
            return row.firstName.toLowerCase().search(inputValue) !== -1
                || row.lastName.toLowerCase().search(inputValue) !== -1
                || row.email.toLowerCase().search(inputValue) !== -1;
        });
        this.setState({filteredRows: filteredRows, blocked: false})
    }


    render() {

        if (this.state.deleteBlockOn || this.state.editBlockOn || this.state.addBlockOn) {
            document.body.classList.add('transparent');
        } else {
            document.body.classList.remove('transparent');
        }

        return (
            <div className="center">

                <input placeholder="поиск по всем полям" ref="inp" onInput={this.updateTable}/>

                {this.state.addBlockOn ? <AddBlock
                    close={() => this.setState({addBlockOn: false, blocked: false})}
                    callback={(row) => {
                        this.props.addRow(row);
                        this.updateTable()
                    }}/> : null}


                {this.state.editBlockOn ? <EditBlock
                    close={() => this.setState({editBlockOn: false, blocked: false})}
                    data={this.state.dispatchRow}
                    callback={(id, row) => {
                        this.props.updateRow(id, row);
                        this.updateTable()
                    }}/> : null}


                {this.state.deleteBlockOn ? <DeleteBlock
                    close={() => this.setState({deleteBlockOn: false, blocked: false})}
                    data={this.state.dispatchRow}
                    callback={(id) => {
                        this.props.removeRow(id);
                        this.updateTable();
                    }}/> : null}


                <table>
                    <thead>
                    <tr>
                        <th>first name</th>
                        <th>last name</th>
                        <th>email</th>

                        <th colSpan="2">
                            {this.state.blocked ? <p>добавить</p> : <a href="javascript:void(0);"
                                                                       onClick={() => this.setState({
                                                                           addBlockOn: true, blocked: true
                                                                       })}>добавить</a>}
                        </th>

                    </tr>
                    </thead>

                    <tbody>
                    {this.state.filteredRows.map((row, id) => {
                        return <tr key={id}>

                            <td>{row.firstName}</td>
                            <td>{row.lastName}</td>
                            <td>{row.email}</td>

                            <td>
                                {this.state.blocked ? <p>ред.</p> : <a href="javascript:void(0);" onClick={
                                    () => this.setState(
                                        {
                                            editBlockOn: true,
                                            blocked: true,
                                            dispatchRow: {rowIdInArray: id, row: row}
                                        }
                                    )}>ред.</a>}
                            </td>


                            <td>
                                {this.state.blocked ? <p>уд.</p> : <a href="javascript:void(0);" onClick={
                                    () => this.setState(
                                        {
                                            deleteBlockOn: true,
                                            blocked: true,
                                            dispatchRow: {rowIdInArray: id, row: row}
                                        }
                                    )}>уд.</a>}
                            </td>

                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    state => ({elements: state.rows}),
    dispatch => ({
        addRow: row => dispatch({type: StoreCommands.ADD_ROW, payload: row}),
        updateAll: arr => dispatch({type: StoreCommands.UPDATE_ALL_ROWS, payload: arr}),
        updateRow: (arrID, row) => dispatch({type: StoreCommands.UPDATE_ROW, id: arrID, payload: row}),
        removeRow: arrayId => dispatch({type: StoreCommands.DELETE_ROW, id: arrayId})
    })
)(Page);
