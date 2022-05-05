import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react'
function Content() {
  const [name,setName] = useState("")
  const temp=useSelector((state)=> state.temp.name);
  const dispatch=useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(update({name}))
  };
  return (
    <div className="right">
      <h3>Hello!!! Enter Your Name</h3>
      <br></br>
      <form onSubmit={handleSubmit}>
     <label>
        <input type="text" name="username" placeholder="please enter your name" onChange={(e)=>setName(e.target.value)} required
      />
      </label><br></br>
      <input type="submit"/>
      </form>
    </div>
  );
}

export default Content;