import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    // marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: '100%',
    height: verticalScale(240),
    // borderRadius: horizontalScale(5),
  },
  badge: {
    marginBottom: verticalScale(16),
    marginHorizontal: horizontalScale(15),
  },
  name: {
    marginHorizontal: horizontalScale(15),
  },
  description: {
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(15),
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    marginBottom: verticalScale(10),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  like: {
    width: horizontalScale(70),
    borderWidth: 1,
    borderColor: 'thistle',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buy: {
    marginLeft: horizontalScale(10),
    width: horizontalScale(240),
  },
});

export default style;
