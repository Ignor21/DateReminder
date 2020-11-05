import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export default class Interest extends Component {

  renderItem(name) {
    return (
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    )
  }

  renderRow(item1, item2, item3) {
    return (
      <View style={styles.row}>
        {this.renderItem(item1)}
        {this.renderItem(item2)}
        {this.renderItem(item3)}
      </View>
    )
  }

  render(){
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }} style={styles.wrapper}>
        <StatusBar backgroundColor="rgba(255, 255, 255, 1)" barStyle={'dark-content'} />
        <View>
          <View style={styles.label}>
            <Text style={styles.textLabel}>Интересы</Text>
            <Text style={styles.description}>Выберите не больше трех интересов</Text>
          </View>
          <View style={styles.interests}>
            {this.renderRow('Электроника', 'Наука', 'Хобби')}
            {this.renderRow('Творчество', 'Музыка', 'Авто')}
            {this.renderRow('Электроника', 'Музыка', 'Авто')}
          </View>
        </View>
        <View>
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
  description: {
    fontSize: 12,
    color: '#6E7191',
    lineHeight: 18,
    letterSpacing: 0.5,
    fontFamily: "ProximaSoft-Regular",
    marginTop: 5
  },
  interests: {
    paddingVertical: 100
  },
  row: {
    flexDirection: 'row',
    marginVertical: 3,
    justifyContent: 'center'
  },
  item: {
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#01BFFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 5,
  },
  text: {
    color: '#0096B7',
    fontSize: 16,
    letterSpacing: 0.75,
    fontFamily: "ProximaSoft-Bold",
  }
});