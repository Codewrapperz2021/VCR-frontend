import React from 'react'

export default function Resetpassword() {
    return (
        <div>
           <div>
            <form>
              <div className="container pt-5 d-flex justify-content-center" >
                <div className="col-md-6 shadow p-4">
                  <h3 className="text-center">Reset Password</h3>
                  <hr />
                  <label for=""><b>Enter new password</b></label>
                  <input id="name" type="password" placeholder="Enter your password" />
                  <label for=""><b>Confirm new Password</b></label>
                  <input id="password" type="password" placeholder="Enter your password again" />
                  <button id="button" class="registerbtn"  >Submit</button>
                </div>
              </div>
           </form>
      </div> 
        </div>
    )
}
