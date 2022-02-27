import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <ul>

                <li>
                    <a href="#">
                        Products <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <div className="paten" ></div> <i className="panah fal fa-arrow-right" />
                            <Link to="/products/core-hr"><b>Core HR</b><p>Database karyawan, Manajemen Organisasi, Custom workflow, HR Dokumen, dan lainnya</p></Link>
                        </li>
                        <li>
                            <div className="paten" ></div> <i className="panah fal fa-arrow-right" />
                            <Link to="/products/time-and-attendance"><b>Time & Attendance</b><p>Touchless Attendance. Konfigurasi Kebijakan dan regulasi yang cocok untuk budaya perusahaan secara tepat</p></Link>
                        </li>
                        <li>
                            <div className="paten" ></div> <i className="panah fal fa-arrow-right" />
                            <Link to="/products/payroll"><b>Payroll</b><p>Konfigurasi Komponen Payroll. Atur regulasi Lembur. Atur BPJS dan PPh21 dalam satu aplikasi.</p></Link>
                        </li>
                        <li>
                            <div className="paten" ></div> <i className="panah fal fa-arrow-right" />
                            <Link to="/about-us"><b>Performance Management (soon)</b><p>Buat dan atur target perusahaan secara otonomi dan lincah sesuai dengan tujuan strategis perusahaan</p></Link>
                        </li>
                        <li>
                            <div className="paten" ></div> <i className="panah fal fa-arrow-right" />
                            <Link to="/products/travel-and-advance"><b>Travel & Advance</b><p>Proses digitalisasi pengajuan Bisnis Travel. Mengajukan Advance atau Reimburs atau kombinasi keduanya.</p></Link>
                        </li>
                        <li>
                            <div className="paten" ></div> <i className="panah fal fa-arrow-right" />
                            <Link to="/about-us"><b>Recruitment (soon)</b><p>Rekrutment memungkinkan Anda untuk menyeleksi kandidat-kandidat terbaik tanpa banyak kehilangan waktu</p></Link>
                        </li>

                    </ul>
                </li>

                <li>
                    <a href="#">
                        Solutions <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <div className="paten" ></div> <i className="panah fal fa-arrow-right" />
                            <Link to="/about-us"><b>HXMS Suite</b><p>HR Manajement, Talent Acquisition, Talent Manajement & Payroll</p></Link>
                        </li>
                        <li>
                            <div className="paten" ></div> <i className="panah fal fa-arrow-right" />
                            <Link to="/about-us"><b>Talent Management Suite</b><p>Acquisition, Engagement, Performance & Development</p></Link>
                        </li>
                        <li>
                            <div className="paten" ></div> <i className="panah fal fa-arrow-right" />
                            <Link to="/about-us"><b>Lite HXMS Suite</b><p>Core HR, Time & Attendance, People Analytics, Payroll.</p></Link>
                        </li>
                        <li>
                            <div className="paten" ></div> <i className="panah fal fa-arrow-right" />
                            <Link to="/about-us"><b>Work From Anywhere</b><p>Fitur tracking, vaksin status, dan realtime tracking location</p></Link>
                        </li>

                    </ul>
                </li>



                <li>
                    <a href="#">
                        Blog
                        <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/news">News Page</Link>
                        </li>
                        <li>
                            <Link to="/news/single-news">Single News</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
