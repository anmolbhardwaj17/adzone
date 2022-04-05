import React from 'react'

function Admin() {

    const adminCheck = () => {

    }

  return (
    <div className="container">
        <div className="form">
            <form>
               username:- <input required type="text"/>
               <br/>
               password:-  <input required minlength="8" type="password"/>
               <br/>
               <button onClick="adminCheck()">submit</button> 
            </form>
        </div>
    </div>
  )
}

export default Admin