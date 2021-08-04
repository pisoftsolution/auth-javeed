import React from 'react';
import './App.css';

function Popup({ closePopup , id: data }) {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>EDIT USER</h1>
       <form>
           <label>Author</label>
           <input type="text" placeholder="Enter author name" ></input><br /><br />
           <label>Text</label>
           <input type="text" placeholder="Enter blog here"></input>
       </form>
        <div>
        <button className="submit1">SUBMIT</button>
          <button className="popupButtonClose" onClick={closePopup}>
            cancel
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default Popup;