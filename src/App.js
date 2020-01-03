import React from "react";
import Welcome from "./components/welcome";
import Well from "./components/well";
// import logo from './logo.svg';
// import './App.css';

// const user = {
//   firstName: "Vishal",
//   lastName: "Chandola"
// };

// const formatName = user => user.firstName + " " + user.lastName;

// const getGreeting = user => {
//   if (user) {
//     return <h1>Howdy, {formatName(user)}!</h1>;
//   }

//   return <h1>Howdy, Stranger</h1>;
// };

// const App = () => {
//   return (
//     <div className="container">
//       <div className="alert alert-success">{getGreeting(user)}</div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => (
  <div className="Container">
    <Welcome name="Vishal" />
    <Welcome name="Manoj" />
    <Welcome name="Mohit" />
    <Welcome name="Vijay" />
    <Well name="Deepika" />
    <Well name="Rashmi" />
    <Well name="Kavya" />
    <Well name="Avni" />
  </div>
);

export default App;
