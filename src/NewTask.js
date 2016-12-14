import React, {Component} from 'react';
import {Col, Row, Button} from 'react-bootstrap';

class NewTask extends Component {

    render() {
        return (
            <Col md={4} mdOffset={1}>
                <Row>
                    <section id="newTask" className={this.props.hideShow}>
                        <h4> Dodaj nowe zadanie</h4>
                        <form onSubmit={this.props.addTask}>
                            <div className="form-group custom-margin-top">
                                <input id="taskName" className="form-control" type="text" placeholder="Nazwa zadania"/>
                            </div>
                            <div className="form-group">
                                <textarea id="taskDesc" className="form-control" type="text" placeholder="Opis zadania"></textarea>
                            </div>
                            <Button type="submit" className="btn btn-info" id="addTaskButton" title="Dodaj nowe zadanie">
                            <span className="glyphicon glyphicon-plus"></span> Dodaj zadanie
                            </Button>

                        </form>
                    </section>
                </Row>
            </Col>
        );
    }
}

export default NewTask;
