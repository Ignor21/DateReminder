import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import Button from '../../../components/Button';
import Access1 from '../../../assets/access1.svg';
import Access2 from '../../../assets/access2.svg';
import Access3 from '../../../assets/access3.svg';

export default class Access extends Component {

  renderItem(image, label, description) {
    return (
      <View style={styles.item}>
        <StatusBar backgroundColor="rgba(255, 255, 255, 1)" barStyle={'dark-content'} />
        <View style={styles.image}>
          {image}
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.accept}>Разрешить</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render(){
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }} style={styles.wrapper}>
        <View>
          <View style={styles.logo}>
            <Image
              style={{width: 103, height: 106}}
              source={require('../../../assets/logo.png')}
            />
            <Text style={styles.text}>Используй приложение на все <Text style={styles.perc}>100%</Text></Text>
          </View>
          {this.renderItem(<Access1 />, 'Не пропускай дни рождения', 'Чтобы загрузить Дни Рождения контактов нажмите “Разрешить”')}
          {this.renderItem(<Access2 />, 'Подготовься заранее', 'Чтобы заранее получать уведомления о Днях Рождениях контактов нажмите “Разрешить”')}
          {this.renderItem(<Access3 />, 'Принимайте подарки', 'Чтобы ваши друзья могли отправлять Вам подарок в День Рождения нажмите “Разрешить”')}
        </View>
        <View style={{marginVertical: 10}}>
          <Button 
            text={'Далее'}
            active={true}
            onPress={() => this.props.navigation.navigate('Birthdate')}
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
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontSize: 16,
    letterSpacing: 0.75,
    fontFamily: "ProximaSoft-Bold"
  },
  description: {
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 18,
    paddingVertical: 5,
    fontFamily: "ProximaSoft-Regular"
  },
  accept: {
    fontSize: 16,
    letterSpacing: 0.5,
    color: '#702DFF',
    lineHeight: 20,
    fontFamily: "ProximaSoft-Bold"
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 20
  },
  image: {
    flex: 1,
  },
  info: {
    flex: 3,
    alignItems: 'flex-start',
  },
  button: {
    borderWidth: 2,
    borderColor: '#702DFF',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 5
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    padding: 10,
    fontFamily: "ProximaSoft-Regular"
  },
  perc: {
    color: '#01BFFF',
    fontFamily: "ProximaSoft-Bold"
  }
});