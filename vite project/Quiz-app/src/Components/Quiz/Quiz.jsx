import React, { useState } from 'react'
import './Quiz.css' 
import {data} from '../../assets/data'

const Quiz = () => {
    const [index,setIndex] = useState(0)
    const [questions,setQuestions] = useState(data[index]);
    const [lock,setLock] = useState(true)
    const checkAns = (e, ans)=>{
        if(lock === true){
            if(questions.ans === ans){
                e.target.classList.add("correct")
                setLock(false)
            }
            else{
                e.target.classList.add("wrong")
                setLock(false)
            }
        }
    }
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr/>
        <h2>{index+1}.{questions.question}</h2>
        <ul>
            <li onClick={(e)=>{checkAns(e,1)}}>{questions.option1}</li>
            <li onClick={(e)=>{checkAns(e,2)}}>{questions.option2}</li>
            <li onClick={(e)=>{checkAns(e,3)}}>{questions.option3}</li>
            <li onClick={(e)=>{checkAns(e,4)}}>{questions.option4}</li>
        </ul>
        <button>Next</button>
        <div className='index'>
            1 of 5 questions
        </div>
    </div>
  )
}

export default Quiz