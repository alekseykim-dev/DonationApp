import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  image: {
    width: horizontalScale(300),
    height: verticalScale(280),
    borderRadius: horizontalScale(25),
    //store width
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(13),
    left: horizontalScale(10),
  },
  donationInformation: {
    marginTop: verticalScale(16),
  },
  price: {
    marginTop: verticalScale(5),
  },
});

export default style;
