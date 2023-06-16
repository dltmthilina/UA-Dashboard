
interface IProps{
    week:number
}

const PendingClearence=({week}:IProps)=>{

    return <div className="p-2">
        <div className="criteria_title md:hidden">
            <h1 className='font-semibold'>Pending clearence</h1>
        </div>
        <div className=" recru_card_style md:flex-col">
            <div className=" flex space-x-2">
                <h6 className="hidden md:inline">Proposals:</h6>
                <h6 className="md:hidden">Propo:</h6>
                <h6>{6}</h6>
            </div>
            <div className=" flex space-x-2">
                <h6 className="hidden md:inline">Suspense:</h6>
                <h6 className="md:hidden">Sus:</h6>
                <h6>{6}</h6>
            </div>
            <div className=" flex space-x-2">
                <h6 className="hidden md:inline">Renewals:</h6>
                <h6 className="md:hidden">Renew:</h6>
                <h6>{6}</h6>
            </div>
            <div className=" flex space-x-2">
                <h6 className="hidden md:inline">Revivals:</h6>
                <h6 className="md:hidden">Revi:</h6>
                <h6>{6}</h6>
            </div>
        </div>
    </div>
    
}

export default PendingClearence