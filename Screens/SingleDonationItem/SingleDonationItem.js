import React from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, ScrollView, Image, View, Text} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleCoffeeShop = ({navigation, route}) => {
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
        <Header type={1} title={CoffeeShopInformation.name} />
        <Text style={style.description}>
          {CoffeeShopInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title={'커핀패스 구독하기'} />
      </View>
    </SafeAreaView>
  );
};

export default SingleCoffeeShop;
