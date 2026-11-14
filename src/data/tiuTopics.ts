import { TestCategory, TopicContent } from '../types/skd';

export const TIU_TOPICS: TopicContent[] = [
  {
    id: 'tiu-verbal',
    category: TestCategory.TIU,
    code: 'TIU 01',
    title: 'Verbal: Analogi, Silogisme & Analitis',
    subtitle: 'Penalaran hubungan kata, penarikan kesimpulan logis (kuantor & implikasi), dan analisis posisi/jadwal.',
    kemenpanFocus:
      'Mengukur kemampuan individu melalui perbandingan dua konsep kata, penarikan kesimpulan dari dua pernyataan, serta analisis informasi untuk menarik kesimpulan.',
    estimatedMinutes: 16,
    labType: 'silogisme-logic',
    labTitle: 'Simulator Hukum Silogisme & Ekuivalensi Logika',
    labItems: [
      {
        prompt: 'Premis 1: Jika ASN disiplin, maka layanan cepat. Premis 2: Layanan tidak cepat.',
        hint: 'Gunakan kaidah Modus Tollens (Jika p -> q, dan ~q, maka ~p).',
        answer: 'Kesimpulan: ASN tidak disiplin (~p)',
        reason: 'Ingkaran akibat (~q) selalu menghasilkan ingkaran sebab (~p). Hati-hati jangan menyimpulkan "Jika layanan cepat maka ASN disiplin"!',
      },
      {
        prompt: 'Premis: "Semua peserta SKD membawa kartu ujian. Sebagian peserta SKD memakai kemeja putih."',
        hint: 'Jika ada "Semua" + "Sebagian", kesimpulan wajib menggunakan kata "Sebagian / Ada".',
        answer: 'Kesimpulan: Sebagian peserta SKD yang memakai kemeja putih membawa kartu ujian.',
        reason: 'Kata "semua" tidak boleh dipilih jika salah satu premis hanya berkuantor "sebagian/ada".',
      },
      {
        prompt: 'Ekuivalensi pernyataan: "Jika hujan turun, maka jalanan basah."',
        hint: 'p -> q selalu setara dengan ~p atau q, atau kontraposisi (~q -> ~p).',
        answer: 'Hujan tidak turun ATAU jalanan basah (~p v q)',
        reason: 'Aturan ini sangat sering dipakai saat soal CPNS menyamarkan jawaban dengan kata "atau".',
      },
    ],
    sections: [
      {
        id: 'verb-1',
        heading: 'Strategi Analogi, Silogisme, dan Penalaran Analitis',
        summary:
          'Kemampuan Verbal TIU terdiri atas tiga pilar: Analogi (hubungan kata), Silogisme (logika deduktif), dan Penalaran Analitis (mengurutkan/memetakan syarat posisi atau jadwal).',
        keyPoints: [
          'Analogi Kata: buat kalimat penghubung yang tepat dan identik arahnya antara ruas kiri dan ruas kanan (contoh: Dokter : Stetoskop = Pelukis : Kuas -> "menggunakan alat"). Pastikan kelas kata dan urutan kiri-kanan sama!',
          'Silogisme Wajib Hafal: Modus Ponens (p->q, p => q), Modus Tollens (p->q, ~q => ~p), Silogisme Hipotetis (p->q, q->r => p->r).',
          'Negasi Kuantor: Ingkaran dari "Semua A adalah B" adalah "Ada/Sebagian A yang bukan B" (BUKAN "Semua A bukan B").',
          'Penalaran Analitis: selalu gambar tabel/garis urutan (< atau >) di kertas buram agar tidak bingung dengan syarat majemuk.',
        ],
        comparisonRows: [
          {
            label: 'Ekuivalensi (p -> q)',
            detail: 'Setara dengan ~q -> ~p (kontraposisi) atau ~p v q.',
            example: '"Jika lulus CAT maka ikut SKB" = "Tidak lulus CAT atau ikut SKB".',
          },
          {
            label: 'Negasi (p -> q)',
            detail: 'Setara dengan p ^ ~q ("p dan tidak q").',
            example: 'Ingkaran "Jika hujan maka basah" adalah "Hujan turun DAN tidak basah".',
          },
        ],
        commonTrap:
          'Jebakan terbesar Analogi adalah urutan terbalik (misal "Koki : Pisau" dijawab "Cangkul : Petani"). Jebakan Silogisme adalah menarik kesimpulan dari premis partikular-partikular ("Sebagian... Sebagian..."), padahal dua premis "Sebagian" sering kali TIDAK dapat disimpulkan secara pasti.',
        quickFormulaOrRule:
          'Aturan Emas Silogisme: Semua + Semua = Semua | Semua + Sebagian = Sebagian | Sebagian + Sebagian = Tidak dapat ditarik kesimpulan pasti (kecuali irisan himpunan jelas).',
      },
    ],
    questions: [
      {
        id: 'tiu-verb-q1',
        topicId: 'tiu-verbal',
        category: TestCategory.TIU,
        questionText: 'ARKEOLOG : FOSIL = ... : ...',
        options: [
          'Koki : Restoran',
          'Astronom : Teleskop',
          'Botanis : Tumbuhan',
          'Penjahit : Mesin Jahit',
          'Hakim : Ruang Sidang',
        ],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C benar: Arkeolog meneliti/mempelajari objek berupa Fosil, sebagaimana Botanis meneliti/mempelajari objek berupa Tumbuhan.',
          deepAnalysis:
            'Jembatan kalimat: "[Profesi] meneliti/mempelajari objek kajian berupa [Objek]". Arkeolog -> objek kajiannya Fosil. Botanis (ahli botani) -> objek kajiannya Tumbuhan.',
          distractorAnalysis: [
            'A salah: Hubungan profesi dan tempat bekerja.',
            'B salah: Hubungan profesi dan alat kerja (jika Astronom : Bintang baru tepat).',
            'C benar: Sama-sama hubungan ilmuwan dan objek kajiannya.',
            'D salah: Hubungan profesi dan alat kerja.',
            'E salah: Hubungan profesi dan tempat kerja.',
          ],
          quickTip: 'Bedakan "alat kerja" (Astronom : Teleskop) dengan "objek kajian" (Arkeolog : Fosil).',
        },
      },
      {
        id: 'tiu-verb-q2',
        topicId: 'tiu-verbal',
        category: TestCategory.TIU,
        questionText:
          'Semua pegawai di Divisi Anggaran wajib menguasai aplikasi spreadsheet. Sebagian pegawai yang menguasai aplikasi spreadsheet juga mahir menyusun infografis. Berdasarkan kedua pernyataan tersebut, kesimpulan yang paling tepat adalah...',
        options: [
          'Semua pegawai di Divisi Anggaran mahir menyusun infografis',
          'Semua yang mahir menyusun infografis adalah pegawai Divisi Anggaran',
          'Sebagian pegawai di Divisi Anggaran pasti mahir menyusun infografis',
          'Pegawai Divisi Anggaran yang tidak mahir menyusun infografis tetap menguasai aplikasi spreadsheet',
          'Tidak ada pegawai Divisi Anggaran yang tidak mahir menyusun infografis',
        ],
        correctIndex: 3,
        explanation: {
          correctSummary: 'Opsi D benar secara deduktif karena seluruh anggota Divisi Anggaran dijamin menguasai spreadsheet.',
          deepAnalysis:
            'Himpunan Divisi Anggaran berada di dalam himpunan Penguasa Spreadsheet. Himpunan Mahir Infografis beririsan dengan Penguasa Spreadsheet, tetapi irisan itu BELUM TENTU masuk ke Divisi Anggaran (jadi Opsi C terlalu gegabah!). Yang pasti benar: siapapun pegawai Divisi Anggaran—baik yang mahir infografis maupun tidak—tetap menguasai spreadsheet.',
          distractorAnalysis: [
            'A salah: Hanya "sebagian" penguasa spreadsheet yang mahir infografis.',
            'B salah: Tidak ada informasi seluruh penyusun infografis bekerja di Divisi Anggaran.',
            'C salah: Jebakan klasik! Irisan "sebagian" bisa saja berada di luar lingkup Divisi Anggaran.',
            'D benar: Karena semua Divisi Anggaran wajib menguasai spreadsheet tanpa syarat tambahan.',
            'E salah: Sama artinya dengan opsi A.',
          ],
          quickTip: 'Gunakan diagram Venn! Jika himpunan kecil (Anggaran) di dalam himpunan besar (Spreadsheet), lalu ada "Sebagian Spreadsheet = Infografis", irisan belum tentu menyentuh Anggaran.',
        },
      },
      {
        id: 'tiu-verb-q3',
        topicId: 'tiu-verbal',
        category: TestCategory.TIU,
        questionText:
          'Jika berkas pemohon lengkap dan sistem server stabil, maka kartu izin terbit pada hari yang sama. Faktanya, hari ini kartu izin tidak terbit pada hari yang sama. Kesimpulan yang sah adalah...',
        options: [
          'Berkas pemohon tidak lengkap dan sistem server tidak stabil',
          'Berkas pemohon tidak lengkap atau sistem server tidak stabil',
          'Berkas pemohon lengkap namun sistem server pasti gangguan',
          'Jika kartu izin terbit hari ini, maka berkas pemohon lengkap',
          'Sistem server stabil tetapi petugas lupa menerbitkan kartu izin',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B benar menurut hukum Modus Tollens + Hukum De Morgan.',
          deepAnalysis:
            'Misalkan P = berkas lengkap, Q = server stabil, R = kartu terbit hari ini. Premis 1: (P ∧ Q) -> R. Premis 2: ~R. Dengan Modus Tollens diperoleh ~(P ∧ Q). Menurut Hukum De Morgan, ingkaran dari "P dan Q" adalah "~P atau ~Q", yakni berkas pemohon tidak lengkap ATAU sistem server tidak stabil.',
          distractorAnalysis: [
            'A salah: Memakai kata "dan" berarti keduanya wajib salah bersamaan, padahal cukup salah satu saja tidak terpenuhi.',
            'B benar: Tepat menerapkan ~(P ∧ Q) ≡ ~P ∨ ~Q.',
            'C salah: Tidak bisa dipastikan mana yang gagal antara berkas atau server.',
            'D salah: Invers/konvers tidak sah dari implikasi.',
            'E salah: Menambah asumsi baru di luar premis.',
          ],
          quickTip: 'Ingat Hukum De Morgan: Ingkaran (A DAN B) = (Bukan A ATAU Bukan B).',
        },
      },
      {
        id: 'tiu-verb-q4',
        topicId: 'tiu-verbal',
        category: TestCategory.TIU,
        questionText:
          'Lima peserta wawancara CPNS—Andi, Bima, Citra, Dewi, dan Eka—menunggu giliran di kursi berjajar nomor 1 sampai 5 dari kiri ke kanan. Diketahui: (1) Citra duduk tepat di sebelah kiri Dewi; (2) Andi tidak duduk di ujung nomor 1 atau 5; (3) Bima duduk di kursi nomor 1; (4) Eka duduk tepat di antara Andi dan Citra. Urutan duduk dari kursi nomor 1 hingga 5 adalah...',
        options: [
          'Bima - Andi - Citra - Eka - Dewi',
          'Bima - Andi - Eka - Citra - Dewi',
          'Bima - Eka - Andi - Citra - Dewi',
          'Bima - Citra - Dewi - Eka - Andi',
          'Bima - Andi - Dewi - Citra - Eka',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B memenuhi seluruh keempat syarat posisi secara konsisten.',
          deepAnalysis:
            'Langkah 1: Kursi 1 = Bima. Langkah 2: Citra tepat di sebelah kiri Dewi -> pasangan [Citra, Dewi]. Langkah 3: Eka tepat di antara Andi dan Citra -> pola [Andi, Eka, Citra]. Gabungkan dengan [Citra, Dewi] menjadi [Andi, Eka, Citra, Dewi]. Cek Andi tidak di kursi 1/5: Andi di kursi 2! Susunan lengkap: 1. Bima, 2. Andi, 3. Eka, 4. Citra, 5. Dewi.',
          distractorAnalysis: [
            'A salah: Eka tidak di antara Andi dan Citra.',
            'B benar: Memenuhi semua 4 syarat.',
            'C salah: Eka tidak di antara Andi dan Citra.',
            'D salah: Andi berada di kursi ujung nomor 5 (melanggar syarat 2).',
            'E salah: Citra tidak di sebelah kiri Dewi, dan Eka tidak di antara Andi-Citra.',
          ],
          quickTip: 'Pada soal analitis posisi, kunci dulu posisi absolut (Bima = 1), lalu rangkai blok yang berdekatan ([Andi-Eka-Citra-Dewi]).',
        },
      },
      {
        id: 'tiu-verb-q5',
        topicId: 'tiu-verbal',
        category: TestCategory.TIU,
        questionText:
          'Pernyataan yang ekuivalen (setara secara logika) dengan kalimat "Jika peserta terlambat hadir di ruang ujian, maka peserta tidak diperbolehkan mengikuti tes" adalah...',
        options: [
          'Jika peserta tidak terlambat hadir, maka peserta diperbolehkan mengikuti tes',
          'Peserta terlambat hadir dan diperbolehkan mengikuti tes',
          'Peserta tidak terlambat hadir atau peserta tidak diperbolehkan mengikuti tes',
          'Jika peserta tidak diperbolehkan mengikuti tes, maka peserta terlambat hadir',
          'Peserta terlambat hadir atau peserta diperbolehkan mengikuti tes',
        ],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C benar karena menerapkan rumus ekuivalensi p -> q ≡ ~p ∨ q.',
          deepAnalysis:
            'Misalkan p = peserta terlambat hadir; q = peserta tidak diperbolehkan mengikuti tes. Kalimat soal adalah p -> q. Bentuk ekuivalennya ada dua: Kontraposisi (~q -> ~p) atau Disjungsi (~p ∨ q). Opsi C adalah ~p ("peserta tidak terlambat hadir") ATAU q ("peserta tidak diperbolehkan mengikuti tes").',
          distractorAnalysis: [
            'A salah: Ini adalah bentuk invers (~p -> ~q), tidak ekuivalen dengan p -> q.',
            'B salah: Ini adalah negasi dari p -> q, bukan ekuivalensinya.',
            'C benar: ~p ∨ q secara logika bernilai kebenaran persis sama dengan p -> q.',
            'D salah: Ini adalah konvers (q -> p), tidak ekuivalen.',
            'E salah: Salah tanda pada kedua komponen.',
          ],
          quickTip: 'Hafalkan rumus sakti logika TIU: (p -> q) ≡ (~q -> ~p) ≡ (~p atau q).',
        },
      },
    ],
  },
  {
    id: 'tiu-numerik-hitung',
    category: TestCategory.TIU,
    code: 'TIU 02',
    title: 'Numerik: Berhitung & Deret Angka',
    subtitle: 'Trik hitung cepat pecahan, persentase, akar-pangkat, dan pola deret angka satu hingga dua larik.',
    kemenpanFocus:
      'Mengukur kemampuan hitung sederhana dan melihat pola hubungan angka secara sistematis dan cepat.',
    estimatedMinutes: 15,
    labType: 'deret-stepper',
    labTitle: 'Detektor Pola Deret Angka CPNS',
    labItems: [
      {
        prompt: 'Deret: 3, 6, 11, 18, 27, ... (Tentukan pola & suku berikutnya)',
        hint: 'Hitung selisih antar suku berurutan (+3, +5, +7, ...).',
        answer: '38 (Pola deret bertingkat: +3, +5, +7, +9, +11)',
        reason: '27 + 11 = 38. Deret selisih ganjil bertingkat sangat sering muncul pada SKD TIU.',
      },
      {
        prompt: 'Deret: 2, 10, 4, 15, 8, 20, 16, ...',
        hint: 'Jika angka naik-turun, lompat 1 suku (pola dua larik)!',
        answer: '25 (Larik ganjil x2: 2,4,8,16 | Larik genap +5: 10,15,20,25)',
        reason: 'Suku ke-8 berada pada larik genap sehingga 20 + 5 = 25.',
      },
      {
        prompt: 'Hitung cepat: 37,5% dari 640 adalah...',
        hint: 'Ubah 37,5% menjadi pecahan istimewa (kelipatan 12,5% = 1/8).',
        answer: '240 (karena 37,5% = 3/8, sehingga 3/8 × 640 = 3 × 80)',
        reason: 'Menguasai pecahan istimewa (1/8 = 12,5%, 1/6 = 16,67%, 1/3 = 33,33%) menghemat waktu hingga 40 detik per soal.',
      },
    ],
    sections: [
      {
        id: 'num-1',
        heading: 'Hafalan Pecahan Istimewa & Trik Aljabar Cepat',
        summary:
          'Dalam ujian CAT BKN, waktu per soal hanya sekitar 54 detik. Jangan menghitung perkalian desimal panjang secara manual; gunakan konversi pecahan istimewa dan sifat aljabar kuadrat.',
        keyPoints: [
          '1/2 = 50% | 1/3 = 33,33% | 2/3 = 66,67% | 1/4 = 25% | 3/4 = 75%.',
          'Kelipatan Perdelapan: 1/8 = 12,5% | 3/8 = 37,5% | 5/8 = 62,5% | 7/8 = 87,5%.',
          'Kelipatan Perenam: 1/6 = 16,67% | 5/6 = 83,33%.',
          'Identitas Kuadrat Wajib: a² - b² = (a + b)(a - b). Contoh: 85² - 15² = (85+15)(85-15) = 100 × 70 = 7.000!',
        ],
        comparisonRows: [
          {
            label: 'Deret 1 Larik',
            detail: 'Operasi berurutan (+, -, ×, ÷) atau bertingkat (selisih tingkat kedua konstan).',
            example: '4, 7, 12, 19, 28 -> +3, +5, +7, +9 (+11 => 39).',
          },
          {
            label: 'Deret 2 atau 3 Larik',
            detail: 'Angka meloncat 1 atau 2 posisi; ciri khasnya nilai naik-turun tidak monoton.',
            example: '5, 100, 10, 90, 20, 80 -> Larik 1 (×2), Larik 2 (-10).',
          },
          {
            label: 'Deret Fibonacci',
            detail: 'Suku berikutnya adalah penjumlahan 2 suku sebelumnya.',
            example: '2, 3, 5, 8, 13, 21 (2+3=5, 3+5=8, dst).',
          },
        ],
        commonTrap:
          'Menghabiskan lebih dari 2 menit pada satu soal deret berpola rumit. Jika dalam 30 detik belum menemukan pola 1 larik, segera cek pola lompat 1 suku (2 larik) atau Fibonacci!',
        quickFormulaOrRule:
          'Selalu cek secara berurutan: (1) Selisih tetap, (2) Selisih bertingkat, (3) Rasio kali/bagi, (4) Lompat 1-2 suku (larik), (5) Fibonacci / kuadrat.',
      },
    ],
    questions: [
      {
        id: 'tiu-num-q1',
        topicId: 'tiu-numerik-hitung',
        category: TestCategory.TIU,
        questionText: 'Nilai dari 62,5% × 320 + 16,67% × 180 adalah...',
        options: ['210', '220', '230', '240', '250'],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C benar: 200 + 30 = 230.',
          deepAnalysis:
            'Ubah persen ke pecahan istimewa: 62,5% = 5/8 dan 16,67% = 1/6. Maka (5/8 × 320) + (1/6 × 180) = (5 × 40) + 30 = 200 + 30 = 230.',
          distractorAnalysis: [
            'A salah: Kesalahan penjumlahan atau konversi 5/8.',
            'B salah: Kesalahan menghitung 1/6 × 180.',
            'C benar: 200 + 30 = 230.',
            'D salah: Bias akibat pembulatan keliru.',
            'E salah: Kelebihan 20 dari hasil tepat.',
          ],
          quickTip: '62,5% = 5/8 dan 16,67% ≈ 1/6. Gunakan pembagian langsung sebelum mengalikan!',
        },
      },
      {
        id: 'tiu-num-q2',
        topicId: 'tiu-numerik-hitung',
        category: TestCategory.TIU,
        questionText: 'Tentukan dua bilangan berikutnya dari barisan: 4, 9, 16, 25, 36, ..., ... (tunggu, cek pola variasi): 5, 11, 23, 47, 95, ...',
        options: ['189', '190', '191', '192', '195'],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C benar: 191 dengan pola (×2 + 1) atau selisih dikali 2.',
          deepAnalysis:
            'Perhatikan hubungan antar suku: 5 -> 11 (+6), 11 -> 23 (+12), 23 -> 47 (+24), 47 -> 95 (+48). Selisih selalu dikali 2! Maka suku berikutnya 95 + (48 × 2) = 95 + 96 = 191. Atau dengan rumus langsung: (95 × 2) + 1 = 191.',
          distractorAnalysis: [
            'A salah: 95 × 2 - 1 = 189.',
            'B salah: 95 × 2 = 190 (lupa +1).',
            'C benar: 95 × 2 + 1 = 191.',
            'D salah: Penambahan keliru.',
            'E salah: Penjumlahan +100 tidak mengikuti rasio ×2.',
          ],
          quickTip: 'Jika angka membesar sekitar dua kali lipat tiap langkah, segera uji pola (×2 + k).',
        },
      },
      {
        id: 'tiu-num-q3',
        topicId: 'tiu-numerik-hitung',
        category: TestCategory.TIU,
        questionText: 'Tentukan angka yang tepat untuk melengkapi deret berikut: 7, 40, 14, 34, 28, 28, ..., ...',
        options: ['42 dan 22', '56 dan 22', '56 dan 24', '35 dan 22', '52 dan 20'],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B benar: 56 dan 22 (pola dua larik berselang-seling).',
          deepAnalysis:
            'Pisahkan menjadi dua larik. Larik ganjil (suku 1, 3, 5, 7): 7, 14, 28, ... memiliki pola dikali 2 -> 28 × 2 = 56. Larik genap (suku 2, 4, 6, 8): 40, 34, 28, ... memiliki pola dikurangi 6 -> 28 - 6 = 22.',
          distractorAnalysis: [
            'A salah: Mengira larik ganjil +7,+14,+14 (seharusnya ×2 = 56).',
            'B benar: Larik ganjil ×2 = 56, larik genap -6 = 22.',
            'C salah: 28 - 6 bukan 24.',
            'D salah: Keliru melihat pola larik pertama.',
            'E salah: Kedua angka tidak konsisten.',
          ],
          quickTip: 'Begitu melihat deret naik-turun seperti 7, 40, 14, 34, langsung lingkari suku ganjil dan suku genap secara terpisah!',
        },
      },
      {
        id: 'tiu-num-q4',
        topicId: 'tiu-numerik-hitung',
        category: TestCategory.TIU,
        questionText: 'Hasil dari (127² - 73²) / 200 adalah...',
        options: ['48', '54', '60', '108', '200'],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B benar: 54 menggunakan sifat selisih dua kuadrat.',
          deepAnalysis:
            'Gunakan a² - b² = (a + b)(a - b). Maka (127² - 73²) / 200 = (127 + 73)(127 - 73) / 200 = (200 × 54) / 200 = 54. Selesai dalam 5 detik tanpa mengkuadratkan!',
          distractorAnalysis: [
            'A salah: Kesalahan pengurangan 127 - 73.',
            'B benar: 127 - 73 = 54 dan faktor 200 saling mencoret.',
            'C salah: Salah hitung selisih.',
            'D salah: Hasil dikali 2.',
            'E salah: Memilih angka penjumlahan (a + b) bukan hasil akhir.',
          ],
          quickTip: 'Jangan pernah mengkuadratkan angka besar di TIU jika ada tanda minus di antara dua kuadrat: pakai (a+b)(a-b)!',
        },
      },
      {
        id: 'tiu-num-q5',
        topicId: 'tiu-numerik-hitung',
        category: TestCategory.TIU,
        questionText: 'Jika A = 3/4 + 2/5 dan B = 1,15, maka hubungan antara A dan B yang benar adalah...',
        options: [
          'A > B',
          'A < B',
          'A = B',
          'A + B = 2',
          'Hubungan A dan B tidak dapat ditentukan',
        ],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C benar: A = 0,75 + 0,40 = 1,15 sehingga A = B.',
          deepAnalysis:
            'Konversi ke desimal agar cepat: 3/4 = 0,75 dan 2/5 = 0,40. Jumlahkan: A = 0,75 + 0,40 = 1,15. Karena B = 1,15, maka A = B.',
          distractorAnalysis: [
            'A salah: Terjadi jika salah mengira 2/5 = 0,45.',
            'B salah: Terjadi jika salah mengira 2/5 = 0,25.',
            'C benar: 0,75 + 0,40 = 1,15 tepat sama dengan B.',
            'D salah: A + B = 2,30.',
            'E salah: Nilai numerik keduanya eksak dan bisa dibandingkan.',
          ],
          quickTip: 'Untuk penjumlahan pecahan berpenyebut 2, 4, 5, 8, 10, ubah langsung ke desimal lebih cepat daripada menyamakan penyebut.',
        },
      },
    ],
  },
  {
    id: 'tiu-numerik-soalcerita',
    category: TestCategory.TIU,
    code: 'TIU 03',
    title: 'Numerik: Perbandingan & Soal Cerita',
    subtitle: 'Perbandingan kuantitatif X vs Y, senilai & berbalik nilai, jarak-kecepatan-waktu, dan aritmatika sosial.',
    kemenpanFocus:
      'Mengukur kemampuan menarik kesimpulan berdasarkan data kuantitatif, perbandingan rasio, dan pemecahan masalah matematis sehari-hari.',
    estimatedMinutes: 18,
    labType: 'deret-stepper',
    labTitle: 'Pembeda Perbandingan Senilai vs Berbalik Nilai',
    labItems: [
      {
        prompt: '12 pekerja menyelesaikan renovasi kantor dalam 20 hari. Jika ingin selesai dalam 15 hari, berapa total pekerja yang dibutuhkan?',
        hint: 'Makin sedikit hari, pekerja makin BANYAK -> Berbalik Nilai (kali lurus!).',
        answer: '16 pekerja (tambahan 4 pekerja): 12 × 20 = P × 15 -> P = 240 / 15 = 16.',
        reason: 'Hati-hati baca pertanyaan akhir: apakah ditanya "total pekerja" (16) atau "tambahan pekerja" (16 - 12 = 4)!',
      },
      {
        prompt: 'Mobil melaju dengan kecepatan 60 km/jam selama 2 jam 30 menit. Berapa jarak tempuhnya?',
        hint: 'Ubah 2 jam 30 menit menjadi 2,5 jam.',
        answer: '150 km (Jarak = Kecepatan × Waktu = 60 × 2,5).',
        reason: 'Gunakan segitiga JKW (Jarak = K × W).',
      },
      {
        prompt: 'Harga tas setelah diskon 20% adalah Rp240.000. Berapa harga awalnya sebelum diskon?',
        hint: 'Rp240.000 adalah 80% dari harga awal, BUKAN 100%!',
        answer: 'Rp300.000 (Harga Awal = 100/80 × 240.000)',
        reason: 'Jangan pernah menambah 20% dari harga setelah diskon (240rb + 48rb = 288rb itu salah fatal!).',
      },
    ],
    sections: [
      {
        id: 'cer-1',
        heading: 'Rumus Wajib Soal Cerita & Perbandingan Kuantitatif (X vs Y)',
        summary:
          'Soal cerita TIU menguji ketelitian membaca kata kunci ("tambahan", "sisa", "berpapasan", "menyusul") serta kemampuan memilih apakah relasi bersifat senilai atau berbalik nilai.',
        keyPoints: [
          'Perbandingan Senilai (kali silang): makin banyak A, makin banyak B (contoh: jarak vs bensin, jumlah barang vs harga).',
          'Perbandingan Berbalik Nilai (kali lurus): makin banyak A, makin sedikit B (contoh: jumlah pekerja vs waktu kerja, kecepatan vs waktu tempuh).',
          'Waktu Berpapasan (berangkat bersamaan): t = Jarak Total / (v1 + v2). Jika ada selisih waktu berangkat, kurangi dulu jarak yang sudah ditempuh pihak pertama!',
          'Waktu Menyusul: t = Selisih Jarak / (v2 - v1).',
          'Perbandingan Kuantitatif X vs Y: jangan buru-buru menyimpulkan jika variabel berupa bilangan real tanpa syarat positif/negatif (ingat nilai kuadrat atau negatif bisa membalik tanda!).',
        ],
        commonTrap:
          'Pada soal pekerja proyek yang terhenti di tengah jalan (misal libur 4 hari), hitung dulu SISA hari kerja awal sebelum membandingkan dengan sisa hari yang tersedia: Sisa Hari Awal × Pekerja Awal = Sisa Hari Baru × Pekerja Baru!',
        quickFormulaOrRule:
          'Senilai = Kali Silang | Berbalik Nilai = Kali Lurus | Berpapasan = Jarak / (v1 + v2) | Menyusul = Selisih Jarak / (v2 - v1).',
      },
    ],
    questions: [
      {
        id: 'tiu-cer-q1',
        topicId: 'tiu-numerik-soalcerita',
        category: TestCategory.TIU,
        questionText:
          'Sebuah proyek pembangunan arsip ditargetkan selesai dalam 30 hari oleh 15 pekerja. Setelah bekerja selama 10 hari, proyek dihentikan selama 5 hari karena cuaca ekstrem. Agar proyek tetap selesai tepat waktu sesuai target awal, berapa TAMBAHAN pekerja yang diperlukan?',
        options: ['3 pekerja', '4 pekerja', '5 pekerja', '6 pekerja', '20 pekerja'],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C benar: total pekerja menjadi 20 orang, sehingga tambahan pekerja adalah 20 - 15 = 5 orang.',
          deepAnalysis:
            'Total target = 30 hari. Sudah berjalan 10 hari -> sisa rencana = 20 hari (untuk 15 pekerja). Berhenti 5 hari -> sisa hari efektif sekarang tinggal 20 - 5 = 15 hari. Gunakan berbalik nilai pada sisa pekerjaan: 20 hari × 15 pekerja = 15 hari × P_total -> P_total = 20 pekerja. Tambahan pekerja = 20 - 15 = 5 pekerja.',
          distractorAnalysis: [
            'A salah: Salah menghitung sisa hari efektif.',
            'B salah: Kurang 1 pekerja akibat pembulatan keliru.',
            'C benar: 5 pekerja tambahan.',
            'D salah: Terjadi jika menghitung dari 30 hari penuh tanpa dikurangi 10 hari kerja.',
            'E salah: Jebakan klasik! 20 adalah TOTAL pekerja, sedangkan soal menanyakan TAMBAHAN pekerja.',
          ],
          quickTip: 'Selalu garis bawahi kata "TAMBAHAN" vs "TOTAL" di kalimat pertanyaan soal pekerja!',
        },
      },
      {
        id: 'tiu-cer-q2',
        topicId: 'tiu-numerik-soalcerita',
        category: TestCategory.TIU,
        questionText:
          'Jarak Kota A dan Kota B adalah 220 km. Andi berangkat dari Kota A menuju Kota B pukul 07.00 dengan kecepatan rata-rata 50 km/jam. Pada waktu yang sama, Budi berangkat dari Kota B menuju Kota A dengan kecepatan rata-rata 60 km/jam. Pada pukul berapakah mereka akan berpapasan?',
        options: ['08.30', '08.45', '09.00', '09.15', '09.30'],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C benar: mereka berpapasan setelah 2 jam perjalanan, yaitu pukul 09.00.',
          deepAnalysis:
            'Karena berangkat pada waktu yang sama (07.00), gunakan rumus berpapasan: t = Jarak / (v1 + v2) = 220 / (50 + 60) = 220 / 110 = 2 jam. Waktu berpapasan = 07.00 + 2 jam = 09.00.',
          distractorAnalysis: [
            'A salah: 1,5 jam tidak cukup menutup jarak 220 km.',
            'B salah: Hasil pembagian keliru.',
            'C benar: 220 / 110 = 2 jam -> 09.00.',
            'D salah: Kelebihan 15 menit.',
            'E salah: Kelebihan 30 menit.',
          ],
          quickTip: 'Berpapasan waktu sama -> kecepatan DIJUMLAHKAN (50 + 60 = 110 km/jam).',
        },
      },
      {
        id: 'tiu-cer-q3',
        topicId: 'tiu-numerik-soalcerita',
        category: TestCategory.TIU,
        questionText:
          'Diketahui x dan y adalah bilangan bulat yang memenuhi -3 < x < 2 dan 1 < y < 5. Jika P = x² dan Q = y, maka hubungan antara P dan Q adalah...',
        options: [
          'P > Q',
          'P < Q',
          'P = Q',
          'P = 2Q',
          'Hubungan P dan Q tidak dapat ditentukan',
        ],
        correctIndex: 4,
        explanation: {
          correctSummary: 'Opsi E benar: nilai P = x² dapat lebih kecil, sama dengan, atau lebih besar dari Q tergantung nilai x dan y yang dipilih.',
          deepAnalysis:
            'Nilai bulat x dalam (-3, 2) adalah {-2, -1, 0, 1}, sehingga nilai P = x² bisa {0, 1, 4}. Nilai bulat y dalam (1, 5) adalah {2, 3, 4}, sehingga Q bisa {2, 3, 4}. Jika x = 0 dan y = 2 -> P(0) < Q(2). Jika x = -2 dan y = 2 -> P(4) > Q(2). Jika x = -2 dan y = 4 -> P(4) = Q(4). Karena ada lebih dari satu kemungkinan hubungan, maka hubungan P dan Q tidak dapat ditentukan!',
          distractorAnalysis: [
            'A salah: Tidak selalu berlaku, misalnya saat x = 0.',
            'B salah: Tidak selalu berlaku, misalnya saat x = -2 dan y = 2.',
            'C salah: Hanya terjadi saat x = -2 dan y = 4.',
            'D salah: Tidak konstan.',
            'E benar: Selalu uji nilai ekstrem negatif, nol, dan positif pada pertidaksamaan kuadrat.',
          ],
          quickTip: 'Jika soal perbandingan P vs Q memuat bentuk kuadrat (x²) dan rentang mencakup bilangan negatif & nol, langsung uji batas minimum dan maksimumnya!',
        },
      },
      {
        id: 'tiu-cer-q4',
        topicId: 'tiu-numerik-soalcerita',
        category: TestCategory.TIU,
        questionText:
          'Sebuah toko memberikan diskon ganda bertingkat sebesar 20% + 10% untuk pembelian printer kantor. Jika harga awal printer adalah Rp2.000.000, berapakah harga yang harus dibayar setelah diskon ganda?',
        options: ['Rp1.400.000', 'Rp1.440.000', 'Rp1.480.000', 'Rp1.500.000', 'Rp1.600.000'],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B benar: Rp1.440.000 (diskon bertingkat tidak dijumlah langsung menjadi 30%).',
          deepAnalysis:
            'Diskon tahap 1 (20%): sisa bayar = 80% × Rp2.000.000 = Rp1.600.000. Diskon tahap 2 (10% dari harga setelah diskon pertama): sisa bayar = 90% × Rp1.600.000 = Rp1.440.000. Rumus cepat: 0,8 × 0,9 = 0,72 (72% × 2.000.000 = 1.440.000).',
          distractorAnalysis: [
            'A salah: Jebakan klasik menjumlahkan 20% + 10% = 30% langsung.',
            'B benar: 0,8 × 0,9 × Rp2.000.000 = Rp1.440.000.',
            'C salah: Kesalahan perkalian persentase.',
            'D salah: Sama dengan diskon tunggal 25%.',
            'E salah: Baru menghitung diskon tahap pertama saja.',
          ],
          quickTip: 'Rumus cepat diskon ganda a% + b%: Kalikan saja persentase bayarnya -> (100-a)% × (100-b)% × Harga Awal.',
        },
      },
      {
        id: 'tiu-cer-q5',
        topicId: 'tiu-numerik-soalcerita',
        category: TestCategory.TIU,
        questionText:
          'Dalam suatu kelas pelatihan CPNS yang terdiri dari 40 peserta, sebanyak 25 orang menyukai materi TIU, 20 orang menyukai materi TWK, dan 5 orang tidak menyukai keduanya. Berapa banyak peserta yang menyukai KEDUANYA (TIU dan TWK)?',
        options: ['5 orang', '8 orang', '10 orang', '12 orang', '15 orang'],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C benar: 10 orang menyukai keduanya sesuai prinsip inklusi-eksklusi himpunan.',
          deepAnalysis:
            'Gunakan rumus himpunan Semesta: Total = A + B - Irisan + Tidak Keduanya. Maka 40 = 25 + 20 - Irisan + 5 -> 40 = 50 - Irisan -> Irisan = 50 - 40 = 10 orang.',
          distractorAnalysis: [
            'A salah: Terlupa memasukkan 5 orang yang tidak suka keduanya.',
            'B salah: Kesalahan pengurangan.',
            'C benar: (25 + 20 + 5) - 40 = 10.',
            'D salah: Kesalahan penjumlahan.',
            'E salah: Mengira 40 - 25 = 15.',
          ],
          quickTip: 'Rumus cepat irisan 2 himpunan: Irisan = (A + B + Luar) - Total Semesta.',
        },
      },
    ],
  },
  {
    id: 'tiu-figural',
    category: TestCategory.TIU,
    code: 'TIU 04',
    title: 'Figural: Analogi, Ketidaksamaan & Serial',
    subtitle: 'Penalaran visual gambar: rotasi sudut, pencerminan, perubahan warna/arsiran, dan penambahan elemen.',
    kemenpanFocus:
      'Mengukur kemampuan bernalar melalui perbandingan gambar, melihat perbedaan sifat gambar, dan melanjutkan pola perubahan hubungan antar gambar.',
    estimatedMinutes: 14,
    labType: 'figural-transform',
    labTitle: 'Simulator Transformasi Geometri Figural (Rotasi & Pencerminan)',
    labItems: [
      {
        prompt: 'Rotasi Searah Jarum Jam (+90°) vs Berlawanan (-90°)',
        hint: 'Amati posisi ujung panah atau sudut lancip segitiga saat diputar 90°.',
        answer: 'Ujung atas -> pindah ke Kanan (+90°) -> Bawah (+180°) -> Kiri (+270°)',
        reason: 'Pada soal serial figural, fokuslah melacak SATU titik acuan (misal ujung panah atau titik hitam) sebelum mengecek elemen kecil lainnya.',
      },
      {
        prompt: 'Perubahan Jumlah Sisi Poligon + Warna Bergantian',
        hint: 'Perhatikan urutan: Segitiga (3 sisi) -> Segiempat (4 sisi) -> Segilima (5 sisi).',
        answer: 'Berikutnya: Segienam (6 sisi) dengan pola warna bergantian (putih - hitam - putih - hitam)',
        reason: 'Soal figural sering menggabungkan 2 aturan sekaligus: penambahan sisi (+1) dan alternasi arsiran.',
      },
      {
        prompt: 'Ketidaksamaan Gambar (Odd One Out)',
        hint: 'Cari 4 gambar yang merupakan hasil rotasi murni dari bentuk yang sama, dan 1 gambar yang merupakan hasil pencerminan (mirror)!',
        answer: 'Gambar hasil pencerminan (terbalik arah hadap) adalah pengecualiannya.',
        reason: 'Rotasi tidak pernah mengubah orientasi kiri-kanan objek asimetris, sedangkan pencerminan membaliknya.',
      },
    ],
    sections: [
      {
        id: 'fig-1',
        heading: '3 Pilar Soal Figural CAT & Cara Cepat Mengeliminasi Opsi',
        summary:
          'Soal Kemampuan Figural (Analogi, Ketidaksamaan, dan Serial) menguji kecerdasan spasial tanpa bergantung pada bahasa. Kunci menangnya adalah teknik "Lacak Satu Elemen".',
        keyPoints: [
          'Figural Analogi (A : B :: C : ?): Identifikasi transformasi dari gambar A ke B (misal: diputar 90°, warna dalam & luar bertukar, elemen bertambah 1), lalu terapkan aturan persis sama ke gambar C.',
          'Figural Ketidaksamaan: Cek jumlah sisi, jumlah titik, arah panah, atau apakah satu gambar merupakan hasil cerminan bukan rotasi.',
          'Figural Serial: Lacak pergerakan tiap elemen secara terpisah (1. bentuk utama, 2. rotasi panah, 3. jumlah titik, 4. perubahan warna/arsiran). Segera coret opsi yang salah warna atau salah jumlah titik untuk menghemat waktu!',
        ],
        commonTrap:
          'Terjebak melihat keseluruhan gambar secara kabur sehingga tertukar antara rotasi 90° searah jarum jam dan 90° berlawanan jarum jam. Selalu tandai arah awal dengan jarum jam (12 -> 3 -> 6 -> 9)!',
        quickFormulaOrRule:
          'Strategi 3 Langkah Figural: (1) Cek Jumlah Elemen/Sisi, (2) Cek Warna/Isi (Hitam/Putih/Arsir), (3) Cek Arah Rotasi (Jam 12-3-6-9).',
      },
    ],
    questions: [
      {
        id: 'tiu-fig-q1',
        topicId: 'tiu-figural',
        category: TestCategory.TIU,
        questionText:
          'Analogi Figural: Perhatikan pola perubahan dari gambar pertama ke gambar kedua di sebelah kiri. Manakah gambar pada pilihan A–E yang memiliki hubungan perubahan yang sama untuk gambar ketiga?',
        figuralVisual: {
          mode: 'analogy',
          promptPanels: [
            [{ shape: 'triangle', rotation: 0, fill: 'outline', dotCount: 1 }],
            [{ shape: 'square', rotation: 0, fill: 'solid', dotCount: 2 }],
            [{ shape: 'pentagon', rotation: 0, fill: 'outline', dotCount: 3 }],
          ],
          optionPanels: [
            [{ shape: 'hexagon', rotation: 0, fill: 'outline', dotCount: 4 }],
            [{ shape: 'hexagon', rotation: 0, fill: 'solid', dotCount: 4 }],
            [{ shape: 'square', rotation: 0, fill: 'solid', dotCount: 4 }],
            [{ shape: 'hexagon', rotation: 0, fill: 'solid', dotCount: 3 }],
            [{ shape: 'star', rotation: 0, fill: 'solid', dotCount: 4 }],
          ],
        },
        options: ['Gambar A', 'Gambar B', 'Gambar C', 'Gambar D', 'Gambar E'],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B benar: Segilima (5 sisi) berubah menjadi Segienam (6 sisi), arsiran berubah dari kosong menjadi penuh, dan titik bertambah 1 (dari 3 menjadi 4).',
          deepAnalysis:
            'Amati transisi kiri: Segitiga (3 sisi, outline, 1 titik) -> Segiempat (4 sisi, solid hitam, 2 titik). Aturan transformasinya adalah: (1) Sisi poligon bertambah +1, (2) Isi bangun berubah dari outline menjadi solid, (3) Jumlah titik bertambah +1. Terapkan ke Segilima (5 sisi, outline, 3 titik) -> menjadi Segienam (6 sisi), solid, dengan 4 titik (Gambar B).',
          distractorAnalysis: [
            'A salah: Jumlah sisi dan titik benar, tetapi tetap outline (tidak berubah menjadi solid).',
            'B benar: Memenuhi ketiga aturan transformasi sekaligus.',
            'C salah: Jumlah sisi berkurang menjadi segiempat.',
            'D salah: Jumlah titik tetap 3 (seharusnya bertambah jadi 4).',
            'E salah: Bentuk berubah menjadi bintang, bukan penambahan +1 sisi poligon.',
          ],
          quickTip: 'Pecah perubahan analogi menjadi 3 daftar cek: Bentuk/Sisi, Warna Isi, dan Jumlah Titik.',
        },
      },
      {
        id: 'tiu-fig-q2',
        topicId: 'tiu-figural',
        category: TestCategory.TIU,
        questionText:
          'Ketidaksamaan Figural: Perhatikan kelima gambar A sampai E di bawah ini. Manakah SATU gambar yang memiliki pola berbeda dari empat gambar lainnya?',
        figuralVisual: {
          mode: 'odd_one_out',
          promptPanels: [],
          optionPanels: [
            [{ shape: 'arrow', rotation: 0, fill: 'solid', dotCount: 2 }],
            [{ shape: 'arrow', rotation: 90, fill: 'solid', dotCount: 2 }],
            [{ shape: 'arrow', rotation: 180, fill: 'solid', dotCount: 2 }],
            [{ shape: 'arrow', rotation: 270, fill: 'outline', dotCount: 2 }],
            [{ shape: 'arrow', rotation: 45, fill: 'solid', dotCount: 2 }],
          ],
        },
        options: ['Gambar A', 'Gambar B', 'Gambar C', 'Gambar D', 'Gambar E'],
        correctIndex: 3,
        explanation: {
          correctSummary: 'Opsi D benar: hanya Gambar D yang panahnya berpola kosong (outline), sedangkan keempat gambar lainnya panah berisi penuh (solid).',
          deepAnalysis:
            'Pada keempat gambar lain (A, B, C, E), panah memiliki isi solid (penuh) dengan 2 titik—yang berbeda hanyalah sudut rotasinya (0°, 90°, 180°, 45°). Gambar D menyalahi kesamaan sifat karena panahnya berwarna putih/outline.',
          distractorAnalysis: [
            'A salah: Panah solid dengan 2 titik.',
            'B salah: Panah solid dengan 2 titik (rotasi 90°).',
            'C salah: Panah solid dengan 2 titik (rotasi 180°).',
            'D benar: Satu-satunya yang berarsiran kosong/outline.',
            'E salah: Panah solid dengan 2 titik (rotasi 45°).',
          ],
          quickTip: 'Pada soal ketidaksamaan, rotasi sebuah objek yang sama TIDAK membuatnya berbeda. Cari perbedaan isi, jumlah sisi, atau pencerminan!',
        },
      },
      {
        id: 'tiu-fig-q3',
        topicId: 'tiu-figural',
        category: TestCategory.TIU,
        questionText:
          'Serial Figural: Tentukan gambar kelima yang paling tepat untuk melanjutkan barisan perubahan pola di bawah ini!',
        figuralVisual: {
          mode: 'series',
          promptPanels: [
            [{ shape: 'arrow', rotation: 0, fill: 'accent', dotCount: 1 }],
            [{ shape: 'arrow', rotation: 90, fill: 'accent', dotCount: 2 }],
            [{ shape: 'arrow', rotation: 180, fill: 'accent', dotCount: 3 }],
            [{ shape: 'arrow', rotation: 270, fill: 'accent', dotCount: 4 }],
          ],
          optionPanels: [
            [{ shape: 'arrow', rotation: 0, fill: 'accent', dotCount: 4 }],
            [{ shape: 'arrow', rotation: 90, fill: 'accent', dotCount: 5 }],
            [{ shape: 'arrow', rotation: 0, fill: 'accent', dotCount: 5 }],
            [{ shape: 'arrow', rotation: 180, fill: 'accent', dotCount: 5 }],
            [{ shape: 'arrow', rotation: 0, fill: 'outline', dotCount: 5 }],
          ],
        },
        options: ['Gambar A', 'Gambar B', 'Gambar C', 'Gambar D', 'Gambar E'],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C benar: panah kembali menghadap ke atas (360° ≡ 0°) dengan 5 titik dan warna aksen penuh.',
          deepAnalysis:
            'Lacak 2 aturan pada deret: (1) Panah berputar +90° searah jarum jam setiap langkah: Atas (0°) -> Kanan (90°) -> Bawah (180°) -> Kiri (270°) -> kembali ke Atas (0°). (2) Jumlah titik bertambah +1 setiap langkah: 1 -> 2 -> 3 -> 4 -> 5 titik. Warna panah tetap sama (accent solid). Maka jawabannya adalah Gambar C.',
          distractorAnalysis: [
            'A salah: Jumlah titik masih 4 (seharusnya 5).',
            'B salah: Arah panah menghadap kanan (90°), seharusnya atas (0°).',
            'C benar: Panah menghadap atas (0°), warna solid aksen, dengan 5 titik.',
            'D salah: Arah panah menghadap bawah (180°).',
            'E salah: Warna panah berubah menjadi outline kosong.',
          ],
          quickTip: 'Putaran 4 kali 90° selalu kembali ke posisi awal (0° = 360°).',
        },
      },
      {
        id: 'tiu-fig-q4',
        topicId: 'tiu-figural',
        category: TestCategory.TIU,
        questionText:
          'Serial Figural: Amati pola perubahan bentuk dan isi bangun pada keempat kotak pertama, lalu pilih kelanjutan yang tepat!',
        figuralVisual: {
          mode: 'series',
          promptPanels: [
            [{ shape: 'circle', rotation: 0, fill: 'solid', innerShape: 'triangle' }],
            [{ shape: 'square', rotation: 0, fill: 'outline', innerShape: 'triangle' }],
            [{ shape: 'pentagon', rotation: 0, fill: 'solid', innerShape: 'square' }],
            [{ shape: 'hexagon', rotation: 0, fill: 'outline', innerShape: 'square' }],
          ],
          optionPanels: [
            [{ shape: 'circle', rotation: 0, fill: 'solid', innerShape: 'pentagon' }],
            [{ shape: 'triangle', rotation: 0, fill: 'solid', innerShape: 'pentagon' }],
            [{ shape: 'circle', rotation: 0, fill: 'outline', innerShape: 'pentagon' }],
            [{ shape: 'square', rotation: 0, fill: 'solid', innerShape: 'triangle' }],
            [{ shape: 'circle', rotation: 0, fill: 'solid', innerShape: 'square' }],
          ],
        },
        options: ['Gambar A', 'Gambar B', 'Gambar C', 'Gambar D', 'Gambar E'],
        correctIndex: 0,
        explanation: {
          correctSummary: 'Opsi A benar: pola arsiran bergantian (solid-outline-solid-outline -> solid), bentuk luar berulang setelah segienam kembali ke lingkaran, dan bentuk dalam berganti setiap 2 langkah menjadi segilima.',
          deepAnalysis:
            'Pola 1 (Warna luar): Solid -> Outline -> Solid -> Outline -> maka langkah ke-5 adalah Solid. Pola 2 (Bentuk luar): Lingkaran (siklus 0) -> Segiempat (4) -> Segilima (5) -> Segienam (6) -> kembali ke awal siklus (Lingkaran). Pola 3 (Bentuk dalam): 2x Segitiga, 2x Segiempat -> berikutnya masuk Segilima. Yang memenuhi ketiganya adalah Gambar A.',
          distractorAnalysis: [
            'A benar: Lingkaran solid dengan bangun dalam segilima.',
            'B salah: Bentuk luar segitiga tidak sesuai siklus awal.',
            'C salah: Pola isi seharusnya solid, bukan outline.',
            'D salah: Bentuk luar dan dalam tidak melanjutkan pola.',
            'E salah: Bangun dalam masih segiempat (seharusnya sudah berganti menjadi segilima).',
          ],
          quickTip: 'Jika ada elemen yang berulang tiap 2 langkah (AA, BB, CC), langsung eliminasi opsi yang masih mempertahankan bentuk lama!',
        },
      },
      {
        id: 'tiu-fig-q5',
        topicId: 'tiu-figural',
        category: TestCategory.TIU,
        questionText:
          'Ketidaksamaan Figural: Empat dari lima gambar berikut memiliki keterkaitan aturan antara jumlah titik dan jumlah sisi bangunnya. Pilih SATU gambar yang menyimpang dari aturan tersebut!',
        figuralVisual: {
          mode: 'odd_one_out',
          promptPanels: [],
          optionPanels: [
            [{ shape: 'triangle', rotation: 0, fill: 'outline', dotCount: 3 }],
            [{ shape: 'square', rotation: 0, fill: 'outline', dotCount: 4 }],
            [{ shape: 'pentagon', rotation: 0, fill: 'outline', dotCount: 5 }],
            [{ shape: 'hexagon', rotation: 0, fill: 'outline', dotCount: 4 }],
            [{ shape: 'diamond', rotation: 0, fill: 'outline', dotCount: 4 }],
          ],
        },
        options: ['Gambar A', 'Gambar B', 'Gambar C', 'Gambar D', 'Gambar E'],
        correctIndex: 3,
        explanation: {
          correctSummary: 'Opsi D benar: Segienam memiliki 6 sisi, tetapi hanya memiliki 4 titik (tidak sama dengan jumlah sisinya).',
          deepAnalysis:
            'Periksa hubungan jumlah sisi bangun dengan jumlah titik: Gambar A (Segitiga = 3 sisi, 3 titik); Gambar B (Persegi = 4 sisi, 4 titik); Gambar C (Segilima = 5 sisi, 5 titik); Gambar E (Belah ketupat = 4 sisi, 4 titik). Hanya Gambar D (Segienam = 6 sisi) yang memiliki 4 titik, tidak sama dengan jumlah sisinya.',
          distractorAnalysis: [
            'A salah: 3 sisi = 3 titik (sesuai aturan).',
            'B salah: 4 sisi = 4 titik (sesuai aturan).',
            'C salah: 5 sisi = 5 titik (sesuai aturan).',
            'D benar: 6 sisi namun hanya 4 titik (menyimpang dari aturan).',
            'E salah: Belah ketupat tetap memiliki 4 sisi dan 4 titik (sesuai aturan).',
          ],
          quickTip: 'Selalu hitung jumlah sisi poligon dan bandingkan dengan jumlah titik/garis di sekitarnya!',
        },
      },
    ],
  },
];
