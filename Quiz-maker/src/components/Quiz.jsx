import React, { useState } from 'react'
import { Questions } from '../assets/Questions'

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const Question = Questions[index].Question;
  const Options = Questions[index].options;
  const Answer = Questions[index].answer;

  // Locking the answer
  let [lock, setLock] = useState(false);

  // setting the score
  const [score,setscore] = useState(0);

  const checkanswer = (e, ans) => {
    if (lock === false) {
      if (Answer === ans) {
        e.target.classList.add("bg-green-500")
        setscore(prev => prev+1);
      }
      else {
        e.target.classList.add('bg-red-400');
      }
      setLock(true)
    }
  }

  return (
    <div className='flex flex-col gap-10 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center border-b-4 border-blue-500/50'>
        <span className='text-blue-500'>Quiz App </span></h1>
      <div className=''>
        <h1 className='text-xl md:text-3xl font-serif'>Question {index + 1} : {Question}</h1>
        <ul>
          {Options.map((item, idx) => (
            <li key={idx} onClick={(e) => checkanswer(e, item)} className={`font-semibold p-2 border-4 border-black cursor-pointer my-4 rounded-lg `}>{item}</li>
          ))}
        </ul>
        {
          index < Questions.length - 1 ?
            <button onClick={() => {
              setLock(false)
              setIndex(index + 1)
              li.classList.remove("bg-red-500","bg-green-500")
            }} className='btn w-full bg-blue-400 py-2 px-5 font-bold  rounded-full '>Next</button>
            :
            <button className='btn w-full bg-green-400 py-2 px-5 font-bold  rounded-full '>Check result</button>
        }
        <p className='text-center my-2 md:text-lg font-mono font-bold'>
          {index + 1} out of {Questions.length}
        </p>
      </div>
    </div>
  )
}

export default Quiz