import React,{useState, useEffect} from 'react';
import {Text,View,StyleSheet, FlatList} from 'react-native';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ListItem from '../components/ListItem';

const SearchScreen = () => {

    const [term,setTerm] = useState('');
    const [searchBook, result, errorMessage] = useResults();
    const [valid,setValid]= useState(false)
    
    const isValid = () => {
        
        if(term.trim()){
            searchBook(term)
            setValid(true)
        }
    }
    useEffect(()=>{

    },[term])

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
                onEndEditing={()=>isValid()}
                />
            {!valid && <Text style={styles.textLabel}>Enter book name to search</Text>}
            {!valid ? errorMessage ? <Text style={styles.textLabel}>{errorMessage}</Text> : null  : null}            
            {!!result? result.length <=0? <Text style={styles.textLabel}>No such book available</Text> : null:null}

            <FlatList 
                data={result}
                renderItem={renderItem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop:'10%',
    //   alignItems: 'stretch',
      justifyContent: 'center',
    },
    textLabel:{
        flex:1,
        fontSize:20,
        position:'absolute',
        alignSelf:'center'
    }
  });
export default SearchScreen;