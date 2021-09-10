import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import { Colors, Metrics } from '../themes';
import CartView from '../components/CartView'
import { useDispatch, useSelector } from "react-redux";

export default function TicketScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((store) => store.cartReducer.products);


  console.log('productList', productList)

  const onChangeQuantity = () => () => { }

  const onRemoveItem = (item) => () => {
    dispatch({ type: 'REMOVE_ITEM', data: item })
  }
  const onRemoveAll = () => { }

  const renderItem = ({ item }) => {
    return (
      <CartView style={{ flex: 1, margin: 5, flexDirection: 'row' }}>
        <Image source={{ uri: item.image }} style={{ width: 100, height: 100, }} />
        <View style={{ marginLeft: 5, marginVertical: 10, width: '100%', flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 17, }}>{item.product_name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, width: '100%' }}>
            <View style={{ flex: 1, }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', marginRight: 10 }}>{item.price}đ</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                  <TouchableOpacity onPress={onChangeQuantity('reduce', item)}>
                    <Ionicons name="md-remove" size={25} color={'black'} />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 20, marginHorizontal: 10 }}>{item.quantity}</Text>
                  <TouchableOpacity onPress={onChangeQuantity('increase', item)}>
                    <Ionicons name="add-outline" size={25} color={'black'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={onRemoveItem(item)} style={{ marginTop: 25 }}>
              <Ionicons name="ios-trash-outline" size={25} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
      </CartView>
    );
  };


  return (
    <View>
      <FlatList
        data={productList}
        renderItem={renderItem}
        keyExtractor={(item) => item._id?.toString()}
      />
      {productList?.length ?
        <TouchableOpacity style={{ marginTop: 10 }} onPress={onRemoveAll}>
          <Text>
            Remove all
          </Text>
        </TouchableOpacity> :
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Text>Nothing here!</Text>
        </View>
      }

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

});