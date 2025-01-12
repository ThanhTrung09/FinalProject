import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CartView from '../components/CartScreens/CartView'
import OrderShip from '../components/CartScreens/OrderShip'
import OrderTakeAway from '../components/CartScreens/OrderTakeAway'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";

export default function CartScreen() {
  const dispatch = useDispatch();
  const [isVisible, setisVisible] = useState(false);

  const windowHeight = Dimensions.get('window').height;
  const productList = useSelector((store) => store.cartReducer.products);
  const totalMoney = productList.reduce((acc, ele) => acc + (ele.price * ele.quantity), 0)
  const totalItem = productList.reduce((acc, ele) => acc + ele.quantity, 0)

  console.log('productList', productList)

  const onChangeQuantity = (type, item) => () => {
    if (type === 'reduce' && item.quantity === 1) {
      dispatch({ type: 'REMOVE_ITEM', data: item })
    } else {
      dispatch({ type: 'CHANGE_QUANTITY', data: item, changeQuantityType: type })
    }
  }

  const onOrderItem = () => { setisVisible(true) }

  const onRemoveItem = (item) => () => {
    dispatch({ type: 'REMOVE_ITEM', data: item })
  }
  const onRemoveAll = () => dispatch({ type: 'REMOVE_ALL' })

  const renderItem = ({ item }) => {
    return (
      <CartView style={{ flex: 1, margin: 5, flexDirection: 'row', padding: 10, borderRadius: 10 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={{ uri: item.image }} style={{ width: 90, height: 90, borderRadius: 10 }} />
        </View>
        <View style={{ marginLeft: 5, marginVertical: 10, width: '100%', flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 17, }}>{item.product_name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, width: '100%' }}>
            <View style={{ flex: 1, }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', marginRight: 10 }}>{item.price} đ</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                  <TouchableOpacity onPress={onChangeQuantity('reduce', item)} style={styles.btn}>
                    <Material name='minus' size={18} color={'#4e4e4e'} />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 24, marginHorizontal: 20 }}>{item.quantity}</Text>
                  <TouchableOpacity onPress={onChangeQuantity('increase', item)} style={styles.btn}>
                    <Material name="plus" size={20} color={'#4e4e4e'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={onRemoveItem(item)} style={{ marginTop: 25 }}>
              <Ionicons name="ios-trash-outline" size={25} color={'#4e4e4e'} />
            </TouchableOpacity>
          </View>
        </View>
      </CartView>
    );
  };


  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText}>Giỏ hàng</Text>
          <View style={styles.headerIcon1}><MaterialCommunityIcons name="ticket-confirmation-outline" size={15} /></View>
          <View style={styles.headerIcon2}><Fontisto name="bell" size={15} /></View>
        </View>
      </View>
      <FlatList
        data={productList}
        renderItem={renderItem}
        keyExtractor={(item) => item._id?.toString()}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={{ height: windowHeight }}>
            {
              productList?.length ?
                <TouchableOpacity style={{ marginTop: 10, marginLeft: 10, marginBottom: 50 }} onPress={onRemoveAll}>
                  <Text style={{ color: 'black', fontSize: 15 }}>
                    Remove all
                  </Text>
                </TouchableOpacity> : null
            }
          </View>
        }
      />
      {productList?.length ? <View style={styles.totalMoney}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Total item: </Text>
          <Text>{totalItem}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Total money: </Text>
          <Text>{totalMoney} đ</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity style={styles.btnOrder} onPress={onOrderItem}>
            <Text style={{ color: 'white', fontSize: 15 }}>Đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </View> : null}
      {!productList?.length && (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', position: 'absolute' }}>
          <Text style={{ fontSize: 15 }}>Nothing here!</Text>
        </View>)
      }
      <Modal
        testID={'modal'}
        isVisible={isVisible}
        onSwipeComplete={() => setisVisible(false)}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={{ justifyContent: 'flex-end', margin: 0 }}>
        <View style={styles.content}>
          <View style={styles.mainContent}>
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Chọn phương thức đặt hàng</Text>
          </View>
          <OrderShip />
          <OrderTakeAway />
          <TouchableOpacity style={styles.closeBtn} onPress={() => setisVisible(false)} >
            <Ionicons name="close" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  wishlistIcon: {
    marginRight: 5,
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
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
    height: 65,
  },
  btn: {
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  totalMoney: {
    height: 130,
    width: '100%',
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'white'
  },
  btnOrder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff9e40',
    height: 30,
    width: 100,
    borderRadius: 10,
  },
  closeBtn: {
    position: 'absolute',
    right: 0,
    top: 10,
    height: 40,
    width: 40,
  },
  content: {
    height: 200,
    backgroundColor: 'white',
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  mainContent: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  }
});