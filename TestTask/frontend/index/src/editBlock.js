import React, {Component} from 'react';
import ajax from "./ajax";

class EditBlock extends Component {

    send() {
        ajax('/user', 'PUT', JSON.stringify({
            id: this.props.data.row.id,
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value
        }), true).then((row) => {
            this.props.callback(this.props.data.rowIdInArray, JSON.parse(row));
            this.props.close()
        });
    }


    render() {
        return <div className="block form-inline">

            <div className="closeSymbol"><a onClick={() => this.props.close()}
                                            href="javascript:void(0);">&times;</a></div>

            <input className="form-control" ref="firstName" placeholder='first name'
                   defaultValue={this.props.data.row.firstName}/>

            <input className="form-control" ref="lastName" placeholder='second name'
                   defaultValue={this.props.data.row.lastName}/>

            <input className="form-control" ref="email" placeholder='email'
                   defaultValue={this.props.data.row.email}/>

            <button className="btn btn-danger" onClick={this.send.bind(this)}>изменить</button>
        </div>
    }
}

export default EditBlock;