import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image} from 'react-native';

//navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'


//redux
import { Provider } from 'react-redux';
import { store, appPersist } from './src/redux/store'
import { PersistGate }  from 'redux-persist/integration/react'


//Screens
import HomeScreen from './src/screens/Home'
import WishlistScreen from './src/screens/WishList'
import Home2 from './src/screens/QuotesApp/Home2'
import NewQuoteScreen from './src/screens/QuotesApp/NewQuote'
// import LoadingScreen from './src/screens/QuotesApp/LoadingScreen'

const switchNavigator = createSwitchNavigator({
  homeStack: createBottomTabNavigator({

    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarOptions: {
              activeTintColor: '#1d1d1d',
              style: {
                backgroundColor: '#FFF'
              }
            },
            tabBarIcon: ({ focused}) => {
                let icon = focused === true ? require('./src/images/home_icon.png') : 
                require('./src/images/home_n_icon.png')
                return <Image source={icon} style={styles.tabIcon} />
            }

        }
    },
    Wishlist: {
      screen: WishlistScreen,
      navigationOptions: {
          tabBarOptions: {
            activeTintColor: '#1d1d1d',
            style: {
              backgroundColor: '#FFF'
            }
          },
          tabBarIcon: ({ focused}) => {
              let icon = focused === true ? require('./src/images/wish_icon.png') : 
              require('./src/images/wish_n_icon.png')
              return <Image source={icon} style={styles.tabIcon} />
          }

      }
  },
quotes: {
  screen: Home2,
  navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#1d1d1d',
        style: {
          backgroundColor: '#FFF'
        }
      },
      tabBarIcon: ({ focused}) => {
          let icon = focused === true ? require('./src/images/wish_icon.png') : 
          require('./src/images/wish_n_icon.png')
          return <Image source={icon} style={styles.tabIcon} />
      },
      title: `Home`,
  }
},

  }),
  Home2:{
    screen: Home2,
    navigationOptions: ({ navigation }) => ({
        title: `Home`,
    }),
},
NewQuote:{
    screen: NewQuoteScreen,
    navigationOptions: ({ navigation }) => ({
        title: `New Quote`,
    }),
}


})


const App = createAppContainer(switchNavigator)


export default () => {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={appPersist}>
          <App />
        </PersistGate>
      </Provider>
  )
};


const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30
  },
});