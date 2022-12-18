import React from 'react';
import { View, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import { resultsData } from '../Src/ResultsTableData'


const ResultsTable = () => {
    const result = resultsData
    
    return (
        <View>
          <View style={styles.row}>
            <Text style={styles.title}>Nick</Text>
            <Text style={styles.title}>Point</Text>
            <Text style={styles.title}>Type</Text>
            <Text style={styles.title}>Date</Text>
          </View>
                <View style={styles.row}>
                  <Text style={styles.cell}>Damian</Text>
                  <Text style={styles.cell}>1/5</Text>
                  <Text style={styles.cell}>General</Text>
                  <Text style={styles.cell}>2022-12-11</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cell}>Majka</Text>
                  <Text style={styles.cell}>2/5</Text>
                  <Text style={styles.cell}>General</Text>
                  <Text style={styles.cell}>2022-12-11</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cell}>Test3</Text>
                  <Text style={styles.cell}>3/5</Text>
                  <Text style={styles.cell}>General</Text>
                  <Text style={styles.cell}>2022-12-11</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cell}>Test</Text>
                  <Text style={styles.cell}>4/5</Text>
                  <Text style={styles.cell}>General</Text>
                  <Text style={styles.cell}>2022-12-13</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cell}>Test5</Text>
                  <Text style={styles.cell}>4/5</Text>
                  <Text style={styles.cell}>General</Text>
                  <Text style={styles.cell}>2022-12-13</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cell}>Test</Text>
                  <Text style={styles.cell}>4/5</Text>
                  <Text style={styles.cell}>General</Text>
                  <Text style={styles.cell}>2022-12-13</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cell}>Test</Text>
                  <Text style={styles.cell}>4/5</Text>
                  <Text style={styles.cell}>General</Text>
                  <Text style={styles.cell}>2022-12-13</Text>
                </View>
        </View>
        
      );
    };
    
    const styles = {
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      title: {
        fontWeight: 'bold',
      },
      cell: {
        paddingHorizontal: 8,
      },
    };

export default ResultsTable;