/* Avsar dataset — single source of truth. Schema documented in CLAUDE.md/README.
   Eligibility numbers are GENERAL-category. windowMonths [] = rolling. Researched + adversarially verified 2026-08-19. */
window.AVSAR_DATA = {
 "updated": "2026-08-19",
 "opportunities": [
  {
   "id": "jee-main",
   "name": "JEE Main",
   "category": "college",
   "oneLiner": "National entrance for B.Tech/B.Arch at NITs, IIITs and GFTIs; top ~2.5 lakh rankers qualify for JEE Advanced (IITs). Two sessions a year, best score counts.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 1000,
   "benefit": null,
   "window": "typically Oct–Nov (Session 1) and Jan–Feb (Session 2)",
   "windowMonths": [
    10,
    11,
    1,
    2
   ],
   "nextExpected": "Oct–Nov 2026 (expected, 2027 Session 1)",
   "frequency": "biannual",
   "official": "https://jeemain.nta.nic.in",
   "resources": [
    {
     "label": "JoSAA counselling (NIT/IIIT/IIT seat allotment)",
     "url": "https://josaa.nic.in"
    },
    {
     "label": "NCERT textbooks (core syllabus)",
     "url": "https://ncert.nic.in"
    },
    {
     "label": "NTA (conducting body)",
     "url": "https://www.nta.ac.in"
    }
   ],
   "tags": [
    "engineering",
    "architecture",
    "national",
    "nta",
    "btech"
   ]
  },
  {
   "id": "jee-advanced",
   "name": "JEE Advanced",
   "category": "college",
   "oneLiner": "Entrance for the 23 IITs; only top JEE Main qualifiers can sit it, with a maximum of two attempts in consecutive years.",
   "ageMin": null,
   "ageMax": 25,
   "minEducation": "12th",
   "feeINR": 3200,
   "benefit": null,
   "window": "typically late Apr–May",
   "windowMonths": [
    4,
    5
   ],
   "nextExpected": "Apr–May 2027 (expected)",
   "frequency": "annual",
   "official": "https://jeeadv.ac.in",
   "resources": [
    {
     "label": "JoSAA counselling",
     "url": "https://josaa.nic.in"
    },
    {
     "label": "NPTEL free IIT courses",
     "url": "https://nptel.ac.in"
    }
   ],
   "tags": [
    "engineering",
    "iit",
    "national",
    "btech"
   ]
  },
  {
   "id": "neet-ug",
   "name": "NEET UG",
   "category": "college",
   "oneLiner": "Single national entrance for MBBS, BDS, AYUSH, nursing and veterinary seats in all Indian medical colleges, including AIIMS and JIPMER.",
   "ageMin": 17,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 1700,
   "benefit": null,
   "window": "typically Feb–Mar",
   "windowMonths": [
    2,
    3
   ],
   "nextExpected": "Feb–Mar 2027 (expected)",
   "frequency": "annual",
   "official": "https://neet.nta.nic.in",
   "resources": [
    {
     "label": "MCC counselling (seat allotment)",
     "url": "https://mcc.nic.in"
    },
    {
     "label": "NCERT textbooks (core syllabus)",
     "url": "https://ncert.nic.in"
    }
   ],
   "tags": [
    "medical",
    "mbbs",
    "national",
    "nta"
   ]
  },
  {
   "id": "neet-pg",
   "name": "NEET PG",
   "category": "college",
   "oneLiner": "Entrance for MD/MS/PG Diploma seats after MBBS, conducted by NBEMS; the single route into postgraduate medical education in India.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 3500,
   "benefit": null,
   "window": "varies year to year; Apr–Jul in recent cycles (2026: Jul 1–21)",
   "windowMonths": [
    4,
    5,
    6,
    7
   ],
   "nextExpected": "Mid-2027 (expected)",
   "frequency": "annual",
   "official": "https://natboard.edu.in",
   "resources": [
    {
     "label": "MCC PG counselling",
     "url": "https://mcc.nic.in"
    }
   ],
   "tags": [
    "medical",
    "pg",
    "md-ms",
    "national"
   ]
  },
  {
   "id": "cuet-ug",
   "name": "CUET UG",
   "category": "college",
   "oneLiner": "Common entrance for undergraduate admission to DU, BHU, JNU, AMU, Jamia and 250+ central, state and private universities; also covers agriculture UG (ICAR) seats.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 1000,
   "benefit": null,
   "window": "typically Jan–Mar (exam in May)",
   "windowMonths": [
    1,
    2,
    3
   ],
   "nextExpected": "Jan–Mar 2027 (expected)",
   "frequency": "annual",
   "official": "https://cuet.nta.nic.in",
   "resources": [
    {
     "label": "NTA (conducting body)",
     "url": "https://www.nta.ac.in"
    },
    {
     "label": "NCERT textbooks (core syllabus)",
     "url": "https://ncert.nic.in"
    }
   ],
   "tags": [
    "university",
    "arts",
    "science",
    "commerce",
    "national",
    "nta"
   ]
  },
  {
   "id": "cuet-pg",
   "name": "CUET PG",
   "category": "college",
   "oneLiner": "Common entrance for postgraduate admission across central universities and many state, deemed and private universities.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 1400,
   "benefit": null,
   "window": "typically Jan–Feb",
   "windowMonths": [
    1,
    2
   ],
   "nextExpected": "Jan–Feb 2027 (expected)",
   "frequency": "annual",
   "official": "https://exams.nta.nic.in/cuet-pg/",
   "resources": [
    {
     "label": "NTA (conducting body)",
     "url": "https://www.nta.ac.in"
    }
   ],
   "tags": [
    "university",
    "pg",
    "masters",
    "national",
    "nta"
   ]
  },
  {
   "id": "gate",
   "name": "GATE (Graduate Aptitude Test in Engineering)",
   "category": "college",
   "oneLiner": "Gateway to M.Tech/MS/PhD at IITs, IISc, NITs and to PSU jobs (IOCL, ONGC, PGCIL); score valid 3 years. GATE 2027 is run by IIT Madras.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 2000,
   "benefit": "Rs 12,400/mo M.Tech stipend if admitted",
   "window": "typically late Aug–Sep (late fee into early Oct)",
   "windowMonths": [
    8,
    9,
    10
   ],
   "nextExpected": "Opens 27 Aug 2026 (GATE 2027, exam Feb 2027)",
   "frequency": "annual",
   "official": "https://gate2027.iitm.ac.in",
   "resources": [
    {
     "label": "GATE Overflow (free CS/IT prep and past papers)",
     "url": "https://gateoverflow.in"
    },
    {
     "label": "NPTEL free IIT courses",
     "url": "https://nptel.ac.in"
    }
   ],
   "tags": [
    "engineering",
    "mtech",
    "psu",
    "national",
    "iit"
   ]
  },
  {
   "id": "cat",
   "name": "CAT (Common Admission Test)",
   "category": "college",
   "oneLiner": "Entrance for MBA/PGP at the 21 IIMs and most top Indian B-schools; conducted by a rotating IIM each November (2026: IIM Indore).",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 2700,
   "benefit": null,
   "window": "typically Aug–mid Sep",
   "windowMonths": [
    8,
    9
   ],
   "nextExpected": "Open now: 3 Aug – 15 Sep 2026 (exam 29 Nov 2026)",
   "frequency": "annual",
   "official": "https://iimcat.ac.in",
   "resources": [
    {
     "label": "Official mock test and past papers on the CAT portal",
     "url": "https://iimcat.ac.in"
    }
   ],
   "tags": [
    "mba",
    "management",
    "iim",
    "national"
   ]
  },
  {
   "id": "xat",
   "name": "XAT (Xavier Aptitude Test)",
   "category": "college",
   "oneLiner": "XLRI's national MBA entrance, accepted by XLRI, XIMB, IMT, TAPMI and 160+ B-schools; exam held in early January.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 2200,
   "benefit": null,
   "window": "typically Jul–Nov (sometimes into early Dec)",
   "windowMonths": [
    7,
    8,
    9,
    10,
    11
   ],
   "nextExpected": "Jul–Nov 2026 (expected, XAT 2027)",
   "frequency": "annual",
   "official": "https://xatonline.in",
   "resources": [
    {
     "label": "XLRI Jamshedpur",
     "url": "https://www.xlri.ac.in"
    }
   ],
   "tags": [
    "mba",
    "management",
    "national"
   ]
  },
  {
   "id": "cmat",
   "name": "CMAT (Common Management Admission Test)",
   "category": "college",
   "oneLiner": "NTA-run MBA entrance accepted by 1,000+ AICTE-approved management programmes; a common add-on or alternative to CAT.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 2500,
   "benefit": null,
   "window": "typically Oct–Nov (exam in Jan)",
   "windowMonths": [
    10,
    11
   ],
   "nextExpected": "Oct–Nov 2026 (expected)",
   "frequency": "annual",
   "official": "https://cmat.nta.nic.in",
   "resources": [
    {
     "label": "NTA (conducting body)",
     "url": "https://www.nta.ac.in"
    }
   ],
   "tags": [
    "mba",
    "management",
    "national",
    "nta"
   ]
  },
  {
   "id": "clat",
   "name": "CLAT (Common Law Admission Test)",
   "category": "college",
   "oneLiner": "Entrance for 5-year BA LLB at 27 National Law Universities (all except NLU Delhi); also has a PG track for LLM admission.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 4000,
   "benefit": null,
   "window": "typically Aug–Oct (exam in Dec)",
   "windowMonths": [
    8,
    9,
    10
   ],
   "nextExpected": "Open now: 3 Aug – 31 Oct 2026 (CLAT 2027, exam 6 Dec 2026)",
   "frequency": "annual",
   "official": "https://consortiumofnlus.ac.in",
   "resources": [
    {
     "label": "Consortium sample papers and past question papers",
     "url": "https://consortiumofnlus.ac.in"
    }
   ],
   "tags": [
    "law",
    "llb",
    "nlu",
    "national"
   ]
  },
  {
   "id": "ailet",
   "name": "AILET (All India Law Entrance Test)",
   "category": "college",
   "oneLiner": "NLU Delhi's own entrance for BA LLB, LLM and PhD; NLU Delhi does not accept CLAT, so law aspirants usually sit both.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 3500,
   "benefit": null,
   "window": "typically Aug–Nov (exam in Dec)",
   "windowMonths": [
    8,
    9,
    10,
    11
   ],
   "nextExpected": "Aug–Nov 2026 (expected)",
   "frequency": "annual",
   "official": "https://nationallawuniversitydelhi.in",
   "resources": [
    {
     "label": "NLU Delhi admissions section",
     "url": "https://nationallawuniversitydelhi.in"
    }
   ],
   "tags": [
    "law",
    "llb",
    "nlu-delhi",
    "national"
   ]
  },
  {
   "id": "nata",
   "name": "NATA (National Aptitude Test in Architecture)",
   "category": "college",
   "oneLiner": "Council of Architecture's aptitude test for B.Arch admission; up to 3 attempts a year with best score counted. Needs PCM in 12th.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 1750,
   "benefit": null,
   "window": "typically Mar–Jun, multiple test sessions (fee is per attempt)",
   "windowMonths": [
    3,
    4,
    5,
    6
   ],
   "nextExpected": "Mar 2027 (expected)",
   "frequency": "multiple",
   "official": "https://www.nata.in",
   "resources": [
    {
     "label": "Council of Architecture",
     "url": "https://www.coa.gov.in"
    }
   ],
   "tags": [
    "architecture",
    "barch",
    "national"
   ]
  },
  {
   "id": "nid-dat",
   "name": "NID DAT (Design Aptitude Test)",
   "category": "college",
   "oneLiner": "Two-stage entrance (Prelims + Studio Test) for B.Des at the National Institutes of Design; also has a PG track for M.Des.",
   "ageMin": null,
   "ageMax": 20,
   "minEducation": "12th",
   "feeINR": 3000,
   "benefit": null,
   "window": "typically Sep–Nov (Prelims in Dec–Jan)",
   "windowMonths": [
    9,
    10,
    11
   ],
   "nextExpected": "Sep–Nov 2026 (expected)",
   "frequency": "annual",
   "official": "https://admissions.nid.edu",
   "resources": [
    {
     "label": "National Institute of Design",
     "url": "https://www.nid.edu"
    }
   ],
   "tags": [
    "design",
    "bdes",
    "national"
   ]
  },
  {
   "id": "nift-entrance",
   "name": "NIFT Entrance Exam",
   "category": "college",
   "oneLiner": "Entrance for B.Des, B.FTech and M.Des at the 19 NIFT campuses; written test (conducted by NTA) plus a situation test for B.Des.",
   "ageMin": null,
   "ageMax": 24,
   "minEducation": "12th",
   "feeINR": 3000,
   "benefit": null,
   "window": "typically Nov–Jan (exam in Feb)",
   "windowMonths": [
    11,
    12,
    1
   ],
   "nextExpected": "Nov 2026 – Jan 2027 (expected)",
   "frequency": "annual",
   "official": "https://www.nift.ac.in",
   "resources": [
    {
     "label": "NTA (conducts the written exam)",
     "url": "https://www.nta.ac.in"
    }
   ],
   "tags": [
    "design",
    "fashion",
    "bdes",
    "national"
   ]
  },
  {
   "id": "uceed",
   "name": "UCEED",
   "category": "college",
   "oneLiner": "IIT Bombay-run entrance for B.Des at IIT Bombay, Delhi, Guwahati, Hyderabad, Roorkee and other institutes; any 12th stream can apply.",
   "ageMin": null,
   "ageMax": 25,
   "minEducation": "12th",
   "feeINR": 4000,
   "benefit": null,
   "window": "typically Oct–Nov (exam in Jan)",
   "windowMonths": [
    10,
    11
   ],
   "nextExpected": "Oct–Nov 2026 (expected)",
   "frequency": "annual",
   "official": "https://www.uceed.iitb.ac.in",
   "resources": [
    {
     "label": "CEED (the PG design entrance run by the same IIT Bombay office)",
     "url": "https://www.ceed.iitb.ac.in"
    }
   ],
   "tags": [
    "design",
    "bdes",
    "iit",
    "national"
   ]
  },
  {
   "id": "bitsat",
   "name": "BITSAT",
   "category": "college",
   "oneLiner": "Online entrance for B.E./B.Pharm at BITS Pilani, Goa and Hyderabad; two sessions a year with the better score counted.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 3600,
   "benefit": null,
   "window": "typically Jan–Mar (Session 1) and Apr–May (Session 2)",
   "windowMonths": [
    1,
    2,
    3,
    4,
    5
   ],
   "nextExpected": "Jan–Mar 2027 (expected)",
   "frequency": "biannual",
   "official": "https://www.bitsadmission.com",
   "resources": [
    {
     "label": "BITS Pilani",
     "url": "https://www.bits-pilani.ac.in"
    }
   ],
   "tags": [
    "engineering",
    "private-university",
    "btech"
   ]
  },
  {
   "id": "viteee",
   "name": "VITEEE",
   "category": "college",
   "oneLiner": "VIT's own entrance for B.Tech at its Vellore, Chennai, Amaravati (AP) and Bhopal campuses.",
   "ageMin": null,
   "ageMax": 22,
   "minEducation": "12th",
   "feeINR": 1350,
   "benefit": null,
   "window": "typically Nov–Mar (exam in Apr)",
   "windowMonths": [
    11,
    12,
    1,
    2,
    3
   ],
   "nextExpected": "Nov 2026 (expected)",
   "frequency": "annual",
   "official": "https://viteee.vit.ac.in",
   "resources": [
    {
     "label": "VIT",
     "url": "https://vit.ac.in"
    }
   ],
   "tags": [
    "engineering",
    "private-university",
    "btech"
   ]
  },
  {
   "id": "srmjeee",
   "name": "SRMJEEE",
   "category": "college",
   "oneLiner": "SRM Institute of Science and Technology's entrance for B.Tech across its campuses; held in multiple phases from spring.",
   "ageMin": null,
   "ageMax": 21,
   "minEducation": "12th",
   "feeINR": 1400,
   "benefit": null,
   "window": "typically Nov–Apr across multiple phases",
   "windowMonths": [
    11,
    12,
    1,
    2,
    3,
    4
   ],
   "nextExpected": "Nov 2026 (expected)",
   "frequency": "multiple",
   "official": "https://www.srmist.edu.in",
   "resources": [
    {
     "label": "SRMJEEE exam tracker (Careers360)",
     "url": "https://engineering.careers360.com/exams/srmjeee"
    }
   ],
   "tags": [
    "engineering",
    "private-university",
    "btech"
   ]
  },
  {
   "id": "iiser-iat",
   "name": "IISER Aptitude Test (IAT)",
   "category": "college",
   "oneLiner": "Single aptitude test for the 5-year BS-MS research programme at all seven IISERs (Pune, Kolkata, Mohali, Bhopal, TVM, Tirupati, Berhampur).",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 2000,
   "benefit": null,
   "window": "typically Mar–Apr (exam in May–Jun)",
   "windowMonths": [
    3,
    4
   ],
   "nextExpected": "Mar–Apr 2027 (expected)",
   "frequency": "annual",
   "official": "https://www.iiseradmission.in",
   "resources": [
    {
     "label": "NCERT textbooks (core syllabus)",
     "url": "https://ncert.nic.in"
    }
   ],
   "tags": [
    "science",
    "research",
    "bs-ms",
    "national"
   ]
  },
  {
   "id": "nest",
   "name": "NEST (National Entrance Screening Test)",
   "category": "college",
   "oneLiner": "Entrance for the 5-year integrated MSc at NISER Bhubaneswar and CEBS Mumbai; admitted students receive the INSPIRE scholarship.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 1400,
   "benefit": "Rs 60,000/yr INSPIRE scholarship if admitted",
   "window": "typically Feb–May (exam in Jun)",
   "windowMonths": [
    2,
    3,
    4,
    5
   ],
   "nextExpected": "Feb–May 2027 (expected)",
   "frequency": "annual",
   "official": "https://www.nestexam.in",
   "resources": [
    {
     "label": "NISER Bhubaneswar",
     "url": "https://www.niser.ac.in"
    }
   ],
   "tags": [
    "science",
    "research",
    "msc",
    "national"
   ]
  },
  {
   "id": "icar-aieea-pg",
   "name": "ICAR AIEEA (PG)",
   "category": "college",
   "oneLiner": "NTA-run all-India entrance for Master's seats in agricultural universities. Note: UG agriculture admissions now run through CUET (ICAR-UG), not a separate AIEEA.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": null,
   "benefit": null,
   "window": "typically May–Jun (exam in Jul)",
   "windowMonths": [
    5,
    6
   ],
   "nextExpected": "May–Jun 2027 (expected)",
   "frequency": "annual",
   "official": "https://exams.nta.nic.in/icar/",
   "resources": [
    {
     "label": "ICAR (Indian Council of Agricultural Research)",
     "url": "https://icar.org.in"
    }
   ],
   "tags": [
    "agriculture",
    "pg",
    "masters",
    "national",
    "nta"
   ]
  },
  {
   "id": "mht-cet",
   "name": "MHT CET",
   "category": "college",
   "oneLiner": "Maharashtra's CET for engineering and pharmacy admission in state colleges, including COEP Pune and VJTI Mumbai; open to non-Maharashtra students too.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 1000,
   "benefit": null,
   "window": "typically Dec–Feb (exam in Apr–May)",
   "windowMonths": [
    12,
    1,
    2
   ],
   "nextExpected": "Dec 2026 – Feb 2027 (expected)",
   "frequency": "annual",
   "official": "https://cetcell.mahacet.org",
   "resources": [
    {
     "label": "Maharashtra State CET Cell",
     "url": "https://mahacet.org"
    }
   ],
   "tags": [
    "engineering",
    "pharmacy",
    "state-exam",
    "maharashtra"
   ]
  },
  {
   "id": "kcet",
   "name": "KCET (Karnataka CET)",
   "category": "college",
   "oneLiner": "Karnataka Examinations Authority's CET for engineering, pharmacy and farm-science seats in government and private colleges of the state.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 500,
   "benefit": null,
   "window": "typically Jan–Feb (exam in Apr)",
   "windowMonths": [
    1,
    2
   ],
   "nextExpected": "Jan–Feb 2027 (expected)",
   "frequency": "annual",
   "official": "https://cetonline.karnataka.gov.in",
   "resources": [
    {
     "label": "KEA (Karnataka Examinations Authority)",
     "url": "https://kea.kar.nic.in"
    },
    {
     "label": "KCET exam tracker (Shiksha)",
     "url": "https://www.shiksha.com/engineering/kcet-exam"
    }
   ],
   "tags": [
    "engineering",
    "pharmacy",
    "state-exam",
    "karnataka"
   ]
  },
  {
   "id": "comedk-uget",
   "name": "COMEDK UGET",
   "category": "college",
   "oneLiner": "Entrance for ~190 private engineering colleges in Karnataka (RVCE, BMS, MSRIT and others); open to students from any state.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 1950,
   "benefit": null,
   "window": "typically Feb–Mar (exam in May)",
   "windowMonths": [
    2,
    3
   ],
   "nextExpected": "Feb–Mar 2027 (expected)",
   "frequency": "annual",
   "official": "https://www.comedk.org",
   "resources": [
    {
     "label": "COMEDK UGET exam tracker (Careers360)",
     "url": "https://engineering.careers360.com/exams/comedk-uget"
    }
   ],
   "tags": [
    "engineering",
    "private-college",
    "karnataka",
    "btech"
   ]
  },
  {
   "id": "wbjee",
   "name": "WBJEE",
   "category": "college",
   "oneLiner": "West Bengal's joint entrance for engineering and pharmacy seats, including Jadavpur University; conducted by the WBJEE Board.",
   "ageMin": 17,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 500,
   "benefit": null,
   "window": "typically Dec–Feb (exam in Apr)",
   "windowMonths": [
    12,
    1,
    2
   ],
   "nextExpected": "Dec 2026 – Feb 2027 (expected)",
   "frequency": "annual",
   "official": "https://wbjeeb.nic.in",
   "resources": [
    {
     "label": "WBJEE exam tracker (Careers360)",
     "url": "https://engineering.careers360.com/exams/wbjee"
    }
   ],
   "tags": [
    "engineering",
    "pharmacy",
    "state-exam",
    "west-bengal"
   ]
  },
  {
   "id": "ap-eapcet",
   "name": "AP EAPCET",
   "category": "college",
   "oneLiner": "Andhra Pradesh's CET for engineering, agriculture and pharmacy seats in state universities and affiliated colleges, conducted for APSCHE.",
   "ageMin": 16,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 600,
   "benefit": null,
   "window": "typically Mar–Apr (exam in May)",
   "windowMonths": [
    3,
    4
   ],
   "nextExpected": "Mar–Apr 2027 (expected)",
   "frequency": "annual",
   "official": "https://cets.apsche.ap.gov.in",
   "resources": [
    {
     "label": "APSCHE",
     "url": "https://apsche.ap.gov.in"
    }
   ],
   "tags": [
    "engineering",
    "agriculture",
    "pharmacy",
    "state-exam",
    "andhra-pradesh"
   ]
  },
  {
   "id": "tg-eapcet",
   "name": "TG EAPCET (formerly TS EAMCET)",
   "category": "college",
   "oneLiner": "Telangana's CET for engineering, agriculture and pharmacy seats, including JNTU Hyderabad and Osmania University colleges.",
   "ageMin": 16,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 900,
   "benefit": null,
   "window": "typically Feb–Apr (exam in May)",
   "windowMonths": [
    2,
    3,
    4
   ],
   "nextExpected": "Feb–Apr 2027 (expected)",
   "frequency": "annual",
   "official": "https://eapcet.tgche.ac.in",
   "resources": [
    {
     "label": "Telangana Council of Higher Education",
     "url": "https://tgche.ac.in"
    }
   ],
   "tags": [
    "engineering",
    "agriculture",
    "pharmacy",
    "state-exam",
    "telangana"
   ]
  },
  {
   "id": "upsc-cse",
   "name": "UPSC Civil Services Examination (IAS/IPS/IFS)",
   "category": "gov-job",
   "oneLiner": "India's top government recruitment: three-stage exam (Prelims, Mains, Interview) for IAS, IPS, IFS and 20+ central services.",
   "ageMin": 21,
   "ageMax": 32,
   "minEducation": "ug",
   "feeINR": 100,
   "benefit": "Rs 56,100 starting basic (Level 10) plus allowances",
   "window": "typically Jan–Feb (notification mid-Jan, ~3 weeks to apply)",
   "windowMonths": [
    1,
    2
   ],
   "nextExpected": "13 Jan 2027 (per UPSC calendar)",
   "frequency": "annual",
   "official": "https://upsc.gov.in",
   "resources": [
    {
     "label": "UPSC online application portal (OTR)",
     "url": "https://upsconline.gov.in"
    },
    {
     "label": "Free NCERT textbooks (core foundation)",
     "url": "https://ncert.nic.in"
    }
   ],
   "tags": [
    "upsc",
    "civil-services",
    "ias",
    "ips",
    "6-attempts-general",
    "prelims-mains-interview"
   ]
  },
  {
   "id": "upsc-ese",
   "name": "UPSC Engineering Services Examination (ESE/IES)",
   "category": "gov-job",
   "oneLiner": "Group A engineering officer posts in railways, CPWD, defence and other central departments; for Civil, Mechanical, Electrical, E&T graduates.",
   "ageMin": 21,
   "ageMax": 30,
   "minEducation": "ug",
   "feeINR": 200,
   "benefit": "Rs 56,100 starting basic (Level 10) plus allowances",
   "window": "typically Sep–Oct (notification ~Sep for next year's exam)",
   "windowMonths": [
    9,
    10
   ],
   "nextExpected": "Sep 2026 (expected, ESE 2027)",
   "frequency": "annual",
   "official": "https://upsc.gov.in",
   "resources": [
    {
     "label": "UPSC online application portal",
     "url": "https://upsconline.gov.in"
    },
    {
     "label": "NPTEL free engineering courses",
     "url": "https://nptel.ac.in"
    }
   ],
   "tags": [
    "upsc",
    "engineering",
    "group-a",
    "railways",
    "cpwd"
   ]
  },
  {
   "id": "upsc-cds",
   "name": "UPSC Combined Defence Services (CDS)",
   "category": "gov-job",
   "oneLiner": "Graduate entry to IMA, Naval and Air Force academies (unmarried, ~19-24) and OTA short-service (up to 25); written exam plus SSB interview.",
   "ageMin": 19,
   "ageMax": 25,
   "minEducation": "ug",
   "feeINR": 200,
   "benefit": "Rs 56,100 basic on commissioning as Lieutenant (stipend during training)",
   "window": "twice a year: typically Dec–Jan (CDS I) and May–Jun (CDS II)",
   "windowMonths": [
    12,
    1,
    5,
    6
   ],
   "nextExpected": "Dec 2026 (expected, CDS I 2027)",
   "frequency": "biannual",
   "official": "https://upsc.gov.in",
   "resources": [
    {
     "label": "UPSC online application portal",
     "url": "https://upsconline.gov.in"
    },
    {
     "label": "Join Indian Army (SSB and entry details)",
     "url": "https://joinindianarmy.nic.in"
    }
   ],
   "tags": [
    "defence",
    "army",
    "navy",
    "airforce",
    "ssb",
    "unmarried"
   ]
  },
  {
   "id": "upsc-nda",
   "name": "UPSC NDA & NA Examination",
   "category": "gov-job",
   "oneLiner": "After-12th entry to the National Defence Academy and Naval Academy for a military career plus a degree; unmarried candidates aged 16.5-19.5.",
   "ageMin": 16.5,
   "ageMax": 19.5,
   "minEducation": "12th",
   "feeINR": 100,
   "benefit": "Full training with degree; Rs 56,100 basic on commissioning",
   "window": "twice a year: typically Dec–Jan (NDA I) and May–Jun (NDA II)",
   "windowMonths": [
    12,
    1,
    5,
    6
   ],
   "nextExpected": "Dec 2026 (expected, NDA I 2027)",
   "frequency": "biannual",
   "official": "https://upsc.gov.in",
   "resources": [
    {
     "label": "UPSC online application portal",
     "url": "https://upsconline.gov.in"
    },
    {
     "label": "Free NCERT textbooks (maths + GAT base)",
     "url": "https://ncert.nic.in"
    }
   ],
   "tags": [
    "defence",
    "after-12th",
    "nda",
    "ssb",
    "unmarried",
    "12th-pcm-for-navy-airforce"
   ]
  },
  {
   "id": "upsc-capf-ac",
   "name": "UPSC CAPF Assistant Commandant",
   "category": "gov-job",
   "oneLiner": "Direct officer (Assistant Commandant) entry into BSF, CRPF, CISF, ITBP and SSB via written exam, physical tests and interview.",
   "ageMin": 20,
   "ageMax": 25,
   "minEducation": "ug",
   "feeINR": 200,
   "benefit": "Rs 56,100 starting basic (Level 10) plus force allowances",
   "window": "typically Mar (notification early Mar, ~3 weeks to apply)",
   "windowMonths": [
    3
   ],
   "nextExpected": "Mar 2027 (expected)",
   "frequency": "annual",
   "official": "https://upsc.gov.in",
   "resources": [
    {
     "label": "UPSC online application portal",
     "url": "https://upsconline.gov.in"
    }
   ],
   "tags": [
    "paramilitary",
    "bsf",
    "crpf",
    "cisf",
    "physical-standards",
    "uniformed-officer"
   ]
  },
  {
   "id": "ssc-cgl",
   "name": "SSC Combined Graduate Level (CGL)",
   "category": "gov-job",
   "oneLiner": "Biggest graduate-level recruitment for central govt Group B/C posts: income tax inspector, ASO, auditor, excise, statistics and more.",
   "ageMin": 18,
   "ageMax": 32,
   "minEducation": "ug",
   "feeINR": 100,
   "benefit": "Rs 25,500–44,900 starting basic depending on post (Level 4–7)",
   "window": "typically May–Jun (2026: 21 May–25 Jun per SSC calendar)",
   "windowMonths": [
    5,
    6
   ],
   "nextExpected": "May 2027 (expected)",
   "frequency": "annual",
   "official": "https://ssc.gov.in",
   "resources": [
    {
     "label": "SSC annual exam calendar (Latest News section)",
     "url": "https://ssc.gov.in"
    },
    {
     "label": "Khan Academy free maths practice",
     "url": "https://www.khanacademy.org"
    }
   ],
   "tags": [
    "ssc",
    "graduate",
    "income-tax-inspector",
    "aso",
    "age-limit-varies-by-post"
   ]
  },
  {
   "id": "ssc-chsl",
   "name": "SSC Combined Higher Secondary Level (CHSL)",
   "category": "gov-job",
   "oneLiner": "12th-pass recruitment for LDC, junior secretariat assistant and data entry operator posts in central government offices.",
   "ageMin": 18,
   "ageMax": 27,
   "minEducation": "12th",
   "feeINR": 100,
   "benefit": "Rs 19,900–25,500 starting basic (Level 2–4)",
   "window": "per SSC calendar Apr–May; 2026 cycle running late",
   "windowMonths": [
    4,
    5
   ],
   "nextExpected": "2026 cycle notification awaited; watch ssc.gov.in (expected)",
   "frequency": "annual",
   "official": "https://ssc.gov.in",
   "resources": [
    {
     "label": "SSC annual exam calendar (Latest News section)",
     "url": "https://ssc.gov.in"
    }
   ],
   "tags": [
    "ssc",
    "12th-pass",
    "ldc",
    "deo",
    "clerical"
   ]
  },
  {
   "id": "ssc-mts",
   "name": "SSC Multi-Tasking Staff (MTS) & Havaldar",
   "category": "gov-job",
   "oneLiner": "10th-pass entry to central government Group C support posts and Havaldar in CBIC/CBN; the most accessible SSC exam.",
   "ageMin": 18,
   "ageMax": 25,
   "minEducation": "10th",
   "feeINR": 100,
   "benefit": "Rs 18,000 starting basic (Level 1) plus allowances",
   "window": "typically Jun–Jul (2026: 30 Jun–31 Jul)",
   "windowMonths": [
    6,
    7
   ],
   "nextExpected": "Jun 2027 (expected)",
   "frequency": "annual",
   "official": "https://ssc.gov.in",
   "resources": [
    {
     "label": "SSC annual exam calendar (Latest News section)",
     "url": "https://ssc.gov.in"
    }
   ],
   "tags": [
    "ssc",
    "10th-pass",
    "group-c",
    "havaldar-upto-27"
   ]
  },
  {
   "id": "ssc-gd-constable",
   "name": "SSC GD Constable (CAPFs, SSF, Assam Rifles)",
   "category": "gov-job",
   "oneLiner": "10th-pass recruitment of constables for BSF, CISF, CRPF, SSB, ITBP, Assam Rifles and SSF; CBT plus physical and medical tests.",
   "ageMin": 18,
   "ageMax": 23,
   "minEducation": "10th",
   "feeINR": 100,
   "benefit": "Rs 21,700 starting basic (Level 3) plus force allowances",
   "window": "typically Sep–Oct (2026 notification due Sep per SSC calendar)",
   "windowMonths": [
    9,
    10
   ],
   "nextExpected": "Sep 2026 (per SSC calendar)",
   "frequency": "annual",
   "official": "https://ssc.gov.in",
   "resources": [
    {
     "label": "SSC annual exam calendar (Latest News section)",
     "url": "https://ssc.gov.in"
    }
   ],
   "tags": [
    "ssc",
    "10th-pass",
    "constable",
    "paramilitary",
    "physical-test",
    "huge-vacancies"
   ]
  },
  {
   "id": "ssc-je",
   "name": "SSC Junior Engineer (JE)",
   "category": "gov-job",
   "oneLiner": "Junior Engineer (Civil/Mechanical/Electrical) posts in CPWD, MES, CWC and other central departments; diploma or degree in engineering.",
   "ageMin": 18,
   "ageMax": 32,
   "minEducation": "diploma",
   "feeINR": 100,
   "benefit": "Rs 35,400 starting basic (Level 6)",
   "window": "per SSC calendar Mar–Apr (upper age 30 or 32 depending on post)",
   "windowMonths": [
    3,
    4
   ],
   "nextExpected": "Mar 2027 (expected)",
   "frequency": "annual",
   "official": "https://ssc.gov.in",
   "resources": [
    {
     "label": "SSC annual exam calendar (Latest News section)",
     "url": "https://ssc.gov.in"
    },
    {
     "label": "NPTEL free engineering courses",
     "url": "https://nptel.ac.in"
    }
   ],
   "tags": [
    "ssc",
    "engineering",
    "diploma-eligible",
    "cpwd",
    "junior-engineer"
   ]
  },
  {
   "id": "ibps-po",
   "name": "IBPS PO/MT (CRP for Public Sector Banks)",
   "category": "gov-job",
   "oneLiner": "Common recruitment for Probationary Officers across 11 public sector banks (except SBI); Prelims, Mains and interview.",
   "ageMin": 20,
   "ageMax": 30,
   "minEducation": "ug",
   "feeINR": 850,
   "benefit": "Rs 48,480 starting basic; roughly Rs 80,000–1,00,000/month gross",
   "window": "typically Jun–Jul (2026: 30 Jun–26 Jul)",
   "windowMonths": [
    6,
    7
   ],
   "nextExpected": "Jun 2027 (expected)",
   "frequency": "annual",
   "official": "https://www.ibps.in",
   "resources": [
    {
     "label": "IBPS notifications and CRP calendar",
     "url": "https://www.ibps.in"
    }
   ],
   "tags": [
    "banking",
    "po",
    "public-sector-banks",
    "prelims-mains-interview"
   ]
  },
  {
   "id": "ibps-clerk",
   "name": "IBPS Clerk (Customer Service Associate)",
   "category": "gov-job",
   "oneLiner": "Common recruitment for clerical/customer service associate posts in public sector banks; no interview, Mains score decides.",
   "ageMin": 20,
   "ageMax": 28,
   "minEducation": "ug",
   "feeINR": 850,
   "benefit": "Rs 24,050 starting basic plus allowances",
   "window": "typically Jul (alongside or just after IBPS PO)",
   "windowMonths": [
    7
   ],
   "nextExpected": "Jul 2027 (expected)",
   "frequency": "annual",
   "official": "https://www.ibps.in",
   "resources": [
    {
     "label": "IBPS notifications and CRP calendar",
     "url": "https://www.ibps.in"
    }
   ],
   "tags": [
    "banking",
    "clerk",
    "no-interview",
    "state-language-required"
   ]
  },
  {
   "id": "ibps-rrb",
   "name": "IBPS RRB (Regional Rural Banks: Officer & Office Assistant)",
   "category": "gov-job",
   "oneLiner": "Common recruitment for Officer Scale I-III (age 18-30 for Scale I) and Office Assistant (18-28) in 43 Regional Rural Banks.",
   "ageMin": 18,
   "ageMax": 30,
   "minEducation": "ug",
   "feeINR": 850,
   "benefit": "Officer Scale-I starts around Rs 57,000/month gross; Office Assistant lower",
   "window": "typically Jun–Jul",
   "windowMonths": [
    6,
    7
   ],
   "nextExpected": "Jun 2027 (expected)",
   "frequency": "annual",
   "official": "https://www.ibps.in",
   "resources": [
    {
     "label": "IBPS notifications and CRP calendar",
     "url": "https://www.ibps.in"
    }
   ],
   "tags": [
    "banking",
    "rural-banks",
    "local-language-required",
    "officer-and-clerk"
   ]
  },
  {
   "id": "sbi-po",
   "name": "SBI Probationary Officer",
   "category": "gov-job",
   "oneLiner": "State Bank of India's own PO recruitment, the most sought-after bank officer job; Prelims, Mains, psychometric test and interview.",
   "ageMin": 21,
   "ageMax": 30,
   "minEducation": "ug",
   "feeINR": 750,
   "benefit": "Rs 48,480 starting basic with advance increments; among the best-paying PSU bank jobs",
   "window": "recently Jun–Jul (2026: 18 Jun–8 Jul); has moved around in past years",
   "windowMonths": [
    6,
    7
   ],
   "nextExpected": "Jun 2027 (expected)",
   "frequency": "annual",
   "official": "https://sbi.co.in/web/careers",
   "resources": [
    {
     "label": "SBI careers current openings",
     "url": "https://sbi.co.in/web/careers"
    }
   ],
   "tags": [
    "banking",
    "sbi",
    "po",
    "psychometric-test"
   ]
  },
  {
   "id": "sbi-clerk",
   "name": "SBI Clerk (Junior Associate)",
   "category": "gov-job",
   "oneLiner": "Junior Associate (customer support and sales) posts in SBI branches; apply against your state's vacancies, local language test applies.",
   "ageMin": 20,
   "ageMax": 28,
   "minEducation": "ug",
   "feeINR": 750,
   "benefit": "Around Rs 26,000 starting basic; roughly Rs 45,000/month gross",
   "window": "recently Dec–Jan",
   "windowMonths": [
    12,
    1
   ],
   "nextExpected": "Dec 2026 (expected)",
   "frequency": "annual",
   "official": "https://sbi.co.in/web/careers",
   "resources": [
    {
     "label": "SBI careers current openings",
     "url": "https://sbi.co.in/web/careers"
    }
   ],
   "tags": [
    "banking",
    "sbi",
    "clerk",
    "state-wise-vacancies",
    "local-language"
   ]
  },
  {
   "id": "rbi-grade-b",
   "name": "RBI Grade B Officer",
   "category": "gov-job",
   "oneLiner": "Officer entry into India's central bank (General, DEPR, DSIM streams); small vacancy count, very high pay and prestige. Needs 60% in graduation.",
   "ageMin": 21,
   "ageMax": 30,
   "minEducation": "ug",
   "feeINR": 850,
   "benefit": "Rs 55,200 starting basic; around Rs 1.4 lakh/month gross",
   "window": "varies: Apr–May in 2026, Jul in earlier years",
   "windowMonths": [
    4,
    5,
    7
   ],
   "nextExpected": "2027 cycle (expected)",
   "frequency": "annual",
   "official": "https://www.rbi.org.in",
   "resources": [
    {
     "label": "RBI recruitment portal",
     "url": "https://opportunities.rbi.org.in"
    }
   ],
   "tags": [
    "rbi",
    "central-bank",
    "economics",
    "high-salary",
    "60-percent-graduation"
   ]
  },
  {
   "id": "rbi-assistant",
   "name": "RBI Assistant",
   "category": "gov-job",
   "oneLiner": "Clerical-grade posts in RBI offices; graduate with 50% needed. Not run every single year, so apply when a cycle opens.",
   "ageMin": 20,
   "ageMax": 28,
   "minEducation": "ug",
   "feeINR": 450,
   "benefit": "Around Rs 47,000/month gross to start",
   "window": "irregular; 2026 cycle ran 16 Feb–8 Mar",
   "windowMonths": [
    2,
    3
   ],
   "nextExpected": "Feb 2027 (expected, not guaranteed annually)",
   "frequency": "annual",
   "official": "https://www.rbi.org.in",
   "resources": [
    {
     "label": "RBI recruitment portal",
     "url": "https://opportunities.rbi.org.in"
    }
   ],
   "tags": [
    "rbi",
    "clerical",
    "high-pay-for-clerical",
    "irregular-cycle"
   ]
  },
  {
   "id": "rrb-ntpc",
   "name": "RRB NTPC (Non-Technical Popular Categories)",
   "category": "gov-job",
   "oneLiner": "Railway recruitment for station master, goods guard, clerk and typist posts; separate graduate (to age 33) and 12th-pass (to 30) groups.",
   "ageMin": 18,
   "ageMax": 33,
   "minEducation": "12th",
   "feeINR": 500,
   "benefit": "Rs 19,900–35,400 starting basic depending on post (Rs 400 of fee refunded on appearing)",
   "window": "next CEN proposed Aug 2026 in RRB annual calendar (2024 cycle was Sep–Oct)",
   "windowMonths": [
    8,
    9
   ],
   "nextExpected": "Aug 2026 (per RRB annual calendar)",
   "frequency": "annual",
   "official": "https://www.rrbapply.gov.in",
   "resources": [
    {
     "label": "Centralised railway application portal",
     "url": "https://www.rrbapply.gov.in"
    },
    {
     "label": "Indian Railways (RRB calendar and CENs)",
     "url": "https://indianrailways.gov.in"
    }
   ],
   "tags": [
    "railways",
    "station-master",
    "clerk",
    "fee-partly-refunded",
    "annual-calendar-new"
   ]
  },
  {
   "id": "rrb-group-d",
   "name": "RRB Group D (Level 1: Track Maintainer, Helper, Assistant)",
   "category": "gov-job",
   "oneLiner": "Railways' largest recruitment, lakhs of applicants for track maintainer, helper and assistant posts; 10th pass or ITI.",
   "ageMin": 18,
   "ageMax": 33,
   "minEducation": "10th",
   "feeINR": 500,
   "benefit": "Rs 18,000 starting basic (Level 1); Rs 400 of fee refunded on appearing",
   "window": "next CEN proposed Oct 2026 in RRB annual calendar (2025 cycle was Jan–Mar)",
   "windowMonths": [
    10,
    11
   ],
   "nextExpected": "Oct 2026 (per RRB annual calendar)",
   "frequency": "annual",
   "official": "https://www.rrbapply.gov.in",
   "resources": [
    {
     "label": "Centralised railway application portal",
     "url": "https://www.rrbapply.gov.in"
    },
    {
     "label": "Indian Railways (RRB calendar and CENs)",
     "url": "https://indianrailways.gov.in"
    }
   ],
   "tags": [
    "railways",
    "10th-pass",
    "massive-vacancies",
    "physical-efficiency-test"
   ]
  },
  {
   "id": "rrb-alp",
   "name": "RRB Assistant Loco Pilot (ALP)",
   "category": "gov-job",
   "oneLiner": "Assistant Loco Pilot (train driver track) recruitment; needs 10th plus ITI/diploma in a relevant trade and strict medical (A1 vision).",
   "ageMin": 18,
   "ageMax": 30,
   "minEducation": "10th",
   "feeINR": 500,
   "benefit": "Rs 19,900 starting basic (Level 2) plus running allowances",
   "window": "recent CENs opened Feb–Apr; next per RRB annual calendar",
   "windowMonths": [
    2,
    3,
    4
   ],
   "nextExpected": "Feb 2027 (expected)",
   "frequency": "annual",
   "official": "https://www.rrbapply.gov.in",
   "resources": [
    {
     "label": "Centralised railway application portal",
     "url": "https://www.rrbapply.gov.in"
    },
    {
     "label": "Indian Railways (RRB calendar and CENs)",
     "url": "https://indianrailways.gov.in"
    }
   ],
   "tags": [
    "railways",
    "loco-pilot",
    "iti-required",
    "a1-medical",
    "aptitude-test"
   ]
  },
  {
   "id": "lic-aao",
   "name": "LIC Assistant Administrative Officer (AAO)",
   "category": "gov-job",
   "oneLiner": "Officer entry into Life Insurance Corporation (Generalist and Specialist streams); Prelims, Mains and interview.",
   "ageMin": 21,
   "ageMax": 30,
   "minEducation": "ug",
   "feeINR": 700,
   "benefit": "Rs 88,635 starting basic; around Rs 1.25 lakh/month gross in metro cities",
   "window": "recently Aug–Sep (2025: 16 Aug–9 Sep); cycles not strictly annual",
   "windowMonths": [
    8,
    9
   ],
   "nextExpected": "Aug 2026 (expected)",
   "frequency": "annual",
   "official": "https://licindia.in",
   "resources": [
    {
     "label": "LIC official site (careers section)",
     "url": "https://licindia.in"
    }
   ],
   "tags": [
    "insurance",
    "psu",
    "officer",
    "high-salary"
   ]
  },
  {
   "id": "agniveer-army",
   "name": "Indian Army Agniveer (Agnipath)",
   "category": "gov-job",
   "oneLiner": "4-year soldier entry (GD, Technical, Clerk, Tradesman) via online CEE then physical and medical; up to 25% retained permanently.",
   "ageMin": 17.5,
   "ageMax": 21,
   "minEducation": "10th",
   "feeINR": 250,
   "benefit": "Rs 30,000/month first-year package plus Rs 10.04 lakh Seva Nidhi on exit",
   "window": "typically Feb–Apr (2026: 13 Feb–10 Apr)",
   "windowMonths": [
    2,
    3,
    4
   ],
   "nextExpected": "Feb 2027 (expected)",
   "frequency": "annual",
   "official": "https://joinindianarmy.nic.in",
   "resources": [
    {
     "label": "Join Indian Army portal (notifications, CEE)",
     "url": "https://joinindianarmy.nic.in"
    }
   ],
   "tags": [
    "defence",
    "agnipath",
    "4-year-tenure",
    "physical-test",
    "unmarried"
   ]
  },
  {
   "id": "agniveer-airforce",
   "name": "Indian Air Force Agniveervayu",
   "category": "gov-job",
   "oneLiner": "4-year airmen-equivalent entry to the IAF; needs 12th with PCM 50% (science) or 12th/diploma for non-science trades. Two intakes a year.",
   "ageMin": 17.5,
   "ageMax": 21,
   "minEducation": "12th",
   "feeINR": 550,
   "benefit": "Rs 30,000/month first-year package plus Rs 10.04 lakh Seva Nidhi on exit",
   "window": "twice a year, typically Jan and Jul (Intake 02/2027 ran 6–26 Jul 2026)",
   "windowMonths": [
    1,
    7
   ],
   "nextExpected": "Jan 2027 (expected, Intake 01/2028)",
   "frequency": "biannual",
   "official": "https://agnipathvayu.cdac.in",
   "resources": [
    {
     "label": "CASB Agniveervayu portal",
     "url": "https://agnipathvayu.cdac.in"
    }
   ],
   "tags": [
    "defence",
    "airforce",
    "agnipath",
    "4-year-tenure",
    "women-eligible"
   ]
  },
  {
   "id": "agniveer-navy",
   "name": "Indian Navy Agniveer (SSR / MR)",
   "category": "gov-job",
   "oneLiner": "4-year sailor entry: SSR needs 12th with maths+physics, MR needs 10th; INET written test then PFT and medicals. Open to women.",
   "ageMin": 17.5,
   "ageMax": 21,
   "minEducation": "10th",
   "feeINR": 550,
   "benefit": "Rs 30,000/month first-year package plus Rs 10.04 lakh Seva Nidhi on exit",
   "window": "recently one Mar–Apr window covering both yearly batches (2026: 14 Mar–6 Apr)",
   "windowMonths": [
    3,
    4
   ],
   "nextExpected": "Early 2027 (expected)",
   "frequency": "annual",
   "official": "https://www.joinindiannavy.gov.in",
   "resources": [
    {
     "label": "Join Indian Navy portal",
     "url": "https://www.joinindiannavy.gov.in"
    }
   ],
   "tags": [
    "defence",
    "navy",
    "agnipath",
    "4-year-tenure",
    "women-eligible"
   ]
  },
  {
   "id": "isro-icrb",
   "name": "ISRO Scientist/Engineer 'SC' (ICRB)",
   "category": "gov-job",
   "oneLiner": "Entry-level scientist/engineer posts across ISRO centres; BE/BTech with 65% required, recent cycles shortlist via GATE score plus interview.",
   "ageMin": 18,
   "ageMax": 28,
   "minEducation": "ug",
   "feeINR": 750,
   "benefit": "Rs 56,100 starting basic (Level 10); part of fee refunded on appearing",
   "window": "irregular, watch ISRO careers (2026 cycle: 28 Jul–17 Aug)",
   "windowMonths": [
    7,
    8
   ],
   "nextExpected": "Mid-2027 (expected)",
   "frequency": "annual",
   "official": "https://www.isro.gov.in",
   "resources": [
    {
     "label": "ISRO careers page",
     "url": "https://www.isro.gov.in"
    },
    {
     "label": "GATE 2027 (score now used for shortlisting)",
     "url": "https://gate2027.iitm.ac.in"
    }
   ],
   "tags": [
    "space",
    "scientist",
    "gate-score-based",
    "65-percent-required",
    "prestige"
   ]
  },
  {
   "id": "ctet",
   "name": "CTET (Central Teacher Eligibility Test)",
   "category": "gov-job",
   "oneLiner": "CBSE-run eligibility test to teach Classes 1-8 in KVS, NVS and other central schools; needs D.El.Ed/B.Ed-type training, certificate valid lifetime.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 1000,
   "benefit": null,
   "window": "recently Nov–Dec (Feb 2026 exam applied 27 Nov–18 Dec 2025)",
   "windowMonths": [
    11,
    12
   ],
   "nextExpected": "Nov 2026 (expected)",
   "frequency": "annual",
   "official": "https://ctet.nic.in",
   "resources": [
    {
     "label": "CTET official portal (notification, syllabus)",
     "url": "https://ctet.nic.in"
    },
    {
     "label": "Free NCERT textbooks (content base)",
     "url": "https://ncert.nic.in"
    }
   ],
   "tags": [
    "teaching",
    "eligibility-test",
    "no-age-limit",
    "rs-1200-for-both-papers",
    "lifetime-validity"
   ]
  },
  {
   "id": "ugc-net",
   "name": "UGC-NET (Assistant Professor & JRF)",
   "category": "gov-job",
   "oneLiner": "NTA test qualifying you for Assistant Professor posts (no age limit) and JRF fellowships (under 30); needs Master's with 55%, also gates PhD entry.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "pg",
   "feeINR": 1150,
   "benefit": "JRF: Rs 37,000/month fellowship for 2 years (then Rs 42,000 as SRF)",
   "window": "twice a year: roughly Mar–Apr (June cycle) and Oct–Nov (Dec cycle)",
   "windowMonths": [
    3,
    4,
    10,
    11
   ],
   "nextExpected": "Oct 2026 (expected, Dec 2026 cycle)",
   "frequency": "biannual",
   "official": "https://ugcnet.nta.ac.in",
   "resources": [
    {
     "label": "NTA (all notifications)",
     "url": "https://www.nta.ac.in"
    },
    {
     "label": "e-PG Pathshala free PG courseware",
     "url": "https://epgp.inflibnet.ac.in"
    }
   ],
   "tags": [
    "academia",
    "jrf-under-30",
    "assistant-professor-no-age-limit",
    "phd-entry",
    "masters-55-percent"
   ]
  },
  {
   "id": "uppsc-pcs",
   "name": "UPPSC PCS (UP Combined State/Upper Subordinate)",
   "category": "gov-job",
   "oneLiner": "India's biggest state civil services exam (SDM, DSP, BDO and more in Uttar Pradesh); every state PSC runs a similar PCS-pattern exam.",
   "ageMin": 21,
   "ageMax": 40,
   "minEducation": "ug",
   "feeINR": 125,
   "benefit": "Rs 56,100 starting basic (Level 10) for SDM/DSP-tier posts",
   "window": "varies by year (2026: 25 Jun–3 Aug)",
   "windowMonths": [
    6,
    7,
    8
   ],
   "nextExpected": "2027 cycle (expected)",
   "frequency": "annual",
   "official": "https://uppsc.up.nic.in",
   "resources": [
    {
     "label": "UPPSC notifications and online applications",
     "url": "https://uppsc.up.nic.in"
    },
    {
     "label": "Free NCERT textbooks (GS foundation)",
     "url": "https://ncert.nic.in"
    }
   ],
   "tags": [
    "state-psc",
    "uttar-pradesh",
    "sdm",
    "dsp",
    "age-limit-40",
    "check-your-state-psc"
   ]
  },
  {
   "id": "csss-central-sector",
   "name": "Central Sector Scheme of Scholarship (CSSS) for College & University Students",
   "category": "scholarship",
   "oneLiner": "Merit scholarship for students above the 80th percentile in class 12 boards pursuing regular UG/PG courses; applied via the National Scholarship Portal.",
   "ageMin": 18,
   "ageMax": 25,
   "minEducation": "12th",
   "feeINR": 0,
   "benefit": "Rs 12,000/yr (UG yrs 1-3), Rs 20,000/yr after",
   "window": "typically Jun–Oct (NSP fresh + renewal window)",
   "windowMonths": [
    6,
    7,
    8,
    9,
    10
   ],
   "nextExpected": "open Jun–Oct 2026 (expected)",
   "frequency": "annual",
   "official": "https://scholarships.gov.in",
   "resources": [
    {
     "label": "National Scholarship Portal",
     "url": "https://scholarships.gov.in"
    },
    {
     "label": "Dept of Higher Education (scheme owner)",
     "url": "https://www.education.gov.in"
    },
    {
     "label": "Buddy4Study CSSS guide",
     "url": "https://www.buddy4study.com/article/central-sector-scholarship"
    }
   ],
   "tags": [
    "merit-based",
    "nsp",
    "ug",
    "pg",
    "government",
    "income-below-4.5L"
   ]
  },
  {
   "id": "nmms",
   "name": "National Means-cum-Merit Scholarship (NMMS)",
   "category": "scholarship",
   "oneLiner": "For class 8 students from families earning under Rs 3.5 lakh: clear the state NMMS exam to get Rs 12,000/yr through classes 9-12 in government schools.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "Rs 12,000/yr for classes 9-12",
   "window": "typically Aug–Nov (state exam registration; renewals on NSP)",
   "windowMonths": [
    8,
    9,
    10,
    11
   ],
   "nextExpected": "Aug–Nov 2026 (state windows, expected)",
   "frequency": "annual",
   "official": "https://scholarships.gov.in",
   "resources": [
    {
     "label": "Dept of School Education & Literacy",
     "url": "https://dsel.education.gov.in"
    },
    {
     "label": "National Scholarship Portal",
     "url": "https://scholarships.gov.in"
    }
   ],
   "tags": [
    "school",
    "class-8",
    "merit-cum-means",
    "government",
    "exam-based",
    "nsp"
   ]
  },
  {
   "id": "post-matric-sc",
   "name": "Post-Matric Scholarship for SC Students",
   "category": "scholarship",
   "oneLiner": "Fully funds education from class 11 up to PhD for SC students with family income under Rs 2.5 lakh: fees reimbursed plus an academic allowance.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "10th",
   "feeINR": 0,
   "benefit": "full fee reimbursement + Rs 2,300-13,500/yr allowance",
   "window": "typically Jul–Oct (NSP / state scholarship portals)",
   "windowMonths": [
    7,
    8,
    9,
    10
   ],
   "nextExpected": "Jul–Oct 2026 (expected)",
   "frequency": "annual",
   "official": "https://scholarships.gov.in",
   "resources": [
    {
     "label": "Dept of Social Justice — scheme page",
     "url": "https://socialjustice.gov.in"
    },
    {
     "label": "National Scholarship Portal",
     "url": "https://scholarships.gov.in"
    }
   ],
   "tags": [
    "sc",
    "need-based",
    "school",
    "ug",
    "pg",
    "government",
    "nsp"
   ]
  },
  {
   "id": "post-matric-minorities",
   "name": "Post-Matric Scholarship for Minority Students",
   "category": "scholarship",
   "oneLiner": "Ministry of Minority Affairs scholarship for class 11 to PhD students from notified minority communities with family income under Rs 2 lakh.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "10th",
   "feeINR": 0,
   "benefit": "course fee up to Rs 7,000/yr + maintenance allowance",
   "window": "typically Jun–Oct (NSP)",
   "windowMonths": [
    6,
    7,
    8,
    9,
    10
   ],
   "nextExpected": "Jun–Oct 2026 (expected)",
   "frequency": "annual",
   "official": "https://scholarships.gov.in",
   "resources": [
    {
     "label": "Ministry of Minority Affairs",
     "url": "https://www.minorityaffairs.gov.in"
    },
    {
     "label": "National Scholarship Portal",
     "url": "https://scholarships.gov.in"
    }
   ],
   "tags": [
    "minority",
    "need-based",
    "school",
    "ug",
    "pg",
    "government",
    "nsp"
   ]
  },
  {
   "id": "aicte-pragati",
   "name": "AICTE Pragati Scholarship for Girls",
   "category": "scholarship",
   "oneLiner": "Rs 50,000/yr for girl students (up to two per family) in AICTE-approved diploma or degree technical courses; family income under Rs 8 lakh.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "10th",
   "feeINR": 0,
   "benefit": "Rs 50,000/yr",
   "window": "typically Jun–Oct (NSP)",
   "windowMonths": [
    6,
    7,
    8,
    9,
    10
   ],
   "nextExpected": "Jun–Oct 2026 (expected)",
   "frequency": "annual",
   "official": "https://www.aicte-india.org",
   "resources": [
    {
     "label": "National Scholarship Portal (apply here)",
     "url": "https://scholarships.gov.in"
    },
    {
     "label": "AICTE student schemes",
     "url": "https://www.aicte-india.org"
    }
   ],
   "tags": [
    "girls",
    "engineering",
    "diploma",
    "technical",
    "government",
    "nsp"
   ]
  },
  {
   "id": "aicte-saksham",
   "name": "AICTE Saksham Scholarship for Differently-Abled Students",
   "category": "scholarship",
   "oneLiner": "Rs 50,000/yr for students with 40%+ disability in AICTE-approved diploma or degree technical courses; family income under Rs 8 lakh.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "10th",
   "feeINR": 0,
   "benefit": "Rs 50,000/yr",
   "window": "typically Jun–Oct (NSP)",
   "windowMonths": [
    6,
    7,
    8,
    9,
    10
   ],
   "nextExpected": "Jun–Oct 2026 (expected)",
   "frequency": "annual",
   "official": "https://www.aicte-india.org",
   "resources": [
    {
     "label": "National Scholarship Portal (apply here)",
     "url": "https://scholarships.gov.in"
    },
    {
     "label": "AICTE student schemes",
     "url": "https://www.aicte-india.org"
    }
   ],
   "tags": [
    "disability",
    "engineering",
    "diploma",
    "technical",
    "government",
    "nsp"
   ]
  },
  {
   "id": "pm-yasasvi",
   "name": "PM-YASASVI Scholarship (OBC/EBC/DNT)",
   "category": "scholarship",
   "oneLiner": "Merit-based scheme for OBC, EBC and DNT students in classes 9-12; top-class school students get up to Rs 1.25 lakh/yr. The old entrance test is scrapped.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "up to Rs 1.25 lakh/yr (top-class schools, classes 11-12)",
   "window": "typically Jun–Aug (NSP)",
   "windowMonths": [
    6,
    7,
    8
   ],
   "nextExpected": "open now, closes 31 Aug 2026",
   "frequency": "annual",
   "official": "https://scholarships.gov.in",
   "resources": [
    {
     "label": "Dept of Social Justice — YASASVI",
     "url": "https://socialjustice.gov.in"
    },
    {
     "label": "National Scholarship Portal",
     "url": "https://scholarships.gov.in"
    }
   ],
   "tags": [
    "obc",
    "ebc",
    "dnt",
    "school",
    "merit-based",
    "government",
    "nsp"
   ]
  },
  {
   "id": "inspire-she",
   "name": "INSPIRE Scholarship for Higher Education (SHE)",
   "category": "scholarship",
   "oneLiner": "DST scholarship of Rs 80,000/yr for top-1% class 12 scorers (or top JEE/NEET rankers) who choose BSc/BS/Int-MSc in natural and basic sciences.",
   "ageMin": 17,
   "ageMax": 22,
   "minEducation": "12th",
   "feeINR": 0,
   "benefit": "Rs 80,000/yr (Rs 60,000 scholarship + Rs 20,000 mentorship)",
   "window": "typically Aug–Nov",
   "windowMonths": [
    8,
    9,
    10,
    11
   ],
   "nextExpected": "Aug–Nov 2026 (expected)",
   "frequency": "annual",
   "official": "https://online-inspire.gov.in",
   "resources": [
    {
     "label": "INSPIRE portal (DST)",
     "url": "https://online-inspire.gov.in"
    },
    {
     "label": "DST home",
     "url": "https://dst.gov.in"
    }
   ],
   "tags": [
    "science",
    "bsc",
    "merit-based",
    "government",
    "dst"
   ]
  },
  {
   "id": "inspire-fellowship",
   "name": "INSPIRE Fellowship (PhD)",
   "category": "scholarship",
   "oneLiner": "DST doctoral fellowship (JRF/SRF-equivalent stipend, 5 years) for first-rank postgraduates in science and INSPIRE scholars pursuing a PhD in India.",
   "ageMin": null,
   "ageMax": 27,
   "minEducation": "pg",
   "feeINR": 0,
   "benefit": "~Rs 37,000/mo stipend + contingency, 5 years",
   "window": "typically Oct–Dec",
   "windowMonths": [
    10,
    11,
    12
   ],
   "nextExpected": "Oct–Dec 2026 (expected)",
   "frequency": "annual",
   "official": "https://online-inspire.gov.in",
   "resources": [
    {
     "label": "INSPIRE portal (DST)",
     "url": "https://online-inspire.gov.in"
    },
    {
     "label": "DST home",
     "url": "https://dst.gov.in"
    }
   ],
   "tags": [
    "research",
    "phd",
    "science",
    "government",
    "dst",
    "fellowship"
   ]
  },
  {
   "id": "pmrf",
   "name": "Prime Minister's Research Fellowship (PMRF)",
   "category": "scholarship",
   "oneLiner": "India's most generous PhD fellowship: Rs 70,000-80,000/mo plus Rs 2 lakh/yr research grant for doctoral study at IITs, IISc, IISERs, NITs and central universities.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": null,
   "benefit": "Rs 70,000-80,000/mo + Rs 2 lakh/yr research grant",
   "window": "two cycles a year, typically May and Nov–Dec",
   "windowMonths": [
    5,
    11,
    12
   ],
   "nextExpected": "Dec 2026 cycle (expected)",
   "frequency": "biannual",
   "official": "https://pmrf.in",
   "resources": [
    {
     "label": "PMRF calendar",
     "url": "https://pmrf.in/pmrf-calendar.html"
    },
    {
     "label": "NPTEL (free prep for research fundamentals)",
     "url": "https://nptel.ac.in"
    }
   ],
   "tags": [
    "research",
    "phd",
    "fellowship",
    "iit",
    "iisc",
    "government"
   ]
  },
  {
   "id": "national-overseas-scholarship",
   "name": "National Overseas Scholarship (NOS)",
   "category": "scholarship",
   "oneLiner": "Fully funds master's or PhD abroad (125 awards/yr) for SC, DNT, landless labourer and artisan-family students with 60% marks and income under Rs 8 lakh.",
   "ageMin": null,
   "ageMax": 35,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "full tuition + ~US$15,400/yr maintenance + airfare",
   "window": "typically Apr–Jun",
   "windowMonths": [
    4,
    5,
    6
   ],
   "nextExpected": "Apr–Jun 2027 (expected; 2026 round closed)",
   "frequency": "annual",
   "official": "https://nosmsje.gov.in",
   "resources": [
    {
     "label": "Dept of Social Justice — NOS",
     "url": "https://socialjustice.gov.in/schemes/28"
    },
    {
     "label": "NOS for ST students (Ministry of Tribal Affairs)",
     "url": "https://overseas.tribal.gov.in"
    }
   ],
   "tags": [
    "abroad",
    "sc",
    "dnt",
    "pg",
    "phd",
    "fully-funded",
    "government"
   ]
  },
  {
   "id": "ishan-uday",
   "name": "Ishan Uday Special Scholarship (North East Region)",
   "category": "scholarship",
   "oneLiner": "UGC scholarship for fresh class-12 pass students from the North East (income under Rs 4.5 lakh) doing UG: Rs 5,400/mo general, Rs 7,800/mo technical courses.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 0,
   "benefit": "Rs 5,400-7,800/mo through the UG course",
   "window": "typically Jun–Oct (NSP)",
   "windowMonths": [
    6,
    7,
    8,
    9,
    10
   ],
   "nextExpected": "by Oct 2026 (expected)",
   "frequency": "annual",
   "official": "https://scholarships.gov.in",
   "resources": [
    {
     "label": "UGC (scheme owner)",
     "url": "https://www.ugc.gov.in"
    },
    {
     "label": "National Scholarship Portal",
     "url": "https://scholarships.gov.in"
    }
   ],
   "tags": [
    "north-east",
    "ug",
    "need-based",
    "government",
    "nsp",
    "ugc"
   ]
  },
  {
   "id": "pm-scholarship-scheme-capf-esm",
   "name": "PM Scholarship Scheme (wards of Ex-Servicemen / CAPF & Assam Rifles)",
   "category": "scholarship",
   "oneLiner": "For wards and widows of ex-servicemen, CAPF and Assam Rifles personnel pursuing professional degrees: Rs 30,000/yr for boys, Rs 36,000/yr for girls.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 0,
   "benefit": "Rs 30,000/yr (boys) / Rs 36,000/yr (girls)",
   "window": "typically Aug–Nov (NSP)",
   "windowMonths": [
    8,
    9,
    10,
    11
   ],
   "nextExpected": "Aug–Nov 2026 (expected)",
   "frequency": "annual",
   "official": "https://scholarships.gov.in",
   "resources": [
    {
     "label": "Kendriya Sainik Board (ex-servicemen wing)",
     "url": "https://ksb.gov.in"
    },
    {
     "label": "National Scholarship Portal",
     "url": "https://scholarships.gov.in"
    }
   ],
   "tags": [
    "defence",
    "capf",
    "ex-servicemen",
    "professional-courses",
    "government",
    "nsp"
   ]
  },
  {
   "id": "reliance-foundation-scholarships",
   "name": "Reliance Foundation Scholarships (UG & PG)",
   "category": "scholarship",
   "oneLiner": "5,000 UG awards up to Rs 2 lakh and 100 PG awards up to Rs 6 lakh each year, merit-cum-means, selected via a free online aptitude test. No application fee.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 0,
   "benefit": "up to Rs 2 lakh (UG) / Rs 6 lakh (PG) over the course",
   "window": "typically Aug–Oct",
   "windowMonths": [
    8,
    9,
    10
   ],
   "nextExpected": "open now (Aug–Oct 2026)",
   "frequency": "annual",
   "official": "https://scholarships.reliancefoundation.org",
   "resources": [
    {
     "label": "Reliance Foundation announcement",
     "url": "https://www.reliancefoundation.org"
    },
    {
     "label": "Buddy4Study scholarship search",
     "url": "https://www.buddy4study.com"
    }
   ],
   "tags": [
    "private",
    "ug",
    "pg",
    "merit-cum-means",
    "large-cohort"
   ]
  },
  {
   "id": "tata-capital-pankh",
   "name": "Tata Capital Pankh Scholarship",
   "category": "scholarship",
   "oneLiner": "Covers 80% of tuition (caps vary by course) for class 11-12, diploma/ITI and UG students with 60%+ marks and family income under Rs 2.5 lakh.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "10th",
   "feeINR": 0,
   "benefit": "80% of tuition fee (course-wise caps)",
   "window": "typically Jul–Sep (via Buddy4Study)",
   "windowMonths": [
    7,
    8,
    9
   ],
   "nextExpected": "open now, closes 30 Sep 2026",
   "frequency": "annual",
   "official": "https://www.tatacapital.com",
   "resources": [
    {
     "label": "Buddy4Study — Pankh application & dates",
     "url": "https://www.buddy4study.com/page/tata-capital-pankh-scholarship"
    }
   ],
   "tags": [
    "private",
    "need-based",
    "school",
    "ug",
    "diploma"
   ]
  },
  {
   "id": "aditya-birla-scholarship",
   "name": "Aditya Birla Group Scholarship",
   "category": "scholarship",
   "oneLiner": "Nomination-only award for top entrance rankers joining premier institutes (IITs, BITS, IIMs, XLRI, top law schools): Rs 1.5-3 lakh/yr for the full course.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 0,
   "benefit": "Rs 1.5-3 lakh/yr (by stream)",
   "window": "typically Jun–Aug (institute nomination after admissions)",
   "windowMonths": [
    6,
    7,
    8
   ],
   "nextExpected": "Jun–Aug 2027 (expected; 2026 round closed 10 Aug)",
   "frequency": "annual",
   "official": "https://www.adityabirlascholars.net",
   "resources": [
    {
     "label": "Aditya Birla Scholars — how selection works",
     "url": "https://www.adityabirlascholars.net"
    }
   ],
   "tags": [
    "private",
    "merit-based",
    "iit",
    "iim",
    "law",
    "nomination-only"
   ]
  },
  {
   "id": "sitaram-jindal-scholarship",
   "name": "Sitaram Jindal Foundation Scholarship",
   "category": "scholarship",
   "oneLiner": "Year-round scholarship from class 11 up to PG and professional courses: Rs 500-3,200/mo by level, with marks and income criteria; apply anytime.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "10th",
   "feeINR": 0,
   "benefit": "Rs 500-3,200/mo (by course level)",
   "window": "rolling — apply anytime",
   "windowMonths": [],
   "nextExpected": "rolling (open year-round)",
   "frequency": "rolling",
   "official": "https://www.sitaramjindalfoundation.org",
   "resources": [
    {
     "label": "Scheme details & forms",
     "url": "https://www.sitaramjindalfoundation.org"
    }
   ],
   "tags": [
    "private",
    "need-based",
    "school",
    "ug",
    "pg",
    "rolling"
   ]
  },
  {
   "id": "hdfc-parivartan-ecss",
   "name": "HDFC Bank Parivartan ECSS (Educational Crisis Scholarship)",
   "category": "scholarship",
   "oneLiner": "One-time Rs 15,000-75,000 for students from class 1 to PG facing a financial or family crisis that threatens their studies; 55% marks, income under Rs 2.5 lakh.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "Rs 15,000-75,000 one-time (by level)",
   "window": "typically Jun–Aug",
   "windowMonths": [
    6,
    7,
    8
   ],
   "nextExpected": "open now, closes 31 Aug 2026",
   "frequency": "annual",
   "official": "https://www.parivartanecss.com",
   "resources": [
    {
     "label": "HDFC Bank Parivartan (CSR)",
     "url": "https://www.hdfcbank.com"
    },
    {
     "label": "Buddy4Study scholarship search",
     "url": "https://www.buddy4study.com"
    }
   ],
   "tags": [
    "private",
    "need-based",
    "crisis-support",
    "school",
    "ug",
    "pg"
   ]
  },
  {
   "id": "colgate-keep-india-smiling",
   "name": "Colgate Keep India Smiling Foundational Scholarship",
   "category": "scholarship",
   "oneLiner": "Colgate-Palmolive CSR scholarship with mentorship for class 11, UG, professional-course and sports aspirants from low-income families; Rs 20,000-75,000 support.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "10th",
   "feeINR": 0,
   "benefit": "Rs 20,000-75,000 (by track)",
   "window": "typically Oct–Feb (via Buddy4Study)",
   "windowMonths": [
    10,
    11,
    12,
    1,
    2
   ],
   "nextExpected": "Oct 2026 (expected)",
   "frequency": "annual",
   "official": "https://www.colgate.com/en-in/smile-karo-aur-shuru-ho-jao",
   "resources": [
    {
     "label": "Buddy4Study — Keep India Smiling page",
     "url": "https://www.buddy4study.com/page/keep-india-smiling-foundational-scholarship-programme"
    }
   ],
   "tags": [
    "private",
    "need-based",
    "school",
    "ug",
    "mentorship",
    "sports"
   ]
  },
  {
   "id": "glow-lovely-careers",
   "name": "Glow & Lovely Careers Foundation Scholarship (Women)",
   "category": "scholarship",
   "oneLiner": "HUL scholarship for women aged 15-30 with 60% in class 10/12 and family income under Rs 6 lakh, for UG/PG or professional coaching; Rs 25,000-50,000.",
   "ageMin": 15,
   "ageMax": 30,
   "minEducation": "10th",
   "feeINR": 0,
   "benefit": "Rs 25,000-50,000",
   "window": "typically Oct–Dec",
   "windowMonths": [
    10,
    11,
    12
   ],
   "nextExpected": "opens 15 Oct 2026 (expected)",
   "frequency": "annual",
   "official": "https://www.glowandlovelycareers.in",
   "resources": [
    {
     "label": "Buddy4Study — scheme page",
     "url": "https://www.buddy4study.com/page/glow-and-lovely-career-foundation-scholarship"
    },
    {
     "label": "Free courses on the same portal",
     "url": "https://www.glowandlovelycareers.in"
    }
   ],
   "tags": [
    "private",
    "girls",
    "women",
    "ug",
    "pg",
    "need-based"
   ]
  },
  {
   "id": "lic-golden-jubilee",
   "name": "LIC Golden Jubilee Scholarship",
   "category": "scholarship",
   "oneLiner": "LIC's CSR scholarship for students from low-income families entering higher education after class 10 or 12 (special stream for girl students).",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "10th",
   "feeINR": 0,
   "benefit": "Rs 15,000-40,000/yr (by course)",
   "window": "typically Sep–Dec (varies by year)",
   "windowMonths": [
    9,
    10,
    11,
    12
   ],
   "nextExpected": "Sep–Dec 2026 (expected)",
   "frequency": "annual",
   "official": "https://licindia.in/golden-jubilee-foundation",
   "resources": [
    {
     "label": "Buddy4Study — LIC GJF dates & guide",
     "url": "https://www.buddy4study.com/article/lic-scholarship"
    }
   ],
   "tags": [
    "psu",
    "need-based",
    "ug",
    "diploma",
    "girls",
    "12th-pass"
   ]
  },
  {
   "id": "gre-general",
   "name": "GRE General Test",
   "category": "abroad",
   "oneLiner": "Standardised test by ETS used for master's and PhD admissions in the US and many other countries; scores valid 5 years.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 22550,
   "benefit": null,
   "window": "book a slot year-round at test centres or at home",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "multiple",
   "official": "https://www.ets.org/gre.html",
   "resources": [
    {
     "label": "ETS India GRE fees & registration",
     "url": "https://www.in.ets.org/gre/test-takers/general-test/register/fees.html"
    },
    {
     "label": "GregMat (famous low-cost prep)",
     "url": "https://www.gregmat.com"
    }
   ],
   "tags": [
    "test",
    "usa",
    "masters",
    "phd",
    "ets"
   ]
  },
  {
   "id": "toefl-ibt",
   "name": "TOEFL iBT",
   "category": "abroad",
   "oneLiner": "English-proficiency test by ETS accepted by universities in the US, Canada, Europe and Australia; 2-hour test, scores in ~6 days.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 18000,
   "benefit": null,
   "window": "book a slot year-round (test centre or Home Edition)",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "multiple",
   "official": "https://www.ets.org/toefl.html",
   "resources": [
    {
     "label": "Magoosh TOEFL free prep blog",
     "url": "https://magoosh.com/toefl/"
    }
   ],
   "tags": [
    "test",
    "english-proficiency",
    "usa",
    "canada"
   ]
  },
  {
   "id": "ielts",
   "name": "IELTS Academic",
   "category": "abroad",
   "oneLiner": "Most widely accepted English test for UK, Australia, Canada and Europe study visas; paper or computer, multiple dates every month.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 19000,
   "benefit": null,
   "window": "book a slot year-round, dates every week in most cities",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "multiple",
   "official": "https://ielts.org",
   "resources": [
    {
     "label": "IDP IELTS India (booking + fee)",
     "url": "https://ieltsidpindia.com"
    },
    {
     "label": "IELTS Liz (famous free prep)",
     "url": "https://ieltsliz.com"
    }
   ],
   "tags": [
    "test",
    "english-proficiency",
    "uk",
    "canada",
    "australia"
   ]
  },
  {
   "id": "gmat",
   "name": "GMAT (Focus Edition)",
   "category": "abroad",
   "oneLiner": "Admissions test for MBA and business master's programmes worldwide; US$275 at Indian test centres, US$300 online.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 24000,
   "benefit": null,
   "window": "book a slot year-round; up to 5 attempts per year",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "multiple",
   "official": "https://www.mba.com",
   "resources": [
    {
     "label": "GMAT Club forum (free prep community)",
     "url": "https://gmatclub.com"
    }
   ],
   "tags": [
    "test",
    "mba",
    "business",
    "usa",
    "europe"
   ]
  },
  {
   "id": "duolingo-english-test",
   "name": "Duolingo English Test",
   "category": "abroad",
   "oneLiner": "1-hour online English test taken from home, US$70, results in ~2 days; accepted by 5,500+ universities incl. many in the US, UK and Canada.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 6200,
   "benefit": null,
   "window": "take anytime from home, results in ~48 hours",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://englishtest.duolingo.com",
   "resources": [
    {
     "label": "Accepting institutions list",
     "url": "https://englishtest.duolingo.com/institutions"
    }
   ],
   "tags": [
    "test",
    "english-proficiency",
    "online",
    "cheapest"
   ]
  },
  {
   "id": "sat",
   "name": "SAT (Digital)",
   "category": "abroad",
   "oneLiner": "College Board test for undergraduate admission abroad (mainly US); 5-6 international dates a year at 149 Indian centres; big fee waivers for low-income Indians.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 11600,
   "benefit": null,
   "window": "register ~5 weeks before each test date (Aug, Sep/Oct, Nov, Dec, Mar, May, Jun)",
   "windowMonths": [],
   "nextExpected": "Registration open for Aug–Dec 2026 dates",
   "frequency": "multiple",
   "official": "https://satsuite.collegeboard.org",
   "resources": [
    {
     "label": "Khan Academy official free SAT prep",
     "url": "https://www.khanacademy.org/digital-sat"
    }
   ],
   "tags": [
    "test",
    "undergraduate",
    "usa",
    "class-12",
    "fee-waiver"
   ]
  },
  {
   "id": "pte-academic",
   "name": "PTE Academic",
   "category": "abroad",
   "oneLiner": "Pearson's computer-based English test, results typically in 2 days; widely accepted for Australia, UK, NZ and Canada study and visas.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 18900,
   "benefit": null,
   "window": "book a slot year-round at 60+ Indian centres",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "multiple",
   "official": "https://www.pearsonpte.com",
   "resources": [
    {
     "label": "Official PTE preparation resources",
     "url": "https://www.pearsonpte.com/preparation"
    }
   ],
   "tags": [
    "test",
    "english-proficiency",
    "australia",
    "uk"
   ]
  },
  {
   "id": "fulbright-nehru-masters",
   "name": "Fulbright-Nehru Master's Fellowships",
   "category": "abroad",
   "oneLiner": "USIEF's fully funded US master's for Indians with a bachelor's, 55%+ marks and 3+ years work experience in eligible fields.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Fully funded US master's: tuition, living, airfare, insurance",
   "window": "typically Feb – mid May",
   "windowMonths": [
    2,
    3,
    4,
    5
   ],
   "nextExpected": "Feb 2027 (expected)",
   "frequency": "annual",
   "official": "https://www.usief.org.in",
   "resources": [
    {
     "label": "Official fellowship page (USIEF)",
     "url": "https://www.usief.org.in/fulbright-fellowships/fellowships-for-indian-citizen/fulbright-nehru-masters-fellowships/"
    }
   ],
   "tags": [
    "fellowship",
    "usa",
    "masters",
    "fully-funded",
    "work-experience"
   ]
  },
  {
   "id": "chevening",
   "name": "Chevening Scholarships (UK)",
   "category": "abroad",
   "oneLiner": "UK government's fully funded 1-year master's for future leaders; needs a bachelor's and 2+ years (2,800 hours) of work experience.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Fully funded 1-year UK master's: tuition, stipend, flights",
   "window": "typically early Aug – early Oct",
   "windowMonths": [
    8,
    9,
    10
   ],
   "nextExpected": "Open now — closes 6 Oct 2026 (for 2027/28)",
   "frequency": "annual",
   "official": "https://www.chevening.org",
   "resources": [
    {
     "label": "Chevening application guidance",
     "url": "https://www.chevening.org/scholarships/"
    }
   ],
   "tags": [
    "scholarship",
    "uk",
    "masters",
    "fully-funded",
    "leadership"
   ]
  },
  {
   "id": "commonwealth-masters",
   "name": "Commonwealth Master's Scholarships (UK)",
   "category": "abroad",
   "oneLiner": "Fully funded 1-year taught UK master's (no MBA) for candidates from Commonwealth countries incl. India, under six development themes.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Fully funded UK master's: tuition, stipend, airfare",
   "window": "typically Sep – mid Oct",
   "windowMonths": [
    9,
    10
   ],
   "nextExpected": "Opens 8 Sep 2026, closes 20 Oct 2026 (expected, for 2027/28)",
   "frequency": "annual",
   "official": "https://cscuk.fcdo.gov.uk",
   "resources": [
    {
     "label": "CSC Master's scholarships page",
     "url": "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-masters-scholarships/"
    }
   ],
   "tags": [
    "scholarship",
    "uk",
    "masters",
    "fully-funded",
    "development"
   ]
  },
  {
   "id": "erasmus-mundus",
   "name": "Erasmus Mundus Joint Masters Scholarships",
   "category": "abroad",
   "oneLiner": "EU-funded 2-year master's taught across 2+ European countries; scholarship covers full costs, one application per consortium, no application fee.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Full tuition + ~€1,400/month stipend + travel",
   "window": "varies by programme, mostly Oct – Jan for the next autumn intake",
   "windowMonths": [
    10,
    11,
    12,
    1
   ],
   "nextExpected": "Oct 2026 (expected)",
   "frequency": "annual",
   "official": "https://erasmus-plus.ec.europa.eu",
   "resources": [
    {
     "label": "EMJM programme catalogue (EACEA)",
     "url": "https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en"
    }
   ],
   "tags": [
    "scholarship",
    "europe",
    "masters",
    "fully-funded",
    "eu"
   ]
  },
  {
   "id": "daad-epos",
   "name": "DAAD EPOS (Development-Related Postgraduate Courses)",
   "category": "abroad",
   "oneLiner": "German government scholarships for development-related master's in Germany; needs a bachelor's and typically 2 years of work experience.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "€992/month stipend + tuition waiver + travel + insurance",
   "window": "varies by course, mostly Aug – Dec (apply ~1 year ahead)",
   "windowMonths": [
    8,
    9,
    10,
    11,
    12
   ],
   "nextExpected": "Aug–Dec 2026 (deadlines vary by course)",
   "frequency": "annual",
   "official": "https://www.daad.de/en/",
   "resources": [
    {
     "label": "DAAD India",
     "url": "https://www.daad.in"
    }
   ],
   "tags": [
    "scholarship",
    "germany",
    "masters",
    "work-experience",
    "development"
   ]
  },
  {
   "id": "rhodes-india",
   "name": "Rhodes Scholarship (India)",
   "category": "abroad",
   "oneLiner": "Fully funded postgraduate study at Oxford for ~5-6 Indians a year; needs a first-class degree and Indian citizenship, apply in final UG year or after.",
   "ageMin": 18,
   "ageMax": 23,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Fully funded Oxford postgrad + ~£20,000/yr stipend",
   "window": "typically Jun – late Jul",
   "windowMonths": [
    6,
    7
   ],
   "nextExpected": "Jun 2027 (expected; 2026 round closed 23 Jul)",
   "frequency": "annual",
   "official": "https://www.rhodeshouse.ox.ac.uk",
   "resources": [
    {
     "label": "Rhodes India constituency page",
     "url": "https://www.rhodeshouse.ox.ac.uk/scholarships/the-rhodes-scholarship/"
    }
   ],
   "tags": [
    "scholarship",
    "uk",
    "oxford",
    "fully-funded",
    "prestige"
   ]
  },
  {
   "id": "inlaks-scholarship",
   "name": "Inlaks Shivdasani Scholarship",
   "category": "abroad",
   "oneLiner": "Funds exceptional young Indians for master's/PhD at top universities in the US, UK and Europe; you must already hold an admit before applying.",
   "ageMin": null,
   "ageMax": 30,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Up to US$120,000: tuition, living, one-way airfare",
   "window": "typically Jan – 31 Mar",
   "windowMonths": [
    1,
    2,
    3
   ],
   "nextExpected": "Jan 2027 (expected)",
   "frequency": "annual",
   "official": "https://inlaksfoundation.org",
   "resources": [
    {
     "label": "Official scholarship page",
     "url": "https://inlaksfoundation.org/opportunities/scholarship/"
    }
   ],
   "tags": [
    "scholarship",
    "usa",
    "uk",
    "europe",
    "masters",
    "admit-required"
   ]
  },
  {
   "id": "jn-tata-endowment",
   "name": "J N Tata Endowment Loan Scholarship",
   "category": "abroad",
   "oneLiner": "Tata Trusts' merit loan scholarship (2% simple interest) for Indians going abroad for PG, PhD or postdoc; graduates with 60%+ up to age 45.",
   "ageMin": null,
   "ageMax": 45,
   "minEducation": "ug",
   "feeINR": null,
   "benefit": "Loan scholarship up to Rs 20 lakh + possible gift award & travel grant",
   "window": "typically Jan – mid/late Mar",
   "windowMonths": [
    1,
    2,
    3
   ],
   "nextExpected": "Jan 2027 (expected)",
   "frequency": "annual",
   "official": "https://jntataendowment.org",
   "resources": [
    {
     "label": "Eligibility criteria (official)",
     "url": "https://jntataendowment.org/eligibility-criteria/"
    },
    {
     "label": "Buddy4Study listing",
     "url": "https://www.buddy4study.com/page/jn-tata-endowment-loan-scholarship"
    }
   ],
   "tags": [
    "loan-scholarship",
    "tata",
    "masters",
    "phd",
    "any-country"
   ]
  },
  {
   "id": "kc-mahindra",
   "name": "K C Mahindra Scholarship for PG Studies Abroad",
   "category": "abroad",
   "oneLiner": "Interest-free loan scholarships for 50+ Indians a year with first-class degrees heading to postgraduate programmes abroad.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Interest-free loan up to Rs 10 lakh (top 3 Fellows; up to Rs 5 lakh others)",
   "window": "typically Jan – Apr (2026 deadline was 30 Apr)",
   "windowMonths": [
    1,
    2,
    3,
    4
   ],
   "nextExpected": "Jan 2027 (expected)",
   "frequency": "annual",
   "official": "https://www.kcmet.org",
   "resources": [
    {
     "label": "Official scholarships page",
     "url": "https://www.kcmet.org/what-we-do-scholarship-grants.aspx"
    }
   ],
   "tags": [
    "loan-scholarship",
    "masters",
    "any-country",
    "mahindra"
   ]
  },
  {
   "id": "akf-international-scholarship",
   "name": "Aga Khan Foundation International Scholarship Programme",
   "category": "abroad",
   "oneLiner": "For outstanding students with genuine financial need doing a master's (rarely PhD) anywhere in the world; apply via the AKF India office.",
   "ageMin": null,
   "ageMax": 30,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "50% grant + 50% loan toward tuition and living costs",
   "window": "typically Jan – 31 Mar",
   "windowMonths": [
    1,
    2,
    3
   ],
   "nextExpected": "Jan 2027 (expected)",
   "frequency": "annual",
   "official": "https://the.akdn",
   "resources": [
    {
     "label": "International Scholarships (AKDN official)",
     "url": "https://the.akdn/en/what-we-do/developing-human-capacity/education/international-scholarships"
    }
   ],
   "tags": [
    "scholarship",
    "need-based",
    "masters",
    "any-country"
   ]
  },
  {
   "id": "mext-japan",
   "name": "MEXT Japanese Government Scholarship (Embassy route)",
   "category": "abroad",
   "oneLiner": "Japan's government scholarship for research/master's/PhD students, via the Embassy of Japan in India; separate undergraduate route (age 17-25) also exists.",
   "ageMin": null,
   "ageMax": 34,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Full tuition + ~¥144,000/month + round-trip airfare",
   "window": "typically Apr – mid May (research-student route in India)",
   "windowMonths": [
    4,
    5
   ],
   "nextExpected": "Apr 2027 (expected)",
   "frequency": "annual",
   "official": "https://www.in.emb-japan.go.jp/education/japanese_government_scholarships.html",
   "resources": [
    {
     "label": "Study in Japan (official)",
     "url": "https://www.studyinjapan.go.jp/en/"
    }
   ],
   "tags": [
    "scholarship",
    "japan",
    "masters",
    "phd",
    "fully-funded"
   ]
  },
  {
   "id": "schwarzman-scholars",
   "name": "Schwarzman Scholars",
   "category": "abroad",
   "oneLiner": "Fully funded 1-year master's in Global Affairs at Tsinghua University, Beijing, for graduates aged 18-28 with leadership potential.",
   "ageMin": 18,
   "ageMax": 28,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Fully funded Tsinghua master's: tuition, room, travel, stipend",
   "window": "typically Apr – early Sep (global round)",
   "windowMonths": [
    4,
    5,
    6,
    7,
    8,
    9
   ],
   "nextExpected": "Open now — closes 9 Sep 2026 (for 2027/28)",
   "frequency": "annual",
   "official": "https://www.schwarzmanscholars.org",
   "resources": [
    {
     "label": "Application instructions",
     "url": "https://www.schwarzmanscholars.org/admissions/application-instructions/"
    }
   ],
   "tags": [
    "fellowship",
    "china",
    "masters",
    "fully-funded",
    "leadership"
   ]
  },
  {
   "id": "knight-hennessy",
   "name": "Knight-Hennessy Scholars (Stanford)",
   "category": "abroad",
   "oneLiner": "Funds any Stanford graduate degree (MS, MBA, PhD, MD...); no age limit but first degree must be from the last 7 years; apply to KH and Stanford in parallel.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Full funding for any Stanford graduate programme + stipend + travel",
   "window": "typically Jun – early Oct",
   "windowMonths": [
    6,
    7,
    8,
    9,
    10
   ],
   "nextExpected": "Open now — closes 6 Oct 2026 (for 2027 entry)",
   "frequency": "annual",
   "official": "https://knight-hennessy.stanford.edu",
   "resources": [
    {
     "label": "Admission & deadlines",
     "url": "https://knight-hennessy.stanford.edu/admission"
    }
   ],
   "tags": [
    "fellowship",
    "usa",
    "stanford",
    "masters",
    "phd",
    "fully-funded"
   ]
  },
  {
   "id": "gates-cambridge",
   "name": "Gates Cambridge Scholarship",
   "category": "abroad",
   "oneLiner": "Fully funds any full-time postgraduate degree at Cambridge for non-UK citizens; apply through the university's course application, no age limit.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Full Cambridge costs + ~£21,000/yr stipend + airfare",
   "window": "typically Sep – early Dec (with the Cambridge course deadline)",
   "windowMonths": [
    9,
    10,
    11,
    12
   ],
   "nextExpected": "Sep 2026 (opens; deadlines Oct–Dec 2026 for 2027/28)",
   "frequency": "annual",
   "official": "https://www.gatescambridge.org",
   "resources": [
    {
     "label": "Timeline & deadlines",
     "url": "https://www.gatescambridge.org/apply/timeline/"
    }
   ],
   "tags": [
    "scholarship",
    "uk",
    "cambridge",
    "masters",
    "phd",
    "fully-funded"
   ]
  },
  {
   "id": "great-scholarships-india",
   "name": "GREAT Scholarships (India)",
   "category": "abroad",
   "oneLiner": "UK government + British Council awards of min £10,000 toward tuition for a 1-year master's at ~13 participating UK universities.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Minimum £10,000 toward UK master's tuition",
   "window": "varies by university, mostly Jan – May",
   "windowMonths": [
    1,
    2,
    3,
    4,
    5
   ],
   "nextExpected": "Jan 2027 (expected, for 2027/28)",
   "frequency": "annual",
   "official": "https://study-uk.britishcouncil.org/scholarships-funding/great-scholarships/india",
   "resources": [
    {
     "label": "British Council India page",
     "url": "https://www.britishcouncil.in/study-uk/scholarships/great-scholarships"
    }
   ],
   "tags": [
    "scholarship",
    "uk",
    "masters",
    "partial-funding"
   ]
  },
  {
   "id": "stipendium-hungaricum",
   "name": "Stipendium Hungaricum (Hungary)",
   "category": "abroad",
   "oneLiner": "Hungarian government scholarship with a dedicated Indian quota (nominated via UGC): tuition-free bachelor's/master's/PhD plus stipend and housing support.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 0,
   "benefit": "Tuition-free degree + monthly stipend + housing allowance + insurance",
   "window": "typically mid Nov – 15 Jan",
   "windowMonths": [
    11,
    12,
    1
   ],
   "nextExpected": "Nov 2026 (expected, deadline mid-Jan 2027)",
   "frequency": "annual",
   "official": "https://stipendiumhungaricum.hu",
   "resources": [
    {
     "label": "India partner-country page",
     "url": "https://stipendiumhungaricum.hu/country/india/"
    },
    {
     "label": "Online application portal",
     "url": "https://apply.stipendiumhungaricum.hu"
    }
   ],
   "tags": [
    "scholarship",
    "hungary",
    "europe",
    "bachelors",
    "masters",
    "phd"
   ]
  },
  {
   "id": "tcs-nqt",
   "name": "TCS NQT (National Qualifier Test)",
   "category": "private-job",
   "oneLiner": "TCS's all-India online test for hiring fresh graduates; one exam feeds Ninja, Digital and Prime offer grades at different pay levels.",
   "ageMin": 18,
   "ageMax": 28,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Rs 3.4-11.5 LPA package by grade (Ninja/Digital/Prime)",
   "window": "multiple cycles; typically Mar-Apr and Jul-Sep",
   "windowMonths": [
    3,
    4,
    7,
    8,
    9
   ],
   "nextExpected": "Aug-Sep 2026 cycle (expected)",
   "frequency": "multiple",
   "official": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
   "resources": [
    {
     "label": "TCS Careers India (registration)",
     "url": "https://www.tcs.com/careers/india"
    }
   ],
   "tags": [
    "IT services",
    "freshers",
    "mass hiring",
    "engineering",
    "free to apply"
   ]
  },
  {
   "id": "infosys-springboard-hiring",
   "name": "Infosys fresher hiring (Springboard certification route)",
   "category": "private-job",
   "oneLiner": "Infosys hires freshers via off-campus assessments; free Springboard certifications (ex-InfyTQ) in Python/DSA/SQL feed the higher-paying Specialist Programmer track.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Rs 3.6-9.5 LPA (SE to Specialist/Power Programmer)",
   "window": "off-campus drives through the year",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "multiple",
   "official": "https://www.infosys.com/careers/",
   "resources": [
    {
     "label": "Infosys Springboard (free learning + certifications)",
     "url": "https://www.infosys.com/about/springboard.html"
    }
   ],
   "tags": [
    "IT services",
    "freshers",
    "certification",
    "coding",
    "free to apply"
   ]
  },
  {
   "id": "hackwithinfy",
   "name": "HackWithInfy (Infosys)",
   "category": "private-job",
   "oneLiner": "Infosys's annual coding contest for pre-final-year engineering students; top performers get cash prizes and pre-placement interviews for Specialist Programmer roles.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 0,
   "benefit": "Cash prizes + pre-placement interview for roles up to ~Rs 9.5 LPA",
   "window": "typically Feb-Apr",
   "windowMonths": [
    2,
    3,
    4
   ],
   "nextExpected": "Feb 2027 (expected)",
   "frequency": "annual",
   "official": "https://www.infosys.com/careers/hackwithinfy.html",
   "resources": [
    {
     "label": "Infosys Springboard (free prep)",
     "url": "https://www.infosys.com/about/springboard.html"
    }
   ],
   "tags": [
    "coding contest",
    "pre-final year",
    "engineering",
    "pre-placement",
    "free to apply"
   ]
  },
  {
   "id": "wipro-elite-nth",
   "name": "Wipro Elite NTH (National Talent Hunt)",
   "category": "private-job",
   "oneLiner": "Wipro's national hiring test for engineering freshers into the Project Engineer role; the Turbo track pays higher for stronger coders.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "~Rs 3.5 LPA (Elite); ~Rs 6.5 LPA Turbo track",
   "window": "drives typically Feb-Jun and Aug-Oct; short 7-10 day registration windows",
   "windowMonths": [
    2,
    3,
    4,
    5,
    6,
    8,
    9,
    10
   ],
   "nextExpected": "Aug-Oct 2026 (expected)",
   "frequency": "multiple",
   "official": "https://careers.wipro.com/",
   "resources": [
    {
     "label": "Wipro NTH on Superset",
     "url": "https://app.joinsuperset.com/company/wipro/nth.html"
    }
   ],
   "tags": [
    "IT services",
    "freshers",
    "mass hiring",
    "engineering",
    "free to apply"
   ]
  },
  {
   "id": "capgemini-exceller",
   "name": "Capgemini Exceller (off-campus drive)",
   "category": "private-job",
   "oneLiner": "Capgemini's annual Exceller off-campus drive hiring B.E./B.Tech/M.Tech freshers (60%+) as Software Engineers via the Superset platform.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Rs 4.25-7.5 LPA depending on assessment performance",
   "window": "typically Aug-Oct",
   "windowMonths": [
    8,
    9,
    10
   ],
   "nextExpected": "Sep 2026 (expected)",
   "frequency": "annual",
   "official": "https://www.capgemini.com/in-en/careers/",
   "resources": [
    {
     "label": "Superset (application platform)",
     "url": "https://app.joinsuperset.com/"
    }
   ],
   "tags": [
    "IT services",
    "freshers",
    "mass hiring",
    "engineering",
    "free to apply"
   ]
  },
  {
   "id": "tcs-codevita",
   "name": "TCS CodeVita",
   "category": "private-job",
   "oneLiner": "TCS's global competitive programming contest for students; top coders win up to US$20,000 and interview offers for TCS Digital/Prime roles.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 0,
   "benefit": "Up to US$20,000 prize + TCS job interview offers",
   "window": "registration typically Jul-Sep",
   "windowMonths": [
    7,
    8,
    9
   ],
   "nextExpected": "Jul-Sep 2026 (next season, expected)",
   "frequency": "annual",
   "official": "https://codevita.tcsapps.com/",
   "resources": [
    {
     "label": "TCS NQT hiring page (related route)",
     "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring"
    }
   ],
   "tags": [
    "coding contest",
    "students",
    "pre-placement",
    "free to apply"
   ]
  },
  {
   "id": "gsoc",
   "name": "Google Summer of Code (GSoC)",
   "category": "private-job",
   "oneLiner": "Google-funded 12+ week remote programme writing code for open-source organisations under mentorship; open to students and open-source newcomers aged 18+.",
   "ageMin": 18,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "Stipend typically US$1,500-3,000 for India (by project size)",
   "window": "proposals typically late Mar-early Apr; pick orgs from Feb",
   "windowMonths": [
    2,
    3,
    4
   ],
   "nextExpected": "Mar-Apr 2027 (expected)",
   "frequency": "annual",
   "official": "https://summerofcode.withgoogle.com/",
   "resources": [
    {
     "label": "Official GSoC contributor guide",
     "url": "https://google.github.io/gsocguides/student/"
    }
   ],
   "tags": [
    "open source",
    "remote",
    "stipend",
    "coding",
    "free to apply"
   ]
  },
  {
   "id": "google-step-india",
   "name": "Google STEP Internship (India)",
   "category": "private-job",
   "oneLiner": "Google's 10-12 week paid summer internship for first/second-year undergrads in India, aimed at students underrepresented in tech; DSA-based interviews.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 0,
   "benefit": "Paid internship at Google India (Bengaluru/Hyderabad)",
   "window": "typically Nov-Dec for the following summer",
   "windowMonths": [
    11,
    12
   ],
   "nextExpected": "Nov 2026 (expected)",
   "frequency": "annual",
   "official": "https://careers.google.com/",
   "resources": [
    {
     "label": "Google Build Your Future (student programs)",
     "url": "https://buildyourfuture.withgoogle.com/"
    }
   ],
   "tags": [
    "internship",
    "tech",
    "early undergrad",
    "diversity",
    "free to apply"
   ]
  },
  {
   "id": "outreachy",
   "name": "Outreachy",
   "category": "private-job",
   "oneLiner": "Paid 3-month remote open-source internships (US$7,000) for people underrepresented in tech; two cohorts a year, no degree required.",
   "ageMin": 18,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "US$7,000 stipend, fully remote",
   "window": "initial applications ~Jan-Feb (May cohort) and Aug (Dec cohort)",
   "windowMonths": [
    1,
    2,
    8
   ],
   "nextExpected": "24-31 Aug 2026 (Dec 2026 cohort)",
   "frequency": "biannual",
   "official": "https://www.outreachy.org/",
   "resources": [
    {
     "label": "Official applicant guide",
     "url": "https://www.outreachy.org/docs/applicant/"
    }
   ],
   "tags": [
    "open source",
    "remote",
    "diversity",
    "women",
    "stipend",
    "free to apply"
   ]
  },
  {
   "id": "mlh-fellowship",
   "name": "MLH Fellowship",
   "category": "private-job",
   "oneLiner": "Major League Hacking's 12-week remote fellowship: build real open-source and engineering projects in small mentored pods; three batches a year.",
   "ageMin": 18,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "Need-based stipend (varies by region)",
   "window": "rolling; batches start ~Jan, May and Sep, apply a few weeks before",
   "windowMonths": [],
   "nextExpected": "Fall 2026 batch: apply by 31 Aug 2026",
   "frequency": "multiple",
   "official": "https://fellowship.mlh.io/",
   "resources": [
    {
     "label": "Major League Hacking",
     "url": "https://mlh.io/"
    }
   ],
   "tags": [
    "open source",
    "remote",
    "coding",
    "mentorship",
    "free to apply"
   ]
  },
  {
   "id": "aicte-internship-portal",
   "name": "AICTE National Internship Portal",
   "category": "private-job",
   "oneLiner": "Free government-backed portal listing 1 lakh+ verified internships (ISRO, DRDO, NITI Aayog, Microsoft, TCS and more) for students in any discipline.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 0,
   "benefit": "Stipend varies by listing; verified certificates",
   "window": "always open; new listings year-round",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://internship.aicte-india.org/",
   "resources": [
    {
     "label": "AICTE internship portal (register free)",
     "url": "https://internship.aicte-india.org/"
    }
   ],
   "tags": [
    "internship",
    "government-backed",
    "students",
    "all disciplines",
    "free to apply"
   ]
  },
  {
   "id": "pm-internship-scheme",
   "name": "PM Internship Scheme (PMIS)",
   "category": "private-job",
   "oneLiner": "Ministry of Corporate Affairs scheme placing youth aged 21-24 in year-long internships at India's top 500 companies; Rs 8 lakh family income cap, no full-time job/study.",
   "ageMin": 21,
   "ageMax": 24,
   "minEducation": "10th",
   "feeINR": 0,
   "benefit": "Rs 5,000/mo stipend + Rs 6,000 one-time grant + insurance",
   "window": "application rounds announced through the year; apply when a round opens",
   "windowMonths": [],
   "nextExpected": "Round ongoing; next round late 2026 (expected)",
   "frequency": "multiple",
   "official": "https://pminternship.mca.gov.in/",
   "resources": [
    {
     "label": "PMIS portal guidelines and FAQ",
     "url": "https://pminternship.mca.gov.in/"
    }
   ],
   "tags": [
    "government scheme",
    "internship",
    "stipend",
    "top 500 companies",
    "free to apply"
   ]
  },
  {
   "id": "teach-for-india",
   "name": "Teach For India Fellowship",
   "category": "private-job",
   "oneLiner": "Salaried 2-year fellowship teaching full-time in under-resourced schools across Indian cities; strong alumni network into education and social sector careers.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Rs 25,344/mo salary + Rs 6,000-12,600 housing allowance",
   "window": "rounds roughly Aug-Apr for the June cohort",
   "windowMonths": [
    8,
    9,
    10,
    11,
    12,
    1,
    2,
    3,
    4
   ],
   "nextExpected": "Aug 2026 (2027 cohort rounds, expected)",
   "frequency": "annual",
   "official": "https://www.teachforindia.org/",
   "resources": [
    {
     "label": "Buddy4Study overview",
     "url": "https://www.buddy4study.com/scholarship/teach-for-india-fellowship"
    }
   ],
   "tags": [
    "fellowship",
    "teaching",
    "social impact",
    "graduates",
    "free to apply"
   ]
  },
  {
   "id": "gandhi-fellowship",
   "name": "Gandhi Fellowship (Piramal Foundation)",
   "category": "private-job",
   "oneLiner": "23-month grassroots leadership fellowship working with government schools, districts and communities across India; 55% aggregate marks needed.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Rs 24,500/mo stipend (part paid as completion reserve)",
   "window": "rolling application rounds through the year for the July cohort",
   "windowMonths": [],
   "nextExpected": "Open now for the 2026-28 cohort",
   "frequency": "annual",
   "official": "https://gandhifellowship.org/",
   "resources": [
    {
     "label": "Apply now page",
     "url": "https://gandhifellowship.org/apply-now/"
    },
    {
     "label": "Official FAQs",
     "url": "https://gandhifellowship.org/faqs/"
    }
   ],
   "tags": [
    "fellowship",
    "social impact",
    "education",
    "leadership",
    "free to apply"
   ]
  },
  {
   "id": "young-india-fellowship",
   "name": "Young India Fellowship (Ashoka University)",
   "category": "private-job",
   "oneLiner": "One-year residential postgraduate diploma in liberal studies at Ashoka University; ~300 fellows a year, no age limit, generous need-based scholarships.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": null,
   "benefit": "Need-based scholarships up to 100% of programme fee",
   "window": "typically Sep-Mar in multiple rounds",
   "windowMonths": [
    9,
    10,
    11,
    12,
    1,
    2,
    3
   ],
   "nextExpected": "Sep 2026 (2027-28 cohort rounds, expected)",
   "frequency": "annual",
   "official": "https://www.ashoka.edu.in/yif/",
   "resources": [
    {
     "label": "YIF application portal",
     "url": "https://yif-application.ashoka.edu.in/"
    }
   ],
   "tags": [
    "fellowship",
    "liberal arts",
    "postgraduate",
    "scholarship",
    "residential"
   ]
  },
  {
   "id": "lamp-fellowship",
   "name": "LAMP Fellowship (PRS Legislative Research)",
   "category": "private-job",
   "oneLiner": "Work for ~11 months as a full-time legislative and research assistant to a Member of Parliament; graduates aged 25 or under, any discipline.",
   "ageMin": null,
   "ageMax": 25,
   "minEducation": "ug",
   "feeINR": 0,
   "benefit": "Rs 23,000/mo stipend",
   "window": "typically Oct-Dec (apply by ~21 Dec)",
   "windowMonths": [
    10,
    11,
    12
   ],
   "nextExpected": "Oct-Dec 2026 (2027-28 cohort, expected)",
   "frequency": "annual",
   "official": "https://prsindia.org/lamp",
   "resources": [
    {
     "label": "Official LAMP FAQ",
     "url": "https://prsindia.org/lamp/faq"
    }
   ],
   "tags": [
    "fellowship",
    "policy",
    "parliament",
    "governance",
    "free to apply"
   ]
  },
  {
   "id": "cm-fellowship-maharashtra",
   "name": "Chief Minister's Fellowship, Maharashtra",
   "category": "private-job",
   "oneLiner": "12-month fellowship placing 60 graduates (60%+, 1 yr work experience) inside Maharashtra government departments; several states run similar CM fellowships.",
   "ageMin": 21,
   "ageMax": 26,
   "minEducation": "ug",
   "feeINR": null,
   "benefit": "Rs 61,500/mo (Rs 56,100 stipend + Rs 5,400 travel)",
   "window": "typically May (short ~3-week window)",
   "windowMonths": [
    5
   ],
   "nextExpected": "May 2027 (expected)",
   "frequency": "annual",
   "official": "https://mahades.maharashtra.gov.in/FELLOWSHIP/",
   "resources": [
    {
     "label": "Application portal",
     "url": "https://mahacmf.recruitlive.in"
    }
   ],
   "tags": [
    "fellowship",
    "governance",
    "state government",
    "work experience required"
   ]
  },
  {
   "id": "isb-pgp-yl",
   "name": "ISB PGP for Young Leaders (PGP YL)",
   "category": "private-job",
   "oneLiner": "ISB's 20-month full-time residential management programme for fresh graduates and 0-2 year professionals; successor to the discontinued YLP deferred MBA.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": null,
   "benefit": "Merit scholarships available (programme fee ~Rs 25.6L + GST)",
   "window": "typically Sep-Feb in two rounds",
   "windowMonths": [
    9,
    10,
    11,
    12,
    1,
    2
   ],
   "nextExpected": "Sep 2026 (Round 1 for 2027 intake, expected)",
   "frequency": "annual",
   "official": "https://www.isb.edu/programmes/post-graduate-programmes/pgp-yl",
   "resources": [
    {
     "label": "Official application deadlines",
     "url": "https://www.isb.edu/programmes/post-graduate-programmes/pgp-yl/application-deadlines"
    }
   ],
   "tags": [
    "management",
    "fresh graduates",
    "residential",
    "scholarship",
    "MBA-equivalent"
   ]
  },
  {
   "id": "national-scholarship-portal",
   "name": "National Scholarship Portal (NSP)",
   "category": "resource",
   "oneLiner": "Government of India's single portal to find and apply for 100+ central and state scholarships, from pre-matric to PhD, with one login and Aadhaar verification.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "scholarships from a few thousand to Rs 1 lakh+/yr depending on scheme",
   "window": "portal always open; most scheme windows fall Jul–Dec",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://scholarships.gov.in",
   "resources": [
    {
     "label": "Buddy4Study scholarship tracker",
     "url": "https://www.buddy4study.com"
    },
    {
     "label": "myScheme (all govt schemes)",
     "url": "https://www.myscheme.gov.in"
    }
   ],
   "tags": [
    "portal",
    "government",
    "scholarship",
    "free"
   ]
  },
  {
   "id": "buddy4study",
   "name": "Buddy4Study",
   "category": "resource",
   "oneLiner": "India's largest scholarship discovery platform; free listings of govt, private and international scholarships with deadlines, eligibility filters and alerts.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "aggregates scholarships worth Rs 10,000 to several lakh",
   "window": "always open",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://www.buddy4study.com",
   "resources": [
    {
     "label": "National Scholarship Portal (official govt schemes)",
     "url": "https://scholarships.gov.in"
    }
   ],
   "tags": [
    "portal",
    "scholarship",
    "tracker",
    "free"
   ]
  },
  {
   "id": "myscheme",
   "name": "myScheme (Government Scheme Finder)",
   "category": "resource",
   "oneLiner": "Official Government of India portal that matches you to central and state schemes (scholarships, pensions, loans, skilling) by a few eligibility questions.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "eligibility-matched govt benefits across 2,000+ schemes",
   "window": "always open",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://www.myscheme.gov.in",
   "resources": [
    {
     "label": "National Scholarship Portal",
     "url": "https://scholarships.gov.in"
    },
    {
     "label": "National Career Service",
     "url": "https://ncs.gov.in"
    }
   ],
   "tags": [
    "portal",
    "government",
    "schemes",
    "free"
   ]
  },
  {
   "id": "national-career-service",
   "name": "National Career Service (NCS)",
   "category": "resource",
   "oneLiner": "Ministry of Labour's free job portal: verified private and govt vacancies, job fairs, career counselling and free skill courses; no fee at any stage.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": null,
   "window": "always open",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://ncs.gov.in",
   "resources": [
    {
     "label": "Employment News (official weekly)",
     "url": "https://employmentnews.gov.in"
    },
    {
     "label": "myScheme",
     "url": "https://www.myscheme.gov.in"
    }
   ],
   "tags": [
    "portal",
    "government",
    "jobs",
    "free"
   ]
  },
  {
   "id": "employment-news",
   "name": "Employment News / Rozgar Samachar",
   "category": "resource",
   "oneLiner": "Government of India's official weekly (Ministry of I&B) with authentic central govt, PSU and bank vacancy notices; the canonical source before trusting trackers.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": null,
   "window": "new issue every week",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://employmentnews.gov.in",
   "resources": [
    {
     "label": "National Career Service",
     "url": "https://ncs.gov.in"
    },
    {
     "label": "UPSC exam calendar",
     "url": "https://www.upsc.gov.in/examinations/exam-calendar"
    }
   ],
   "tags": [
    "portal",
    "government",
    "jobs",
    "notifications"
   ]
  },
  {
   "id": "upsc-exam-calendar",
   "name": "UPSC Annual Exam Calendar",
   "category": "resource",
   "oneLiner": "UPSC's official year-ahead calendar of all its exams (Civil Services, CDS, NDA, CAPF, ESE) with notification and exam dates, released annually in advance.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": null,
   "window": "always available; updated annually",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://www.upsc.gov.in/examinations/exam-calendar",
   "resources": [
    {
     "label": "UPSC previous question papers (official)",
     "url": "https://www.upsc.gov.in/examinations/previous-question-papers"
    },
    {
     "label": "UPSC home",
     "url": "https://www.upsc.gov.in"
    }
   ],
   "tags": [
    "calendar",
    "government",
    "exams",
    "upsc"
   ]
  },
  {
   "id": "ssc-portal",
   "name": "SSC Official Portal (ssc.gov.in)",
   "category": "resource",
   "oneLiner": "Staff Selection Commission's official site for CGL, CHSL, MTS, GD Constable and JE: notifications, one-time registration, exam calendar, answer keys and results.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": null,
   "window": "always open; each exam has its own window per the calendar",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://ssc.gov.in",
   "resources": [
    {
     "label": "SSC exam calendar (official)",
     "url": "https://ssc.gov.in/examinations/exam-calendar"
    },
    {
     "label": "Employment News",
     "url": "https://employmentnews.gov.in"
    }
   ],
   "tags": [
    "portal",
    "government",
    "exams",
    "ssc"
   ]
  },
  {
   "id": "nta-portal",
   "name": "NTA Exams Portal",
   "category": "resource",
   "oneLiner": "National Testing Agency's official hub for JEE Main, NEET-UG, CUET and UGC-NET: notifications, city slips, admit cards, answer keys and past question papers.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": null,
   "window": "always open; each exam has its own window",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://www.nta.ac.in",
   "resources": [
    {
     "label": "NTA downloads: question papers & answer keys",
     "url": "https://www.nta.ac.in/Download"
    }
   ],
   "tags": [
    "portal",
    "exams",
    "nta",
    "entrance"
   ]
  },
  {
   "id": "apprenticeship-india",
   "name": "Apprenticeship India Portal (NAPS)",
   "category": "resource",
   "oneLiner": "Official portal to register as an apprentice under the Apprentices Act: paid on-the-job training across trades, open from school pass-outs to graduates.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "monthly stipend, roughly Rs 5,000–9,000 by qualification",
   "window": "always open",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://www.apprenticeshipindia.gov.in",
   "resources": [
    {
     "label": "NATS (graduate/diploma apprenticeships)",
     "url": "https://nats.education.gov.in"
    }
   ],
   "tags": [
    "portal",
    "apprenticeship",
    "stipend",
    "government"
   ]
  },
  {
   "id": "nats-portal",
   "name": "NATS – National Apprenticeship Training Scheme",
   "category": "resource",
   "oneLiner": "Ministry of Education portal placing fresh engineering/diploma graduates in 1-year paid apprenticeships with PSUs and companies; a common first step into industry.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "monthly stipend, typically Rs 8,000–15,000",
   "window": "always open",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://nats.education.gov.in",
   "resources": [
    {
     "label": "Apprenticeship India (NAPS)",
     "url": "https://www.apprenticeshipindia.gov.in"
    }
   ],
   "tags": [
    "portal",
    "apprenticeship",
    "engineering",
    "stipend"
   ]
  },
  {
   "id": "freejobalert",
   "name": "FreeJobAlert",
   "category": "resource",
   "oneLiner": "Hugely used unofficial tracker of govt job and exam notices, sorted by qualification and state. Not a govt site; always confirm on the official notification.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": null,
   "window": "always open",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://www.freejobalert.com",
   "resources": [
    {
     "label": "Employment News (official)",
     "url": "https://employmentnews.gov.in"
    }
   ],
   "tags": [
    "tracker",
    "unofficial",
    "jobs",
    "notifications"
   ]
  },
  {
   "id": "sarkari-result",
   "name": "Sarkari Result",
   "category": "resource",
   "oneLiner": "India's most-visited unofficial govt job tracker for notices, admit cards and results. Beware clone domains; the real site is sarkariresult.com.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": null,
   "window": "always open",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://www.sarkariresult.com",
   "resources": [
    {
     "label": "Employment News (official)",
     "url": "https://employmentnews.gov.in"
    },
    {
     "label": "SSC official portal",
     "url": "https://ssc.gov.in"
    }
   ],
   "tags": [
    "tracker",
    "unofficial",
    "jobs",
    "results"
   ]
  },
  {
   "id": "nptel",
   "name": "NPTEL",
   "category": "resource",
   "oneLiner": "Free IIT/IISc video courses in engineering, science and humanities with assignments. Learning is free; the proctored certificate exam is optional and paid.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "free IIT-level courses; optional certification usable for credits",
   "window": "always open; certification runs each semester (Jan & Jul)",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://nptel.ac.in",
   "resources": [
    {
     "label": "SWAYAM (credit-eligible MOOCs)",
     "url": "https://swayam.gov.in"
    }
   ],
   "tags": [
    "free-prep",
    "mooc",
    "engineering",
    "iit"
   ]
  },
  {
   "id": "swayam",
   "name": "SWAYAM",
   "category": "resource",
   "oneLiner": "Government of India MOOC platform with free courses from Class 9 to postgraduate, run by IITs, IGNOU, NCERT and UGC; credits can transfer to your degree.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "free courses; transferable academic credit",
   "window": "always open; course batches start Jan and Jul",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://swayam.gov.in",
   "resources": [
    {
     "label": "NPTEL courses on SWAYAM",
     "url": "https://swayam.gov.in/nc_details/NPTEL"
    }
   ],
   "tags": [
    "free-prep",
    "mooc",
    "government",
    "credits"
   ]
  },
  {
   "id": "khan-academy",
   "name": "Khan Academy",
   "category": "resource",
   "oneLiner": "Completely free lessons and practice in maths, science and economics from Class 1 to college level, in English and Hindi; strong base for JEE/NEET/boards.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": null,
   "window": "always open",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://www.khanacademy.org",
   "resources": [
    {
     "label": "DIKSHA (NCERT-aligned school content)",
     "url": "https://diksha.gov.in"
    }
   ],
   "tags": [
    "free-prep",
    "school",
    "maths",
    "science"
   ]
  },
  {
   "id": "ndli",
   "name": "National Digital Library of India (NDLI)",
   "category": "resource",
   "oneLiner": "Free digital library run by IIT Kharagpur (Ministry of Education): crores of books, papers, question banks and exam prep material, searchable by level and language.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": null,
   "window": "always open",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://ndl.iitkgp.ac.in",
   "resources": [
    {
     "label": "NPTEL",
     "url": "https://nptel.ac.in"
    }
   ],
   "tags": [
    "free-prep",
    "library",
    "books",
    "government"
   ]
  },
  {
   "id": "diksha",
   "name": "DIKSHA",
   "category": "resource",
   "oneLiner": "National school-education platform (NCERT/Ministry of Education): free textbooks, videos and practice for Classes 1–12 in 30+ languages, with QR-coded textbooks.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": null,
   "window": "always open",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://diksha.gov.in",
   "resources": [
    {
     "label": "Khan Academy",
     "url": "https://www.khanacademy.org"
    },
    {
     "label": "National Digital Library of India",
     "url": "https://ndl.iitkgp.ac.in"
    }
   ],
   "tags": [
    "free-prep",
    "school",
    "ncert",
    "government"
   ]
  },
  {
   "id": "afcat",
   "name": "AFCAT (Air Force Common Admission Test)",
   "category": "gov-job",
   "oneLiner": "Twice-yearly IAF exam for officer entry into Flying and Ground Duty branches; graduates apply online, then face the AFSB interview and medicals.",
   "ageMin": 20,
   "ageMax": 26,
   "minEducation": "ug",
   "feeINR": 550,
   "benefit": "Rs 56,100/month starting basic pay + Rs 15,500 MSP as Flying Officer",
   "window": "typically Dec–Jan (AFCAT 1) and May–Jun (AFCAT 2)",
   "windowMonths": [
    12,
    1,
    5,
    6
   ],
   "nextExpected": "Dec 2026 (AFCAT 01/2027, expected)",
   "frequency": "biannual",
   "official": "https://afcat.edcil.co.in/",
   "resources": [
    {
     "label": "Indian Air Force official site",
     "url": "https://indianairforce.nic.in/"
    }
   ],
   "tags": [
    "defence",
    "air-force",
    "officer-entry",
    "flying-branch",
    "age 20-24 for Flying, 20-26 Ground Duty"
   ]
  },
  {
   "id": "csir-ugc-net",
   "name": "CSIR-UGC NET (JRF & Assistant Professor)",
   "category": "gov-job",
   "oneLiner": "NTA exam for JRF and Assistant Professor eligibility in life, chemical, physical, mathematical and earth sciences; the main gateway to funded science PhDs.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "pg",
   "feeINR": 1150,
   "benefit": "JRF fellowship Rs 37,000/month + HRA for PhD",
   "window": "typically May–Jun (June session) and Nov–Dec (Dec session)",
   "windowMonths": [
    5,
    6,
    11,
    12
   ],
   "nextExpected": "Nov 2026 (Dec 2026 session, expected)",
   "frequency": "biannual",
   "official": "https://csirnet.nta.ac.in/",
   "resources": [
    {
     "label": "CSIR HRDG (syllabus, fellowships)",
     "url": "https://csirhrdg.res.in/"
    },
    {
     "label": "NTA main portal",
     "url": "https://www.nta.ac.in/"
    }
   ],
   "tags": [
    "science",
    "phd-funding",
    "jrf",
    "lectureship",
    "no age limit for Asst Professor; JRF has upper age 28"
   ]
  },
  {
   "id": "iit-jam",
   "name": "IIT JAM (Joint Admission Test for Masters)",
   "category": "college",
   "oneLiner": "National entrance for MSc, MSc-PhD dual degree and other PG science programmes at IITs and IISc; no age limit, score also used by NITs via CCMN.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 1800,
   "benefit": null,
   "window": "typically Sep–Oct",
   "windowMonths": [
    9,
    10
   ],
   "nextExpected": "Sep 5 – Oct 12, 2026 (JAM 2027, IIT Kharagpur)",
   "frequency": "annual",
   "official": "https://jam.iitkgp.ac.in/",
   "resources": [
    {
     "label": "NPTEL free courses for prep",
     "url": "https://nptel.ac.in/"
    }
   ],
   "tags": [
    "msc",
    "science",
    "iit",
    "iisc",
    "final-year eligible",
    "exam Feb 14 2027"
   ]
  },
  {
   "id": "ini-cet",
   "name": "INI-CET (AIIMS/JIPMER/PGIMER/NIMHANS PG)",
   "category": "college",
   "oneLiner": "Combined PG medical entrance (MD/MS/DM/MCh) for all Institutes of National Importance: AIIMS, JIPMER, PGIMER, NIMHANS; held twice a year, separate from NEET PG.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 4000,
   "benefit": "PG residency stipend (~Rs 1 lakh/month at AIIMS Delhi)",
   "window": "typically Mar–Apr (July session) and Sep–Oct (January session)",
   "windowMonths": [
    3,
    4,
    9,
    10
   ],
   "nextExpected": "Sep–Oct 2026 (January 2027 session, expected)",
   "frequency": "biannual",
   "official": "https://www.aiimsexams.ac.in/",
   "resources": [
    {
     "label": "AIIMS Exams announcements",
     "url": "https://www.aiimsexams.ac.in/"
    }
   ],
   "tags": [
    "medical",
    "pg-medicine",
    "mbbs-required",
    "internship must be complete by cutoff"
   ]
  },
  {
   "id": "ca-foundation",
   "name": "ICAI CA Foundation (Chartered Accountancy)",
   "category": "college",
   "oneLiner": "Entry exam of ICAI's Chartered Accountancy course, open after Class 12; one-time Rs 9,000 course registration plus exam fee per attempt, held thrice a year.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "12th",
   "feeINR": 1500,
   "benefit": null,
   "window": "course registration year-round; exam forms ~3x/year (for Jan, May/Jun, Sep attempts)",
   "windowMonths": [
    2,
    6,
    7,
    10
   ],
   "nextExpected": "Oct 2026 (exam forms for Jan 2027 attempt, expected)",
   "frequency": "multiple",
   "official": "https://www.icai.org/",
   "resources": [
    {
     "label": "ICAI Self Service Portal (register)",
     "url": "https://eservices.icai.org/"
    },
    {
     "label": "ICAI exam form portal",
     "url": "https://icaiexam.icai.org/"
    }
   ],
   "tags": [
    "commerce",
    "professional-course",
    "chartered-accountant",
    "exams Jan/May-Jun/Sep"
   ]
  },
  {
   "id": "pmkvy-4",
   "name": "PMKVY 4.0 (Pradhan Mantri Kaushal Vikas Yojana)",
   "category": "resource",
   "oneLiner": "Government's flagship free skill-training scheme: short NSQF-aligned courses with certification and placement support via Skill India Digital and training centres.",
   "ageMin": 15,
   "ageMax": 45,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "Free training + government skill certificate",
   "window": "open year-round; batches run continuously at empanelled centres",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://www.skillindiadigital.gov.in/",
   "resources": [
    {
     "label": "Ministry of Skill Development (MSDE)",
     "url": "https://www.msde.gov.in/"
    }
   ],
   "tags": [
    "skilling",
    "free",
    "certification",
    "school-dropouts-welcome",
    "extended to Dec 2026"
   ]
  },
  {
   "id": "ssc-cpo",
   "name": "SSC CPO (Sub-Inspector in Delhi Police & CAPFs)",
   "category": "gov-job",
   "oneLiner": "Graduate-level SSC exam for Sub-Inspector in Delhi Police and CAPFs (BSF, CISF, CRPF, ITBP, SSB); written papers plus physical and medical tests.",
   "ageMin": 20,
   "ageMax": 25,
   "minEducation": "ug",
   "feeINR": 100,
   "benefit": "Rs 35,400 starting basic pay (Pay Level 6) as SI",
   "window": "typically May–Jun (2026 notification delayed, revised schedule awaited)",
   "windowMonths": [
    5,
    6
   ],
   "nextExpected": "revised 2026 window awaited; exam Oct–Nov 2026 (expected)",
   "frequency": "annual",
   "official": "https://ssc.gov.in/",
   "resources": [
    {
     "label": "SSC notices & exam calendar",
     "url": "https://ssc.gov.in/"
    }
   ],
   "tags": [
    "police",
    "paramilitary",
    "sub-inspector",
    "physical-test",
    "LMV licence needed for Delhi Police SI (male)"
   ]
  },
  {
   "id": "nabard-grade-a",
   "name": "NABARD Grade A (Assistant Manager, RDBS)",
   "category": "gov-job",
   "oneLiner": "All-India exam for Assistant Manager (Grade A) in NABARD's Rural Development Banking Service; a regulator-family job alongside RBI Grade B and SEBI Grade A.",
   "ageMin": 21,
   "ageMax": 30,
   "minEducation": "ug",
   "feeINR": 800,
   "benefit": "~Rs 1 lakh/month gross starting salary",
   "window": "varies year to year; recent cycles opened between Jul and Nov",
   "windowMonths": [
    7,
    8,
    9,
    10,
    11
   ],
   "nextExpected": "H2 2026 (expected)",
   "frequency": "annual",
   "official": "https://www.nabard.org/",
   "resources": [
    {
     "label": "NABARD careers/notices (on official site)",
     "url": "https://www.nabard.org/"
    }
   ],
   "tags": [
    "banking",
    "regulatory-body",
    "rural-development",
    "prelims-mains-interview"
   ]
  },
  {
   "id": "bpsc-cce",
   "name": "BPSC Combined Competitive Exam (Bihar PSC)",
   "category": "gov-job",
   "oneLiner": "Bihar's state civil services exam for SDM, DSP, revenue and other gazetted posts; prelims-mains-interview pattern with 5+ lakh applicants per cycle.",
   "ageMin": 20,
   "ageMax": 37,
   "minEducation": "ug",
   "feeINR": 600,
   "benefit": "Rs 56,100 starting basic (Level 10) for SDM/DSP-grade posts",
   "window": "varies by cycle; 72nd CCE applications ran 7–31 May 2026",
   "windowMonths": [
    5,
    6
   ],
   "nextExpected": "73rd CCE, 2027 (expected); 72nd prelims Oct 25, 2026",
   "frequency": "annual",
   "official": "https://bpsc.bihar.gov.in/",
   "resources": [
    {
     "label": "BPSC online application portal",
     "url": "https://bpsconline.bihar.gov.in/"
    }
   ],
   "tags": [
    "state-psc",
    "bihar",
    "civil-services",
    "Rs 200 extra biometric fee without Aadhaar",
    "max age 37 UR male / 40 UR female"
   ]
  },
  {
   "id": "post-matric-st",
   "name": "Post-Matric Scholarship for ST Students",
   "category": "scholarship",
   "oneLiner": "Ministry of Tribal Affairs scholarship on NSP for ST students in Class 11 and above; fee reimbursement plus monthly allowance, family income up to Rs 2.5 lakh.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "10th",
   "feeINR": 0,
   "benefit": "Tuition/compulsory fees reimbursed + Rs 230–1,200/month maintenance allowance",
   "window": "typically Jun–Oct on the National Scholarship Portal (deadlines often extended)",
   "windowMonths": [
    6,
    7,
    8,
    9,
    10
   ],
   "nextExpected": "open now for 2026-27; closes ~Oct 2026",
   "frequency": "annual",
   "official": "https://scholarships.gov.in/",
   "resources": [
    {
     "label": "Ministry of Tribal Affairs",
     "url": "https://tribal.nic.in/"
    },
    {
     "label": "Buddy4Study scholarship tracker",
     "url": "https://www.buddy4study.com/"
    }
   ],
   "tags": [
    "st-students",
    "income-limit-2.5-lakh",
    "nsp",
    "class-11-onwards",
    "hosteller rates higher"
   ]
  },
  {
   "id": "gpat",
   "name": "GPAT (Graduate Pharmacy Aptitude Test)",
   "category": "college",
   "oneLiner": "NBEMS national entrance for M.Pharm admission across India; qualifying also earns the AICTE PG stipend during the course, and the score stays valid for 3 years.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 3500,
   "benefit": "AICTE stipend Rs 12,400/month during M.Pharm for GPAT-qualified students",
   "window": "typically Dec–Jan",
   "windowMonths": [
    12,
    1
   ],
   "nextExpected": "Dec 2026 (GPAT 2027, expected)",
   "frequency": "annual",
   "official": "https://natboard.edu.in/",
   "resources": [
    {
     "label": "AICTE (PG scholarship rules)",
     "url": "https://www.aicte-india.org/"
    }
   ],
   "tags": [
    "pharmacy",
    "mpharm",
    "b.pharm final-year eligible",
    "no age limit",
    "conducted by NBEMS since 2024"
   ]
  },
  {
   "id": "internshala",
   "name": "Internshala",
   "category": "resource",
   "oneLiner": "India's most-used internship platform: free listings of paid internships and fresher jobs across roles and cities, with direct applications year-round.",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "any",
   "feeINR": 0,
   "benefit": "Paid internships (typical stipends Rs 5,000–20,000/month)",
   "window": "open year-round",
   "windowMonths": [],
   "nextExpected": null,
   "frequency": "rolling",
   "official": "https://internshala.com/",
   "resources": [
    {
     "label": "Browse internships",
     "url": "https://internshala.com/internships/"
    }
   ],
   "tags": [
    "internships",
    "fresher-jobs",
    "work-from-home options",
    "free-to-apply"
   ]
  }
 ]
};
