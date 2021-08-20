import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

export default function OtherScreen() {
  return (
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
                <Text style={styles.mainText}>Đăng nhập</Text>
              </View>
              <View style={styles.otherIcon}><FontAwesome name="angle-right" size={25} /></View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {

  },
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
})
