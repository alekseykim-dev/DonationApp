import React from 'react';
import style from './style';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <Header title={'Donation App'} type={1} />
      {/* <Header title={'Donation App'} type={2} />
      <Header title={'Donation App'} type={3} /> */}
      <Button
        title="Donate"
        onPress={() => {
          console.log('pressed');
        }}
      />
      {/* <Button title='Donate' isDisabled={true}/> */}
    </SafeAreaView>
  );
};

export default Home;
