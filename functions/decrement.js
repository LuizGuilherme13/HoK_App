import React from "react";

const [count, setCount] = React.useState(0)

export default function decrement(){
    return setCount( num => num - 1)
}