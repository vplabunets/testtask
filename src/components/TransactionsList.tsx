import React from 'react';
import {FlatList, View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import {TransactionsData} from '../types';
import HomeIndicator from '../assets/homeIndicator.svg';
import TransactionItem from './TransactionItem';

interface TransactionListProps {
  data: TransactionsData[];
}
const width = Dimensions.get('window').width;


const TransactionList: React.FC<TransactionListProps> = ({data}) => {
  return (
    <View style={styles.transactionsContainer}>
      <View style={styles.homeIndicator}>
        <HomeIndicator />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Latest Transactions</Text>
        <Pressable style={styles.allTransactionsButton}>
          <Text style={styles.allTransactionsButtonText}>See all</Text>
        </Pressable>
      </View>
      <FlatList
        data={data}
        renderItem={TransactionItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  transactionsContainer: {
    flex: 1,
    paddingTop: width*0.07,
    paddingHorizontal: 32,
    paddingBottom: 40,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  homeIndicator: {
    position: 'absolute',
    top: width*0.02,
    left: width*0.4,
  },

  titleContainer: {
    marginBottom: width*0.02,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#111111',
    fontSize: 20,
    fontWeight: '700',
  },
  allTransactionsButton: {
    alignSelf: 'center',
  },
  allTransactionsButtonText: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
    color: '#939393',
  },
});
