import React, {useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import Button from '../../components/Button/Button';
import Badge from '../../components/Badge/Badge';
import {horizontalScale} from '../../assets/styles/scaling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {useSelector, useDispatch} from 'react-redux';
import {resetToInitialState, updateFirstName} from '../../redux/reducers/User';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import {ScrollView} from 'react-native-gesture-handler';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
import {
  resetDonations,
  updateSelectedDonationId,
} from '../../redux/reducers/Donations';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  // console.log(user); // from store.js
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  //from store.js
  // console.log(categories)

  const [donationItems, setDonationItems] = useState([]);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;
  // dispatch(resetDonations());
  //reloads the store and dispatcehs the data
  //Works the same as the persistor.purge()  in store.js

  console.log(donationItems);
  useEffect(() => {
    console.log('Run category change function');
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
    // console.log(filteredItems); // shows only items that belong to 1 category
  }, [categories.selectedCategoryId]);

  // console.log('this is our current donations state', donations); // shows all the data about the category array

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  console.log(categoryList.length); // shows 4 and has 13 elements

  const pagination = (items, currentPage, pageSize) => {
    console.log(`Current Page is ${currentPage}`);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  return (
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
        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) return;
              console.log(
                'User has reached the end  Fetching page number',
                categoryPage,
              );
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}></FlatList>
        </View>
        {donationItems.length > 0 && (
          <View style={style.donationItemContainer}>
            {donationItems.map(value => {
              const categoryInformation = categories.categories.find(
                val => val.categoryId === categories.selectedCategoryId,
              );
              return (
                <View
                  key={value.donationItemId}
                  style={style.singleDonationItem}>
                  <SingleDonationItem
                    onPress={selectedDonationId => {
                      dispatch(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.SingleDonationItem, {
                        categoryInformation,
                      });
                      // console.log(selectedDonationId); shows the item's number
                    }}
                    uri={value.image}
                    donationItemId={value.donationItemId}
                    donationTitle={value.name}
                    price={parseFloat(value.price)}
                    badgeTitle={categoryInformation.name}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
