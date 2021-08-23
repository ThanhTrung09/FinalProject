import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function OrderScreen() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.topHeader}>
          <View style={styles.headerImage1}>
            <Image style={styles.headerImage2} source={require('../Images/delivery.png')} />
          </View>
          <View style={{ marginLeft: 15, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold' }}>Giao đến</Text>
              <FontAwesome name="angle-down" size={15} />
            </View>
            <View>
              <Text style={{ color: '#424242' }}>Các sản phẩm sẽ được giao đến địa chỉ của bạn</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomHeaderContainer}>
          <View style={styles.bottomHeader}>
            <View style={styles.headerBox1}>
              <Text>Cà Phê Gói - Cà Phê Uống Liền</Text>
              <FontAwesome name="angle-down" size={15} color='#9e9e9e' />
            </View>
            <View style={styles.headerBox2}><EvilIcons name="search" size={18} /></View>
            <View style={styles.headerBox3}><EvilIcons name="heart" size={18} /></View>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Cà Phê Gói - Cà Phê Uống Liền</Text>
          <View style={styles.allBox}>
            <SwipeRow rightOpenValue={-100}>
              <View style={styles.hideBox1}>
                <View style={styles.hideBox2}>
                  <EvilIcons name="heart" size={25} color="#ffff" />
                  <Text style={{ fontSize: 12, color: '#fff', marginTop: 10 }}>Yêu Thích</Text>
                </View>
              </View>
              <View style={styles.box}>
                <View style={styles.boxContent}>
                  <View style={styles.boxText}>
                    <Text style={styles.boxText1}>Thùng 24 Lon Cà Phê Sữa Đá</Text>
                    <Text style={styles.boxText2}>
                      Ưu đãi Thùng 24 lon Cà phê sữa đá giá còn 289,000đ. Nhập m...
                    </Text>
                    <Text style={styles.boxText3}>336.000đ</Text>
                  </View>
                  <View style={styles.boxImage}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: 'https://product.hstatic.net/1000075078/product/lon-park24_10572efcaba3475d84d6fb0a859a56f0_master.jpg',
                      }}
                    />
                  </View>
                </View>
              </View>
            </SwipeRow>

            <SwipeRow rightOpenValue={-100}>
              <View style={styles.hideBox1}>
                <View style={styles.hideBox2}>
                  <EvilIcons name="heart" size={25} color="#ffff" />
                  <Text style={{ fontSize: 12, color: '#fff', marginTop: 10 }}>Yêu Thích</Text>
                </View>
              </View>
              <View style={styles.box}>
                <View style={styles.boxContent}>
                  <View style={styles.boxText}>
                    <Text style={styles.boxText1}>Combo 6 Lon Cà Phê Sữa Đá</Text>
                    <Text style={styles.boxText2}>
                      Ưu đãi 10% cho đơn hàng mua Cà phê - Cà phê uống liền...
                    </Text>
                    <Text style={styles.boxText3}>84.000đ</Text>
                  </View>
                  <View style={styles.boxImage}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: 'https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_master.jpg',
                      }}
                    />
                  </View>
                </View>
              </View>
            </SwipeRow>

            <SwipeRow rightOpenValue={-100}>
              <View style={styles.hideBox1}>
                <View style={styles.hideBox2}>
                  <EvilIcons name="heart" size={25} color="#ffff" />
                  <Text style={{ fontSize: 12, color: '#fff', marginTop: 10 }}>Yêu Thích</Text>
                </View>
              </View>
              <View style={styles.box}>
                <View style={styles.boxContent}>
                  <View style={styles.boxText}>
                    <Text style={styles.boxText1}>Cà Phê Sữa Đá Hòa Tan</Text>
                    <Text style={styles.boxText2}>
                      Ưu đãi 10% cho đơn hàng mua Cà phê gói - Cà phê uống liền...
                    </Text>
                    <Text style={styles.boxText3}>44.000đ</Text>
                  </View>
                  <View style={styles.boxImage}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: 'https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_master.jpg',
                      }}
                    />
                  </View>
                </View>
              </View>
            </SwipeRow>

            <SwipeRow rightOpenValue={-100}>
              <View style={styles.hideBox1}>
                <View style={styles.hideBox2}>
                  <EvilIcons name="heart" size={25} color="#ffff" />
                  <Text style={{ fontSize: 12, color: '#fff', marginTop: 10 }}>Yêu Thích</Text>
                </View>
              </View>
              <View style={styles.box}>
                <View style={styles.boxContent}>
                  <View style={styles.boxText}>
                    <Text style={styles.boxText1}>Cà Phê Peak Flavor - Hương...</Text>
                    <Text style={styles.boxText2}>
                      Ưu đãi 10% cho đơn hàng mua Cà phê gói - Cà phê uống liền...
                    </Text>
                    <Text style={styles.boxText3}>90.000đ</Text>
                  </View>
                  <View style={styles.boxImage}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: 'https://product.hstatic.net/1000075078/product/peak_196fc2433ab14ef297113696e4d6c179_master.jpg',
                      }}
                    />
                  </View>
                </View>
              </View>
            </SwipeRow>

            <SwipeRow rightOpenValue={-100}>
              <View style={styles.hideBox1}>
                <View style={styles.hideBox2}>
                  <EvilIcons name="heart" size={25} color="#ffff" />
                  <Text style={{ fontSize: 12, color: '#fff', marginTop: 10 }}>Yêu Thích</Text>
                </View>
              </View>
              <View style={styles.box}>
                <View style={styles.boxContent}>
                  <View style={styles.boxText}>
                    <Text style={styles.boxText1}>Thùng 24 Lon Cà Phê Sữa Đá</Text>
                    <Text style={styles.boxText2}>
                      Ưu đãi 10% cho đơn hàng mua Cà phê gói - Cà phê uống liền...
                    </Text>
                    <Text style={styles.boxText3}>90.000đ</Text>
                  </View>
                  <View style={styles.boxImage}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: 'https://product.hstatic.net/1000075078/product/rich_327845e1f8374e21955320e3ea8e7263_master.jpg',
                      }}
                    />
                  </View>
                </View>
              </View>
            </SwipeRow>
          </View>
        </View>
      </ScrollView >
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  allBox: {
    marginTop: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  boxContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  box: {
    backgroundColor: '#ffff',
    height: 140,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
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
});
