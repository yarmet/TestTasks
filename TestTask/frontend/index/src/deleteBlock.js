import React, {Component} from 'react';
import ajax from "./ajax";

class DeleteBlock extends Component {

    send() {
        ajax('/user', 'DELETE', JSON.stringify({id: this.props.data.row.id}), true)
            .then(() => {
                this.props.callback(this.props.data.rowIdInArray);
                this.props.close();
            })
    }

    render() {
        return <div className="removeBlock form-inline">

            <div className="closeSymbol">
                <a onClick={() => this.props.close()} href="javascript:void(0);">&times;</a>
            </div>

            <button className="btn btn-danger" onClick={this.send.bind(this)}>удалить?</button>
        </div>
    }
}

export default DeleteBlock;