import React from "react"
//basic setup react router dom
import { BrowserRouter , Routes, Route, Link } from "react-router-dom"



//home page - 1  /
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page!</p>
    </div>
  )
}

//about page - 2
function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About Page.</p>
    </div>
  )
}
     
// 404-page not found
function  pageNotFound() {
  return (


function App() {
  return (
    <BrowserRouter>
      <routes><Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<pageNotFound />} />
      </routes>
      


      </BrowserRouter>
  )
}


//about page