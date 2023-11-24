import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#8B0000',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(10),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    color: 'white',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
export default style;
