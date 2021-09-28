import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';

export default function OrderShip() {
  const [isVisible, setisVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ width: 55 }} >
          <Image
            style={styles.image}
            source={require('../../Images/delivery.png')}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15 }}>Giao tận nơi</Text>
          <Text style={{ fontSize: 12 }}>Các sản phẩm sẽ được giao đến địa chỉ</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => { setisVisible(true) }}>
          <Text style={styles.btnText}>Sửa</Text>
        </TouchableOpacity>
      </View>
      <Modal
        testID={'modal'}
        isVisible={isVisible}
        onSwipeComplete={() => setisVisible(false)}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={{ justifyContent: 'flex-end', margin: 0 }}>
        <View style={styles.contentModal}>
          <View style={styles.mainContent}>
            <View style={styles.headerModal}>
              <View style={styles.boxSearch}>
                <View style={{ width: 40, justifyContent: 'center', alignItems: 'center' }}>
                  <Ionicons name="search-outline" size={18} color="black" />
                </View>
                <View style={{ width: '85%' }}>
                  <TextInput placeholder='Tìm kiếm' style={styles.inputSearch} />
                </View>
              </View>
            </View>

            <View style={{ marginVertical: 15, backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                <View>
                  <MaterialCommunityIcons name="map-outline" size={15} color='black' />
                </View>
                <View style={{ flex: 1, marginLeft: 20 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Chọn trên bản đồ</Text>
                </View>
                <FontAwesome name="angle-right" size={25} color='#9e9e9e' />
              </View>
            </View>

          </View>
          <TouchableOpacity style={styles.backBtn} onPress={() => setisVisible(false)} >
            <FontAwesome name="angle-left" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </Modal >
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  content: {
    flexDirection: 'row',
    height: 75,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image: {
    height: 35,
    width: 35,
    backgroundColor: '#ffe0b2',
    borderRadius: 35 / 2,
  },
  btn: {
    height: 35,
    width: 50,
    backgroundColor: '#ff9e40',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  btnText: {
    fontWeight: 'bold',
    color: 'white',
  },
  contentModal: {
    height: '100%',
    backgroundColor: '#eceff1',
  },
  mainContent: {
  },
  backBtn: {
    position: 'absolute',
    left: 10,
    top: 30,
    height: 40,
    width: 40,
  },
  headerModal: {
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxSearch: {
    flexDirection: 'row',
    backgroundColor: '#e4e4e4',
    height: 40,
    width: '80%',
    marginLeft: 40,
    borderRadius: 10,
    alignItems: 'center'
  },
  inputSearch: {
    fontSize: 14
  }
})
