"use client";

import { ChangeEvent, useState, useEffect, FormEvent } from "react";

const BeasiswaForm: React.FC = () => {

    // validasi untuk nama
    const [name, setName] = useState<string>("");
    const [nameError, setNameError] = useState<string | null>(null);

    // validasi untuk email
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string | null>(null);

    // validasi untuk nomer hp
    const [phone, setPhone] = useState<string>("");
    const [phoneError, setPhoneError] = useState<string | null>(null);

    // validasi untuk semester
    const [semester, setSemester] = useState<string>("");
    const [semesterError, setSemesterError] = useState<string | null>(null);

    // validasi untuk ipk
    const [ipk, setIpk] = useState<string>("");
    const [ipkError, setIpkError] = useState<string | null>(null);

    // validasi untuk upload file
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState<string | null>(null);

    // validasi untuk beasiswa
    const [beasiswa, setBeasiswa] = useState<string>("");
    const [beasiswaError, setBeasiswaError] = useState<string | null>(null);


    // fungsi untuk membuat beasiswa secara acak dari min dan max angka yang sudah di tentukan
    const generateRandomIpk = (min: number, max: number): string => {
        return (Math.random() * (max - min) + min).toFixed(2);
    };

    // fungsi untuk informasi jika nama tidak sesai ketentuan
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        if (e.target.value.trim() === "") {
            setNameError("Nama tidak boleh kosong");
        } else {
            setNameError(null);
        }
    };

    // fungsi untuk input email sesuai format "nama@gmail.com"
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(e.target.value)) {
            setEmailError("Email harus sesuai format name@email.com");
        } else {
            setEmailError(null);
        }
    };

    // fungsi untuk input nomer hp harus angka dan angka min 10 dan max 12
    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numericValue = value.replace(/[^0-9]/g, "");
        setPhone(numericValue);
        if (numericValue.length < 10 || numericValue.length > 12) {
            setPhoneError("Nomer Hp harus di antara 10 dan 12 digit");
        } else {
            setPhoneError(null);
        }
    };

    // fungsi untuk memuncukkan error ketika semester tidak di pilih
    const handleSemesterChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSemester(e.target.value);
        setIpk("");
        if (!e.target.value) {
            setSemesterError("Semester harus dipilih");
        } else {
            setSemesterError(null);
        }
    };

    // fungsi untuk memunculkan ipk otomatis berdasarkan semester yang dipilih, lalu memunculkan pesan jika ipk dibawah 3.00
    useEffect(() => {
        if (semester) {
            let generatedIpk = "";
            if (semester >= "1" && semester <= "4") {
                generatedIpk = generateRandomIpk(2.5, 2.99);
            } else if (semester >= "5" && semester <= "8") {
                generatedIpk = generateRandomIpk(3.0, 4.0);
            }
            setIpk(generatedIpk);
            if (generatedIpk && parseFloat(generatedIpk) < 3.00) {
                setIpkError("IPK harus diatas 3.00.");
            } else {
                setIpkError(null);
            }
        }
    }, [semester]);

    // fungsi untuk upload file harus .pdf, .jpg, .zip
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const allowedExtensions = /(\.pdf|\.jpg|\.zip)$/i;
            if (!allowedExtensions.exec(file.name)) {
                setFileError("File harus .pdf, .jpg, atau .zip format");
                setSelectedFile(null);
            } else {
                setFileError(null);
                setSelectedFile(file);
            }
        }
    };

    // fungsi untuk memunculkan error ketika beasiswa tidak dipilih
    const handleBeasiswaChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setBeasiswa(e.target.value);
        if (!e.target.value) {
            setBeasiswaError("Beasiswa harus dipilih");
        } else {
            setBeasiswaError(null);
        }
    };


    // fungsi validasi untuk error pada seiap input ketika tidak sesuai ketentuan
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!name.trim()) {
            setNameError("Nama tidak boleh kosong");
        }

        if (!email) {
            setEmailError("Email tidak boleh kosong");
        }

        if (!phone) {
            setPhoneError("Nomer Hp tidak boleh kosong");
        }

        if (!semester) {
            setSemesterError("Pilih semester");
        }

        if (!beasiswa) {
            setBeasiswaError("Pilih beasiswa");
        }

        if (!selectedFile) {
            setFileError("Harus upload file");
        }

        if (
            nameError || emailError || !email || phoneError || !phone ||
            ipkError || !selectedFile || fileError || semesterError || beasiswaError
        ) {
            alert("Harap isikan form sesuai ketentuan");
            return;
        }

        // penyimpanan data yang sudah di inputkan
        const studentData = {
            id: Date.now(),
            name,
            email,
            phoneNumber: phone,
            semester,
            ipk,
            beasiswa,
            status: "Belum Diverifikasi",
        };

        // upload data pada database menggunakan method POST
        try {
            const response = await fetch("http://localhost:9000/student", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(studentData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form.");
            }

            alert("Data Berhasil Disimpan");

            // mereset ulang isi atau value yang ada pada semua inputan
            setName("");
            setEmail("");
            setPhone("");
            setSemester("");
            setIpk("");
            setBeasiswa("");
            setSelectedFile(null);
        } catch (error) {
            console.error(error);
            alert("Data Tidak Berhasil Disimpan");
        }
    };

    return (
        // form untuk daftar beasiswa
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full border border-bian-primary">
                <h1 className="text-center text-2xl font-bold mb-5">DAFTAR BEASISWA</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1">Masukkan Nama</label>
                        <input
                            type="text"
                            className={`w-full p-2 border rounded-md ${nameError ? "border-red-500" : "border-gray-300"}`}
                            placeholder="Masukkan Nama"
                            value={name}
                            onChange={handleNameChange}
                        />
                        {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Masukkan Email</label>
                        <input
                            type="email"
                            className={`w-full p-2 border rounded-md ${emailError ? "border-red-500" : "border-gray-300"}`}
                            placeholder="Masukkan Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Nomor HP</label>
                        <input
                            type="text"
                            className={`w-full p-2 border rounded-md ${phoneError ? "border-red-500" : "border-gray-300"}`}
                            placeholder="Nomor HP"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                        {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Semester saat ini</label>
                        <select
                            className={`w-full p-2 border rounded-md ${semesterError ? "border-red-500" : "border-gray-300"}`}
                            value={semester}
                            onChange={handleSemesterChange}
                        >
                            <option value="">Pilih Semester</option>
                            <option value="1">Semester 1</option>
                            <option value="2">Semester 2</option>
                            <option value="3">Semester 3</option>
                            <option value="4">Semester 4</option>
                            <option value="5">Semester 5</option>
                            <option value="6">Semester 6</option>
                            <option value="7">Semester 7</option>
                            <option value="8">Semester 8</option>
                        </select>
                        {semesterError && <p className="text-red-500 text-sm mt-1">{semesterError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">IPK terakhir</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-md bg-gray-300"
                            disabled
                            value={ipk}
                        />
                        {ipkError && <p className="text-red-500 text-sm mt-1">{ipkError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Pilihan Beasiswa</label>
                        <select
                            className={`w-full p-2 border rounded-md ${beasiswaError ? "border-red-500" : "border-gray-300"}`}
                            value={beasiswa}
                            onChange={handleBeasiswaChange}
                            disabled={!!ipkError}
                        >
                            <option value="">Pilihan Beasiswa</option>
                            <option value="Akademik">Akademik</option>
                            <option value="Non-Akademik">Non-Akademik</option>
                        </select>
                        {beasiswaError && <p className="text-red-500 text-sm mt-1">{beasiswaError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Upload Berkas Syarat</label>
                        <input
                            type="file"
                            className="w-full p-2 border rounded-md"
                            onChange={handleFileChange}
                            disabled={!!ipkError}
                        />
                        {fileError && <p className="text-red-500 text-sm mt-1">{fileError}</p>}
                    </div>
                    <div className="flex justify-between mt-6">
                        <button
                            type="reset"
                            className="w-32 bg-bian-secondary text-black py-2 rounded-md"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="w-32 bg-bian-primary text-white py-2 rounded-md hover:bg-sky-800"
                            disabled={!!fileError}
                        >
                            Daftar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BeasiswaForm;
