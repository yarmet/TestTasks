import React, {Component} from 'react';
import ajax from "./ajax";


class AddBlock extends Component {

    send() {
        ajax('/user', 'POST', JSON.stringify({
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value
        }), true)
            .then((row) => {
                this.props.callback(JSON.parse(row));
                this.props.close()
            })
    }

    render() {
        return <div className="block form-inline">
            <div className="closeSymbol"><a onClick={() => this.props.close()}
                                            href="javascript:void(0);">&times;</a></div>

            <input className="form-control" ref="firstName" placeholder='first name'/>
            <input className="form-control" ref="lastName" placeholder='last name'/>
            <input className="form-control" ref="email" placeholder='email'/>

            <button className="btn btn-danger" onClick={this.send.bind(this)}>добавить</button>
        </div>
    }
}

export default AddBlock;