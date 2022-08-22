import React, { useState } from 'react'
import ListDO from './ListDO';

function Input() {
    const [doArray, setDo]=useState([]);
    const [ArrayCom, setCom]=useState([]);
    const [show, setShow]=useState(false);
    const [All, setAll]=useState([]);
    const [showAll, setShowAll]=useState(false);

  const handlerSubmit=(e)=>{
    e.preventDefault();
    const doSome=e.target.do.value;
    setDo([...doArray,{
        id:Math.floor(Math.random()*1000),
        complete:false,
        value:doSome
    }]);
    e.target.reset();
  }
  console.log('from do',doArray)
  const handlerDelete=(id)=>{
    setDo(doArray.filter((todo)=>todo.id!==id))
  }
  const handlerComplete=(data, id)=>{
    setCom([...ArrayCom, data]);
    setDo(doArray.filter((todo)=>todo.id!==id))
  }
  const ShowComplet=()=>{
    setShow(!show)
    if(showAll===true){
      setShowAll(!showAll);
    }
  }
  const handlerAll=()=>{
    setShowAll(!showAll);
    setAll([...doArray, ...ArrayCom]);
    if(show===true){
      setShow(!show);
    }
  }
  console.log('from filter',doArray)
  return (
    <div>
     <form onSubmit={handlerSubmit}>
      <input type='text' id='do' name='do'/>
      <button   className='button-add'>Add Todo</button>
      </form> 
      {doArray.map((todo)=>{

        return (
          <div className='do-list'  key={todo.id}>
        <ListDO todo={todo.value} />
                <div className='btn-li'>
                 <button onClick={()=>  handlerDelete(todo.id)}>Delete</button>
                 <button onClick={()=>  handlerComplete(todo.value,todo.id)} >Complete</button>
          </div>
          </div>      
        )
      })}
     <div className='buttons'>
    <button onClick={()=>  handlerAll()}>All</button>
    <button onClick={()=>ShowComplet()}>Complete</button>
    {show?<h1>All task Complete</h1>:''}
    {showAll?<h1>All task </h1>:''}

    {show?ArrayCom.map((list,index)=>{
      return (
        <>
        <ol  key={index}>
      <li>{list}</li>
      </ol>
      </>
      )
    })

    :''}
     {showAll?All.map((list,index)=>{
      return (
        <>
        <ol  key={index}>
      <li>{list.value?list.value:list}</li>
      </ol>
      </>
      )
    }):''}
  </div>
    </div>
  )
}

export default Input
