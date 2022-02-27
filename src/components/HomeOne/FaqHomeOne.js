import React, { useState } from 'react';

function FaqHomeOne({ className }) {
    const [showQues, setQues] = useState(1);
    const openQuestion = (value) => {
        setQues(value);
    };
    return (
        <>
            <section className={`intuitif-faq-area pb-95 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="intuitif-section-title text-center">
                                <h3 className="intuitif-title">Frequently asked questions</h3>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(1)}
                                        className={`accrodion ${showQues === 1 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Data Bisnis saya aman?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 1 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        Data bisnis anda dienkripsi dan dilindungi secara sistem. kami punya kebijakan privacy yang jelas untuk melindungi data bisnis pelanggan.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(2)}
                                        className={`accrodion ${showQues === 2 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Cloud vs Premise: mana yang lebih baik?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 2 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        Untuk investasi jangka panjang, on premis merupakan pilihan. Akan tetapi ada beberapa prasyarat untuk bisa sukses implementasi dengan teknologi on-premise. Salah satunya adalah budget yang tinggi, alokasi tim IT khusus untuk IT support dan maintenance server dll. Dan jika bisnis Anda merupakan perusahaan skala besar dengan karyawan ribuan, on-premise bisa menjadi pilihan yang tepat. Namun jika anda tidak punya semua itu, Cloud merupakan yang paling tepat, selain murah, aman dan mudah. Anda cukup membayar sesuai pemakain jumlah pegawai.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div
                                        onClick={() => openQuestion(3)}
                                        className={`accrodion ${showQues === 3 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Dimanakah data saya disimpan?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 3 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        Kami menggunakan server AWS, dengan tingkat keamanan level dunia. dimana bank-bank international juga disimpan disana.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(4)}
                                        className={`accrodion ${showQues === 4 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Bisakah saya meng-custom?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 4 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Kami sarankan tidak perlu request, karena komposisi dan arsitektur desain sistem kami sudah dirancang untuk bisa beradaptasi ke semua aspek industri dan berbagai jenis kebutuhan perusahaan yang berbeda. Akan tetapi kami masih membuka peluang, dan menerima masukan apabila saran dan kritik Anda bagus untuk dilakukan perubahan agar sistem kami menjadi lebih sempurna.
Kecuali jika Anda ingin membeli produk secara on-premise
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(5)}
                                        className={`accrodion ${showQues === 5 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Apakah data saya aman dari bencana?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 5 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        Kami menjamin kerahasiaan dan keamanan data Anda, termasuk dari potensi bencana dan pencurian. Kami menyimpan dan membackup data secara otomatis di server yang berbeda untuk menjamin reliability data Anda.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div
                                        onClick={() => openQuestion(6)}
                                        className={`accrodion ${showQues === 6 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Apa saja layanan yang diberikan oleh Intuitif?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 6 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                      Kami memberikan layanan premium tanpa dipungut biaya. Anda bisa memanggil kami on-site untuk memberikan dukungan terbaik untuk bisa menciptakan layanan SDM yang maksimal
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="faq-text text-center pt-40">
                                <p>
                                    Can't find an answer?{' '}
                                    <a href="mailto:demo@gmail.com">Email us</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FaqHomeOne;
