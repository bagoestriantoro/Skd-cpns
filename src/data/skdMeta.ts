import { CategoryMeta, TestCategory } from '../types/skd';
import heroMascotImg from '../assets/images/hero_mascot_cpns_1794541892611.jpg';
import cardTwkImg from '../assets/images/card_twk_nasionalisme_1794541894337.jpg';
import cardTiuImg from '../assets/images/card_tiu_logika_1794541894246.jpg';
import cardTkpImg from '../assets/images/card_tkp_pelayanan_1794541895647.jpg';

export const SKD_EXAM_OVERVIEW = {
  regulationReference: 'PermenPAN-RB No. 6 Tahun 2024 & KepmenPAN-RB No. 321 Tahun 2024 (Acuan SKD CPNS 2026)',
  totalQuestions: 110,
  totalMinutes: 100,
  maxTotalScore: 550,
  minPassingTotal: 311,
};

export const CATEGORY_META: Record<TestCategory, CategoryMeta> = {
  [TestCategory.TWK]: {
    id: TestCategory.TWK,
    shortName: 'TWK',
    fullName: 'Tes Wawasan Kebangsaan',
    totalQuestionsInCAT: 30,
    passingGrade: 65,
    maxScore: 150,
    scoringRule: 'Benar +5 · Salah 0 · Kosong 0',
    officialGoal:
      'Menilai penguasaan pengetahuan dan kemampuan mengimplementasikan nilai-nilai kebangsaan Indonesia dalam kehidupan berbangsa dan bernegara.',
    accentBg: 'bg-rose-500',
    accentSoft: 'bg-rose-50',
    accentText: 'text-rose-700',
    accentBorder: 'border-rose-500',
    illustrationPath: cardTwkImg,
  },
  [TestCategory.TIU]: {
    id: TestCategory.TIU,
    shortName: 'TIU',
    fullName: 'Tes Intelegensia Umum',
    totalQuestionsInCAT: 35,
    passingGrade: 80,
    maxScore: 175,
    scoringRule: 'Benar +5 · Salah 0 · Kosong 0',
    officialGoal:
      'Mengukur peningkatan kemampuan intelektual meliputi aspek verbal, numerik, serta penalaran logis dan figural.',
    accentBg: 'bg-blue-600',
    accentSoft: 'bg-blue-50',
    accentText: 'text-blue-700',
    accentBorder: 'border-blue-600',
    illustrationPath: cardTiuImg,
  },
  [TestCategory.TKP]: {
    id: TestCategory.TKP,
    shortName: 'TKP',
    fullName: 'Tes Karakteristik Pribadi',
    totalQuestionsInCAT: 45,
    passingGrade: 166,
    maxScore: 225,
    scoringRule: 'Skala 1 sampai 5 · Kosong 0',
    officialGoal:
      'Menilai penguasaan pengetahuan dan kemampuan mengimplementasikan perilaku ASN dalam pelayanan publik, kolaborasi, adaptasi budaya, teknologi, profesionalisme, dan anti radikalisme.',
    accentBg: 'bg-emerald-600',
    accentSoft: 'bg-emerald-50',
    accentText: 'text-emerald-700',
    accentBorder: 'border-emerald-600',
    illustrationPath: cardTkpImg,
  },
};

export const HERO_MASCOT_PATH = heroMascotImg;
