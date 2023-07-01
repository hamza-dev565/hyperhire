import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        marginLeft: 2,
    },
    coverImage: {
        width: "100%",
        height: 140,
    },
    content: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        marginBottom: 5,
    },
    discountRate: {
        fontSize: 16,
        color: "#FF0000",
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
    },
    priceView: {
        flexDirection: "row", justifyContent: "space-between"
    }
});