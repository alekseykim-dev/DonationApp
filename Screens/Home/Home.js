import React from 'react';
import {Pressable, SafeAreaView, Text, View, Image} from 'react-native';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Badge from '../../components/Badge/Badge';
import Tab from '../../components/Tab/Tab';
import {horizontalScale} from '../../assets/styles/scaling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {useSelector, useDispatch} from 'react-redux';
import {resetToInitialState, updateFirstName} from '../../redux/reducers/User';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import {ScrollView} from 'react-native-gesture-handler';
const Home = () => {
  const user = useSelector(state => state.user);
  // console.log(user); // from store.js
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories) 
  //from store.js
  // console.log(categories)
  return (
    // <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
    //   <Header title={`${user.firstName} ${user.lastName}`} />
    //   <Pressable
    //     onPress={() => {
    //       dispatch(updateFirstName({firstName: 'Roman'}));
    //     }}>
    //     <Text>Press to change first name</Text>
    //   </Pressable>
    //   {/* <Search
    //     onSearch={value => {
    //       console.log(value);
    //     }}
    //   /> */}
    //   {/* <Header title={'Donation App'} type={1} /> */}
    //   {/* <Header title={'Donation App'} type={2} />
    //   <Header title={'Donation App'} type={3} /> */}
    //   {/* <View style={{width: horizontalScale(130)}}>
    //     <Tab title="Highlight" />
    //   </View> */}
    //   {/* <Tab title="Highlight" />
    //   <Tab title="Highlight" isInactive={true} />
    //   <Badge title={'Environment'} />
    //   <FontAwesomeIcon icon={faSearch} /> */}
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       justifyContent: 'space-between',
    //       paddingHorizontal: horizontalScale(24),
    //     }}>
    //     <SingleDonationItem
    //       uri={
    //         'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
    //       }
    //       badgeTitle="Mexico"
    //       donationTitle={'Tree Cactus'}
    //       price={44}
    //     />
    //     <SingleDonationItem
    //       uri={
    //         'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
    //       }
    //       badgeTitle="Environment"
    //       donationTitle={'Home Cactus'}
    //       price={39}
    //     />
    //   </View>
    // </SafeAreaView>
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello,</Text>
            <View style={style.userName}>
              <Header title={`${user.firstName} ${user.lastName[0]}.👋`} />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={style.profileImage}
            resize={'contain'}
          />
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode="contain"
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
