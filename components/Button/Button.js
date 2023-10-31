import React from 'react';
import style from './style';
import {View, Text, Pressable} from 'react-native';
import Proptypes from 'prop-types';

const Button = props => {
  return (
    <Pressable
      disabled={props.isDisabled}
      style={[style.button, props.isDisabled && style.disabled]}
      onPress={() => props.onPress()}>
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

Button.default = {
  isDisabled: false,
  onPress: () => {},
};

Button.propTypes = {
  title: Proptypes.string.isRequired,
  isDisabled: Proptypes.bool,
  onPress: Proptypes.func,
};
export default Button;
