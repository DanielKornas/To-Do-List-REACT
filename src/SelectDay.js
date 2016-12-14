import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class SelectDay extends Component {

    render() {
        return (
            <Row className={this.props.startView}>
                <Col md={6} mdOffset={3}>
                    <select className="form-control" id="daysList" onChange={this.props.changeDay}>
                        <option id="selectHide" selected className={this.props.showHide}>Wybierz dzień...</option>
                        <option value="monday">Poniedziałek</option>
                        <option value="tuesday">Wtorek</option>
                        <option value="wednesday">Środa</option>
                        <option value="thursday">Czwartek</option>
                        <option value="friday">Piątek</option>
                        <option value="saturday">Sobota</option>
                        <option value="sunday">Niedziela</option>
                    </select>
                </Col>
            </Row>
        )
    }

};

export default SelectDay;
