import React, {Component} from 'react';
<<<<<<< Updated upstream
import {Row, Col, Table} from 'reactstrap';
=======
>>>>>>> Stashed changes
// https://github.com/Hacker0x01/react-datepicker
// only works on the latest browsers
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'

import ObjectSummarizer from '../PricePage/ObjectSummarizer';

export default class OrderPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rowItems: this.props.propState.rowItems,
            kranbil: this.props.propState.kranbil,
            plukket: this.props.propState.plukket,
            kjorer: this.props.propState.kjorer,

            beskjed: this.props.propState.beskjed,
            startDate: this.props.propState.startDate,


        }
    }

    kranbil = async () => {
        await this.setState({
            kranbil: !this.state.kranbil,
        });
        this.callback();
    }
    plukket = async () => {
        await this.setState({
            plukket: !this.state.plukket,
        });
        this.callback();
    }
    kjorer = async () => {
        await this.setState({
            kjorer: !this.state.kjorer,
        });
        this.callback();
    }

    sendCallback = async (state) => {
        await this.setState({
            rowItems: state.rowItems
        });
        this.setTotalSum();
    }

    setTotalSum = async () => {
        let netto = 0;
        let rowItems = this.state.rowItems;
        for(let i = 0; i < this.state.rowItems.length; i++) {
            netto += rowItems[i].sum
        }
        let moms = netto / 4;
        // if moms is NaN, make it 0
        // should only be needed to be done when first browsing the page
        moms = moms ? moms : 0;

        let total = netto + moms;
        // if total is NaN, make it 0
        // should only be needed to be done when first browsing the page
        total = total ? total : 0;

        await this.setState(previousState => {
            return {
                nettoSum: netto,
                totalSum: total,
                moms: moms,
            }

        });
        this.callback();
    }

    // method that is run when changing date
    handleChangeDate = async (date) => {
        await this.setState({
            startDate: date,
        });
        this.callback();
    }

    // runs the callback from the parent (Prisforslag.js)
    callback = () => {
        this.props.parentCallback(this.state);
    }

    render() {
        return (
<<<<<<< Updated upstream
            <div style={{'padding-bottom': '50px'}}>
            
                <ObjectSummarizer
                    propState={this.state}
                    parentCallback={this.sendCallback}/>

                <Row style={{paddingBottom: 10,}}>
                    <Col md={{size: 4}}>
                        <input style={{'width': '100%',}} value={this.state.totalRabatt} type="number" placeholder={'Rabatt på totalsumma (%)'} onChange={async (input) => {this.setState({totalRabatt: input.target.value});this.callback();}} />
                    </Col>
                    <Col md={{ offset: 1, size: 4}}>
                        <input style={{'width': '100%',}} value={this.state.frakt} type="number" placeholder={'Frakt (kr)'} onChange={async (input) => {this.setState({frakt: input.target.value});this.callback();}} />
                    </Col>
                    <Col md={{offset: 1, size: 1}}>
                        <div style={styles.discountButton}>
                            <img style={styles.icons} src={require('../../images/icons/round-arrow.png')} alt='refreshing' />
                        </div>
                    </Col>
                    <Col md={1}>
                        <div style={styles.discountButton}>
                            <img style={styles.icons} src={require('../../images/add.png')} alt='refreshing' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={5.5}>
                        <label className='borderBottom'>
                            <label style={{'width': '190px', 'padding-right': '10px',}}>NETTO</label>
                            <div style={{'float': 'right',}}>
                                <label style={{'padding-right': '5px'}}> {this.state.nettoSum} </label>
                                <label style={{'padding-left': '5px'}}>kr</label>
                            </div>
                        </label>
                    </Col>
                    <Col md={{offset: 1, size: 5.5 }}>
                        <label className='borderBottom'>
                            <label style={{'width': '190px', 'padding-right': '10px',}}>MOMS (25%)</label>
                            <div style={{'float': 'right',}}>
                                <label style={{'padding-right': '5px'}}> {this.state.moms} </label>
                                <label style={{'padding-left': '5px'}}>kr</label>
                            </div>
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col md={5.5}>
                        <label className='borderBottom'>
                            <label style={{'width': '190px', 'padding-right': '10px',}}>SUM</label>
                            <div style={{'float': 'right',}}>
                                <label style={{'padding-right': '5px'}}> {this.state.totalSum} </label>
                                <label style={{'padding-left': '5px'}}>kr</label>
                            </div>
                        </label>
                    </Col>
                    <Col md={{offset: 1, size: 5.5 }}>
                    </Col>
                </Row>

                <Row className='borderBottom'>
                    <Col md={4}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.kranbil} style={styles.checkbox} onChange={this.kranbil} />
                            Leveres med kranbil
                        </label>
                    </Col>
                    <Col md={4}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.plukket} style={styles.checkbox} onChange={this.plukket} />
                            Plukket
                        </label>
                    </Col>
                    <Col md={4}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.kjorer} style={styles.checkbox} onChange={this.kjorer} />
                            Kjører
                        </label>
                    </Col>
                </Row>

                <Row>
                    <Col md={5.5}>
                        <label className='borderBottom'>
                            <label style={{'width': '190px', 'padding-right': '10px',}}>DATO:</label>
                            {moment().format('ll')}
                            <div style={{'float': 'right',}}>
                                <label style={{'padding-right': '5px'}}></label>
                                <label style={{'padding-left': '5px'}}></label>
                            </div>
                        </label>
                    </Col>
                    <Col md={{offset: 1, size: 5.5 }}>
                        <label className='borderBottom'>
                            <label style={{'width': '190px', 'padding-right': '10px',}}>Ønsket leveringsdato:</label>
                            <DatePicker
                              selected={this.state.startDate}
                              onChange={this.handleChangeDate}
                              minDate={moment()}
                              maxDate={moment().add(21, "days")} />
                            <div style={{'float': 'right',}}>
                                <label style={{'padding-right': '5px'}}></label>
                                <label style={{'padding-left': '5px'}}></label>
                            </div>
                        </label>
                    </Col>
                </Row>

                <Row className='borderBottom'>
                    <Col md={2}>
                        <label style={{'padding-right': '10px',}}>BESKJED</label>
                    </Col>
                    <Col md={10}>
                        <textarea style={{'width': '100%', 'float': 'right', 'height': '30px', 'resize': 'none'}}
                                  value={this.state.andre}
                                  type="text"
                                  onChange={async (input) => {this.setState({beskjed: input.target.value});this.callback();}}>
                        </textarea>
                    </Col>
                </Row>

                <Row>
                    <Col md={{size: 5.5}}>
                        <div>
                            <div style={styles.receiptButton}>
                                <img style={styles.image} src={require('../../images/save.png')} alt='save order' />
                                <p style={{fontSize: 24, 'text-align': 'center',}}> Lagre tillbud </p>
                            </div>
                            <div style={styles.receiptButton}>
                                <p style={{fontSize: 24, 'text-align': 'center',}}>Save as PDF</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={{ offset: 1, size: 5.5 }}>
                        <div>
                            <div style={styles.receiptButton}>
                                <img style={styles.image} src={require('../../images/printer.png')} alt='Print' />
                                <p style={{fontSize: 24, 'text-align': 'center',}}> Skriv ut </p>
                            </div>
                            <div style={styles.receiptButton}>
                                <p style={{fontSize: 24, 'text-align': 'center',}}>Send PDF med e-post</p>
                            </div>
                        </div>
                    </Col>
                </Row>
