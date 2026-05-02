import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { HiMenu } from "react-icons/hi";

function MainLayout({children}){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <div className="flex h-screen">
                <button className="menu-btn" onClick={() => setIsOpen(true)}>
                    <HiMenu/>
                </button>
                    {isOpen && (
                        <div className="overlay" onClick={() => setIsOpen(false)}></div>
                    )}
                    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
                    <div className="flex-1 p-6 overflow-auto">
                        {children}
                    </div>

            </div>
        </>
    );
}
export default MainLayout;