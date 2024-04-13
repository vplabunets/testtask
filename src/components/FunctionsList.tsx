import React from 'react';
import {StyleSheet, View} from 'react-native';
import FunctionItem from './FunctionItem';
import {functionsData} from '../data/functionsData';

const FunctionsList = () => {
  return (
    <View style={styles.listContainer}>
      {functionsData.map(({id, title, size, icon, backgColor}) => {
        return (
          <FunctionItem
            key={id}
            title={title}
            size={size}
            backgColor={backgColor}>
            {icon}
          </FunctionItem>
        );
      })}
    </View>
  );
};

export default FunctionsList;

const styles = StyleSheet.create({
  listContainer: {
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
