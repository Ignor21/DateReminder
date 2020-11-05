import React, {Component} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, StatusBar } from 'react-native';
import Dot4 from '../../assets/confetti/Dot4.svg';
import Dot5 from '../../assets/confetti/Dot5.svg';
import Dot6 from '../../assets/confetti/Dot6.svg';
import Square4 from '../../assets/confetti/Square4.svg';
import Square5 from '../../assets/confetti/Square5.svg';
import Ribbon1 from '../../assets/confetti/Ribbon1.svg';
import Arch3 from '../../assets/confetti/Arch3.svg';
import Circle3 from '../../assets/confetti/Circle3.svg';

export default class LogoConfirm extends Component {
  render(){
    return (
      <View style={styles.wrapper}>
        <StatusBar backgroundColor="#702DFF" barStyle={'light-content'} />
        <View style={styles.wrapper}>
          <Image
            style={{width: 145, height: 150, marginTop: 50}}
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={styles.wrapper2}>
          <View style={styles.textView}>
            <Text style={styles.text}>Привет, Андрей!</Text>
          </View>
          <ActivityIndicator color={'#01BFFF'}/>
        </View>
        <View style={{position: 'absolute', top: '42%', left: '90%'}}>
          <Dot4 />
        </View>
        <View style={{position: 'absolute', top: '92%', left: '17%'}}>
          <Dot5 />
        </View>
        <View style={{position: 'absolute', top: '8%', left: '30%'}}>
          <Dot6 />
        </View>
        <View style={{position: 'absolute', top: '25%', left: '10%'}}>
          <Square4 />
        </View>
        <View style={{position: 'absolute', top: '87%', left: '75%'}}>
          <Square5 />
        </View>
        <View style={{position: 'absolute', top: '60%', left: '80%'}}>
          <Ribbon1 />
        </View>
        <View style={{position: 'absolute', top: '55%', left: '5%'}}>
          <Arch3 />
        </View>
        <View style={{position: 'absolute', top: '15%', left: '77%'}}>
          <Circle3 />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 2.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper2: {
    flex: 1,
    alignItems: 'center',
  },
  textView: {
    paddingBottom: 20
  },
  text: {
    color: '#F7F7FC',
    fontSize: 24,
    fontFamily: "ProximaSoft-ExtraBold",
    lineHeight: 36,
    letterSpacing: 1
  }
});