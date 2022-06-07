import React from "react";

export default function increment(props){
    const [count, setCount] = React.useState(0)

    return setCount( num => num + 1)
}