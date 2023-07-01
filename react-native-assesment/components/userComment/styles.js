import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    userImage: { width: '100%', height: '100%' },
    imageContainer: { width: 40, height: 40, borderRadius: 25, overflow: 'hidden' },
    userName: { alignSelf: 'center', marginHorizontal: 6, fontWeight: 'bold' },
    verfiyImage: { width: 15, height: 15, alignSelf: 'center' },
    verifyText: { alignSelf: 'center', marginLeft: 4, color: '#808080', fontStyle: 'italic' },
    reactionContainer: { flexDirection: "row", marginTop: 7 },
    reactionImage: { width: 18, height: 18, alignSelf: 'center' },
});