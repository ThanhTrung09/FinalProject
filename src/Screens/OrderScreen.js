import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { getMenu } from '../services/Api'
import { SwipeRow } from 'react-native-swipe-list-view';

export default function OrderScreen() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    // dispatch(getProduct({ page: 1, limit: 10 }));
    // getMenu()
    const callGetMenu = async () => {
      try {
        const response = await getMenu();
        console.log('rs', response.data.data); // data tu api tra ve
        setProduct(response.data.data)

      } catch (error) {
        console.error(error);
      }
    }

    callGetMenu()
  }, [])

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.boxContent}>
        <View style={styles.boxText}>
          <Text style={styles.boxText1}>{item.product_name}</Text>
          <Text ellipsizeMode='tail' numberOfLines={2} style={styles.boxText2}>{item.description}</Text>
          <Text style={styles.boxText3}>{item.price}đ</Text>
        </View>
        <View style={styles.boxImage}>
          <Image style={styles.image} source={{ uri: item.image }} />
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={product}
        numColumns={1}
        renderItem={renderItem}
        keyExtractor={item => item._id?.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffff',
    height: 140,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  boxContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  boxImage: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    width: '60%',
    marginLeft: 10,
  },
  boxText1: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  boxText2: {
    fontSize: 14,
    marginVertical: 15,
    color: '#424242',
  },
  boxText3: {
    fontSize: 15,
  },
});