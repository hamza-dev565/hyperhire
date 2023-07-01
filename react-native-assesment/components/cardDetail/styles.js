import { StyleSheet } from 'react-native';
export default
    styles = StyleSheet.create({
        dotStyle: {
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
        },
        imageStyle: {
            width: '100%',
            height: '100%'
        },
        container: {
            flex: 1,
            marginHorizontal: 10,
        },
        title: {
            fontSize: 18,
            marginBottom: 5,
            fontWeight: 'bold',
            marginTop: 10
        },
        description: {
            color: '#808080',
        },
        discountRate: {
            fontSize: 16,
            color: "#FF0000",
            marginBottom: 5,
            fontWeight: "bold",
        },
        price: {
            fontSize: 16,
            fontWeight: "bold",
        },
        priceView: {
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
        },
        commentInputContainer: {
            backgroundColor: '#ffffff',
            paddingBottom: 5,
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
        },
        commentIcon: {
            width: 24,
            height: 24,
        },
        commentInput: {
            flex: 1,
            height: 60,
            backgroundColor: '#ffffff',
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingTop: 12,
            fontSize: 16,
        },
    });