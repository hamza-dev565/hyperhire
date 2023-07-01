import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import data from "../data";
import Card from "../../components/card";
import styles from "./styles";
import { serverAddress } from "../../env"


const Home = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
      fetchData();
    }, []);
    console.log('hello in the app')
    const fetchData = async () => {
      if (isLoading) {
        return;
      }

      setIsLoading(true);

      // Fetch data from JSONPlaceholder API
      const response = await fetch(
        `http://${serverAddress}:3000/api/v1/books?page=${page}`
      );
      const responseData = await response.json();
      setData((prevData) => {
        if (Array.isArray(responseData.data)) {
          console.log("IN IF COndition")
          return [...prevData, ...responseData.data];
        } else {
          return prevData;
        }
      });
      console.log(responseData.paginationInfo.totalPages)
      setTotalPages(responseData.paginationInfo.totalPages);
      setPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    };

    const handleLoadMore = () => {
      console.log('in handleMore data', typeof(totalPages), page, totalPages, page<totalPages)
      if (!isLoading && page <= totalPages) {
        console.log("fetchData")
        fetchData();
      }
    };

    const renderFooter = () => {
      if (!isLoading) {
        return null;
      }

      return (
        <View style={{ paddingVertical: 20 }}>
          <ActivityIndicator size="large" color="#000000" />
        </View>
      );
    };
  const handleCardPress = (card) => {
    navigation.navigate("Detail", { data: card });
  };

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Card
        key={item.id}
        title={item.title}
        discountRate={item.discountRate}
        coverImage={item.coverImage}
        price={item.price}
        onPress={() => handleCardPress(item)}
      />
      {cardData.length % 2 === 1 && item.id === cardData.length && (
        <View style={styles.emptyCard} />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.8}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};
export default Home;
