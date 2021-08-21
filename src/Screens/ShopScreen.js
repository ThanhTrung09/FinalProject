import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'

export default function ShopScreen() {
  return (
    <ScrollView>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 15 }}>Các cửa hàng khác</Text>
        <View style={styles.allBox}>
          <View style={styles.box}>
            <View style={styles.boxTitle}>
              <View style={styles.boxImage}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668ea_trung_20son_201.jpeg',
                  }}
                />
              </View>
              <View style={styles.boxText}>
                <Text style={styles.boxText1}>THE COFFEE HOUSE</Text>
                <Text style={styles.boxText2}>86 Cao Thắng, Quận 3, Hồ Chí Minh, Việt Nam</Text>
                <Text style={styles.boxText3}>cách đây 0,01km</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxTitle}>
              <View style={styles.boxImage}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d02032668f1_Ba_20thang_20hai_20sg_20.jpeg',
                  }}
                />
              </View>
              <View style={styles.boxText}>
                <Text style={styles.boxText1}>THE COFFEE HOUSE</Text>
                <Text style={styles.boxText2}>175B Cao Thắng, Quận 10, Hồ Chí Minh, Việt Nam</Text>
                <Text style={styles.boxText3}>cách đây 0,7km</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxTitle}>
              <View style={styles.boxImage}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://minio.thecoffeehouse.com/image/admin/foody-upload-api-foody-album31960519_20805436755-180512135654_673976.jpg',
                  }}
                />
              </View>
              <View style={styles.boxText}>
                <Text style={styles.boxText1}>THE COFFEE HOUSE</Text>
                <Text style={styles.boxText2}>223 Võ Văn Tần, Quận 3, Hồ Chí Minh, Việt Nam</Text>
                <Text style={styles.boxText3}>cách đây 0,7km</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxTitle}>
              <View style={styles.boxImage}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668ee_5b21f8cb1acd4d02032668ee_nguyen_20thai_20binh_201_20.jpeg',
                  }}
                />
              </View>
              <View style={styles.boxText}>
                <Text style={styles.boxText1}>THE COFFEE HOUSE</Text>
                <Text style={styles.boxText2}>47-49 Lê Thị Riêng, Quận 1, Hồ Chí Minh, Việt Nam</Text>
                <Text style={styles.boxText3}>cách đây 1,14km</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxTitle}>
              <View style={styles.boxImage}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://minio.thecoffeehouse.com/image/admin/5fe922d860fd1541d13e5ce5_Big_20C_20Go_20Nha_20trang_952281.jpg',
                  }}
                />
              </View>
              <View style={styles.boxText}>
                <Text style={styles.boxText1}>THE COFFEE HOUSE</Text>
                <Text style={styles.boxText2}>63 Rạch Bùng Binh, Quận 3, Hồ Chí Minh, Việt Nam</Text>
                <Text style={styles.boxText3}>cách đây 1,27km</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxTitle}>
              <View style={styles.boxImage}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d02032668f2_5b21f8cc1acd4d02032668f2_LTK_202.jpeg',
                  }}
                />
              </View>
              <View style={styles.boxText}>
                <Text style={styles.boxText1}>THE COFFEE HOUSE</Text>
                <Text style={styles.boxText2}>798 Sư Vạn Hạnh, Quận 10, Hồ Chí Minh, Việt Nam</Text>
                <Text style={styles.boxText3}>cách đây 1,41km</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxTitle}>
              <View style={styles.boxImage}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d02032668f5_5b21f8cc1acd4d02032668f5_le_20dai_20hanh_202.jpeg',
                  }}
                />
              </View>
              <View style={styles.boxText}>
                <Text style={styles.boxText1}>THE COFFEE HOUSE</Text>
                <Text style={styles.boxText2}>6A Ngô Thời Nhiệm, Quận 3, Hồ Chí Minh, Việt Nam</Text>
                <Text style={styles.boxText3}>cách đây 1.45km</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxTitle}>
              <View style={styles.boxImage}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d02032668f8_Screen_20Shot_202020-05-16_20at_2022.55.13.png',
                  }}
                />
              </View>
              <View style={styles.boxText}>
                <Text style={styles.boxText1}>THE COFFEE HOUSE</Text>
                <Text style={styles.boxText2}>159 Phạm Ngũ Lão, Quận 1, Hồ Chí Minh, Việt Nam</Text>
                <Text style={styles.boxText3}>cách đây 1,5km</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxTitle}>
              <View style={styles.boxImage}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d02032668fb_5b21f8cc1acd4d02032668fb_tran_20quoc_20thao_201_20.jpeg',
                  }}
                />
              </View>
              <View style={styles.boxText}>
                <Text style={styles.boxText1}>THE COFFEE HOUSE</Text>
                <Text style={styles.boxText2}>183F Trần Quốc Thảo, Quận 3, Hồ Chí Minh, Việt Nam</Text>
                <Text style={styles.boxText3}>cách đây 1,61km</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxTitle}>
              <View style={styles.boxImage}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d0203266900_ngo_20thoi_20nhiem_201_20.jpeg',
                  }}
                />
              </View>
              <View style={styles.boxText}>
                <Text style={styles.boxText1}>THE COFFEE HOUSE</Text>
                <Text style={styles.boxText2}>682 Trần Hưng Đạo, Quận 3, Hồ Chí Minh, Việt Nam</Text>
                <Text style={styles.boxText3}>cách đây 1,84km</Text>
              </View>
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 90,
    width: 90,
    borderRadius: 5,
  },
  box: {
    backgroundColor: '#ffff',
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 1,

  },
  boxTitle: {
    flexDirection: 'row',
  },
  boxImage: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    width: '65%',
  },
  boxText1: {
    fontSize: 12,
    marginLeft: 10,
    color: '#616161',
    fontWeight: 'bold',
  },
  boxText2: {
    marginLeft: 10,
    fontSize: 17,
    marginTop: 5,
  },
  boxText3: {
    fontSize: 17,
    marginLeft: 5,
    color: '#616161',
  },
});