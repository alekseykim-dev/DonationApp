import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons'; // Import solid heart icon

const SingleCoffeeShop = ({navigation, route}) => {
  const [like, setLike] = useState(false);
  const CoffeeShopInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;
  console.log(route.params);
  //   console.log(donationItemInformation);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: CoffeeShopInformation.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <View style={style.name}>
          <Header type={1} title={CoffeeShopInformation.name} />
        </View>
        <Text style={style.description}>
          {CoffeeShopInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <View style={style.like}>
          <TouchableOpacity onPress={() => setLike(!like)}>
            <FontAwesomeIcon
              icon={like ? faSolidHeart : faHeart}
              size={23}
              color={like ? '#8B0000' : 'black'}
            />
          </TouchableOpacity>
        </View>
        <View style={style.buy}>
          <Button title={'커핀패스 구독하기'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SingleCoffeeShop;
