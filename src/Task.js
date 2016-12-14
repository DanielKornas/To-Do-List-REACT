import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Task extends Component {
    render() {

        return (

            <li className="list-group-item clearfix">
                <h3>{this.props.name}</h3>
                <h4>{this.props.desc}</h4>
                <Button onClick={this.props.deleteSingleTask} type="button" className="btn btn-default btn-sm pull-right delete" title="Usuń to zadanie">
                    <span className="glyphicon glyphicon-minus"></span> Usuń
                </Button>
            </li>

        );
    }
}

export default Task;
