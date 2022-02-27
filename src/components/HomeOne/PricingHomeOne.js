import React, { useState } from 'react';

function PricingHomeOne({ className }) {
    const [toggleSwitch, setSwitchValue] = useState(true);
    return (
        <>
            <section className={`intuitif-pricing-area pt-90 pb-90 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="intuitif-section-title text-center">
                                <h3 className="intuitif-title">Pilih Paket layanan</h3>
                                <p>Bayar sesuai pemakaian.</p>
                            </div>
                            <ul
                                className="list-inline text-center switch-toggler-list"
                                role="tablist"
                                id="switch-toggle-tab"
                            >
                                <li className={`month ${toggleSwitch ? 'active' : ''}`}>
                                    <a href="#">Monthly</a>
                                </li>
                                <li>
                                    <label
                                        onClick={() => setSwitchValue(!toggleSwitch)}
                                        className={`switch ${toggleSwitch ? 'on' : 'off'}`}
                                    >
                                        <span className="slider round" />
                                    </label>
                                </li>
                                <li className={`year ${toggleSwitch === false ? 'active' : ''}`}>
                                    <a href="#">Annualy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tabed-content">
                        {toggleSwitch ? (
                            <div id="month">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 wow animated fadeInLeft">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Basic</h6>
                                                <div className="price-range">
                                                    <sup>Rp</sup> <span>12K</span>
                                                    <p>/bulan</p>
                                                </div>
                                                <p>Dapatkan 3 bulan gratis uji coba (eligible)</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> Core HR
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Time & Attendance
                                                    </li>

                                                    <li>
                                                        <i className="fal fa-check" /> People Analytics
                                                    </li>

                                                    <li>
                                                        <i className="fal fa-check" /> Payroll
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                                        <div className="pricing-one__single center">
                                            <div className="pricig-heading">
                                                <h6>Modern</h6>
                                                <div className="price-range">
                                                    <sup>Rp</sup> <span>15K</span>
                                                    <p>/bulan</p>
                                                </div>
                                                <p>Minimal transaksi per 6 bulan</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> Core HR
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Time & Attendance
                                                    </li>

                                                    <li>
                                                        <i className="fal fa-check" /> Travel & Advance
                                                    </li>

                                                    <li>
                                                        <i className="fal fa-check" /> People Analytics
                                                    </li>

                                                    <li>
                                                        <i className="fal fa-check" /> Payroll
                                                    </li>

                                                    <li>
                                                        <i className="fal fa-check" /> Performance Management
                                                    </li>



                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-rebon">
                                                <span>Most Popular</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInRight">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Advance</h6>
                                                <div className="price-range">
                                                    <sup>Rp</sup> <span>20K</span>
                                                    <p>/bulan</p>
                                                </div>
                                                <p>Minimal transaksi per 6 bulan.</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> Core HR
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Time & Attendance
                                                    </li>

                                                    <li>
                                                        <i className="fal fa-check" /> Travel & Advance
                                                    </li>

                                                    <li>
                                                        <i className="fal fa-check" /> People Analytics
                                                    </li>

                                                    <li>
                                                        <i className="fal fa-check" /> Payroll
                                                    </li>

                                                    <li>
                                                        <i className="fal fa-check" /> Talent Aqcuisition
                                                    </li>

                                                    <li>
                                                        <i className="fal fa-check" /> Talent Management
                                                    </li>

                                                    <li>
                                                        <i className="fal fa-check" /> Performance Management
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div id="year">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 wow animated fadeInLeft">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Basic</h6>
                                                <div className="price-range">
                                                    <sup>Rp</sup> <span>120K</span>
                                                    <p>/Tahun</p>
                                                </div>
                                                <p>potongan 24K per pegawai</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 15 GB cloud
                                                        storage
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                                        <div className="pricing-one__single center">
                                            <div className="pricig-heading">
                                                <h6>Modern</h6>
                                                <div className="price-range">
                                                    <sup>Rp</sup> <span>144K</span>
                                                    <p>/Tahun</p>
                                                </div>
                                                <p>Billed $276 per website annually.</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 50 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 Support
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-rebon">
                                                <span>Most Popular</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInRight">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Advance</h6>
                                                <div className="price-range">
                                                    <sup>Rp</sup> <span>180K</span>
                                                    <p>/Tahun</p>
                                                </div>
                                                <p>Billed $276 per website annually.</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Data security
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 100 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 Support
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default PricingHomeOne;
