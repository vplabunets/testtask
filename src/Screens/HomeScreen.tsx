import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import FunctionsList from '../components/FunctionsList';
import CardCarousel from '../components/CardsCarousel';
import TransactionList from '../components/TransactionsList';
import {transactionsData} from '../data/transactionsData';

const width = Dimensions.get('window').width;

const HomeScreen = () => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topBackground}>
        <Text style={styles.greetingText}>Hello, Eric</Text>
      </View>
      <View style={styles.carouselContainer}>
        <CardCarousel />
      </View>
      <View style={styles.bottomBackground}>
        <FunctionsList />
      </View>
      <View style={styles.transactions}>
        <TransactionList data={transactionsData} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F3F7',
    overflow: 'visible',
  },
  topBackground: {
    paddingLeft: 24,
    paddingTop: width*0.1,
    height:width*0.7,
    width: width,
    backgroundColor: '#111111',
  },
  greetingText: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '700',
    color: '#FFfFFF',
  },
  carouselContainer: {
    position: 'absolute',
     height:width*0.8,
    top: width*0.2,
  },
  bottomBackground: {
    marginTop:width*0.2,
    marginBottom: 20,
    },
  transactions: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
