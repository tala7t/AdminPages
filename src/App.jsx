import Login from "./Pages/Login/Login"
import Student from "./Pages/Student/Student"
import Personal from "./Pages/Personal/Personal"
import Academic from "./Pages/Academic/Academic"
import MainLayout from "./Components/Layout/MainLayout"
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
<div className="main">
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path= "/student" element={<Student/>}/>
    <Route path="/personal" element={
      <MainLayout>
      <Personal/>
      </MainLayout>}/>
    <Route path="/academic" element={
      <MainLayout>
        <Academic/>
        </MainLayout>}/>
  </Routes>
</div>
    </>
  )
}

export default App
