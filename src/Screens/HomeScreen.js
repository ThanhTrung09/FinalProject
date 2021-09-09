import React, { useState } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/FontAwesome'

const DATA1 = [
  {
    id: "1",
    title: "Ưu đãi đặc biệt",
    image: "https://file.hstatic.net/1000075078/article/banner_web__1__44ad5bb4e39443a58119cdebc98ae31b_master.jpg",
    date: "02/09"
  },
  {
    id: "2",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/banner_web__1__44ad5bb4e39443a58119cdebc98ae31b_master.jpg",
    date: "23/08"
  },
  {
    id: "3",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/236903713_3043429605931045_6642348340373543205_n_c7db024e43f94eb2bdc10c5e17f4cbbd_grande.jpeg",
    date: "23/08"
  },
  {
    id: "4",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/236903713_3043429605931045_6642348340373543205_n_c7db024e43f94eb2bdc10c5e17f4cbbd_grande.jpeg",
    date: "23/08"
  },
  {
    id: "5",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/236903713_3043429605931045_6642348340373543205_n_c7db024e43f94eb2bdc10c5e17f4cbbd_grande.jpeg",
    date: "23/08"
  },
  {
    id: "6",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/banner_web__1__44ad5bb4e39443a58119cdebc98ae31b_master.jpg",
    date: "23/08"
  },
  {
    id: "7",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/blog__1__b18b5c42d3f04835a52152c368c63501_grande.jpg",
    date: "23/08"
  },
  {
    id: "8",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/blog__1__b18b5c42d3f04835a52152c368c63501_grande.jpg",
    date: "23/08"
  },
  {
    id: "9",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/blog__1__b18b5c42d3f04835a52152c368c63501_grande.jpg",
    date: "23/08"
  },
  {
    id: "10",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/banner_web__1__44ad5bb4e39443a58119cdebc98ae31b_master.jpg",
    date: "23/08"
  },
];


const DATA2 = [
  {
    id: "1",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
  {
    id: "2",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
  {
    id: "3",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
  {
    id: "4",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "5",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "6",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "7",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "8",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "9",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
  {
    id: "10",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
];



const DATA3 = [
  {
    id: "1",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8276_grande.jpg",
    date: "23/08"
  },
  {
    id: "2",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8538_grande.jpg",
    date: "23/08"
  },
  {
    id: "3",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8276_grande.jpg",
    date: "23/08"
  },
  {
    id: "4",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8538_grande.jpg",
    date: "23/08"
  },
  {
    id: "5",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "6",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "7",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "8",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "9",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
  {
    id: "10",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
];


export default function HomeScreen() {
  const [dataList, setdataList] = useState(DATA1);

  const Header = () => {
    return (
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <View style={styles.textSun}>
            <Image style={styles.imageSun} source={require('../Images/sun.png')} />
            <Text style={styles.headerText}>Chào buổi chiều, thành trung</Text>
          </View>
          <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
            <View style={styles.headerIcon1}><MaterialCommunityIcons name="ticket-confirmation-outline" size={15} /></View>
            <View style={styles.headerIcon2}><Fontisto name="bell" size={15} /></View>
          </View>
        </View>
      </View>
    )
  }

  const Body = () => {
    return (
      <View style={{ marginHorizontal: 15 }}>
        <View>
          <View style={styles.boxDelivery}>
            <View style={styles.delivery}>
              <View style={styles.deliveryLeft}>
                <Image style={styles.image1} source={require('../Images/delivery.png')} />
                <Text>Giao hàng</Text>
              </View>
              <View style={styles.deliveryRight}>
                <Image style={styles.image2} source={require('../Images/takeaway.png')} />
                <Text>Mang về</Text>
              </View>
            </View>
          </View>
          <View style={{ width: '100%', height: 200 }}>
            <Swiper style={styles.wrapper} autoplay={true} autoplayTimeout={3}>
              <View style={styles.slide}>
                <Image style={styles.slideImage} source={{ uri: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg" }} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.slideImage} source={{ uri: "https://file.hstatic.net/1000075078/file/tch-hai_ba_trung_398a9c92be4a4c46885d0a7bc2a9c456_1024x1024.jpg" }} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.slideImage} source={{ uri: "https://file.hstatic.net/1000075078/file/1212-tch-p4_04feaa750de14848b25e19fea8d46135_1024x1024.jpg" }} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.slideImage} source={{ uri: "https://file.hstatic.net/1000075078/file/3e0a8783_master.jpg" }} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.slideImage} source={{ uri: "https://image.bnews.vn/MediaUpload/Org/2021/01/23/the-coffee-house2.jpg" }} />
              </View>
            </Swiper>
          </View>
        </View>
        <View>
          <Text style={styles.MainContent}>Khám phá thêm</Text>
          <View style={styles.MainContentList}>
            <View style={styles.MainContentList1} >
              <Text onPress={() => { setdataList(DATA1) }} style={styles.MainContentText}>Ưu đãi đặc biệt</Text>
            </View>
            <View style={styles.MainContentList2} >
              <Text style={styles.MainContentText} onPress={() => {
                setdataList(DATA2);
              }}>Cập nhập từ nhà</Text>
            </View>
            <View style={styles.MainContentList3} >
              <Text onPress={() => {
                setdataList(DATA3);
              }} style={styles.MainContentText}>#CoffeeLover</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image style={styles.listItemImage} source={{ uri: item.image }} />
      <View style={styles.listItemText}>
        <Text style={styles.listItemTittle}>{item.title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", width: "40%" }}>
          <Icon name="calendar" size={13} color="black" />
          <Text style={styles.listItemDate}>{item.date}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Body />
        <View style={{ marginTop: 15, marginHorizontal: 5 }}>
          <FlatList
            data={dataList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 5,
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
    height: 60,
  },
  imageSun: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
  textSun: {
    flexDirection: 'row',
    flex: 1,
  },
  wrapper: {
    borderRadius: 10,

  },
  slide: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  image1: {
    height: 40,
    width: 40,
    backgroundColor: '#ffe0b2',
    borderRadius: 40 / 2,
  },
  image2: {
    height: 40,
    width: 40,
  },
  delivery: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '90%',
  },
  deliveryLeft: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
  },
  deliveryRight: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  boxDelivery: {
    borderWidth: 1,
    marginVertical: 10,
    height: 85,
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#e0e0e0',
  },
  listItemImage: {
    width: "100%",
    height: 170,
    borderRadius: 10
  },
  listItem: {
    width: "46%",
    marginHorizontal: 5,
    marginTop: 10,
  },
  MainContent: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  MainContentList: {
    flexDirection: 'row',
  },
  MainContentList2: {
    marginHorizontal: 10,
  },
  MainContentText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  listItemText: {
    marginVertical: 10
  },
  listItemTittle: {
    fontWeight: 'bold',
    marginBottom: 7,
  },
  listItemDate: {
    fontSize: 13,
    marginLeft: 10,
    color: '#4e4e4e'
  },
})
