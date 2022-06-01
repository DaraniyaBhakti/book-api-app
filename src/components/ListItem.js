import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const ListItem = (props) => {

    return (
        <View style={styles.view}>
            <Text><Text style={styles.textLabel}>Name : </Text>{props.title}</Text>
            <Text><Text style={styles.textLabel}>Authors : </Text>{props.author}</Text>
            <Text><Text style={styles.textLabel}>Published in : </Text>{props.year}</Text>
            <Text><Text style={styles.textLabel}>Cover : </Text>{props.cover}</Text>
            <Text><Text style={styles.textLabel}>Type : </Text>{props.type}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    view: {
        marginHorizontal: '2%',
        marginTop: '2%',
        padding: '3%',
        borderWidth:0.5,
        borderRadius:5
        

    },
    textLabel:{
        fontWeight:'500'
    }
})

export default ListItem;