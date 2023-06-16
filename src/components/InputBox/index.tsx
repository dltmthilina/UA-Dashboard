
import { InputText } from "primereact/inputtext";
import { ReactNode } from "react";
import { JsxElement } from "typescript";

interface IInputBox{
    id:any;
    value: any;
    label?:string;
    onChange: (value: any) => void;
    onBlur?: (value: any) => void;
    type: string;
    placeholder?: string;
    error?:string;
    touched?: any;
    disabled?:boolean;
    icon?:any;
    
}

const InputBox = ({id,value, label, onChange,onBlur,type,placeholder,error, touched, disabled, icon}:IInputBox)=>{
    
    return (<>
    
        <div className="flex flex-col  w-full relative ">
            <label >{label}</label>
            <span  className="">
               {icon && <img src={icon} className=" absolute left-2 top-4 "/>}
                <InputText
                    className="pl-3 w-full"
                    value={value}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    
                />
            </span>
            {touched && error ? (<div className="errorMessageText">{error}</div>) : null}
        </div>
    
    </>)
}
export default InputBox;