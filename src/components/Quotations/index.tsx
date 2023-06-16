
interface IProps{
    week:number
}

const Quotations=({week}:IProps)=>{

    return<div className=" px-2 ">
        <div className="md:hidden">
            <h1 className='font-semibold'>Quotations</h1>
        </div>
    
        <div className="quotandadvisor_card_style md:hidden">
            <div className="col-span-1">
                <div className=" flex justify-center">{20}%</div>
            </div>
            <div className=" flex ">
                <h6>T:</h6>
                <h6>{25}</h6>
            </div>
            <h6 className="hidden md:inline">|</h6>
            <div className=" flex">
                <h6>A:</h6>
                <h6>{5}</h6>
            </div>
        </div>
        <div className="hidden md:flex md:flex-col">
            <div className="">
                <div className=" flex justify-center">{20}%</div>
            </div>
            <div className="flex justify-center space-x-4 md:space-x-8">
                <div className=" flex ">
                    <h6>T:</h6>
                    <h6>{25}</h6>
                </div>
                <h6 className="hidden md:inline">|</h6>
                <div className=" flex">
                    <h6>A:</h6>
                    <h6>{5}</h6>
                </div>
            </div>
            
        </div>
    </div>
}

export default Quotations