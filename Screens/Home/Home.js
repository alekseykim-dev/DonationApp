import React from 'react';
import style from './style';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

const Home = () => {
  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <View>
        <Text>Check</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
