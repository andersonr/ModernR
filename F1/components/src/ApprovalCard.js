import React from "react";

const ApprovalCard = (props) => {
  // props.children is the JSX that is passed in from the parent component
  // children representam os elementos filhos do componente, que estão dentro do componente

  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Sim</div>
          <div className="ui basic red button">Não</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