=======
            <div>
                <div>
                    <div>
                        <h3>NOBBNUMMBER</h3>
                    </div>
                    <div>
                        <h3>BESKRIVELSE</h3>
                    </div>
                    <div>
                        <h3>ANTALL</h3>
                    </div>
                    <div>
                        <h3>PRIS</h3>
                    </div>
                    <div>
                        <h3>SUM</h3>
                    </div>
                    <div>
                        <h3>RABATT (%)</h3>
                    </div>
                </div>

                <div>
                    <ObjectSummarizer
                        propState={this.state}
                        parentCallback={this.sendCallback}/>

                </div>

                <div>
                    <div>
                        <p>Netto</p>
                        <p>{this.state.nettoSum}</p>
                        <p>kr</p>
                    </div>

                    <div>
                        <p>Moms (25%)</p>
                        <p>{this.state.moms}</p>
                        <p>kr</p>
                    </div>

                    <div>
                        <p>Sum</p>
                        <p>{this.state.totalSum}</p>
                        <p>kr</p>
                    </div>

                </div>

                <div>
                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.kranbil} onChange={this.kranbil} />
                            Leveres med kranbil
                        </label>
                    </div>

                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.plukket} onChange={this.plukket} />
                            Plukket
                        </label>
                    </div>

                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.kjorer} onChange={this.kjorer} />
                            Kjører
                        </label>
                    </div>

                </div>


                <div>
                    <label>
                        DATO:
                    </label>
                    {moment().format('ll')}
                </div>

                <div>
                    <label>
                        Ønsket leveringsdato:
                    </label>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChangeDate}
                        minDate={moment()}
                        maxDate={moment().add(21, "days")} />
                </div>

                <div>
                    <label>
                        beskjed
                        <input type="text" value={this.state.beskjed} onChange={async (input) => {await this.setState({beskjed: input.target.value});this.callback();}} />
                    </label>
                </div>

                <div>
                    <div>
                        <img src={require('../../images/save.png')} alt='save order' />
                        <p> Lagre tillbud </p>
                    </div>
                    <div>
                        <p>Save as PDF</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={require('../../images/printer.png')} alt='Print' />
                        <p> Skriv ut </p>
                    </div>
                    <div>
                        <p>Send PDF med e-post</p>
                    </div>
                </div>

>>>>>>> Stashed changes

            </div>

        );

    }
}
<<<<<<< Updated upstream


const styles = {
    image: {
        'max-width': '30%',
        'height': 'auto',
        'display': 'block',
        'cursor': 'pointer',
        'cursor': 'hand',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'padding-bottom': '1%',
    },
    icons: {
        height: 21,
        width: 21,
        'margin-left': '5px',
        'margin-top': '5px',
    },
    discountButton: {
        'border-style': 'solid',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        backgroundColor: '#F9CE3C',
        height: 35,
        width: 35,
    },
    receiptButton: {
        'max-width': '100%',
        'height': 'auto',
        'padding-top': '6%',
        backgroundColor: '#F9CE3C',
        'border-style': 'solid',
        borderRadius: 10,
        borderColor: '#333333',
        borderWidth: 4,
        'margin-top': '15px',
    },
    checkbox: {
        'margin-right': '5px',
    },
}
=======
>>>>>>> Stashed changes
