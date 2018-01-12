import React, {Component} from 'react';

export default class HouseType extends Component {
    constructor(props) {
        super(props);

        this.state = {
            antalPiper: null,
            totalHeight: null,
            heightAboveRoof: null,
            roofAngle: null,

            tillMone: null,
            franMone: null,

            calcValue: null,
        }
    }



    render() {
        return (
            <div>
                <div>
                    <div><img style={styles.houseImage} src={require('../../images/hus-skiss.png')} /></div>
                </div>

                <div>
                    <div>
                        <p>antal piper:</p>
                        <input value={this.state.antalPiper} placeholder={0} type="number" onChange={(input) => this.setState({antalPiper: input.value})} />
                    </div>
                </div>

                <div>
                    <div>
                        <p>Höjd över tak (H2)</p>
                        <input value={this.state.heightAboveRoof} placeholder={0} type="number" onChange={(input) => this.setState({heightAboveRoof: input.value})} />
                        <p>mm</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Total Höjd (H1)</p>
                        <input value={this.state.totalHeight} placeholder={0} type="number" onChange={(input) => this.setState({totalHeight: input.value})} />
                        <p>mm</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Takvinkel (V)</p>
                        <input value={this.state.roofAngle} placeholder={0} type="number" onChange={(input) => this.setState({roofAngle: input.value})} />
                        <p>grader</p>
                    </div>
                </div>

                <h2>Beräkna total höjd (H1) och höjd över taket (h2)</h2>

                <div>
                    <div>
                        <p>Höjd till mone (A4)</p>
                        <input value={this.state.tillMone} placeholder={0} type="number" onChange={(input) => this.setState({tillMone: input.value})} />
                        <p>mm</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Avstånd från mone</p>
                        <input value={this.state.franMone} placeholder={0} type="number" onChange={(input) => this.setState({franMone: input.value})} />
                        <p>mm</p>
                    </div>
                </div>

                <div>
                    <button >Beräkna</button> {/* does nothing so far */}
                    <p>{this.state.calcValue} mm</p>
                </div>

            </div>
        );

    }
}

let styles = {
    houseImage: {
        width: 400,
        height: 300,
    }
}
