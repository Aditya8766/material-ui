import "./form.css";
import EditIcon from "../assets/edit-246.png";
function Form(props) {
  // const {} = props;
  return (
    <div className="wrapper">
      <div className="user-details-wrapper">
        <div className="id-details-wrapper">
          <span>ID DETAIS</span>
          <div className="field-wrapper">
            <span>Name:</span>
            <input />
          </div>
          <div className="field-wrapper">
            <span>Email:</span>
            <input />
          </div>
        </div>
        <div className="legal-address-wrapper">
          <span>legal Address:</span>
          <input />
        </div>
        <div className="icon-wrapper">
          <img src={EditIcon} alt="Edit" width="18px" height="18px"/>
          <span className="edit-here">Edit Here</span>
        </div>
      </div>
    </div>
  );
}
export default Form;
