import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export default class RestorePassword extends Component {
  render(){
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }} style={styles.wrapper}>
        <StatusBar backgroundColor="rgba(255, 255, 255, 1)" barStyle={'dark-content'} />
        <View>
          <View style={styles.label}>
            <Text style={styles.textLabel}>Восстановление доступа</Text>
          </View>
          <View style={styles.main}>
            <Input
              placeholder={'Новый пароль'}
              isPassword
            />
            <Input
              placeholder={'Повторите новый пароль'}
              isPassword
            />
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <Button 
            text={'Войти'}
            active={true}
            onPress={() => this.props.navigation.replace('LoginConfirmStack')}
          />
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
  textLabel: {
    fontSize: 16,
    fontFamily: "ProximaSoft-Bold",
    letterSpacing: 1,
    lineHeight: 16,
  },
  description: {
    fontSize: 12,
    color: '#6E7191'
  },
  loginLink: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
    paddingVertical: 20
  },
  link: {
    fontWeight: 'bold',
  }
});