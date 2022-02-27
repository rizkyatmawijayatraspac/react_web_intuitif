import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import thumb from '../../assets/images/intuitif-hris.png';
import shapeSix from '../../assets/images/shape/shape-6.png';
import shapeSeven from '../../assets/images/shape/shape-7.png';
import shapeEight from '../../assets/images/shape/shape-8.png';

function FeaturesHomeOne({ className }) {
    const [tab, setTab] = useState('setting');
    const handleClick = (e, value) => {
        e.preventDefault();
        setTab(value);
    };
    return (
        <section className={`intuitif-features-area pt-100 ${className}`} id="features">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="intuitif-features-tabs-btn">
                            <div
                                className="nav flex-column nav-pills"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <a
                                    onClick={(e) => handleClick(e, 'setting')}
                                    className={`nav-link ${tab === 'setting' ? 'active' : ''}`}
                                    id="v-pills-home-tab"
                                    data-toggle="pill"
                                    href="#v-pills-home"
                                    role="tab"
                                    aria-controls="v-pills-home"
                                    aria-selected="true"
                                >
                                    <i className="fas fa-cog" /> Core HR
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'report')}
                                    className={`nav-link ${tab === 'report' ? 'active' : ''}`}
                                    id="v-pills-profile-tab"
                                    data-toggle="pill"
                                    href="#v-pills-profile"
                                    role="tab"
                                    aria-controls="v-pills-profile"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-exclamation-triangle" /> Time & Attendance
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'notice')}
                                    className={`nav-link ${tab === 'notice' ? 'active' : ''}`}
                                    id="v-pills-messages-tab"
                                    data-toggle="pill"
                                    href="#v-pills-messages"
                                    role="tab"
                                    aria-controls="v-pills-messages"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-bell" /> Payroll Management
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'app')}
                                    className={`nav-link ${tab === 'app' ? 'active' : ''}`}
                                    id="v-pills-settings-tab"
                                    data-toggle="pill"
                                    href="#v-pills-settings"
                                    role="tab"
                                    aria-controls="v-pills-settings"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-lock" /> Performance Management
                                </a>


                                <a
                                    onClick={(e) => handleClick(e, 'rekrutment')}
                                    className={`nav-link ${tab === 'rekrutment' ? 'active' : ''}`}
                                    id="v-pills-rekrutment-tab"
                                    data-toggle="pill"
                                    href="#v-pills-rekrutment"
                                    role="tab"
                                    aria-controls="v-pills-rekrutment"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-lock" /> Recruitment
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div
                                className={`${
                                    tab === 'setting' ? 'show active' : ''
                                } tab-pane fade`}
                                id="v-pills-home"
                                role="tabpanel"
                                aria-labelledby="v-pills-home-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="intuitif-features-thumb text-center wow animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="intuitif-features-content wow animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Fundamental Core Human Revolution</span>
                                            <h3 className="title">
                                            Core Human<br />Revolution (HR)
                                            </h3>
                                            <p>
                                            Database karyawan,
                                            Manajemen Organisasi,
                                            Custom workflow,
                                            HR Dokumen, dan lainnya
                                            </p>
                                            <Link className="main-btn" to="/about-us">
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'report' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-profile"
                                role="tabpanel"
                                aria-labelledby="v-pills-profile-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="intuitif-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="intuitif-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Kelola kehadiran dalam satu dashboard</span>
                                            <h3 className="title">
                                                Time and <br /> Attendance
                                            </h3>
                                            <p>
                                                Touchless
                                                Attendance.
                                                Konfigurasi Kebijakan
                                                dan regulasi yang
                                                cocok untuk budaya
                                                perusahaan secara
                                                tepat
                                            </p>
                                            <a className="main-btn" href="#">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'notice' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-messages"
                                role="tabpanel"
                                aria-labelledby="v-pills-messages-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="intuitif-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="intuitif-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Hitung payroll dalam satu jam</span>
                                            <h3 className="title">
                                                Payroll Management <br />
                                            </h3>
                                            <p>
                                                Konfigurasi
                                                Komponen Payroll.
                                                Atur regulasi Lembur.
                                                Atur BPJS dan PPh21
                                                dalam satu aplikasi.
                                                Atur jadwal otomatis
                                                proses payroll dan
                                                kebijakan unik untuk
                                                setiap perusahaan.
                                            </p>
                                            <a className="main-btn" href="#">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'app' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-settings"
                                role="tabpanel"
                                aria-labelledby="v-pills-settings-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="intuitif-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="intuitif-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Boost Performance Your Organization</span>
                                            <h3 className="title">
                                                Performance <br /> Management
                                            </h3>
                                            <p>
                                                Buat dan atur target
                                                perusahaan secara
                                                otonomi dan lincah sesuai
                                                dengan tujuan strategis
                                                perusahaan dan bisa dikendalikan langsung oleh karyawan

                                            </p>
                                            <a className="main-btn" href="#">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`${tab === 'rekrutment' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-rekrutment"
                                role="tabpanel"
                                aria-labelledby="v-pills-rekrutment-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="intuitif-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="intuitif-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Talent Acquicition</span>
                                            <h3 className="title">
                                                Recruitment <br />
                                            </h3>
                                            <p>
                                                Rekrutment memungkinkan Anda untuk menyeleksi kandidat-kandidat terbaik tanpa banyak kehilangan waktu
                                            </p>
                                            <a className="main-btn" href="#">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="features-shape-1">
                <img src={shapeSix} alt="" />
            </div>
            <div className="features-shape-2">
                <img src={shapeSeven} alt="" />
            </div>
            <div className="features-shape-3">
                <img src={shapeEight} alt="" />
            </div>
        </section>
    );
}

export default FeaturesHomeOne;
