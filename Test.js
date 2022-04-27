import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';

const DATA = [
    {
        id: 1,
        title: 'Item 1',
    },

    {
        id: 2,
        title: 'Item 2',
    },
    {
        id: 3,
        title: 'Item 3',
    },
    {
        id: 4,
        title: ' Item 4',
    },
    {
        id: 5,
        title: 'Item 5',
    },
    {
        id: 6,
        title: 'Item 6',
    },
    {
        id: 7,
        title: 'Item 7',
    },
];


const App = () => {

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
   );

    const seperator = () => {
       return (
            <View style={styles.seperator} />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(items) => items.id}
               ItemSeparatorComponent={seperator}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    
    title: {
        fontSize: 32,
    },
    seperator: {
        width: 300,
        height: 19,
backgroundColor: 'red'
    }
});

export default App;