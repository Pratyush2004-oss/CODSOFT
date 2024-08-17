import React, { useState } from 'react'
import { Questions } from '../assets/Questions'

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const Question = Questions[index].Question;
  const Options = Questions[index].options;
  const Answer = Questions[index].answer;

  // Locking the answer
  let [lock, setLock] = useState(false);

  const [rightanswercolor, setrightanswercolor] = useState('')
  const [wronganswercolor, setwronganswercolor] = useState('')

  // setting the score
  const [score, setscore] = useState(0);

  let [result, setresult] = useState(false);

  const checkanswer = (e, ans) => {
    if (lock === false) {
      if (Answer === ans) {
        setrightanswercolor('bg-green-500');
        setscore(prev => prev + 1);
      }
      else {
        setrightanswercolor('bg-green-500');
        setwronganswercolor('bg-red-400');
      }
      setLock(true)
    }
  }

  return (
    <div className='flex flex-col gap-10 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden'>
      <h1 className='text-3xl font-semibold text-center border-b-4 border-blue-500/50'>
        <span className='text-blue-500'>Quiz App </span></h1>
      {!result 
        ?
        <div>
        <h1 className='text-xl md:text-3xl font-serif'>Question {index + 1} : {Question}</h1>
        <ul>
          {Options.map((item, idx) => (
            <li key={idx} onClick={(e) => checkanswer(e, item)} className={`font-semibold p-2 border-4 border-black cursor-pointer my-4 rounded-lg ${Answer === item && rightanswercolor} ${Answer !== item && wronganswercolor}`}>{item}</li>
          ))}
        </ul>
        {
          index < Questions.length - 1 ?
            <button onClick={() => {
              setLock(false)
              setIndex(index + 1)
              setrightanswercolor('')
              setwronganswercolor('')
            }} className='btn w-full bg-blue-400 py-2 px-5 font-bold  rounded-full '>Next</button>
            :
            <button className='btn w-full bg-green-400 py-2 px-5 font-bold  rounded-full' onClick={() => setresult(true)}>Submit</button>
          }
          <p className='text-center my-2 md:text-lg font-mono font-bold'>
          {index + 1} out of {Questions.length}
        </p>
      </div>
      :
        <div>
        <h1 className='text-4xl font-serif'>Your scored {score} out of {Questions.length}</h1>
        <button className='btn w-full mt-4 bg-red-400 py-2 px-5 font-bold  rounded-full' onClick={() => {
          setIndex(0)
          setLock(false)
          setscore(0)
          setrightanswercolor('')
          setwronganswercolor('')
          setresult(false)
        }}>Reset</button>
        
        </div>
        }
    </div>
  )
}

export default Quiz