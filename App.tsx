
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';


const App = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 70,
          // fontWeight: '700',
          fontFamily: getFontFamily('Inter', '700'),
        }}>
        Font Check
      </Text>
    </SafeAreaView>
  );
};

export default App;
