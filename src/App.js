
import './App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Main from "./Main" ;


function App() {
  return (
    <div className="App">
     <div className="header">
     <div className="headerRight">
     <h2>Start Bootstrap</h2>
     <p> Home</p>
     <p> About</p>
     <p className="arrow"> Shop <ArrowDropDownIcon/></p>
     </div>
          <div className="headerleft">
           <button> <ShoppingCartIcon /> <span>Cart <span className="zero"> 0 </span> </span></button>
          </div>
     </div>
          <div className="center"> <h1> Shop in style</h1> 
          <h6> With this shop hompeage template</h6>
          </div>
       <Main />
    </div>
  );
}

export default App;
