import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount(){
    this.myRef.current.setNativeProps(
      {style: {
        fontFamily: "ProximaSoft-Bold",
        fontSize: 16,
        letterSpacing: 0.75,
        lineHeight: 26,
      }}
    )
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          ref={this.myRef}
          style={styles.input}
          placeholder={this.props.placeholder}
          placeholderTextColor={'#A0A3BD'}
          secureTextEntry={this.props.isPassword}
        />
      </View>
    );
  }
}

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#EFF0F7',
    width: '100%',
    height: 64,
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginVertical: 8
  },
  input: {
    
  }
});