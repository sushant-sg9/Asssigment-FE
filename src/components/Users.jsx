import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { data } from "../images/personsdata";
const Users = ({person}) => {
  
  const [access, setAccess] = useState(person.access);
    if(!person.grp){
        return (
            <div className="oslash">
                
              <div className="oslash-logo">
                <img src={person.img} alt="" />
                <div style={{ marginLeft: "20px", paddingTop: "10px" }}>
                  <p style={{ marginBottom: 0, fontSize: "23px", color: "#111827" }}>
                    {person.name}
                  </p>
                  <p style={{ fontSize: "18px", color: "#6B7280" }}>
                    {person.email}
                  </p>
                </div>
              </div>
              <div>
                <button
                  style={{
                    border: "none",
                    background: "#fff",
                    fontSize: "17px",
                    color: "#6B7280",
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
                        onClick={() => setAccess(ele)}
                        style={{ color, fontSize: "18px" }}
                        class="dropdown-item"
                      >
                        {ele}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        
    }
    else{
        return (
            <div className="oslash">
                
              <div className="oslash-logo">
                <span style={{width:"50px",height:"50px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px",background:"#6B7280",color:"#fff"}}>{person.name[0]}</span>
                <div style={{ marginLeft: "20px", paddingTop: "10px" }}>
                  <p style={{ marginBottom: 0, fontSize: "23px", color: "#111827" }}>
                    {person.name}
                  </p>
                  <p style={{ fontSize: "18px", color: "#6B7280" }}>
                    {`Everyone in team ${person.name}`}
                  </p>
                </div>
              </div>
              <div>
                <button
                  style={{
                    border: "none",
                    background: "#fff",
                    fontSize: "17px",
                    color: "#6B7280",
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
                        onClick={() => setAccess(ele)}
                        style={{ color, fontSize: "18px" }}
                        class="dropdown-item"
                      >
                        {ele}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
    }
  
};

export default Users;