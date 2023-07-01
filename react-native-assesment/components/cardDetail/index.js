import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import UserComment from "../userComment"
import styles from './styles';

const DetailView = ({ route }) => {
  const { data } = route.params
  const [comment, setComment] = useState('');

  const images = [
    data.coverImage,
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  const handleCommentChange = (text) => {
    setComment(text);
  };

  return (
    <>
      <SliderBox
        images={images}
        sliderBoxHeight={200}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        autoplay
        circleLoop
        resizeMethod="resize"
        resizeMode="cover"
        imageLoadingColor="#2196F3"
        dotStyle={styles.dotStyle}
        imageStyle={styles.imageStyle}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries</Text>
        <View style={styles.priceView}>
          <Text style={styles.discountRate}>{data.discountRate}% off</Text>
          <Text style={styles.price}>$ {data.price}</Text>
        </View>
        {/* user comments */}
        <ScrollView>
          <UserComment status={true} />
          <UserComment name={'Alan Walker'} />
          <UserComment />
        </ScrollView>
        {/* Comment Input */}
        <View style={styles.commentInputContainer}>
          <Image
            source={require('../../assets/comment.png')}
            style={styles.commentIcon}
          />
          <TextInput
            style={styles.commentInput}
            placeholder="Type your comment..."
            value={comment}
            onChangeText={handleCommentChange}
            multiline
            numberOfLines={3}
          />
        </View>
      </View>
    </>
  );
};


export default DetailView;