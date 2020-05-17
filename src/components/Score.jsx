import React from "react";

const Score = (props) => {

    return (
        <div style={{ color: "#81c784", fontWeight: "bold", fontSize: "20px" }}>Your score: {props.score}</div>
    );
}

export default Score;