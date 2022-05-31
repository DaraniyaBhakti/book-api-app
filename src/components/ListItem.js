import React from "react";
import { View, Text, StyleSheet} from 'react-native';

const ListItem = (props) => {

    return(
        <View style={styles.view}>
            <Text>Name : {props.title}</Text>
            <Text>Authors : {props.author}</Text>
            <Text>Published in : {props.year}</Text>
            <Text>Cover : {props.cover}</Text>
            <Text>Type : {props.type}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    view:{
        marginHorizontal:'2%',
        marginTop:'3%',
        padding:'3%',
        elevation:5,
        // borderWidth:1,
        // backgroundColor:'grey'
    }
})

export default ListItem;