import React from 'react'

export default function Forget() {
    return (
            <div>
            <form >
              <div className="container pt-5 d-flex justify-content-center" >
                <div className="col-md-6 shadow p-4">
                  <h3 className="text-center">Forget password</h3>
                  <hr />
                    <label for=""><b>Email</b></label>
                    <input id="email" type="email" placeholder="name@example.com" />
                  <button id="button" class="registerbtn"  >Submit</button>
                </div>
              </div>
           </form>
        </div>
    )
}
