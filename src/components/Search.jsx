import React, { useContext } from 'react'
import { useState } from 'react'
import { data } from '../images/personsdata'
import { BsChevronDown } from 'react-icons/bs'
import "../components/Styles/Search.css"
import { persons,groups } from '../images/personsdata'
import Footer from './Footer'
import Vector from "../images/Vector.svg"
import { Context } from '../App'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [access,setAccess] = useState("Full Access")
    const [filter,setFilter] = useState(persons);
    const [filterGroup,setFilterGroup] = useState(groups);
    const [pill,setPill] = useState({access});
    const [visibility,setVisibility] = useState("visible");
    const [display,setDisplay] = useState("none");
    const {user,setUser} = useContext(Context);
    const navigate = useNavigate();
    
    function searchUser(name){
        const filterData = persons.filter((data) => {
            if (name=== "") {
                return data
            }
            else {
                if (data.name.toLowerCase().includes(name)) {
                    return data
                }
    
            }
        })
        if(persons.includes(filterData[0])){

            setFilter(filterData);
            return;
        }
        else if(groups.includes(filterData[0])){
            setFilterGroup(filterData);
        }
    }
    


  return (
    <div className='search'>
        <section id='sec-1'>
        <span className="badge text-bg-light" style={{display,padding:"10px 20px",fontSize:"18px",fontWeight:"400",backgroundColor:"#95a5a6",cursor:"pointer"}}>{pill.name} &nbsp; &nbsp; <img onClick={()=>{
                            setPill({access});
                            setVisibility("visible");
                            setDisplay("none");
                            
                        }} style={{width:"13px"}} src={Vector}></img></span>
            <input type="text" style={{visibility}} placeholder='Search emails, names or groups' onChange={(e)=>searchUser(e.target.value)} />
            <div>
        <button
          style={{
            border: "none",
            backgroundColour: "#f1f2f6;",
            fontSize: "17px",
            color: "#6B7280",
            minWidth:"200px",
            maxWidth:"200px"
          }}
          data-bs-toggle="dropdown"
        >
          {access} <BsChevronDown />
        </button>
        <ul
          class="dropdown-menu dropdown-menu"
          defaultChecked="No Access"
          style={{
            border: "none",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 10px",
          }}
        >
          {data.map((ele) => {
            let color = "#111827";
            if (ele === "No Access") color = "red";
            return (
              <li
                
                onClick={() => {setAccess(ele)
                setPill({...pill,access:ele})}}
                style={{ color, fontSize: "18px" }}
                class="dropdown-item"
              >
                {ele}
              </li>
            );
          })}
        </ul>
      </div>   
      <div style={{paddingRight:"20px"}}><button onClick={()=>{
        setUser(pill);
        navigate("/")
        

      }} id='invite'>Invite</button></div>    
        </section>
        <section id='sec-2'>
            <p style={{fontSize:"23px",margin:0}}>Select a person</p>
            <ul id='sec-2-person'>
                {filter.map((person)=>{
                    return(
                        <li onClick={()=>{
                            setPill({...pill,name:person.name,img:person.img,email:person.email,grp:false});
                            setVisibility("hidden");
                            setDisplay("block");
                        }} id='person'>
                            <img style={{width:"35px",height:"35px",borderRadius:"50%"}} src={person.img} alt="" />
                        <p  style={{marginLeft:"15px",fontSize:"21px"}}>{person.name}</p>
                        </li>
                    )
                })}
            </ul>
            <p  style={{marginTop:"10px",fontSize:"23px",margin:0}}>Select a group</p>
            <div id='sec-2-person'>
                {filterGroup.map((group)=>{
                    return(
                        <div onClick={()=>{
                            setPill({...pill,name:group,grp:true});
                            setVisibility("hidden");
                            setDisplay("block");
                        }} id='person'>
                            <p style={{width:"35px",height:"35px",background:"#6B7280",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",color:"#fff",borderRadius:"10px"}}>{group[0]}</p>
                        <p style={{marginLeft:"15px",fontSize:"21px"}}>{group}</p>
                        </div>
                    )
                })}
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Search