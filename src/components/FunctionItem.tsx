import React from 'react';
import {StyleSheet, Pressable, View, Text, Dimensions} from 'react-native';

interface FunctionItemProps {
  title: string;
  backgColor: string;
  size: number;
  children: React.ReactNode;
}

const width = Dimensions.get('window').width;

const FunctionItem: React.FC<FunctionItemProps> = ({
  title,
  backgColor,
  size,
  children,
}) => {
  return (
    <View style={styles.functionContainer}>
      <Pressable
        style={({pressed}) => [
          styles.pressableContainer,
          {
            width: size,
            height: size,
            backgroundColor: backgColor,
            opacity: pressed ? 0.5 : 1,
          },
        ]}
        android_ripple={{color: 'rgba(0, 0, 0, 0.1)'}}>
        {children}
      </Pressable>
      <Text style={styles.functionText}>{title}</Text>
    </View>
  );
};

export default FunctionItem;

const styles = StyleSheet.create({
  functionContainer: {
     height: width*0.3,
  },
  pressableContainer: {
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 5,
  },
  functionText: {
    alignSelf: 'center',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '600',
  },
});
