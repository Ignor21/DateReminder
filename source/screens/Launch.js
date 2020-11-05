import React, {Component} from 'react';
import { StatusBar } from 'react-native';

export default class Launch extends Component {
  componentDidMount(){
    this.props.navigation.navigate('Welcome')
  }
  render(){
    return (
      <StatusBar backgroundColor="rgba(255, 255, 255, 1)" barStyle={'dark-content'} />
    );
  }
}