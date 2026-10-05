// //import React from "react"
// ////basic setup react router dom
// import { BrowserRouter , Routes, Route, Link } from "react-router-dom"
// //Link - act as anchor tag in HTML


// //home page - 1  /
// function Home() {
//   return (
//     <div>
//       <h2>Home Page</h2>
//       <p>Welcome to the Home Page!</p>
//     </div>
//   )
// }

// //about page - 2
// function About() {
//   return (
//     <div>
//       <h2>About Page</h2>
//       <p>This is the About Page.</p>
//     </div>
//   )
// }
     
// // 404-page not found
// function  pageNotFound() {
//   return (
//     <div>
//       <h2>404 - Page Not Found</h2>
//       <p>The page you are looking for does not exist.</p>
//     </div>
//   )
// }

// function App() {
//   return (
//     <BrowserRouter>
//     <nav>
//       <link to="/">more menu</link>
//       <link to="/about">about page</link>
//     </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<pageNotFound />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

 

// //about page