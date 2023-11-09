import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  //console.log(email) // shows the input in the console
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <Input
          keyboardType={'email-address'}
          label={'Email'}
          placeholder={'Enter your email...'}
          onChangeText={value => setEmail(value)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
