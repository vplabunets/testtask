import * as React from 'react';
import {View, StyleSheet} from 'react-native';

function PaginationItem({active, length}: {active: number; length: number}) {
  return (
    <View style={styles.pagination}>
      {Array.from({length: length}).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, active === index ? styles.activeDot : null]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 160,
    bottom: 0,
    left: 0,
    right: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#FFFFFF',
  },
  activeDot: {
    backgroundColor: '#000000',
  },
});

export default PaginationItem;
