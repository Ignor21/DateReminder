import React, {Component} from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export default class Key extends Component {
  render(){
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }} style={styles.wrapper}>
        <StatusBar backgroundColor="rgba(255, 255, 255, 1)" barStyle={'dark-content'} />
        <View>
          <View style={styles.label}>
            <Text style={styles.textLabel}>Подтверждение номера телефона</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.textView}>
              <Text style={styles.text}>Мы выслали смс с кодом на номер</Text>
              <Text style={[styles.text, {fontFamily: "ProximaSoft-Medium", marginTop: 10}]}>+79876543210</Text>
            </View>
            <View>
              <Input
                placeholder={'Введите код из СМС'}
              />
              <Text style={styles.description}>Отправить код повторно можно через <Text style={{fontFamily: "ProximaSoft-Bold", color: '#01BFFF'}}>43</Text> секунды</Text>
            </View>
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <TouchableOpacity style={styles.loginLink} onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.change}>Изменить номер</Text>
          </TouchableOpacity>
          <View>
            <Button 
              text={'Подтвердить'}
              active={true}
              onPress={() => this.props.navigation.navigate('Registration', {code: true})}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
  },
  main: {
    paddingTop: 70
  },
  label: {
    alignItems: 'center',
    paddingBottom: 15
  },
  textView: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    fontFamily: "ProximaSoft-Regular",
  },
  textLabel: {
    fontSize: 16,
    fontFamily: "ProximaSoft-Bold",
    letterSpacing: 1,
    lineHeight: 16,
  },
  description: {
    fontSize: 12,
    color: '#6E7191',
    fontFamily: "ProximaSoft-Regular",
    letterSpacing: 0.5,
    lineHeight: 18,
  },
  change: {
    color: '#702DFF',
    fontFamily: "ProximaSoft-Bold",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.75
  },
  loginLink: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
    paddingVertical: 20
  },
});