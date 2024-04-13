import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import BankCard from './BankCard';
import PaginationItem from './PaginationItem';
import {cardsData} from '../data/cardsData';

function CardCarousel() {
  const width = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleProgressChange = (_: any, absoluteProgress: any) => {
    setCurrentIndex(absoluteProgress);
  };

  return (
    <View style={{flex: 1}}>
      <Carousel
        loop={false}
        style={{height: 300}}
        mode="parallax"
        width={width}
        height={width * 0.7}
        autoPlay={false}
        data={cardsData}
        renderItem={({item}) => <BankCard data={item} />}
        onProgressChange={handleProgressChange}
      />
      <PaginationItem active={currentIndex} length={cardsData.length} />
    </View>
  );
}

export default CardCarousel;
