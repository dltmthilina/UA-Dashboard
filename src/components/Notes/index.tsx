import { useState } from "react";
import cross_png from "../../assets/wrong.png";
import tick_png from "../../assets/right.png";
import RecruitForm from "components/Recruitment/form";

import { InputTextarea } from "primereact/inputtextarea";

interface IProps {
  week: number;
}

const notes = [
  {
    note: "Recruitment program ",
    status: true,
  },
  {
    note: "New advisor training grt lpr plrtpe gepok gkeogkopgko",
    status: true,
  },
  {
    note: "Get new advisors",
    status: false,
  },
];

const MeetingNotes = ({ week }: IProps) => {
  const [finished, setFinished] = useState(false);
  const [note, setNote] = useState({"note":"", "status":false});
  const [noteList, setNoteList] = useState(notes);

  const noteHandler = () => {
    
       if(note.note){
        setNoteList((preList) => {
            return [...preList, note];
          });
          setNote({ note: "", status: false });
       }  
    
    
   
  };

  const statusHandler = (index:number) => {
        const selectedNote = noteList.filter((note, noteindex)=>index===noteindex);
        const otherNotes = noteList.filter((note, noteindex)=>index!==noteindex);
        selectedNote[0].status = !selectedNote[0].status
        console.log(selectedNote)
        setNoteList([...otherNotes, ...selectedNote])

   };

  return (
    <div className="p-2">
      <div className="criteria_title md:hidden ">
        <h1 className="font-semibold">Meeting notes</h1>
        <RecruitForm />
      </div>
      <div className=" mt-2 space-y-2">
        {noteList.map((note, index) => {
          return (
            <ol type="1" className="">
              <div className=" flex  space-x-2">
                <li>{note.note}</li>

                {note.status == false ? (
                  <img
                    src={cross_png}
                    style={{ width: "20px", height: "20px" }}
                    onClick={()=>statusHandler(index)}
                  />
                ) : (
                  <img
                    src={tick_png}
                    style={{ width: "20px", height: "20px" }}
                    onClick={()=>statusHandler(index)}
                  />
                )}
              </div>
            </ol>
          );
        })}
        <div className=" flex space-x-2 md:flex-col">
          <InputTextarea
            onChange={(e) => setNote({ note: e.target.value, status: false })}
          />
          <button
            onClick={noteHandler}
            type="button"
            className=" border px-2 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingNotes;
