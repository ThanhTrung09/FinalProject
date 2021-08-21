import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function OrderScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Cà Phê Gói - Cà Phê Uống Liền</Text>
        <View style={styles.allBox}>
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
        </View>
      </View>
    </ScrollView>
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
});
