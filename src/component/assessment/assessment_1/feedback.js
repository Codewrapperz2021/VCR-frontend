import React from 'react'
import { Link } from 'react-router-dom'


const Feedback = () => {
    return (
        <div>
            <div className='container justify-content-center d-flex'>
                <div className='text-center'>
                    <i className="fas fa-envelope-open-text fa-9x mb-4"></i>
                    <h1>Thank you,</h1>
                    <h2>Your result has been received</h2>

                    <h3 className='mt-4'>How was your experiance?</h3>
                    <textarea className='mt-3' id="subject" name="subject" placeholder="Give Your Feedback.." style={{height:"70px",width:"300px",}}></textarea><br/>
                    <fieldset className='rating d-inline-flex  flex-row-reverse '>
                            <input type="radio" id="star5" name="rating" value="5" /><label class="full" for="star5" title="Awesome - 5 stars"></label>
                            <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                            <input type="radio" id="star4" name="rating" value="4" /><label class="full" for="star4" title="Pretty good - 4 stars"></label>
                            <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                            <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3" title="Meh - 3 stars"></label>
                            <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                            <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2" title="Kinda bad - 2 stars"></label>
                            <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                            <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1" title="Sucks big time - 1 star"></label>
                            <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>                       
                    </fieldset><br/>
                    <Link to="/"><button className='btn btn-primary m-3'>Submit</button></Link>
                </div>

            </div>

        </div>
    )
}

export default Feedback