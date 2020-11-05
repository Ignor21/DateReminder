import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Button extends React.PureComponent {
  render() {
    return (
      <View opacity={this.props.active ? 1 : 0.2} style={styles.wrapper}>
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Text style={styles.text}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 40
  },
  button: {
    backgroundColor: '#702DFF',
    width: '100%',
    height: 64,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowColor: '#702DFF'
  },
  text: {
    color: '#F7F7FC',
    fontSize: 18,
    fontFamily: "ProximaSoft-Bold",
    letterSpacing: 1,
    lineHeight: 28,
  }
});