import React from 'react';
import signupThumb from '../../assets/images/signup-thumb.png';

function SponserCoreHR({ className }) {
    return (
        <>
            <div className={`intuitif-signup-area ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="intuitif-signup-box">
                                <span>No credit card required</span>
                                <h3 className="title">Request Demo.</h3>
                                <form action="#">
                                    <div className="input-box">
                                        <input type="text" placeholder="Enter your name" />
                                    </div>
                                    <div className="input-box">
                                        <input type="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="input-box">
                                        <button type="submit">Sign Up</button>
                                    </div>
                                    <div className="intuitif_checkbox_common checkbox_style2">
                                        <div>
                                            <input
                                                type="checkbox"
                                                name="checkbox2"
                                                id="checkbox4"
                                            />
                                            <label htmlFor="checkbox4">
                                                <span></span>By signing up you agree to our
                                                <a href="#">Terms & Conditions.</a>
                                            </label>
                                        </div>
                                    </div>
                                </form>
                                <div className="thumb">
                                    <img src={signupThumb} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SponserCoreHR;
