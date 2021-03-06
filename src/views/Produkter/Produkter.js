import React, { Component } from 'react';

import TouchableBlock from './TouchableBlock';
import MaterialDetail from './MaterialDetail';
import { API_URL_NO } from '../../env.js';

export default class Produkter extends Component {
    /**
    * @param props
    * @return setState
    */
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            materialTopics: [{id: 0, tagline: "Toggle material 1 items", ingress: "material one"},
                        {id: 1, tagline: "Toggle material 2 items", ingress: "material two"},
                        {id: 2, tagline: "Toggle material 3 items", ingress: "material tree"}],
            // this is where the data from the API will be. Make sure that the data in the API
            // is formatted properly, so it can be displayed in a good way!
            material: [],
            visible1: true,
            data: [],
            refreshing: false,
            ismaterialDetailViewActived: false,
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.getmaterial = this.getmaterial.bind(this);
        this.listTouchableBlock = this.listTouchableBlock.bind(this);
        this.setActiveMaterialDetailView = this.setActiveMaterialDetailView.bind(this);
        this.activeView = this.activeView.bind(this);
    }

    /**
    * @return bool state false
    */
    _onRefresh() {
        this.setState({ refreshing: true });
        // temporary -----
        this.setState({
          ismaterialDetailViewActived: false
        });
        this.fetchData().then(() => {
            this.setState({ refreshing: false });
        });
    }
    /**
    * @return object data
    */
    componentWillMount() {
        this.fetchData();
    }
    /**
    * @return bool
    * This switch the condition of ismaterialDetailViewActived on and off
    */
    setActiveMaterialDetailView(e) {
        e.preventDefault()
          this.setState({
            ismaterialDetailViewActived: !this.state.ismaterialDetailViewActived
          });
    }
    /**
    * @return object data
    */
    fetchData = async () => {
        fetch(`http://127.0.0.1:8000/excel/30/`)
            .then(response => response.json())
            .then(responseData => {
                this.setState({ data: responseData });
                this.getmaterial();
            })
            .catch(error => {
                console.log(error);
            });
    }
    /**
    * @return return array
    */
    getmaterial() {
        let ids = [];
        // material "144029"
        let materialArr = [];

        for (let i = 0; i < this.state.data.length; i++) {
            // add items to material array
            if (i < 5) {
                materialArr.push(this.state.data[i].designation);
            }

            ids.push(this.state.data[i].id);
        }
        this.setState({
            material: materialArr,
        });
    }

    /**
    * @return TouchableBlock[...]
    */
    listTouchableBlock() {
        const listTouchableBlock = this.state.materialTopics.map((topic, i) =>
            <TouchableBlock key = {i} materialTopic={topic}
            visible={this.state.visible1}
            material={this.state.material}
            order={i}
            setActiveMaterialDetailView={this.setActiveMaterialDetailView}/>
        );
        return listTouchableBlock;
    }

    activeView() {
        return this.state.ismaterialDetailViewActived
          ? <MaterialDetail />
          : this.listTouchableBlock();
    }

    render() {
        return (
            <div style={styles.container,{'padding-bottom': '50px'}}>
                {this.state.isMaterialDetailViewActived &&
                    <img style={styles.img}
                        src={require('../../images/arrow_opened.png')}
                        alt='arrow opened'
                    />
                }
                {/* Depending on what condition ismaterialDetailViewActived is
                    it will show different view (MaterialDetail or TouchableBlock)*/}
                {this.state.ismaterialDetailViewActived
                  ? <MaterialDetail />
                  : this.listTouchableBlock()}
            </div>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      position: 'absolute',
      left: 10,
      top: 40,
      width: 40,
      zIndex: 1,
    },
    img: {
        height: 30,
        width: 30,
    },
};
