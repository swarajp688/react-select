import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";

const Multi = ({ tags, maxTag, callback }) => {
  const [dropdown, setDropdown] = useState(false);
  const [def, setDef] = useState([...tags]);
  const [dropDownItems, setDropDownItems] = useState([...tags]);
  const [selectedItems, setSelected] = useState([]);
  const inputRef = useRef(null);
  const [err,setErr]=useState('')
  const toogleDropdown = () => {
    setDropdown(!dropdown);
  };
  useEffect(() => {
    removeSelectedItems();
  }, [selectedItems]);

  const removeSelectedItems = () => {
    const newItems = tags.filter((item) => {
      return !selectedItems.includes(item);
    });
    setDef(newItems);
    setDropDownItems(newItems);
  };

  const addTag = (item) => {
    if(callback === undefined || callback()){
        if (selectedItems.includes(item)) return;
        if (maxTag === undefined) {
          setSelected(selectedItems.concat(item));
          setDropdown(false);
        } else if (selectedItems.length < maxTag) {
          setSelected(selectedItems.concat(item));
          setDropdown(false);
        }
        setErr("")
    }else {
       setErr("Invalid Tag")
    }
    inputRef.current.value =""
    return;
  };
  const removeTag = (item) => {
    const filtered = selectedItems.filter((e) => e !== item);
    setSelected(filtered);
    inputRef.current.value =""
  };
  const filter = (value) => {
    setDropdown(true);
    const filtered = def.filter((e) =>
      e.toLowerCase().includes(value.toLowerCase())
    );
    setDropDownItems(filtered);
  };
  const handler = (event) => {
    if (
      (event.code === "Enter" || event.code === "NumpadEnter") &&
      dropDownItems.length > 0 &&
      dropdown
    ) {
      event.target.value = "";
      console.log(dropDownItems);
      addTag(dropDownItems[0]);
    }
    if (event.code === "Backspace") {
      if (event.target.value === "") {
        removeTag(selectedItems[selectedItems.length - 1]);
      }
    }
  };
  const handleFocus = ()=>{
    inputRef.current.focus();
    setDropdown(!dropdown);
  }
  return (
    <div>
      <div className="container">
        <h2>React Multiselect</h2>
        <p>Please Hit Enter to add tag and Backspace to delete</p>
        <p className="error">{err}</p>
        <div className="content">
          <ul onClick={handleFocus}>
            {selectedItems.map((tag, index) => {
              return (
                <li>
                  <span>{tag}</span>
                  <button  onClick={()=>removeTag(tag)}>X</button>
                </li>
              );
            })}
            <input
              ref={inputRef}
              type="text"
              placeholder=""
              onChange={(e) => filter(e.target.value)}
              onKeyDown={(e) => handler(e)}
              onClick={toogleDropdown}
            />
          </ul>
          {dropdown && <Dropdown addTag={addTag} tags={dropDownItems} />}
        </div>
      </div>
    </div>
  );
};

export default Multi;
