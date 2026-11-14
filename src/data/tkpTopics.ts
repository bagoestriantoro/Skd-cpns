import { TestCategory, TopicContent } from '../types/skd';

export const TKP_TOPICS: TopicContent[] = [
  {
    id: 'tkp-pelayanan-publik',
    category: TestCategory.TKP,
    code: 'TKP 01',
    title: 'Pelayanan Publik',
    subtitle: 'Keramahtamahan, kecepatan, kepastian SOP, dan solusi berorientasi kepuasan masyarakat.',
    kemenpanFocus:
      'Mampu menampilkan perilaku keramahtamahan dalam bekerja yang efektif agar bisa memenuhi kebutuhan dan kepuasan orang lain sesuai tugas dan wewenang yang dimiliki.',
    estimatedMinutes: 12,
    labType: 'tkp-dilemma',
    labTitle: 'Kalibrasi Poin 5 vs Poin 4 Pelayanan Publik',
    labItems: [
      {
        prompt: 'Warga datang 5 menit sebelum loket tutup sambil membawa berkas kurang lengkap dan terlihat panik.',
        hint: 'Cari respons yang paling solutif, ramah, AND tetap patuh pada SOP tanpa melanggar aturan.',
        answer: 'Poin 5: Menyapa ramah, menjelaskan kekurangan berkas dengan jelas, dan memandu cara melengkapinya secara cepat (misal via layanan digital/loket besok).',
        reason: 'Meloloskan berkas tak lengkap melanggar SOP (poin rendah), sedangkan menolak ketus merusak citra pelayanan.',
      },
      {
        prompt: 'Masyarakat marah-marah di ruang tunggu karena antrean sistem sedang lambat.',
        hint: 'Empati + transparansi + solusi alternatif sementara.',
        answer: 'Poin 5: Meminta maaf dengan tenang, menjelaskan kendala teknis secara jujur, dan menawarkan opsi antrean prioritas/notifikasi saat sistem pulih.',
        reason: 'Menenangkan emosi warga sambil memberi kepastian layanan adalah inti pelayanan prima.',
      },
      {
        prompt: 'Warga lanjut usia kesulitan mengisi formulir pendaftaran berbasis aplikasi.',
        hint: 'ASN harus aktif membantu kelompok rentan tanpa mengabaikan antrean lain.',
        answer: 'Poin 5: Membantu memandu pengisian dengan sabar atau mengarahkan ke petugas pendamping khusus kelompok rentan.',
        reason: 'Pelayanan inklusif menempatkan kemudahan akses bagi lansia dan disabilitas sebagai prioritas.',
      },
    ],
    sections: [
      {
        id: 'pel-1',
        heading: 'Rumus Emas Poin 5 pada Aspek Pelayanan Publik',
        summary:
          'Di TKP tidak ada jawaban bernilai 0 (semua opsi bernilai 1 sampai 5). Untuk meraih skor 5 di Pelayanan Publik, Anda harus memilih tindakan yang menggabungkan empat kata kunci: Ramah, Cepat/Tanggap, Solutif, dan Taat SOP.',
        keyPoints: [
          'Berorientasi pada kepuasan penerima layanan tanpa melanggar ketentuan hukum atau SOP.',
          'Mendengarkan keluhan dengan empati, tidak defensif, dan tidak menyalahkan pemohon.',
          'Memberikan kepastian waktu, biaya, dan prosedur secara transparan.',
          'Memprioritaskan pelayanan bagi kelompok rentan (lansia, ibu hamil, penyandang disabilitas) sesuai standar layanan.',
        ],
        commonTrap:
          'Terjebak memilih opsi yang "terlalu baik hati sampai melanggar SOP" (misalnya tetap mencetak dokumen padahal syarat wajib belum ada). Di mata penguji TKP, melanggar SOP tidak pernah mendapat poin 5!',
        quickFormulaOrRule:
          'Formula Poin 5 Pelayanan Publik = Senyum/Empati + Solusi Nyata + Tetap Patuh SOP + Tidak Melempar Tanggung Jawab.',
      },
    ],
    questions: [
      {
        id: 'tkp-pel-q1',
        topicId: 'tkp-pelayanan-publik',
        category: TestCategory.TKP,
        questionText:
          'Anda bertugas di loket pelayanan terpadu. Saat jam istirahat tersisa 5 menit lagi, datang seorang warga dari desa terpencil yang membutuhkan legalisasi dokumen mendesak, namun satu lembar fotokopi KTP-nya tertinggal. Warga tersebut memohon agar berkasnya tetap diproses tanpa lampiran tersebut. Sikap Anda adalah...',
        options: [
          'Menolak langsung dengan tegas karena jam istirahat masih berlangsung dan syaratnya belum lengkap',
          'Menyambutnya dengan ramah, menjelaskan bahwa fotokopi KTP adalah syarat wajib SOP, lalu membantu mencarikan solusi cepat seperti mencetak ulang dari foto KTP digital di ponselnya jika tersedia',
          'Tetap memproses berkasnya tanpa fotokopi KTP karena merasa kasihan ia datang jauh dari desa',
          'Memintanya pulang ke desa untuk mengambil KTP lalu kembali lagi besok pagi',
          'Menyuruhnya menunggu di luar sampai semua petugas selesai istirahat dan meminta rekan lain yang menanganinya',
        ],
        correctIndex: 1,
        optionScores: [2, 5, 1, 3, 4],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) menggabungkan keramahan, kepatuhan SOP, dan solusi praktis di tempat.',
          deepAnalysis:
            'Pelayanan publik prima bukan berarti membuang aturan, melainkan mempermudah warga memenuhi aturan secara sah. Membantu warga memanfaatkan foto/dokumen digital yang ada agar bisa dicetak memenuhi syarat SOP sekaligus menyelamatkan waktu warga.',
          distractorAnalysis: [
            'A (2 poin): Taat aturan tetapi tidak ramah dan tidak menawarkan solusi.',
            'B (5 poin): Ramah, patuh SOP, dan memberikan jalan keluar nyata yang efisien.',
            'C (1 poin): Melanggar SOP administratif dengan memproses berkas tak lengkap.',
            'D (3 poin): Sesuai SOP tetapi kurang empati karena tidak mengecek opsi solusi cepat di tempat.',
            'E (4 poin): Masih bersikap cukup netral namun melempar tanggung jawab ke rekan lain.',
          ],
          quickTip: 'Poin 5 selalu berada pada titik temu: SOP terpenuhi + Warga terbantu dengan cepat.',
        },
      },
      {
        id: 'tkp-pel-q2',
        topicId: 'tkp-pelayanan-publik',
        category: TestCategory.TKP,
        questionText:
          'Seorang warga mendatangi meja pengaduan Anda dengan nada tinggi karena merasa berkas permohonannya sudah seminggu belum selesai, padahal ia salah memasukkan berkas ke loket unit lain. Tindakan pertama yang paling tepat Anda lakukan adalah...',
        options: [
          'Memotong pembicaraannya agar ia sadar bahwa kesalahan ada pada dirinya sendiri yang salah loket',
          'Memintanya membaca kembali papan informasi alur layanan sebelum mengeluh',
          'Mendengarkan keluhannya dengan tenang dan penuh empati, meminta maaf atas ketidaknyamanannya, lalu mengecek posisi berkasnya dan mengantarkan/mengarahkannya langsung ke unit yang tepat',
          'Menjelaskan dengan nada datar bahwa unit Anda tidak berwenang atas berkas tersebut',
          'Memintanya membuat surat pengaduan tertulis terlebih dahulu agar diproses pekan depan',
        ],
        correctIndex: 2,
        optionScores: [1, 2, 5, 3, 4],
        explanation: {
          correctSummary: 'Opsi C (5 Poin) meredam emosi warga dengan empati dan mengambil inisiatif membantu menelusuri berkas.',
          deepAnalysis:
            'Saat menghadapi warga yang emosi, jangan bersikap defensif atau menyalahkan warga di depan umum. ASN berorientasi pelayanan mendengarkan terlebih dahulu, menenangkan situasi, lalu aktif membantu menuntaskan masalah lintas loket.',
          distractorAnalysis: [
            'A (1 poin): Memicu konflik dan tidak mencerminkan keramahan pelayanan.',
            'B (2 poin): Terkesan menyalahkan dan merendahkan pemohon.',
            'C (5 poin): Empati tinggi, komunikasi tenang, dan proaktif menindaklanjuti.',
            'D (3 poin): Benar secara wewenang tetapi dingin dan pasif.',
            'E (4 poin): Terlalu birokratis untuk kasus sederhana yang bisa dicek langsung.',
          ],
          quickTip: 'Jangan pernah pilih opsi yang bernada menyalahkan warga atau "bukan urusan unit saya".',
        },
      },
      {
        id: 'tkp-pel-q3',
        topicId: 'tkp-pelayanan-publik',
        category: TestCategory.TKP,
        questionText:
          'Antrean di ruang pelayanan Anda sangat padat pada Senin pagi. Tiba-tiba seorang ibu hamil tua dan seorang penyandang disabilitas datang mengambil nomor antrean reguler di urutan paling belakang. Kebijakan terbaik sesuai prinsip pelayanan publik adalah...',
        options: [
          'Membiarkan mereka antre sesuai nomor urut agar adil bagi semua pengunjung',
          'Meminta izin kepada antrean di depan lalu langsung mendahulukan mereka di loket khusus/jalur prioritas kelompok rentan sesuai standar layanan',
          'Menyarankan mereka datang kembali di siang hari saat pengunjung mulai sepi',
          'Meminta mereka duduk saja tanpa memberi kepastian kapan akan dipanggil',
          'Menunggu perintah kepala kantor terlebih dahulu sebelum memanggil mereka',
        ],
        correctIndex: 1,
        optionScores: [3, 5, 2, 1, 4],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) menerapkan UU Pelayanan Publik mengenai layanan prioritas bagi kelompok rentan.',
          deepAnalysis:
            'UU No. 25 Tahun 2009 tentang Pelayanan Publik mewajibkan penyelenggara layanan memberikan perlakuan khusus/prioritas kepada kelompok rentan (lansia, ibu hamil, disabilitas). Mengomunikasikannya secara santun kepada pengunjung lain menjaga suasana tetap kondusif.',
          distractorAnalysis: [
            'A (3 poin): Terpaku pada kesamaan prosedur kaku tanpa memperhatikan kelompok rentan.',
            'B (5 poin): Proaktif, inklusif, komunikatif, dan sesuai regulasi layanan prioritas.',
            'C (2 poin): Menyulitkan warga rentan yang sudah hadir di lokasi.',
            'D (1 poin): Mengabaikan kepastian pelayanan.',
            'E (4 poin): Kurang inisiatif cepat pada hal yang sudah menjadi standar pelayanan dasar.',
          ],
          quickTip: 'Kelompok rentan (lansia, disabilitas, ibu hamil) selalu berhak atas jalur prioritas.',
        },
      },
      {
        id: 'tkp-pel-q4',
        topicId: 'tkp-pelayanan-publik',
        category: TestCategory.TKP,
        questionText:
          'Anda menemukan bahwa formulir permohonan daring yang selama ini digunakan warga ternyata sering membingungkan pemohon sehingga banyak berkas ditolak saat verifikasi. Sebagai petugas pelayanan, langkah terbaik Anda adalah...',
        options: [
          'Tetap menggunakan formulir tersebut karena sudah ditetapkan sejak lama',
          'Mengembalikan berkas yang salah terus-menerus tanpa memberi penjelasan bagian mana yang keliru',
          'Menyusun catatan poin yang sering membingungkan warga, membuat panduan pengisian singkat yang mudah dipahami, dan mengusulkan penyederhanaan formulir kepada pimpinan',
          'Mengeluhkan ketidaktelitian warga saat mengisi formulir kepada rekan kerja',
          'Mengisi formulir milik warga satu per satu secara pribadi di luar jam kerja',
        ],
        correctIndex: 2,
        optionScores: [2, 1, 5, 3, 4],
        explanation: {
          correctSummary: 'Opsi C (5 Poin) menunjukkan perbaikan berkelanjutan (continuous improvement) dalam pelayanan publik.',
          deepAnalysis:
            'ASN modern tidak hanya menjalankan rutinitas, melainkan peka memperbaiki akar masalah layanan. Membuat panduan visual/ringkas dan mengusulkan perbaikan sistem formulir akan membantu ribuan warga berikutnya.',
          distractorAnalysis: [
            'A (2 poin): Pasif dan tidak peduli pada hambatan masyarakat.',
            'B (1 poin): Menghambat layanan dan tidak memberi umpan balik konstruktif.',
            'C (5 poin): Solusi jangka pendek (panduan) sekaligus perbaikan sistemik jangka panjang.',
            'D (3 poin): Hanya mengeluh tanpa tindakan nyata.',
            'E (4 poin): Niat baik membantu namun tidak menyelesaikan akar masalah sistem.',
          ],
          quickTip: 'Cari opsi yang memberikan perbaikan sistemik agar pelayanan ke depan makin mudah.',
        },
      },
      {
        id: 'tkp-pel-q5',
        topicId: 'tkp-pelayanan-publik',
        category: TestCategory.TKP,
        questionText:
          'Seorang pemohon merasa sangat puas atas bantuan cepat Anda dalam mengurus dokumen perizinan, lalu ia menyelipkan amplop berisi uang ke dalam map dokumen sebagai "uang rokok". Sikap Anda yang bernilai optimal adalah...',
        options: [
          'Menolaknya dengan halus dan tegas sambil menjelaskan bahwa seluruh layanan instansi gratis sesuai ketentuan, serta tersenyum mengucapkan terima kasih atas apresiasinya',
          'Menerimanya diam-diam agar tidak menyinggung perasaan warga tersebut',
          'Menolaknya dengan wajah marah dan mengusir warga tersebut karena dianggap menyuap',
          'Memintanya memasukkan uang tersebut ke kotak sumbangan masjid kantor saja',
          'Menerimanya lalu membagikannya kepada petugas keamanan dan petugas kebersihan',
        ],
        correctIndex: 0,
        optionScores: [5, 1, 3, 4, 2],
        explanation: {
          correctSummary: 'Opsi A (5 Poin) menolak gratifikasi dengan tegas namun tetap menjaga kesantunan dan keramahan pelayanan.',
          deepAnalysis:
            'Dalam Pelayanan Publik, menolak imbalan ilegal wajib dilakukan dengan komunikasi yang santun (asertif dan ramah), bukan dengan amarah yang mempermalukan warga. Jelaskan secara edukatif bahwa melayani adalah tugas resmi yang bebas pungutan.',
          distractorAnalysis: [
            'A (5 poin): Bersih dari pungli/gratifikasi sekaligus tetap ramah dan edukatif.',
            'B (1 poin): Melanggar integritas pelayanan publik.',
            'C (3 poin): Benar menolak uang, tetapi emosional dan tidak ramah.',
            'D (4 poin): Lebih baik daripada menerima sendiri, namun lebih tepat menolak sepenuhnya agar tidak salah tafsir.',
            'E (2 poin): Tetap tergolong menerima pemberian terkait pelayanan.',
          ],
          quickTip: 'Menolak imbalan di TKP Pelayanan Publik: Tolak Tegas + Santun + Edukasi bahwa layanan gratis/sesuai tarif resmi.',
        },
      },
    ],
  },
  {
    id: 'tkp-jejaring-kerja',
    category: TestCategory.TKP,
    code: 'TKP 02',
    title: 'Jejaring Kerja',
    subtitle: 'Kolaborasi lintas tim, keterbukaan berbagi informasi, membangun relasi produktif, dan sinergi tujuan.',
    kemenpanFocus:
      'Mampu membangun dan membina hubungan, bekerja sama, berbagi informasi, dan berkolaborasi dengan orang lain secara efektif.',
    estimatedMinutes: 10,
    labType: 'tkp-dilemma',
    labTitle: 'Radar Kolaborasi & Sinergi Lintas Unit',
    labItems: [
      {
        prompt: 'Rekan dari bidang lain meminta data pendukung untuk rapat penting, padahal tugas Anda sendiri juga cukup padat.',
        hint: 'Jejaring kerja menghargai dukungan timbal balik dan kelancaran organisasi.',
        answer: 'Poin 5: Segera berbagi data sesuai wewenang/prosedur atau menjadwalkan pengiriman cepat agar pekerjaan lintas bidang berjalan lancar.',
        reason: 'Silo mentality (ego sektoral) merusak kinerja organisasi.',
      },
      {
        prompt: 'Anda ditugaskan dalam tim proyek bersama rekan baru yang belum memahami alur kerja instansi.',
        hint: 'Berbagi ilmu secara terbuka mempercepat pencapaian target tim.',
        answer: 'Poin 5: Mengajak berdiskusi hangat, membimbing alur kerja dengan sabar, dan membagi peran sesuai kekuatan masing-masing.',
        reason: 'Kolaborasi efektif dibangun melalui komunikasi terbuka dan saling memberdayakan.',
      },
      {
        prompt: 'Terjadi perbedaan metode kerja antara tim Anda dan tim mitra eksternal.',
        hint: 'Cari titik temu tujuan bersama melalui dialog konstruktif.',
        answer: 'Poin 5: Mengajak duduk bersama untuk menyamakan persepsi tujuan dan menyepakati standar kerja kolaboratif.',
        reason: 'Menang-menang (win-win collaboration) lebih unggul daripada memaksakan cara sendiri.',
      },
    ],
    sections: [
      {
        id: 'jej-1',
        heading: 'Prinsip Utama Jejaring Kerja (Kolaboratif & Sinergis)',
        summary:
          'Soal Jejaring Kerja menilai sejauh mana Anda mampu bekerja lintas sekat (menghindari ego sektoral), membangun komunikasi yang hangat, dan berbagi pengetahuan demi tujuan organisasi.',
        keyPoints: [
          'Membuka diri terhadap kenalan, mitra kerja, maupun tim lintas divisi.',
          'Proaktif berbagi informasi/pengetahuan yang relevan selama tidak melanggar kerahasiaan data negara.',
          'Mengedepankan dialog dan koordinasi ketika muncul miskomunikasi antartim.',
          'Menghargai kontribusi setiap anggota tim tanpa memandang senioritas.',
        ],
        commonTrap:
          'Memilih sikap individualistis ("yang penting tugas saya beres, urusan divisi lain bukan tanggung jawab saya"). Sikap ini disebut silo mentality dan selalu mendapat poin rendah di TKP Jejaring Kerja.',
        quickFormulaOrRule:
          'Formula Poin 5 Jejaring Kerja = Terbuka + Aktif Koordinasi + Berbagi Info + Membangun Relasi Saling Menguatkan.',
      },
    ],
    questions: [
      {
        id: 'tkp-jej-q1',
        topicId: 'tkp-jejaring-kerja',
        category: TestCategory.TKP,
        questionText:
          'Anda baru saja dimutasi ke unit kerja baru yang sedang menyiapkan program besar lintas instansi. Sebagai pegawai baru di unit tersebut, langkah paling efektif untuk membangun jejaring kerja adalah...',
        options: [
          'Menunggu rekan-rekan senior menyapa dan mengajak Anda terlibat terlebih dahulu',
          'Fokus bekerja sendiri di meja agar langsung terlihat pintar tanpa banyak bertanya',
          'Memperkenalkan diri secara ramah kepada rekan dan mitra kerja, mempelajari alur koordinasi, serta aktif menawarkan dukungan sesuai kompetensi Anda',
          'Hanya berteman dengan sesama pegawai baru atau yang berasal dari daerah yang sama',
          'Langsung mengkritik pola komunikasi tim lama yang menurut Anda kurang efisien',
        ],
        correctIndex: 2,
        optionScores: [3, 2, 5, 1, 4],
        explanation: {
          correctSummary: 'Opsi C (5 Poin) menunjukkan inisiatif hangat, adaptif, dan kolaboratif sejak hari pertama.',
          deepAnalysis:
            'Membangun jejaring kerja menuntut inisiatif untuk membuka komunikasi, menghargai ekosistem yang sudah berjalan, dan proaktif menawarkan kontribusi nyata kepada tim.',
          distractorAnalysis: [
            'A (3 poin): Terlalu pasif untuk membangun jejaring.',
            'B (2 poin): Individualistis dan mengabaikan kerja sama tim.',
            'C (5 poin): Proaktif, ramah, rendah hati mempelajari alur, dan siap berkontribusi.',
            'D (1 poin): Membentuk klik eksklusif yang menghambat kolaborasi luas.',
            'E (4 poin): Berinisiatif memberi masukan memang baik tetapi langsung mengkritik di awal tanpa memahami konteks berisiko memicu resistensi.',
          ],
          quickTip: 'Dalam Jejaring Kerja, selalu pilih aksi yang proaktif membuka komunikasi lintas batas.',
        },
      },
      {
        id: 'tkp-jej-q2',
        topicId: 'tkp-jejaring-kerja',
        category: TestCategory.TKP,
        questionText:
          'Divisi Perencanaan meminta data rekapitulasi kegiatan dari divisi Anda untuk menyusun laporan tahunan instansi. Namun, data tersebut bersifat terbuka untuk internal dan saat ini Anda juga sedang mengerjakan laporan bulanan. Sikap Anda adalah...',
        options: [
          'Menolak memberikannya karena itu bukan tugas utama Anda dan menyuruh mereka mencari sendiri',
          'Memberikan data mentah seadanya meskipun berantakan agar cepat selesai',
          'Berkoordinasi baik, menyampaikan estimasi waktu, lalu segera menyiapkan dan membagikan data yang rapi agar laporan tahunan instansi berjalan tepat waktu',
          'Menunda pengiriman data hingga bulan depan setelah semua pekerjaan Anda benar-benar kosong',
          'Meminta imbalan bantuan mengerjakan laporan Anda terlebih dahulu sebelum mengirim data',
        ],
        correctIndex: 2,
        optionScores: [1, 3, 5, 2, 4],
        explanation: {
          correctSummary: 'Opsi C (5 Poin) menunjukkan kolaborasi lintas divisi yang komunikatif dan berorientasi tujuan organisasi.',
          deepAnalysis:
            'Keberhasilan organisasi adalah kerja kolektif. Mengelola ekspektasi waktu secara komunikatif lalu mengirimkan data akurat mendukung kinerja divisi lain tanpa mengabaikan tugas sendiri.',
          distractorAnalysis: [
            'A (1 poin): Ego sektoral tinggi, menghambat kerja organisasi.',
            'B (3 poin): Mau membantu tapi kurang menjaga kualitas kerja sama.',
            'C (5 poin): Komunikatif, kolaboratif, dan menjaga kualitas hasil.',
            'D (2 poin): Mengorbankan tenggat waktu lintas unit.',
            'E (4 poin): Bersedia bekerja sama namun cenderung transaksional (lebih rendah dari ikhlas berkolaborasi).',
          ],
          quickTip: 'Hindari ego sektoral dan sikap transaksional dalam kerja sama antardivisi.',
        },
      },
      {
        id: 'tkp-jej-q3',
        topicId: 'tkp-jejaring-kerja',
        category: TestCategory.TKP,
        questionText:
          'Saat mengerjakan proyek bersama dengan pihak eksternal (perguruan tinggi dan komunitas lokal), terjadi perbedaan pendapat tajam mengenai metode pelaksanaan kegiatan di lapangan. Sebagai koordinator dari instansi, sikap Anda adalah...',
        options: [
          'Memutuskan sepihak menggunakan metode instansi karena pemerintah adalah penyandang dana',
          'Menggelar pertemuan koordinasi terbuka untuk mendengarkan pertimbangan semua pihak, lalu merumuskan jalan tengah yang paling efektif bagi keberhasilan program',
          'Menyerahkan seluruh keputusan kepada komunitas agar instansi tidak repot',
          'Menghentikan kerja sama sementara hingga mitra mau mengikuti seluruh keinginan Anda',
          'Memilih diam selama rapat agar konflik tidak membesar',
        ],
        correctIndex: 1,
        optionScores: [2, 5, 3, 1, 4],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) mengedepankan dialog setara dan kolaborasi win-win dengan mitra jejaring.',
          deepAnalysis:
            'Jejaring kerja lintas sektor (pentahelix/pemerintah-akademisi-komunitas) bertumpu pada kesetaraan dan musyawarah mencari solusi terbaik, bukan dominasi sepihak.',
          distractorAnalysis: [
            'A (2 poin): Otoriter dan merusak kemitraan jangka panjang.',
            'B (5 poin): Inklusif, komunikatif, dan fokus pada efektivitas program bersama.',
            'C (3 poin): Lepas tangan dari peran koordinasi.',
            'D (1 poin): Memutus jejaring secara emosional.',
            'E (4 poin): Menghindari konflik tapi tidak menyelesaikan kebuntuan koordinasi.',
          ],
          quickTip: 'Konflik kemitraan diselesaikan lewat dialog kolaboratif, bukan otoritas sepihak.',
        },
      },
      {
        id: 'tkp-jej-q4',
        topicId: 'tkp-jejaring-kerja',
        category: TestCategory.TKP,
        questionText:
          'Anda baru mengikuti pelatihan nasional tentang metode analisis kebijakan terbaru yang sangat bermanfaat bagi peningkatan kinerja unit. Setelah kembali ke kantor, tindakan terbaik Anda adalah...',
        options: [
          'Menyimpan modul materi untuk diri sendiri agar menjadi keunggulan pribadi saat penilaian kinerja',
          'Mengajak rekan satu unit dalam forum berbagi pengetahuan (sharing session) dan membagikan ringkasan materi agar seluruh tim meningkat kemampuannya',
          'Membagikan materi hanya jika diminta secara resmi oleh kepala bidang',
          'Menceritakan pengalaman perjalanan dinasnya saja tanpa membahas substansi materi',
          'Menjual ringkasan materi tersebut kepada rekan kerja dari instansi lain',
        ],
        correctIndex: 1,
        optionScores: [1, 5, 4, 3, 2],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) mengamalkan budaya knowledge sharing untuk memperkuat kapasitas tim.',
          deepAnalysis:
            'Salah satu indikator utama Jejaring Kerja KemenPAN-RB adalah kemauan berbagi informasi dan pengetahuan secara efektif agar seluruh rekan kerja tumbuh bersama.',
          distractorAnalysis: [
            'A (1 poin): Menimbun pengetahuan (knowledge hoarding), bertentangan dengan semangat kolaborasi.',
            'B (5 poin): Proaktif berbagi ilmu demi kemajuan kolektif tim.',
            'C (4 poin): Bersedia berbagi tetapi masih pasif menunggu instruksi.',
            'D (3 poin): Tidak memberikan nilai tambah keilmuan bagi tim.',
            'E (2 poin): Mengkomersialkan hasil pelatihan yang dibiayai negara.',
          ],
          quickTip: 'Pengetahuan yang didapat dari tugas kedinasan harus dibagikan (knowledge sharing) untuk kemajuan tim.',
        },
      },
      {
        id: 'tkp-jej-q5',
        topicId: 'tkp-jejaring-kerja',
        category: TestCategory.TKP,
        questionText:
          'Dalam grup kerja proyek, seorang rekan sering terlambat merespons pesan koordinasi sehingga jadwal tim ikut tertunda. Cara Anda menyikapinya agar hubungan kerja tetap harmonis namun target tercapai adalah...',
        options: [
          'Menyindirnya secara terbuka di grup proyek agar ia merasa malu dan berubah',
          'Menghubunginya secara pribadi dengan nada santun untuk menanyakan kendala yang ia hadapi, lalu menyepakati jadwal komunikasi dan pengingat bersama tim',
          'Melaporkannya langsung ke pimpinan untuk segera dikeluarkan dari tim tanpa berbicara dengannya dulu',
          'Mengambil alih semua pekerjaannya tanpa berkomunikasi lagi dengannya',
          'Membiarkan saja keterlambatannya dan ikut menunda pekerjaan Anda sendiri',
        ],
        correctIndex: 1,
        optionScores: [2, 5, 3, 4, 1],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) menggunakan komunikasi personal yang empatik dan membangun kesepakatan kerja tim.',
          deepAnalysis:
            'Menjaga jejaring kerja yang sehat berarti menyelesaikan masalah komunikasi secara elegan—menegur atau mencari tahu kendala secara pribadi (bukan mempermalukan di forum umum) serta menciptakan mekanisme koordinasi yang disepakati bersama.',
          distractorAnalysis: [
            'A (2 poin): Merusak psikologis dan keharmonisan hubungan kerja.',
            'B (5 poin): Empatik, menjaga martabat rekan, dan solutif menjaga jadwal tim.',
            'C (3 poin): Terlalu cepat eskalasi tanpa komunikasi persuasif awal.',
            'D (4 poin): Bertanggung jawab pada target, tetapi memutus komunikasi kolaboratif dengan rekan.',
            'E (1 poin): Apatis dan merusak target organisasi.',
          ],
          quickTip: 'Peringatkan secara pribadi, apresiasi di depan umum, dan bangun kesepakatan tim.',
        },
      },
    ],
  },
  {
    id: 'tkp-sosial-budaya',
    category: TestCategory.TKP,
    code: 'TKP 03',
    title: 'Sosial Budaya',
    subtitle: 'Adaptasi di masyarakat majemuk, penghormatan adat dan keberagaman tanpa mengorbankan integritas.',
    kemenpanFocus:
      'Mampu beradaptasi dan bekerja secara efektif dalam masyarakat majemuk, terdiri atas beragam agama, suku, budaya, dan sebagainya.',
    estimatedMinutes: 10,
    labType: 'tkp-dilemma',
    labTitle: 'Kompas Adaptasi Budaya ASN Nusantara',
    labItems: [
      {
        prompt: 'Ditempatkan di daerah baru dengan bahasa dan tata krama adat yang jauh berbeda dari daerah asal Anda.',
        hint: 'Kunci sosial budaya: belajar, menghormati, dan berbaur tanpa menghilangkan netralitas.',
        answer: 'Poin 5: Antusias mempelajari bahasa/adat setempat dan membangun hubungan hangat dengan tokoh masyarakat serta rekan lokal.',
        reason: 'ASN adalah perekat dan pemersatu bangsa di mana pun ditempatkan.',
      },
      {
        prompt: 'Rekan sekantor mengadakan acara adat atau hari besar keagamaan yang berbeda dengan keyakinan Anda.',
        hint: 'Tunjukkan penghormatan tulus sesuai batas keyakinan masing-masing.',
        answer: 'Poin 5: Memberikan ucapan selamat dengan tulus, menghormati pelaksanaan acara, dan menjaga suasana kerja tetap nyaman bagi mereka.',
        reason: 'Toleransi aktif memperkuat harmoni lingkungan kerja.',
      },
      {
        prompt: 'Warga di daerah penugasan terbiasa memberikan hasil bumi sebagai tanda hormat adat kepada pejabat baru.',
        hint: 'Hati-hati! Hormati niat baik adat tetapi tetap jaga aturan anti-gratifikasi.',
        answer: 'Poin 5: Menghargai kehangatan budaya mereka dengan santun sambil menjelaskan aturan integritas ASN agar hubungan sosial tetap terjaga tanpa melanggar hukum.',
        reason: 'Sosial budaya tidak boleh mengalahkan integritas hukum, namun penolakannya harus penuh kearifan lokal.',
      },
    ],
    sections: [
      {
        id: 'sos-1',
        heading: 'ASN sebagai Perekat Bangsa di Tengah Kemajemukan',
        summary:
          'Indonesia terdiri dari ribuan pulau, ratusan suku bangsa, bahasa, dan beragam agama. Soal TKP Sosial Budaya menguji kemampuan Anda beradaptasi cepat saat ditempatkan di daerah baru maupun bekerja dalam tim yang beragam.',
        keyPoints: [
          'Bersikap inklusif, tidak eksklusif berkumpul hanya dengan rekan sesuku/seagama.',
          'Menghormati kearifan lokal dan tata krama masyarakat setempat selama tidak bertentangan dengan hukum dan Pancasila.',
          'Mampu menyesuaikan gaya komunikasi agar mudah dipahami masyarakat lintas generasi dan latar belakang budaya.',
          'Menjadi penengah yang adil ketika muncul gesekan bernuansa perbedaan kebiasaan budaya di kantor.',
        ],
        commonTrap:
          'Terjebak bersikap etnosentris (membanding-bandingkan budaya daerah asal lebih maju daripada daerah penempatan) atau sebaliknya, pasif menarik diri karena takut salah bersosialisasi.',
        quickFormulaOrRule:
          'Formula Poin 5 Sosial Budaya = Terbuka Belajar Budaya Lokal + Toleran + Tidak Diskriminatif + Tetap Netral.',
      },
    ],
    questions: [
      {
        id: 'tkp-sos-q1',
        topicId: 'tkp-sosial-budaya',
        category: TestCategory.TKP,
        questionText:
          'Anda dinyatakan lulus CPNS dan ditempatkan di kabupaten terpencil yang mayoritas penduduknya memiliki budaya, dialek bahasa, serta kebiasaan sosial yang sangat berbeda dengan daerah asal Anda. Langkah adaptasi paling tepat yang Anda lakukan adalah...',
        options: [
          'Meminta mutasi kembali ke daerah asal setelah masa percobaan selesai karena sulit menyesuaikan diri',
          'Hanya bergaul dengan sesama perantau agar merasa aman dan nyaman',
          'Berusaha mempelajari bahasa serta adat istiadat setempat dengan rendah hati, menyapa tetangga, dan aktif berbaur dalam kegiatan sosial masyarakat',
          'Menuntut masyarakat sekitar menyesuaikan cara berbicara mereka dengan gaya kota asal Anda',
          'Menyelesaikan pekerjaan kantor seperlunya lalu langsung pulang menutup diri di rumah dinas',
        ],
        correctIndex: 2,
        optionScores: [1, 2, 5, 3, 4],
        explanation: {
          correctSummary: 'Opsi C (5 Poin) mencerminkan adaptabilitas tinggi dan penghargaan terhadap kearifan lokal.',
          deepAnalysis:
            'Pegawai ASN siap ditempatkan di seluruh wilayah NKRI. Sikap terbuka mempelajari budaya dan bahasa setempat memudahkan komunikasi pelayanan publik sekaligus membangun kepercayaan masyarakat.',
          distractorAnalysis: [
            'A (1 poin): Tidak berkomitmen mengabdi dan gagal beradaptasi.',
            'B (2 poin): Bersikap eksklusif di lingkungan majemuk.',
            'C (5 poin): Proaktif berbaur, menghargai adat, dan rendah hati belajar.',
            'D (3 poin): Memaksakan standar pribadi kepada masyarakat setempat.',
            'E (4 poin): Masih menjalankan tugas tetapi kurang membaur dengan lingkungan sosial.',
          ],
          quickTip: 'Di mana bumi dipijak, di situ langit dijunjung—pelajari budaya setempat secara aktif!',
        },
      },
      {
        id: 'tkp-sos-q2',
        topicId: 'tkp-sosial-budaya',
        category: TestCategory.TKP,
        questionText:
          'Di ruang kerja Anda, terjadi perdebatan kecil karena seorang rekan membawa makanan khas daerahnya yang beraroma sangat tajam ke ruang ber-AC sehingga mengganggu kenyamanan beberapa rekan dari budaya lain. Sebagai rekan kerja yang bijak, Anda...',
        options: [
          'Ikut memarahi rekan tersebut agar tidak pernah lagi membawa makanan daerahnya ke kantor',
          'Membiarkan pertengkaran berlanjut karena bukan urusan Anda',
          'Menengahi dengan santun, menghargai kuliner khasnya, lalu mengusulkan kesepakatan bersama untuk menikmati makanan beraroma tajam di ruang makan/pantry kantor',
          'Melarang seluruh pegawai membawa bekal makanan daerah ke kantor sama sekali',
          'Mendukung rekan yang merasa terganggu secara diam-diam di belakang',
        ],
        correctIndex: 2,
        optionScores: [1, 2, 5, 3, 4],
        explanation: {
          correctSummary: 'Opsi C (5 Poin) menjaga keharmonisan lintas budaya dengan solusi ruang bersama yang saling menghormati.',
          deepAnalysis:
            'Masalah kebiasaan budaya di ruang kerja bersama diselesaikan bukan dengan penghinaan atau pelarangan total, melainkan pengaturan etika ruang bersama (pantry) agar semua tetap merasa dihargai sekaligus nyaman.',
          distractorAnalysis: [
            'A (1 poin): Memperkeruh konflik dan tidak menghargai budaya rekan.',
            'B (2 poin): Membiarkan perpecahan di tim.',
            'C (5 poin): Adil, empatik, menghormati keberagaman, dan menghasilkan aturan bersama yang praktis.',
            'D (3 poin): Terlalu kaku dan berlebihan melarang semua bekal.',
            'E (4 poin): Tidak memperkeruh secara terbuka namun gagal menyelesaikan masalah.',
          ],
          quickTip: 'Cari solusi jalan tengah yang tetap menghargai budaya individu sekaligus menjaga kenyamanan kolektif.',
        },
      },
      {
        id: 'tkp-sos-q3',
        topicId: 'tkp-sosial-budaya',
        category: TestCategory.TKP,
        questionText:
          'Saat menyusun jadwal kegiatan sosialisasi program pemerintah di suatu wilayah, Anda mengetahui bahwa tanggal yang direncanakan bertepatan dengan hari raya keagamaan besar sebagian warga setempat. Tindakan Anda sebagai panitia adalah...',
        options: [
          'Tetap melaksanakan acara di tanggal itu karena jadwal kantor tidak boleh berubah oleh urusan agama warga',
          'Mengusulkan penyesuaian jadwal ke hari lain agar seluruh lapisan masyarakat dapat berpartisipasi tanpa terganggu ibadah hari rayanya',
          'Tetap mengadakan acara dan hanya mengundang warga yang tidak merayakan hari raya tersebut',
          'Membatalkan program sosialisasi di wilayah tersebut secara permanen',
          'Menjalankan acara secara singkat tanpa memberitahukan tokoh masyarakat setempat',
        ],
        correctIndex: 1,
        optionScores: [2, 5, 3, 1, 4],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) menunjukkan kepekaan sosial-keagamaan dan menjamin inklusivitas partisipasi publik.',
          deepAnalysis:
            'Penjadwalan program publik harus sensitif terhadap kalender keagamaan dan adat masyarakat agar tidak eksklusif dan seluruh warga merasa dihormati negara.',
          distractorAnalysis: [
            'A (2 poin): Tidak peka terhadap keberagaman beragama masyarakat.',
            'B (5 poin): Menghormati hak ibadah sekaligus memastikan program menjangkau semua warga.',
            'C (3 poin): Menciptakan eksklusivitas dan ketimpangan akses informasi publik.',
            'D (1 poin): Mengorbankan hak warga atas program pemerintah.',
            'E (4 poin): Kurang koordinasi dengan tokoh lokal.',
          ],
          quickTip: 'Peka terhadap hari besar keagamaan & adat lokal = kunci efektivitas program di masyarakat majemuk.',
        },
      },
      {
        id: 'tkp-sos-q4',
        topicId: 'tkp-sosial-budaya',
        category: TestCategory.TKP,
        questionText:
          'Di kantor Anda terdapat pegawai penyandang disabilitas tunanetra yang baru bergabung dalam tim administrasi. Sikap sosial budaya yang paling tepat Anda tunjukkan adalah...',
        options: [
          'Memperlakukannya dengan rasa kasihan berlebihan dan melarangnya mengerjakan tugas apa pun',
          'Menghindar berkomunikasi dengannya karena khawatir salah bicara',
          'Memperlakukannya secara setara dan ramah, menanyakan bentuk dukungan aksesibilitas yang ia butuhkan saat bekerja, serta berkolaborasi secara profesional',
          'Memintanya dipindahkan ke bagian lain agar tidak memperlambat kerja tim',
          'Menyerahkan seluruh tanggung jawab pendampingan hanya kepada petugas HRD',
        ],
        correctIndex: 2,
        optionScores: [3, 2, 5, 1, 4],
        explanation: {
          correctSummary: 'Opsi C (5 Poin) mengedepankan kesetaraan martabat, inklusi, dan kolaborasi tanpa diskriminasi.',
          deepAnalysis:
            'Rekan penyandang disabilitas membutuhkan lingkungan kerja yang inklusif dan setara, bukan belas kasihan yang meremehkan kapasitas profesional mereka. Menanyakan langsung kebutuhan aksesibilitas adalah bentuk penghormatan terbaik.',
          distractorAnalysis: [
            'A (3 poin): Niat baik tapi justru menghilangkan peran dan kemandiriannya.',
            'B (2 poin): Mengisolasi rekan kerja.',
            'C (5 poin): Setara, suportif, komunikatif, dan inklusif.',
            'D (1 poin): Sikap diskriminatif yang bertentangan dengan UU Disabilitas dan nilai ASN.',
            'E (4 poin): Tidak mendiskriminasi namun kurang proaktif membangun lingkungan tim yang ramah.',
          ],
          quickTip: 'Inklusi disabilitas = Setara + Profesional + Sediakan aksesibilitas sesuai kebutuhan.',
        },
      },
      {
        id: 'tkp-sos-q5',
        topicId: 'tkp-sosial-budaya',
        category: TestCategory.TKP,
        questionText:
          'Dalam kegiatan rapat warga desa binaan, tokoh adat setempat menyampaikan masukan dengan gaya bahasa daerah yang panjang dan penuh kiasan, berbeda dari gaya presentasi teknis Anda. Sikap terbaik Anda adalah...',
        options: [
          'Memotong pembicaraannya dan memintanya langsung ke poin inti dengan bahasa Indonesia singkat',
          'Menyimak dengan penuh rasa hormat hingga selesai, mencatat pesan intinya, lalu merespons secara santun dengan bahasa yang mudah dipahami warga',
          'Bermain ponsel selama tokoh adat berbicara karena merasa kurang relevan',
          'Mengabaikan masukannya karena tidak disampaikan secara tertulis dalam proposal teknis',
          'Menertawakan gaya kiasan tersebut bersama tim kantor setelah rapat selesai',
        ],
        correctIndex: 1,
        optionScores: [2, 5, 1, 3, 4],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) menunjukkan kesabaran komunikasi lintas budaya dan penghormatan terhadap tokoh masyarakat.',
          deepAnalysis:
            'Keberhasilan ASN di lapangan sangat ditentukan oleh kemampuan menangkap esensi aspirasi warga dalam berbagai gaya komunikasi kultural tanpa bersikap arogan.',
          distractorAnalysis: [
            'A (2 poin): Tidak sopan dan merusak kepercayaan tokoh masyarakat.',
            'B (5 poin): Menghormati budaya tutur lokal dan menjembatani komunikasi teknis secara santun.',
            'C (1 poin): Tidak menghargai forum dan masyarakat.',
            'D (3 poin): Terlalu kaku pada formalitas administratif.',
            'E (4 poin): Tidak menyinggung di depan umum tetapi tetap kurang menghargai di belakang.',
          ],
          quickTip: 'Dengarkan penuh hormat + terjemahkan pesan inti secara inklusif.',
        },
      },
    ],
  },
  {
    id: 'tkp-tik',
    category: TestCategory.TKP,
    code: 'TKP 04',
    title: 'Teknologi Informasi & Komunikasi',
    subtitle: 'Adaptasi digital birokrasi (SPBE), efisiensi kerja dengan teknologi, keamanan siber, dan etika digital.',
    kemenpanFocus:
      'Mampu memanfaatkan teknologi informasi secara efektif untuk meningkatkan kinerja.',
    estimatedMinutes: 10,
    labType: 'tkp-dilemma',
    labTitle: 'Uji Kesiapan Transformasi Digital ASN (SPBE)',
    labItems: [
      {
        prompt: 'Instansi meluncurkan aplikasi tata naskah elektronik baru menggantikan surat kertas manual, namun banyak pegawai senior kebingungan.',
        hint: 'Adaptif + membantu rekan tim menguasai teknologi.',
        answer: 'Poin 5: Segera mempelajari aplikasi hingga mahir, menggunakannya penuh, dan membantu memandu rekan senior dengan sabar.',
        reason: 'Teknologi baru hanya efektif jika diadopsi bersama oleh seluruh tim.',
      },
      {
        prompt: 'Menerima tautan mencurigakan melalui email dinas yang meminta login akun kepegawaian.',
        hint: 'Waspada phishing dan lindungi keamanan data instansi.',
        answer: 'Poin 5: Tidak mengklik tautan, memverifikasi ke unit TI resmi, dan mengingatkan rekan lain agar waspada.',
        reason: 'Keamanan siber adalah tanggung jawab setiap pengguna sistem pemerintahan.',
      },
      {
        prompt: 'Menemukan pekerjaan rekap data bulanan yang biasanya memakan waktu 3 hari secara manual.',
        hint: 'Manfaatkan otomasi/formula spreadsheet atau sistem informasi.',
        answer: 'Poin 5: Menginisiasi template otomatis/aplikasi kolaboratif yang aman agar waktu kerja lebih efisien dan minim human error.',
        reason: 'Inovasi digital terukur adalah ciri poin 5 pada aspek TIK.',
      },
    ],
    sections: [
      {
        id: 'tik-1',
        heading: 'Kunci Poin 5 Aspek Teknologi Informasi & Komunikasi (TIK)',
        summary:
          'Pemerintah terus mendorong Sistem Pemerintahan Berbasis Elektronik (SPBE). Soal TKP TIK mengukur kemauan belajar teknologi baru, inisiatif digitalisasi kerja, serta kesadaran keamanan data dan etika bermedia sosial.',
        keyPoints: [
          'Antusias mempelajari sistem/aplikasi baru dan tidak alergi perubahan digital.',
          'Memanfaatkan teknologi untuk mempercepat layanan dan mengurangi kesalahan manual.',
          'Menjaga kerahasiaan kata sandi, data pribadi warga, dan dokumen negara saat memakai perangkat digital/cloud.',
          'Mengajak dan mengajari rekan kerja yang gagap teknologi secara kolaboratif.',
        ],
        commonTrap:
          'Menggunakan aplikasi pribadi tidak resmi atau membocorkan dokumen rahasia kantor ke grup chat publik hanya demi alasan "biar cepat". Kecepatan teknologi harus selalu diiringi keamanan data!',
        quickFormulaOrRule:
          'Formula Poin 5 TIK = Adaptif Teknologi Baru + Tingkatkan Efisiensi + Jaga Keamanan Data + Bantu Rekan Belajar.',
      },
    ],
    questions: [
      {
        id: 'tkp-tik-q1',
        topicId: 'tkp-tik',
        category: TestCategory.TKP,
        questionText:
          'Instansi tempat Anda bekerja mewajibkan peralihan sistem absensi dan pengarsipan dari buku manual ke aplikasi berbasis cloud mulai minggu depan. Beberapa rekan kerja senior mengeluh kesulitan mengoperasikan aplikasi tersebut. Sikap Anda adalah...',
        options: [
          'Menyarankan pimpinan membatalkan sistem baru karena merepotkan pegawai senior',
          'Fokus mengurus akun pribadi saja karena setiap pegawai seharusnya belajar masing-masing',
          'Mempelajari seluruh fitur aplikasi hingga lancar, lalu membuat panduan ringkas bergambar dan meluangkan waktu mendampingi rekan senior berlatih',
          'Membantu mengisikan arsip rekan senior selamanya agar mereka tidak perlu menyentuh aplikasi',
          'Tetap menggunakan sistem manual sambil menunggu seluruh rekan senior mahir lebih dulu',
        ],
        correctIndex: 2,
        optionScores: [1, 3, 5, 4, 2],
        explanation: {
          correctSummary: 'Opsi C (5 Poin) menggabungkan adopsi cepat teknologi baru dan pemberdayaan rekan kerja.',
          deepAnalysis:
            'Transformasi digital di instansi sering terhambat kesenjangan kemampuan antarpegawai. Membuat panduan praktis dan mendampingi rekan agar mandiri menggunakan sistem adalah tindakan paling berdampak.',
          distractorAnalysis: [
            'A (1 poin): Menolak kemajuan teknologi dan menghambat kebijakan instansi.',
            'B (3 poin): Adaptif secara individu tetapi kurang peduli keberhasilan tim.',
            'C (5 poin): Cepat beradaptasi sekaligus memberdayakan rekan senior secara berkelanjutan.',
            'D (4 poin): Membantu tetapi membuat rekan bergantung dan tidak belajar sistem.',
            'E (2 poin): Menunda kepatuhan terhadap sistem resmi instansi.',
          ],
          quickTip: 'Poin 5 TIK saat ada sistem baru = Pelajari cepat + Gunakan + Ajari rekan agar mandiri.',
        },
      },
      {
        id: 'tkp-tik-q2',
        topicId: 'tkp-tik',
        category: TestCategory.TKP,
        questionText:
          'Saat sedang mengerjakan data sensitif kependudukan, Anda menerima pesan di aplikasi percakapan yang mengatasnamakan admin pusat dan meminta Anda mengirimkan nama pengguna serta kata sandi sistem melalui tautan tertentu untuk "pembaruan keamanan mendadak". Tindakan Anda adalah...',
        options: [
          'Segera mengisi data login pada tautan tersebut agar akun tidak terblokir',
          'Mengabaikan pesan itu tanpa melaporkannya ke siapa pun',
          'Tidak mengisi atau mengklik tautan tersebut, segera melaporkannya ke unit TI/keamanan siber resmi instansi, dan memperingatkan rekan kerja agar waspada phishing',
          'Mengirimkan kata sandi sementara saja sambil mencoba tautannya terlebih dahulu',
          'Meneruskan tautan tersebut ke grup kantor untuk menanyakan apakah ada yang sudah mencobanya',
        ],
        correctIndex: 2,
        optionScores: [1, 3, 5, 2, 4],
        explanation: {
          correctSummary: 'Opsi C (5 Poin) menerapkan protokol keamanan siber (anti-phishing) secara tepat dan proaktif.',
          deepAnalysis:
            'Admin TI resmi tidak pernah meminta kata sandi pengguna melalui tautan eksternal. Melindungi kredensial pribadi dan melapor ke tim keamanan siber mencegah kebocoran data negara skala besar.',
          distractorAnalysis: [
            'A (1 poin): Fatal karena menyerahkan kredensial instansi ke peretas.',
            'B (3 poin): Aman untuk diri sendiri tetapi rekan lain berisiko tertipu.',
            'C (5 poin): Lindungi akun, verifikasi/lapor tim TI resmi, dan edukasi rekan.',
            'D (2 poin): Tetap berbahaya mengklik tautan phishing.',
            'E (4 poin): Menyebarkan tautan berbahaya ke grup berisiko memancing rekan lain mengkliknya.',
          ],
          quickTip: 'Jangan pernah klik/sebar tautan mencurigakan; lapor ke tim TI resmi dan ingatkan tim!',
        },
      },
      {
        id: 'tkp-tik-q3',
        topicId: 'tkp-tik',
        category: TestCategory.TKP,
        questionText:
          'Anda melihat proses pengumpulan laporan mingguan dari 12 kecamatan masih dilakukan dengan mengirim file terpisah lewat email lalu disalin ulang secara manual ke satu tabel utama sehingga sering terjadi salah ketik. Inovasi TIK paling tepat yang dapat Anda usulkan adalah...',
        options: [
          'Meminta setiap kecamatan mencetak laporan dan mengirimkannya lewat kurir agar lebih mudah dicek',
          'Merancang formulir/spreadsheet kolaboratif daring resmi instansi dengan validasi data otomatis dan hak akses terbatas sesuai kewenangan kecamatan',
          'Menambah jumlah pegawai lembur khusus untuk menyalin ulang data setiap Jumat sore',
          'Membiarkan pola lama berjalan karena sudah menjadi kebiasaan bertahun-tahun',
          'Menggunakan grup media sosial publik untuk menempelkan seluruh data warga dari 12 kecamatan',
        ],
        correctIndex: 1,
        optionScores: [2, 5, 3, 1, 4],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) memanfaatkan alat digital kolaboratif yang aman, tervalidasi, dan memangkas pekerjaan repetitif.',
          deepAnalysis:
            'Esensi TIK dalam SKD adalah menaikkan efektivitas dan akurasi kerja. Sistem input daring terstruktur dengan hak akses (access control) langsung menghilangkan proses salin-tempel manual dan human error.',
          distractorAnalysis: [
            'A (2 poin): Mundur kembali ke proses fisik yang lambat dan boros kertas.',
            'B (5 poin): Efisien, minim kesalahan, kolaboratif, dan memperhatikan keamanan akses data.',
            'C (3 poin): Menambah beban biaya dan waktu tanpa menyentuh akar masalah.',
            'D (1 poin): Tidak adaptif terhadap efisiensi digital.',
            'E (4 poin): Mengandalkan digital tetapi keliru menggunakan platform publik untuk data instansi.',
          ],
          quickTip: 'Pemanfaatan teknologi terbaik = Otomasi yang akurat + Tetap jaga hak akses & privasi data.',
        },
      },
      {
        id: 'tkp-tik-q4',
        topicId: 'tkp-tik',
        category: TestCategory.TKP,
        questionText:
          'Di era media sosial, Anda menemukan unggahan informasi keliru (disinformasi) mengenai jadwal dan syarat pendaftaran bantuan sosial di instansi Anda yang mulai viral di grup warga. Sebagai ASN yang melek teknologi komunikasi, langkah Anda adalah...',
        options: [
          'Berdebat keras dengan akun penyebar berita bohong di kolom komentar memakai akun pribadi',
          'Segera melapor ke tim humas/pimpinan dengan menyertakan tangkapan layar unggahan, serta ikut menyebarkan infografis klarifikasi resmi yang mudah dipahami melalui kanal resmi',
          'Menghapus aplikasi media sosial agar tidak ikut terbawa suasana',
          'Membiarkannya karena masyarakat nanti akan tahu sendiri kebenarannya',
          'Mengunggah status sindiran terhadap warga yang mudah percaya berita hoaks',
        ],
        correctIndex: 1,
        optionScores: [3, 5, 2, 1, 4],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) menangani krisis informasi digital secara terkoordinasi, cepat, dan edukatif.',
          deepAnalysis:
            'Penanganan disinformasi layanan publik membutuhkan respons cepat melalui kanal resmi agar informasi yang benar menjangkau publik luas, bukan berdebat emosional di kolom komentar.',
          distractorAnalysis: [
            'A (3 poin): Niat meluruskan baik tetapi berdebat di komentar sering kontraproduktif.',
            'B (5 poin): Koordinatif, berbasis bukti, dan menyebarkan materi klarifikasi resmi yang jelas.',
            'C (2 poin): Menghindari masalah komunikasi publik.',
            'D (1 poin): Membiarkan masyarakat dirugikan informasi palsu.',
            'E (4 poin): Menyindir masyarakat tidak menyelesaikan kebingungan warga.',
          ],
          quickTip: 'Lawan hoaks layanan publik = Lapor Humas/Pimpinan + Sebarkan infografis resmi yang ramah.',
        },
      },
      {
        id: 'tkp-tik-q5',
        topicId: 'tkp-tik',
        category: TestCategory.TKP,
        questionText:
          'Saat sedang melakukan rapat koordinasi daring (video conference) penting dengan mitra daerah, tiba-tiba koneksi internet di ruangan Anda terputus. Tindakan paling profesional dalam situasi tersebut adalah...',
        options: [
          'Langsung menutup laptop dan menganggap rapat selesai karena kendala di luar kuasa Anda',
          'Segera mengabari pimpinan rapat via pesan singkat/telepon, beralih menggunakan tethering data seluler cadangan agar kembali masuk rapat, atau menyiapkan rangkuman bahan rapat untuk dikirim segera',
          'Menunggu saja hingga esok hari sampai teknisi datang memperbaiki kabel jaringan',
          'Menyalahkan bagian rumah tangga kantor di grup chat rapat',
          'Meminta rekan lain menggantikan peran presentasi Anda tanpa memberi bahan materi',
        ],
        correctIndex: 1,
        optionScores: [1, 5, 2, 3, 4],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) menunjukkan kesiapan solusi teknis cadangan dan etika komunikasi digital.',
          deepAnalysis:
            'Ketergantungan pada teknologi menuntut kita selalu punya rencana cadangan (tethering seluler) dan komunikasi transparan apabila gangguan terjadi.',
          distractorAnalysis: [
            'A (1 poin): Tidak bertanggung jawab atas kelangsungan rapat.',
            'B (5 poin): Cepat memberi kabar, mencari koneksi alternatif, dan menjamin agenda tetap berjalan.',
            'C (2 poin): Pasif dan membuang momentum rapat penting.',
            'D (3 poin): Fokus mencari kesalahan pihak lain daripada solusi.',
            'E (4 poin): Melimpahkan tanpa persiapan materi kurang profesional.',
          ],
          quickTip: 'Masalah teknis mendadak = Informasikan cepat + Aktifkan jalur cadangan.',
        },
      },
    ],
  },
  {
    id: 'tkp-profesionalisme',
    category: TestCategory.TKP,
    code: 'TKP 05',
    title: 'Profesionalisme',
    subtitle: 'Tanggung jawab jabatan, manajemen prioritas kerja, pengendalian emosi, dan peningkatan kompetensi.',
    kemenpanFocus:
      'Mampu melaksanakan tugas dan fungsi sesuai dengan tuntutan jabatan.',
    estimatedMinutes: 12,
    labType: 'tkp-dilemma',
    labTitle: 'Matriks Prioritas & Ketangguhan Profesional ASN',
    labItems: [
      {
        prompt: 'Dua tugas penting memiliki tenggat waktu bersamaan pada sore hari ini: satu tugas rutin biasa dan satu permintaan data mendesak dari pimpinan untuk rapat strategis.',
        hint: 'Gunakan matriks urgensi & dampak sambil berkomunikasi jelas.',
        answer: 'Poin 5: Memprioritaskan tugas paling mendesak dan berdampak tinggi tanpa mengabaikan tugas kedua (menyusun jadwal penyelesaian/berkoordinasi).',
        reason: 'Profesionalisme menuntut kemampuan memilah prioritas, bukan panik atau menelantarkan salah satu tugas.',
      },
      {
        prompt: 'Anda melakukan kesalahan input angka dalam laporan yang sudah sempat dikirim ke atasan.',
        hint: 'Jangan sembunyikan kesalahan atau menyalahkan orang lain.',
        answer: 'Poin 5: Segera mengakui kekeliruan secara jujur kepada atasan, meminta maaf, dan langsung mengirimkan revisi yang telah diperiksa ulang.',
        reason: 'Akuntabilitas profesional berarti berani bertanggung jawab memperbaiki kesalahan secepat mungkin.',
      },
      {
        prompt: 'Urusan keluarga pribadi muncul di tengah jam kerja saat ada tenggat pelayanan masyarakat.',
        hint: 'Pisahkan profesionalitas kerja dan urusan pribadi secara etis.',
        answer: 'Poin 5: Memastikan tugas mendesak/pelayanan selesai atau terdelegasi resmi dengan izin atasan terlebih dahulu sebelum mengurus keperluan pribadi.',
        reason: 'Tidak meninggalkan tanggung jawab kerja secara sepihak.',
      },
    ],
    sections: [
      {
        id: 'pro-1',
        heading: 'Ciri Mutlak ASN Profesional dalam TKP',
        summary:
          'Profesionalisme berarti menyelesaikan pekerjaan secara tuntas, tepat waktu, berkualitas tinggi, sesuai kewenangan jabatan, serta terus mengasah kompetensi diri.',
        keyPoints: [
          'Fokus pada penyelesaian tugas meski sedang menghadapi masalah pribadi atau tekanan kerja tinggi.',
          'Mengakui kesalahan kerja dengan jantan dan langsung memperbaikinya.',
          'Membuat skala prioritas berdasarkan urgensi dan dampak terhadap pelayanan publik.',
          'Tidak mencampuradukkan urusan pribadi/bisnis sampingan dengan jam kerja dan fasilitas kantor.',
        ],
        commonTrap:
          'Memilih opsi yang terkesan "superhero tapi tidak realistis" seperti mengerjakan semua tugas sendirian sambil menolak koordinasi atau membiarkan diri kelelahan hingga salah hitung. Profesionalitas menghargai perencanaan realistis dan ketelitian.',
        quickFormulaOrRule:
          'Formula Poin 5 Profesionalisme = Tuntas + Tepat Waktu + Skala Prioritas + Bertanggung Jawab Penuh.',
      },
    ],
    questions: [
      {
        id: 'tkp-pro-q1',
        topicId: 'tkp-profesionalisme',
        category: TestCategory.TKP,
        questionText:
          'Menjelang jam pulang kantor, atasan meminta Anda merevisi laporan evaluasi yang harus dipresentasikan besok pagi pukul 08.00, padahal Anda sudah berjanji makan malam bersama keluarga. Sikap profesional yang paling tepat adalah...',
        options: [
          'Menolak permintaan atasan secara langsung karena sudah di luar jam kerja resmi',
          'Menerima tugas tersebut dengan wajah kesal dan mengerjakannya asal-asalan agar cepat pulang',
          'Menjelaskan situasi secara sopan kepada keluarga, tetap fokus menyelesaikan revisi laporan hingga tuntas dan akurat malam itu atau mengatur waktu penyelesaian sebelum presentasi besok pagi',
          'Menyerahkan tugas tersebut kepada pegawai magang tanpa memeriksa hasilnya',
          'Berpura-pura tidak membaca pesan atasan dan mematikan ponsel sampai esok pagi',
        ],
        correctIndex: 2,
        optionScores: [2, 3, 5, 1, 4],
        explanation: {
          correctSummary: 'Opsi C (5 Poin) menunjukkan komitmen tanggung jawab jabatan serta komunikasi bijak kepada keluarga.',
          deepAnalysis:
            'Profesionalisme menuntut ASN mengutamakan tuntutan tugas mendesak yang berdampak strategis bagi organisasi dengan tetap menjaga kualitas dan ketelitian hasil kerja.',
          distractorAnalysis: [
            'A (2 poin): Kaku menghadapi kebutuhan organisasi yang mendesak.',
            'B (3 poin): Mengerjakan tugas tapi mengorbankan mutu dan sikap emosional.',
            'C (5 poin): Menjaga komunikasi baik dengan keluarga sekaligus menuntaskan amanah kerja secara berkualitas.',
            'D (1 poin): Melimpahkan tanggung jawab profesional ke peserta magang tanpa supervisi.',
            'E (4 poin): Menghindar dari komunikasi kedinasan.',
          ],
          quickTip: 'Poin 5 selalu menyelesaikan tuntutan jabatan yang mendesak dengan kualitas terjaga, tanpa drama.',
        },
      },
      {
        id: 'tkp-pro-q2',
        topicId: 'tkp-profesionalisme',
        category: TestCategory.TKP,
        questionText:
          'Setelah laporan pertanggungjawaban kegiatan selesai dicetak dan diserahkan kepada pimpinan, Anda baru menyadari adanya kesalahan ketik angka anggaran pada halaman lampiran akibat kurang teliti. Tindakan Anda adalah...',
        options: [
          'Diam saja berharap pimpinan tidak membaca sampai halaman lampiran',
          'Menyalahkan rekan satu ruangan yang mengajak Anda mengobrol saat mengetik',
          'Segera melapor secara jujur kepada pimpinan bahwa terdapat kekeliruan angka, meminta maaf, dan langsung menyerahkan lembar revisi yang sudah diverifikasi ulang',
          'Menunggu hingga tim pemeriksa menemukan kesalahan itu beberapa bulan lagi',
          'Mengubah angka pada file komputer diam-diam tanpa mengganti berkas cetak di meja pimpinan',
        ],
        correctIndex: 2,
        optionScores: [1, 2, 5, 3, 4],
        explanation: {
          correctSummary: 'Opsi C (5 Poin) mencerminkan akuntabilitas, kejujuran, dan kecepatan memperbaiki kesalahan.',
          deepAnalysis:
            'Kesalahan manusiawi bisa terjadi, tetapi sikap profesional diukur dari keberanian mengakui lebih dulu sebelum menimbulkan dampak lebih luas serta bertindak cepat memperbaikinya.',
          distractorAnalysis: [
            'A (1 poin): Menutupi kesalahan fatal dan membahayakan akuntabilitas instansi.',
            'B (2 poin): Melempar kesalahan ke pihak lain.',
            'C (5 poin): Jujur, bertanggung jawab, dan langsung membawa solusi revisi.',
            'D (3 poin): Menunda perbaikan hingga menjadi temuan audit.',
            'E (4 poin): Memperbaiki file tapi membiarkan pimpinan memegang dokumen cetak yang salah.',
          ],
          quickTip: 'Jika berbuat salah di soal TKP: Akui jujur + Minta maaf + Bawa revisi/solusi secepatnya.',
        },
      },
      {
        id: 'tkp-pro-q3',
        topicId: 'tkp-profesionalisme',
        category: TestCategory.TKP,
        questionText:
          'Dalam satu hari, Anda menerima tiga tugas berbeda: (1) Membalas keluhan warga yang batas waktunya hari ini pukul 15.00; (2) Menyusun draf surat balasan instansi mitra untuk lusa; (3) Merapikan arsip meja kerja pribadi. Cara Anda mengelola pekerjaan tersebut adalah...',
        options: [
          'Mengerjakan tugas nomor 3 dulu karena meja rapi membuat suasana hati senang',
          'Mengerjakan ketiganya sedikit demi sedikit secara acak hingga sore',
          'Menyusun skala prioritas berdasarkan tenggat dan urgensi: menuntaskan tugas (1) terlebih dahulu dengan cermat, dilanjutkan tugas (2), lalu merapikan meja (3) di akhir',
          'Meminta rekan kerja mengerjakan tugas (1) dan (2) sementara Anda merapikan meja',
          'Menunda semua pekerjaan hingga besok pagi agar pikiran lebih segar',
        ],
        correctIndex: 2,
        optionScores: [2, 3, 5, 1, 4],
        explanation: {
          correctSummary: 'Opsi C (5 Poin) menerapkan manajemen waktu berbasis prioritas (Eisenhower Matrix: Penting & Mendesak lebih dulu).',
          deepAnalysis:
            'ASN profesional mengutamakan tugas berdampak langsung pada publik dan memiliki tenggat paling dekat sebelum mengerjakan tugas administratif internal jangka panjang.',
          distractorAnalysis: [
            'A (2 poin): Salah prioritas (mementingkan estetika meja di atas keluhan warga).',
            'B (3 poin): Multitasking acak menurunkan fokus dan berisiko melewati deadline pukul 15.00.',
            'C (5 poin): Urutan prioritas sangat logis, terstruktur, dan tepat sasaran.',
            'D (1 poin): Melempar tanggung jawab inti kepada orang lain.',
            'E (4 poin): Melewati batas waktu tugas pertama.',
          ],
          quickTip: 'Prioritas utama selalu: Penting + Mendesak (berhubungan dengan pelayanan/tenggat hari ini).',
        },
      },
      {
        id: 'tkp-pro-q4',
        topicId: 'tkp-profesionalisme',
        category: TestCategory.TKP,
        questionText:
          'Anda mendapat penugasan baru menangani bidang analisis kebijakan yang belum pernah Anda kuasai sebelumnya selama kuliah. Sikap profesional yang Anda ambil adalah...',
        options: [
          'Meminta dipindahkan ke posisi lain yang hanya sesuai jurusan ijazah Anda',
          'Mengerjakan sebisanya saja tanpa perlu mencari referensi baru',
          'Menerima amanah tersebut dengan semangat belajar, membaca regulasi terkait, berdiskusi dengan mentor/senior, dan mengikuti pelatihan agar cepat kompeten',
          'Mengeluh di media sosial bahwa penempatan instansi tidak sesuai latar belakang pendidikan',
          'Menunda mulai bekerja selama satu bulan penuh untuk sekadar mencari buku panduan',
        ],
        correctIndex: 2,
        optionScores: [2, 3, 5, 1, 4],
        explanation: {
          correctSummary: 'Opsi C (5 Poin) menunjukkan growth mindset dan komitmen meningkatkan kompetensi sesuai tuntutan jabatan.',
          deepAnalysis:
            'Nilai "Kompeten" dalam ASN BerAKHLAK berarti terus belajar dan mengembangkan kapabilitas untuk menjawab tantangan tugas yang selalu dinamis.',
          distractorAnalysis: [
            'A (2 poin): Menyerah sebelum mencoba berkembang.',
            'B (3 poin): Bekerja minimal tanpa standar kualitas tinggi.',
            'C (5 poin): Proaktif belajar mandiri, berguru pada ahli, dan berkomitmen menguasai tugas.',
            'D (1 poin): Tidak etis mengeluhkan internal instansi di ruang publik.',
            'E (4 poin): Berniat belajar tapi menunda eksekusi terlalu lama.',
          ],
          quickTip: 'Saat mendapat tugas di luar zona nyaman = Terima + Pelajari cepat + Konsultasi ahli + Eksekusi.',
        },
      },
      {
        id: 'tkp-pro-q5',
        topicId: 'tkp-profesionalisme',
        category: TestCategory.TKP,
        questionText:
          'Beberapa rekan di ruangan sering memanfaatkan jam kerja untuk berjualan daring pribadi dan berbincang santai berjam-jam saat tugas menumpuk, bahkan mengajak Anda ikut serta. Sikap Anda adalah...',
        options: [
          'Ikut berjualan daring karena lumayan menambah penghasilan di sela kerja',
          'Menolak secara santun ajakan tersebut, tetap fokus menyelesaikan tanggung jawab kerja tepat waktu, dan memberi teladan kedisiplinan di ruangan',
          'Memarahi mereka dengan keras di depan ruangan agar langsung berhenti',
          'Mendiamkan mereka sambil ikut menunda pekerjaan Anda sendiri agar adil',
          'Mengambil foto mereka diam-diam lalu menyebarkannya ke media sosial publik',
        ],
        correctIndex: 1,
        optionScores: [1, 5, 3, 2, 4],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) menjaga integritas jam kerja dan memberikan keteladanan positif secara elegan.',
          deepAnalysis:
            'Jam kerja ASN dibayar oleh negara untuk melayani publik dan menuntaskan tugas jabatan. Menolak ajakan menyimpang dengan sopan sambil menunjukkan etos kerja tinggi adalah ciri profesionalisme sejati.',
          distractorAnalysis: [
            'A (1 poin): Menyalahgunakan jam kerja negara untuk kepentingan bisnis pribadi.',
            'B (5 poin): Tegas pada prinsip, santun dalam penolakan, dan menjadi teladan disiplin.',
            'C (3 poin): Benar menegakkan disiplin tetapi cara emosional memicu konflik terbuka.',
            'D (2 poin): Ikut menjadi tidak produktif.',
            'E (4 poin): Memviralkan masalah internal kantor di media sosial melanggar kode etik ASN.',
          ],
          quickTip: 'Tolak penyimpangan jam kerja dengan santun dan jadikan kinerja Anda sebagai teladan nyata.',
        },
      },
    ],
  },
  {
    id: 'tkp-anti-radikalisme',
    category: TestCategory.TKP,
    code: 'TKP 06',
    title: 'Anti Radikalisme',
    subtitle: 'Pencegahan paham intoleran, kekerasan ideologis, dan komitmen teguh pada ideologi Pancasila serta NKRI.',
    kemenpanFocus:
      'Menjaring informasi dari individu tentang pengetahuan terhadap anti radikalisme, kecenderungan bersikap, dan bertindak saat menanggapi stimulus dengan beberapa alternatif situasi.',
    estimatedMinutes: 12,
    labType: 'tkp-dilemma',
    labTitle: 'Deteksi Dini & Respons Tepat ASN Anti-Radikalisme',
    labItems: [
      {
        prompt: 'Rekan kerja mulai aktif membagikan tautan konten yang mengajak menolak hormat bendera dan menjelekkan dasar negara Pancasila di grup kantor.',
        hint: 'Jangan diam saja (pembiaran), tapi respons secara bijak, edukatif, dan laporkan sesuai prosedur bila berlanjut.',
        answer: 'Poin 5: Mengingatkan dengan santun dan argumen wawasan kebangsaan tentang komitmen sumpah ASN, serta melaporkan ke atasan/unit pengawas bila tetap disebarkan.',
        reason: 'Sikap pasif membiarkan propaganda anti-Pancasila di lingkungan ASN berisiko menyuburkan radikalisme.',
      },
      {
        prompt: 'Melihat rekan sekantor dikucilkan karena perbedaan keyakinan dan dituduh negatif oleh kelompok tertentu.',
        hint: 'Bela keadilan, jaga persatuan, dan tolak persekusi/intoleransi.',
        answer: 'Poin 5: Merangkul rekan tersebut secara setara, menolak segala bentuk intimidasi/intoleransi, dan mengajak tim mengutamakan profesionalitas serta persatuan.',
        reason: 'Intoleransi adalah pintu masuk radikalisme.',
      },
      {
        prompt: 'Ditawari mengikuti kajian tertutup di luar kantor yang materinya mendiskreditkan kelompok agama/suku lain dan menganjurkan pengubahan sistem negara dengan kekerasan.',
        hint: 'Tolak tegas segala bentuk ajakan kekerasan & penggantian ideologi negara.',
        answer: 'Poin 5: Menolak dengan tegas ajakan tersebut, menjelaskan pentingnya persatuan dalam bingkai NKRI, dan mewaspadai penyebaran paham tersebut di lingkungan kerja.',
        reason: 'ASN terikat sumpah setia pada Pancasila, UUD 1945, dan NKRI.',
      },
    ],
    sections: [
      {
        id: 'rad-1',
        heading: 'Memahami Ciri Radikalisme & Posisi Tegas ASN',
        summary:
          'Sejak CPNS terbaru, aspek Anti Radikalisme menjadi penentu penting karena ASN merupakan penjaga ideologi negara. Soal-soal menguji apakah Anda bersikap toleran, menolak kekerasan, dan aktif mencegah penyusupan paham anti-NKRI.',
        keyPoints: [
          'Ciri paham radikal berbahaya: (1) Intoleran terhadap perbedaan, (2) Fanatik sempit merasa paling benar sendiri, (3) Eksklusif menutup diri dari masyarakat umum, (4) Revolusioner ingin mengubah sistem negara/ideologi sah dengan cara kekerasan atau inkonstitusional.',
          'Sikap ASN wajib: Setia kepada Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika (bukan sekadar pasif, melainkan aktif menjaga lingkungan kerja tetap kondusif).',
          'Pendekatan penanganan: Dialog persuasif & edukatif terlebih dahulu, tegas menolak ideologi kekerasan, dan melaporkan ke pejabat berwenang/atasan apabila indikasi penyebaran paham terlarang terus berlanjut di instansi.',
        ],
        commonTrap:
          'Memilih sikap "membiarkan saja karena itu hak kebebasan berpendapat" saat rekan menyebarkan ajaran anti-Pancasila atau ujaran kebencian di kantor. Kebebasan berpendapat di Indonesia dibatasi oleh konstitusi dan tidak boleh merusak ideologi negara atau memicu kekerasan!',
        quickFormulaOrRule:
          'Formula Poin 5 Anti Radikalisme = Tolak Tegas Kekerasan/Intoleransi + Edukasi Persatuan Pancasila + Koordinasi/Lapor Jalur Resmi Instansi.',
      },
    ],
    questions: [
      {
        id: 'tkp-rad-q1',
        topicId: 'tkp-anti-radikalisme',
        category: TestCategory.TKP,
        questionText:
          'Dalam grup percakapan resmi pegawai instansi, seorang rekan kerja mengunggah artikel yang menyatakan bahwa sistem pemerintahan berdasarkan Pancasila harus diganti secara paksa dan mengajak pegawai tidak mengikuti upacara bendera. Sikap Anda yang paling tepat adalah...',
        options: [
          'Mendiamkan unggahan tersebut dan keluar dari grup agar tidak terlibat masalah',
          'Memberikan tanda suka sebagai bentuk menghormati kebebasan berpendapat rekan kerja',
          'Menanggapi secara santun namun tegas bahwa sebagai ASN kita terikat sumpah setia pada Pancasila dan NKRI, mengingatkan agar tidak menyebarkan konten anti-konstitusi di grup dinas, serta melaporkannya kepada atasan/pejabat pembina kepegawaian jika terus berulang',
          'Membalas dengan kata-kata kasar dan mengancamnya secara fisik saat bertemu di kantor',
          'Ikut menyebarkan artikel tersebut ke grup lain sekadar untuk melihat reaksi orang-orang',
        ],
        correctIndex: 2,
        optionScores: [3, 1, 5, 4, 2],
        explanation: {
          correctSummary: 'Opsi C (5 Poin) menggabungkan ketegasan konstitusional, cara komunikasi beradab, dan pelaporan prosedural.',
          deepAnalysis:
            'ASN tidak boleh bersikap permisif terhadap propaganda pengubahan ideologi negara di ruang kerja. Mengingatkan dengan argumen konstitusi secara bermartabat lalu menempuh jalur pengawasan atasan adalah langkah tepat.',
          distractorAnalysis: [
            'A (3 poin): Sikap apatis/pembiaran tidak mencegah penyebaran paham radikal di instansi.',
            'B (1 poin): Mendukung konten anti-Pancasila sangat bertentangan dengan jati diri ASN.',
            'C (5 poin): Tegas, edukatif, berbasis sumpah ASN, dan melalui prosedur pengawasan resmi.',
            'D (4 poin): Menolak konten negatif baik, tetapi ancaman kekerasan fisik justru meniru pola radikal.',
            'E (2 poin): Memperluas penyebaran konten berbahaya.',
          ],
          quickTip: 'Melawan radikalisme tidak boleh dengan kekerasan fisik; gunakan ketegasan argumen, edukasi, dan jalur hukum/kepegawaian.',
        },
      },
      {
        id: 'tkp-rad-q2',
        topicId: 'tkp-anti-radikalisme',
        category: TestCategory.TKP,
        questionText:
          'Anda mengetahui ada kelompok diskusi tertutup di luar jam kantor yang mulai mengajak pegawai baru menjauhi pergaulan dengan rekan kerja berbeda agama serta melarang bekerja sama dalam kepanitiaan bersama mereka. Sebagai ASN, respons Anda adalah...',
        options: [
          'Ikut bergabung agar tidak dijauhi oleh kelompok tersebut',
          'Menolak tegas ajaran eksklusivisme tersebut, tetap menjalin kerja sama lintas agama dengan seluruh pegawai, dan berkoordinasi dengan pimpinan/pembina rohani resmi kantor untuk memperkuat wawasan kebangsaan',
          'Menutup diri dari semua rekan kerja di kantor agar netral',
          'Mengajak rekan-rekan lain untuk mengucilkan balik anggota kelompok diskusi tersebut',
          'Menganggap hal itu wajar karena urusan pribadi di luar jam kantor',
        ],
        correctIndex: 1,
        optionScores: [1, 5, 3, 4, 2],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) menolak sikap eksklusif-intoleran sekaligus membangun sinergi pembinaan moderasi di kantor.',
          deepAnalysis:
            'Intoleransi dan eksklusivisme sosial adalah tahap awal radikalisasi yang merusak kohesi tim ASN. Menolak tegas tanpa melakukan persekusi balik, sembari melibatkan pembina resmi instansi menjaga keharmonisan seluruh pegawai.',
          distractorAnalysis: [
            'A (1 poin): Terlibat langsung dalam penyebaran sikap intoleran.',
            'B (5 poin): Menolak intoleransi, mempraktikkan inklusi, dan melibatkan jalur pembinaan resmi.',
            'C (3 poin): Menarik diri dari kolaborasi kerja.',
            'D (4 poin): Membalas pengucilan dengan pengucilan tidak mendidik persatuan.',
            'E (2 poin): Dampak eksklusivismenya merusak kerja sama di jam kantor.',
          ],
          quickTip: 'Lawan eksklusivisme dengan inklusivitas nyata + pembinaan wawasan kebangsaan resmi.',
        },
      },
      {
        id: 'tkp-rad-q3',
        topicId: 'tkp-anti-radikalisme',
        category: TestCategory.TKP,
        questionText:
          'Saat melakukan verifikasi dokumen bantuan sosial, Anda melihat seorang oknum masyarakat yang selalu memaksakan kehendaknya menggunakan ancaman kekerasan agar kelompoknya saja yang mendapat prioritas bantuan. Tindakan paling tepat adalah...',
        options: [
          'Menuruti tuntutannya agar kantor Anda tidak didatangi massa',
          'Tetap tenang, menolak segala bentuk intimidasi dan kekerasan, menegaskan bahwa penyaluran bantuan didasarkan pada data verifikasi resmi yang adil, serta berkoordinasi dengan petugas keamanan/kepolisian bila ancaman berlanjut',
          'Menutup loket pelayanan dan meliburkan seluruh pegawai tanpa kejelasan',
          'Membalas ancaman tersebut dengan tantangan adu fisik',
          'Memberikan sebagian jatah warga lain secara diam-diam kepada oknum tersebut',
        ],
        correctIndex: 1,
        optionScores: [1, 5, 3, 2, 4],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) menegakkan aturan secara adil, anti-kekerasan, dan memitigasi ancaman lewat aparat keamanan.',
          deepAnalysis:
            'Tunduk pada intimidasi kelompok justru melegitimasi cara-cara kekerasan. ASN harus teguh pada aturan objektif sambil menggandeng aparat keamanan demi keselamatan bersama.',
          distractorAnalysis: [
            'A (1 poin): Menyerah pada pemaksaan kekerasan dan merugikan warga yang berhak.',
            'B (5 poin): Teguh pada prinsip hukum, anti-kekerasan, dan melibatkan keamanan resmi.',
            'C (3 poin): Mengorbankan hak layanan masyarakat luas.',
            'D (2 poin): Terpancing menggunakan kekerasan.',
            'E (4 poin): Mengorbankan hak warga lain secara tidak adil.',
          ],
          quickTip: 'Hadapi intimidasi dengan ketenangan + ketegasan prosedur + koordinasi aparat berwenang.',
        },
      },
      {
        id: 'tkp-rad-q4',
        topicId: 'tkp-anti-radikalisme',
        category: TestCategory.TKP,
        questionText:
          'Manakah pernyataan sikap yang paling tepat menggambarkan pemahaman ASN tentang "Moderasi Beragama dan Wawasan Kebangsaan" sebagai benteng anti radikalisme?',
        options: [
          'Menyamakan seluruh ajaran agama agar tidak ada lagi perbedaan ritual ibadah',
          'Mengamalkan ajaran agama masing-masing secara taat sekaligus menghormati perbedaan keyakinan orang lain, menolak kekerasan, dan setia pada konsensus kebangsaan (Pancasila & UUD 1945)',
          'Melarang seluruh kegiatan keagamaan di lingkungan instansi pemerintah sama sekali',
          'Mengizinkan ujaran kebencian selama disampaikan di dalam komunitas tertutup sendiri',
          'Mengutamakan kepentingan kelompok sekeyakinan saat memberikan pelayanan publik',
        ],
        correctIndex: 1,
        optionScores: [2, 5, 3, 1, 4],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) merumuskan secara akurat konsep moderasi beragama yang diakui negara.',
          deepAnalysis:
            'Moderasi beragama tidak berarti mencampuradukkan akidah, melainkan mengambil jalan tengah: taat menjalankan agama sendiri secara mendalam, toleran terhadap pemeluk lain, anti-kekerasan, dan berkomitmen penuh pada NKRI.',
          distractorAnalysis: [
            'A (2 poin): Keliru memahami konsep toleransi (sinkretisme paksa).',
            'B (5 poin): Tepat mencakup 4 pilar moderasi: komitmen kebangsaan, toleransi, anti-kekerasan, akomodatif budaya.',
            'C (3 poin): Justru bertentangan dengan Pasal 29 Ayat (2) UUD 1945.',
            'D (1 poin): Pembiaran bibit radikalisme.',
            'E (4 poin): Diskriminatif dalam pelayanan publik.',
          ],
          quickTip: '4 Indikator Moderasi Kemenag/KemenPAN-RB: Komitmen Kebangsaan, Toleransi, Anti-Kekerasan, Ramah Budaya.',
        },
      },
      {
        id: 'tkp-rad-q5',
        topicId: 'tkp-anti-radikalisme',
        category: TestCategory.TKP,
        questionText:
          'Seorang teman lama di media sosial mengajak Anda menyumbang dana ke sebuah rekening pribadi anonim yang diklaim untuk "perjuangan gerakan bawah tanah mengubah tatanan negara secara cepat". Respons paling tepat Anda adalah...',
        options: [
          'Menyumbang sedikit saja agar hubungan pertemanan lama tidak putus',
          'Menolak tegas ajakan tersebut, mengingatkan teman bahwa penyaluran donasi harus jelas legalitasnya serta perubahan bangsa ditempuh melalui jalur konstitusional damai, dan tidak membagikan tautan penggalangan dana ilegal tersebut',
          'Mengabaikan pesannya lalu membiarkan teman lain di grup ikut menyumbang',
          'Meneruskan pesan ajakan sumbangan tersebut ke grup alumni untuk berdiskusi',
          'Meminjamkan rekening Anda untuk menampung sementara dana yang terkumpul',
        ],
        correctIndex: 1,
        optionScores: [1, 5, 3, 2, 4],
        explanation: {
          correctSummary: 'Opsi B (5 Poin) memutus mata rantai pendanaan aktivitas ilegal/radikal dan mengedukasi jalur konstitusional.',
          deepAnalysis:
            'Pendanaan anonim untuk gerakan bawah tanah pengubah tatanan negara sangat berisiko terkait pendanaan terorisme/radikalisme. ASN wajib waspada, menolak tegas, dan mengedukasi legalitas.',
          distractorAnalysis: [
            'A (1 poin): Terlibat dalam pendanaan gerakan ilegal berbahaya.',
            'B (5 poin): Tegas menolak, sadar hukum, dan menjaga keamanan lingkungan sekitar.',
            'C (3 poin): Menyelamatkan diri sendiri tetapi membiarkan orang lain terjerumus.',
            'D (2 poin): Ikut menyebarkan ajakan ilegal.',
            'E (4 poin): Sangat berbahaya secara hukum pidana pencucian uang/pendanaan ilegal.',
          ],
          quickTip: 'Waspada donasi anonim bertema gerakan bawah tanah—tolak tegas dan jangan diteruskan!',
        },
      },
    ],
  },
];
