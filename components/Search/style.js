import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  searchInput: {
    // borderWidth: 1,
    flex: 1,
    marginLeft: horizontalScale(6),
    // height: '100%',
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 14,
    color: '#686C7A',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: 'transparent',
    height: 50,
    borderRadius: horizontalScale(10)
  },
});

export default style;
