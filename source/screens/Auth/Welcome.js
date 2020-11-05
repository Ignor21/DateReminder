import React, {Component} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, StatusBar } from 'react-native';
import Arch1 from '../../assets/confetti/Arch1.svg';
import Circle2 from '../../assets/confetti/Circle2.svg';
import Dot1 from '../../assets/confetti/Dot1.svg';
import Dot2 from '../../assets/confetti/Dot2.svg';
import Ribbon2 from '../../assets/confetti/Ribbon2.svg';
import Square2 from '../../assets/confetti/Square2.svg';

export default class Welcome extends Component {
  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.replace('RegistrationStack')
    }, 1000)
  }
  render(){
    return (
      <View style={styles.wrapper}>
        <StatusBar backgroundColor="rgba(255, 255, 255, 1)" barStyle={'dark-content'} />
        <View style={styles.wrapper}>
          <Image
            style={{width: 145, height: 150}}
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={styles.wrapper}>
          <View style={[styles.wrapper, styles.textView]}>
            <Text style={styles.bigText}>Добро пожаловать</Text>
            <Text style={styles.text}>Мобильное приложение, которое решает проблему запоминания дней рождений и выбора подарка имениннику.</Text>
          </View>
        </View>
        <View style={styles.wrapper}>
          <ActivityIndicator color={'#01BFFF'}/>
        </View>
        <View style={{position: 'absolute', top: '25%', left: '3%'}}>
          <Arch1 />
        </View>
        <View style={{position: 'absolute', top: '77%', left: '1%'}}>
          <Circle2 />
        </View>
        <View style={{position: 'absolute', top: '90%', left: '90%'}}>
          <Dot1 />
        </View>
        <View style={{position: 'absolute', top: '10%', left: '5%'}}>
          <Dot2 />
        </View>
        <View style={{position: 'absolute', top: '10%', left: '77%'}}>
          <Ribbon2 />
        </View>
        <View style={{position: 'absolute', top: '62%', left: '65%'}}>
          <Square2 />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigText: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: "ProximaSoft-ExtraBold",
  },
  text: {
    textAlign: 'center',
    lineHeight: 20,
    color: '#4E4B66',
    paddingVertical: 30,
    letterSpacing: 0.75,
    fontFamily: "ProximaSoft-Regular",
  },
  textView: {
    width: '75%'
  }
});