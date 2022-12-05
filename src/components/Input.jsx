import React, { useContext } from "react";
import "../components/Styles/Input.css";
import { MdPublic } from "react-icons/md";
import Users from "./Users";
import Footer from "./Footer";
import { Context } from "../App";
import logo from "../images/logo.svg";
import { useNavigate } from "react-router-dom";


const Input = ({display}) => {
    const navigate = useNavigate();
    const {arr} = useContext(Context);
    const oslash = {
        name:"Everyone at OSlash",
        img:logo,
        email:"25 workspace members",
        access:"No access"
    };
    
  return (
    <div style={{display}} className="input">
      <section id="section-1">
        <div className="shareweb">
          <div>
            <MdPublic style={{ fontSize: "50px", color: "#6B7280" }} />
          </div>
          <div style={{ marginLeft: "15px" }}>
            <p style={{ margin: 0, fontSize: "23px", color: "#111827" }}>
              Share to web
            </p>
            <p style={{ fontSize: "18px", color: "#6B7280", marginBottom: 0 }}>
              Publish and share link with anyone
            </p>
          </div>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            style={{
              backgroundColor: "#E5E7EB",
              width: "55px",
              height: "32px",
              color: "white",
              border: "none",
              cursor:"pointer"
            }}

          />
        </div>
      </section>
      <section id="section-2">
        <div className="input-div">
          <input type="text" placeholder="People, emails, groups" onClick={()=>navigate("/add")} />
          <button>Invite</button>
        </div>
        <div  style={{overflowY:"scroll",minHeight:"250px",maxHeight:"250px"}}>
            <Users person={oslash}/>
        {arr.map((person)=>{
            
            return <Users person={person}/>
        })}
        </div>
        
      </section>
      <Footer/>
    </div>
  );
};

export default Input;