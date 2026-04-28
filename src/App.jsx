import Login from "./Pages/Login/Login"
import Student from "./Pages/Student/Student"
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
<div className="main">
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path= "/student" element={<Student/>}/>
  </Routes>
</div>
    </>
  )
}

export default App
