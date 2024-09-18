import React from "react";
import { Link } from "react-router-dom";
import  "./DashBoard.css";
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';
const Dashboard: React.FC = () => {
    const navigate =useNavigate();
    const handleButtonClick=(path: string)=>{
        navigate(path);
    }
  return (
    <>
      <div>
        <h1>DashBoard</h1>
      </div>
      <div className="menu-container">
        <button className="--button-div" onClick={()=>handleButtonClick("/rxjs")}>RxJS Example</button>
        <button className="--button-div" onClick={()=>handleButtonClick("/lazzy")}>Lazzy Component</button>
        <button className="--button-div" onClick={()=>handleButtonClick("/usememo")}>Use memo</button>
        <button className="--button-div" onClick={()=>handleButtonClick("/useCallback")}>Use Call back</button>
        <button className="--button-div" onClick={()=>handleButtonClick("/useState")}>Use State</button>
        <button className="--button-div" onClick={()=>handleButtonClick("/useContext")}>Use Context</button>
        <button className="--button-div" onClick={()=>handleButtonClick("/useRef")}>Use Ref</button>
        <button className="--button-div" onClick={()=>handleButtonClick("/useReducerSingle")}>Use Reducer Single</button>
        <button className="--button-div" onClick={()=>handleButtonClick("/useReducerContext")}>Use Reducer Context</button>

        <ul>
          <li>
            <Link to="/rxjs">RxJS Example</Link>
          </li>          
        </ul>
        <Outlet />
      </div>
      
    </>
  );
};
export default Dashboard;
