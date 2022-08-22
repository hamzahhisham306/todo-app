import React from 'react'

// const reducer=(state, action)=>{
//     switch(action.type){
//         case 'All':return state;
//         case 'Active':return )
//     }
// }
function Buttons({arrayDo}) {
// const [item, dispatch]=useReducer(reducer, arrayDo);
  return (
    <div className='buttons'>
      <button onClick={()=>console.log('Click')}>All</button>
      <button onClick={()=>console.log('Click')}>Active</button>
      <button onClick={()=>console.log('Click')}>Complete</button>
    </div>
  )
}

export default Buttons
