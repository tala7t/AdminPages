import { LuUserRound } from "react-icons/lu";
import { RiSchoolLine } from "react-icons/ri";
import { GrPersonalComputer } from "react-icons/gr";
import { TbCircleNumber5 } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { PiIdentificationCard } from "react-icons/pi";
import { FaRegAddressBook } from "react-icons/fa";
import { TbCircleLetterA } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import { AiOutlinePercentage } from "react-icons/ai";

import { RiCalendarEventLine } from "react-icons/ri";
import { GoHash } from "react-icons/go";
import { GiDiploma } from "react-icons/gi";
import { LuBuilding2 } from "react-icons/lu";
import { TbSum } from "react-icons/tb";


const AcademicData = [
    [ 
    {label:"University number", value:"2212105", icon:LuUserRound},
    {label:"College", value:"College of Engineering", icon:RiSchoolLine},
    {label:"Specialization", value:"Information engineering", icon:GrPersonalComputer},
    {label:"level", value:"Fifth", icon:TbCircleNumber5},
    {label:"Study style", value:"Hours system", icon:FaRegStar},
    {label:"Student status", value:"Acceptable", icon:PiIdentificationCard},
    {label:"Current chapter status", value:"registered", icon:FaRegAddressBook},
    {label:"Grading system", value:"Ministry Decision 230", icon:TbCircleLetterA},
    {label:"Equivalent hours", value:"0 hours", icon:FaRegClock},
    {label:"Hours completed", value:"126 hours", icon:FaRegClock},
    {label:"GPA", value:"3.02 Pts - 80.40%", icon:AiOutlinePercentage},
    ],

    [
        {label:"Admissions semester", value:"First semester 2022/2023", icon:RiCalendarEventLine},
        {label:"Acceptance date", value:"22/11/2026", icon:RiCalendarEventLine},
        {label:"Certificate number", value:"24066", icon:GoHash},
        {label:"Registration Date", value:"22/10/2023", icon:RiCalendarEventLine},
        {label:"Type of diploma", value:"High school diploma", icon:GiDiploma},
        {label:"Certificate date", value:"07/07/2022", icon:RiCalendarEventLine},
        {label:"Country", value:"Syria - Rural Damascus", icon:LuBuilding2},
        {label:"Period", value:"First", icon:RiCalendarEventLine},
        {label:"Total", value:"206.4 points", icon:TbSum},
        {label:"Rate", value:"85.92%", icon:AiOutlinePercentage},
    ],
];
export default AcademicData;