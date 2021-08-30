import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.loginImage}>
        <Image style={styles.image} source={require('../Images/login.jpg')} />
      </View>
      <View style={styles.bottomView}>
        <View style={{ margin: 20 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#707070' }}>Chào mừng bạn đến với</Text>
            <Image
              style={{ height: 35, width: 250 }}
              source={require('../Images/logo.jpg')}
            />
          </View>
          <View style={styles.phoneNumber}>
            <View style={styles.numberCode}>
              <Image style={styles.flagImage} source={require('../Images/vietnam.png')} />
              <View style={{ borderRightWidth: 1, width: 40, borderRightColor: '#e0e0e0' }}>
                <Text style={{ marginLeft: 5 }}>+84</Text>
              </View>
            </View>
            <TextInput style={styles.numberInput} keyboardType="numeric" placeholder="Nhập số điện thoại" />
          </View>

          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.btnLoginText}>Đăng nhập</Text>
          </TouchableOpacity>
          <View style={styles.text}>
            <View style={{ borderTopWidth: 1, width: 140, borderTopColor: '#e0e0e0' }}><Text></Text></View>
            <Text style={{ bottom: 10, color: '#9e9e9e', fontWeight: 'bold', fontSize: 13 }}>HOẶC</Text>
            <View style={{ borderTopWidth: 1, width: 140, borderTopColor: '#e0e0e0' }}><Text></Text></View>
          </View>
          <TouchableOpacity style={styles.btnFB}>
            <MaterialIcons name="facebook" size={18} color='white' />
            <Text style={styles.btnFbText}>Tiếp tục bằng Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnGoogle}>
            <Image style={styles.iconGg} source={require('../Images/iconGg.png')} />
            <Text style={styles.btnGgText}>Tiếp tục bằng Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 700,
  },
  image: {
    height: 300,
    width: 400,
  },
  bottomView: {
    backgroundColor: '#fff',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    height: 500,
    bottom: 75,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  flagImage: {
    height: 20,
    width: 20,
  },
  phoneNumber: {
    flexDirection: 'row',
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e0e0e0',
    marginTop: 40,
  },
  numberCode: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  numberInput: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
  },
  btnLogin: {
    height: 55,
    backgroundColor: '#bdbdbd',
    borderRadius: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLoginText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-around',
  },
  btnFB: {
    marginTop: 25,
    height: 55,
    backgroundColor: '#2196f3',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  btnFbText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 15,
  },
  btnGoogle: {
    marginTop: 10,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  btnGgText: {
    color: '#707070',
    marginLeft: 5,
    fontSize: 15,
  },
  iconGg: {
    height: 15,
    width: 15,
  },
});
