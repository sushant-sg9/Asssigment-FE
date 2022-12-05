import './App.css';
import Search from './components/Search';
import { createContext, useEffect, useState } from 'react';
import Input from './components/Input';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {HiShare} from "react-icons/hi"
export const Context = createContext();

function App() {
  const [user,setUser] = useState({});
  const [set,setSet] = useState(new Set());
  const [arr,setArr] = useState([]);
  const [display,setDisplay] = useState("none");
  useEffect(()=>{
    
      if(set.has(user.name)||!user.name) return;
      set.add(user.name);
      setArr([...arr,user]);
  
  },[user])
  
  return (
    <>
    <Context.Provider value={{user,setUser,arr}}>
    <div className="App">
      <h2>Click on Share Button</h2>
      <button onClick={()=>setDisplay("block")} id='share'>Share &nbsp;<HiShare/></button>
      <Routes>
      <Route path='/' element={<Input display={display}/>}/>
      <Route path='/add' element={<Search/>} />
      </Routes>
    </div>
      </Context.Provider>
      </>
  );
}

export default App;