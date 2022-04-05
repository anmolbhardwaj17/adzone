import React from 'react';
import '../stylesheets/Admin.css';

function Admin() {

    const adminCheck = () => {
      
    }

  return (
    <div className="container">
        <div className="form">
            <form>
               <div className="inputCover">
               <label>Username: </label>
               <br/>
               <input required type="text"/>
               </div>
               <div className="inputCover">
               <label>Password: </label>
               <br/>
               <input required minlength="8" type="password"/>
               </div>
               
               <button className="formButton" onClick="adminCheck()">submit</button> 
            </form>
        </div>
    </div>
  )
}

export default Admin