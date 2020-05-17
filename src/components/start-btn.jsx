import React from "react";

const ButtonStart = (props) => {

    return (
        <button className="waves-effect waves-light btn-large deep-purple lighten-2"
                onClick={props.start}>Start Game
        </button>
    );
}

export default ButtonStart;