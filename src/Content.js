import React from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {update} from "./app/userSlice";

function Content() {
  const [name,setName] = useState("");
  const dispatch=useDispatch();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(update({name}));
  };
  return (
    <div className="right">
      <h3>Hello!!! Enter Your Name</h3>
      <br></br>
     
     <label>
        <input type="text"  placeholder="please enter your name" onChange={(event)=>setName(event.target.value)}/>
      </label><br/>
      <button onClick={handleUpdate}> Enter</button>

    </div>
  );
}

export default Content;
