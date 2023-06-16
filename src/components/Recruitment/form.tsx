import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";
import edit_png from "../../assets/edit.png";

const RecruitForm = () => {
  const op = useRef<OverlayPanel>(null);

  
  return (
    <div className="relative">
      <div>
        <img
          src={edit_png}
          style={{ width: "15px" }}
          onClick={(e) => op.current?.toggle(e, e.currentTarget)}
          className="  "
        />
      </div>
      <OverlayPanel ref={op} className="">
        <form className=" space-y-4">
          <div className=" flex space-x-8 ">
            <h6>Existing:</h6>
            <input name="exist" className=" border w-10 " type="text" />
          </div>
          <div className=" flex space-x-2">
            <h6>Registrations:</h6>
            <input name="reg" className=" border w-10" type="text" />
          </div>
          <div className=" flex space-x-2">
            <h6>New codes:</h6>
            <input name="new" className=" border w-10" type="text" />
          </div>
          <div className=" flex justify-center">
            <button  type="submit">OK</button>
          </div>
        </form>
      </OverlayPanel>
    </div>
  );
};

export default RecruitForm;
