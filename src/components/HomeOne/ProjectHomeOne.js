import React from 'react';

function ProjectHomeOne() {
    return (
        <>
            <section className="intuitif-project-area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="intuitif-project-box wow animated slideInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="intuitif-project-content">
                                            <h3 className="title">
                                                Revolusi HR Tech bersama Intuitif.
                                            </h3>
                                            <p>Kami akan mengirim artikel dan riset untuk Revolusi Bisnis Anda.</p>
                                            <form action="#">
                                                <div className="input-box mt-30">
                                                    <input type="text" placeholder="Your email" />
                                                    <button type="button">Subscribe</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="intuitif-project-thumb">
                                    <img src="assets/images/project-thumb.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHomeOne;
