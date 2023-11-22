import React from 'react';
import style from './style';
import PropTypes from 'prop-types';
import {Pressable, Image, View} from 'react-native';
import Header from '../Header/Header';
import Badge from '../Badge/Badge';

const SingleDonationItem = props => {
  return (
    <Pressable
      onPress={() => {
        props.onPress(props.donationItemId);
      }}>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          resizeMode="cover"
          source={{uri: props.uri}}
          style={style.image}
        />
      </View>
      <View style={style.donationInformation}>
        <Header
          title={props.donationTitle}
          type={3}
          color={'#0A043C'}
          numberOfLines={1}
        />
        <View style={style.price}>
          <Header title={`₩${props.price}`} type={3} color={'#156CF7'} />
        </View>
      </View>
    </Pressable>
  );
};

SingleDonationItem.defaultProps = {
  onPress: () => {},
};
SingleDonationItem.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};
export default SingleDonationItem;
