import Action from "components/Action"
import ActiveAdvisors from "components/ActiveAdvisors"
import MeetingNotes from "components/Notes"
import PendingClearence from "components/PendingClearence"
import Quotations from "components/Quotations"
import Recruitment from "components/Recruitment"

import { Interface } from "readline"

interface IProps{
    week: number
}

const WeekCard=({week}:IProps)=>{
    return<div className=" space-y-4 border p-4 rounded-lg ">
        <div>
            <h1 className=" text-lg font-bold">Week {week}</h1>
        </div>
        <div className=" space-y-4">
            <Recruitment week={week}/>
            <Quotations week={week}/>
            <ActiveAdvisors week={week}/>
            <PendingClearence week={week}/>
            <MeetingNotes week={week}/>
            <Action week={week}/>
        </div>
        
    </div>
}

export default WeekCard