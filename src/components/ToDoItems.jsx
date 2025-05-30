import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import del from '../assets/del.png'

const ToDoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

        <div onClick={()=> {toggle(id)}}
         className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick: not_tick} alt="" className='w-7'/>
            <p className={`ml-4 text-[17px] ${isComplete ? "line-through text-slate-400" : "text-slate-700"}`}>
  {text}
</p>
        </div>

        <img onClick= {()=>{deleteTodo(id)}}src={del} alt="" className='w-3.5 cursor-pointer'/>

    </div>
  )
}

export default ToDoItems