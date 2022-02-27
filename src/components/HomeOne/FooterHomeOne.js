import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function FooterHomeOne({ className }) {
    return (
        <>
            <section className={`intuitif-footer-area ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget">
                                <div className="logo">
                                    <a href="#">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                                <p>
                                    <b>PT. Nexa Digital Solution</b><br/>
                                    Fokus untuk membantu revolusi bisnis UMKM di Indonesia
                                </p>
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                                <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">Company</h4>
                                <ul>
                                    <li>
                                        <Link to="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/Service">Service</Link>
                                    </li>
                                    <li>
                                        <Link to="/news">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                          <div className="footer-navigation">
                              <h4 className="title">Produk</h4>
                              <ul>
                                  <li>
                                      <Link to="/products/core-hr">Core HR</Link>
                                  </li>
                                  <li>
                                      <Link to="/products/time-and-attendance">Time & Attendance</Link>
                                  </li>
                                  <li>
                                      <Link to="/products/payroll">Payroll Management</Link>
                                  </li>
                                  <li>
                                      <Link to="/products/travel-and-advance">Travel & Advance</Link>
                                  </li>

                                  <li>
                                      <Link to="/products/performance-management">Performance Management</Link>
                                  </li>

                                  <li>
                                      <Link to="/products/recruitment">Recruitment</Link>
                                  </li>



                              </ul>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info">
                                <h4 className="title">Get In Touch</h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-envelope" /> support@intuitif.id
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-phone" /> +(62) 821 4764 0743
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-map-marker-alt" /> CBD Metland Transyogi Jl. Metro Ruko Eboni 7 No. 91, Cileungsi Kidul.
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                                <div className="apps-download-btn">
                                    <ul>

                                        <li>
                                            <a className="item-2" href="https://play.google.com/store/apps/details?id=com.hris.intuitif">
                                                <i className="fab fa-google-play" /> Download for
                                                Android
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright-text">
                                    <p>Copyright © 2021 intuitif. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeOne;
