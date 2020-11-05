import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export default class Login extends Component {
  render(){
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }} style={styles.wrapper}>
        <StatusBar backgroundColor="rgba(255, 255, 255, 1)" barStyle={'dark-content'} />
        <View>
          <View style={styles.label}>
            <Text style={styles.textLabel}>Вход</Text>
          </View>
          <View style={styles.form}>
            <Input
              placeholder={'Введите номер телефона'}
            />
            <Input
              placeholder={'Введите пароль'}
              isPassword
            />
          </View>
          <TouchableOpacity style={styles.loginLink} onPress={() => this.props.navigation.replace('RestoreStack')}>
            <Text style={[styles.description, styles.link]}>Забыли пароль?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginLink} onPress={() => this.props.navigation.replace('RegistrationStack')}>
            <Text style={styles.description}>Впервые тут? <Text style={styles.link}>Зарегистрируйтесь</Text></Text>
          </TouchableOpacity>
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
  form: {
    paddingTop: 70,
    paddingBottom: 30
  },
  description: {
    fontSize: 16,
    color: '#6E7191',
    fontFamily: "ProximaSoft-Regular",
    letterSpacing: 0.75,
    lineHeight: 20,
  },
  loginLink: {
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10
  },
  link: {
    color: '#702DFF',
    fontFamily: "ProximaSoft-Bold",
  }
});