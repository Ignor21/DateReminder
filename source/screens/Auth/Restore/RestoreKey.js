import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export default class RestoreKey extends Component {
  render(){
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }} style={styles.wrapper}>
        <StatusBar backgroundColor="rgba(255, 255, 255, 1)" barStyle={'dark-content'} />
        <View>
          <View style={styles.label}>
            <Text style={styles.textLabel}>Восстановление доступа</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.textView}>
              <Text style={styles.text}>Мы отправили вам письмо, проверьте свою электронную почту</Text>
            </View>
            <View>
              <Input
                placeholder={'Введите код из письма'}
              />
            </View>
          </View>
        </View>
        <View style={{marginVertical: 10}}>
        <TouchableOpacity style={styles.loginLink} onPress={() => this.props.navigation.replace('LoginStack')}>
            <Text style={styles.description}>Вспомнили пароль? <Text style={styles.link}>Войдите</Text></Text>
          </TouchableOpacity>
          <Button 
            text={'Далее'}
            active={true}
            onPress={() => this.props.navigation.navigate('RestorePassword')}
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