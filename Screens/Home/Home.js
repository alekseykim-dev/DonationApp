import React from 'react';
import style from './style';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Badge from '../../components/Badge/Badge';
import Tab from '../../components/Tab/Tab';
import {horizontalScale} from '../../assets/styles/scaling';
const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Donation App'} type={1} />
      {/* <Header title={'Donation App'} type={2} />
      <Header title={'Donation App'} type={3} /> */}
      {/* <View style={{width: horizontalScale(130)}}>
        <Tab title="Highlight" />
      </View> */}
      <Tab title="Highlight" />
      <Tab title="Highlight" isInactive={true} />
      <Badge title={'Environment'}/>

    </SafeAreaView>
  );
};

export default Home;
