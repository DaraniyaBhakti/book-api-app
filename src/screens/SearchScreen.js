import React,{useState, useEffect} from 'react';
import {Text,View, TouchableOpacity,StyleSheet, FlatList} from 'react-native';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ListItem from '../components/ListItem';
const SearchScreen = () => {

    const [term,setTerm] = useState('');
    const [searchBook, result, errorMessage] = useResults();
    
    // console.log(!!result? result:null);

    
    const renderItem = ({item}) => (
        <ListItem 
            title={item.title}
            author={item.author_name}
            year={item.first_publish_year}
            cover={item.cover_i}
            type={item.type}
        />
    )
    return( 
        <View style={styles.container}>
            <SearchBar
                value={term}
                onChangeText={setTerm}
                onEndEditing={() => searchBook(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <FlatList 
                data={result}
                // keyExtractor={(result) => result.key}
                renderItem={renderItem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop:'10%'
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });
export default SearchScreen;