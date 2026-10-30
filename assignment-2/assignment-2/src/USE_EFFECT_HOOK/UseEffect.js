import React, { useEffect, useState } from 'react'

const loadingMessage = <p>Todos is loading</p>

const UseEffect = () => {
    const [todos,setTodos] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{  
             if(!res.ok){
                 throw Error("fetching is not succesfull")
             }
             else{
                 return res.json()
             }
         })
         .then((data)=>{
             setTodos(data);
             setIsLoading(false)
             setError(null)
         })
         .catch((error)=>{
             setError(error.message);
             setIsLoading(false);
         })
    },[])
  return (
    <div>
        {error && <p>{error}</p>}
        {isLoading && loadingMessage}
        {todos && 
        todos.map((todo)=>{
            return <p key={todo.id}>{todo.title}</p>
        })}
    </div>
  )
}

export default UseEffect

// trow catch error
// data fetching 