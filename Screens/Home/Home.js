import 'react-native-gesture-handler';
import React, {useEffect, useRef, useState} from 'react';
import NaverMapView, {
  Align,
  Marker,
  Path,
  Polyline,
  Circle,
  Polygon,
} from '../../components/Map';
import {PermissionsAndroid, Platform, TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {LayerGroup} from '../../components/map/index';
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
import SingleCoffeeShop from '../../components/SingleCoffeeShop/SingleCoffeeShop';
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
} from '../../redux/reducers/CoffeeShops';
import {Routes} from '../../navigation/Routes';
import Map from '../../components/Map/MapWeb';
import {faBell} from '@fortawesome/free-regular-svg-icons';

const Home = ({navigation}) => {
  const [markers, setMarkers] = useState([
    {
      id: 1,
      coordinate: {latitude: 37.5665, longitude: 126.978},
      title: 'Caffe Luxe',
    },
    {
      id: 2,
      coordinate: {latitude: 37.579617, longitude: 126.977041},
      title: 'Espressivo',
    },
    // ... add the rest of your locations here
    {
      id: 10,
      coordinate: {latitude: 37.509621, longitude: 126.99588},
      title: 'Whisper',
    },
    {
      id: 11,
      coordinate: {latitude: 37.529722, longitude: 126.934444},
      title: 'Rhapsody',
    },
  ]);

  const onMarkerTap = markerData => {
    alert(`Marker Tapped: ${markerData.title}`);
    // Additional logic for marker tap can be added here
  };
  // console.log(user); // from store.js
  const categories = useSelector(state => state.categories);
  const shops = useSelector(state => state.donations);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  //from store.js
  // console.log(categories)
  const mapView = useRef(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);
  useEffect(() => {
    if (Platform.OS === 'android') {
      requestLocationPermission();
    } else {
      // For iOS, set permission to true as it's handled at the system level
      setPermissionGranted(true);
      fetchLocation();
    }
  }, []);

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This app needs access to your location to show it on the map.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setPermissionGranted(true);
        fetchLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  const fetchLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log(position.coords);
      },
      error => {
        console.error(error);
      },
      {enableHighAccuracy: false, timeout: 30000, maximumAge: 10000},
    );
  };

  const [coffeeShop, setCoffeeShop] = useState([]);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;
  // dispatch(resetDonations());
  //reloads the store and dispatcehs the data
  //Works the same as the persistor.purge()  in store.js

  // console.log(donationItems);
  useEffect(() => {
    console.log('Run category change function');
    const items = shops.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setCoffeeShop(items);
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
            <Text style={style.headerIntroText}>CUPiN</Text>
            {/* <View style={style.userName}>
              <Header title={`Hi ${user.displayName} 👋`}> </Header>
            </View> */}
          </View>

          {/* <Image
            source={{uri: user.profileImage}}
            style={style.profileImage}
            resize={'contain'}
          /> */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesomeIcon
              icon={faBell}
              size={22}
              style={{marginRight: 20}}
            />
            <Search />
          </View>
        </View>
        <View>
          <Text style={style.mapDesc}>
            내 주변 구독 가능한 카페를 찾아보세요
          </Text>
        </View>
        {/* <View style={style.searchBox}>
          <Search />
        </View> */}
        <NaverMapView
          ref={mapView}
          style={style.map}
          showsMyLocationButton={permissionGranted}
          center={currentLocation ? {...currentLocation, zoom: 15} : undefined}
          useTextureView>
          {currentLocation && <Marker coordinate={currentLocation} />}
          {markers.map(marker => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              onClick={() => {
                // Debugging: Log the marker ID and check if this part is being executed
                console.log(`Marker pressed: ID = ${marker.id}`);

                // Find the coffee shop that matches the marker ID
                const selectedCoffeeShop = shops.items.find(
                  shop => shop.donationItemId === marker.id,
                );

                // Debugging: Log the selected coffee shop details
                console.log('Selected Coffee Shop:', selectedCoffeeShop);

                if (selectedCoffeeShop) {
                  dispatch(updateSelectedDonationId(marker.id));
                  navigation.navigate(Routes.SingleCoffeeShop, {
                    categoryInformation: {
                      ...selectedCoffeeShop,
                      badgeTitle: selectedCoffeeShop.name, // assuming this is the correct field
                    },
                  });
                } else {
                  // Debugging: Log a message if no matching coffee shop is found
                  console.log(
                    `No matching coffee shop found for marker ID ${marker.id}`,
                  );
                }
              }}
            />
          ))}
        </NaverMapView>

        {/* <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode="contain"
          />
        </Pressable> */}
        <View style={style.categoryHeader}>
          {/* <Header title={'Select area'} type={2} /> */}
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) return;
              console.log(
                'User has reached the end. Fetching page number',
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
            )}
          />
        </View>
        {coffeeShop.length > 0 && (
          <View style={style.coffeeShopContainer}>
            <View>
              {coffeeShop.map(value => {
                const categoryInformation = categories.categories.find(
                  val => val.categoryId === categories.selectedCategoryId,
                );
                return (
                  <View
                    key={value.donationItemId}
                    style={style.singleDonationItem}>
                    <SingleCoffeeShop
                      onPress={selectedCoffeeShopId => {
                        dispatch(
                          updateSelectedDonationId(selectedCoffeeShopId),
                        );
                        navigation.navigate(Routes.SingleCoffeeShop, {
                          categoryInformation,
                        });
                        console.log('pressed');
                        // console.log(selectedDonationId); shows the item's number
                      }}
                      uri={value.image}
                      donationItemId={value.donationItemId}
                      donationTitle={value.name}
                      price={value.price}
                      quantity={value.quantity}
                      badgeTitle={categoryInformation.name}
                    />
                  </View>
                );
              })}
            </View>
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
