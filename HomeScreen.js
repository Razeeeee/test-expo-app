import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRef, useCallback } from 'react';
import PureModal from './PureModal';

function HomeScreen() {
    const modalRef = useRef(null);

    const openModal = useCallback(() => {
        modalRef.current?.present();
      }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={openModal}>
                <Text>Open Modal</Text>
            </TouchableOpacity>
            <PureModal ref={modalRef} style={styles.modal} snapPoints={['25%', '50%']}>
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