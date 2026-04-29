import { RiBankCardLine } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";
import { FaChartBar } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { SlCup } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa";
import { IoTabletLandscapeOutline } from "react-icons/io5";
import { GrDocumentSound } from "react-icons/gr";





const Menu = [
    {
        title:"My Files",
        items: [
            {name:"Personal", path:"/personal"}
            , "Academic", "Financial", "Alarms"],
        icon: GrUserManager
    },
    {
        title: "Finance",
        items: ["Account statement", "Banks", "Electronic payment", "Electronic payments"],
        icon: RiBankCardLine
    },
    {
        title:"Calendar",
        items: ["Academic calendar", "Lecture schedule", "Exam schedule", "My calendar"],
        icon: CiCalendar
    },
    {
        title: "Grades",
        items: ["My case across the chapter", "Reveal grades for the current semester", "Reveal the signs of the seasons"],
        icon: FaChartBar
    },
    {
        title: "Registration",
        items: ["Registration rules", "The remaining courses", "Opening courses", "Available courses", "Course registration", "Decisions that require approval"],
        icon: FaClipboardList
    },
    {
        title: "Services",
        items: ["Transportation", "University books"],
        icon: SlCup
    },
    {
        title: "Questionnaires",
        items: [],
        icon: FaRegStar
    },
    {
        title: "Academic content",
        items: ["Activity files", "Activity signs", "Sessions"],
        icon: IoTabletLandscapeOutline
    },
    {
        title: "Advertisements",
        items: [],
        icon: GrDocumentSound
    },
]
export default Menu