import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Modal from "react-native-modal";
import LoginScreen from './LoginScreen';

export default function OtherScreen() {
  const windowHeight = Dimensions.get('window').height;
  const [isVisible, setisVisible] = useState(false);
  const onLogin = () => { setisVisible(true) };


  return (
    <SafeAreaView style={{ height: windowHeight - 45 }}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText}>Khác</Text>
          <View style={styles.headerIcon1}><MaterialCommunityIcons name="ticket-confirmation-outline" size={15} /></View>
          <View style={styles.headerIcon2}><Fontisto name="bell" size={15} /></View>
        </View>
      </View>
      <ScrollView syle={styles.container}>
        <View style={{ margin: 15 }}>
          <View>
            <Text style={styles.textTitle}>Tiện ích</Text>
            <View style={styles.box1}>
              <View style={styles.boxInfo1}>
                <Ionicons name="md-document-text-outline" size={25} color="#ff7043" />
                <Text style={styles.boxText1}>Lịch sử đơn hàng</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={styles.box2}>
                <View style={styles.boxInfo2}>
                  <MaterialIcons name="music-video" size={25} color="#00c853" />
                  <Text style={styles.boxText1}>Nhạc đang phát</Text>
                </View>
              </View>
              <View style={styles.box3}>
                <View style={styles.boxInfo2}>
                  <MaterialIcons name="security" size={25} color="#d500f9" />
                  <Text style={styles.boxText1}>Điều khoản</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.textTitle2}>Hỗ trợ</Text>
            <View style={styles.box4}>
              <View style={styles.boxInfo4}>
                <View style={styles.otherIcon}><FontAwesome name="star-o" size={20} /></View>
                <View style={styles.mainTitle}>
                  <Text style={styles.mainText}>Đánh giá đơn hàng</Text>
                </View>
                <View style={styles.otherIcon}><FontAwesome name="angle-right" size={25} /></View>
              </View>
              <View style={{ borderBottomWidth: 1, marginLeft: 20, borderBottomColor: '#e0e0e0' }}></View>
              <View style={styles.boxInfo4}>
                <View style={styles.otherIcon}><Octicons name="comment" size={20} /></View>
                <View style={styles.mainTitle}>
                  <Text style={styles.mainText}>Liên hệ và góp ý</Text>
                </View>
                <View style={styles.otherIcon}><FontAwesome name="angle-right" size={25} /></View>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.textTitle2}>Tài Khoản</Text>
            <View style={styles.box4}>
              <View style={styles.boxInfo4}>
                <View style={styles.otherIcon}><MaterialCommunityIcons name="account-outline" size={20} /></View>
                <View style={styles.mainTitle}>
                  <Text style={styles.mainText}>Thông tin cá nhân</Text>
                </View>
                <View style={styles.otherIcon}><FontAwesome name="angle-right" size={25} /></View>
              </View>
              <View style={{ borderBottomWidth: 1, marginLeft: 20, borderBottomColor: '#e0e0e0' }}></View>
              <View style={styles.boxInfo4}>
                <View style={styles.otherIcon}><Feather name="bookmark" size={20} /></View>
                <View style={styles.mainTitle}>
                  <Text style={styles.mainText}>Địa chỉ đã lưu</Text>
                </View>
                <View style={styles.otherIcon}><FontAwesome name="angle-right" size={25} /></View>
              </View>
              <View style={{ borderBottomWidth: 1, marginLeft: 20, borderBottomColor: '#e0e0e0' }}></View>
              <View style={styles.boxInfo4}>
                <View style={styles.otherIcon}><Ionicons name="settings-outline" size={20} /></View>
                <View style={styles.mainTitle}>
                  <Text style={styles.mainText}>Cài đặt</Text>
                </View>
                <View style={styles.otherIcon}><FontAwesome name="angle-right" size={25} /></View>
              </View>
              <View style={{ borderBottomWidth: 1, marginLeft: 20, borderBottomColor: '#e0e0e0' }}></View>
              <View style={styles.boxInfo4}>
                <View style={styles.otherIcon}><MaterialCommunityIcons name="login-variant" size={20} /></View>
                <View style={styles.mainTitle}>
                  <Text onPress={onLogin} style={styles.mainText}>Đăng nhập</Text>
                </View>
                <View style={styles.otherIcon}><FontAwesome name="angle-right" size={25} /></View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal
        testID={'modal'}
        isVisible={isVisible}
        onSwipeComplete={() => setisVisible(false)}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={{ justifyContent: 'flex-end', margin: 0 }}>
        <View style={styles.content}>
          <LoginScreen />
          <TouchableOpacity style={styles.closeBtn} onPress={() => setisVisible(false)} >
            <Ionicons name="close" size={30} color="white" />
          </TouchableOpacity>
        </View>
        {/* <DefaultModalContent onPress={this.close} /> */}
      </Modal>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 30,
  },
  box1: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    height: 80,
    marginTop: 10
  },
  boxInfo1: {
    margin: 13,
  },
  boxText1: {
    marginTop: 10,
    fontSize: 15,
  },
  box2: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    height: 80,
    width: '48%',
    marginTop: 10
  },
  box3: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    height: 80,
    width: '48%',
    marginTop: 10,
  },
  boxInfo2: {
    margin: 13,
  },
  box4: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    marginTop: 15,
  },
  boxInfo4: {
    flexDirection: 'row',
    height: 40,
    margin: 10,
  },
  otherIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 15
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
  },
  headerIcon1: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginRight: 10,
  },
  headerIcon2: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  header: {
    backgroundColor: '#ffff',
    height: 75,
  },
  content: {
    height: '100%',
  },
  closeBtn: {
    position: 'absolute',
    right: 20,
    top: 20,
    height: 40,
    width: 40,
    backgroundColor: '#9e9e9e',
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
