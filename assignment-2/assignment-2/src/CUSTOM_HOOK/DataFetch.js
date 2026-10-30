// import React from 'react'
// import useFetch from './useFetch';

// const dataFetch = () => {

//     const {data,isLoading,error} = useFetch('https://jsonplaceholder.typicode.com/todos');
     
//     const loadingMessage = <p>Todos is loading</p>
//     const errorMessage =  <p>{error}</p>

//   return (
//     <div>
//          {error && errorMessage}
//         {isLoading && loadingMessage}
//         {data && 
//         data.map((todo)=>{
//             return <p key={todo.id}>{todo.title}</p>
//         })}
//     </div>
//   )
// }

       

// export default dataFetch





// 



// import React, { useEffect, useState } from 'react'



// const useFetch = (url) => {
//     const [data,setData] = useState(null);
//     const [isLoading,setIsLoading] = useState(true);
//     const [error,setError] = useState(null);

//     useEffect(()=>{
//         fetch(url)
//         .then((res)=>{
//             if(!res.ok){
//                 throw Error("fetching is not succesful");
//             }
//             else{
//                 return res.json();
//             }           
//         })
//         .then((data)=>{
//             setData(data);
//             setIsLoading(false);
//             setError(null);
//         })
//         .catch((error)=>{
//             setError(error.message);
//             setIsLoading(false);
//         })

//     },[url])

//     return {data, isLoading, error}
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default useFetch