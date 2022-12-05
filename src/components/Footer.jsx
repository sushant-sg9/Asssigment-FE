import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaLink } from "react-icons/fa";


const Footer = () => {
    
  return (
    <div>
        <section id="section-3">
        <div>
          <p style={{fontSize:"18px",color:"#6B7280",cursor:"pointer"}}>
            <AiOutlineQuestionCircle/> &nbsp; learn about sharing
          </p>
        </div>
        <div>
          <p href="#" style={{fontSize:"20px",color:"#111827",textDecoration:"none",cursor:"pointer"}}>
            <span>
              <FaLink />
            </span>
            &nbsp;
            Copy link
          </p>
        </div>
      </section>
    </div>
  )
}

export default Footer