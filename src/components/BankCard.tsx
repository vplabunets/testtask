import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {CardData} from '../types';
import Visa from '../assets/cardIcons/visa.svg';
import Chip from '../assets/cardIcons/chip.svg';
import {gradientValue} from '../data/gradientValue';
import {formattedCurrency} from '../helpers/formattedCurrency';

const BankCard = ({data}: {data: CardData}) => {
  return (
    <View style={styles.mainCardContainer}>
      <LinearGradient
        colors={gradientValue(data.colorType)}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.9, y: 0.9}}
        locations={[0, 1]}
        style={styles.gradient}>
        <View style={styles.cardHolderContainer}>
          <Text style={styles.balanceText}>Your balance</Text>
          <Text style={styles.balanceValue}>
            {formattedCurrency(data.balance, data.currency)}
          </Text>
          <Text style={styles.cardNumber}>{data.cardNumber}</Text>
          <View style={styles.cardHolderInfoWrapper}>
            <View style={styles.cardHolderNameWrapper}>
              <Text style={styles.cardHolderText}>Card holder name</Text>
              <Text style={styles.cardHolderData}>{data.cardHolder}</Text>
            </View>
            <View style={styles.cardHolderExpiryWrapper}>
              <Text style={styles.cardHolderText}>Expiry date</Text>
              <Text style={styles.cardHolderData}>{data.expiryDate}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.chipContainer}>
        <ImageBackground
          source={require('../assets/cardIcons/effect.png')}
          resizeMode="cover"
          style={styles.chipBackgroundImage}>
          <Visa width={42} height={13} style={styles.visaLogo} />
          <Chip width={34} height={26} style={styles.chipLogo} />
        </ImageBackground>
      </View>
    </View>
  );
};

export default BankCard;

const styles = StyleSheet.create({
  _mainCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 350,
    height: 230,
    overflow: 'hidden',
    borderRadius: 18,
    backgroundColor: 'rgb(217, 217, 217)',
  },
  get mainCardContainer() {
    return this._mainCardContainer;
  },
  set mainCardContainer(value) {
    this._mainCardContainer = value;
  },
  gradient: {
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },
  cardHolderContainer: {
    width: 264,
    height: 230,
    padding: 24,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    borderRightWidth: 1,
    borderRightColor: '#FFFFFF',
  },

  balanceText: {
    marginBottom: 4,
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 13,
    color: '#FFFFFF',
    textShadowColor: 'rgba(51, 51, 51, 0.1)',
  },
  balanceValue: {
    marginBottom: 44,
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 39,
  },
  cardNumber: {
    marginBottom: 16,
    color: '#FFFFFF',
    textShadowColor: 'rgba(51, 51, 51, 0.16)',
    fontSize: 14,
    lineHeight: 21,
  },
  cardHolderInfoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHolderNameWrapper: {},
  cardHolderText: {
    marginBottom: 4,
    color: '#FFFFFF',
    textShadowColor: 'rgba(51, 51, 51, 0.16)',
    fontSize: 10,
    lineHeight: 13,
  },
  cardHolderExpiryWrapper: {},
  cardHolderData: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '700',
  },
  chipContainer: {
    flex: 1,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    backgroundColor: '#111111',
  },
  chipBackgroundImage: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 24,
  },
  visaLogo: {
    alignSelf: 'center',
  },
  chipLogo: {
    alignSelf: 'center',
  },
});
