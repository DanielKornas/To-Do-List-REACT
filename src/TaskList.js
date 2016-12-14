import React, {Component} from 'react';
import Task from './Task.js';
import {Col, Row, Button} from 'react-bootstrap';

class TaskList extends Component {
    printTasks(){
        window.print(); // drukowanie zadan 
    }
    render() {
        let numberOfAllTasks = this.props.tasks.monday.length + this.props.tasks.tuesday.length + this.props.tasks.wednesday.length + this.props.tasks.thursday.length + this.props.tasks.friday.length + this.props.tasks.saturday.length + this.props.tasks.sunday.length;
        let dailyTasks = this.props.tasks[this.props.selectedDay]; // przypisuję do zmiennej liste zadań w wybranym dniu, zeby to potem zmapowac bez problemu
        switch (this.props.selectedDay) {
            case "defaultValue": // dla domyslnego widoku, przed wybraniem dnia wyswietlam pusta liste
                return (
                    <ul></ul>
                );
                break;
            default:
                return (
                    <Col md={7}>
                        <div id="tasksTofinish">
                            Ilość dzisiejszych zadań:
                            <span id="counter"> {dailyTasks.length} </span>
                            <button onClick= {this.printTasks} type="button" className="btn btn-default btn-xs" title="Drukuj wszystkie zadania z tego dnia">
                                <span className="glyphicon glyphicon-print"></span>
                            </button>
                        </div>
                        <span id="allBox">Wszystkich zadań:
                            <span id="allTaskcounterBox"> {numberOfAllTasks}</span>
                        </span>
                        <ul id="taskList" className="list-group custom-margin-top">
                            {dailyTasks.map((task, index) => {
                                return <Task key={index} ref={index} name={task.name} desc={task.desc} deleteSingleTask={() => this.props.deleteSingleTask(index)}/>
                            })}
                            <Button onClick={this.props.deleteAllTasks} className="btn btn-default btn-default pull-right" title="Usuń wszystkie zadania z tego dnia" id="removeAlltasksButton">
                                <span className="glyphicon glyphicon-minus"></span> Usuń wszystko
                            </Button>

                        </ul>
                    </Col>
                );

        }

    }
}

export default TaskList;
