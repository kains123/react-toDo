import React from "react";
import { UNCOMPLETE, COMPELETE, DEL } from "../actions";
import { useDispatch } from "../context";
export default ({ text, id, isCompleted }) => {
    const dispatch = useDispatch();
    return (
        <li>
            <span>{text}</span>
            <span
                role="img"
                aria-label=""
                onClick={() => dispatch({ type: DEL, payload: id })}>🔥</span>
            <span
                role="img"
                aria-label=""
                onClick={() => dispatch({ type: isCompleted ? UNCOMPLETE : COMPELETE, payload: id })}>
                {isCompleted ? "💋" : "👨🏻‍🦲"}</span>
        </li>
    );
}