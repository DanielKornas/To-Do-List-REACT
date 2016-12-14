import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import './App.css';
import update from 'react-addons-update';
import SelectDay from './SelectDay.js';
import TaskList from './TaskList.js';
import NewTask from './NewTask.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks: {
                "friday": [
                    {
                        "desc": "opis",
                        "name": "Friday 1"
                    }
                ],
                "monday": [
                    {
                        "desc": "Smaczny.",
                        "name": "Zrobić obiad"
                    }
                ],
                "saturday": [
                    {
                        "desc": "opis",
                        "name": "1saturday"
                    }
                ],
                "sunday": [
                    {
                        "desc": "opis",
                        "name": "1sunday"
                    }, {
                        "desc": "Jak niedziela to rosół.Vegan.",
                        "name": "Rosół"
                    }
                ],
                "thursday": [
                    {
                        "desc": "33333",
                        "name": "3thursday"
                    }
                ],
                "wednesday": [
                    {
                        "desc": "33333",
                        "name": "Srodazadanie1"
                    }, {
                        "desc": "Środowe zadanie numer dwa",
                        "name": "Zadanie 29999"
                    }
                ],
                "tuesday": [
                    {
                        "desc": "11",
                        "name": "1"
                    }
                ]
            },
            selectedDay: "defaultValue",
            showHide: "",
            hideShow: "hidden",
            startView: "startView"

        }

    };

    changeDay(event) { // funkcja na event onChange - wybranie dnia z menu
        this.setState({ // zmiana stanu po kliknieciu
            selectedDay: event.target.value, // selectedDay : wybrany dzien z menu
            showHide: 'hidden',
            hideShow: '',
            startView: ''
        });
    };
    deleteAllTasks() {
        let selectedDay = this.state.selectedDay;
        let newState = update(this.state, { // uzywam react-addons-update zeby moc pod klucz w stanie podstawic sobie zmienna, dynamicznie wpisac wartosc key

            tasks: {
                [selectedDay]: {
                    $set: []
                }
            }

        });
        this.setState(newState)
    };
    deleteSingleTask(id) {
        let selectedDay = this.state.selectedDay;
        this.state.tasks[selectedDay].splice(id, 1);
        this.forceUpdate();
    };

    addTask(event) {
        event.preventDefault();
        let form = event.target;
        let taskName = form.elements.taskName.value;
        let taskDesc = form.elements.taskDesc.value;
        let selectedDay = this.state.selectedDay;
        this.state.tasks[selectedDay].push({ // dodanie nazwy i opisu do bazy danych
            'name': taskName,
            'desc': taskDesc
        });
        this.forceUpdate();
        form.elements.taskName.value = ""; // resetowanie wartosci inputa
        form.elements.taskDesc.value = "";
    };

    render() {
        return (
            <div>
                <Row>
                    <a href="#">
                        <h1>to
                            <span className="color-1">do</span>
                            <span className="color-2">list</span>
                        </h1>
                    </a>
                </Row>
                <SelectDay selectedDay={this.state.selectedDay} changeDay={this.changeDay.bind(this)} showHide={this.state.showHide} startView={this.state.startView}/>
                <Row id="mainContentBox">
                    <TaskList tasks={this.state.tasks} selectedDay={this.state.selectedDay} deleteSingleTask={this.deleteSingleTask.bind(this)} deleteAllTasks={this.deleteAllTasks.bind(this)}/>
                    <NewTask hideShow={this.state.hideShow} addTask={this.addTask.bind(this)}/>
                </Row>
                <Row>
                    <div className="text-right">
                        <Button className={`btn btn-lg btn-success ${this.state.hideShow}`} title="Aktualizowanie zadań w bazie">Zapisz zmiany</Button>
                        <div className="alert alert-success custom-margin-top text-center">
                            <a href="#" className="close" data-dismiss="alert" aria-label="close">
                                &times;
                            </a>
                            Sukces! Dane zostały poprawnie zapisane w bazie danych.
                        </div>
                    </div>
                </Row>
                <footer className="row text-center">
                    <Col md={12}>
                        <p>Autor:
                            <a href="https://www.linkedin.com/in/danielkornas" title="Moj LinkedIn" target="_blank"> Daniel Kornas</a>. Informacja o projekcie:
                            <a href="#" title="Kod strony na Github" target="_blank"> Github</a>. Wykorzystano
                            <a href="http://glyphicons.com/" target="_blank"> Glyphicons</a>.
                        </p>
                    </Col>
                </footer>
            </div>
        );
    };

}

export default App;
