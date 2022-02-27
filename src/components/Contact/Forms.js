import React from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Forms() {
    const history = useHistory();

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const body = {
         pesan            : e.target.pesan.value,
         nama_depan       : e.target.nama_depan.value,
         nama_belakang    : e.target.nama_belakang.value,
         email            : e.target.email.value,
         phone            : e.target.phone.value,
         nama_perusahaan   : e.target.nama_perusahaan.value,
         bidang_perusahaan : e.target.bidang_perusahaan.value,
         jabatan_pekerjaan : e.target.jabatan_pekerjaan.value
        };

        axios.post("http://localhost/api_lumen_intuitif/project/public/bisnis_pelanggan/simpan_permintaan_demo", body)
        .then(res => {
            console.log(res);
            history.push("/terimakasih");
        })
        .catch(error => {
          console.log(error);
        })

    };

    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact--info-area">
                                <h3>Get in touch</h3>
                                <p>Looking for help? Fill the form and start a new adventure.</p>
                                <div className="single-info">
                                    <h5>Headquaters</h5>
                                    <p>
                                        <i className="fal fa-home"></i>
                                        CBD Metland Transyogi Jl. Metro Ruko Eboni 7 No. 91.
                                        <br /> Cileungsi Kidul.
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5>Phone</h5>
                                    <p>
                                        <i className="fal fa-phone"></i>
                                        (+62) 821 4764 0743
                                        <br />
                                        (+62) 821 4764 0743
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5>Support</h5>
                                    <p>
                                        <i className="fal fa-envelope"></i>
                                        info@intuitif.id
                                        <br />
                                    </p>
                                </div>
                                <div className="ab-social">
                                    <h5>Follow Us</h5>
                                    <a className="fac" href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="twi" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="you" href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a className="lin" href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <h4>Demo Aplikasi</h4>
                                <p>Saya tertarik untuk demo aplikasi</p>
                                <form  onSubmit={(e) => handleSubmitForm(e)}  method="post" className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="nama_depan" placeholder="Nama Depan" />
                                    </div>
                                    <div className="col-md-6">
                                        <input  type="text" name="nama_belakang" placeholder="Nama Belakang" />
                                    </div>
                                    <div className="col-md-6">
                                        <input

                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input

                                            type="number"
                                            name="phone"
                                            placeholder="Phone Number"
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <input  type="text" name="nama_perusahaan" placeholder="Nama Perusahaan" />
                                    </div>

                                    <div className="col-md-12">
                                        <input type="text" name="bidang_perusahaan" placeholder="Bidang Perusahaan" />
                                    </div>


                                    <div className="col-md-12">
                                        <input  type="text" name="jabatan_pekerjaan" placeholder="Jabatan / Posisi" />
                                    </div>

                                    <div className="col-md-12">
                                        <textarea

                                            name="pesan"
                                            placeholder="Sistem apa yang anda butuhkan?"
                                        ></textarea>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="condition-check">
                                            <input id="terms-conditions" type="checkbox" />
                                            <label htmlFor="terms-conditions">
                                                I agree to the <a href="#">Terms & Conditions</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <input type="submit" name="submit" value="Kirim Permintaan Demo" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bisylms-map">
                <iframe
                    title="map"
                    src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;coord=39.966528,-75.158284&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed"
                ></iframe>
            </div>
        </>
    );
}

export default Forms;
