import { useState, useEffect } from "react";
import bookApi from "../api/bookApi";

export default () => {

    const [result , setResult] = useState();
    const [errorMessage, setErrorMessage] = useState(null);

    const searchBook = async searchTerm => {
    
        try{
            const response = await bookApi.get('/search.json?',{
                params:{
                    limit:5,
                    title: searchTerm
                }
            });
         setResult( response.data.docs);
        //     for (let i =0;i<response.data.docs.length ; i++)
        //     {
        //     console.log("response", response.data.docs[i].title +"   "+response.data.docs[i].author_name
        //         +"    "+response.data.docs[i].first_publish_year+"   "+response.data.docs[i].cover_i);
        // }
        }
        catch(err){
            setErrorMessage(err+"Got error")
            console.log('empty result')
        }
    }

    useEffect(()=>{
        searchBook('')
    },[])

    return [searchBook , result , errorMessage]
}