import Recruitment from 'components/Recruitment';
import Quotations from 'components/Quotations';
import { InputText } from 'primereact/inputtext';
import ActiveAdvisors from 'components/ActiveAdvisors';
import PendingClearence from 'components/PendingClearence';
import MeetingNotes from 'components/Notes';
import Action from 'components/Action';
import WeekCard from 'components/WeekCard';
import PageTemplate from 'components/Template/PageTemplate';


 const Dashboard=()=>{

    return<PageTemplate>
    <div className='py-8 md:p-8'>
      <div className=' px-8 pt-8 space-y-4 md:hidden'>
         <WeekCard week={1}/>
         <WeekCard week={2}/>
         <WeekCard week={3}/>
         <WeekCard week={4}/>
         <WeekCard week={5}/>
      </div>
       <table className='hidden md:table'>
            <thead>
               <tr>
                  <th>Criteria</th>
                  <th>Week 1</th>
                  <th>Week 2</th>
                  <th>Week 3</th>
                  <th>Week 4</th>
                  <th>Total</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td className='criteria'>Recruitment</td>
                  <td><Recruitment week={1}/></td>
                  <td><Recruitment week={2}/></td>
                  <td><Recruitment week={3}/></td>
                  <td><Recruitment week={4}/></td>
                  <td><Recruitment week={5}/></td>
               </tr>
               <tr>
                  <td className='criteria'>Recruitment</td>
                  <td><Quotations week={1}/></td>
                  <td><Quotations week={2}/></td>
                  <td><Quotations week={3}/></td>
                  <td><Quotations week={4}/></td>
                  <td><Quotations week={5}/></td>
               </tr>
               <tr>
                  <td className='criteria'>Active Advisors</td>
                  <td><ActiveAdvisors week={1}/></td>
                  <td><ActiveAdvisors week={2}/></td>
                  <td><ActiveAdvisors week={3}/></td>
                  <td><ActiveAdvisors week={4}/></td>
                  <td><ActiveAdvisors week={5}/></td>
               </tr>
               <tr>
               <td className='criteria'>Pending Clearence</td>
                  <td><PendingClearence week={1}/></td>
                  <td><PendingClearence week={2}/></td>
                  <td><PendingClearence week={3}/></td>
                  <td><PendingClearence week={4}/></td>
                  <td><PendingClearence week={5}/></td>
               </tr>
               <tr>
                  <td className='criteria'>Meeting Notes</td>
                  <td><MeetingNotes week={1}/></td>
                  <td><MeetingNotes week={2}/></td>
                  <td><MeetingNotes week={3}/></td>
                  <td><MeetingNotes week={4}/></td>
                  <td><MeetingNotes week={5}/></td>
               </tr>
               <tr>
                  <td className='criteria'>Action</td>
                  <td><Action week={1}/></td>
                  <td><Action week={2}/></td>
                  <td><Action week={3}/></td>
                  <td><Action week={4}/></td>
                  <td><Action week={5}/></td>
               </tr>
            </tbody>
         </table>
    </div>
   </PageTemplate>
 }

 export default Dashboard