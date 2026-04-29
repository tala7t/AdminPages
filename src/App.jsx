import Login from "./Pages/Login/Login"
import Student from "./Pages/Student/Student"
import Personal from "./Pages/Personal/Personal"

import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
<div className="main">
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path= "/student" element={<Student/>}/>
    <Route path="/personal" element={<Personal/>}/>
  </Routes>
</div>
    </>
  )
}

export default App
