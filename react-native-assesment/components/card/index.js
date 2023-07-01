import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const Card = ({ title, discountRate, coverImage, price, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onPress}
    >
      <Image source={{ uri: coverImage }} style={styles.coverImage} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.priceView}>
          <Text style={styles.discountRate}>{discountRate}% off</Text>
          <Text style={styles.price}>$ {price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
