import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(5),
    marginHorizontal: horizontalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(22),
    // lineHeight: scaleFontSize(19),
    fontWeight: '600',
    color: '#636776',
  },
  mapDesc: {
    // marginTop: verticalScale(6),
    marginLeft: horizontalScale(20),
    marginBottom: verticalScale(5),
    fontSize: scaleFontSize(15),
    fontFamily: 'Inter',
    color: '#000',
    fontWeight: '600',
  },
  userName: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchBox: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
  categoryHeader: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(16),
    marginTop: verticalScale(6),
  },
  categories: {
    marginLeft: horizontalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  coffeeShopContainer: {
    marginTop: verticalScale(20),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  singleDonationItem: {
    width: '100%',
    marginBottom: verticalScale(23),
  },
  map: {
    // marginTop: verticalScale(5),
    width: '100%',
    height: verticalScale(350),
  },
});

export default style;
