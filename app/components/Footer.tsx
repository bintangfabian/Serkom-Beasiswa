// components/Footer.tsx
const Footer = () => {
    return (
        <footer className="bg-bian-primary text-white pt-10 pb-4" id="contact">
            <div className="container mx-auto grid grid-cols-7 md:grid-cols-3 gap-20 justify-end">
                <div className="col-start-1 col-span-4">
                    <h1 className="text-bian-secondary font-semibold text-2xl mb-5">Sakoolarship</h1>
                    <address className="not-italic">
                        Jl. D.I Panjaitan No. 128 Purwokerto 53147, <br />
                        Jawa Tengah - Indonesia
                    </address>
                    <ul className="mt-2">
                        <li>WA: 0812-9812-8317</li>
                        <li>Email: bintangfabian@gmail.com</li>
                        <li>Negara: Indonesia</li>
                    </ul>
                </div>
                <div className="col-start-5 col-span-1">
                    <h4 className="font-bold mb-5">Menu</h4>
                    <ul>
                        <li className="text-white hover:text-bian-secondary hover:cursor-pointer">Home</li>
                        <li className="text-white hover:text-bian-secondary hover:cursor-pointer">About</li>
                        <li className="text-white hover:text-bian-secondary hover:cursor-pointer">Beasiswa</li>
                        <li className="text-white hover:text-bian-secondary hover:cursor-pointer">Contact</li>
                        <li className="text-white hover:text-bian-secondary hover:cursor-pointer">Tentang Sakoolarship</li>
                    </ul>
                </div>
                <div className="col-start-6 col-span-2">
                    <h4 className="font-bold mb-5">Tentang Kami</h4>
                    <p>
                        <span className="font-bold text-lg text-bian-secondary">Sakoolarship</span> adalah platform yang dirancang untuk membantu mahasiswa menemukan dan mengakses berbagai jenis beasiswa yang tersedia. Dengan Sakoolarship, mahasiswa dapat dengan mudah mencari informasi tentang beasiswa akademik dan non-akademik, mendaftar secara online, dan mendapatkan dukungan dalam proses aplikasi. Platform ini bertujuan untuk memberdayakan mahasiswa dalam mencapai pendidikan yang lebih tinggi dengan menyediakan sumber daya dan informasi yang diperlukan untuk mendapatkan bantuan finansial.
                    </p>
                </div>
            </div>
            <div className="bg-bian-secondary text-center py-4 mt-8 text-bian-primary">
                <p>Copyright © 2024 Bintang Fabian Putra 🖤</p>
            </div>
        </footer>
    );
};

export default Footer;
