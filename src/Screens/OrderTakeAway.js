import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function OrderTakeAway() {
  const [isVisible, setisVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ width: 55 }}>
          <Image
            style={styles.image}
            source={require('../Images/takeaway.png')}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15 }}>Tự đến lấy</Text>
          <Text style={{ fontSize: 12 }}>Bạn sẽ đến quầy nhận sản phẩm tại cửa h...</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Sửa</Text>
        </View>
      </View>
      <Modal
        testID={'modal'}
        isVisible={isVisible}
        onSwipeComplete={() => setisVisible(false)}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={{ justifyContent: 'flex-end', margin: 0 }}>
        <View style={styles.contentModal}>
          <View style={styles.mainContent}>
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Chọn phương thức đặt hàng</Text>
          </View>
          <TouchableOpacity style={styles.closeBtn} onPress={() => setisVisible(false)} >
            <Ionicons name="close" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
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
    height: 200,
    backgroundColor: 'white',
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  mainContent: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  }
})
