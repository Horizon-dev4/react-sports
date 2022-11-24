import React, { useEffect, useState } from 'react';
import Teams from "../../../FakeData.json";
import "./UseEffect.css";

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect");
    }, []);
    
  return (
      <div className='pd'>
      <div>
        <h2>Count: {count} </h2>
        <div className='btn-center'>
            <button onClick={() => {setCount(count => count + 1)}}>+</button>
            <button onClick={() => {setCount(count => count - 1)}}>-</button>
        </div>
      </div>
      
      {
        Teams && Teams.map(team =>{
            return(
                <div className='name' key={team.id}>
                    <span className='mr f-name'>
                    {team.first_name}
                    </span> 
                    <span className='vs'>VS</span>
                    <span className='mr l-name'>
                    {team.last_name}
                    </span>
                    <img width="30px" src={team.pic} />
                </div>
            )
        })
      }
    </div>
  )
}

export default UseEffect;
