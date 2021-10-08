import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import { Login } from '../services/Api';
import { useSelector, useDispatch } from 'react-redux';


const { height, width } = Dimensions.get('window')


export default function LoginScreen() {
  const [isVisible, setisVisible] = useState(false);
  const [phone, setPhone] = useState();
  const [code, setCode] = useState();
  const dispatch = useDispatch();

  const onChangePhone = (val) => setPhone(val)
  const onChangeCode = (val) => setCode(val)

  const onVerifyPhone = async () => {
    try {
      const response = await Login({ phone: phone });
      console.log('rs', response.data); // data tu api tra ve
      setisVisible(true)
    } catch (error) {
      console.error(error);
    }
  }

  const onVerifyCodeAgain = async () => {
    try {
      const response = await Login({ phone: phone });
      console.log('rs', response.data); // data tu api tra ve
      setisVisible(true)
    } catch (error) {
      console.error(error);
    }
  }



  const onVerifyCode = async () => {
    try {
      const response = await Login({ phone: phone, otp: code });
      dispatch({ type: 'SET_TOKEN', data: response.data })
      console.log('rs', response.data); // data tu api tra ve
      setisVisible(false)
    } catch (error) {
      console.error(error);
    }
  }


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
            <TextInput onChangeText={onChangePhone} value={phone} style={styles.numberInput} keyboardType="numeric" placeholder="Nhập số điện thoại" />
          </View>

          <TouchableOpacity style={styles.btnLogin}>
            <Text onPress={onVerifyPhone} style={styles.btnLoginText}>Đăng nhập</Text>
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
      <Modal
        testID={'modal'}
        isVisible={isVisible}
        onSwipeComplete={() => setisVisible(false)}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={{ justifyContent: 'flex-end', margin: 0 }}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeBtn} onPress={() => setisVisible(false)} >
            <Ionicons name="close" size={30} color="black" />
          </TouchableOpacity>
          <View style={styles.contentTitle}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 15 }}>Xác nhận Mã OTP</Text>
            <Text style={{ fontSize: 18 }}>Một mã xác nhận gồm 6 chữ số</Text>
            <Text style={{ fontSize: 18, marginBottom: 50 }}>đã được gửi đến số điện thoại {phone}</Text>
            <Text style={{ fontSize: 18 }}>Nhập mã để tiếp tục</Text>
            <View style={styles.Code}>
              <TextInput style={styles.inputCode} keyboardType="numeric" onChangeText={onChangeCode} value={code} />
            </View>
            <TouchableOpacity
              onPress={onVerifyCode}
              style={{
                backgroundColor: '#bdbdbd',
                width: 300,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 18, color: 'white' }}>Send Code</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Text style={{ fontSize: 18 }}>Không nhận được mã</Text>
              <TouchableOpacity>
                <Text onPress={onVerifyCodeAgain} style={{ fontSize: 18, marginLeft: 5, color: 'blue', textDecorationLine: 'underline' }}>Gửi lại</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View >
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
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: height - 30,
  },
  closeBtn: {
    position: 'absolute',
    right: 20,
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Code: {
    width: 300,
    borderWidth: 1,
    borderColor: '#909090',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCode: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
  },
});
