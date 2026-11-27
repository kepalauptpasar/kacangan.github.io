/**
 * Seed Data & Konfigurasi Aset UPT Pasar Umum Kacangan
 * Dinas Perdagangan dan Perindustrian Kabupaten Boyolali
 */

const SEED_CONFIG = {
  instansi: {
    pemda: "PEMERINTAH KABUPATEN BOYOLALI",
    dinas: "DINAS PERDAGANGAN DAN PERINDUSTRIAN",
    upt: "UPT PASAR UMUM KACANGAN",
    alamat: "Jl. Raya Kacangan - Andong, Boyolali, Jawa Tengah",
    logoPemda: "./assets/LogoBoyolali62kb.png",
    capDinas: "./assets/cap-disdagperin.png"
  },
  pejabat: {
    kepalaUpt: {
      nama: "Kepala UPT Pasar Umum Kacangan",
      jabatan: "Kepala UPT"
    },
    lurahPasar: {
      nama: "ISMADI",
      jabatan: "Lurah Pasar Kacangan"
    },
    bendahara: {
      nama: "Triyono",
      jabatan: "Bendahara UPT Pasar Kacangan"
    }
  },
  daftarPasar: [
    { id: "PSR-KCG", nama: "Pasar Umum Kacangan", lokasi: "Kacangan, Andong" },
    { id: "PSR-KMS", nama: "Pasar Kemusu", lokasi: "Kemusu" },
    { id: "PSR-KNT", nama: "Pasar Kunti", lokasi: "Kunti, Andong" }
  ],
  petugasPungut: [
    { id: "PTG-01", nama: "Sholihin", wilayah: "Pasar Umum Kacangan" }
  ],
  tarifRetribusi: [
    { kode: "KIO-A", jenis: "Kios Kelas A", tarifHarian: 2500, tarifBulanan: 75000 },
    { kode: "KIO-B", jenis: "Kios Kelas B", tarifHarian: 2000, tarifBulanan: 60000 },
    { kode: "LOS-A", jenis: "Los Kelas A", tarifHarian: 1500, tarifBulanan: 45000 },
    { kode: "LOS-B", jenis: "Los Kelas B", tarifHarian: 1000, tarifBulanan: 30000 }
  ],
  samplePedagang: [
    {
      npwrd: "33090001001",
      nik: "3309120101800001",
      nama: "Siti Aminah",
      pasarId: "PSR-KCG",
      blok: "Kios Blok A No. 01",
      jenisDasaran: "KIO-A",
      dagangan: "Sembako",
      statusBayar: "LUNAS"
    },
    {
      npwrd: "33090001002",
      nik: "3309121505750002",
      nama: "Budi Santoso",
      pasarId: "PSR-KCG",
      blok: "Los Blok B No. 12",
      jenisDasaran: "LOS-A",
      dagangan: "Sayuran & Bumbu",
      statusBayar: "ANGSURAN"
    },
    {
      npwrd: "33090002001",
      nik: "3309152008820003",
      nama: "Sri Wahyuni",
      pasarId: "PSR-KMS",
      blok: "Kios Blok C No. 04",
      jenisDasaran: "KIO-B",
      dagangan: "Pakaian",
      statusBayar: "LUNAS"
    }
  ]
};

// Ekspor untuk modul Node.js / CommonJS maupun browser global
if (typeof module !== "undefined" && module.exports) {
  module.exports = SEED_CONFIG;
} else if (typeof window !== "undefined") {
  window.SEED_CONFIG = SEED_CONFIG;
}