import axios from 'axios'

// export const getBook = () => {
//     axios({
//         method:'get',
//         url:'http://openlibrary.org/search.json?title=secret',
//     })
//     .then(function (response) {
//         return ( response.data )
//         for (let i =0;i<response.data.docs.length ; i++)
//         {console.log("response", response.data.docs[i].first_publish_year)}
//     })
//     .catch(function (error) {
//         console.log("error", error)
//     })
// }


export default axios.create({
    baseURL:'http://openlibrary.org'
})