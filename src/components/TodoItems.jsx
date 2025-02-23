
import React from 'react'
import {CircleCheckBig} from 'lucide-react'
import {Trash2} from 'lucide-react'
import {Circle} from 'lucide-react'

const TodoItems = ({text, id, isCompleted, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2 '>
      <div className='flex  flex-1  items-center  cursor-pointer  ' onClick={()=>{toggle(id)}}>

        {isCompleted ? <CircleCheckBig  size={35} color='green'/> : <Circle size={35} color='gray'/>}
        <p className={`text-slate-700 ml-4 text-[17px] ${isCompleted ? "line-through ": ""}`}> {text} </p>
      </div>
      <div>
        <Trash2  onClick={()=>{deleteTodo(id)}}  color='red' className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default TodoItems
