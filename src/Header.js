import './App.css';
import {useSelector} from "react-redux";

function Header() {
  
    const name=useSelector((state)=>state.temp.name);
    return (
    <div className="header">
      <span>{name}</span>
    </div>
  );
}

export default Header;
