import React, { Component } from 'react';


export default class GridBox extends Component {


    /**
    * component needs the following props:
    * text: String
    * closeable: Boolean
    * style: StyleSheet
    */
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
        }
    }

    updateState = (newtext) => {
        this.setState({
            text: newtext,
        });
    }

    componentWillReceiveProps = (newprops) => {
        this.setState({
            text: newprops.text,
        });
    }



    render() {
        return (
            <div style={styles.border}>

                <p style={{'padding-left': '5px'}}>{this.state.text}</p>

            </div>
        );
    }

}

const styles = {
    border: {
        flex: 1,
        maxWidth: 200,
        backgroundColor: '#F9CE3C',
        'border-style': 'solid',
        borderRadius: 10,
        borderColor: '#333333',
        borderWidth: 2,
        justifyContent: 'center',
        'padding-top': '10px',
    }
};
