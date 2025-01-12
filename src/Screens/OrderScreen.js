import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { getMenu } from '../services/Api';
import { useSelector, useDispatch } from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import DetailScreen from './DetailScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from '../components/Loading';

export default function OrderScreen() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const windowHeight = Dimensions.get('window').height;
  const [isVisibleDetail, setIsVisibleDetail] = useState(false)

  const onAddToCart = item => () => {
    dispatch({ type: 'ADD_CART', data: { ...item, quantity: 1 } });
  };

  const onAddToDetail = (item) => () => {
    dispatch({ type: 'ADD_DETAIL', data: { ...item, quantity: 1 } })
    setIsVisibleDetail(true)
  };

  useEffect(() => {
    const callGetMenu = async () => {
      try {
        setIsLoading(true)
        const response = await getMenu();
        console.log('rs', response.data.data); // data tu api tra ve
        setProduct(response.data.data);
        setIsLoading(false)
      } catch (error) {
        console.error(error);
      }
    };

    callGetMenu();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={onAddToDetail(item)}>
        <View style={styles.item}>
          <View style={styles.boxContent}>
            <View style={styles.boxText}>
              <Text style={styles.boxText1}>
                {item.product_name}
              </Text>
              <Text
                ellipsizeMode="tail"
                numberOfLines={2}
                style={styles.boxText2}>
                {item.description}
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.boxText3}>{item.price}đ</Text>
                <TouchableOpacity onPress={onAddToCart(item)} style={styles.btnCart}>
                  <Feather name="shopping-bag" size={25} color="#424242" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.boxImage}>
              <Image style={styles.image} source={{ uri: item.image }} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading && <Loading />}
      <View style={styles.header}>
        <View style={styles.topHeader}>
          <View style={styles.headerImage1}>
            <Image
              style={styles.headerImage2}
              source={require('../Images/delivery.png')}
            />
          </View>
          <View style={{ marginLeft: 15, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold' }}>Giao đến</Text>
              <FontAwesome name="angle-down" size={15} />
            </View>
            <View>
              <Text style={{ color: '#424242' }}>
                Các sản phẩm sẽ được giao đến địa chỉ của bạn
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomHeaderContainer}>
          <View style={styles.bottomHeader}>
            <View style={styles.headerBox1}>
              <Text>Cà Phê Gói - Cà Phê Uống Liền</Text>
              <FontAwesome name="angle-down" size={15} color="#9e9e9e" />
            </View>
            <View style={styles.headerBox2}>
              <EvilIcons name="search" size={18} />
            </View>
            <View style={styles.headerBox3}>
              <EvilIcons name="heart" size={18} />
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, height: windowHeight - 45 }}>
        <FlatList
          data={product}
          numColumns={1}
          renderItem={renderItem}
          keyExtractor={item => item._id?.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <DetailScreen showDetail={isVisibleDetail}
        close={(val) => setIsVisibleDetail(val)}
      />
    </SafeAreaView>
  );
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
    marginVertical: 10,
    color: '#424242',
  },
  boxText3: {
    fontSize: 15,
    flex: 1
  },
  headerImage1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage2: {
    height: 30,
    width: 30,
    backgroundColor: '#ffe0b2',
    borderRadius: 30 / 2,
  },
  topHeader: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 70,
    padding: 20,
  },
  bottomHeaderContainer: {
    height: 70,
    borderBottomWidth: 1,
    justifyContent: 'space-around',
    borderBottomColor: '#e0e0e0',
  },
  bottomHeader: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerBox1: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    height: 40,
    width: 240,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerBox2: {
    backgroundColor: '#e0e0e0',
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerBox3: {
    backgroundColor: '#e0e0e0',
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  hideBox1: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 150,
    // left: 260,
  },
  hideBox2: {
    backgroundColor: '#f9a825',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 80,
    width: 80,
  },
  btnCart: {
    height: 40,
    width: 40,
    backgroundColor: '#e0e0e0',
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
