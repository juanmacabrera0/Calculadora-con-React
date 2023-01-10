import React from "react";

const ClearButton = (props) => (
    <div className="clear-button" onClick={props.manageClear}>
        {props.children}
    </div>
)

export default ClearButton