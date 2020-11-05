import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { DatePicker } from 'react-native-wheel-pick';

export default class Birthdate extends Component {
  render(){
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }} style={styles.wrapper}>
        <StatusBar backgroundColor="rgba(255, 255, 255, 1)" barStyle={'dark-content'} />
        <View>
          <View style={styles.label}>
            <Text style={styles.textLabel}>Ваш День Рождения</Text>
            <Text style={styles.description}>Введите дату своего Дня Рождения</Text>
          </View>
          <DatePicker
            style={{ backgroundColor: 'white', height: 215, marginVertical: 50 }}
            labelUnit={
              {date: '', month: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], year: ''}
            }
            minimumDate={new Date('1900-01-01')}
            maximumDate={new Date('2020-12-31')}
            date={new Date('1994-08-19')}
            onDateChange={date => { }}
            order={'D-M-Y'}
            textColor={'#4F0BCD'}
            textSize={23}
          />
          <View style={styles.green}>
            <Text style={styles.greenText}>Также, в личном кабинете Вы сможете добавить дату Дней Рождения супруги/супруга</Text>
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <Button 
            text={'Далее'}
            active={true}
            onPress={() => this.props.navigation.navigate('Interest')}
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
    lineHeight: 18,
    letterSpacing: 0.5,
    fontFamily: "ProximaSoft-Regular",
    marginTop: 5
  },
  green: {
    backgroundColor: '#F3FDFA',
    padding: 25,
    marginBottom: 40
  },
  greenText: {
    color: '#00966D',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    textAlign: 'center',
    fontFamily: "ProximaSoft-Regular",
  }
});