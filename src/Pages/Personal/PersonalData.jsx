import { LuUserRound } from "react-icons/lu";
import { IoPeopleSharp } from "react-icons/io5";
import { SlUser } from "react-icons/sl";
import { SlUserFemale } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCake } from "react-icons/md";
import { IoMale } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { GoHash } from "react-icons/go";

import { MdOutlineEmail } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";


const PersonalData = [
   [
     {label:"Name", value:"Islam", icon:LuUserRound},
    {label: "Family Name", value:"Shaheen", icon: IoPeopleSharp},
    {label: "Father Name", value:"Mohamad", icon:SlUser},
    {label: "Mother Name", value:"Sara", icon:SlUserFemale},
    {label:"Place of birth", value:"Damascuse", icon:CiLocationOn},
    {label:"date of birth", value:"22/7/2003", icon:MdOutlineCake},
    {label:"Gender", value:"Male", icon:IoMale},
    {label:"Nationality",  value:"Syrian", icon:CiFlag1},
    {label:"National number", value:"90010287198", icon:GoHash},
   ],

   [
        {label:"Mobile Number", value:"098726596", icon:CiMobile4},
        {label:"Email", value:"Isalm123@gmail.com", icon:MdOutlineEmail}

   ],
];
export default PersonalData;