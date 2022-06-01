import { useState, useEffect } from "react";
import bookApi from "../api/bookApi";

export default () => {

    const [result , setResult] = useState();
    const [errorMessage, setErrorMessage] = useState(null);

    const searchBook = async searchTerm => {
    
        try{
            const response = await bookApi.get('/search.json?',{
                params:{
                    limit:15,
                    title: searchTerm
                }
            });
         setResult( response.data.docs);
        }
        catch(err){
            setErrorMessage('Something went wrong!')
        }
    }

    useEffect(()=>{
        searchBook('')
    },[])

    return [searchBook , result , errorMessage]
}