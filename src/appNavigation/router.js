import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import OrderScreen from '../Screens/OrderScreen';
import OtherScreen from '../Screens/OtherScreen';
import ShopScreen from '../Screens/ShopScreen';
import CartScreen from '../Screens/CartScreen';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' },
          tabBarStyle: { height: 45 },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{
            tabBarLabel: 'Đặt hàng',
            tabBarIcon: ({ color, size }) => (
              <Feather name="coffee" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            tabBarLabel: 'Cửa hàng',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="shop" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: 'Giỏ hàng',
            tabBarIcon: ({ color, size }) => (
              <Fontisto
                name="opencart"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Other"
          component={OtherScreen}
          options={{
            tabBarLabel: 'Khác',
            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="menu" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



