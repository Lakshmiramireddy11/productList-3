
import './App.css';
import logo from './images/logo.png'
import icon from './images/icon.png'

import productLinks from './images/productLinks.png'

function App() {
  return (
    <div className="App">
    <nav className="navbar">
     <div className="navbar-container">
       <div className="navbar-logo">
         <a href="/"><img src={logo} /></a>
       </div>
       <ul className="navbar-menu">
         <li className="navbar-item">
           <a href="/">Home</a>
         </li>
         <li className="navbar-item">
           <a href="/about">About</a>
         </li>
         <li className="navbar-item">
           <a href="/services">Services</a>
         </li>
         <li className="navbar-item">
           <a href="/contact">Contact</a>
         </li>
       </ul>
       <div className="navbar-icon">
        <img src={icon} />
       </div>
     </div>
   </nav>
     <div className='productLinks'>
      <img src={productLinks} />
     </div>
   </div>
  );
}

export default App;
