import React from "react";

const Dropdown = ({ addTag, tags }) => {
  console.log(addTag);
  return (
    <div>
      {tags.length > 0 ? (
        tags.map((item, key, list) => {
          return (
            <div
              key={key}
              onClick={() => addTag(item)}
              className="dropdown-item"
            >
              <span className="drop-name">{item}</span>
            </div>
          );
        })
      ) : (
        <div>
          <span className="drop-name">All Tags are Added</span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
