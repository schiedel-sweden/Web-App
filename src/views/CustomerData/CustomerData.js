import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';

export default class CustomerData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            company: this.props.propState.company,

            firstName: this.props.propState.firstName,
            surName: this.props.propState.surName,

            adress: this.props.propState.adress,
            postnumber: this.props.propState.postnumber,

            city: this.props.propState.city,
            country: this.props.propState.country,

            sameAsAbove: this.props.propState.sameAsAbove,

            receiver: this.props.propState.receiver,

            receiveAdress: this.props.propState.receiveAdress,
            receivePostnumber: this.props.propState.receivePostnumber,

            receiverCity: this.props.propState.receiverCity,
            receiverCountry: this.props.propState.receiverCountry,


        }
    }

    sameAsAbove = async () => {
        await this.setState({
            sameAsAbove: !this.state.sameAsAbove,
        });

        if(this.state.sameAsAbove) {
            await this.setState({
                receiver: this.state.firstName + " " + this.state.surName,

                receiveAdress: this.state.adress,
                receivePostnumber: this.state.postnumber,

                receiverCity: this.state.city,
                receiverCountry: this.state.country,

            });
        }
        this.callback();
    }
    callback = () => {
        this.props.parentCallback(this.state);
    }

    render() {
        return (
            <div style={{'padding-bottom': '50px'}}>
                <div>
                    <h2>Faktureringsadress</h2>
                </div>

                <div>
                    <form>
                        <Row style={{'padding-top': '20px'}}>
                            <Col>
                                <input style={styles.input} type="text" placeholder="Företag" name="company" value={this.state.company} onChange={async (text) => {await this.setState({company: text.target.value }); this.callback();}}/>
                            </Col>
                        </Row>
                        <Row style={{'padding-top': '20px'}}>
                            <Col md={5.5}>
                                <input style={styles.input} type="text" placeholder="Förnamn" name="firstName" value={this.state.firstName} onChange={async (text) => {await this.setState({firstName: text.target.value}); this.callback();}}/>
                            </Col>
                            <Col md={{ offset:1, size: 5.5}}>
                                <input style={styles.input} type="text" placeholder="Efternamn" name="surName" value={this.state.surName} onChange={async (text) => {await this.setState({surName: text.target.value}); this.callback();}}/>
                            </Col>
                        </Row>
                        <Row style={{'padding-top': '20px'}}>
                            <Col md={5.5}>
                                <input style={styles.input} type="text" placeholder="Adress" name="adress" value={this.state.adress} onChange={async (text) => {await this.setState({adress: text.target.value}); this.callback();}}/>
                            </Col>
                            <Col md={{ offset:1, size: 5.5}}>
                                <input style={styles.input} type="number" placeholder="Postnummer" name="postnumber" value={this.state.postnumber} onChange={async (text) => {await this.setState({postnumber: text.target.value}); this.callback();}}/>
                            </Col>
                        </Row>

                        <Row style={{'padding-top': '20px'}}>
                            <Col md={5.5}>
                                <input style={styles.input} type="text" placeholder="Stad" name="city" value={this.state.city} onChange={async (text) => {await this.setState({city: text.target.value}); this.callback();}}/>
                            </Col>
                            <Col md={{ offset:1, size: 5.5}}>
                                <input style={styles.input} type="text" placeholder="Land" name="country" value={this.state.country} onChange={async (text) => {await this.setState({country: text.target.value}); this.callback();}}/>
                            </Col>
                        </Row>
                        <Row style={{'padding-top': '20px', 'padding-bottom': '20px'}}>
                            <Col md={5.5}>
                                <input style={styles.input} type="number" placeholder="Telefonnummer" name="phonenumber" value={this.state.phonenumber} onChange={async (text) => {await this.setState({phonenumber: text.target.value}); this.callback();}}/>
                            </Col>
                            <Col md={{ offset:1, size: 5.5}}>
                                <input style={styles.input} type="email" placeholder="E-post" name="email" value={this.state.email} onChange={async (text) => {await this.setState({email: text.target.value}); this.callback();}}/>
                            </Col>
                        </Row>
                        {/* Make it so that the button does not reload page, or at least navigates back to the same place */}
                        <button>Submit</button>

                        <div style={{'padding-top': '40px'}}>
                            <Row>
                                <h3 style={{'padding-right': '40px'}}>Leveransadress</h3>
                                <label style={{'padding-top': '10px'}}>
                                    <input type="checkbox" defaultChecked={this.state.sameAsAbove} style={styles.checkbox}  onChange={this.sameAsAbove}/>
                                    Samma som faktureringsadress
                                </label>
                            </Row>
                        </div>

                        <Row style={{'padding-top': '20px'}}>
                            <Col>
                                <input style={styles.input} type="text" placeholder="Mottagare" name="receiver" value={this.state.receiver} onChange={async (text) => {await this.setState({receiver: text.target.value});this.callback();}} />
                            </Col>
                        </Row>
                        <Row style={{'padding-top': '20px'}}>
                            <Col md={5.5}>
                                <input style={styles.input} type="text" placeholder="Adress" name="receiveAdress" value={this.state.receiveAdress} onChange={(text) => this.setState({receiveAdress: text.target.value})} />
                            </Col>
                            <Col md={{ offset:1, size: 5.5}}>
                                <input style={styles.input} type="number" placeholder="Postnumber" name="receivePostnumber" value={this.state.receivePostnumber} onChange={(text) => this.setState({receivePostnumber: text.target.value})} />
                            </Col>
                        </Row>
                        <Row style={{'padding-top': '20px'}}>
                            <Col md={5.5}>
                                <input style={styles.input} type="text" placeholder="Stad" name="receiverCity" value={this.state.receiverCity} onChange={(text) => this.setState({receiverCity: text.target.value})} />
                            </Col>
                            <Col md={{ offset:1, size: 5.5}}>
                                <input style={styles.input} type="text" placeholder="Land" name="receiverCountry" value={this.state.receiverCountry} onChange={(text) => this.setState({receiverCountry: text.target.value})} />
                            </Col>
                        </Row>
                    </form>
                </div>
            </div>

        );

    }
}

const styles = {
    input: {
        'width': '100%',
        'border': '2px solid #585858',
        'border-radius': '4px',
        'padding-left': '5px',
    },
    checkbox: {
        'margin-right': '5px',
    },
};
