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
    marginHorizontal: horizontalScale(17)
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(5),
    // marginHorizontal: horizontalScale(20)
  },
});

export default style;
