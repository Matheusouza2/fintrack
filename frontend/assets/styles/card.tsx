import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 1,
        margin: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: width * 0.4,
        width: width * 0.4,
    },
    progressCircle: {
        height: '100%',
        width: '100%',
    },
    textContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'rgb(134, 65, 244)',
    },
    infoContainer: {
        marginLeft: 20,
        flex: 1,
    },
    infoItem: {
        marginBottom: 10,
    },
    infoText: {
        fontSize: 16,
        color: '#333',
    },
    valueTextGreen: {
        fontSize: 16,
        color: 'green',
    },
    valueTextRed: {
        fontSize: 16,
        color: 'red',
    },
});