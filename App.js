import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Screens/HomeScreen';
import OrderScreen from './src/Screens/OrderScreen';
import OtherScreen from './src/Screens/OtherScreen';
import ShopScreen from './src/Screens/ShopScreen';
import TicketScreen from './src/Screens/TicketScreen';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold', padding: 2 },
        }}>
        <Tab.Screen
          name="Trang chủ"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Đặt hàng"
          component={OrderScreen}
          options={{
            tabBarLabel: 'Đặt hàng',
            tabBarIcon: ({ color, size }) => (
              <Feather name="coffee" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cửa hàng"
          component={ShopScreen}
          options={{
            tabBarLabel: 'Cửa hàng',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="shop" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Tích điểm"
          component={TicketScreen}
          options={{
            tabBarLabel: 'Cửa hàng',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="ticket-confirmation-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Khác"
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
