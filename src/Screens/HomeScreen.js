import React from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Swiper from 'react-native-swiper'

const DATA1 = [
  {
    id: "1",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
    date: "23/08"
  },
  {
    id: "2",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
    date: "23/08"
  },
  {
    id: "3",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
    date: "23/08"
  },
  {
    id: "4",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
    date: "23/08"
  },
  {
    id: "5",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
    date: "23/08"
  },
  {
    id: "6",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
    date: "23/08"
  },
  {
    id: "7",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
    date: "23/08"
  },
  {
    id: "8",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
    date: "23/08"
  },
  {
    id: "9",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
    date: "23/08"
  },
  {
    id: "10",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
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
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
  {
    id: "5",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
  {
    id: "6",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
  {
    id: "7",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
  {
    id: "8",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
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
    image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
    date: "23/08"
  },
  {
    id: "2",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
    date: "23/08"
  },
  {
    id: "3",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
    date: "23/08"
  },
  {
    id: "4",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
    date: "23/08"
  },
  {
    id: "5",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
    date: "23/08"
  },
  {
    id: "6",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
    date: "23/08"
  },
  {
    id: "7",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
    date: "23/08"
  },
  {
    id: "8",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
    date: "23/08"
  },
  {
    id: "9",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
    date: "23/08"
  },
  {
    id: "10",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
    date: "23/08"
  },
];


export default function HomeScreen() {

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

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} autoplayTimeout={3}>
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
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
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
    backgroundColor: 'red'
  },
  slide: {
    borderRadius: 20,
    flex: 1,
  },
  slideImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
})


