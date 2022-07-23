import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Multi = ({ list, maxTag, callback }) => {
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
        
      <div className="container">
      <h2>React Multiselect</h2>
        <p>Please Hit Enter to add tag</p>
        <div className="content">
          <ul>
            <li>
              <span>React</span>
              <button>X</button>
            </li>
            <input type="text" placeholder="" />
          </ul>
          {isOpen && <Dropdown />}
        </div>
      </div>
    </div>
  );
};

export default Multi;
