import { View, Text, StyleSheet } from 'react-native';
import { useRef } from 'react';
import PureModal from './PureModal';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HomeScreen() {
    const modalRef = useRef(null);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => modalRef.current.openModal()}>
                <Text>Open Modal</Text>
            </TouchableOpacity>
            <PureModal style={styles.modal} ref={modalRef} snapPoints={['25%', '50%']}>
                <Text>Hello world</Text>
            </PureModal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
});

export default HomeScreen;