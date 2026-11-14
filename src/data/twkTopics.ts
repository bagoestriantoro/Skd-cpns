import { TestCategory, TopicContent } from '../types/skd';

export const TWK_TOPICS: TopicContent[] = [
  {
    id: 'twk-nasionalisme',
    category: TestCategory.TWK,
    code: 'TWK 01',
    title: 'Nasionalisme',
    subtitle: 'Kesadaran berbangsa, identitas nasional, dan kepentingan publik di atas kepentingan golongan.',
    kemenpanFocus:
      'Mampu mewujudkan kepentingan nasional melalui cita-cita dan tujuan yang sama dengan tetap mempertahankan identitas nasional.',
    estimatedMinutes: 12,
    labType: 'pasal-flip',
    labTitle: 'Uji Cepat Konsep Nasionalisme vs Chauvinisme',
    labItems: [
      {
        prompt: 'Memprioritaskan produk UMKM lokal dan bangga memakai batik di forum internasional sambil tetap menghormati budaya negara lain.',
        hint: 'Perhatikan keseimbangan antara cinta tanah air dan penghormatan antarbangsa.',
        answer: 'Nasionalisme Sehat (Pasal 32 UUD 1945 & Sila ke-3)',
        reason: 'Nasionalisme Indonesia berwawasan kebangsaan dan kemanusiaan, tidak merendahkan bangsa lain.',
      },
      {
        prompt: 'Menganggap budaya daerah sendiri paling unggul dan menolak bekerja sama dengan pegawai dari suku atau negara lain.',
        hint: 'Sikap ini berlebihan dan merusak persatuan.',
        answer: 'Chauvinisme / Etnosentrisme (Bertentangan dengan Nasionalisme)',
        reason: 'Chauvinisme memuja bangsa/kelompok secara membabi buta dan bertentangan dengan Bhinneka Tunggal Ika.',
      },
      {
        prompt: 'Menjadikan Sumpah Pemuda 28 Oktober 1928 sebagai fondasi penggunaan Bahasa Indonesia sebagai bahasa persatuan.',
        hint: 'Ingat tiga ikrar utama Kongres Pemuda II.',
        answer: 'Nasionalisme Kultural & Politis',
        reason: 'Sumpah Pemuda menyatukan keragaman etnis ke dalam satu tanah air, satu bangsa, dan satu bahasa persatuan.',
      },
    ],
    sections: [
      {
        id: 'nas-1',
        heading: 'Hakikat Nasionalisme Indonesia & Identitas Nasional',
        summary:
          'Dalam kisi-kisi KemenPAN-RB terbaru, soal Nasionalisme tidak lagi sekadar menghafal tanggal sejarah, melainkan menguji penalaran sikap (HOTS) bagaimana seorang calon ASN mendahulukan kepentingan negara dan menjaga jati diri bangsa di tengah arus globalisasi.',
        keyPoints: [
          'Nasionalisme Indonesia adalah nasionalisme Pancasila: mencintai tanah air tanpa membenci bangsa lain (menolak chauvinisme dan xenofobia).',
          'Identitas Nasional meliputi: Bahasa Indonesia (Bahasa Persatuan), Bendera Merah Putih, Lagu Kebangsaan Indonesia Raya, Lambang Negara Garuda Pancasila, Semboyan Bhinneka Tunggal Ika, Dasar Falsafah Pancasila, dan Konstitusi UUD 1945.',
          'Tonggak sejarah nasionalisme modern: Budi Utomo (20 Mei 1908 - Kebangkitan Nasional), Sumpah Pemuda (28 Oktober 1928 - Persatuan Bangsa), dan Proklamasi (17 Agustus 1945 - Puncak Kemerdekaan).',
        ],
        comparisonRows: [
          {
            label: 'Nasionalisme',
            detail: 'Cinta tanah air yang rasional, terbuka, dan menjunjung persamaan derajat antarbangsa.',
            example: 'Membeli produk dalam negeri & berkarya mengharumkan Indonesia.',
          },
          {
            label: 'Patriotisme',
            detail: 'Sikap rela berkorban jiwa raga dan harta demi mempertahankan kedaulatan bangsa.',
            example: 'Dokter ASN bertugas di wilayah 3T meski fasilitas terbatas.',
          },
          {
            label: 'Chauvinisme',
            detail: 'Nasionalisme sempit yang menganggap bangsanya paling superior dan meremehkan bangsa lain.',
            example: 'Menolak kerja sama internasional karena merasa budaya lain rendah.',
          },
        ],
        commonTrap:
          'Peserta sering tertukar antara Nasionalisme dengan Chauvinisme atau Primordialisme. Jika opsi jawaban menunjukkan sikap eksklusif memuliakan kelompok/daerah sendiri dengan merendahkan pihak lain, pasti bukan jawaban nasionalisme yang benar.',
        quickFormulaOrRule:
          'Kunci Soal HOTS Nasionalisme: Pilih tindakan nyata yang mengutamakan kepentingan publik/negara di atas kepentingan pribadi, suku, atau golongan dengan tetap menghargai keberagaman.',
      },
      {
        id: 'nas-2',
        heading: 'Wawasan Nusantara sebagai Cara Pandang Bangsa',
        summary:
          'Wawasan Nusantara memandang Indonesia sebagai satu kesatuan politik, ekonomi, sosial budaya, dan pertahanan keamanan. Dalam soal SKD, konsep ini sering muncul dalam studi kasus pemerataan pembangunan atau konflik antardaerah.',
        keyPoints: [
          'Deklarasi Djuanda (13 Desember 1957): menegaskan laut di antara pulau-pulau Indonesia bukan pemisah, melainkan penghubung yang menyatukan wilayah darat menjadi Negara Kepulauan.',
          'Kesatuan Politik: seluruh wilayah nasional dengan segala isi dan kekayaannya merupakan satu kesatuan wilayah, wadah, ruang hidup, dan kesatuan matra seluruh bangsa.',
          'Kesatuan Sosial Budaya: masyarakat Indonesia adalah satu perikehidupan bangsa dengan tingkat kemajuan yang merata dan seimbang.',
        ],
        commonTrap:
          'Menganggap otonomi daerah berarti daerah boleh membuat kebijakan yang diskriminatif terhadap pendatang dari provinsi lain. Ini melanggar kesatuan ekonomi dan sosial budaya dalam Wawasan Nusantara.',
        quickFormulaOrRule:
          'Prinsip Wawasan Nusantara = Kepulauan + Laut Penghubung = Satu Kesatuan Utuh (IPOLEKSOSBUDHANKAM).',
      },
    ],
    questions: [
      {
        id: 'twk-nas-q1',
        topicId: 'twk-nasionalisme',
        category: TestCategory.TWK,
        questionText:
          'Sebuah pemerintah daerah menerbitkan aturan yang mewajibkan seluruh investor asing maupun luar daerah hanya mempekerjakan putra daerah asli untuk posisi manajerial demi melindungi tenaga kerja lokal. Jika ditinjau dari konsep Nasionalisme dan Wawasan Nusantara, kebijakan tersebut kurang tepat karena...',
        options: [
          'Bertentangan dengan asas keterbukaan investasi bebas di era perdagangan global',
          'Menghambat perwujudan Indonesia sebagai satu kesatuan ekonomi dan sosial budaya yang utuh',
          'Mengurangi pendapatan asli daerah dari sektor pajak penghasilan pekerja luar',
          'Melanggar prinsip kebebasan berkumpul dan berserikat bagi serikat buruh',
          'Menunjukkan rendahnya kualitas sumber daya manusia di daerah tersebut',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B paling tepat karena mengaitkan kebijakan eksklusif daerah dengan prinsip Wawasan Nusantara.',
          deepAnalysis:
            'Dalam Wawasan Nusantara, seluruh wilayah Indonesia merupakan satu kesatuan ekonomi dan sosial budaya. Setiap warga negara Indonesia memiliki hak yang sama untuk bekerja dan berkarya di seluruh wilayah NKRI tanpa diskriminasi asal daerah atau etnis.',
          distractorAnalysis: [
            'A salah: Fokusnya bukan sekadar perdagangan bebas global, melainkan persatuan nasional dalam negeri.',
            'B benar: Tepat menyentuh esensi kesatuan ekonomi dan sosial budaya dalam Wawasan Nusantara.',
            'C salah: Analisis fiskal daerah tidak relevan dengan prinsip dasar nasionalisme.',
            'D salah: Kebebasan berserikat bukan isu utama pada pembatasan asal pekerja.',
            'E salah: Mengeneralisasi kualitas SDM daerah justru bersifat bias dan tidak menjawab aspek konstitusional.',
          ],
          quickTip: 'Cari kata kunci "satu kesatuan" saat soal membahas kebijakan daerah yang membeda-bedakan warga negara.',
        },
      },
      {
        id: 'twk-nas-q2',
        topicId: 'twk-nasionalisme',
        category: TestCategory.TWK,
        questionText:
          'Di tengah gempuran budaya pop asing yang digemari generasi muda, Raka sebagai ASN muda di Kementerian Pariwisata menginisiasi festival digital yang memadukan musik tradisional daerah dengan aransemen modern untuk dipromosikan secara global. Tindakan Raka mencerminkan...',
        options: [
          'Sikap chauvinisme karena berusaha menyaingi budaya asing dengan budaya lokal',
          'Primordialisme modern untuk mengangkat suku asalnya sendiri',
          'Nasionalisme adaptif yang menjaga identitas nasional sekaligus terbuka pada perkembangan zaman',
          'Asimilasi total yang menghilangkan ciri khas budaya asli Nusantara',
          'Eksklusivisme budaya agar generasi muda menolak seluruh budaya luar',
        ],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C tepat karena memadukan pelestarian identitas nasional dengan keterbukaan inovasi.',
          deepAnalysis:
            'Kisi-kisi KemenPAN-RB menekankan kemampuan mewujudkan kepentingan nasional dengan tetap mempertahankan identitas nasional. Memadukan musik tradisional dengan kemasan modern adalah cara cerdas menjaga identitas bangsa agar tetap relevan tanpa menutup diri.',
          distractorAnalysis: [
            'A salah: Chauvinisme bersifat merendahkan bangsa lain, bukan berinovasi.',
            'B salah: Tidak ada indikasi fanatisme kesukuan sempit.',
            'C benar: Menjelaskan keseimbangan antara identitas nasional dan adaptasi global.',
            'D salah: Tradisi tidak dihilangkan, justru diaransemen agar lestari.',
            'E salah: Raka tidak menolak seluruh budaya luar, melainkan mengadaptasi medium modernnya.',
          ],
          quickTip: 'Nasionalisme bukan anti-kemajuan; ia menjaga jati diri bangsa agar tetap hidup di era modern.',
        },
      },
      {
        id: 'twk-nas-q3',
        topicId: 'twk-nasionalisme',
        category: TestCategory.TWK,
        questionText:
          'Makna historis paling fundamental dari Deklarasi Djuanda 13 Desember 1957 bagi kedaulatan nasional Indonesia adalah...',
        options: [
          'Membebaskan kapal dagang asing melintas tanpa izin di seluruh perairan Nusantara',
          'Menegaskan bahwa laut di antara pulau-pulau Indonesia merupakan penghubung yang menyatukan wilayah kedaulatan darat',
          'Menetapkan batas zona ekonomi eksklusif sejauh 500 mil laut dari garis pantai terluar',
          'Memisahkan hukum laut internasional dari hukum adat maritim daerah',
          'Memberikan hak penuh eksploitasi laut hanya kepada negara-negara tetangga ASEAN',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B merupakan inti Deklarasi Djuanda yang melahirkan konsep Negara Kepulauan (Archipelagic State).',
          deepAnalysis:
            'Sebelum Deklarasi Djuanda, mengacu pada aturan kolonial 1939 (TZMKO), laut antar-pulau di Indonesia dianggap laut bebas sehingga kapal asing bebas masuk. Djuanda Kartawidjaja menyatakan bahwa laut di antara pulau adalah bagian integral wilayah RI sehingga Indonesia utuh sebagai satu kesatuan.',
          distractorAnalysis: [
            'A salah: Justru Deklarasi Djuanda membatasi pelayaran bebas asing di perairan pedalaman.',
            'B benar: Laut sebagai pemersatu/penghubung pulau-pulau menjadi Negara Kepulauan.',
            'C salah: ZEE berjarak 200 mil laut, bukan 500 mil laut.',
            'D salah: Deklarasi Djuanda justru diperjuangkan hingga diakui di UNCLOS 1982.',
            'E salah: Kedaulatan laut sepenuhnya milik NKRI.',
          ],
          quickTip: 'Ingat rumus: Deklarasi Djuanda 1957 = Laut bukan pemisah, melainkan pemersatu pulau-pulau.',
        },
      },
      {
        id: 'twk-nas-q4',
        topicId: 'twk-nasionalisme',
        category: TestCategory.TWK,
        questionText:
          'Perbedaan mendasar antara semangat Kebangkitan Nasional 1908 (Budi Utomo) dengan perjuangan sebelum tahun 1908 terletak pada...',
        options: [
          'Penggunaan senjata modern menggantikan senjata tradisional daerah',
          'Peralihan dari perjuangan bersifat kedaerahan dan fisik menuju perjuangan terorganisir melalui jalur organisasi modern dan pendidikan',
          'Keterlibatan penuh kerajaan-kerajaan Nusantara dalam membentuk parlemen kolonial',
          'Penolakan total terhadap penggunaan bahasa Melayu dalam persuratkabaran',
          'Kesepakatan langsung untuk memproklamasikan kemerdekaan dalam kongres pertama',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B menjelaskan transformasi strategi perjuangan bangsa Indonesia pasca 1908.',
          deepAnalysis:
            'Sebelum 1908, perlawanan dipimpin tokoh daerah/raja secara fisik dan terpisah-pisah sehingga mudah dipatahkan politik devide et impera. Sejak Budi Utomo (1908), perjuangan beralih menggunakan organisasi modern, pendidikan, pers, dan kesadaran kolektif nasional.',
          distractorAnalysis: [
            'A salah: Kebangkitan Nasional 1908 menekankan jalur pergerakan organisasi, bukan senjata.',
            'B benar: Merangkum pergeseran sifat kedaerahan/fisik ke organisasi modern & kesadaran nasional.',
            'C salah: Budi Utomo didirikan oleh kalangan pelajar STOVIA dan cendekiawan, bukan koalisi kerajaan.',
            'D salah: Pers pergerakan justru memanfaatkan bahasa Melayu/Indonesia sebagai penyebar gagasan.',
            'E salah: Kongres pertama Budi Utomo fokus pada pendidikan dan budaya Jawa-Madura, belum proklamasi.',
          ],
          quickTip: 'Sebelum 1908 = kedaerahan & fisik; Sesudah 1908 = organisasi modern & terdidik.',
        },
      },
      {
        id: 'twk-nas-q5',
        topicId: 'twk-nasionalisme',
        category: TestCategory.TWK,
        questionText:
          'Sebagai panitia pengadaan barang di instansi pemerintah, Anda dihadapkan pada dua vendor: Vendor X menawarkan produk impor dengan komisi pribadi terselubung, sedangkan Vendor Y adalah produsen dalam negeri yang memenuhi seluruh spesifikasi TKDN (Tingkat Komponen Dalam Negeri) dan standar mutu resmi. Sikap nasionalisme yang paling tepat adalah...',
        options: [
          'Memilih Vendor X lalu menyumbangkan komisi tersebut untuk kegiatan sosial kantor',
          'Memilih Vendor Y sesuai regulasi pengadaan dan TKDN demi mendukung kemandirian industri nasional',
          'Membatalkan pengadaan agar tidak menimbulkan kecurigaan dari pimpinan',
          'Meminta Vendor Y memberikan potongan harga tidak resmi agar anggaran lebih hemat',
          'Menyerahkan keputusan sepenuhnya kepada vendor yang paling cepat mengirim proposal',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B menggabungkan kepatuhan regulasi TKDN, integritas, dan keberpihakan pada ekonomi nasional.',
          deepAnalysis:
            'Nasionalisme ASN tercermin pada ketaatan menjalankan kebijakan strategis negara, salah satunya P3DN (Peningkatan Penggunaan Produk Dalam Negeri) & TKDN. Menerima komisi pribadi meski untuk kegiatan sosial tetap merupakan gratifikasi ilegal.',
          distractorAnalysis: [
            'A salah: Komisi pribadi adalah gratifikasi dan melanggar hukum meski diniatkan untuk sosial.',
            'B benar: Memenuhi standar mutu, aturan TKDN, dan memperkuat ekonomi bangsa.',
            'C salah: Membatalkan pengadaan merugikan pelayanan publik karena menghambat kerja instansi.',
            'D salah: Potongan tidak resmi berpotensi menimbulkan penyimpangan administrasi.',
            'E salah: Kecepatan proposal bukan dasar penetapan pemenang pengadaan pemerintah.',
          ],
          quickTip: 'ASN wajib mendukung P3DN/TKDN selama kualitas dan prosedur pengadaan terpenuhi.',
        },
      },
    ],
  },
  {
    id: 'twk-integritas',
    category: TestCategory.TWK,
    code: 'TWK 02',
    title: 'Integritas',
    subtitle: 'Kejujuran, konsistensi antara ucapan dan tindakan, serta ketahanan terhadap godaan korupsi.',
    kemenpanFocus:
      'Mampu menjunjung tinggi kejujuran, ketangguhan, komitmen, dan konsistensi sebagai satu kesatuan sikap untuk mencapai tujuan nasional.',
    estimatedMinutes: 12,
    labType: 'pasal-flip',
    labTitle: 'Detektor 9 Nilai Antikorupsi KPK',
    labItems: [
      {
        prompt: 'Seorang pejabat tetap menolak parsel hari raya dari rekanan proyek meskipun nilainya di bawah Rp500.000 dan diberikan di luar jam kantor.',
        hint: 'Nilai ini berkaitan dengan sikap lurus hati dan menolak segala bentuk gratifikasi.',
        answer: 'Nilai Jujur & Berani (Tolak Gratifikasi)',
        reason: 'Menurut UU Tipikor, gratifikasi yang berhubungan dengan jabatan wajib ditolak atau dilaporkan ke KPK maksimal 30 hari kerja.',
      },
      {
        prompt: 'Pegawai tetap menyelesaikan laporan audit sesuai data lapangan yang sebenarnya walaupun mendapat tekanan dari atasan untuk memanipulasi angka.',
        hint: 'Integritas adalah konsistensi menjaga kebenaran meski berisiko.',
        answer: 'Nilai Berani & Tanggung Jawab',
        reason: 'ASN berintegritas memegang teguh kebenaran objektif dan tidak tunduk pada intervensi yang melanggar hukum.',
      },
      {
        prompt: 'Memakai kendaraan dinas hanya untuk urusan kedinasan dan tidak membawanya untuk liburan keluarga akhir pekan.',
        hint: 'Membedakan fasilitas negara dengan hak pribadi.',
        answer: 'Nilai Disiplin & Sederhana',
        reason: 'Penyalahgunaan fasilitas jabatan untuk kepentingan pribadi termasuk bentuk penyimpangan integritas.',
      },
    ],
    sections: [
      {
        id: 'int-1',
        heading: 'Konsep Integritas & 9 Nilai Antikorupsi KPK',
        summary:
          'Integritas bukan sekadar tidak mencuri uang negara, melainkan keselarasan antara pikiran, ucapan, dan perbuatan dengan nilai moral dan peraturan perundang-undangan. KPK merumuskan 9 nilai integritas dalam akronim "Jumat Bersepeda KK".',
        keyPoints: [
          'Nilai Inti: Jujur, Disiplin, Tanggung Jawab.',
          'Nilai Etos Kerja: Kerja Keras, Sederhana, Mandiri.',
          'Nilai Sikap: Adil, Berani, Peduli.',
          'Komitmen & Konsistensi: tetap teguh pada aturan meski tidak ada pengawasan langsung dari atasan.',
        ],
        comparisonRows: [
          {
            label: 'Suap (Bribery)',
            detail: 'Transaksional — ada kesepakatan timbal balik agar pejabat berbuat/tidak berbuat sesuatu.',
            example: 'Pelamar memberi uang agar diluluskan seleksi administrasi.',
          },
          {
            label: 'Gratifikasi',
            detail: 'Pemberian dalam arti luas kepada pegawai negeri terkait jabatan (bisa berupa uang, barang, diskon, fasilitas).',
            example: 'Rekanan mengirim parcel mewah kepada PPK setelah kontrak selesai.',
          },
          {
            label: 'Pemerasan',
            detail: 'Pejabat menyalahgunakan kekuasaan untuk memaksa pihak lain memberikan sesuatu.',
            example: 'Petugas menahan dokumen sah hingga pemohon memberi "uang pelicin".',
          },
        ],
        commonTrap:
          'Banyak peserta menganggap gratifikasi kecil ("tanda terima kasih setelah layanan selesai") boleh diterima selama layanan tidak melanggar aturan. Di soal TWK Integritas, segala pemberian terkait jabatan tetap harus ditolak atau dilaporkan ke KPK dalam 30 hari kerja!',
        quickFormulaOrRule:
          'Akronim 9 Nilai KPK: JU-DI-TA (Jujur, Disiplin, Tanggung Jawab) + KE-SE-MA (Kerja Keras, Sederhana, Mandiri) + A-BE-PE (Adil, Berani, Peduli).',
      },
      {
        id: 'int-2',
        heading: 'Core Values ASN BerAKHLAK & Kode Etik (UU No. 20 Tahun 2023)',
        summary:
          'Integritas menjadi fondasi utama bagi Aparatur Sipil Negara dalam menerapkan nilai dasar BerAKHLAK (Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif).',
        keyPoints: [
          'Akuntabel berarti melaksanakan tugas dengan jujur, bertanggung jawab, cermat, disiplin, dan berintegritas tinggi.',
          'Tidak menyalahgunakan kewenangan jabatan untuk kepentingan pribadi, keluarga, atau kroni (konflik kepentingan / conflict of interest).',
          'Menjaga rahasia negara dan data pribadi masyarakat sesuai sumpah jabatan.',
        ],
        commonTrap:
          'Menoleransi kecurangan kecil rekan kerja dengan alasan "solidaritas kantor". Loyalitas sejati ASN adalah kepada konstitusi dan kepentingan negara, bukan menutupi pelanggaran rekan.',
        quickFormulaOrRule:
          'Integritas = Melakukan hal yang benar bahkan saat tidak ada yang melihat.',
      },
    ],
    questions: [
      {
        id: 'twk-int-q1',
        topicId: 'twk-integritas',
        category: TestCategory.TWK,
        questionText:
          'Setelah menyelesaikan proses perizinan usaha yang berjalan lancar tanpa hambatan, seorang pengusaha mengirimkan jam tangan mewah ke rumah pribadi Kepala Dinas sebagai "ucapan terima kasih murni" tanpa permintaan imbalan apa pun. Tindakan yang paling mencerminkan integritas ASN adalah...',
        options: [
          'Menerimanya karena perizinan sudah selesai sesuai prosedur dan bukan suap',
          'Menolak secara santun atau melaporkannya kepada KPK paling lambat 30 hari kerja sebagai gratifikasi',
          'Menyimpannya di kantor untuk dijadikan inventaris aset instansi secara diam-diam',
          'Mengembalikannya jika pengusaha tersebut kembali mengajukan izin baru tahun depan',
          'Menjualnya dan memasukkan seluruh hasilnya ke kas kegiatan sosial pegawai',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B sesuai dengan ketentuan UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001 tentang Pemberantasan Tipikor.',
          deepAnalysis:
            'Setiap pemberian kepada pegawai negeri/penyelenggara negara yang berhubungan dengan jabatannya dikategorikan sebagai gratifikasi. Agar tidak dianggap suap, penerima wajib menolak sejak awal atau melaporkannya ke KPK maksimal 30 hari kerja sejak tanggal penerimaan.',
          distractorAnalysis: [
            'A salah: Meski proses sudah selesai dan sesuai SOP, pemberian karena jabatan tetap tergolong gratifikasi terlarang.',
            'B benar: Menolak atau lapor KPK maksimal 30 hari kerja adalah prosedur resmi hukum positif.',
            'C salah: Penetapan barang milik negara memiliki mekanisme resmi melalui KPK/Kementerian Keuangan, bukan disimpan diam-diam.',
            'D salah: Menunda pengembalian berarti sudah menikmati gratifikasi.',
            'E salah: Menjual barang gratifikasi tetap melanggar ketentuan hukum.',
          ],
          quickTip: 'Angka wajib hafal TWK Integritas: Batas lapor gratifikasi ke KPK = 30 HARI KERJA.',
        },
      },
      {
        id: 'twk-int-q2',
        topicId: 'twk-integritas',
        category: TestCategory.TWK,
        questionText:
          'Dina bertugas sebagai verifikator berkas beasiswa daerah. Saat memeriksa berkas, ia mendapati salah satu pendaftar adalah adik kandungnya sendiri yang ternyata kurang satu syarat administratif penting. Sikap integritas yang harus ditunjukkan Dina adalah...',
        options: [
          'Meloloskan berkas adiknya sementara agar bisa menyusul syaratnya setelah pengumuman',
          'Melaporkan adanya konflik kepentingan kepada atasan dan meminta agar berkas tersebut diperiksa verifikator lain secara objektif',
          'Meminta rekan satu tim untuk meloloskan berkas adiknya dengan imbalan membantu pekerjaan rekan tersebut',
          'Melengkapi kekurangan berkas adiknya sendiri sebelum diserahkan kepada pimpinan',
          'Membiarkan berkas adiknya di urutan terakhir tanpa memberi catatan apa pun',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B menerapkan manajemen konflik kepentingan (conflict of interest) secara transparan dan akuntabel.',
          deepAnalysis:
            'Ketika pejabat/petugas memiliki hubungan keluarga dengan pihak yang dilayani, potensi konflik kepentingan muncul. Langkah berintegritas adalah melakukan deklarasi konflik kepentingan kepada atasan dan mengalihkan pemeriksaan agar objektivitas tetap terjaga.',
          distractorAnalysis: [
            'A salah: Melanggar prosedur dan merugikan pendaftar lain yang memenuhi syarat.',
            'B benar: Mengakui konflik kepentingan dan menyerahkan penilaian ke petugas independen.',
            'C salah: Ini termasuk kolusi dan penyalahgunaan wewenang.',
            'D salah: Membantu melengkapi secara sepihak melanggar asas keadilan.',
            'E salah: Menahan berkas tanpa prosedur yang jelas tidak profesional.',
          ],
          quickTip: 'Jika soal memunculkan keluarga/kerabat dalam layanan publik, kata kuncinya adalah "hindari konflik kepentingan & bersikap objektif".',
        },
      },
      {
        id: 'twk-int-q3',
        topicId: 'twk-integritas',
        category: TestCategory.TWK,
        questionText:
          'Dalam sembilan nilai antikorupsi yang dirumuskan oleh KPK, kelompok nilai yang berfokus pada "etos kerja" meliputi...',
        options: [
          'Jujur, Adil, dan Berani',
          'Kerja Keras, Sederhana, dan Mandiri',
          'Disiplin, Peduli, dan Tanggung Jawab',
          'Jujur, Disiplin, dan Sederhana',
          'Berani, Mandiri, dan Peduli',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B tepat mengelompokkan ketiga nilai etos kerja KPK.',
          deepAnalysis:
            'KPK membagi 9 nilai integritas ke dalam 3 rumpun: (1) Nilai Inti: Jujur, Disiplin, Tanggung Jawab; (2) Nilai Etos Kerja: Kerja Keras, Sederhana, Mandiri; (3) Nilai Sikap: Adil, Berani, Peduli.',
          distractorAnalysis: [
            'A salah: Jujur (inti), Adil & Berani (sikap).',
            'B benar: Kerja Keras, Sederhana, Mandiri adalah rumpun Etos Kerja.',
            'C salah: Disiplin & Tanggung Jawab (inti), Peduli (sikap).',
            'D salah: Mencampur nilai inti dan etos kerja.',
            'E salah: Mencampur nilai sikap dan etos kerja.',
          ],
          quickTip: 'Ingat kelompok Etos Kerja = "KeSeMa" (Kerja Keras, Sederhana, Mandiri).',
        },
      },
      {
        id: 'twk-int-q4',
        topicId: 'twk-integritas',
        category: TestCategory.TWK,
        questionText:
          'Seorang auditor internal menemukan ketidaksesuaian anggaran perjalanan dinas di unitnya. Atasan langsungnya meminta agar temuan tersebut tidak ditulis dalam laporan demi menjaga nama baik unit kerja. Prinsip integritas yang seharusnya menjadi pegangan auditor tersebut adalah...',
        options: [
          'Menuruti atasan karena loyalitas terhadap pimpinan adalah kewajiban utama ASN',
          'Menghapus temuan dari laporan resmi namun menegur rekan secara lisan saja',
          'Tetap mencatat temuan secara objektif dalam laporan audit karena kesetiaan utama adalah pada kebenaran dan aturan hukum',
          'Mengundurkan diri dari tim audit agar tidak berhadapan dengan pimpinan',
          'Menyebarkan temuan tersebut ke media sosial sebelum diserahkan ke inspektorat',
        ],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C menegaskan keberanian dan tanggung jawab profesional di atas tekanan hierarkis yang keliru.',
          deepAnalysis:
            'Nilai integritas menuntut konsistensi dan keberanian menegakkan kebenaran. Loyalitas ASN diarahkan kepada Pancasila, UUD 1945, NKRI, dan pemerintahan yang sah sesuai peraturan, bukan menutupi pelanggaran individu atasan.',
          distractorAnalysis: [
            'A salah: Loyalitas buta terhadap perintah yang melanggar hukum adalah pelanggaran integritas.',
            'B salah: Menghilangkan temuan resmi sama dengan pemalsuan laporan audit.',
            'C benar: Menjaga objektivitas, keberanian moral, dan akuntabilitas.',
            'D salah: Menghindari tanggung jawab bukan karakter ASN tangguh.',
            'E salah: Membocorkan dokumen internal ke media sosial sebelum jalur resmi melanggar kode etik kerahasiaan.',
          ],
          quickTip: 'Loyalitas ASN ≠ menuruti perintah atasan yang melanggar aturan.',
        },
      },
      {
        id: 'twk-int-q5',
        topicId: 'twk-integritas',
        category: TestCategory.TWK,
        questionText:
          'Perbedaan paling prinsipil antara tindak pidana "pemerasan oleh pegawai negeri" dengan "suap-menyuap" terletak pada...',
        options: [
          'Besar kecilnya nilai uang yang berpindah tangan',
          'Ada tidaknya unsur paksaan dari penyelenggara negara terhadap pihak pemberi',
          'Waktu pemberian apakah sebelum atau sesudah layanan selesai',
          'Jabatan struktural pegawai yang menerima pemberian tersebut',
          'Bentuk pemberian apakah berupa uang tunai atau barang elektronik',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B menjelaskan perbedaan hukum antara pemerasan (Pasal 12 huruf e UU Tipikor) dan suap.',
          deepAnalysis:
            'Pada tindak pidana suap, kedua pihak (pemberi dan penerima) memiliki kesepakatan aktif atau inisiatif transaksional. Pada pemerasan, inisiatif dan tekanan/paksaan berasal dari oknum pejabat yang menyalahgunakan kekuasaannya sehingga korban merasa terpaksa menyerahkan sesuatu.',
          distractorAnalysis: [
            'A salah: Nilai uang tidak membedakan jenis delik suap dan pemerasan.',
            'B benar: Unsur paksaan/ancaman oleh pejabat menjadi pembeda utama pemerasan.',
            'C salah: Suap maupun gratifikasi bisa terjadi sebelum atau sesudah layanan.',
            'D salah: Semua ASN bisa terjerat tanpa memandang eselon jabatan.',
            'E salah: Bentuk barang maupun uang sama-sama dapat menjadi objek delik.',
          ],
          quickTip: 'Suap = kesepakatan dua arah ("meeting of minds"); Pemerasan = ada paksaan sepihak dari pejabat.',
        },
      },
    ],
  },
  {
    id: 'twk-bela-negara',
    category: TestCategory.TWK,
    code: 'TWK 03',
    title: 'Bela Negara',
    subtitle: 'Partisipasi aktif warga negara dalam menjaga kedaulatan dari ancaman militer maupun non-militer.',
    kemenpanFocus:
      'Mampu berperan aktif dalam mempertahankan eksistensi bangsa dan negara.',
    estimatedMinutes: 10,
    labType: 'pasal-flip',
    labTitle: 'Pemetaan 5 Nilai Dasar Bela Negara (UU No. 23 Tahun 2019)',
    labItems: [
      {
        prompt: 'ASN aktif mencegah penyebaran berita bohong (hoaks) dan ujaran kebencian yang memicu konflik sosial di lingkungan kerjanya.',
        hint: 'Berkaitan dengan kesadaran menjaga persatuan dan keutuhan negara.',
        answer: 'Sadar Berbangsa dan Bernegara',
        reason: 'Kesadaran berbangsa dan bernegara mencakup pencegahan perpecahan bangsa akibat disinformasi.',
      },
      {
        prompt: 'Mengikuti pelatihan literasi digital dan keamanan siber untuk melindungi sistem pelayanan publik dari serangan peretas.',
        hint: 'Menyiapkan kapasitas diri demi tugas negara.',
        answer: 'Memiliki Kemampuan Awal Bela Negara',
        reason: 'Kemampuan awal bela negara mencakup kesiapan fisik maupun non-fisik (kecerdasan intelektual, digital, dan kesehatan jasmani).',
      },
      {
        prompt: 'Bersedia ditempatkan di daerah terpencil atau perbatasan demi memastikan layanan pendidikan dan kesehatan merata.',
        hint: 'Mengutamakan bangsa di atas kenyamanan pribadi.',
        answer: 'Rela Berkorban untuk Bangsa dan Negara',
        reason: 'Pengabdian tanpa pamrih di wilayah 3T merupakan wujud nyata rela berkorban.',
      },
    ],
    sections: [
      {
        id: 'bn-1',
        heading: 'Landasan Konstitusional & Sishankamrata',
        summary:
          'Bela negara bukanlah monopoli TNI/Polri semata. UUD 1945 secara tegas mewajibkan sekaligus memberi hak kepada setiap warga negara untuk ikut serta dalam upaya bela negara sesuai profesi masing-masing.',
        keyPoints: [
          'Pasal 27 Ayat (3) UUD 1945: "Setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara."',
          'Pasal 30 Ayat (1) UUD 1945: "Tiap-tiap warga negara berhak dan wajib ikut serta dalam usaha pertahanan dan keamanan negara."',
          'Pasal 30 Ayat (2) UUD 1945: Sistem Pertahanan dan Keamanan Rakyat Semesta (Sishankamrata) menempatkan TNI dan Polri sebagai kekuatan utama, sedangkan rakyat sebagai kekuatan pendukung.',
          'UU No. 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara (PSDN) mengatur Komponen Utama (TNI), Komponen Cadangan (Komcad), dan Komponen Pendukung.',
        ],
        comparisonRows: [
          {
            label: 'Ancaman Militer',
            detail: 'Ancaman bersenjata yang membahayakan kedaulatan dan keutuhan wilayah.',
            example: 'Agresi militer, pelanggaran batas wilayah oleh kapal perang asing, spionase bersenjata.',
          },
          {
            label: 'Ancaman Non-Militer',
            detail: 'Ancaman tanpa kekuatan bersenjata namun merusak ideologi, politik, ekonomi, sosial budaya, dan siber.',
            example: 'Hoaks pemecah belah, serangan ransomware data negara, narkoba, korupsi masif.',
          },
          {
            label: 'Ancaman Hibrida',
            detail: 'Kombinasi ancaman militer dan non-militer secara bersamaan.',
            example: 'Serangan siber terhadap infrastruktur vital disertai infiltrasi bersenjata.',
          },
        ],
        commonTrap:
          'Tertukar antara Pasal 27 Ayat (3) (Upaya Pembelaan Negara) dengan Pasal 30 Ayat (1) (Usaha Pertahanan dan Keamanan Negara). Perhatikan kata kuncinya!',
        quickFormulaOrRule:
          '5 Nilai Dasar Bela Negara: (1) Cinta Tanah Air, (2) Sadar Berbangsa & Bernegara, (3) Setia pada Pancasila sebagai Ideologi Negara, (4) Rela Berkorban, (5) Kemampuan Awal Bela Negara.',
      },
    ],
    questions: [
      {
        id: 'twk-bn-q1',
        topicId: 'twk-bela-negara',
        category: TestCategory.TWK,
        questionText:
          'Dalam Sistem Pertahanan dan Keamanan Rakyat Semesta (Sishankamrata) menurut Pasal 30 Ayat (2) UUD 1945, kedudukan rakyat serta peran TNI dan Polri secara tepat adalah...',
        options: [
          'TNI sebagai komponen cadangan, Polri dan rakyat sebagai komponen utama',
          'TNI dan Polri sebagai kekuatan utama, sedangkan rakyat sebagai kekuatan pendukung',
          'Rakyat dan Polri sebagai kekuatan utama keamanan, sedangkan TNI hanya bertugas saat perang terbuka',
          'Seluruh warga sipil wajib mengikuti wajib militer aktif bersama TNI dan Polri',
          'Pemerintah daerah memegang kendali penuh komando pertahanan wilayah tanpa TNI',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B mengutip secara akurat bunyi Pasal 30 Ayat (2) UUD 1945.',
          deepAnalysis:
            'Pasal 30 Ayat (2) UUD 1945 menyatakan usaha pertahanan dan keamanan negara dilaksanakan melalui Sishankamrata oleh Tentara Nasional Indonesia dan Kepolisian Negara Republik Indonesia sebagai kekuatan utama, dan rakyat sebagai kekuatan pendukung.',
          distractorAnalysis: [
            'A salah: TNI dan Polri adalah kekuatan utama, bukan cadangan.',
            'B benar: Sesuai teks eksplisit Pasal 30 Ayat (2) UUD 1945.',
            'C salah: Rakyat berkedudukan sebagai kekuatan pendukung.',
            'D salah: Indonesia tidak menerapkan wajib militer paksa seperti beberapa negara lain; Komcad bersifat sukarela.',
            'E salah: Pertahanan dan keamanan merupakan urusan pemerintahan absolut pemerintah pusat.',
          ],
          quickTip: 'Pasal 30 (2) UUD 1945: TNI & Polri = Kekuatan Utama; Rakyat = Kekuatan Pendukung.',
        },
      },
      {
        id: 'twk-bn-q2',
        topicId: 'twk-bela-negara',
        category: TestCategory.TWK,
        questionText:
          'Serangan peretasan terhadap pusat data layanan publik nasional dan penyebaran disinformasi terstruktur menjelang pemilu merupakan tantangan kedaulatan bangsa pada era modern. Dalam doktrin pertahanan negara, ancaman tersebut dikategorikan sebagai...',
        options: [
          'Ancaman militer berintensitas rendah',
          'Ancaman non-militer berdimensi teknologi informasi dan ideologi-politik',
          'Agresi teritorial konvensional',
          'Sabotase fisik lintas batas negara',
          'Pelanggaran hukum pidana ringan domestik',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B tepat mengklasifikasikan serangan siber dan disinformasi sebagai ancaman non-militer.',
          deepAnalysis:
            'Ancaman non-militer adalah ancaman yang tidak menggunakan kekuatan senjata konvensional tetapi berpotensi mengancam kedaulatan, keutuhan wilayah, dan keselamatan segenap bangsa, termasuk di dalamnya dimensi teknologi informasi (siber), ideologi, politik, ekonomi, dan sosial budaya.',
          distractorAnalysis: [
            'A salah: Tidak menggunakan kekuatan bersenjata militer.',
            'B benar: Serangan siber & disinformasi termasuk ancaman non-militer berdimensi teknologi & poltik.',
            'C salah: Agresi teritorial melibatkan invasi fisik militer.',
            'D salah: Sabotase siber bukan sabotase fisik teritorial konvensional.',
            'E salah: Skala nasional pada pusat data negara berdampak strategis, bukan pidana ringan.',
          ],
          quickTip: 'Jika tidak ada senjata fisik/militer tapi mengancam eksistensi negara -> Ancaman Non-Militer.',
        },
      },
      {
        id: 'twk-bn-q3',
        topicId: 'twk-bela-negara',
        category: TestCategory.TWK,
        questionText:
          'Seorang guru ASN di pulau terluar terus berinovasi membuat media belajar sederhana meski akses internet terbatas agar anak-anak perbatasan tidak tertinggal dari siswa di kota besar. Sikap guru tersebut paling mencerminkan nilai dasar bela negara berupa...',
        options: [
          'Kemampuan menandingi kurikulum luar negeri secara fisik',
          'Rela berkorban untuk bangsa dan negara serta mencerdaskan kehidupan bangsa',
          'Kewajiban mengikuti latihan baris-berbaris setiap akhir pekan',
          'Penolakan terhadap kemajuan teknologi pendidikan modern',
          'Usaha meningkatkan tunjangan kinerja daerah terpencil',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B menggambarkan pengabdian tanpa pamrih di garis depan NKRI sebagai bela negara non-fisik.',
          deepAnalysis:
            'Bela negara bagi ASN diwujudkan melalui pengabdian sesuai profesi. Bertugas dengan dedikasi penuh di pulau terluar dengan keterbatasan fasilitas menunjukkan nilai rela berkorban sekaligus menjalankan amanat Pembukaan UUD 1945 alinea ke-4.',
          distractorAnalysis: [
            'A salah: Fokusnya pemerataan kualitas pendidikan anak bangsa, bukan menandingi fisik.',
            'B benar: Pengabdian di daerah 3T mencerminkan rela berkorban untuk bangsa dan negara.',
            'C salah: Baris-berbaris bukan esensi tindakan guru pada ilustrasi soal.',
            'D salah: Keterbatasan internet diatasi dengan inovasi, bukan menolak teknologi.',
            'E salah: Motivasi bela negara adalah pengabdian, bukan sekadar tunjangan.',
          ],
          quickTip: 'Bela negara profesi = mengabdi terbaik di bidang tugas masing-masing demi kepentingan bangsa.',
        },
      },
      {
        id: 'twk-bn-q4',
        topicId: 'twk-bela-negara',
        category: TestCategory.TWK,
        questionText:
          'Pasal UUD 1945 yang secara eksplisit mengatur hak dan kewajiban setiap warga negara dalam "upaya pembelaan negara" adalah...',
        options: [
          'Pasal 27 Ayat (1) UUD 1945',
          'Pasal 27 Ayat (3) UUD 1945',
          'Pasal 28E Ayat (1) UUD 1945',
          'Pasal 30 Ayat (3) UUD 1945',
          'Pasal 31 Ayat (1) UUD 1945',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B benar: Pasal 27 Ayat (3) UUD 1945 hasil amandemen kedua.',
          deepAnalysis:
            'Pasal 27 Ayat (1) tentang persamaan kedudukan di hukum dan pemerintahan; Ayat (2) tentang hak pekerjaan dan penghidupan layak; Ayat (3) tentang hak dan kewajiban ikut serta dalam upaya pembelaan negara.',
          distractorAnalysis: [
            'A salah: Pasal 27 (1) tentang kesamaan di hadapan hukum.',
            'B benar: Pasal 27 (3) secara khusus menyebut upaya pembelaan negara.',
            'C salah: Pasal 28E (1) tentang kebebasan memeluk agama dan memilih pendidikan/pekerjaan.',
            'D salah: Pasal 30 (3) tentang tugas pokok TNI mempertahankan keutuhan wilayah.',
            'E salah: Pasal 31 (1) tentang hak mendapatkan pendidikan.',
          ],
          quickTip: 'Hafalan cepat Pasal 27: (1) Hukum, (2) Kerja Layak, (3) Bela Negara.',
        },
      },
      {
        id: 'twk-bn-q5',
        topicId: 'twk-bela-negara',
        category: TestCategory.TWK,
        questionText:
          'Dalam UU No. 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara, status warga sipil yang telah lolos seleksi dan dilatih dasar militer secara sukarela untuk memperbesar serta memperkuat kekuatan Komponen Utama disebut...',
        options: [
          'Komponen Pendukung',
          'Komponen Cadangan',
          'Pasukan Garda Depan',
          'Satuan Pengamanan Teritorial',
          'Milisi Pertahanan Sipil Wajib',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B tepat: Komponen Cadangan (Komcad) bersifat sukarela sesuai UU No. 23 Tahun 2019.',
          deepAnalysis:
            'UU No. 23/2019 membagi pertahanan negara menjadi Komponen Utama (TNI), Komponen Cadangan (sumber daya nasional yang disiapkan untuk dikerahkan melalui mobilisasi memperkuat komponen utama), dan Komponen Pendukung (warga/ASN/sarana prasarana yang secara tidak langsung mendukung pertahanan).',
          distractorAnalysis: [
            'A salah: Komponen Pendukung tidak melalui pelatihan dasar militer Komcad yang dimobilisasi tempur.',
            'B benar: Komcad direkrut sukarela dan dilatih untuk memperkuat TNI saat darurat/mobilisasi.',
            'C salah: Bukan istilah resmi dalam UU PSDN.',
            'D salah: Bukan nomenklatur komponen pertahanan UU No. 23/2019.',
            'E salah: Komcad Indonesia tidak bersifat wajib militer paksa.',
          ],
          quickTip: 'Utama = TNI; Cadangan = Komcad (sukarela); Pendukung = Warga/Profesi/Sarana.',
        },
      },
    ],
  },
  {
    id: 'twk-pilar-negara',
    category: TestCategory.TWK,
    code: 'TWK 04',
    title: 'Pilar Negara',
    subtitle: 'Pendalaman Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika dalam praktik ketatanegaraan.',
    kemenpanFocus:
      'Mampu membentuk karakter positif melalui pemahaman dan pengamalan nilai-nilai dalam Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika.',
    estimatedMinutes: 18,
    labType: 'pasal-flip',
    labTitle: 'Pemetaan Sila Pancasila & Pasal Krusial UUD 1945',
    labItems: [
      {
        prompt: 'Perbedaan Sila ke-2 (Kemanusiaan) vs Sila ke-5 (Keadilan Sosial) dalam studi kasus sosial.',
        hint: 'Lihat subjeknya: martabat individu/HAM vs pemerataan hak ekonomi/fasilitas umum.',
        answer: 'Sila 2 = Martabat & HAM individu; Sila 5 = Pemerataan & Keseimbangan Hak-Kewajiban Publik',
        reason: 'Contoh Sila 2: menolong korban bencana tanpa membeda-bedakan. Contoh Sila 5: tidak bergaya hidup mewah, adil dalam antrean layanan publik, menjaga fasilitas umum.',
      },
      {
        prompt: 'Pasal 1 Ayat (3) UUD 1945 menyatakan Indonesia adalah negara hukum (Rechtsstaat), bukan negara kekuasaan (Machtsstaat).',
        hint: 'Konsekuensi utama negara hukum bagi pemerintah dan warga.',
        answer: 'Supremasi Hukum & Equality Before the Law',
        reason: 'Semua kebijakan pejabat dan tindakan warga negara wajib tunduk pada hukum yang berlaku.',
      },
      {
        prompt: 'Pasal 18B Ayat (2) UUD 1945 tentang masyarakat hukum adat.',
        hint: 'Hubungan NKRI dengan keragaman budaya lokal.',
        answer: 'Negara mengakui dan menghormati kesatuan-kesatuan masyarakat hukum adat beserta hak-hak tradisionalnya',
        reason: 'Selama masih hidup dan sesuai perkembangan masyarakat serta prinsip NKRI.',
      },
    ],
    sections: [
      {
        id: 'pil-1',
        heading: 'Pancasila: Kedudukan & Pembedaan Tajam Antar-Sila (Tap MPR I/MPR/2003)',
        summary:
          'Soal TWK Pilar Negara sangat sering menyajikan cerita kasus kehidupan sehari-hari lalu menanyakan pengamalan sila ke berapa. Menguasai pembeda tipis antara Sila 1–5 membuat Anda tidak mudah terkecoh.',
        keyPoints: [
          'Sila 1 (Ketuhanan YME): kebebasan beribadah, toleransi antarumat beragama, tidak memaksakan agama kepada orang lain.',
          'Sila 2 (Kemanusiaan yang Adil dan Beradab): menjunjung tinggi martabat manusia, anti-perundungan, membela kebenaran dan keadilan, kegiatan kemanusiaan.',
          'Sila 3 (Persatuan Indonesia): rela berkorban untuk bangsa, cinta tanah air, bangga berbangsa Indonesia, menempatkan persatuan di atas kepentingan pribadi/golongan.',
          'Sila 4 (Kerakyatan): musyawarah untuk mufakat, menghormati pendapat berbeda, tidak memaksakan kehendak dalam rapat, menerima hasil keputusan bersama dengan lapang dada.',
          'Sila 5 (Keadilan Sosial): keseimbangan hak dan kewajiban, tidak boros/bergaya hidup mewah, suka bekerja keras, menghargai karya orang lain, menjaga fasilitas umum.',
        ],
        comparisonRows: [
          {
            label: 'Pembukaan UUD 1945 Alinea 1',
            detail: 'Kemerdekaan adalah hak segala bangsa; penjajahan harus dihapuskan.',
            example: 'Mendukung kemerdekaan negara terjajah & menolak kolonialisme.',
          },
          {
            label: 'Pembukaan UUD 1945 Alinea 4',
            detail: '4 Tujuan Negara + Bentuk Republik + Dasar Negara Pancasila.',
            example: 'Melindungi segenap bangsa, memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, ikut melaksanakan ketertiban dunia.',
          },
        ],
        commonTrap:
          'Sering tertukar antara Sila 2 dan Sila 5! Ingat: kegiatan bakti sosial/membantu korban bencana = Sila 2 (kemanusiaan). Menjaga fasilitas umum, tidak bergaya hidup mewah, antre tertib = Sila 5 (keadilan sosial).',
        quickFormulaOrRule:
          'Rumus Pembeda Sila: 1 = Ibadah/Agama | 2 = HAM/Kemanusiaan | 3 = Bangsa/Persatuan | 4 = Rapat/Musyawarah | 5 = Pemerataan/Etika Sosial.',
      },
      {
        id: 'pil-2',
        heading: 'UUD 1945, Struktur Ketatanegaraan, NKRI & Bhinneka Tunggal Ika',
        summary:
          'Pahami perubahan penting pasca-amandemen UUD 1945 (1999–2002) serta pembagian urusan pemerintahan pusat dan daerah dalam kerangka NKRI.',
        keyPoints: [
          'Pasal yang tidak dapat diubah menurut Pasal 37 Ayat (5) UUD 1945: Bentuk Negara Kesatuan Republik Indonesia (NKRI). Selain itu, Pembukaan UUD 1945 juga disepakati MPR tidak diubah karena memuat dasar negara.',
          '6 Urusan Pemerintahan Absolut Pusat (UU Pemda): Politik luar negeri, Pertahanan, Keamanan, Yustisi, Moneter & Fiskal Nasional, dan Agama.',
          'Bhinneka Tunggal Ika (Kitab Sutasoma karya Mpu Tantular): berbeda-beda tetapi tetap satu jua; menuntut sikap inklusif, akomodatif, tidak sektarian.',
        ],
        commonTrap:
          'Mengira Mahkamah Konstitusi (MK) dan Mahkamah Agung (MA) memiliki tugas uji materi yang sama. MK menguji UU terhadap UUD 1945; MA menguji peraturan perundang-undangan di bawah UU terhadap UU!',
        quickFormulaOrRule:
          '6 Urusan Absolut Pusat = "POL-PER-KE-YU-MO-A" (Politik LN, Pertahanan, Keamanan, Yustisi, Moneter/Fiskal, Agama).',
      },
    ],
    questions: [
      {
        id: 'twk-pil-q1',
        topicId: 'twk-pilar-negara',
        category: TestCategory.TWK,
        questionText:
          'Dalam rapat evaluasi pelayanan publik, usulan Rino untuk mengubah jadwal shift loket ditolak mayoritas peserta rapat karena dianggap kurang sesuai dengan jam kunjungan warga. Meskipun kecewa, Rino tetap menjalankan hasil keputusan rapat dengan penuh tanggung jawab. Sikap Rino merupakan pengamalan Pancasila terutama sila ke...',
        options: [
          'Sila Pertama',
          'Sila Kedua',
          'Sila Ketiga',
          'Sila Keempat',
          'Sila Kelima',
        ],
        correctIndex: 3,
        explanation: {
          correctSummary: 'Opsi D tepat: menerima dan melaksanakan hasil keputusan musyawarah dengan itikad baik adalah butir Sila ke-4.',
          deepAnalysis:
            'Butir pengamalan Sila ke-4 (Tap MPR No. I/MPR/2003) secara eksplisit menyatakan: "Dengan itikad baik dan rasa tanggung jawab menerima dan melaksanakan hasil keputusan musyawarah" serta tidak memaksakan kehendak kepada orang lain.',
          distractorAnalysis: [
            'A salah: Sila ke-1 menyangkut ketuhanan dan toleransi beragama.',
            'B salah: Sila ke-2 menyangkut persamaan derajat dan kemanusiaan.',
            'C salah: Sila ke-3 menyangkut persatuan bangsa dan cinta tanah air.',
            'D benar: Konteks rapat, perbedaan pendapat, dan kepatuhan pada hasil musyawarah adalah ciri khas Sila ke-4.',
            'E salah: Sila ke-5 menyangkut pemerataan sosial dan keseimbangan hak-kewajiban.',
          ],
          quickTip: 'Kata kunci "rapat, mufakat, menghargai usulan, menerima keputusan bersama" = Sila ke-4.',
        },
      },
      {
        id: 'twk-pil-q2',
        topicId: 'twk-pilar-negara',
        category: TestCategory.TWK,
        questionText:
          'Seorang kepala desa berinisiatif menerbitkan mata uang lokal khusus untuk transaksi pasar desa agar ekonomi warga tidak terpengaruh inflasi nasional. Menurut prinsip NKRI dan UU Pemerintahan Daerah, langkah tersebut melanggar kewenangan karena urusan moneter merupakan...',
        options: [
          'Urusan pemerintahan konkuren wajib pelayanan dasar',
          'Urusan pemerintahan absolut yang sepenuhnya menjadi kewenangan Pemerintah Pusat',
          'Urusan pemerintahan pilihan sektor perdagangan daerah',
          'Kewenangan otonomi khusus tingkat provinsi',
          'Hak prerogatif kepala daerah untuk kesejahteraan desa',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B tepat: moneter dan fiskal nasional termasuk 6 urusan pemerintahan absolut Pemerintah Pusat.',
          deepAnalysis:
            'Berdasarkan UU No. 23 Tahun 2014 tentang Pemerintahan Daerah, terdapat 6 urusan pemerintahan absolut yang tidak didesentralisasikan ke daerah: politik luar negeri, pertahanan, keamanan, yustisi, moneter & fiskal nasional, serta agama.',
          distractorAnalysis: [
            'A salah: Urusan konkuren wajib misalnya pendidikan, kesehatan, PU, perumahan rakyat.',
            'B benar: Moneter termasuk 6 urusan absolut pusat.',
            'C salah: Urusan pilihan misalnya kelautan, pariwisata, pertanian.',
            'D salah: Bahkan daerah otonomi khusus tidak berhak mencetak mata uang sendiri.',
            'E salah: Kepala desa tidak memiliki kewenangan menerbitkan alat pembayaran sah.',
          ],
          quickTip: 'Ingat POLPERKEYUMOA untuk 6 urusan absolut pemerintah pusat!',
        },
      },
      {
        id: 'twk-pil-q3',
        topicId: 'twk-pilar-negara',
        category: TestCategory.TWK,
        questionText:
          'Berdasarkan Pasal 24C UUD 1945, lembaga negara yang berwenang menguji Undang-Undang terhadap Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 serta memutus sengketa hasil pemilihan umum adalah...',
        options: [
          'Mahkamah Agung (MA)',
          'Komisi Yudisial (KY)',
          'Mahkamah Konstitusi (MK)',
          'Majelis Permusyawaratan Rakyat (MPR)',
          'Dewan Perwakilan Daerah (DPD)',
        ],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C benar: Pasal 24C Ayat (1) UUD 1945 menetapkan kewenangan tersebut milik Mahkamah Konstitusi.',
          deepAnalysis:
            'Kewenangan MK (Pasal 24C UUD 1945): (1) Menguji UU terhadap UUD 1945, (2) Memutus sengketa kewenangan lembaga negara, (3) Memutus pembubaran partai politik, (4) Memutus perselisihan hasil pemilu, (5) Wajib memutus pendapat DPR atas dugaan pelanggaran Presiden/Wapres.',
          distractorAnalysis: [
            'A salah: MA berwenang menguji peraturan di bawah UU (seperti PP, Perpres, Perda) terhadap UU.',
            'B salah: KY mengusulkan pengangkatan hakim agung dan menjaga martabat/perilaku hakim.',
            'C benar: Sesuai Pasal 24C UUD 1945.',
            'D salah: MPR mengubah/menetapkan UUD serta melantik Presiden/Wapres.',
            'E salah: DPD merupakan lembaga legislatif perwakilan daerah.',
          ],
          quickTip: 'UU vs UUD = MK (Konstitusi). Peraturan di bawah UU vs UU = MA (Agung).',
        },
      },
      {
        id: 'twk-pil-q4',
        topicId: 'twk-pilar-negara',
        category: TestCategory.TWK,
        questionText:
          'Meskipun memiliki penghasilan sangat tinggi sebagai pejabat publik, Pak Hendra memilih menggunakan pakaian kerja sederhana, tidak memamerkan kemewahan di media sosial, dan menggunakan fasilitas ruang tunggu umum bersama masyarakat tanpa meminta perlakuan istimewa. Perilaku tersebut sesuai dengan butir pengamalan Pancasila...',
        options: [
          'Sila Pertama: percaya dan takwa kepada Tuhan YME',
          'Sila Kedua: menjunjung tinggi nilai-nilai kemanusiaan',
          'Sila Ketiga: mengembangkan rasa cinta kepada tanah air',
          'Sila Keempat: mengutamakan musyawarah dalam mengambil keputusan',
          'Sila Kelima: tidak bergaya hidup mewah dan menjaga keseimbangan antara hak dan kewajiban',
        ],
        correctIndex: 4,
        explanation: {
          correctSummary: 'Opsi E tepat mengutip butir pengamalan Sila ke-5 Pancasila.',
          deepAnalysis:
            'Salah satu butir penting Sila ke-5 (Keadilan Sosial bagi Seluruh Rakyat Indonesia) adalah tidak menggunakan hak milik untuk hal-hal yang bersifat pemborosan dan gaya hidup mewah, serta tidak merugikan kepentingan umum.',
          distractorAnalysis: [
            'A salah: Tidak membahas aspek keagamaan.',
            'B salah: Fokusnya kesederhanaan dan keadilan sosial, bukan isu kemanusiaan darurat.',
            'C salah: Tidak membahas nasionalisme teritorial atau persatuan antarwilayah.',
            'D salah: Tidak ada proses rapat/musyawarah.',
            'E benar: Menjauhi gaya hidup mewah (hedonisme) adalah butir eksplisit Sila ke-5.',
          ],
          quickTip: 'Anti-boros, anti-hedonisme, menghargai karya orang lain = Sila ke-5.',
        },
      },
      {
        id: 'twk-pil-q5',
        topicId: 'twk-pilar-negara',
        category: TestCategory.TWK,
        questionText:
          'Menurut Pasal 37 Ayat (5) UUD 1945 setelah perubahan keempat, ketentuan yang secara tegas tidak dapat dilakukan perubahan adalah mengenai...',
        options: [
          'Masa jabatan Presiden dan Wakil Presiden',
          'Sistem pemilihan anggota Dewan Perwakilan Rakyat',
          'Bentuk Negara Kesatuan Republik Indonesia',
          'Susunan keanggotaan Mahkamah Konstitusi',
          'Besarnya anggaran pendidikan minimal dalam APBN',
        ],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C merupakan bunyi resmi Pasal 37 Ayat (5) UUD 1945.',
          deepAnalysis:
            'Pasal 37 Ayat (5) UUD 1945 berbunyi: "Khusus mengenai bentuk Negara Kesatuan Republik Indonesia tidak dapat dilakukan perubahan." Hal ini menjadi pagar konstitusional keutuhan NKRI.',
          distractorAnalysis: [
            'A salah: Masa jabatan Presiden diatur dalam Pasal 7 dan secara teknis dapat diamandemen jika memenuhi syarat Pasal 37.',
            'B salah: Tidak dikecualikan dalam Pasal 37 Ayat (5).',
            'C benar: Bentuk NKRI bersifat final dan tidak boleh diubah.',
            'D salah: Tidak dikecualikan secara eksplisit di Pasal 37 (5).',
            'E salah: Anggaran pendidikan diatur di Pasal 31 Ayat (4).',
          ],
          quickTip: 'Pasal 37 Ayat (5): Bentuk NKRI adalah harga mati (tidak dapat diubah).',
        },
      },
    ],
  },
  {
    id: 'twk-bahasa-negara',
    category: TestCategory.TWK,
    code: 'TWK 05',
    title: 'Bahasa Negara',
    subtitle: 'Penguasaan EYD Edisi V, kalimat efektif, ide pokok paragraf, dan bahasa persatuan dalam naskah dinas.',
    kemenpanFocus:
      'Mampu menggunakan bahasa Indonesia sebagai bahasa persatuan yang sangat penting kedudukannya dalam kehidupan bermasyarakat, berbangsa, dan bernegara.',
    estimatedMinutes: 14,
    labType: 'pasal-flip',
    labTitle: 'Klinik Cepat EYD V & Kata Baku Sering Muncul di CPNS',
    labItems: [
      {
        prompt: 'Mana penulisan yang baku: "Di mana", "Dimana", "Di dalam", atau "Didalam"?',
        hint: 'Bedakan "di" sebagai kata depan (preposisi tempat) dengan "di-" sebagai awalan kata kerja pasif.',
        answer: '"Di mana" dan "Di dalam" (dipisah karena menunjukkan tempat)',
        reason: 'Kata depan "di, ke, dari" ditulis terpisah dari kata yang mengikutinya apabila menyatakan tempat/arah. Contoh digabung: "diambil", "diketik".',
      },
      {
        prompt: 'Mana penulisan gelar & sapaan yang benar menurut EYD V: "Dr. Budi, S.H." vs "Dr. Budi, SH."?',
        hint: 'Gelar sarjana dua huruf atau lebih dipisah tanda titik pada setiap huruf kapital singkatan.',
        answer: '"Dr. Budi, S.H." (koma setelah nama, titik pada S. dan H.)',
        reason: 'Singkatan nama gelar akademik ditulis dengan tanda titik di antara setiap hurufnya (S.Pd., M.Kom., S.H.).',
      },
      {
        prompt: 'Kalimat tidak efektif: "Para hadirin sekalian dimohon berdiri." Mengapa salah?',
        hint: 'Perhatikan penggunaan kata jamak berulang (pleonasme).',
        answer: 'Mengandung pleonasme (boros kata): "para", "hadirin", dan "sekalian" sama-sama bermakna jamak.',
        reason: 'Bentuk efektifnya cukup: "Hadirin dimohon berdiri."',
      },
    ],
    sections: [
      {
        id: 'bhs-1',
        heading: 'Kedudukan Bahasa Indonesia & Kaidah EYD Edisi V',
        summary:
          'Bahasa Indonesia ditetapkan sebagai Bahasa Negara dalam Pasal 36 UUD 1945 dan dikukuhkan sebagai Bahasa Persatuan dalam Sumpah Pemuda 1928. Sejak 2022, pedoman resmi ejaan menggunakan EYD Edisi V (menggantikan PUEBI).',
        keyPoints: [
          'Penulisan Huruf Kapital: dipakai untuk nama bangsa, suku bangsa, bahasa, agama, nama geografi khas (contoh: Sungai Musi, tetapi "mandi di sungai"), dan unsur nama jabatan yang diikuti nama orang (contoh: Gubernur Jawa Barat, tetapi "para gubernur").',
          'Penulisan Unsur Serapan Baku yang sering keluar di CPNS: risiko (bukan resiko), sistem (bukan sistim), analisis (bukan analisa), praktik (bukan praktek), izin (bukan ijin), kualitas (bukan kwalitas), apotek (bukan apotik), antre (bukan antri).',
          'Syarat Kalimat Efektif: Memiliki struktur Subjek + Predikat jelas, hemat kata (tidak pleonasme), tidak ambigu, dan paralel (sejajar imbuhannya).',
          'Ide Pokok / Gagasan Utama: biasanya terdapat pada kalimat utama (awal paragraf = deduktif, akhir paragraf = induktif, awal & akhir = campuran).',
        ],
        comparisonRows: [
          {
            label: 'Bentuk Tidak Baku',
            detail: 'Analisa, Praktek, Resiko, Ijin, Antri, Merubah, Mempengaruhi.',
            example: '"Kita harus merubah sistim analisa resiko."',
          },
          {
            label: 'Bentuk Baku (KBBI/EYD V)',
            detail: 'Analisis, Praktik, Risiko, Izin, Antre, Mengubah, Memengaruhi.',
            example: '"Kita harus mengubah sistem analisis risiko."',
          },
        ],
        commonTrap:
          'Jebakan kata berimbuhan meN- + kata dasar berawalan K, T, S, P! Jika huruf kedua konsonan (misal: pr-aktik, kr-itik, tr-ansfer), huruf pertama TIDAK luluh -> mempraktikkan, mengkritik. Jika huruf kedua vokal (misal: p-engaruh, t-ulis, s-apu, k-irim), huruf pertama LULUH -> memengaruhi, menulis, menyapu, mengirim!',
        quickFormulaOrRule:
          'Rumus Peluluhan K-T-S-P: Vokal setelah KTSP = LULUH (memengaruhi); Konsonan setelah KTSP = TIDAK LULUH (mempraktikkan). Pengecualian: mengkaji vs mengaji (beda makna).',
      },
    ],
    questions: [
      {
        id: 'twk-bhs-q1',
        topicId: 'twk-bahasa-negara',
        category: TestCategory.TWK,
        questionText:
          'Manakah kalimat berikut yang seluruh ejaan dan pilihan kata bakunya sesuai dengan EYD Edisi V dan KBBI?',
        options: [
          'Para peserta seleksi diharap mengantri dengan tertib di depan loket registrasi.',
          'Tim inspektorat sedang melakukan analisa resiko terhadap sistem pelayanan perizinan.',
          'Pemerintah terus memengaruhi pola pikir birokrasi agar berani mempraktikkan transparansi.',
          'Dalam rapat itu, pimpinan berusaha merubah jadual kegiatan dinas luar kota.',
          'Setiap pegawai wajib meminta ijin tertulis sebelum menggunakan fasilitas apotik kantor.',
        ],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C benar menggunakan kata baku "memengaruhi" (luluh) dan "mempraktikkan" (tidak luluh).',
          deepAnalysis:
            'Kata dasar "pengaruh" diawali P + vokal e, sehingga luluh menjadi "memengaruhi". Kata dasar "praktik" diawali P + konsonan r (gugus konsonan), sehingga tidak luluh menjadi "mempraktikkan".',
          distractorAnalysis: [
            'A salah: "mengantri" tidak baku (baku: mengantre), dan "para peserta" boleh tetapi bentuk "mengantri" menggugurkan opsi.',
            'B salah: "analisa" dan "resiko" tidak baku (baku: analisis, risiko).',
            'C benar: "memengaruhi" dan "mempraktikkan" tepat sesuai kaidah morfologi KTSP dan KBBI.',
            'D salah: "merubah" dan "jadual" tidak baku (baku: mengubah, jadwal).',
            'E salah: "ijin" dan "apotik" tidak baku (baku: izin, apotek).',
          ],
          quickTip: 'Ingat pasangan klasik CPNS: analisis (bukan analisa), risiko (bukan resiko), antre (bukan antri), jadwal (bukan jadual), izin (bukan ijin).',
        },
      },
      {
        id: 'twk-bhs-q2',
        topicId: 'twk-bahasa-negara',
        category: TestCategory.TWK,
        questionText:
          'Perhatikan kalimat berikut: "Bagi seluruh calon pegawai yang telah lolos seleksi administrasi diwajibkan mencetak kartu ujian." Alasan utama kalimat tersebut dianggap TIDAK efektif adalah...',
        options: [
          'Menggunakan kata serapan asing yang belum diserap ke dalam KBBI',
          'Tidak memiliki subjek kalimat karena diawali kata depan "Bagi"',
          'Predikatnya berbentuk kata kerja aktif yang tidak sesuai konteks',
          'Mengandung makna ganda akibat tanda koma yang hilang',
          'Susunan kata keterangan waktunya berada di akhir kalimat',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B benar: penggunaan preposisi "Bagi" di awal menjadikan unsur pelaku berubah menjadi keterangan, sehingga kalimat kehilangan Subjek.',
          deepAnalysis:
            'Syarat wajib kalimat efektif dalam bahasa Indonesia minimal memiliki Subjek (S) dan Predikat (P). Penambahan kata depan "Bagi", "Untuk", atau "Kepada" sebelum subjek merusak fungsi subjek menjadi keterangan. Agar efektif, hapus kata "Bagi": "Seluruh calon pegawai yang telah lolos seleksi administrasi (S) diwajibkan (P)..."',
          distractorAnalysis: [
            'A salah: Kata administrasi dan seleksi sudah baku dalam KBBI.',
            'B benar: Preposisi "Bagi" menghilangkan subjek kalimat.',
            'C salah: Predikat "diwajibkan" berbentuk pasif dan sudah tepat.',
            'D salah: Tidak ada ambiguitas makna ganda pada struktur tersebut.',
            'E salah: Tidak terdapat keterangan waktu pada kalimat soal.',
          ],
          quickTip: 'Hati-hati awal kalimat berpola "Bagi...", "Dalam...", "Kepada..." yang langsung diikuti kata kerja pasif ("diwajibkan/diharapkan"). Itu hampir pasti kalimat tak bersubjek!',
        },
      },
      {
        id: 'twk-bhs-q3',
        topicId: 'twk-bahasa-negara',
        category: TestCategory.TWK,
        questionText:
          'Penulisan huruf kapital yang TEPAT menurut kaidah EYD Edisi V terdapat pada kalimat...',
        options: [
          'Rombongan peserta seminar berasal dari Suku Bugis dan Suku Minang.',
          'Pemerintah berencana membangun jembatan baru melintasi sungai Musi tahun depan.',
          'Bulan depan Gubernur Sulawesi Selatan akan meresmikan gedung pelayanan terpadu.',
          'Kita wajib menggunakan Bahasa Indonesia yang baik saat menyusun surat resmi.',
          'Adik membeli jeruk Bali dan pisang Ambon di pasar tradisional pagi ini.',
        ],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C benar: nama jabatan diikuti nama daerah/orang ("Gubernur Sulawesi Selatan") ditulis kapital.',
          deepAnalysis:
            'Menurut EYD V, huruf kapital digunakan pada huruf pertama nama jabatan/pangkat yang diikuti nama orang atau nama instansi/tempat sebagai pengganti nama orang tertentu ("Gubernur Sulawesi Selatan").',
          distractorAnalysis: [
            'A salah: Kata "suku" tidak ditulis kapital (seharusnya: suku Bugis, suku Minang).',
            'B salah: Nama diri geografi harus kapital seluruh unsurnya (seharusnya: Sungai Musi).',
            'C benar: "Gubernur Sulawesi Selatan" tepat kapital.',
            'D salah: Kata "bahasa" tidak ditulis kapital (seharusnya: bahasa Indonesia).',
            'E salah: Nama jenis buah/produk bukan ciri khas geografi asli tidak memakai kapital pada nama tempatnya (seharusnya: jeruk bali, pisang ambon).',
          ],
          quickTip: 'Kapital: Sungai Musi (geografi), Gubernur SulSel (jabatan+tempat). Non-kapital: suku Jawa, bahasa Indonesia, jeruk bali.',
        },
      },
      {
        id: 'twk-bhs-q4',
        topicId: 'twk-bahasa-negara',
        category: TestCategory.TWK,
        questionText:
          'Bacalah paragraf berikut: "Digitalisasi arsip kepegawaian mempercepat proses verifikasi data hingga 70 persen. Selain menghemat ruang penyimpanan fisik, sistem ini meminimalkan risiko kehilangan dokumen akibat bencana. Tidak mengherankan jika pemerintah pusat mewajibkan seluruh instansi daerah beralih ke sistem arsip elektronik pada tahun ini." Gagasan utama paragraf tersebut adalah...',
        options: [
          'Kewajiban instansi daerah membeli perangkat komputer baru',
          'Dampak positif dan urgensi penerapan digitalisasi arsip kepegawaian',
          'Risiko kehilangan dokumen fisik akibat bencana alam di daerah',
          'Penghematan anggaran kertas pada kantor pemerintahan pusat',
          'Lambatnya verifikasi data kepegawaian sebelum era internet',
        ],
        correctIndex: 1,
        explanation: {
          correctSummary: 'Opsi B merangkum keseluruhan isi paragraf secara proporsional dari kalimat utama hingga penjelas.',
          deepAnalysis:
            'Paragraf ini membahas manfaat digitalisasi arsip (kecepatan verifikasi, hemat ruang, minim risiko hilang) yang berujung pada kewajiban penerapannya di seluruh instansi. Gagasan utamanya mencakup keunggulan dan urgensi digitalisasi arsip.',
          distractorAnalysis: [
            'A salah: Pembelian komputer baru tidak disebutkan dalam teks.',
            'B benar: Merangkum inti seluruh kalimat dalam paragraf.',
            'C salah: Hanya merupakan sebagian rincian kalimat penjelas kedua.',
            'D salah: Anggaran kertas tidak dibahas secara eksplisit.',
            'E salah: Hanya informasi tersirat, bukan fokus utama paragraf.',
          ],
          quickTip: 'Ide pokok yang tepat tidak boleh terlalu sempit (hanya 1 kalimat penjelas) dan tidak boleh keluar dari teks.',
        },
      },
      {
        id: 'twk-bhs-q5',
        topicId: 'twk-bahasa-negara',
        category: TestCategory.TWK,
        questionText:
          'Kalimat berikut yang memenuhi prinsip kesejajaran (paralelisme) dan kehematan kata adalah...',
        options: [
          'Tahap seleksi meliputi pendaftaran online, verifikasi berkas, dan peserta mengikuti ujian CAT.',
          'Program ini bertujuan untuk meningkatkan mutu layanan, mempercepat proses, dan efisiensi anggaran.',
          'Setiap pelamar diwajibkan mengunggah ijazah, melampirkan transkrip nilai, dan mengisi biodata.',
          'Agar supaya berkas cepat diproses, pemohon diminta datang tepat waktu.',
          'Para hadirin sekalian dimohon menonaktifkan telepon genggam selama ujian berlangsung.',
        ],
        correctIndex: 2,
        explanation: {
          correctSummary: 'Opsi C sejajar menggunakan tiga frasa verba aktif berawalan meN- ("mengunggah... melampirkan... mengisi...").',
          deepAnalysis:
            'Kesejajaran bentuk (paralelisme) menuntut unsur-unsur rincian dalam satu kalimat menggunakan kelas kata atau imbuhan yang seragam. Pada opsi C, ketiganya berbentuk kata kerja aktif berimbuhan meN-.',
          distractorAnalysis: [
            'A salah: Tidak sejajar antara nomina ("pendaftaran", "verifikasi") dengan klausa ("peserta mengikuti").',
            'B salah: Tidak sejajar antara verba ("meningkatkan", "mempercepat") dengan nomina ("efisiensi").',
            'C benar: Paralel meN- + hemat kata.',
            'D salah: Pleonasme "Agar supaya".',
            'E salah: Pleonasme "Para hadirin sekalian".',
          ],
          quickTip: 'Periksa rincian setelah koma sebelum "dan": semua harus berjenis kata yang sama (verba dengan verba, nomina dengan nomina).',
        },
      },
    ],
  },
];
