import { InputText } from "primereact/inputtext"
import { ReactNode } from "react"

interface IProps{
    children:ReactNode
}

const PageTemplate=({children}:IProps)=>{
    return<div>
        <div className=" flex  flex-col space-y-4  bg-white px-8 pt-8 w-full">
         <h1 className=" text-2xl font-bold md:text-3xl">Weekly Review Summery</h1>
         <form className=" flex md: space-x-4">
            <div className=" flex space-x-2 items-center">
               <h6 className='hidden md:inline'>from:</h6>
               <InputText id="dateFrom" type="date" className="p-inputtext-sm"/>
            </div>
            <div className=" flex space-x-2 items-center">
               <h6 className='hidden md:inline'>to:</h6>
               <InputText id="dateTo" type="date" className="p-inputtext-sm"/>
            </div>
         </form>
        </div>
        <div>{children}</div>
    </div>
}

export default PageTemplate