import { useState } from "react";
import { RxCaretRight } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";


import Menu from "./Menu";

import './Sidebar.css';
function Sidebar(){
    const [openIndex, setOpenIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <button className="menu-btn" onClick={() => setIsOpen(true)}>
            <HiMenu/>
        </button>
        {isOpen && (
            <div className="overlay" onClick={() => setIsOpen(false)}>

            </div>
        )}
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="close-btn" onClick={() => setIsOpen(false)}>
                <IoMdClose/>
            </div>
            <h2>Aljazeera Private University</h2>
            <div className="nav">
                {Menu.map((section, index) => {
                    const Icons = section.icon;

                    return(
                        <div key={index}>
                            <div className="info" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                    <Icons className="icon"/>
                                    <h3>{section.title}</h3>
                                    <RxCaretRight className= {`caret-right ${openIndex === index ? "rotate-90" : ""}`}/>
                            </div>
                            {openIndex === index && (
                                <div className="data">
                                    <ul>
                                        {section.items.map((item, i) =>(
                                            <li key={i}>
                                                <FaRegCircle className="icons"/>
                                                <h4> {item}</h4>
                                                <div></div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    );
}
export default Sidebar