import {Text, View, SafeAreaView, Button, FlatList} from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';

export default class Class extends Component {
  constructor(props) {
    console.log('constructor is running ');

    super(props);
    this.state = {
      name: 'pushpraj',
      singh: 'singh',
      count: 1,
      data: [],
    };
  }
  changeApi = () => {
    this.setState({name: 'raj'});
  };
  shouldComponentUpdate() {
    return true;
  }
  renderItem = ({item, index}) => {
    console.log(' you are inside render item');
    return (
      <View style={{borderWidth:1}}>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
      </View>
    );
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos?`).then(response => {
      this.setState({data: response.data});
    });
  }

  render() {
    // console.log('render running',this.state.data);
    return (
      // <View>
      //  <Text>{this.state.name}</Text>
      // <Button title="Press me" color="#f194ff" onPress={this.changeApi} />
      //  </View>
      <SafeAreaView>
        <FlatList data={this.state.data} renderItem={this.renderItem} />
      </SafeAreaView>
    );
  }
}
