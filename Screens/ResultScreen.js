import React, { useState, useEffect } from 'react';
import { StyleSheet, RefreshControl, View, ActivityIndicator, FlatList, Text, FetchResult } from 'react-native';


export default Results = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://tgryl.pl/quiz/results');
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const columns = [
        {
            name: 'Nick',
            selector: 'nick',
            sortable: true,
        },
        {
            name: 'Score',
            selector: 'score',
            sortable: true,
        },
    ];

    return (
        <View >
            <Text style={styles.tableHeader}>NICK, SCORE, TOTAL, TYPE, FINISH</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.tableIn}>{item.nick}, {item.score}, {item.total}, {item.type}, {item.createdOn}</Text>
                    </View>
                )}
            keyExtractor={item => item.id }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
        fontSize: 15,
        fontWeight: 'bold'
        
    },
    tableIn: {
        fontSize: 15,
    }
});
