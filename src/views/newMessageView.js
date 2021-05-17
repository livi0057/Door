import { NavLink } from "react-router-dom";


const NewMessageView = ({handleChange, handleSubmit}) => {
  return (
    <div id = "newMessage">

      <h4 className="header-message">
        Enter your message
      </h4>
      <br />

      <div >
      <form >
        <div className = "inputarea">
          <input
            className = "inputfield"
            placeholder="Please, type in your message here..."
            type="message"
            maxLength="30"
            onChange={(e) => handleChange(e)}
          />
          
        <button className="MessageButton" onClick={(e) => handleSubmit(e)}>
          <NavLink className="MessageButton" to="/currentmessage">
            Submit
          </NavLink>
        </button>
        </div>
      </form>
      {/* <div id="formcheckbox">
        <form  action="#">
          <p>
            <label>
              <input type="checkbox"/>
              <span id="checkboxtext">Save to messages</span>
            </label>
          </p>
        </form>
      </div> */}
    </div>
  </div>
  );
};

export default NewMessageView;