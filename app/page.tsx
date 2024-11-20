import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    {/* ini untuk membuat image header */}
      <div className="bg-bian-secondary h-[545px] mb-10 flex items-center justify-center overflow-hidden">
        <Image
          src="/beasiswa-telu.jpg"
          alt="Picture of Beasiswa"
          layout="responsive"
          width={700}
          height={545}
          className="w-full object-cover"
        />
      </div>

      {/* ini untuk membuat bagian about */}
      <div className="container mx-auto flex justify-between gap-32 h-96 my-20">
        <div className="w-1/2 max-h-full ">
          <Image
            src="/bea_illu.jpeg"
            alt="Illustration of Beasiswa"
            width={575}
            height={300}
            className="absolute bg-center"
          />
        </div>
        <div className="flex flex-col justify-between w-10/12 max-w-full" id="about">
          <div className="flex flex-col gap-4">
            <p className="text-justify "><span className="font-bold">Sakoolarship</span> menyediakan beasiswa bagi mahasiswa yang berkuliah di Telkom University. Beasiswa yang disediakan dibagi dalam dua skema, antara lain:</p>
            <p className="text-justify ml-10"><span className="font-bold -ml-4"> - Beasiswa Akademik</span> adalah jenis beasiswa yang diberikan kepada mahasiswa berdasarkan prestasi akademik mereka. Kriteria penerima beasiswa ini biasanya meliputi nilai akademik yang tinggi, hasil ujian, atau pencapaian dalam bidang studi tertentu. Beasiswa ini bertujuan untuk mendorong dan mendukung siswa yang menunjukkan kemampuan akademik yang luar biasa untuk melanjutkan pendidikan mereka.</p>
            <p className="text-justify ml-10"><span className="font-bold -ml-4"> - Beasiswa Non Akademik</span> adalah jenis beasiswa yang diberikan kepada mahasiswa berdasarkan prestasi atau kegiatan di luar bidang akademik. Ini bisa mencakup prestasi dalam olahraga, seni, kepemimpinan, atau kegiatan sosial. Beasiswa ini bertujuan untuk menghargai dan mendukung individu yang menunjukkan bakat atau kontribusi yang signifikan di luar lingkungan akademik.</p>
          </div>
          <Link href="/Beasiswa/BeasiswaForm" className="block bg-bian-primary w-32 p-3 text-white rounded-lg text-center mt-5">Daftar</Link>
          <p className="text-justify text-slate-600">*syarat & ketentuan berlaku</p>
        </div>
      </div>
    </>
  )
}