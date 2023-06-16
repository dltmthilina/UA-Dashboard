interface IProps{
    week:number
}

const Action=({week}:IProps)=>{

    return<div className=" flex justify-center p-2">
        <button className="border p-2 rounded w-full lg:w-2/3">Completed</button>
    </div>
}

export default Action