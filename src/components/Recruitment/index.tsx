import { OverlayPanel } from 'primereact/overlaypanel';
import RecruitForm from './form';

interface IProps{
    week:number
}

const Recruitment=({week}:IProps)=>{

    return<div className=" ">
        <div className=' criteria_title md:hidden '>
            <h1 className='font-semibold'>Recruitment</h1>
            <RecruitForm/> 
        </div>
        <div className='recru_card_style md:flex-col p-2'>
            <div className=" flex space-x-2">
                <h6 className='hidden md:inline'>Existing:</h6>
                <h6 className='md:hidden'>Exis:</h6>
                <h6>{"6"}</h6>
            </div>
            <div className=" flex space-x-2">
            <h6 className='hidden md:inline'>Registration:</h6>
                <h6 className='md:hidden'>Reg:</h6>
                <h6>{"6"}</h6>
            </div>
            <div className=" flex space-x-2">
                <h6 className='hidden md:inline'>New codes:</h6>
                <h6 className='md:hidden'>New:</h6>
                <h6>{"6"}</h6>
            </div>
        </div>
       
    </div>
}

export default Recruitment