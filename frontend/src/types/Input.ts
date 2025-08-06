import React from "react";
export type InputType = "text" | "email" | "password" | "number" ;

export interface InputProps {
    label : string,
    placeholder : string,
    type : InputType,
    value : string,
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
}