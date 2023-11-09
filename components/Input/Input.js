import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Input = props => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder ? props.placeholder : null}
        style={style.input}
        value={value}
        keyboardType={props.keyboardType}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(val);
        }}
        secureTextEntry={true}
      />
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

export default Input;
