import React from 'react';
import {TransactionsData} from '../types';
import brendaHarperImage from '../assets/usersPhoto/brendaHarper.png';
import dylanBonnerImage from '../assets/usersPhoto/dylanBonner.png';
import lolaThorntonImage from '../assets/usersPhoto/lolaThornton.png';
import aliceWallaceImage from '../assets/usersPhoto/aliceWallace.png';
import liamHoltImage from '../assets/usersPhoto/liamHolt.png';
import garyStuartImage from '../assets/usersPhoto/garyStuart.png';
import ArrowRight from '../assets/arrowRight.svg';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const TransactionItem = ({item}: {item: TransactionsData}) => {
  let imageSource;
  switch (item.image) {
    case 'brendaHarper.png':
      imageSource = brendaHarperImage;
      break;
    case 'dylanBonner.png':
      imageSource = dylanBonnerImage;
      break;
    case 'lolaThornton.png':
      imageSource = lolaThorntonImage;
      break;
    case 'aliceWallace.png':
      imageSource = aliceWallaceImage;
      break;
    case 'liamHolt.png':
      imageSource = liamHoltImage;
      break;
    case 'garyStuart.png':
      imageSource = garyStuartImage;
      break;
    default:
      imageSource = brendaHarperImage;
  }
  return (
    <View style={styles.transactionItem}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        {imageSource && <Image source={imageSource} style={styles.image} />}
        <View style={styles.nameDateContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>
          {item.type !== 'outcome' ? '+' : '-'}
          {'$' + item.value}
        </Text>
        <Pressable style={styles.arrowButton}>
          <ArrowRight />
        </Pressable>
      </View>
    </View>
  );
};

export default TransactionItem;
const styles = StyleSheet.create({
  transactionItem: {
    paddingVertical: 4,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 56,
    height: 56,
    marginRight: 8,
  },
  nameDateContainer: {
    justifyContent: 'center',
  },
  name: {
    color: '#111111',
    fontSize: 15,
    lineHeight: 18,
  },
  date: {
    fontSize: 13,
    lineHeight: 16,
    color: '#939393',
  },
  valueContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    paddingRight: 16,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '600',
  },
  arrowButton: {
    width: 4,
    height: 8,
  },
});
