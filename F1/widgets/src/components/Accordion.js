import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    console.log("title cliked", index);
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    console.log("active", active);

    return (
      <React.Fragment key={item.title}>
        <div className={`tittle ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );
};

export default Accordion;
