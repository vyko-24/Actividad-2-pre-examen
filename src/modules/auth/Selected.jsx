import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/base';

export default function Selected({route}) {
  const {imageUrl} = route.params;
  return (
    <View style={styles.container}>
      <Card>
        <View style={{alignItems:'center', marginBottom:10}}>
          <Card.Image
            style={{ padding: 0,
              width: 300,
              height: 200, }}
            source={{uri:imageUrl}}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{fontSize:18, marginHorizontal:5}}>18</Text>
            <Icon name='thumb-up' type='material-community' />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icon name='send' type='material-community' />
            <Icon name='share' type='material-community' />
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignContent: 'space-between',
    marginHorizontal: 10,

    // shadow ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // shadow android
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 8,
  }
})