import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export default class Registration extends Component {
  render(){
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }} style={styles.wrapper}>
        <StatusBar backgroundColor="rgba(255, 255, 255, 1)" barStyle={'dark-content'} />
        <View>
          <View style={styles.label}>
            <Text style={styles.textLabel}>Регистрация</Text>
          </View>
          <View>
            <Input
              placeholder={'Введите ваше имя'}
            />
            <Input
              placeholder={'Введите вашу фамилию'}
            />
            <Input
              placeholder={'Введите ваш номер'}
            />
            <Input
              placeholder={'Придумайте пароль'}
              isPassword
            />
            <Input
              placeholder={'Повторите пароль'}
              isPassword
            />
            <Text style={styles.description}>длина пароля минимум 6 символов</Text>
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <TouchableOpacity style={styles.loginLink} onPress={() => this.props.navigation.replace('LoginStack')}>
            <Text style={styles.description}>Уже зарегистрированы? <Text style={[styles.description, styles.link]}>Войдите</Text></Text>
          </TouchableOpacity>
          <Button 
            text={this.props.route.params?.code ? 'Зарегистрироваться' : 'Далее'}
            active={true}
            onPress={() => {this.props.route.params?.code ? this.props.navigation.replace('OnboardingStack') : this.props.navigation.navigate('Key')}}
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
  description: {
    fontSize: 12,
    color: '#6E7191',
    fontFamily: "ProximaSoft-Regular",
    letterSpacing: 0.5,
    lineHeight: 18,
  },
  loginLink: {
    alignItems: 'center',
  },
  link: {
    color: '#702DFF',
    fontFamily: "ProximaSoft-Bold",
    letterSpacing: 0.75,
  }
});