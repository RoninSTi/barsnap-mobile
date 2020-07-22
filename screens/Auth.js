import React from 'react';

import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useDispatch, useSelector } from 'react-redux';
import { ATTEMPT_LOGIN } from '../redux/actions/types';

const styles = StyleSheet.create({
  button: {
    borderRadius: 22,
    padding: 5,
  },
  buttonContainer: {
    padding: 21,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 150,
    marginBottom: 40,
    width: 150,
  },
  subtitle: {
    color: '#898A8D',
    fontSize: 15,
  },
  textContainer: {
    paddingHorizontal: 28,
  },
  title: {
    color: '#000000',
    fontSize: 23,
    marginBottom: 21,
    textAlign: 'center',
  },
});

const Auth = ({ navigation }) => {
  const isLoading = useSelector(state => state.ui.isLoading)
  const dispatch = useDispatch()

  const { navigate } = navigation;

  const login = () => {
    dispatch({ type: ATTEMPT_LOGIN })
// navigate('Root')
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={{ width: '100%', height: '100%' }}>
        <View style={styles.contentContainer}>
          <Image source={require('../assets/images/icon_login.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to BarSnap</Text>
            <Text style={styles.subtitle}>
              Discover new places and win prizes by guessing where people are eating and drinking!
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color="#5177FF"
            icon={() => <Icon color="#FFFFFF" name="facebook-box" size={18} />}
            loading={isLoading.some(item => item.loadingType === ATTEMPT_LOGIN)}
            mode="contained"
            onPress={login}
            style={styles.button}>
            Log In With Facebook
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

// LoginScreen.navigationOptions = {
//   headerBackTitle: null,
//   headerStyle: {
//     borderBottomWidth: 0,
//     elevation: 0,
//   },
//   title: 'Welcome!',
// };

export default Auth;