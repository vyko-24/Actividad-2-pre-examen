import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Image } from '@rneui/base'
import Pato from '../../../assets/pato.png'
import A from '../../../assets/A.jpg'
import B from '../../../assets/B.png'
import C from '../../../assets/C.jpg'
import D from '../../../assets/D.jpg'
import E from '../../../assets/E.jpg'
import F from '../../../assets/F.png'

export default function Profile(props) {
  const { navigation} = props;

  const urls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EsxCFuNOJyu_dl0h5hxtklPXlCU9nik1pg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs87IEVPab76di7kHLUyekXE8VjiXFNnqHQg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPNwbnZj5ZFx9PwMB5i8gs15RkxnlvcmarEnuvZ4G4yODjAHqA_KMXoJegvMy2fcvDxy4&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TXgwRRD9hD9Or-Tb17gMtHbXyCHqXRYTWShOTzbIwNoJIp20mC5_3a8Y_jbhKOiXmoY&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2BpswXmhgWHK05uRS-HCJFgTU7Pq5FkaRg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_k_W0QIgaDrmKK_1yLp92_ZyFQR_M74-k5A&usqp=CAU'
  ];

  const handleImagePress = (index) => {
    navigation.navigate('Selected', { imageUrl: urls[index] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <Avatar size={94} rounded source={Pato}></Avatar>
        <View style={{ flexDirection: 'column', marginLeft: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Víctor Barrera Ocampo</Text>
          <Text style={{ fontSize: 14, marginTop: 10 }}>cafatofo@gmail.com</Text>
        </View>
      </View>
      <View style={{marginTop:20}}>
        <View style={styles.rows}>
          <Image source={{uri:urls[0]}} style={styles.img} onPress={() => handleImagePress(0)}/>
          <Image source={{uri:urls[1]}} style={styles.img} onPress={() => handleImagePress(1)}/>
          <Image source={{uri:urls[2]}} style={styles.img} onPress={() => handleImagePress(2)}/>
        </View>
        <View style={styles.rows}>
          <Image source={{uri:urls[3]}} style={styles.img} onPress={() => handleImagePress(3)}/>
          <Image source={{uri:urls[4]}} style={styles.img} onPress={() => handleImagePress(4)}/>
          <Image source={{uri:urls[5]}} style={styles.img} onPress={() => handleImagePress(5)}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row: {
    flex: 1,
    alignContent: 'space-around',
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  rows: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 8,

  }
})