import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const Map = () => {
  const handleWebViewError = syntheticEvent => {
    const {nativeEvent} = syntheticEvent;
    console.warn('WebView encountered an error: ', nativeEvent);
    // Log additional details about the error
    if (nativeEvent.description) {
      console.warn('Error description: ', nativeEvent.description);
    }
    if (nativeEvent.code) {
      console.warn('Error code: ', nativeEvent.code);
    }
  };

  const handleHttpError = syntheticEvent => {
    const {nativeEvent} = syntheticEvent;
    console.warn('WebView encountered an HTTP error: ', nativeEvent.statusCode);
  };
  return (
    <WebView
      originWhitelist={['*']}
      source={{uri: 'http://tasteit.iptime.org:5500/map.html'}}
      style={styles.map}
      onError={handleWebViewError}
      onHttpError={handleHttpError}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;
