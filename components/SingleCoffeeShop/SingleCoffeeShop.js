import React from 'react';
import style from './style';
import PropTypes from 'prop-types';
import {Pressable, Image, View} from 'react-native';
import Header from '../Header/Header';
import Badge from '../Badge/Badge';

const SingleCoffeeShop = props => {
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
          type={2}
          color={'#0A043C'}
          numberOfLines={1}
        />
        <View style={style.price}>
          <Header title={`${props.price} 원`} type={3} color={'#8B0000'} />
          <Header
            title={`${props.quantity}장 남음`}
            type={3}
            color={'#8B0000'}
          />
        </View>
      </View>
    </Pressable>
  );
};

SingleCoffeeShop.defaultProps = {
  onPress: () => {},
};
SingleCoffeeShop.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};
export default SingleCoffeeShop;
