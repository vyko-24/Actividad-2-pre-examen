import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, Icon, Image } from '@rneui/base'
import A from '../../../assets/A.jpg'
import B from '../../../assets/B.png'
import C from '../../../assets/C.jpg'
import D from '../../../assets/D.jpg'
import E from '../../../assets/E.jpg'
import F from '../../../assets/F.png'

export default function Search() {
  return (
    <View style={styles.container}>
      <Input
        placeholder='Buscar' rightIcon={
          <Icon name='magnify' type='material-community' color='red' />
        } />


      <View style={{ marginTop: 20 }}>
        <View style={styles.rows}>
          <Image source={A} style={styles.img} />
          <Image source={B} style={styles.img} />
          <Image source={C} style={styles.img} />
        </View>
        <View style={styles.rows}>
          <Image source={D} style={styles.img} />
          <Image source={E} style={styles.img} />
          <Image source={F} style={styles.img} />
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