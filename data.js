/* Avsar dataset — single source of truth. Schema documented in CLAUDE.md/README.
   Eligibility numbers are GENERAL-category. windowMonths [] = rolling. Researched + adversarially verified 2026-08-19. */
window.AVSAR_DATA = {
 "updated": "2026-08-21",
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
   ],
   "type": "exam",
   "organization": "UPSC",
   "organizationFull": "Union Public Service Commission",
   "officialWebsite": "https://upsc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "IAS (Indian Administrative Service)",
    "IPS (Indian Police Service)",
    "IFS (Indian Foreign Service)",
    "IRS (Income Tax / Customs)",
    "other Group A and Group B central services"
   ],
   "description": "The single exam that recruits India's senior civil servants. Three stages: a Preliminary screening test, a written Main examination, then an interview. One notification a year.",
   "officialExamPage": "https://www.upsc.gov.in/examinations/Civil%20Services%20%28Preliminary%29%20Examination%2C%202026",
   "status": "upcoming",
   "statusNote": "CSE 2026 is over (applications closed February 2026). The next notification, for CSE 2027, is scheduled for 13 January 2027 in the official UPSC Annual Calendar 2027.",
   "notification": {
    "title": "Civil Services Examination, 2026 — notification",
    "date": "2026-02-04",
    "cycle": "2026",
    "current": false,
    "pdfUrl": "https://www.upsc.gov.in/sites/default/files/Notif-CSP-2026-Engl-060226Rev.pdf",
    "embeddable": false
   },
   "application": {
    "openingDate": null,
    "closingDate": "2026-02-24",
    "url": "https://upsconline.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": "2027-01-13",
    "closingDate": "2027-02-02",
    "examDate": "2027-05-23",
    "source": "UPSC Annual Calendar 2027 (published 20 May 2026)",
    "sourceUrl": "https://www.upsc.gov.in/sites/default/files/Calendar-Year-2027-Engl-200526.pdf"
   },
   "eligibility": {
    "education": "Bachelor's degree in any subject from a recognised university",
    "age": "21 to 32 years for the General category, with relaxations for reserved categories",
    "other": "Indian citizen. Six attempts for General category candidates."
   },
   "fee": "₹100 for the Preliminary examination (women, SC/ST and PwBD candidates are exempt)",
   "syllabus": {
    "title": "Official CSE syllabus (Section III of the notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/Notif-CSP-2026-Engl-060226Rev.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Prelims: 2 objective papers, 200 marks each, 2 hours each (Paper II is qualifying at 33%)",
     "Mains: 9 descriptive papers (Essay, 4 General Studies, 2 Optional, 2 language papers)",
     "Interview / Personality Test: 275 marks"
    ],
    "title": "Scheme of examination (inside the official notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/Notif-CSP-2026-Engl-060226Rev.pdf"
   },
   "pastPapersNote": "UPSC's official archive covers 2023 onward. Optional-subject Main papers are not listed here — the full set is on the UPSC archive page.",
   "pastPapersPage": "https://www.upsc.gov.in/examinations/previous-question-papers",
   "answerKeys": [],
   "answerKeysNote": "UPSC publishes answer keys only for some recent examinations; none are currently listed for CSE.",
   "answerKeysPage": "https://www.upsc.gov.in/examinations/answer-key",
   "mockTests": [],
   "pastPapers": [
    {
     "year": 2026,
     "papers": [
      {
       "name": "Prelims: General Studies Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_CSP_2026_GENERAL_STUDIES_PAPER-I_25052026.pdf"
      },
      {
       "name": "Prelims: General Studies Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_CSP_2026_GENERAL_STUDIES_PAPER-II_25052026.pdf"
      }
     ]
    },
    {
     "year": 2025,
     "papers": [
      {
       "name": "Mains (compulsory): General Studies Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/GENERAL-STUDIES-PAPER%20I-QP-CSM-25-010925.pdf"
      },
      {
       "name": "Mains (compulsory): General Studies Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/GENERAL-STUDIES-PAPER-II-QP-CSM-25-010925.pdf"
      },
      {
       "name": "Mains (compulsory): General Studies Paper - III",
       "url": "https://www.upsc.gov.in/sites/default/files/GENERAL-STUDIES-PAPER-III-QP-CSM-25-010925.pdf"
      },
      {
       "name": "Mains (compulsory): General Studies Paper - IV",
       "url": "https://www.upsc.gov.in/sites/default/files/GENERAL-STUDIES-PAPER-IV-QP-CSM-25-010925.pdf"
      },
      {
       "name": "Mains (compulsory): Essay",
       "url": "https://www.upsc.gov.in/sites/default/files/ESSAY-QP-CSM-25-010925.pdf"
      },
      {
       "name": "Prelims: General Studies Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CSP-25-GENERAL-STUDIES-PAPER-I-26052025.pdf"
      },
      {
       "name": "Prelims: General Studies Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CSP-25-GENERAL-STUDIES-PAPER-II-26052025.pdf"
      }
     ]
    },
    {
     "year": 2024,
     "papers": [
      {
       "name": "Mains (compulsory): General Studies Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_CSM_2024_GenStud_I_03102024.pdf"
      },
      {
       "name": "Mains (compulsory): General Studies Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_CSM_2024_GenStud_II_03102024.pdf"
      },
      {
       "name": "Mains (compulsory): General Studies Paper - III",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_CSM_2024_GenStud_III_03102024.pdf"
      },
      {
       "name": "Mains (compulsory): General Studies Paper - IV",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_CSM_2024_GenStud_IV_03102024.pdf"
      },
      {
       "name": "Mains (compulsory): Essay",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_CSM_2024_ESSAY_03102024.pdf"
      },
      {
       "name": "Prelims: General Studies Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CSP-24-GENERAL-STUDIES-PAPER-I-180624.pdf"
      },
      {
       "name": "Prelims: General Studies Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CSP-24-GENERAL-STUDIES-PAPER-II-180624.pdf"
      }
     ]
    },
    {
     "year": 2023,
     "papers": [
      {
       "name": "Mains (compulsory): General Studies Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CSM-23-GENERAL-STUDIES-PAPER-I-180923.pdf"
      },
      {
       "name": "Mains (compulsory): General Studies Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CSM-23-GENERAL-STUDIES-PAPER-II-180923.pdf"
      },
      {
       "name": "Mains (compulsory): General Studies Paper - III",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CSM-23-GENERAL-STUDIES-PAPER-III-180923.pdf"
      },
      {
       "name": "Mains (compulsory): General Studies Paper - IV",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CSM-23-GENERAL-STUDIES-PAPER-IV-180923.pdf"
      },
      {
       "name": "Mains (compulsory): Essay",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CSM-23-ESSAY-180923.pdf"
      }
     ]
    }
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
   ],
   "type": "exam",
   "organization": "UPSC",
   "organizationFull": "Union Public Service Commission",
   "officialWebsite": "https://upsc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Assistant Executive Engineer / Assistant Director in Central Engineering Services",
    "Indian Railways engineering services",
    "CPWD, MES, BRO, Telecom and Power engineering cadres"
   ],
   "description": "Recruits graduate engineers into Group A central engineering services, in four branches: Civil, Mechanical, Electrical, and Electronics & Telecommunication.",
   "officialExamPage": "https://www.upsc.gov.in/examinations/Engineering%20Services%20%28Preliminary%29%20Examination%2C%202026",
   "status": "upcoming",
   "statusNote": "The ESE 2027 notification is scheduled for 16 September 2026 in the official UPSC Annual Calendar 2027, with applications closing 6 October 2026.",
   "notification": {
    "title": "Engineering Services (Preliminary) Examination, 2026 — notification",
    "date": "2025-09-26",
    "cycle": "2026",
    "current": false,
    "pdfUrl": "https://www.upsc.gov.in/sites/default/files/Notif-ESEP-26-Engl.pdf",
    "embeddable": false
   },
   "application": {
    "openingDate": null,
    "closingDate": "2025-10-16",
    "url": "https://upsconline.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": "2026-09-16",
    "closingDate": "2026-10-06",
    "examDate": "2027-01-31",
    "source": "UPSC Annual Calendar 2027 (published 20 May 2026)",
    "sourceUrl": "https://www.upsc.gov.in/sites/default/files/Calendar-Year-2027-Engl-200526.pdf"
   },
   "eligibility": {
    "education": "Engineering degree (or an equivalent qualification listed in the notification) in the branch applied for",
    "age": "21 to 30 years for the General category, reckoned as on 1 January (1 January 2026 in the linked ESE 2026 notice), with relaxations for reserved categories",
    "other": "Indian citizen."
   },
   "fee": "₹200 for the Preliminary examination (women, SC/ST and PwBD candidates are exempt)",
   "syllabus": {
    "title": "Official ESE syllabus (inside the notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/Notif-ESEP-26-Engl.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Prelims: Paper I General Studies & Engineering Aptitude (200 marks), Paper II branch subject (300 marks), both objective",
     "Mains: 2 descriptive branch papers of 300 marks each",
     "Personality Test: 200 marks"
    ],
    "title": "Scheme of examination (inside the official notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/Notif-ESEP-26-Engl.pdf"
   },
   "pastPapersPage": "https://www.upsc.gov.in/examinations/previous-question-papers",
   "answerKeys": [],
   "answerKeysPage": "https://www.upsc.gov.in/examinations/answer-key",
   "mockTests": [],
   "pastPapers": [
    {
     "year": 2026,
     "papers": [
      {
       "name": "Mains: Civil Engineering Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-26-220626-CIVIL-ENGINEERING-PAPER-I.pdf"
      },
      {
       "name": "Mains: Civil Engineering Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-26-220626-CIVIL-ENGINEERING-PAPER-II.pdf"
      },
      {
       "name": "Mains: Mechanical Engineering Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-26-220626-MECHANICAL-ENGINEERING-PAPER-I.pdf"
      },
      {
       "name": "Mains: Mechanical Engineering Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-26-220626-MECHANICAL-ENGINEERING-PAPER-II.pdf"
      },
      {
       "name": "Mains: Electrical Engineering Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-26-220626-ELECTRICAL-ENGINEERING-PAPER-I.pdf"
      },
      {
       "name": "Mains: Electrical Engineering Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-26-220626-ELECTRICAL-ENGINEERING-PAPER-II.pdf"
      },
      {
       "name": "Mains: Electronics and Telecommunication Engineering Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-26-220626-ELECTRONICS-TELECOM-ENGINEERING-PAPER-I.pdf"
      },
      {
       "name": "Mains: Electronics and Telecommunication Engineering Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-26-220626-ELECTRONICS-TELECOM-ENGINEERING-PAPER-II.pdf"
      },
      {
       "name": "Prelims: Paper - I General Studies and Engineering Aptitude",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_ESPE26_GenStud_EnggAptit_I_09022026.pdf"
      },
      {
       "name": "Prelims: Paper - II Electrical Engineering",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_ESPE26_ElecEngg_II_09022026.pdf"
      },
      {
       "name": "Prelims: Paper - II Electronics and Telecommunication Engineering",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_ESPE26_ElecTelecomEngg_II_09022026.pdf"
      },
      {
       "name": "Prelims: Paper - II Mechanical Engineering",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_ESPE26_MechEngg_II_09022026.pdf"
      },
      {
       "name": "Prelims: Paper - II Civil Engineering",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_ESPE26_CivilEngg_II_09022026.pdf"
      }
     ]
    },
    {
     "year": 2025,
     "papers": [
      {
       "name": "Mains: Civil Engineering Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/CIVIL-ENGINEERING-PAPER-I-QP-ESEM-25-110825.pdf"
      },
      {
       "name": "Mains: Civil Engineering Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/CIVIL-ENGINEERING-PAPER-II-QP-ESEM-25-110825.pdf"
      },
      {
       "name": "Mains: Mechanical Engineering Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/MECHANICAL-ENGINEERING-PAPER-I-QP-ESEM-25-110825.pdf"
      },
      {
       "name": "Mains: Mechanical Engineering Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/MECHANICAL-ENGINEERING-PAPER-II-QP-ESEM-25-110825.pdf"
      },
      {
       "name": "Mains: Electrical Engineering Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/ELECTRICAL-ENGINEERING-PAPER-I-QP-ESEM-25-110825.pdf"
      },
      {
       "name": "Mains: Electrical Engineering Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/ELECTRICAL-ENGINEERING-PAPER%20II-QP-ESEM-25-110825.pdf"
      },
      {
       "name": "Mains: Electronics and Telecommunication Engineering Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/ELECTRO-TELECOMN-ENGINEERING-PAPER-I-QP-ESEM-25-110825.pdf"
      },
      {
       "name": "Mains: Electronics and Telecommunication Engineering Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/ELECTRO-TELECOMN-ENGINEERING%20PAPER%20II-QP-ESEM-25-110825.pdf"
      },
      {
       "name": "Prelims: Paper - I General Studies and Engineering Aptitude",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEP-25-GENERAL-STUDIES-AND-ENGINEERING-APTITUDE-P-I-090625.pdf"
      },
      {
       "name": "Prelims: Paper - II Electrical Engineering",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEP-25-ELECTRICAL-ENGINEERING-P-II-090625.pdf"
      },
      {
       "name": "Prelims: Paper - II Electronics and Telecommunication Engineering",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEP-25-ELECTRONICS-AND-TELECOMMUNICATION-ENGINEERING-P-II-090625.pdf"
      },
      {
       "name": "Prelims: Paper - II Mechanical Engineering",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEP-25-MECHANICAL-ENGINEERING-P-II-090625.pdf"
      },
      {
       "name": "Prelims: Paper - II Civil Engineering",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEP-25-CIVIL-ENGINEERING-P-II-090625.pdf"
      }
     ]
    },
    {
     "year": 2024,
     "papers": [
      {
       "name": "Mains: Civil Engineering Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-24-CIVIL-ENGINEERING-PAPER-I-240624.pdf"
      },
      {
       "name": "Mains: Civil Engineering Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-24-CIVIL-ENGINEERING-PAPER-II-240624.pdf"
      },
      {
       "name": "Mains: Mechanical Engineering Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-24-MECHANICAL-ENGINEERING-PAPER-I-240624.pdf"
      },
      {
       "name": "Mains: Mechanical Engineering Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-24-MECHANICAL-ENGINEERING-PAPER-II-240624.pdf"
      },
      {
       "name": "Mains: Electrical Engineering Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-24-ELECTRICAL-ENGINEERING-PAPER-I-240624.pdf"
      },
      {
       "name": "Mains: Electrical Engineering Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-24-ELECTRICAL-ENGINEERING-PAPER-II-240624.pdf"
      },
      {
       "name": "Mains: Electronics and Telecommunication Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-24-ELECTRONICS-TELECOMMUNICATION-ENGINEERING-PAPER-I-240624.pdf"
      },
      {
       "name": "Mains: Electronics and Telecommunication Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-ESEM-24-ELECTRONICS-TELECOMMUNICATION-ENGINEERING-PAPER-II-240624.pdf"
      },
      {
       "name": "Prelims: Paper - I General Studies and Engineering Aptitude",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-EnggServcPrelExam-24-GENERAL-STUDIES-AND-ENGINEERING-APTITUDE-190224.pdf"
      },
      {
       "name": "Prelims: Paper - II Electrical Engineering",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-EnggServcPrelExam-24-ELECTRICAL-ENGINEERING-190224.pdf"
      },
      {
       "name": "Prelims: Paper - II Mechanical Engineering",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-EnggServcPrelExam-24-MECHANICAL-ENGINEERING-190224.pdf"
      },
      {
       "name": "Prelims: Paper - II Civil Engineering",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-EnggServcPrelExam-24-CIVIL-ENGINEERING-190224.pdf"
      },
      {
       "name": "Prelims: Paper - II Electronics and Telecommunication Engineering",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-EnggServcPrelExam-24-ELECTRONICS-AND-TELECOMMUNICATION-ENGINEERING-200224r.pdf"
      }
     ]
    }
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
   ],
   "type": "exam",
   "organization": "UPSC",
   "organizationFull": "Union Public Service Commission",
   "officialWebsite": "https://upsc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Indian Military Academy, Dehradun (Army officer)",
    "Indian Naval Academy, Ezhimala (Navy officer)",
    "Air Force Academy, Hyderabad (Air Force officer)",
    "Officers Training Academy, Chennai (Short Service Commission)"
   ],
   "description": "The graduate route to a commission as an officer in the Army, Navy or Air Force. Held twice a year — CDS (I) and CDS (II).",
   "officialExamPage": "https://www.upsc.gov.in/examinations/Combined%20Defence%20Services%20Examination%20%28II%29%2C%202026",
   "status": "closed",
   "statusNote": "Applications for CDS (II) 2026 have closed; the written examination follows. The next notification, for CDS (I) 2027, is scheduled for 2 December 2026 in the official UPSC Annual Calendar 2027.",
   "notification": {
    "title": "Combined Defence Services Examination (II), 2026 — notification",
    "date": "2026-05-20",
    "cycle": "CDS (II) 2026",
    "current": true,
    "pdfUrl": "https://www.upsc.gov.in/sites/default/files/Notif-CDS-II-2026-Engl-200526.pdf",
    "embeddable": false
   },
   "application": {
    "openingDate": null,
    "closingDate": "2026-06-09",
    "url": "https://upsconline.gov.in/"
   },
   "examDate": "2026-09-13",
   "expected": {
    "notificationDate": "2026-12-02",
    "closingDate": "2026-12-22",
    "examDate": "2027-04-11",
    "source": "UPSC Annual Calendar 2027 (published 20 May 2026)",
    "sourceUrl": "https://www.upsc.gov.in/sites/default/files/Calendar-Year-2027-Engl-200526.pdf"
   },
   "eligibility": {
    "education": "Bachelor's degree in any subject for IMA and OTA; for the Naval Academy an engineering degree or a B.Sc. with Physics as a core or elective subject (plus Physics and Mathematics at 10+2); for the Air Force Academy any degree with Physics and Mathematics at 10+2, or a B.E. Final-year students may apply.",
    "age": "19 to 25 years depending on the academy (IMA and Naval Academy 19 to 24, Air Force Academy 20 to 24 and up to 26 with a current DGCA Commercial Pilot Licence, OTA 19 to 25); the exact birth-date window differs for each academy, so check the notification",
    "other": "Unmarried candidates only for IMA, INA and AFA. Men and women both eligible for OTA."
   },
   "fee": "₹200 (women, SC and ST candidates are exempt)",
   "syllabus": {
    "title": "Official CDS syllabus (inside the notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/Notif-CDS-II-2026-Engl-200526.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "IMA / INA / AFA: 3 objective papers — English, General Knowledge, Elementary Mathematics (100 marks each, 2 hours each)",
     "OTA: 2 objective papers — English and General Knowledge (100 marks each)",
     "Then SSB interview and personality test"
    ],
    "title": "Scheme of examination (inside the official notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/Notif-CDS-II-2026-Engl-200526.pdf"
   },
   "pastPapersPage": "https://www.upsc.gov.in/examinations/previous-question-papers",
   "answerKeys": [
    {
     "year": 2025,
     "title": "CDS (II) 2025 — English",
     "url": "https://www.upsc.gov.in/sites/default/files/AnsKey-CDS-II-Examination-2025-ENGLISH-130826.pdf"
    },
    {
     "year": 2025,
     "title": "CDS (II) 2025 — Elementary Mathematics",
     "url": "https://www.upsc.gov.in/sites/default/files/AnsKey-CDS-II-Examination-2025-ElemMath-130826.pdf"
    },
    {
     "year": 2025,
     "title": "CDS (II) 2025 — General Knowledge",
     "url": "https://www.upsc.gov.in/sites/default/files/AnsKey-CDS-II-Examination-2025-GK-130826.pdf"
    }
   ],
   "answerKeysPage": "https://www.upsc.gov.in/examinations/answer-key",
   "mockTests": [],
   "pastPapers": [
    {
     "year": 2026,
     "papers": [
      {
       "name": "English — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDS-I-26-ENGLISH-130426.pdf"
      },
      {
       "name": "General Knowledge — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDS-I-26-GENERAL-KNOWLEDGE-130426.pdf"
      },
      {
       "name": "Elementary Mathematics — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDS-I-26-ELEMENTARY-MATHEMATICS-130426.pdf"
      }
     ]
    },
    {
     "year": 2025,
     "papers": [
      {
       "name": "English — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDSE-II-25-ENGLISH-150925.pdf"
      },
      {
       "name": "General Knowledge — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDSE-II-25-GENERAL-KNOWLEDGE-150925.pdf"
      },
      {
       "name": "Elementary Mathematics — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDSE-II-25-ELEMENTARY-MATHEMATICS-150925.pdf"
      },
      {
       "name": "English — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDSE-I-25-ENGLISH-150425.pdf"
      },
      {
       "name": "General Knowledge — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDSE-I-25-GENERAL-KNOWLEDGE-150425.pdf"
      },
      {
       "name": "Elementary Mathematics — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDSE-I-25-ELEMENTARY-MATHEMATICS-150425.pdf"
      }
     ]
    },
    {
     "year": 2024,
     "papers": [
      {
       "name": "English — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDSE-II-24-ENGLISH-020924.pdf"
      },
      {
       "name": "General Knowledge — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDSE-II-24-GENERAL-KNOWLEDGE-020924.pdf"
      },
      {
       "name": "Elementary Mathematics — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDSE-II-24-ELEMENTARY-MATHEMATICS-020924.pdf"
      },
      {
       "name": "Elementary Mathematics — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_CDSI2024_ELEMENTARY-MATHEMATICS_22042024.pdf"
      },
      {
       "name": "English — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_CDSI2024_ENGLISH_22042024.pdf"
      },
      {
       "name": "General Knowledge — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_CDSI2024_GENERAL-KNOWLEDGE_22042024.pdf"
      }
     ]
    },
    {
     "year": 2023,
     "papers": [
      {
       "name": "Elementary Mathematics — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDSE-II-2023-EleMath-04092023.pdf"
      },
      {
       "name": "English — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDSE-II-2023-Eng-04092023.pdf"
      },
      {
       "name": "General Knowledge — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CDSE-II-2023-GK-04092023.pdf"
      }
     ]
    }
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
   ],
   "type": "exam",
   "organization": "UPSC",
   "organizationFull": "Union Public Service Commission",
   "officialWebsite": "https://upsc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "National Defence Academy, Khadakwasla (Army, Navy, Air Force cadet)",
    "Indian Naval Academy — 10+2 Cadet Entry Scheme"
   ],
   "description": "The route into the armed forces straight after class 12. Cadets train at the National Defence Academy or the Naval Academy and are commissioned as officers. Held twice a year.",
   "officialExamPage": "https://www.upsc.gov.in/examinations/National%20Defence%20Academy%20and%20Naval%20Academy%20Examination%20%28II%29%2C%202026",
   "status": "closed",
   "statusNote": "Applications for NDA & NA (II) 2026 have closed; the written examination follows. The next notification, for NDA & NA (I) 2027, is scheduled for 2 December 2026 in the official UPSC Annual Calendar 2027.",
   "notification": {
    "title": "National Defence Academy and Naval Academy Examination (II), 2026 — notification",
    "date": "2026-05-20",
    "cycle": "NDA & NA (II) 2026",
    "current": true,
    "pdfUrl": "https://www.upsc.gov.in/sites/default/files/Notif-NDA-II-2026-Engl-200526.pdf",
    "embeddable": false
   },
   "application": {
    "openingDate": null,
    "closingDate": "2026-06-09",
    "url": "https://upsconline.gov.in/"
   },
   "examDate": "2026-09-13",
   "expected": {
    "notificationDate": "2026-12-02",
    "closingDate": "2026-12-22",
    "examDate": "2027-04-11",
    "source": "UPSC Annual Calendar 2027 (published 20 May 2026)",
    "sourceUrl": "https://www.upsc.gov.in/sites/default/files/Calendar-Year-2027-Engl-200526.pdf"
   },
   "eligibility": {
    "education": "Class 12 pass (or appearing) for the Army wing; class 12 with Physics, Chemistry and Mathematics for the Air Force, Navy and Naval Academy",
    "age": "Broadly 16.5 to 19.5 years — the exact birth-date window is in the notification",
    "other": "Unmarried candidates only. Both men and women are eligible."
   },
   "fee": "₹100, non-refundable (women, SC and ST candidates are exempt, as are wards of serving or ex JCOs/NCOs/ORs who are studying in a Sainik School or Military School; OBC and EWS candidates pay in full)",
   "syllabus": {
    "title": "Official NDA & NA syllabus (inside the notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/Notif-NDA-II-2026-Engl-200526.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Paper I: Mathematics — 300 marks, 2.5 hours, objective",
     "Paper II: General Ability Test — 600 marks, 2.5 hours, objective",
     "Then SSB interview and personality test (900 marks)"
    ],
    "title": "Scheme of examination (inside the official notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/Notif-NDA-II-2026-Engl-200526.pdf"
   },
   "pastPapersPage": "https://www.upsc.gov.in/examinations/previous-question-papers",
   "answerKeys": [],
   "answerKeysPage": "https://www.upsc.gov.in/examinations/answer-key",
   "mockTests": [],
   "pastPapers": [
    {
     "year": 2026,
     "papers": [
      {
       "name": "Mathematics — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-NDA-NA-I-26-MATHEMATICS-130426.pdf"
      },
      {
       "name": "General Ability Test — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-NDA-NA-I-26-GENERAL-ABILITY-TEST-130426.pdf"
      }
     ]
    },
    {
     "year": 2025,
     "papers": [
      {
       "name": "General Ability Test — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-NDANA-II-25-GENERAL-ABILITY-TEST-150925.pdf"
      },
      {
       "name": "Mathematics — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-NDANA-II-25-MATHEMATICS-150925.pdf"
      },
      {
       "name": "Mathematics — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-NDA-NA-I-25-MATHEMATICS-150425.pdf"
      },
      {
       "name": "General Ability Test — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-NDA-NA-I-25-GENERAL-ABILITY-TEST-150425.pdf"
      }
     ]
    },
    {
     "year": 2024,
     "papers": [
      {
       "name": "General Ability Test — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-NDA-NA-II-24-GENERAL-ABILITY-TEST-020924.pdf"
      },
      {
       "name": "Mathematics — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-NDA-NA-II-24-MATHEMATICS-020924.pdf"
      },
      {
       "name": "General Ability Test — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_NDANAI2024_GENERAL-ABILITY-TEST_22042024.pdf"
      },
      {
       "name": "Mathematics — Exam (I)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_NDANAI2024_MATHEMATICS_22042024.pdf"
      }
     ]
    },
    {
     "year": 2023,
     "papers": [
      {
       "name": "General Ability Test — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-NDANA-II-2023-GAT-04092023.pdf"
      },
      {
       "name": "Mathematics — Exam (II)",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-NDANA-II-2023-Maths-04092023.pdf"
      }
     ]
    }
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
   ],
   "type": "exam",
   "organization": "UPSC",
   "organizationFull": "Union Public Service Commission",
   "officialWebsite": "https://upsc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Assistant Commandant in BSF, CRPF, CISF, ITBP and SSB"
   ],
   "description": "Recruits graduates directly as Assistant Commandant — a gazetted officer rank — in the five Central Armed Police Forces. Written exam, then physical tests and an interview.",
   "officialExamPage": "https://www.upsc.gov.in/examinations/Central%20Armed%20Police%20Forces%20%28ACs%29%20Examination%2C%202026",
   "status": "upcoming",
   "statusNote": "CAPF (AC) 2026 is over. The next notification, for 2027, is scheduled for 17 February 2027 in the official UPSC Annual Calendar 2027.",
   "notification": {
    "title": "Central Armed Police Forces (ACs) Examination, 2026 — notification",
    "date": "2026-02-20",
    "cycle": "2026",
    "current": false,
    "pdfUrl": "https://www.upsc.gov.in/sites/default/files/ExamNotifi_CAPF_AC_Exam_2026_Eng_20022026.pdf",
    "embeddable": false
   },
   "application": {
    "openingDate": "2026-02-20",
    "closingDate": "2026-03-12",
    "url": "https://upsconline.gov.in/"
   },
   "examDate": "2026-07-19",
   "expected": {
    "notificationDate": "2027-02-17",
    "closingDate": "2027-03-09",
    "examDate": "2027-07-04",
    "source": "UPSC Annual Calendar 2027 (published 20 May 2026)",
    "sourceUrl": "https://www.upsc.gov.in/sites/default/files/Calendar-Year-2027-Engl-200526.pdf"
   },
   "eligibility": {
    "education": "Bachelor's degree in any subject",
    "age": "20 to 25 years, with relaxations for reserved categories",
    "other": "Indian citizen. Physical standards and a physical efficiency test apply."
   },
   "fee": "₹200 (women, SC and ST candidates are exempt)",
   "syllabus": {
    "title": "Official CAPF (AC) syllabus (inside the notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/ExamNotifi_CAPF_AC_Exam_2026_Eng_20022026.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Paper I: General Ability and Intelligence — 250 marks, objective, 2 hours",
     "Paper II: General Studies, Essay and Comprehension — 200 marks, descriptive, 3 hours",
     "Then Physical Standards / Efficiency Tests, medical, and an interview of 150 marks"
    ],
    "title": "Scheme of examination (inside the official notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/ExamNotifi_CAPF_AC_Exam_2026_Eng_20022026.pdf"
   },
   "pastPapersPage": "https://www.upsc.gov.in/examinations/previous-question-papers",
   "answerKeys": [
    {
     "year": 2025,
     "title": "CAPF (AC) 2025 — General Ability and Intelligence",
     "url": "https://www.upsc.gov.in/sites/default/files/AnsKey-CAPFACs-Exam-2025-GAI-110826.pdf"
    }
   ],
   "answerKeysPage": "https://www.upsc.gov.in/examinations/answer-key",
   "mockTests": [],
   "pastPapers": [
    {
     "year": 2026,
     "papers": [
      {
       "name": "General Ability and Intelligence",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CAPF-Exam-2026-GENERAL-ABILITY-AND-INTELLIGENCE-200726.pdf"
      },
      {
       "name": "General Studies, Essay and Comprehension",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CAPF-Exam-2026-GENERAL-STUDIES-ESSAY-AND-COMPREHENSION-200726.pdf"
      }
     ]
    },
    {
     "year": 2025,
     "papers": [
      {
       "name": "General Ability and Intelligence",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CAPF-25-GENERAL-ABILITY-INTELLIGENCE-040825.pdf"
      },
      {
       "name": "General Studies, Essay and Comprehension",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CAPF-25-GENERAL-STUDIES-ESSAY-COMPREHENSION-040825.pdf"
      }
     ]
    },
    {
     "year": 2024,
     "papers": [
      {
       "name": "GENERAL ABILITY AND INTELLIGENCE",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_CAPF_2024_GEN-ABILITY-AND-INTELLI_05082024.pdf"
      },
      {
       "name": "GENERAL STUDIES, ESSAY AND COMPREHENSION",
       "url": "https://www.upsc.gov.in/sites/default/files/QP_CAPF_2024_GS-ESSAY-AND-COMP_05082024.pdf"
      }
     ]
    }
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
   "benefit": "Rs 25,500–47,600 starting basic depending on post (Level 4–8)",
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
   ],
   "type": "exam",
   "organization": "SSC",
   "organizationFull": "Staff Selection Commission",
   "officialWebsite": "https://ssc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Income Tax Inspector",
    "Inspector (GST / Central Excise / Customs)",
    "Assistant Section Officer",
    "Assistant Audit Officer",
    "Auditor",
    "Accountant",
    "Sub-Inspector in CBI / NIA",
    "other Group B and Group C posts"
   ],
   "description": "The biggest graduate-level recruitment for central government office jobs. Two computer-based tiers, then document verification. Notified once a year.",
   "officialExamPage": "https://ssc.gov.in/",
   "status": "closed",
   "statusNote": "Applications for CGL 2026 closed on 25 June 2026, after SSC re-opened the window for two days by a notice dated 23 June 2026 (https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/CGLE_Reopen_23062026.pdf); the fee-payment last date was 26 June 2026. Tier-I was scheduled for August–September 2026 and Tier-II for December 2026 in the official notice.",
   "notification": {
    "title": "Notice of Combined Graduate Level Examination, 2026",
    "date": "2026-05-21",
    "cycle": "2026",
    "current": true,
    "pdfUrl": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf",
    "embeddable": true
   },
   "application": {
    "openingDate": "2026-05-21",
    "closingDate": "2026-06-25",
    "url": "https://ssc.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "SSC examination calendar",
    "sourceUrl": "https://ssc.gov.in/for-candidates/examination-calendar"
   },
   "eligibility": {
    "education": "Bachelor's degree in any subject; some posts need specific subjects. Junior Statistical Officer needs at least 60% in Mathematics at 12th standard level, or Statistics as a subject at degree level",
    "age": "18 to 32 years depending on the post, with relaxations for reserved categories",
    "other": "Indian citizen (a few posts also open to specified Nepal/Bhutan/Tibetan candidates)."
   },
   "fee": "₹100 (women, SC/ST, PwBD and ex-servicemen candidates are exempt)",
   "syllabus": {
    "title": "Official CGL syllabus (SSC syllabus repository)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/Syllabus/CGL-syllabus-169635-.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Tier-I: 4 sections of 25 questions each — 200 marks, 1 hour, negative marking of 0.50 per wrong answer",
     "Tier-II: Paper I in two sessions (Mathematical Abilities, Reasoning, English, General Awareness, Computer Knowledge, Data Entry Speed); Papers II and III only for specific posts",
     "Both tiers are computer-based"
    ],
    "title": "Scheme of examination (paragraph 13 of the official notice)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "SSC does not publish a public archive of previous question papers. Candidates get their own question paper and response sheet in the candidate login area after each examination.",
   "pastPapersPage": "https://ssc.gov.in/for-candidates/previous-year-question-paper",
   "answerKeys": [],
   "answerKeysNote": "SSC releases tentative and final answer keys inside the candidate login area, not as public downloads.",
   "answerKeysPage": "https://ssc.gov.in/",
   "mockTests": []
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
   "benefit": "Rs 19,900–29,200 starting basic depending on post (Level 2–5)",
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
   ],
   "type": "exam",
   "organization": "SSC",
   "organizationFull": "Staff Selection Commission",
   "officialWebsite": "https://ssc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Lower Division Clerk (LDC)",
    "Junior Secretariat Assistant (JSA)",
    "Data Entry Operator (DEO)",
    "Data Entry Operator Grade 'A'"
   ],
   "description": "Class-12-level recruitment for clerical and data-entry posts across central ministries and departments. Two computer-based tiers, plus a typing or data-entry skill test.",
   "officialExamPage": "https://ssc.gov.in/",
   "status": "not-announced",
   "statusNote": "No CHSL 2026 notice has been published yet. The latest published notice is CHSL 2025 (23 June 2025), whose application window has closed.",
   "notification": {
    "title": "Notice of Combined Higher Secondary Level Examination, 2025",
    "date": "2025-06-23",
    "cycle": "2025",
    "current": false,
    "pdfUrl": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_chsl_2025.pdf",
    "embeddable": true
   },
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://ssc.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "SSC examination calendar",
    "sourceUrl": "https://ssc.gov.in/for-candidates/examination-calendar"
   },
   "eligibility": {
    "education": "Class 12 (higher secondary) pass; the DEO post in some ministries needs Science with Mathematics at 12th",
    "age": "18 to 27 years, with relaxations for reserved categories",
    "other": "Indian citizen. A typing or data-entry speed test applies."
   },
   "fee": "₹100 (women, SC/ST, PwBD and ex-servicemen candidates are exempt)",
   "syllabus": {
    "title": "Official CHSL syllabus (Annexure of the notice)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_chsl_2025.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Tier-I: 100 objective questions, 200 marks, 1 hour, negative marking of 0.50 per wrong answer",
     "Tier-II: computer-based, with a typing / data-entry skill test module",
     "Both tiers are computer-based"
    ],
    "title": "Scheme of examination (paragraph 13 of the official notice)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_chsl_2025.pdf"
   },
   "pastPapers": [
    {
     "year": 2023,
     "papers": [
      {
       "name": "Official model question paper (English)",
       "url": "https://ssc.gov.in/api/attachment/uploads/masterData/QuestionPapers/model-question-paper-english.pdf"
      }
     ]
    }
   ],
   "pastPapersNote": "This is the only question paper SSC publishes openly — an official model paper. Actual previous papers are released to each candidate in the login area.",
   "pastPapersPage": "https://ssc.gov.in/for-candidates/previous-year-question-paper",
   "answerKeys": [],
   "answerKeysNote": "SSC releases answer keys inside the candidate login area.",
   "answerKeysPage": "https://ssc.gov.in/",
   "mockTests": []
  },
  {
   "id": "ssc-mts",
   "name": "SSC Multi-Tasking Staff (MTS) & Havaldar",
   "category": "gov-job",
   "oneLiner": "10th-pass entry to central government Group C support posts and Havaldar in CBIC/CBN; the most accessible SSC exam.",
   "ageMin": 18,
   "ageMax": 27,
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
   ],
   "type": "exam",
   "organization": "SSC",
   "organizationFull": "Staff Selection Commission",
   "officialWebsite": "https://ssc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Multi-Tasking Staff (non-technical) in central ministries",
    "Havaldar in CBIC and the Central Bureau of Narcotics"
   ],
   "description": "Class-10-level recruitment for the largest number of central government support-staff posts. One computer-based examination; the Havaldar post adds physical tests.",
   "officialExamPage": "https://ssc.gov.in/",
   "status": "not-announced",
   "statusNote": "No MTS 2026 notice has been published yet. The latest published notice is MTS 2025 (26 June 2025), whose application window has closed.",
   "notification": {
    "title": "Notice of Multi-Tasking (Non-Technical) Staff and Havaldar (CBIC and CBN) Examination, 2025",
    "date": "2025-06-26",
    "cycle": "2025",
    "current": false,
    "pdfUrl": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_mts_2025.pdf",
    "embeddable": true
   },
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://ssc.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "SSC examination calendar",
    "sourceUrl": "https://ssc.gov.in/for-candidates/examination-calendar"
   },
   "eligibility": {
    "education": "Class 10 (matriculation) pass",
    "age": "18 to 25 years for most posts and 18 to 27 for some, with relaxations for reserved categories",
    "other": "Indian citizen. Havaldar applicants must clear a Physical Efficiency Test and Physical Standard Test."
   },
   "fee": "₹100 (women, SC/ST, PwBD and ex-servicemen candidates are exempt)",
   "syllabus": {
    "title": "Official MTS syllabus (Annexure of the notice)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_mts_2025.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Computer-based examination in two sessions of 45 minutes each",
     "Session I: Numerical and Mathematical Ability, Reasoning Ability and Problem Solving (60 marks each)",
     "Session II: General Awareness and English Language",
     "Offered in English, Hindi and 13 regional languages"
    ],
    "title": "Scheme of examination (paragraph 14 of the official notice)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_mts_2025.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "SSC does not publish a public archive of previous question papers.",
   "pastPapersPage": "https://ssc.gov.in/for-candidates/previous-year-question-paper",
   "answerKeys": [],
   "answerKeysNote": "SSC releases answer keys inside the candidate login area.",
   "answerKeysPage": "https://ssc.gov.in/",
   "mockTests": [
    {
     "title": "Official SSC mock test link for MTS (non-technical) candidates",
     "url": "https://ssc.gov.in/mock-link-for-candidates-of-multi-tasking-non-technical-staff"
    }
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
   ],
   "type": "exam",
   "organization": "SSC",
   "organizationFull": "Staff Selection Commission",
   "officialWebsite": "https://ssc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Constable (General Duty) in BSF, CRPF, CISF, ITBP, SSB and SSF",
    "Rifleman (General Duty) in Assam Rifles"
   ],
   "description": "The largest class-10-level uniformed recruitment in the country. Computer-based test, then physical tests and a medical examination.",
   "officialExamPage": "https://ssc.gov.in/",
   "status": "not-announced",
   "statusNote": "The 2026 examination has been conducted (applications closed 31 December 2025). The notice for the 2027 examination has not been published yet.",
   "notification": {
    "title": "Notice of Constable (GD) in CAPFs, SSF and Rifleman (GD) in Assam Rifles Examination, 2026",
    "date": "2025-12-01",
    "cycle": "2026",
    "current": false,
    "pdfUrl": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_CTGD_2026.pdf",
    "embeddable": true
   },
   "application": {
    "openingDate": "2025-12-01",
    "closingDate": "2025-12-31",
    "url": "https://ssc.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "SSC examination calendar",
    "sourceUrl": "https://ssc.gov.in/for-candidates/examination-calendar"
   },
   "eligibility": {
    "education": "Class 10 (matriculation) pass",
    "age": "18 to 23 years, with relaxations for reserved categories",
    "other": "Indian citizen. Height, chest, running and medical standards apply and differ by force, gender and region."
   },
   "fee": "₹100 (women, SC/ST and ex-servicemen candidates are exempt)",
   "syllabus": {
    "title": "Official Constable (GD) syllabus (SSC syllabus repository)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/Syllabus/Syllabus-%20CAPFS%20and%20DP-169635-.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "One objective computer-based paper: 80 questions of 2 marks each — 160 marks, 60 minutes, with negative marking of 0.25 marks per wrong answer",
     "Four parts: General Intelligence & Reasoning, General Knowledge & Awareness, Elementary Mathematics, English/Hindi (20 questions each)",
     "Offered in English, Hindi and 13 regional languages",
     "Then Physical Efficiency Test, Physical Standard Test and a medical examination"
    ],
    "title": "Scheme of examination (paragraph 12 of the official notice)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_CTGD_2026.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "SSC does not publish a public archive of previous question papers.",
   "pastPapersPage": "https://ssc.gov.in/for-candidates/previous-year-question-paper",
   "answerKeys": [],
   "answerKeysNote": "SSC releases answer keys inside the candidate login area.",
   "answerKeysPage": "https://ssc.gov.in/",
   "mockTests": [
    {
     "title": "Official SSC mock test link for Constable candidates",
     "url": "https://ssc.gov.in/mock-test-link-in-respect-of-constable"
    }
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
   ],
   "type": "exam",
   "organization": "SSC",
   "organizationFull": "Staff Selection Commission",
   "officialWebsite": "https://ssc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Junior Engineer (Civil) in CPWD, MES, BRO and other departments",
    "Junior Engineer (Mechanical)",
    "Junior Engineer (Electrical)"
   ],
   "description": "Recruits diploma and degree engineers as Junior Engineers in central government departments. Two computer-based papers.",
   "officialExamPage": "https://ssc.gov.in/",
   "status": "not-announced",
   "statusNote": "No JE 2026 notice has been published yet. The latest published notice is JE 2025 (30 June 2025), whose application window has closed.",
   "notification": {
    "title": "Notice of Junior Engineer (Civil, Mechanical and Electrical) Examination, 2025",
    "date": "2025-06-30",
    "cycle": "2025",
    "current": false,
    "pdfUrl": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_je_2025.pdf",
    "embeddable": true
   },
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://ssc.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "SSC examination calendar",
    "sourceUrl": "https://ssc.gov.in/for-candidates/examination-calendar"
   },
   "eligibility": {
    "education": "Diploma or degree in the relevant engineering branch; some posts require experience — the notice lists the requirement post by post",
    "age": "Up to 30 or 32 years depending on the post, with relaxations for reserved categories",
    "other": "Indian citizen."
   },
   "fee": "₹100 (women, SC/ST, PwBD and ex-servicemen candidates are exempt)",
   "syllabus": {
    "title": "Official Junior Engineer syllabus (SSC syllabus repository)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/Syllabus/Syllabus-JE%20Eamination-169635-.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Paper I: objective — General Intelligence & Reasoning, General Awareness, and the branch subject",
     "Paper II: the branch subject in more depth",
     "Both papers are computer-based"
    ],
    "title": "Scheme of examination (inside the official notice)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_je_2025.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "SSC does not publish a public archive of previous question papers.",
   "pastPapersPage": "https://ssc.gov.in/for-candidates/previous-year-question-paper",
   "answerKeys": [],
   "answerKeysNote": "SSC releases answer keys inside the candidate login area.",
   "answerKeysPage": "https://ssc.gov.in/",
   "mockTests": []
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
   ],
   "type": "exam",
   "organization": "IBPS",
   "organizationFull": "Institute of Banking Personnel Selection",
   "officialWebsite": "https://www.ibps.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Probationary Officer in public sector banks",
    "Management Trainee"
   ],
   "description": "The common recruitment process that fills officer-grade entry posts across participating public sector banks. Preliminary online exam, main online exam, then an interview.",
   "officialExamPage": "https://www.ibps.in/index.php/management-trainees/",
   "status": "closed",
   "statusNote": "Registration for CRP PO/MT-XVI closed on 21 July 2026. The preliminary examination was scheduled for August 2026 and the main examination for October 2026.",
   "notification": {
    "title": "Notification for Common Recruitment Process CRP PO/MT-XVI",
    "date": "2026-07-01",
    "cycle": "CRP PO/MT-XVI",
    "current": true,
    "pdfUrl": "https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf",
    "embeddable": true
   },
   "application": {
    "openingDate": "2026-07-01",
    "closingDate": "2026-07-21",
    "url": "https://www.ibps.in/index.php/management-trainees-xvi/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "IBPS CRP updates",
    "sourceUrl": "https://www.ibps.in/index.php/crp-updates"
   },
   "eligibility": {
    "education": "Bachelor's degree in any discipline",
    "age": "20 to 30 years as on 1 July 2026 (born between 2 July 1996 and 1 July 2006, both inclusive), with relaxations for reserved categories",
    "other": "Indian citizen (or the other nationalities listed in the notification). Computer literacy required."
   },
   "fee": "₹850 including GST (₹175 for SC/ST/PwBD candidates)",
   "syllabus": {
    "title": "Official examination structure and syllabus (inside the notification)",
    "url": "https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Preliminary: 100 questions, 100 marks, 1 hour — English, Quantitative Aptitude, Reasoning Ability (sectional timing)",
     "Main: 170 questions, 200 marks, 160 minutes — Reasoning (40 q, 60 marks), General/Economy/Banking Awareness (50 q, 60 marks), English (40 q, 20 marks), Data Analysis & Interpretation (40 q, 60 marks) — plus a 2-question 25-mark descriptive paper in 30 minutes",
     "Then an interview of 100 marks; final merit is 80:20 between the main exam and interview"
    ],
    "title": "Structure of examination (inside the official notification)",
    "url": "https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "IBPS does not publish previous question papers. It does publish an official practice test, listed below.",
   "pastPapersPage": "https://www.ibps.in/",
   "answerKeys": [],
   "answerKeysNote": "IBPS does not publish public answer keys for CRP examinations.",
   "answerKeysPage": "https://www.ibps.in/",
   "mockTests": [
    {
     "title": "Official IBPS online practice test (common to all IBPS recruitment processes)",
     "url": "https://www4.digialm.com/OnlineAssessment/index.html?167@@M152"
    }
   ]
  },
  {
   "id": "ibps-clerk",
   "name": "IBPS Customer Service Associate (CSA / Clerk)",
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
   ],
   "type": "exam",
   "organization": "IBPS",
   "organizationFull": "Institute of Banking Personnel Selection",
   "officialWebsite": "https://www.ibps.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Customer Service Associate (clerical cadre) in public sector banks"
   ],
   "description": "The common recruitment process for clerical-cadre bank jobs — front-desk and back-office work in public sector banks. Preliminary and main online exams, and a local language proficiency test; no interview.",
   "officialExamPage": "https://www.ibps.in/index.php/clerical-cadre/",
   "status": "open",
   "statusNote": "Registration for CRP CSA-XVI is open from 1 August 2026 to 21 August 2026.",
   "notification": {
    "title": "Notification for Common Recruitment Process CRP CSA-XVI",
    "date": "2026-08-01",
    "cycle": "CRP CSA-XVI",
    "current": true,
    "pdfUrl": "https://www.ibps.in/wp-content/uploads/Notification_CRP_CSA_XVI-Final.pdf",
    "embeddable": true
   },
   "application": {
    "openingDate": "2026-08-01",
    "closingDate": "2026-08-21",
    "url": "https://www.ibps.in/index.php/clerical-cadre-xvi/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "CRP CSA-XVI notification",
    "sourceUrl": "https://www.ibps.in/wp-content/uploads/Notification_CRP_CSA_XVI-Final.pdf"
   },
   "eligibility": {
    "education": "Bachelor's degree in any discipline",
    "age": "20 to 28 years as on 1 August 2026 (born between 2 August 1998 and 1 August 2006), with relaxations for reserved categories",
    "other": "Computer literacy required. Candidates must be proficient in the official language of the state they apply for."
   },
   "fee": "₹850 including GST (₹175 for SC/ST/PwBD/ex-servicemen candidates)",
   "syllabus": {
    "title": "Official examination structure and syllabus (inside the notification)",
    "url": "https://www.ibps.in/wp-content/uploads/Notification_CRP_CSA_XVI-Final.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Preliminary: 100 questions, 100 marks, 1 hour — English, Numerical Ability, Reasoning Ability (sectional timing)",
     "Main: 160 questions, 200 marks, 125 minutes — General/Financial Awareness (40 q, 50 marks), General English (40 q, 40 marks), Reasoning Ability (40 q, 60 marks), Quantitative Aptitude (40 q, 50 marks), each separately timed",
     "Then a Local Language Proficiency Test. There is no interview."
    ],
    "title": "Structure of examination (inside the official notification)",
    "url": "https://www.ibps.in/wp-content/uploads/Notification_CRP_CSA_XVI-Final.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "IBPS does not publish previous question papers.",
   "pastPapersPage": "https://www.ibps.in/",
   "answerKeys": [],
   "answerKeysPage": "https://www.ibps.in/",
   "mockTests": [
    {
     "title": "Official IBPS online practice test (common to all IBPS recruitment processes)",
     "url": "https://www4.digialm.com/OnlineAssessment/index.html?167@@M152"
    }
   ]
  },
  {
   "id": "ibps-rrb",
   "name": "IBPS RRB Officer (Scale I, II & III)",
   "category": "gov-job",
   "oneLiner": "Officer posts in Regional Rural Banks (Scale I, II and III) through the IBPS common recruitment process; local language proficiency required.",
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
   ],
   "type": "exam",
   "organization": "IBPS",
   "organizationFull": "Institute of Banking Personnel Selection",
   "officialWebsite": "https://www.ibps.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Officer Scale I (Assistant Manager) in Regional Rural Banks",
    "Officer Scale II (specialist and general banking)",
    "Officer Scale III"
   ],
   "description": "The common recruitment process for officer posts in India's Regional Rural Banks. Scale I has a preliminary and a main exam; Scale II and III have a single exam. All are followed by an interview.",
   "officialExamPage": "https://www.ibps.in/index.php/regional-rural-bank/",
   "status": "not-announced",
   "statusNote": "Registration for CRP RRBs-XIV closed on 21 September 2025 and that process is complete. The next RRB common recruitment process has not been notified.",
   "notification": {
    "title": "Notification for Common Recruitment Process CRP RRBs-XIV",
    "date": "2025-09-01",
    "cycle": "CRP RRBs-XIV",
    "current": false,
    "pdfUrl": "https://www.ibps.in/wp-content/uploads/CRP-RRBs-XIV_Final_AD_1.9.25.pdf",
    "embeddable": true
   },
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://www.ibps.in/index.php/rural-bank-xiv/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "IBPS CRP RRBs page",
    "sourceUrl": "https://www.ibps.in/index.php/regional-rural-bank/"
   },
   "eligibility": {
    "education": "Bachelor's degree in any discipline for Officer Scale I; a relevant degree plus experience for Scale II and III",
    "age": "18 to 30 years for Officer Scale I; 21 to 32 for Scale II and 21 to 40 for Scale III, with relaxations for reserved categories",
    "other": "Proficiency in the local language of the state is required."
   },
   "fee": "₹850 including GST (₹175 for SC/ST/PwBD candidates)",
   "syllabus": {
    "title": "Official examination structure and syllabus (inside the notification)",
    "url": "https://www.ibps.in/wp-content/uploads/CRP-RRBs-XIV_Final_AD_1.9.25.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Officer Scale I: preliminary objective test, then a main objective test, then an interview",
     "Officer Scale II and III: a single objective test, then an interview",
     "Final merit for officers is 80:20 between the written exam and interview"
    ],
    "title": "Structure of examination (inside the official notification)",
    "url": "https://www.ibps.in/wp-content/uploads/CRP-RRBs-XIV_Final_AD_1.9.25.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "IBPS does not publish previous question papers.",
   "pastPapersPage": "https://www.ibps.in/",
   "answerKeys": [],
   "answerKeysPage": "https://www.ibps.in/",
   "mockTests": [
    {
     "title": "Official IBPS online practice test (common to all IBPS recruitment processes)",
     "url": "https://www4.digialm.com/OnlineAssessment/index.html?167@@M152"
    }
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
   "official": "https://sbi.bank.in/web/careers",
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
   ],
   "type": "exam",
   "organization": "SBI",
   "organizationFull": "State Bank of India",
   "officialWebsite": "https://sbi.co.in/web/careers",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Probationary Officer in State Bank of India (Junior Management Grade Scale I)"
   ],
   "description": "State Bank of India's own officer-entry recruitment, separate from the IBPS process. Preliminary exam, main exam, then a psychometric test, group exercise and interview.",
   "officialExamPage": "https://sbi.bank.in/web/careers/current-openings",
   "status": "closed",
   "statusNote": "Registration for advertisement CRPD/PO/2026-27/09 (1,500 vacancies) ran from 18 June to 8 July 2026 and has closed. The preliminary examination call letters have been issued.",
   "notification": {
    "title": "Recruitment of Probationary Officers — advertisement CRPD/PO/2026-27/09",
    "date": "2026-06-18",
    "cycle": "2026-27",
    "current": true,
    "pdfUrl": "https://sbi.bank.in/documents/77530/57941/18062026_1_Detailed_Adv.2026.pdf/1f1a9532-8a2f-6e59-08a0-616d62a497b1?t=1781759726353",
    "embeddable": false
   },
   "application": {
    "openingDate": "2026-06-18",
    "closingDate": "2026-07-08",
    "url": "https://sbi.bank.in/web/careers/current-openings"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "SBI current openings page",
    "sourceUrl": "https://sbi.bank.in/web/careers/current-openings"
   },
   "eligibility": {
    "education": "Graduation in any discipline; final-year students may apply subject to producing proof of passing",
    "age": "21 to 30 years as on 1 April 2026 (born between 2 April 1996 and 1 April 2005, both inclusive), with relaxations for reserved categories",
    "other": "Indian citizen. Number of attempts is capped by category."
   },
   "fee": "₹750 (SC/ST/PwBD candidates are exempt)",
   "syllabus": {
    "title": "Official examination structure (inside the advertisement)",
    "url": "https://sbi.bank.in/documents/77530/57941/18062026_1_Detailed_Adv.2026.pdf/1f1a9532-8a2f-6e59-08a0-616d62a497b1?t=1781759726353",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Preliminary: 100 questions, 100 marks, 1 hour — English, Quantitative Aptitude, Reasoning Ability",
     "Main: objective test of 170 questions and 200 marks in 3 hours (Reasoning & Computer Aptitude 40 q/60, Data Analysis & Interpretation 30 q/60, General Awareness-Economy-Banking 60 q/60, English 40 q/20), plus a 3-question descriptive Communication Skills paper of 30 marks in 30 minutes",
     "Then a psychometric test, group exercise and interview"
    ],
    "title": "Selection procedure (inside the official advertisement)",
    "url": "https://sbi.bank.in/documents/77530/57941/18062026_1_Detailed_Adv.2026.pdf/1f1a9532-8a2f-6e59-08a0-616d62a497b1?t=1781759726353"
   },
   "pastPapers": [],
   "pastPapersNote": "SBI does not publish previous question papers. It does publish an official 'Acquaint Yourself' booklet with the format of each test alongside every advertisement.",
   "pastPapersPage": "https://sbi.bank.in/web/careers/current-openings",
   "answerKeys": [],
   "answerKeysNote": "SBI does not publish public answer keys.",
   "answerKeysPage": "https://sbi.bank.in/web/careers/current-openings",
   "mockTests": []
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
   "benefit": "Rs 26,730 starting basic (Rs 24,050 plus two advance increments admissible to graduates); total starting emoluments around Rs 46,000/month at a metro like Mumbai, varying with place of posting",
   "window": "recently Dec–Jan",
   "windowMonths": [
    12,
    1
   ],
   "nextExpected": "Dec 2026 (expected)",
   "frequency": "annual",
   "official": "https://sbi.bank.in/web/careers",
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
   ],
   "type": "exam",
   "organization": "SBI",
   "organizationFull": "State Bank of India",
   "officialWebsite": "https://sbi.co.in/web/careers",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Junior Associate (Customer Support & Sales) — clerical cadre in State Bank of India"
   ],
   "description": "SBI's clerical-cadre recruitment, done state by state (you apply for a specific circle and must know its local language). Preliminary exam, main exam, and a local language test.",
   "officialExamPage": "https://sbi.bank.in/web/careers/current-openings",
   "status": "open",
   "statusNote": "Advertisement CRPD/CR/2026-27/17 is open — apply online from 11 August 2026 to 31 August 2026.",
   "notification": {
    "title": "Recruitment of Junior Associates (Customer Support & Sales) — advertisement CRPD/CR/2026-27/17",
    "date": "2026-08-11",
    "cycle": "2026-27",
    "current": true,
    "pdfUrl": "https://sbi.bank.in/webfiles/uploads/files_2627/08/JA_2026_Detailed_Advt_Eng.pdf",
    "embeddable": false
   },
   "application": {
    "openingDate": "2026-08-11",
    "closingDate": "2026-08-31",
    "url": "https://ibpsreg.ibps.in/sbijajul26/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "SBI current openings page",
    "sourceUrl": "https://sbi.bank.in/web/careers/current-openings"
   },
   "eligibility": {
    "education": "Graduation in any discipline",
    "age": "20 to 28 years as on 1 April 2026 (born between 2 April 1998 and 1 April 2006, both inclusive), with relaxations for reserved categories",
    "other": "You apply for one state or circle and must be able to read, write and speak its local language."
   },
   "fee": "₹750 (SC/ST/PwBD/ex-servicemen candidates are exempt)",
   "syllabus": {
    "title": "Official examination structure (inside the advertisement)",
    "url": "https://sbi.bank.in/webfiles/uploads/files_2627/08/JA_2026_Detailed_Advt_Eng.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Preliminary: 100 questions, 100 marks, 1 hour — English, Numerical Ability, Reasoning Ability",
     "Main: 190 questions, 200 marks, 2 hours 40 minutes",
     "Then a local language test. There is no interview."
    ],
    "title": "Selection procedure (inside the official advertisement)",
    "url": "https://sbi.bank.in/webfiles/uploads/files_2627/08/JA_2026_Detailed_Advt_Eng.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "SBI does not publish previous question papers; it publishes an official 'Acquaint Yourself' booklet with each advertisement.",
   "pastPapersPage": "https://sbi.bank.in/web/careers/current-openings",
   "answerKeys": [],
   "answerKeysPage": "https://sbi.bank.in/web/careers/current-openings",
   "mockTests": []
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
   "benefit": "Rs 78,450 starting basic; around Rs 1,54,936/month gross (without HRA)",
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
   ],
   "type": "exam",
   "organization": "RBI",
   "organizationFull": "Reserve Bank of India",
   "officialWebsite": "https://opportunities.rbi.org.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Officer in Grade B (Direct Recruit) — General cadre",
    "Officer in Grade B — DEPR (economic research)",
    "Officer in Grade B — DSIM (statistics)"
   ],
   "description": "The entry-level officer post at India's central bank, and one of the most competitive banking exams. Three phases: an objective screening test, descriptive papers, and an interview.",
   "officialExamPage": "https://opportunities.rbi.org.in/Scripts/Vacancies.aspx",
   "status": "closed",
   "statusNote": "Advertisement RBISB/DA/01/2026-27 (Panel Year 2026) closed for applications on 20 May 2026.",
   "notification": {
    "title": "Direct Recruitment for Officers in Grade 'B' (DR) — advertisement RBISB/DA/01/2026-27",
    "date": "2026-04-29",
    "cycle": "Panel Year 2026",
    "current": true,
    "url": "https://opportunities.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=4997",
    "pdfUrl": "https://rbidocs.rbi.org.in/rdocs/Content/PDFs/DEPR29042026BE94DEA85E3C4753A82B191EB6A795ED.PDF",
    "embeddable": false
   },
   "application": {
    "openingDate": "2026-04-29",
    "closingDate": "2026-05-20",
    "url": "https://opportunities.rbi.org.in/"
   },
   "examDate": "2026-06-13",
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "RBI current vacancies page",
    "sourceUrl": "https://opportunities.rbi.org.in/Scripts/Vacancies.aspx"
   },
   "eligibility": {
    "education": "For the General cadre: graduation in any discipline with at least 60% marks (50% for SC/ST/PwBD), OR post-graduation in any discipline with at least 55% marks. For DEPR and DSIM: a master's degree in Economics/Finance or Statistics/Mathematics respectively with at least 55% marks (50% for SC/ST/PwBD)",
    "age": "21 to 30 years as on 1 April 2026 (born between 2 April 1996 and 1 April 2005), with relaxations for reserved categories; the upper limit is 32 for M.Phil. holders and 34 for Ph.D. holders",
    "other": "Indian citizen. Six attempts for General category candidates."
   },
   "fee": "₹850 plus GST (₹100 for SC/ST/PwBD candidates)",
   "syllabus": {
    "title": "Official syllabus and scheme of selection (inside the advertisement)",
    "url": "https://opportunities.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=4997",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Phase I: objective screening test of 200 marks (General cadre)",
     "Phase II: three papers — Economic & Social Issues, English (descriptive), Finance & Management",
     "Then an interview of 75 marks"
    ],
    "title": "Scheme of selection (inside the official advertisement)",
    "url": "https://opportunities.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=4997"
   },
   "pastPapers": [],
   "pastPapersNote": "RBI does not publish previous question papers.",
   "pastPapersPage": "https://opportunities.rbi.org.in/Scripts/Vacancies.aspx",
   "answerKeys": [],
   "answerKeysNote": "RBI does not publish public answer keys.",
   "answerKeysPage": "https://opportunities.rbi.org.in/Scripts/Vacancies.aspx",
   "mockTests": []
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
   "benefit": "Rs 29,000 starting basic; around Rs 58,514/month gross (without HRA)",
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
   ],
   "type": "exam",
   "organization": "RBI",
   "organizationFull": "Reserve Bank of India",
   "officialWebsite": "https://opportunities.rbi.org.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Assistant in Reserve Bank of India regional offices"
   ],
   "description": "The clerical-grade job at the Reserve Bank of India. Preliminary online test, main online test, then a language proficiency test.",
   "officialExamPage": "https://opportunities.rbi.org.in/Scripts/Vacancies.aspx",
   "status": "closed",
   "statusNote": "The advertisement for Assistant (Panel Year 2025, 650 posts) was published on 16 February 2026 and closed for applications on 8 March 2026.",
   "notification": {
    "title": "Recruitment for the Post of Assistant — Panel Year 2025",
    "date": "2026-02-16",
    "cycle": "Panel Year 2025",
    "current": true,
    "url": "https://opportunities.rbi.org.in/scripts/bs_viewcontent.aspx?Id=4912",
    "pdfUrl": "https://rbidocs.rbi.org.in/rdocs/Content/PDFs/DAASSISTANT2025CCB4E54CEB5542D9987FE6D1EA51D143.PDF",
    "embeddable": false
   },
   "application": {
    "openingDate": "2026-02-16",
    "closingDate": "2026-03-08",
    "url": "https://opportunities.rbi.org.in/"
   },
   "examDate": "2026-04-11",
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "RBI current vacancies page",
    "sourceUrl": "https://opportunities.rbi.org.in/Scripts/Vacancies.aspx"
   },
   "eligibility": {
    "education": "Bachelor's degree with at least 50% marks (pass class for SC/ST/PwBD candidates), plus computer knowledge",
    "age": "20 to 28 years as on 1 February 2026 (born between 2 February 1998 and 1 February 2006), with relaxations for reserved categories",
    "other": "Knowledge of the official language of the state you apply for is required."
   },
   "fee": "₹450 plus GST (₹50 for SC/ST/PwBD/ex-servicemen candidates)",
   "syllabus": {
    "title": "Official scheme of selection (inside the advertisement)",
    "url": "https://opportunities.rbi.org.in/scripts/bs_viewcontent.aspx?Id=4912",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Preliminary: 100 questions, 100 marks, 1 hour — English, Numerical Ability, Reasoning Ability",
     "Main: 200 questions, 200 marks, 135 minutes, adding General Awareness and Computer Knowledge",
     "Then a Language Proficiency Test",
     "1/4 mark is deducted for every wrong answer in both the Preliminary and the Main objective tests, and you must qualify in each section separately"
    ],
    "title": "Scheme of selection (inside the official advertisement)",
    "url": "https://opportunities.rbi.org.in/scripts/bs_viewcontent.aspx?Id=4912"
   },
   "pastPapers": [],
   "pastPapersNote": "RBI does not publish previous question papers.",
   "pastPapersPage": "https://opportunities.rbi.org.in/Scripts/Vacancies.aspx",
   "answerKeys": [],
   "answerKeysPage": "https://opportunities.rbi.org.in/Scripts/Vacancies.aspx",
   "mockTests": []
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
   "official": "https://rrb.indianrailways.gov.in/",
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
   ],
   "type": "exam",
   "organization": "Railways",
   "organizationFull": "Railway Recruitment Boards, Ministry of Railways",
   "officialWebsite": "https://rrb.indianrailways.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Station Master",
    "Goods Train Manager (Guard)",
    "Chief Commercial cum Ticket Supervisor",
    "Junior Clerk cum Typist",
    "Accounts Clerk cum Typist",
    "Trains Clerk"
   ],
   "description": "The Railways' big non-technical recruitment. It runs as two separate Centralised Employment Notifications — one for graduate-level posts and one for undergraduate (class 12) posts. Multiple computer-based stages, then a typing or aptitude test depending on the post.",
   "officialExamPage": "https://rrb.indianrailways.gov.in/",
   "status": "not-announced",
   "statusNote": "The application windows for the current graduate CEN 06/2025 and undergraduate CEN 07/2025 have closed. No newer NTPC CEN has been published.",
   "notification": {
    "title": "CEN 06/2025 — Detailed Centralised Employment Notification, NTPC (Graduate posts)",
    "date": "2025-10-21",
    "cycle": "CEN 06/2025",
    "current": false,
    "pdfUrl": "https://rrb.indianrailways.gov.in/-/image/1762325548056Detailed_CEN_06_2025_English_com_(1).pdf/examsDocuments",
    "embeddable": false
   },
   "extraNotifications": [
    {
     "title": "CEN 07/2025 — Detailed CEN, NTPC (Undergraduate posts)",
     "date": "2025-10-28",
     "url": "https://rrb.indianrailways.gov.in/-/image/1762325939510Detailed_CEN_07_2025_NTPC_Under_Graduate_English.pdf/examsDocuments"
    }
   ],
   "application": {
    "openingDate": "2025-10-21",
    "closingDate": "2025-11-20",
    "url": "https://www.rrbapply.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "RRB Recruitment (CENs) listing",
    "sourceUrl": "https://rrb.indianrailways.gov.in/getdata?cennum=06/2025&loc=chandigarh&category=Notification"
   },
   "eligibility": {
    "education": "Class 12 (+2 stage) or equivalent with at least 50% marks in aggregate for the undergraduate CEN - the 50% is waived for SC/ST/PwBD/ex-servicemen candidates and for anyone holding a qualification higher than class 12; a degree from a recognised university for the graduate CEN (the typist posts additionally require typing proficiency in English or Hindi on computer)",
    "age": "18 to 33 years for graduate posts and 18 to 30 for undergraduate posts in recent CENs, with relaxations for reserved categories",
    "other": "Indian citizen. Medical fitness standards differ by post."
   },
   "fee": "₹500, of which ₹400 is refunded after appearing for the first stage (₹250 for SC/ST/ex-servicemen/PwBD/women/minority/EBC candidates, fully refunded)",
   "syllabus": {
    "title": "Official syllabus (Annexure of the Detailed CEN)",
    "url": "https://rrb.indianrailways.gov.in/-/image/1762325548056Detailed_CEN_06_2025_English_com_(1).pdf/examsDocuments",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "CBT-1: 100 questions, 90 minutes — Mathematics, General Intelligence & Reasoning, General Awareness",
     "CBT-2: 120 questions, 90 minutes, on the same subject areas at greater depth",
     "Then a Typing Skill Test or Computer Based Aptitude Test depending on the post",
     "Negative marking of 1/3 mark per wrong answer"
    ],
    "title": "Scheme of examination (inside the Detailed CEN)",
    "url": "https://rrb.indianrailways.gov.in/-/image/1762325548056Detailed_CEN_06_2025_English_com_(1).pdf/examsDocuments"
   },
   "pastPapers": [],
   "pastPapersNote": "RRBs do not publish previous question papers. After each computer-based test they publish the question paper with the candidate's own responses and the answer key inside the candidate login, along with a public objection-tracker window.",
   "pastPapersPage": "https://rrb.indianrailways.gov.in/",
   "answerKeys": [],
   "answerKeysNote": "Answer keys are released per CEN through the candidate login and objection tracker.",
   "answerKeysPage": "https://rrb.indianrailways.gov.in/",
   "mockTests": [],
   "mockTestNote": "RRBs publish an official mock test link for each CEN once the examination is scheduled — look for 'Mock Test Link' under the CEN."
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
   "window": "varies by CEN (CEN 09/2025: 31 Jan–2 Mar 2026)",
   "windowMonths": [
    1,
    2,
    3
   ],
   "nextExpected": "next Level 1 CEN not yet announced",
   "frequency": "annual",
   "official": "https://rrb.indianrailways.gov.in/",
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
   ],
   "type": "exam",
   "organization": "Railways",
   "organizationFull": "Railway Recruitment Boards, Ministry of Railways",
   "officialWebsite": "https://rrb.indianrailways.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Track Maintainer Grade IV",
    "Pointsman",
    "Assistant (Loco Shed, Workshop, Bridge, Signal & Telecom)",
    "Assistant Operations (Electrical)"
   ],
   "description": "Class-10-level recruitment for Level 1 posts across the Railways — the largest single government recruitment by number of vacancies. One computer-based test, then a physical efficiency test and a medical examination.",
   "officialExamPage": "https://rrb.indianrailways.gov.in/",
   "status": "closed",
   "statusNote": "Applications for CEN 09/2025 (Level 1, 22,195 vacancies) ran from 31 January to 2 March 2026 and have closed; the computer-based test is in progress. No newer Level 1 CEN has been published.",
   "notification": {
    "title": "CEN 09/2025 — Detailed Centralised Employment Notice, Level 1 posts (22,195 vacancies)",
    "date": "2026-01-31",
    "cycle": "CEN 09/2025",
    "current": true,
    "pdfUrl": "https://rrb.indianrailways.gov.in/-/image/1785986914371examsDocuments.pdf/examsDocuments",
    "embeddable": false
   },
   "application": {
    "openingDate": "2026-01-31",
    "closingDate": "2026-03-02",
    "url": "https://www.rrbapply.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "RRB Recruitment (CENs) listing",
    "sourceUrl": "https://rrb.indianrailways.gov.in/getdata?cennum=08/2024&loc=chandigarh&category=Notification"
   },
   "eligibility": {
    "education": "Class 10 pass, or an ITI certificate, or a National Apprenticeship Certificate",
    "age": "18 to 33 years in the latest CEN 09/2025, reckoned as on 01.01.2026 (CEN 08/2024 allowed 18 to 36 years because of a one-time 3-year Covid-19 relaxation), with further relaxations for reserved categories",
    "other": "Indian citizen. Physical Efficiency Test and medical standards apply."
   },
   "fee": "₹500, of which ₹400 is refunded after appearing for the CBT (₹250 for SC/ST/ex-servicemen/PwBD/women/minority/EBC candidates, fully refunded)",
   "syllabus": {
    "title": "Official syllabus (Annexure of the Detailed CEN)",
    "url": "https://rrb.indianrailways.gov.in/-/image/1785986914371examsDocuments.pdf/examsDocuments",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Single computer-based test: 100 questions, 90 minutes",
     "Mathematics, General Intelligence & Reasoning, General Science, General Awareness",
     "Negative marking of 1/3 mark per wrong answer",
     "Then Physical Efficiency Test and document verification"
    ],
    "title": "Scheme of examination (inside the Detailed CEN)",
    "url": "https://rrb.indianrailways.gov.in/-/image/1785986914371examsDocuments.pdf/examsDocuments"
   },
   "pastPapers": [],
   "pastPapersNote": "RRBs do not publish previous question papers publicly.",
   "pastPapersPage": "https://rrb.indianrailways.gov.in/",
   "answerKeys": [],
   "answerKeysPage": "https://rrb.indianrailways.gov.in/",
   "mockTests": [],
   "extraNotifications": [
    {
     "title": "CEN 09/2025 — official FAQ",
     "date": "2026-02-04",
     "url": "https://rrb.indianrailways.gov.in/-/image/1770185990944FAQ_ENGLISH_092025.pdf/examsDocuments"
    },
    {
     "title": "CEN 08/2024 — the previous Level 1 notice",
     "date": "2025-01-22",
     "url": "https://rrb.indianrailways.gov.in/-/image/176232099530801_Detailed_CEN_08_2024.pdf/examsDocuments"
    }
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
   "official": "https://rrb.indianrailways.gov.in/",
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
   ],
   "type": "exam",
   "organization": "Railways",
   "organizationFull": "Railway Recruitment Boards, Ministry of Railways",
   "officialWebsite": "https://rrb.indianrailways.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Assistant Loco Pilot (trainee train driver)"
   ],
   "description": "Recruits ITI-qualified and diploma candidates to drive trains, starting as Assistant Loco Pilot. Two computer-based tests, then a computer-based aptitude test and a medical examination with strict vision standards.",
   "officialExamPage": "https://rrb.indianrailways.gov.in/",
   "status": "closed",
   "statusNote": "Applications for CEN 01/2026 closed on 14 June 2026. The examination schedule has not been announced yet.",
   "notification": {
    "title": "CEN 01/2026 — Detailed Centralised Employment Notification, Assistant Loco Pilot",
    "date": "2026-05-14",
    "cycle": "CEN 01/2026",
    "current": true,
    "pdfUrl": "https://rrb.indianrailways.gov.in/-/image/1780467818641detail_cen_01_2026_eng.pdf/examsDocuments",
    "embeddable": false
   },
   "application": {
    "openingDate": "2026-05-15",
    "closingDate": "2026-06-14",
    "url": "https://www.rrbapply.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "RRB Recruitment (CENs) listing",
    "sourceUrl": "https://rrb.indianrailways.gov.in/getdata?cennum=01/2026&loc=chandigarh&category=Notification"
   },
   "eligibility": {
    "education": "Class 10 plus an ITI certificate in a notified trade, or a diploma or degree in Mechanical, Electrical, Electronics or Automobile engineering",
    "age": "18 to 30 years in CEN 01/2026, with relaxations for reserved categories",
    "other": "Indian citizen. Medical standard A-1 — the strictest vision standard in the Railways."
   },
   "fee": "₹500, of which ₹400 is refunded (less bank charges) after appearing for CBT-1; ₹250 for SC, ST, ex-servicemen, women, transgender, minority and Economically Backward Class candidates, refunded in full (less bank charges) on appearing for CBT-1",
   "syllabus": {
    "title": "Official syllabus (Annexure of the Detailed CEN)",
    "url": "https://rrb.indianrailways.gov.in/-/image/1780467818641detail_cen_01_2026_eng.pdf/examsDocuments",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "CBT-1: 75 questions, 60 minutes — screening only",
     "CBT-2: two parts (Part A 100 questions/90 min, Part B 75 questions/60 min on the trade)",
     "Computer Based Aptitude Test (no negative marking, minimum 42 marks in each battery)",
     "Then document verification and medical examination"
    ],
    "title": "Scheme of examination (inside the Detailed CEN)",
    "url": "https://rrb.indianrailways.gov.in/-/image/1780467818641detail_cen_01_2026_eng.pdf/examsDocuments"
   },
   "pastPapers": [],
   "pastPapersNote": "RRBs do not publish previous question papers publicly.",
   "pastPapersPage": "https://rrb.indianrailways.gov.in/",
   "answerKeys": [],
   "answerKeysPage": "https://rrb.indianrailways.gov.in/",
   "mockTests": []
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
   ],
   "type": "exam",
   "organization": "LIC",
   "organizationFull": "Life Insurance Corporation of India",
   "officialWebsite": "https://licindia.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Assistant Administrative Officer (Generalist)",
    "Assistant Administrative Officer (Specialist: Chartered Accountant, Actuarial, Legal, IT)",
    "Assistant Engineer"
   ],
   "description": "The officer-entry post at Life Insurance Corporation of India. Preliminary online exam, main online exam, then an interview.",
   "officialExamPage": "https://licindia.in/careers",
   "status": "closed",
   "statusNote": "The AAO 2025 recruitment closed for applications on 8 September 2025. The preliminary examination was held on 3 October 2025 and the main examination on 8 November 2025.",
   "notification": {
    "title": "Recruitment of AAO (Generalist) 2025 — official notification",
    "date": "2025-08-16",
    "cycle": "2025",
    "current": false,
    "pdfUrl": "https://licindia.in/documents/d/guest/aao-generalist-notification-2025-final",
    "embeddable": false
   },
   "extraNotifications": [
    {
     "title": "AAO (Specialists / Assistant Engineers) 2025 — official notification",
     "date": "2025-08-16",
     "url": "https://licindia.in/documents/d/guest/aao-specialist-notification-2025-final"
    }
   ],
   "application": {
    "openingDate": "2025-08-16",
    "closingDate": "2025-09-08",
    "url": "https://licindia.in/recruitment-of-aao-generalists/-specialists/-assistant-engineers-2025"
   },
   "examDate": "2025-10-03",
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "LIC careers page",
    "sourceUrl": "https://licindia.in/careers"
   },
   "eligibility": {
    "education": "Bachelor's degree in any discipline for the Generalist post; the matching professional qualification for each Specialist post",
    "age": "21 to 30 years as on 1 August 2025 in the 2025 cycle, with relaxations for reserved categories",
    "other": "Indian citizen."
   },
   "fee": "₹700 in the 2025 cycle (₹85 for SC/ST/PwBD candidates)",
   "syllabus": {
    "title": "Official scheme of examination (inside the notification)",
    "url": "https://licindia.in/documents/d/guest/aao-generalist-notification-2025-final",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Preliminary: objective online test — Reasoning Ability, Quantitative Aptitude, English (qualifying)",
     "Main: objective online test plus a descriptive English paper",
     "Then an interview and a pre-recruitment medical examination",
     "There is no negative marking in either examination, but you must qualify in each section separately. In the Preliminary only 70 of the 100 marks count (the English section is qualifying only), and the final merit list uses only the Main examination and interview marks"
    ],
    "title": "Scheme of selection (inside the official notification)",
    "url": "https://licindia.in/documents/d/guest/aao-generalist-notification-2025-final"
   },
   "pastPapers": [],
   "pastPapersNote": "LIC does not publish previous question papers.",
   "pastPapersPage": "https://licindia.in/careers",
   "answerKeys": [],
   "answerKeysPage": "https://licindia.in/careers",
   "mockTests": []
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
   ],
   "type": "exam",
   "organization": "Defence",
   "organizationFull": "Indian Armed Forces",
   "officialWebsite": "https://joinindianarmy.nic.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Agniveer (General Duty)",
    "Agniveer (Technical)",
    "Agniveer Clerk / Store Keeper Technical",
    "Agniveer Tradesman",
    "Agniveer (Women Military Police)"
   ],
   "description": "Enrolment into the Army under the Agnipath scheme, for a four-year term with up to 25% retained in regular service. An online Common Entrance Examination, then a recruitment rally with physical and medical tests.",
   "officialExamPage": "https://joinindianarmy.nic.in/",
   "status": "not-announced",
   "statusNote": "The Common Entrance Examination for the 2026 cycle was held in June 2026 and that cycle's applications are closed. The next Agniveer notification has not been published.",
   "notification": null,
   "notificationNote": "Agniveer notifications are published on the official Join Indian Army portal for each cycle.",
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://joinindianarmy.nic.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "Join Indian Army portal",
    "sourceUrl": "https://joinindianarmy.nic.in/"
   },
   "eligibility": {
    "education": "Class 10 for General Duty and Tradesman; class 12 with Physics, Chemistry, Maths and English for Technical; class 12 in any stream for Clerk / Store Keeper Technical",
    "age": "17.5 to 21 years",
    "other": "Indian citizen. Height, weight, chest, running and medical standards apply and differ by category and region."
   },
   "fee": "₹250 in recent cycles; confirm in the notification",
   "syllabus": {
    "title": "Official syllabus and scheme (published with each notification on the Army portal)",
    "url": "https://joinindianarmy.nic.in/",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Stage I: online Common Entrance Examination (CEE), objective, category-specific paper",
     "Stage II: recruitment rally with the Physical Fitness Test and Physical Measurement Test",
     "Stage III: medical examination"
    ],
    "title": "Join Indian Army portal",
    "url": "https://joinindianarmy.nic.in/"
   },
   "pastPapers": [],
   "pastPapersNote": "The Army does not publish previous Common Entrance Examination papers.",
   "pastPapersPage": "https://joinindianarmy.nic.in/",
   "answerKeys": [],
   "answerKeysPage": "https://joinindianarmy.nic.in/",
   "mockTests": []
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
   ],
   "type": "exam",
   "organization": "Defence",
   "organizationFull": "Indian Armed Forces",
   "officialWebsite": "https://agnipathvayu.cdac.in/AV/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Agniveervayu (Science subjects)",
    "Agniveervayu (Other than science subjects)",
    "Agniveervayu (Musician)",
    "Agniveervayu (Non-combatant)"
   ],
   "description": "Enrolment into the Air Force under the Agnipath scheme, run by the Central Airmen Selection Board in numbered intakes. Online test, then physical fitness, adaptability and medical tests.",
   "officialExamPage": "https://agnipathvayu.cdac.in/AV/",
   "status": "not-announced",
   "statusNote": "Intake 02/2026 has reached the provisional select list stage, so its application window is closed. The next intake has not been notified.",
   "notification": null,
   "notificationNote": "Agniveervayu notifications are published per intake on the official CASB portal.",
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://agnipathvayu.cdac.in/AV/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "CASB Agniveervayu portal",
    "sourceUrl": "https://agnipathvayu.cdac.in/AV/"
   },
   "eligibility": {
    "education": "Class 12 with Mathematics, Physics and English (or a three-year engineering diploma) for the science stream; class 12 in any stream with English for the non-science stream",
    "age": "17.5 to 21 years",
    "other": "Indian citizen. Physical fitness and medical standards apply; both men and women are eligible."
   },
   "fee": "Around ₹550 including GST in recent intakes; confirm in the notification",
   "syllabus": {
    "title": "Official eligibility criteria and syllabus (CASB)",
    "url": "https://agnipathvayu.cdac.in/AV/eligibilityCriteria",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Phase I: online test (objective), stream-specific",
     "Phase II: Physical Fitness Test, adaptability tests",
     "Phase III: medical examination"
    ],
    "title": "Official eligibility criteria and selection process",
    "url": "https://agnipathvayu.cdac.in/AV/eligibilityCriteria"
   },
   "pastPapers": [
    {
     "year": 2026,
     "papers": [
      {
       "name": "Agniveervayu (Musician) — official model question paper",
       "url": "https://agnipathvayu.cdac.in/AV/img/rally/AV_Musician_MODEL_QP.pdf"
      }
     ]
    }
   ],
   "pastPapersNote": "The only question paper CASB publishes openly is the official model paper for the Musician entry.",
   "pastPapersPage": "https://agnipathvayu.cdac.in/AV/",
   "answerKeys": [],
   "answerKeysPage": "https://agnipathvayu.cdac.in/AV/",
   "mockTests": [],
   "mockTestNote": "CASB publishes an official mock test and OMR tutorial for each intake on the Agniveervayu portal."
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
   ],
   "type": "exam",
   "organization": "Defence",
   "organizationFull": "Indian Armed Forces",
   "officialWebsite": "https://www.joinindiannavy.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Agniveer SSR (Senior Secondary Recruit)",
    "Agniveer MR (Matric Recruit — chef, steward, hygienist)",
    "Agniveer (Apprentice)"
   ],
   "description": "Enrolment into the Navy under the Agnipath scheme through the Indian Navy Entrance Test (INET), followed by written, physical and medical stages. The Navy notifies SSR, MR and Apprentice entries separately.",
   "officialExamPage": "https://www.joinindiannavy.gov.in/en/page/agniveer-ways-to-join.html",
   "status": "not-announced",
   "statusNote": "The Indian Navy Entrance Test for the current Agniveer cycles has been conducted. The next Agniveer SSR / MR notification has not been published.",
   "notification": null,
   "notificationNote": "Agniveer notifications are published on the official Join Indian Navy portal for each batch.",
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://agniveer.navydmpr.in/sailorscycle5/signUp"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "Join Indian Navy portal",
    "sourceUrl": "https://www.joinindiannavy.gov.in/en/page/agniveer-ways-to-join.html"
   },
   "eligibility": {
    "education": "Agniveer SSR: 10+2 with Mathematics and Physics with a minimum 50% aggregate (or a 3-year engineering diploma, or a 2-year vocational course with Physics and Mathematics, each with 50% aggregate). Agniveer MR: Matriculation with a minimum 50% aggregate. Class 12 and class 10 candidates still awaiting results may apply but must produce the original marksheet at Stage II",
    "age": "17.5 to 21 years",
    "other": "Indian citizen. Physical fitness and medical standards apply; both men and women are eligible."
   },
   "fee": "Around ₹550 including GST in recent cycles; confirm in the notification",
   "syllabus": {
    "title": "Official Agniveer SSR page (eligibility, syllabus and selection)",
    "url": "https://www.joinindiannavy.gov.in/en/page/agniveer-ssr.html",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Stage I: computer-based online examination (INET), or screening on marks obtained in the qualifying examination",
     "Stage II: Written Examination, Physical Fitness Test and Recruitment Medical",
     "Then induction and a final Recruitment Medical at INS Chilka, Odisha, followed by ab-initio training there and then at professional schools"
    ],
    "title": "Selection procedure — Agniveer SSR and MR",
    "url": "https://www.joinindiannavy.gov.in/en/page/selection-procedure-agniveer-ssr-and-agniveer-mr.html"
   },
   "pastPapers": [],
   "pastPapersNote": "The Navy does not publish previous INET question papers.",
   "pastPapersPage": "https://www.joinindiannavy.gov.in/en/page/agniveer-ways-to-join.html",
   "answerKeys": [],
   "answerKeysPage": "https://www.joinindiannavy.gov.in/",
   "mockTests": []
  },
  {
   "id": "isro-icrb",
   "name": "ISRO Scientist/Engineer 'SC' (ICRB)",
   "category": "gov-job",
   "oneLiner": "Entry-level scientist/engineer posts across ISRO centres; BE/BTech with 65% required, recent cycles shortlist via GATE score plus interview.",
   "ageMin": 18,
   "ageMax": 28,
   "minEducation": "ug",
   "feeINR": 250,
   "benefit": "Rs 56,100 minimum basic pay per month (Level 10 of the Pay Matrix) plus DA, HRA and Transport Allowance; second-class or sleeper-class rail fare is reimbursed for attending the interview",
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
   ],
   "type": "exam",
   "organization": "ISRO",
   "organizationFull": "Indian Space Research Organisation",
   "officialWebsite": "https://www.isro.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Scientist / Engineer 'SC' in Electronics, Mechanical, Computer Science and allied disciplines at ISRO centres"
   ],
   "description": "ISRO's centralised recruitment for entry-level scientists and engineers, run by the ISRO Centralised Recruitment Board. Recent cycles shortlist candidates on GATE scores and then hold an interview.",
   "officialExamPage": "https://www.isro.gov.in/Careers.html",
   "status": "closed",
   "statusNote": "Advertisement ISRO:ICRB:02(EMC-CEPO):2026 for Scientist/Engineer 'SC' was open from 28 July to 17 August 2026 and has closed.",
   "notification": {
    "title": "Recruitment to the post of Scientist/Engineer 'SC' — Advertisement ISRO:ICRB:02(EMC-CEPO):2026",
    "date": "2026-07-28",
    "cycle": "ICRB:02:2026",
    "current": true,
    "pdfUrl": "https://www.isro.gov.in/media_isro/pdf/recruitmentNotice/2026/July/GATE_Bilingual_Advertisement_2026_28072026.pdf",
    "embeddable": false
   },
   "extraNotifications": [
    {
     "title": "Official FAQ for the Scientist/Engineer 'SC' advertisement",
     "date": "2026-07-28",
     "url": "https://www.isro.gov.in/media_isro/pdf/recruitmentNotice/2026/July/FREQUENTLY_ASKED_QUESTIONS(FAQ)_28072026.pdf"
    }
   ],
   "application": {
    "openingDate": "2026-07-28",
    "closingDate": "2026-08-17",
    "url": "https://www.isro.gov.in/ICRB_Recruitment12.html"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "ISRO careers page",
    "sourceUrl": "https://www.isro.gov.in/Careers.html"
   },
   "eligibility": {
    "education": "BE / B.Tech or equivalent in the notified discipline with an aggregate minimum of 65% marks (average of all semesters) or CGPA 6.84 on a 10-point scale, plus a valid GATE 2025 or GATE 2026 score in the paper prescribed for that discipline (Architecture also needs a valid Council of Architecture registration)",
    "age": "Up to 28 years, with relaxations for reserved categories",
    "other": "Indian citizen. Read the discipline-wise table in the advertisement."
   },
   "fee": "₹250, non-refundable (per Advertisement ISRO:ICRB:02(EMC-CEPO):2026 dated 28 July 2026)",
   "syllabus": {
    "title": "Requirements and selection procedure (inside the advertisement)",
    "url": "https://www.isro.gov.in/media_isro/pdf/recruitmentNotice/2026/July/GATE_Bilingual_Advertisement_2026_28072026.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Shortlisting for interview is in a 1:7 ratio on GATE Score (not GATE marks or GATE rank); a valid GATE 2025 or GATE 2026 score in the specified paper is mandatory",
     "There is no written test in this advertisement — only a personal interview, marked out of 100: Technical (Academic) Knowledge 40, General Awareness in the specialisation 20, Presentation/Communication 20, Comprehension 10, Academic Achievements 10",
     "Qualifying marks: 50% in GATE and 50% in the interview with a 60% aggregate for UR and EWS; 40% / 40% / 50% for SC, ST, OBC and PwBD where posts are reserved",
     "The final panel weights GATE Score 50% and interview marks 50%"
    ],
    "title": "Selection procedure (inside the official advertisement)",
    "url": "https://www.isro.gov.in/media_isro/pdf/recruitmentNotice/2026/July/GATE_Bilingual_Advertisement_2026_28072026.pdf"
   },
   "pastPapers": [
    {
     "year": 2023,
     "papers": [
      {
       "name": "ISRO Assistant 2023 — official previous question paper",
       "url": "https://www.isro.gov.in/media_isro/pdf/recruitmentNotice/2026/August/Assistant_2023_QP_11082026.pdf"
      }
     ]
    }
   ],
   "pastPapersNote": "ISRO publishes previous question papers only for some cadres. The Assistant and Junior Personal Assistant papers above were published with the 2026 administrative recruitment; there is no published paper for Scientist/Engineer 'SC', which is GATE-based.",
   "pastPapersPage": "https://www.isro.gov.in/ICRB_Recruitment11.html",
   "answerKeys": [],
   "answerKeysNote": "ISRO does not publish public answer keys.",
   "answerKeysPage": "https://www.isro.gov.in/Careers.html",
   "mockTests": []
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
   ],
   "type": "exam",
   "organization": "Teaching",
   "organizationFull": "Central Board of Secondary Education (CTET Unit)",
   "officialWebsite": "https://ctet.nic.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Eligibility to apply for teacher posts in KVS, NVS, central government schools and many state and private schools"
   ],
   "description": "CTET is an eligibility test, not a job. Clearing it makes you eligible to apply for teaching posts — the actual recruitment is done separately by KVS, NVS, state governments and schools. Paper I is for classes 1 to 5 and Paper II for classes 6 to 8. The certificate is valid for life.",
   "officialExamPage": "https://ctet.nic.in/",
   "status": "closed",
   "statusNote": "Applications for CTET September 2026 closed on 10 June 2026. The examination is on 6 September 2026 — Paper II in the morning shift (09:30 to 12:00) and Paper I in the evening shift (14:30 to 17:00). CBSE warns that if the number of candidates increases the examination may also be held on 5 September 2026 (Saturday). Results are expected by the end of October 2026.",
   "notification": {
    "title": "CTET September 2026 — Information Bulletin",
    "date": "2026-05-11",
    "cycle": "September 2026",
    "current": true,
    "pdfUrl": "https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2026/05/202605111250310617.pdf",
    "embeddable": true
   },
   "extraNotifications": [
    {
     "title": "Public Notice — CTET September 2026",
     "date": "2026-05-11",
     "url": "https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2026/05/2026051163782266.pdf"
    },
    {
     "title": "Public Notice — CTET September 2026 correction window",
     "date": "2026-06-15",
     "url": "https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2026/06/202606151389616278.pdf"
    }
   ],
   "application": {
    "openingDate": "2026-05-11",
    "closingDate": "2026-06-10",
    "url": "https://ctet.nic.in/"
   },
   "examDate": "2026-09-06",
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "CTET official website",
    "sourceUrl": "https://ctet.nic.in/"
   },
   "eligibility": {
    "education": "For Paper I: class 12 with at least 50% plus a D.El.Ed, or graduation plus a D.El.Ed / B.El.Ed. For Paper II: graduation plus a B.Ed or the equivalent combination in the Information Bulletin",
    "age": "No upper age limit",
    "other": "This is an eligibility certificate, not an appointment. Recruiting bodies hold their own selection."
   },
   "fee": "₹1,000 for one paper and ₹1,200 for both (₹500 and ₹600 for SC/ST/PwD candidates) in the September 2026 cycle",
   "syllabus": {
    "title": "Official CTET syllabus (Information Bulletin)",
    "url": "https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2026/05/202605111250310617.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Paper I (classes 1 to 5): 150 objective questions, 150 marks, 2.5 hours",
     "Paper II (classes 6 to 8): 150 objective questions, 150 marks, 2.5 hours",
     "No negative marking. 60% (90 marks) is the qualifying score.",
     "Both papers cover Child Development & Pedagogy, two languages, and subject areas"
    ],
    "title": "Examination pattern (inside the Information Bulletin)",
    "url": "https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2026/05/202605111250310617.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "CTET does not publish an archive of previous question papers, but it does publish the official final answer keys for past sessions, which list every question's correct option.",
   "pastPapersPage": "https://ctet.nic.in/previous-year-final-answer-key/",
   "answerKeys": [
    {
     "year": 2026,
     "title": "CTET February 2026 — Paper I final answer key (7 Feb 2026)",
     "url": "https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2026/04/20260401145739613.pdf"
    },
    {
     "year": 2026,
     "title": "CTET February 2026 — Paper II final answer key (7 Feb 2026)",
     "url": "https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2026/04/202604011258134140.pdf"
    },
    {
     "year": 2026,
     "title": "CTET February 2026 — Paper I final answer key (8 Feb 2026)",
     "url": "https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2026/04/20260401449979389.pdf"
    },
    {
     "year": 2026,
     "title": "CTET February 2026 — Paper II final answer key (8 Feb 2026)",
     "url": "https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2026/04/20260401628564007.pdf"
    },
    {
     "year": 2024,
     "title": "CTET December 2024 — Paper I final answer key",
     "url": "https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2025/01/2025012321.pdf"
    },
    {
     "year": 2024,
     "title": "CTET December 2024 — Paper II final answer key",
     "url": "https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2025/01/2025012315.pdf"
    },
    {
     "year": 2024,
     "title": "CTET July 2024 — Paper I final answer key",
     "url": "https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2024/08/2024080797.pdf"
    },
    {
     "year": 2024,
     "title": "CTET July 2024 — Paper II final answer key",
     "url": "https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2024/08/2024080769.pdf"
    }
   ],
   "answerKeysPage": "https://ctet.nic.in/previous-year-final-answer-key/",
   "mockTests": []
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
   ],
   "type": "exam",
   "organization": "Defence",
   "organizationFull": "Indian Armed Forces",
   "officialWebsite": "https://indianairforce.nic.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Flying Branch officer",
    "Ground Duty (Technical) officer",
    "Ground Duty (Non-Technical) officer — Administration, Logistics, Accounts, Education, Meteorology"
   ],
   "description": "The Indian Air Force's officer-entry test for graduates, held twice a year as AFCAT 01 and AFCAT 02. Written test, then the Air Force Selection Board process.",
   "officialExamPage": "https://afcat.edcil.co.in/",
   "status": "exam-completed",
   "statusNote": "AFCAT 02/2026 (for courses commencing July 2027) closed for applications on 21 June 2026, after the original 19 June deadline was extended, and the examination was held on 8 August 2026. The next cycle, AFCAT 01/2027, has not been notified yet.",
   "notification": {
    "title": "Notification for AFCAT 02/2026 — Flying Branch and Ground Duty (Technical and Non-Technical)",
    "date": "2026-05-20",
    "cycle": "AFCAT 02/2026",
    "current": true,
    "pdfUrl": "https://afcat.edcil.co.in/assets/images/news/AFCAT_02_2026/Notification%20for%20AFCAT%20Cycle%2002-2026.pdf",
    "embeddable": true
   },
   "extraNotifications": [
    {
     "title": "Notification for AFCAT 01/2026",
     "date": "2025-12-01",
     "url": "https://afcat.edcil.co.in/assets/images/news/AFCAT_02_2025/Notification_AFCAT_01-2026.pdf"
    }
   ],
   "application": {
    "openingDate": "2026-05-20",
    "closingDate": "2026-06-21",
    "url": "https://afcat.edcil.co.in/"
   },
   "examDate": "2026-08-08",
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "AFCAT official portal",
    "sourceUrl": "https://afcat.edcil.co.in/"
   },
   "eligibility": {
    "education": "Class 12 with Physics and Mathematics plus a graduate degree for the Flying Branch; an engineering degree for Ground Duty (Technical); a graduate or postgraduate degree for Ground Duty (Non-Technical), with stream-wise details in the notification",
    "age": "20 to 24 years for the Flying Branch (up to 26 with a valid commercial pilot licence) and 20 to 26 years for Ground Duty, reckoned as on the course commencement date",
    "other": "Candidates must be unmarried when the course begins. Both men and women are eligible."
   },
   "fee": "₹550 plus 18% GST, non-refundable (no fee for candidates applying only through NCC Special Entry or GATE Score Entry)",
   "syllabus": {
    "title": "Official AFCAT syllabus (inside the notification)",
    "url": "https://afcat.edcil.co.in/assets/images/news/AFCAT_02_2026/Notification%20for%20AFCAT%20Cycle%2002-2026.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "AFCAT: 100 questions, 300 marks, 2 hours — General Awareness, Verbal Ability in English, Numerical Ability and Reasoning and Military Aptitude Test",
     "3 marks for a correct answer, 1 mark deducted for a wrong answer, nothing for un-attempted; marks are normalised across shifts",
     "Ground Duty (Technical) candidates may instead apply through the GATE Score Entry, which is exempt from the AFCAT exam and goes straight to AFSB testing",
     "NCC Special Entry is also exempt from the written exam and goes straight to AFSB testing",
     "Then the Air Force Selection Board (AFSB) testing and a medical examination"
    ],
    "title": "Examination pattern (inside the official notification)",
    "url": "https://afcat.edcil.co.in/assets/images/news/AFCAT_02_2026/Notification%20for%20AFCAT%20Cycle%2002-2026.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "The Air Force does not publish previous AFCAT question papers.",
   "pastPapersPage": "https://afcat.edcil.co.in/",
   "answerKeys": [],
   "answerKeysNote": "An objection-management portal opens after each AFCAT examination instead of a published key.",
   "answerKeysPage": "https://afcat.edcil.co.in/",
   "mockTests": [],
   "mockTestNote": "Official guidelines for candidates are published at https://afcat.edcil.co.in/guidelines.html"
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
   ],
   "type": "exam",
   "organization": "SSC",
   "organizationFull": "Staff Selection Commission",
   "officialWebsite": "https://ssc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Sub-Inspector (Executive) in Delhi Police",
    "Sub-Inspector in BSF, CRPF, CISF, ITBP and SSB"
   ],
   "description": "Graduate-level recruitment for Sub-Inspector posts in Delhi Police and the Central Armed Police Forces. Written paper, physical tests, a second paper, then a medical examination.",
   "officialExamPage": "https://ssc.gov.in/",
   "status": "not-announced",
   "statusNote": "No CPO 2026 notice has been published yet. The latest published notice is for the 2025 examination (26 September 2025), whose application window has closed.",
   "notification": {
    "title": "Notice of Sub-Inspector in Delhi Police and Central Armed Police Forces Examination, 2025",
    "date": "2025-09-26",
    "cycle": "2025",
    "current": false,
    "pdfUrl": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_capf_2025.pdf",
    "embeddable": true
   },
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://ssc.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "SSC examination calendar",
    "sourceUrl": "https://ssc.gov.in/for-candidates/examination-calendar"
   },
   "eligibility": {
    "education": "Bachelor's degree in any subject; male candidates for Sub-Inspector in Delhi Police must also hold a valid LMV driving licence",
    "age": "20 to 25 years, with relaxations for reserved categories",
    "other": "Indian citizen. Physical standards, endurance tests and a detailed medical examination apply."
   },
   "fee": "₹100 (women, SC/ST and ex-servicemen candidates are exempt; PwBD candidates are NOT exempt for this examination)",
   "syllabus": {
    "title": "Official CPO syllabus (Annexure of the notice)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_capf_2025.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Paper I: 4 parts of 50 questions each — 200 marks, 2 hours, computer-based",
     "Then Physical Standard Test and Physical Endurance Test",
     "Paper II: English Language and Comprehension — 200 marks",
     "Then a detailed medical examination"
    ],
    "title": "Scheme of examination (paragraph 12 of the official notice)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_capf_2025.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "SSC does not publish a public archive of previous question papers.",
   "pastPapersPage": "https://ssc.gov.in/for-candidates/previous-year-question-paper",
   "answerKeys": [],
   "answerKeysNote": "SSC releases answer keys inside the candidate login area.",
   "answerKeysPage": "https://ssc.gov.in/",
   "mockTests": []
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
   ],
   "type": "exam",
   "organization": "NABARD",
   "organizationFull": "National Bank for Agriculture and Rural Development",
   "officialWebsite": "https://www.nabard.org/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Assistant Manager in Grade A — Rural Development Banking Service (RDBS)",
    "Assistant Manager — Legal, Protocol & Security Services, Rajbhasha"
   ],
   "description": "Entry-level officer post at the National Bank for Agriculture and Rural Development. Preliminary and main written exams, then an interview. NABARD does not recruit every year on a fixed date.",
   "officialExamPage": "https://www.nabard.org/careers-notices1.aspx?cid=693&id=26",
   "status": "not-announced",
   "statusNote": "The Grade A 2025 recruitment is complete — select and wait lists have been published. NABARD's Grade A notifications page currently shows no live notification, and NABARD does not follow a fixed annual calendar.",
   "notification": null,
   "notificationNote": "No current Grade A notification is live on NABARD's career notices page.",
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://www.nabard.org/careers-notices1.aspx?cid=672&id=26"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "NABARD career notices",
    "sourceUrl": "https://www.nabard.org/careers-notices1.aspx?cid=693&id=26"
   },
   "eligibility": {
    "education": "Bachelor's degree with the minimum marks specified in the notification, or a relevant postgraduate degree, depending on the discipline",
    "age": "21 to 30 years in recent cycles, with relaxations for reserved categories",
    "other": "Indian citizen. Requirements differ by discipline — read the notification when it is published."
   },
   "fee": "Around ₹800 in recent cycles (a reduced fee applies to SC/ST/PwBD candidates); confirm in the notification",
   "syllabus": {
    "title": "NABARD downloads — formats and syllabus",
    "url": "https://www.nabard.org/HRMDCertificates.aspx?id=26&cid=689",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Phase I: objective preliminary examination (screening)",
     "Phase II: main examination with objective and descriptive papers",
     "Then an interview"
    ],
    "title": "Scheme of examination (published with each notification)",
    "url": "https://www.nabard.org/careers-notices1.aspx?cid=693&id=26"
   },
   "pastPapers": [],
   "pastPapersNote": "NABARD does not publish previous question papers.",
   "pastPapersPage": "https://www.nabard.org/HRMDCertificates.aspx?id=26&cid=689",
   "answerKeys": [],
   "answerKeysPage": "https://www.nabard.org/careers-notices1.aspx?cid=680&id=26",
   "mockTests": []
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
  },
  {
   "id": "upsc-cms",
   "name": "UPSC Combined Medical Services Examination (CMS)",
   "category": "gov-job",
   "ageMin": null,
   "ageMax": 32,
   "minEducation": "professional",
   "feeINR": 200,
   "oneLiner": "Central government doctor jobs for MBBS graduates: Railways, CHS and municipal medical officer posts, via a two-paper computer-based exam.",
   "benefit": "Rs 56,100 starting basic (Level 10) plus allowances",
   "window": "typically Mar (notification early Mar, ~3 weeks to apply)",
   "windowMonths": [
    3
   ],
   "nextExpected": "Mar 2027 (notification 3 Mar 2027 per UPSC calendar)",
   "frequency": "annual",
   "official": "https://upsc.gov.in/",
   "tags": [
    "upsc",
    "mbbs",
    "doctor",
    "medical-officer",
    "railways"
   ],
   "resources": [],
   "type": "exam",
   "organization": "UPSC",
   "organizationFull": "Union Public Service Commission",
   "officialWebsite": "https://upsc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Medical Officer in Railways",
    "Assistant Divisional Medical Officer",
    "General Duty Medical Officer in central government hospitals and municipal services"
   ],
   "description": "Recruits MBBS doctors as medical officers in the Railways, central government hospitals and other central services.",
   "officialExamPage": "https://www.upsc.gov.in/examinations/Combined%20Medical%20Services%20Examination%2C%202026",
   "status": "upcoming",
   "statusNote": "CMS 2026 is over. The next notification, for CMS 2027, is scheduled for 3 March 2027 in the official UPSC Annual Calendar 2027.",
   "notification": {
    "title": "Combined Medical Services Examination, 2026 — notification",
    "date": "2026-03-11",
    "cycle": "2026",
    "current": false,
    "pdfUrl": "https://www.upsc.gov.in/sites/default/files/Notification-CMSE-2026-English-110326.pdf",
    "embeddable": false
   },
   "application": {
    "openingDate": "2026-03-11",
    "closingDate": "2026-03-31",
    "url": "https://upsconline.gov.in/"
   },
   "examDate": "2026-08-02",
   "expected": {
    "notificationDate": "2027-03-03",
    "closingDate": "2027-03-23",
    "examDate": "2027-07-18",
    "source": "UPSC Annual Calendar 2027 (published 20 May 2026)",
    "sourceUrl": "https://www.upsc.gov.in/sites/default/files/Calendar-Year-2027-Engl-200526.pdf"
   },
   "eligibility": {
    "education": "MBBS — candidates who have passed the written and practical parts of the final MBBS examination may apply",
    "age": "Up to 32 years for most posts, with relaxations for reserved categories",
    "other": "Indian citizen."
   },
   "fee": "₹200 (women, SC/ST and PwBD candidates are exempt)",
   "syllabus": {
    "title": "Official CMS syllabus (inside the notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/Notification-CMSE-2026-English-110326.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Written examination of 500 marks in two papers of 250 marks each, 2 hours each, both entirely objective (multiple choice); question papers are set in English only",
     "Paper I: General Medicine and Paediatrics (120 questions: 96 General Medicine, 24 Paediatrics)",
     "Paper II: Surgery, Gynaecology & Obstetrics, Preventive & Social Medicine (120 questions, 40 from each part)",
     "Then a Personality Test of 100 marks",
     "Negative marking: one third of the marks for a wrong answer; no penalty for a blank"
    ],
    "title": "Scheme of examination (inside the official notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/Notification-CMSE-2026-English-110326.pdf"
   },
   "pastPapersPage": "https://www.upsc.gov.in/examinations/previous-question-papers",
   "answerKeys": [],
   "answerKeysPage": "https://www.upsc.gov.in/examinations/answer-key",
   "mockTests": [
    {
     "title": "Official demo files for the computer-based CMS examination",
     "url": "https://www.upsc.gov.in/examinations/demo-files-computer-based-combined-medical-service-examination"
    }
   ],
   "pastPapers": [
    {
     "year": 2026,
     "papers": [
      {
       "name": "General Medicine and Pediatrics",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CMSE-26-GnrlMdcnPediatrc-Paper-I-030826.pdf"
      },
      {
       "name": "Surgery, Gynaecology & Obstetrics, Preventive & Social Medicine",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CMSE-26-SrgryGynaeObstPvntSclMdcnPaper-II-03082026.pdf"
      }
     ]
    },
    {
     "year": 2025,
     "papers": [
      {
       "name": "General Medicine and Pediatrics",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CMS_2025_PAPER_01-210725.pdf"
      },
      {
       "name": "Surgery, Gynaecology & Obstetrics, Preventive & Social Medicine",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CMS_2025_PAPER_02-210725.pdf"
      }
     ]
    },
    {
     "year": 2024,
     "papers": [
      {
       "name": "General Medicine and Pediatrics",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CMSE-24-PAPER-I-GENERAL-MEDICINE-AND-PEDIATRICS-150724.pdf"
      },
      {
       "name": "Surgery, Gynaecology & Obstetrics, Preventive & Social Medicine",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-CMSE-24-PAPER-II-SURGERY-GYAE-OBST-PREVENT-SOCIAL-MEDCN-150724.pdf"
      }
     ]
    }
   ]
  },
  {
   "id": "upsc-ifos",
   "name": "UPSC Indian Forest Service (IFoS)",
   "category": "gov-job",
   "ageMin": 21,
   "ageMax": 32,
   "minEducation": "ug",
   "feeINR": 100,
   "oneLiner": "Indian Forest Service officer entry for science, agriculture and engineering graduates; screened through the Civil Services Prelims, then a separate IFoS Mains.",
   "benefit": "Rs 56,100 starting basic (Level 10) plus allowances",
   "window": "typically Jan–Feb (same notification as Civil Services Prelims)",
   "windowMonths": [
    1,
    2
   ],
   "nextExpected": "Jan 2027 (notification 13 Jan 2027 per UPSC calendar)",
   "frequency": "annual",
   "official": "https://upsc.gov.in/",
   "tags": [
    "upsc",
    "forest-service",
    "science-graduates",
    "physical-standards"
   ],
   "resources": [],
   "type": "exam",
   "organization": "UPSC",
   "organizationFull": "Union Public Service Commission",
   "officialWebsite": "https://upsc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Assistant Conservator of Forests",
    "Indian Forest Service officer in state forest departments and central deputation"
   ],
   "description": "Recruits science and engineering graduates into the Indian Forest Service. Important: there is no separate IFoS Preliminary exam — candidates are screened through the Civil Services (Preliminary) Examination, then sit a separate IFoS Main examination.",
   "officialExamPage": "https://www.upsc.gov.in/examinations/Indian%20Forest%20Service%20%28Preliminary%29%20Examination%2C%202026%20through%20CS%28P%29%20Examination%2C%202026",
   "status": "upcoming",
   "statusNote": "IFoS 2026 is over. The next notification, for IFoS 2027 (through the CSE Preliminary Examination 2027), is scheduled for 13 January 2027 in the official UPSC Annual Calendar 2027.",
   "notification": {
    "title": "Indian Forest Service (Preliminary) Examination, 2026 through CS(P) Examination, 2026 — notification",
    "date": "2026-02-04",
    "cycle": "2026",
    "current": false,
    "pdfUrl": "https://www.upsc.gov.in/sites/default/files/Notif-IFSP-2026-Engl-060226Rev.pdf",
    "embeddable": false
   },
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://upsconline.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": "2027-01-13",
    "closingDate": "2027-02-02",
    "examDate": "2027-05-23",
    "source": "UPSC Annual Calendar 2027 (published 20 May 2026)",
    "sourceUrl": "https://www.upsc.gov.in/sites/default/files/Calendar-Year-2027-Engl-200526.pdf"
   },
   "eligibility": {
    "education": "Bachelor's degree with at least one of Animal Husbandry & Veterinary Science, Botany, Chemistry, Geology, Mathematics, Physics, Statistics or Zoology; or a degree in Agriculture, Forestry or Engineering",
    "age": "21 to 32 years, with relaxations for reserved categories",
    "other": "Indian citizen. Physical standards apply."
   },
   "fee": "₹100 for the Preliminary examination (women, SC/ST and PwBD candidates are exempt)",
   "syllabus": {
    "title": "Official IFoS syllabus (inside the notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/Notif-IFSP-2026-Engl-060226Rev.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Screening: the Civil Services (Preliminary) Examination — the same 2 objective papers",
     "Mains: 6 descriptive papers (General English, General Knowledge and 2 optional subjects of 2 papers each)",
     "Then a Personality Test of 300 marks"
    ],
    "title": "Scheme of examination (inside the official notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/Notif-IFSP-2026-Engl-060226Rev.pdf"
   },
   "pastPapersNote": "Only the compulsory Main papers are listed here; optional-subject papers are on the UPSC archive page.",
   "pastPapersPage": "https://www.upsc.gov.in/examinations/previous-question-papers",
   "answerKeys": [],
   "answerKeysPage": "https://www.upsc.gov.in/examinations/answer-key",
   "mockTests": [],
   "pastPapers": [
    {
     "year": 2025,
     "papers": [
      {
       "name": "Mains: General English",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IFSM-25-GENERAL-ENGLISH-241125.pdf"
      },
      {
       "name": "Mains: General Knowledge",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IFSM-25-GENERAL-KNOWLEDGE-241125.pdf"
      }
     ]
    },
    {
     "year": 2024,
     "papers": [
      {
       "name": "Mains: General English",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IFSM-24-GENERAL-ENGLISH-021224.pdf"
      },
      {
       "name": "Mains: General Knowledge",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IFSM-24-GENERAL-KNOWLEDGE-021224.pdf"
      }
     ]
    },
    {
     "year": 2023,
     "papers": [
      {
       "name": "Mains: General English",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IFSM-23-GENERAL-%20ENGLISH-051223.pdf"
      },
      {
       "name": "Mains: General Knowledge",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IFSM-23-GENERAL-KNOWLEDGE-051223.pdf"
      }
     ]
    }
   ]
  },
  {
   "id": "upsc-ies-iss",
   "name": "UPSC Indian Economic Service / Indian Statistical Service (IES/ISS)",
   "category": "gov-job",
   "ageMin": 21,
   "ageMax": 30,
   "minEducation": "pg",
   "feeINR": 200,
   "oneLiner": "Economics and statistics postgraduates enter the Indian Economic Service or Indian Statistical Service through this three-day written exam plus viva.",
   "benefit": "Rs 56,100 starting basic (Level 10) plus allowances",
   "window": "typically Feb–Mar (notification mid-Feb, ~3 weeks to apply)",
   "windowMonths": [
    2,
    3
   ],
   "nextExpected": "Feb 2027 (notification 10 Feb 2027 per UPSC calendar)",
   "frequency": "annual",
   "official": "https://upsc.gov.in/",
   "tags": [
    "upsc",
    "economics",
    "statistics",
    "postgraduate"
   ],
   "resources": [],
   "type": "exam",
   "organization": "UPSC",
   "organizationFull": "Union Public Service Commission",
   "officialWebsite": "https://upsc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Indian Economic Service officer (Ministry of Finance, NITI Aayog, economic ministries)",
    "Indian Statistical Service officer (MoSPI, NSO, statistical divisions)"
   ],
   "description": "Recruits economics and statistics postgraduates into two specialist Group A services that staff the government's economic and statistical machinery.",
   "officialExamPage": "https://www.upsc.gov.in/examinations/Indian%20Economic%20Service%20-%20Indian%20Statistical%20Service%20Examination%2C%202026",
   "status": "upcoming",
   "statusNote": "IES/ISS 2026 is over. The next notification, for 2027, is scheduled for 10 February 2027 in the official UPSC Annual Calendar 2027.",
   "notification": {
    "title": "Indian Economic Service / Indian Statistical Service Examination, 2026 — notification",
    "date": "2026-02-11",
    "cycle": "2026",
    "current": false,
    "pdfUrl": "https://www.upsc.gov.in/sites/default/files/Exam_Notification_IES_ISS_Eng_11022026.pdf",
    "embeddable": false
   },
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://upsconline.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": "2027-02-10",
    "closingDate": "2027-03-02",
    "examDate": "2027-06-18",
    "source": "UPSC Annual Calendar 2027 (published 20 May 2026)",
    "sourceUrl": "https://www.upsc.gov.in/sites/default/files/Calendar-Year-2027-Engl-200526.pdf"
   },
   "eligibility": {
    "education": "For IES: a postgraduate degree in Economics, Applied Economics, Business Economics or Econometrics. For ISS: a bachelor's degree with Statistics, Mathematical Statistics or Applied Statistics as a subject studied in all years of the course, or a master's degree in Statistics, Mathematical Statistics or Applied Statistics",
    "age": "21 to 30 years, with relaxations for reserved categories",
    "other": "Indian citizen."
   },
   "fee": "₹200 (women, SC/ST and PwBD candidates are exempt)",
   "syllabus": {
    "title": "Official IES/ISS syllabus (inside the notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/Exam_Notification_IES_ISS_Eng_11022026.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Written examination of 1000 marks over 3 days: General English and General Studies (100 marks each, 3 hours each), plus 4 subject papers of 200 marks each (IES: General Economics I, II and III plus Indian Economics; ISS: Statistics I to IV, with I and II objective)",
     "Then a viva voce of 200 marks"
    ],
    "title": "Scheme of examination (inside the official notification)",
    "url": "https://www.upsc.gov.in/sites/default/files/Exam_Notification_IES_ISS_Eng_11022026.pdf"
   },
   "pastPapersPage": "https://www.upsc.gov.in/examinations/previous-question-papers",
   "answerKeys": [],
   "answerKeysPage": "https://www.upsc.gov.in/examinations/answer-key",
   "mockTests": [],
   "pastPapers": [
    {
     "year": 2026,
     "papers": [
      {
       "name": "General Studies",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-26-220626-GENERAL-STUDIES.pdf"
      },
      {
       "name": "General English",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-26-220626-GENERAL-ENGLISH.pdf"
      },
      {
       "name": "Indian Economics",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-26-220626-INDIAN-ECONOMICS.pdf"
      },
      {
       "name": "General Economics Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-26-220626-GENERAL-ECONOMICS-PAPER-I.pdf"
      },
      {
       "name": "General Economics Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-26-220626-GENERAL-ECONOMICS-PAPER-II.pdf"
      },
      {
       "name": "General Economics Paper - III",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-26-220626-GENERAL-ECONOMICS-PAPER-III.pdf"
      },
      {
       "name": "Statistics Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-26-220626-STATISTICS-PAPER-I.pdf"
      },
      {
       "name": "Statistics Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-26-220626-STATISTICS-PAPER-II.pdf"
      },
      {
       "name": "Statistics Paper - III",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-26-220626-STATISTICS-PAPER-III.pdf"
      },
      {
       "name": "Statistics Paper - IV",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-26-220626-STATISTICS-PAPER-IV.pdf"
      }
     ]
    },
    {
     "year": 2025,
     "papers": [
      {
       "name": "General Studies",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-25-GENERAL-STUDIES-230625.pdf"
      },
      {
       "name": "General English",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-25-GENERAL-ENGLISH-230625.pdf"
      },
      {
       "name": "Indian Economics",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-25-INDIAN-ECONOMICS-230625.pdf"
      },
      {
       "name": "General Economics Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-25-GENERAL-ECONOMICS-PAPER-I-230625.pdf"
      },
      {
       "name": "General Economics Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-25-GENERAL-ECONOMICS-PAPER-II-230625.pdf"
      },
      {
       "name": "General Economics Paper - III",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-25-GENERAL-ECONOMICS-PAPER-III-230625.pdf"
      },
      {
       "name": "Ststistics Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-25-STATISTICS-PAPER-I-230625.pdf"
      },
      {
       "name": "Statistics Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-25-STATISTICS-PAPER-II-230625.pdf"
      },
      {
       "name": "Statistics Paper - III",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-25-STATISTICS-PAPER-III-230625.pdf"
      },
      {
       "name": "Statistics Paper - IV",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-25-STATISTICS-PAPER-IV-230625.pdf"
      }
     ]
    },
    {
     "year": 2024,
     "papers": [
      {
       "name": "General Studies",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-24-GENERAL-STUDIES-240624.pdf"
      },
      {
       "name": "General English",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-24-GENERAL-ENGLISH-240624.pdf"
      },
      {
       "name": "Indian Economics",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-24-INDIAN-ECONOMICS-240624.pdf"
      },
      {
       "name": "General Economics Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-24-GENERAL-ECONOMICS-%20PAPER-I-240624.pdf"
      },
      {
       "name": "General Economics Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-24-GENERAL-ECONOMICS-PAPER-II-240624.pdf"
      },
      {
       "name": "General Economics Paper - III",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-24-GENERAL-ECONOMICS-PAPER-III-240624.pdf"
      },
      {
       "name": "Statistics Paper - I",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-24-STATISTICS-PAPER-I-240624.pdf"
      },
      {
       "name": "Statistics Paper - II",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-24-STATISTICS-PAPER-II-240624.pdf"
      },
      {
       "name": "Statistics Paper - III",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-24-STATISTICS-PAPER-III-240624.pdf"
      },
      {
       "name": "Statistics Paper - IV",
       "url": "https://www.upsc.gov.in/sites/default/files/QP-IES-ISS-24-STATISTICS-PAPER-IV-240624.pdf"
      }
     ]
    }
   ]
  },
  {
   "id": "ssc-stenographer",
   "name": "SSC Stenographer Grade 'C' and 'D'",
   "category": "gov-job",
   "ageMin": 18,
   "ageMax": 30,
   "minEducation": "12th",
   "feeINR": 100,
   "oneLiner": "Shorthand stenographer posts in central ministries for class 12 pass candidates: one computer-based test, then a shorthand skill test.",
   "benefit": "Rs 25,500–29,200 starting basic (Level 4–6)",
   "window": "typically Apr–May (2026: 24 Apr–15 May)",
   "windowMonths": [
    4,
    5
   ],
   "nextExpected": "Apr 2027 (expected)",
   "frequency": "annual",
   "official": "https://ssc.gov.in/",
   "tags": [
    "ssc",
    "stenographer",
    "shorthand",
    "class-12"
   ],
   "resources": [],
   "type": "exam",
   "organization": "SSC",
   "organizationFull": "Staff Selection Commission",
   "officialWebsite": "https://ssc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Stenographer Grade 'C' in central ministries and departments",
    "Stenographer Grade 'D' in central ministries and departments"
   ],
   "description": "Class-12-level recruitment for shorthand stenographer posts. One computer-based test, then a shorthand skill test.",
   "officialExamPage": "https://ssc.gov.in/",
   "status": "closed",
   "statusNote": "Applications for the 2026 examination closed on 15 May 2026. SSC's notice of 12 August 2026 fixed the computer-based examination for 9–12 September 2026.",
   "notification": {
    "title": "Notice of Stenographer Grade 'C' and 'D' Examination, 2026",
    "date": "2026-04-24",
    "cycle": "2026",
    "current": true,
    "pdfUrl": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_steno_2026.pdf",
    "embeddable": true
   },
   "application": {
    "openingDate": "2026-04-24",
    "closingDate": "2026-05-15",
    "url": "https://ssc.gov.in/"
   },
   "examDate": "2026-09-09",
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "SSC notice dated 12 August 2026",
    "sourceUrl": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/notice_12082026.pdf"
   },
   "eligibility": {
    "education": "Class 12 (higher secondary) pass",
    "age": "18 to 27 years for Grade 'D' and 18 to 30 for Grade 'C', with relaxations for reserved categories",
    "other": "Indian citizen. A shorthand skill test at 80 or 100 words per minute applies."
   },
   "fee": "₹100 (women, SC/ST, PwBD and ex-servicemen candidates are exempt)",
   "syllabus": {
    "title": "Official Stenographer syllabus (SSC syllabus repository)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/Syllabus/Syllabus%20-%20Stenographers-169635-.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Computer-based examination: General Intelligence & Reasoning, General Awareness, English Language and Comprehension — 200 marks, 2 hours",
     "Then a shorthand Skill Test in English or Hindi"
    ],
    "title": "Scheme of examination (inside the official notice)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_steno_2026.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "SSC does not publish a public archive of previous question papers.",
   "pastPapersPage": "https://ssc.gov.in/for-candidates/previous-year-question-paper",
   "answerKeys": [],
   "answerKeysNote": "SSC releases answer keys inside the candidate login area.",
   "answerKeysPage": "https://ssc.gov.in/",
   "mockTests": [
    {
     "title": "Official SSC mock test link for Stenographer candidates",
     "url": "https://ssc.gov.in/mock-link-for-candidates-of-steno"
    }
   ],
   "extraNotifications": [
    {
     "title": "SSC notice dated 12 August 2026 — approved examination schedule",
     "date": "2026-08-12",
     "url": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/notice_12082026.pdf"
    }
   ]
  },
  {
   "id": "ssc-jht",
   "name": "SSC Junior Hindi Translator (Combined Hindi Translators Examination)",
   "category": "gov-job",
   "ageMin": 18,
   "ageMax": 30,
   "minEducation": "pg",
   "feeINR": 100,
   "oneLiner": "Junior Hindi Translator and allied translation posts across central ministries: one objective paper plus a descriptive translation paper.",
   "benefit": "Rs 35,400–44,900 starting basic depending on post (Level 6–7)",
   "window": "typically Apr–May (2026: 23 Apr–14 May)",
   "windowMonths": [
    4,
    5
   ],
   "nextExpected": "Apr 2027 (expected)",
   "frequency": "annual",
   "official": "https://ssc.gov.in/",
   "tags": [
    "ssc",
    "hindi",
    "translator",
    "postgraduate"
   ],
   "resources": [],
   "type": "exam",
   "organization": "SSC",
   "organizationFull": "Staff Selection Commission",
   "officialWebsite": "https://ssc.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Junior Hindi Translator",
    "Junior Translation Officer",
    "Senior Hindi Translator",
    "Hindi Pradhyapak"
   ],
   "description": "Recruits Hindi–English translators into central ministries, departments and public bodies. One computer-based paper, then a descriptive translation paper.",
   "officialExamPage": "https://ssc.gov.in/",
   "status": "closed",
   "statusNote": "Applications for the 2026 examination closed on 14 May 2026. SSC's notice of 12 August 2026 fixed Paper-I for 8 September 2026.",
   "notification": {
    "title": "Notice of Combined Hindi Translators Examination, 2026",
    "date": "2026-04-23",
    "cycle": "2026",
    "current": true,
    "pdfUrl": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cht_2026.pdf",
    "embeddable": true
   },
   "application": {
    "openingDate": "2026-04-23",
    "closingDate": "2026-05-14",
    "url": "https://ssc.gov.in/"
   },
   "examDate": "2026-09-08",
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "SSC notice dated 12 August 2026",
    "sourceUrl": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/notice_12082026.pdf"
   },
   "eligibility": {
    "education": "Master's degree in Hindi with English as a subject at degree level, or the equivalent combination set out in the notice, AND (for every post) either a recognised diploma or certificate course in Hindi-English translation or two years of translation experience in a Central or State Government office (three years for the Senior Translator posts)",
    "age": "18 to 30 years, with relaxations for reserved categories",
    "other": "Indian citizen."
   },
   "fee": "₹100 (women, SC/ST, PwBD and ex-servicemen candidates are exempt)",
   "syllabus": {
    "title": "Official syllabus (Annexure of the notice)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cht_2026.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Paper I: objective computer-based — General Hindi and General English, 200 marks, 2 hours",
     "Paper II: descriptive translation and essay, 200 marks, 2 hours"
    ],
    "title": "Scheme of examination (inside the official notice)",
    "url": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cht_2026.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "SSC does not publish a public archive of previous question papers.",
   "pastPapersPage": "https://ssc.gov.in/for-candidates/previous-year-question-paper",
   "answerKeys": [],
   "answerKeysNote": "SSC releases answer keys inside the candidate login area.",
   "answerKeysPage": "https://ssc.gov.in/",
   "mockTests": [],
   "extraNotifications": [
    {
     "title": "SSC notice dated 12 August 2026 — approved examination schedule",
     "date": "2026-08-12",
     "url": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/notice_12082026.pdf"
    }
   ]
  },
  {
   "id": "rrb-technician",
   "name": "RRB Technician",
   "category": "gov-job",
   "ageMin": 18,
   "ageMax": 33,
   "minEducation": "10th",
   "feeINR": 500,
   "oneLiner": "Railway technician posts for ITI and diploma holders who maintain locomotives, coaches, signalling and electrical systems.",
   "benefit": "Rs 19,900–29,200 starting basic (Level 2–5) plus railway allowances",
   "window": "varies by CEN (CEN 02/2026: 30 Jun–29 Jul 2026)",
   "windowMonths": [],
   "nextExpected": "next Technician CEN not yet announced",
   "frequency": "varies (per CEN)",
   "official": "https://rrb.indianrailways.gov.in/",
   "tags": [
    "railways",
    "technician",
    "iti",
    "cen"
   ],
   "resources": [],
   "type": "exam",
   "organization": "Railways",
   "organizationFull": "Railway Recruitment Boards, Ministry of Railways",
   "officialWebsite": "https://rrb.indianrailways.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Technician Grade I Signal",
    "Technician Grade III (various trades)"
   ],
   "description": "Recruits ITI and diploma holders as Railway technicians who maintain locomotives, coaches, signalling and electrical systems.",
   "officialExamPage": "https://rrb.indianrailways.gov.in/",
   "status": "closed",
   "statusNote": "Applications for CEN 02/2026 closed on 29 July 2026. The examination schedule has not been announced yet.",
   "notification": {
    "title": "CEN 02/2026 — Detailed Centralised Employment Notification, Technician categories",
    "date": "2026-06-30",
    "cycle": "CEN 02/2026",
    "current": true,
    "pdfUrl": "https://rrb.indianrailways.gov.in/-/image/1783081193700Detailed_CEN_02_20262.pdf/examsDocuments",
    "embeddable": false
   },
   "extraNotifications": [
    {
     "title": "CEN 02/2026 — official FAQ",
     "date": "2026-06-30",
     "url": "https://rrb.indianrailways.gov.in/-/image/1783081420531FAQ_CEN_022026.pdf/examsDocuments"
    }
   ],
   "application": {
    "openingDate": "2026-06-30",
    "closingDate": "2026-07-29",
    "url": "https://www.rrbapply.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "RRB Recruitment (CENs) listing",
    "sourceUrl": "https://rrb.indianrailways.gov.in/getdata?cennum=02/2026&loc=chandigarh&category=Notification"
   },
   "eligibility": {
    "education": "For Technician Grade I Signal: a B.Sc. in Physics, Electronics, Computer Science, IT or Instrumentation, or a three-year Diploma or a Degree in Engineering in those streams. For Technician Grade III: class 10 (Matriculation/SSLC) plus an ITI certificate from NCVT/SCVT in a notified trade, or a Course Completed Act Apprenticeship in that trade (an engineering diploma or degree is NOT accepted in lieu of ITI/apprenticeship for Grade III)",
    "age": "18 to 33 years for Grade I and 18 to 30 for Grade III in CEN 02/2026, with relaxations for reserved categories",
    "other": "Indian citizen. Medical fitness standards apply."
   },
   "fee": "₹500, of which ₹400 is refunded after appearing for the CBT (₹250 for SC/ST/ex-servicemen/PwBD/women/minority/EBC candidates, fully refunded)",
   "syllabus": {
    "title": "Official syllabus (Annexure of the Detailed CEN)",
    "url": "https://rrb.indianrailways.gov.in/-/image/1783081193700Detailed_CEN_02_20262.pdf/examsDocuments",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "One computer-based test only, held separately for each pay level: 100 questions, 90 minutes",
     "Technician Grade III (6,234 of the 6,557 vacancies): Mathematics 25, General Intelligence & Reasoning 25, General Science 40, General Awareness 10",
     "Technician Grade I Signal: Basic Science & Engineering 35, Basics of Computers & Applications 20, Mathematics 20, General Intelligence & Reasoning 15, General Awareness 10",
     "Negative marking of 1/3 mark per wrong answer",
     "Then document verification and medical examination"
    ],
    "title": "Scheme of examination (inside the Detailed CEN)",
    "url": "https://rrb.indianrailways.gov.in/-/image/1783081193700Detailed_CEN_02_20262.pdf/examsDocuments"
   },
   "pastPapers": [],
   "pastPapersNote": "RRBs do not publish previous question papers publicly.",
   "pastPapersPage": "https://rrb.indianrailways.gov.in/",
   "answerKeys": [],
   "answerKeysPage": "https://rrb.indianrailways.gov.in/",
   "mockTests": []
  },
  {
   "id": "rrb-je",
   "name": "RRB Junior Engineer (JE)",
   "category": "gov-job",
   "ageMin": 18,
   "ageMax": 33,
   "minEducation": "diploma",
   "feeINR": 500,
   "oneLiner": "Junior Engineer, Depot Material Superintendent and Chemical & Metallurgical Assistant posts in the Railways, for diploma and degree engineers.",
   "benefit": "Rs 35,400 starting basic (Level 6) plus railway allowances",
   "window": "varies by CEN (CEN 04/2026: 14 Aug–13 Sep 2026)",
   "windowMonths": [
    8,
    9
   ],
   "nextExpected": "open now — CEN 04/2026 closes 13 Sep 2026",
   "frequency": "varies (per CEN)",
   "official": "https://rrb.indianrailways.gov.in/",
   "tags": [
    "railways",
    "junior-engineer",
    "diploma",
    "cen"
   ],
   "resources": [],
   "type": "exam",
   "organization": "Railways",
   "organizationFull": "Railway Recruitment Boards, Ministry of Railways",
   "officialWebsite": "https://rrb.indianrailways.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Junior Engineer (Civil, Mechanical, Electrical, Signal & Telecom, IT)",
    "Depot Material Superintendent (DMS)",
    "Chemical & Metallurgical Assistant (CMA)"
   ],
   "description": "Recruits diploma and degree engineers as Junior Engineers and allied technical supervisors in the Railways. Two computer-based tests, then document verification and a medical examination.",
   "officialExamPage": "https://rrb.indianrailways.gov.in/",
   "status": "open",
   "statusNote": "CEN 04/2026 for Junior Engineer and Depot Material Superintendent posts is open now: applications from 14 August to 13 September 2026 (23:59), with fee payment allowed until 15 September 2026. The earlier CEN 05/2025 examination is still in progress.",
   "notification": {
    "title": "CEN 04/2026 — Detailed Centralised Employment Notice, Junior Engineer and Depot Material Superintendent",
    "date": "2026-08-13",
    "cycle": "CEN 04/2026",
    "current": true,
    "pdfUrl": "https://rrb.indianrailways.gov.in/-/image/1787058904504CEN_04_2026_JE_DMS_English.pdf/examsDocuments",
    "embeddable": false
   },
   "extraNotifications": [
    {
     "title": "CEN 04/2026 — Corrigendum No. 1",
     "date": "2026-08-18",
     "url": "https://rrb.indianrailways.gov.in/-/image/1787108023956Corrigendum_1_CEN_04-2026.pdf/examsDocuments"
    },
    {
     "title": "CEN 04/2026 — official FAQ",
     "date": "2026-08-13",
     "url": "https://rrb.indianrailways.gov.in/-/image/1787147535897FAQs_CEN_04_2026__JE_DMS_English.pdf/examsDocuments"
    },
    {
     "title": "CEN 05/2025 — the previous Junior Engineer notice (examination in progress)",
     "date": "2025-10-28",
     "url": "https://rrb.indianrailways.gov.in/-/image/1762325215428Detailed_CEN_5_2025_JE_English_28_10_2025.pdf/examsDocuments"
    }
   ],
   "application": {
    "openingDate": "2026-08-14",
    "closingDate": "2026-09-13",
    "url": "https://www.rrbapply.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "RRB Recruitment (CENs) listing",
    "sourceUrl": "https://rrb.indianrailways.gov.in/getdata?cennum=05/2025&loc=chandigarh&category=Notification"
   },
   "eligibility": {
    "education": "Three-year Diploma in the relevant engineering branch for Junior Engineer posts (a B.E./B.Tech in the same discipline is accepted in lieu of the diploma); a three-year Diploma in Engineering in ANY discipline for Depot Material Superintendent; a B.Sc. in Physics and Chemistry with at least 45% marks for Chemical & Metallurgical Assistant",
    "age": "18 to 33 years in CEN 05/2025, with relaxations for reserved categories",
    "other": "Indian citizen. Medical fitness standards apply."
   },
   "fee": "₹500, of which ₹400 is refunded after appearing for CBT-1 (₹250 for SC/ST/ex-servicemen/PwBD/women/minority/EBC candidates, fully refunded)",
   "syllabus": {
    "title": "Official syllabus (Annexure of the Detailed CEN)",
    "url": "https://rrb.indianrailways.gov.in/-/image/1787058904504CEN_04_2026_JE_DMS_English.pdf/examsDocuments",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "CBT-1: 100 questions, 90 minutes — screening only",
     "CBT-2: 150 questions, 120 minutes, mostly on the technical subject",
     "Negative marking of 1/3 mark per wrong answer",
     "Then document verification and medical examination"
    ],
    "title": "Scheme of examination (inside the Detailed CEN)",
    "url": "https://rrb.indianrailways.gov.in/-/image/1787058904504CEN_04_2026_JE_DMS_English.pdf/examsDocuments"
   },
   "pastPapers": [],
   "pastPapersNote": "RRBs do not publish previous question papers publicly.",
   "pastPapersPage": "https://rrb.indianrailways.gov.in/",
   "answerKeys": [],
   "answerKeysPage": "https://rrb.indianrailways.gov.in/",
   "mockTests": []
  },
  {
   "id": "ibps-so",
   "name": "IBPS Specialist Officer (SO)",
   "category": "gov-job",
   "ageMin": 20,
   "ageMax": 30,
   "minEducation": "ug",
   "feeINR": 850,
   "oneLiner": "Specialist officer posts in public sector banks (IT, agriculture, law, HR, marketing, Rajbhasha) for candidates with a matching professional degree.",
   "benefit": "Rs 48,480 starting basic; roughly Rs 80,000–1,00,000/month gross",
   "window": "typically Jun–Jul (2026: 1 Jul–21 Jul)",
   "windowMonths": [
    6,
    7
   ],
   "nextExpected": "Jun 2027 (expected)",
   "frequency": "annual",
   "official": "https://www.ibps.in/",
   "tags": [
    "banking",
    "specialist-officer",
    "it-officer",
    "agriculture-field-officer"
   ],
   "resources": [],
   "type": "exam",
   "organization": "IBPS",
   "organizationFull": "Institute of Banking Personnel Selection",
   "officialWebsite": "https://www.ibps.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "IT Officer (Scale I)",
    "Agricultural Field Officer",
    "Rajbhasha Adhikari",
    "Law Officer",
    "HR / Personnel Officer",
    "Marketing Officer"
   ],
   "description": "The common recruitment process for specialist officer posts in public sector banks — for candidates with a specific professional degree rather than a general one.",
   "officialExamPage": "https://www.ibps.in/index.php/specialist-officers/",
   "status": "closed",
   "statusNote": "Registration for CRP SPL-XVI closed on 21 July 2026. The preliminary examination was scheduled for August 2026 and the main examination for November 2026.",
   "notification": {
    "title": "Notification for Common Recruitment Process CRP SPL-XVI",
    "date": "2026-07-01",
    "cycle": "CRP SPL-XVI",
    "current": true,
    "pdfUrl": "https://www.ibps.in/wp-content/uploads/Detailed-Notification-CRP-SPL-XVI_Final_V1_30.06.2026.pdf",
    "embeddable": true
   },
   "application": {
    "openingDate": "2026-07-01",
    "closingDate": "2026-07-21",
    "url": "https://www.ibps.in/index.php/specialist-officers-xvi/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "IBPS CRP updates",
    "sourceUrl": "https://www.ibps.in/index.php/crp-updates"
   },
   "eligibility": {
    "education": "A professional degree matching the post — for example a four-year engineering degree in IT or Computer Science for IT Officer, or a degree in Agriculture for Agricultural Field Officer",
    "age": "20 to 30 years as on 1 July 2026 (born between 2 July 1996 and 1 July 2006, both inclusive), with relaxations for reserved categories",
    "other": "Indian citizen. Requirements differ post by post; read the notification."
   },
   "fee": "₹850 including GST (₹175 for SC/ST/PwBD candidates)",
   "syllabus": {
    "title": "Official examination structure and syllabus (inside the notification)",
    "url": "https://www.ibps.in/wp-content/uploads/Detailed-Notification-CRP-SPL-XVI_Final_V1_30.06.2026.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Preliminary: objective online test with sectional timing (differs between Law/Rajbhasha and the other posts)",
     "Main: 150 questions, 200 marks, 125 minutes, with Professional Knowledge worth 50 questions and 100 marks, plus a 2-question 25-mark descriptive paper in 30 minutes; only the Professional Knowledge score counts for merit",
     "Then an interview; final merit is 80:20 between the main exam and interview"
    ],
    "title": "Structure of examination (inside the official notification)",
    "url": "https://www.ibps.in/wp-content/uploads/Detailed-Notification-CRP-SPL-XVI_Final_V1_30.06.2026.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "IBPS does not publish previous question papers.",
   "pastPapersPage": "https://www.ibps.in/",
   "answerKeys": [],
   "answerKeysPage": "https://www.ibps.in/",
   "mockTests": [
    {
     "title": "Official IBPS online practice test (common to all IBPS recruitment processes)",
     "url": "https://www4.digialm.com/OnlineAssessment/index.html?167@@M152"
    }
   ]
  },
  {
   "id": "ibps-rrb-office-assistant",
   "name": "IBPS RRB Office Assistant (Multipurpose)",
   "category": "gov-job",
   "ageMin": 18,
   "ageMax": 28,
   "minEducation": "ug",
   "feeINR": 850,
   "oneLiner": "Clerical-cadre Office Assistant posts in Regional Rural Banks; local language proficiency required, and no interview.",
   "benefit": "Rs 17,900 starting basic plus allowances",
   "window": "typically Aug–Sep (CRP RRBs-XIV: 1 Sep–21 Sep 2025)",
   "windowMonths": [
    8,
    9
   ],
   "nextExpected": "next CRP RRBs cycle not yet announced",
   "frequency": "annual (dates vary)",
   "official": "https://www.ibps.in/",
   "tags": [
    "banking",
    "regional-rural-banks",
    "clerk",
    "local-language"
   ],
   "resources": [],
   "type": "exam",
   "organization": "IBPS",
   "organizationFull": "Institute of Banking Personnel Selection",
   "officialWebsite": "https://www.ibps.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Office Assistant (Multipurpose) — clerical cadre in Regional Rural Banks"
   ],
   "description": "The clerical-cadre entry into Regional Rural Banks, recruited through the same common process as RRB officers. Preliminary and main online exams; no interview.",
   "officialExamPage": "https://www.ibps.in/index.php/regional-rural-bank/",
   "status": "not-announced",
   "statusNote": "Registration for CRP RRBs-XIV closed on 21 September 2025 and that process is complete. The next RRB common recruitment process has not been notified.",
   "notification": {
    "title": "Notification for Common Recruitment Process CRP RRBs-XIV",
    "date": "2025-09-01",
    "cycle": "CRP RRBs-XIV",
    "current": false,
    "pdfUrl": "https://www.ibps.in/wp-content/uploads/CRP-RRBs-XIV_Final_AD_1.9.25.pdf",
    "embeddable": true
   },
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://www.ibps.in/index.php/rural-bank-xiv/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "IBPS CRP RRBs page",
    "sourceUrl": "https://www.ibps.in/index.php/regional-rural-bank/"
   },
   "eligibility": {
    "education": "Bachelor's degree in any discipline",
    "age": "18 to 28 years, with relaxations for reserved categories",
    "other": "Proficiency in the local language of the state is required."
   },
   "fee": "₹850 including GST (₹175 for SC/ST/PwBD candidates)",
   "syllabus": {
    "title": "Official examination structure and syllabus (inside the notification)",
    "url": "https://www.ibps.in/wp-content/uploads/CRP-RRBs-XIV_Final_AD_1.9.25.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Preliminary: 80 questions, 80 marks, 45 minutes — Reasoning and Numerical Ability",
     "Main: 200 marks objective test",
     "There is no interview for Office Assistant"
    ],
    "title": "Structure of examination (inside the official notification)",
    "url": "https://www.ibps.in/wp-content/uploads/CRP-RRBs-XIV_Final_AD_1.9.25.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "IBPS does not publish previous question papers.",
   "pastPapersPage": "https://www.ibps.in/",
   "answerKeys": [],
   "answerKeysPage": "https://www.ibps.in/",
   "mockTests": [
    {
     "title": "Official IBPS online practice test (common to all IBPS recruitment processes)",
     "url": "https://www4.digialm.com/OnlineAssessment/index.html?167@@M152"
    }
   ]
  },
  {
   "id": "sbi-so",
   "name": "SBI Specialist Cadre Officer (SO)",
   "category": "gov-job",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "ug",
   "feeINR": 750,
   "oneLiner": "SBI hires specialists through many separate advertisements a year (IT, law, risk, credit, marketing) — usually shortlisting and interview, not a written exam.",
   "benefit": "Varies by post and grade; most posts are Scale II and above",
   "window": "rolling — several advertisements open through the year",
   "windowMonths": [],
   "nextExpected": "check SBI current openings; new advertisements appear most months",
   "frequency": "rolling (multiple advertisements a year)",
   "official": "https://sbi.bank.in/web/careers",
   "tags": [
    "banking",
    "sbi",
    "specialist-officer",
    "experienced-hire",
    "rolling"
   ],
   "resources": [],
   "type": "exam",
   "organization": "SBI",
   "organizationFull": "State Bank of India",
   "officialWebsite": "https://sbi.co.in/web/careers",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Deputy Manager and Assistant Manager in specialist streams (IT, law, risk, credit, marketing)",
    "Assistant General Manager and Chief Manager on contract or regular basis"
   ],
   "description": "SBI hires specialists through many separate advertisements through the year rather than one annual exam. Each advertisement has its own post, eligibility, deadline and selection method — often shortlisting and interview rather than a written test.",
   "officialExamPage": "https://sbi.bank.in/web/careers/current-openings",
   "status": "open",
   "statusNote": "Several specialist advertisements are open at once. Advertisements CRPD/SCO/2026-27/11, /12 and /13 are open for applications from 7 August 2026 to 27 August 2026. Check the current openings page for the full live list — this is not an annual cycle.",
   "notification": {
    "title": "Engagement of Specialist Cadre Officers — advertisement CRPD/SCO/2026-27/13",
    "date": "2026-08-07",
    "cycle": "CRPD/SCO/2026-27/13",
    "current": true,
    "pdfUrl": "https://sbi.bank.in/documents/77530/57941334/FINAL++ADVT++CRPD_SCO_2026-27_13.pdf/64d9efd8-2a64-ad88-d4a1-0ae1a5e2fb4b?t=1786026587436",
    "embeddable": false
   },
   "extraNotifications": [
    {
     "title": "Advertisement CRPD/SCO/2026-27/12 (regular basis)",
     "date": "2026-08-07",
     "url": "https://sbi.bank.in/documents/77530/57941334/FINAL+ADVT+CRPD_SCO_2026-27_12.pdf/1c6d4f7f-ca97-cc9c-6e00-5b6744a1283d?t=1786026186547"
    },
    {
     "title": "Advertisement CRPD/SCO/2026-27/11 (contract / regular basis)",
     "date": "2026-08-07",
     "url": "https://sbi.bank.in/documents/77530/57941334/ADV_CRPD_SCO_2026-27_11+%281%29.pdf/474dbe0d-e408-720b-f412-3788a553105a?t=1786024930974"
    }
   ],
   "application": {
    "openingDate": "2026-08-07",
    "closingDate": "2026-08-27",
    "url": "https://recruitment.sbi.bank.in/crpd-sco-2026-27-13/apply"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "SBI current openings page",
    "sourceUrl": "https://sbi.bank.in/web/careers/current-openings"
   },
   "eligibility": {
    "education": "A professional degree or qualification matching the specific post, usually with several years of relevant experience",
    "age": "Varies by post and is stated in each advertisement",
    "other": "Each advertisement is independent — always read the one you are applying under."
   },
   "fee": "₹750 for most specialist advertisements (SC/ST/PwBD candidates are exempt); confirm in the advertisement",
   "syllabus": {
    "title": "Selection procedure and requirements (inside each advertisement)",
    "url": "https://sbi.bank.in/web/careers/current-openings",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Selection is usually by shortlisting and interview",
     "Some posts add an online written test or a CTC negotiation round",
     "The method is stated in each advertisement"
    ],
    "title": "Selection procedure (inside the advertisement you are applying under)",
    "url": "https://sbi.bank.in/web/careers/current-openings"
   },
   "pastPapers": [],
   "pastPapersNote": "Not applicable to most specialist posts, which are filled by interview.",
   "pastPapersPage": "https://sbi.bank.in/web/careers/current-openings",
   "answerKeys": [],
   "answerKeysPage": "https://sbi.bank.in/web/careers/current-openings",
   "mockTests": []
  },
  {
   "id": "nabard-grade-b",
   "name": "NABARD Grade B (Manager)",
   "category": "gov-job",
   "ageMin": null,
   "ageMax": null,
   "minEducation": "pg",
   "feeINR": null,
   "oneLiner": "Manager (Grade B) direct entry at NABARD. Recruited only occasionally — the last announced process was withdrawn, so there is no annual cycle.",
   "benefit": "Rs 55,200 starting basic (Grade B) plus allowances",
   "window": "no fixed window — announced only when NABARD has vacancies",
   "windowMonths": [],
   "nextExpected": "not announced",
   "frequency": "occasional",
   "official": "https://www.nabard.org/",
   "tags": [
    "banking",
    "nabard",
    "manager",
    "occasional-recruitment"
   ],
   "resources": [],
   "type": "exam",
   "organization": "NABARD",
   "organizationFull": "National Bank for Agriculture and Rural Development",
   "officialWebsite": "https://www.nabard.org/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Manager in Grade B — Rural Development Banking Service (RDBS)"
   ],
   "description": "A direct-entry manager post at NABARD, one level above Grade A. It is recruited only occasionally — there is no annual cycle, and the last announced process was withdrawn.",
   "officialExamPage": "https://www.nabard.org/careers-notices1.aspx?cid=676&id=26",
   "status": "not-announced",
   "statusNote": "NABARD's Grade B notifications page shows no live notification. The most recent Manager Grade B (RDBS) recruitment process was withdrawn by NABARD. Treat any claim of an annual Grade B exam with caution.",
   "notification": null,
   "notificationNote": "No current or recent Grade B notification is live on NABARD's career notices page.",
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://www.nabard.org/careers-notices1.aspx?cid=676&id=26"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "NABARD career notices",
    "sourceUrl": "https://www.nabard.org/careers-notices1.aspx?cid=693&id=26"
   },
   "eligibility": {
    "education": "As specified when a notification is issued — past cycles asked for a postgraduate degree or a professional qualification with relevant experience",
    "age": "As specified in the notification",
    "other": "Indian citizen."
   },
   "fee": "As specified in the notification",
   "syllabus": {
    "title": "NABARD downloads — formats and syllabus",
    "url": "https://www.nabard.org/HRMDCertificates.aspx?id=26&cid=689",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Announced with each notification; past cycles used a preliminary and main examination followed by an interview"
    ],
    "title": "NABARD career notices",
    "url": "https://www.nabard.org/careers-notices1.aspx?cid=693&id=26"
   },
   "pastPapers": [],
   "pastPapersNote": "NABARD does not publish previous question papers.",
   "pastPapersPage": "https://www.nabard.org/HRMDCertificates.aspx?id=26&cid=689",
   "answerKeys": [],
   "answerKeysPage": "https://www.nabard.org/careers-notices1.aspx?cid=680&id=26",
   "mockTests": []
  },
  {
   "id": "sebi-grade-a",
   "name": "SEBI Officer Grade A (Assistant Manager)",
   "category": "gov-job",
   "ageMin": null,
   "ageMax": 30,
   "minEducation": "ug",
   "feeINR": 1000,
   "oneLiner": "Officer Grade A (Assistant Manager) at India's securities market regulator, across General, Legal, IT, Research, Official Language and Engineering streams.",
   "benefit": "Rs 62,500 starting basic; gross about Rs 1,84,000/month at Mumbai without accommodation (Rs 1,43,000/month with accommodation)",
   "window": "varies year to year (2025 cycle: 30 Oct–28 Nov)",
   "windowMonths": [
    10,
    11
   ],
   "nextExpected": "not announced",
   "frequency": "annual (dates vary)",
   "official": "https://www.sebi.gov.in/",
   "tags": [
    "regulator",
    "sebi",
    "assistant-manager",
    "finance"
   ],
   "resources": [],
   "type": "exam",
   "organization": "SEBI",
   "organizationFull": "Securities and Exchange Board of India",
   "officialWebsite": "https://www.sebi.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Assistant Manager (Officer Grade A) at the Securities and Exchange Board of India — General, Legal, IT, Research, Official Language and Engineering streams"
   ],
   "description": "Entry-level officer post at India's securities market regulator. Phase I screening test, Phase II main test, then an interview.",
   "officialExamPage": "https://www.sebi.gov.in/sebiweb/about/AboutAction.do?doVacancies=yes",
   "status": "closed",
   "statusNote": "The Officer Grade A 2025 recruitment closed for applications on 28 November 2025. Phase I was held on 10 January 2026 and Phase II on 21 February 2026.",
   "notification": {
    "title": "Recruitment of Officer Grade A (Assistant Manager) 2025 — official advertisement",
    "date": "2025-10-30",
    "cycle": "2025",
    "current": false,
    "pdfUrl": "https://www.sebi.gov.in/sebi_data/careerfiles/oct-2025/1761782417659.pdf",
    "embeddable": false
   },
   "application": {
    "openingDate": "2025-10-30",
    "closingDate": "2025-11-28",
    "url": "https://www.sebi.gov.in/sebiweb/about/AboutAction.do?doVacancies=yes"
   },
   "examDate": "2026-01-10",
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "SEBI careers page",
    "sourceUrl": "https://www.sebi.gov.in/sebiweb/about/AboutAction.do?doVacancies=yes"
   },
   "eligibility": {
    "education": "A degree matching the stream applied for — for example any bachelor's degree plus a postgraduate qualification for the General stream, LL.B. for Legal, or an engineering degree for the IT and Engineering streams",
    "age": "Up to 30 years as on 30 September 2025 (born on or after 1 October 1995), with relaxations for reserved categories (5 years SC/ST, 3 years OBC)",
    "other": "Indian citizen. Read the stream-wise table in the advertisement."
   },
   "fee": "₹1,000 plus 18% GST, non-refundable (₹100 plus 18% GST for SC/ST/PwBD candidates); a separate fee is payable for each stream you apply to",
   "syllabus": {
    "title": "Official syllabus and scheme (inside the advertisement)",
    "url": "https://www.sebi.gov.in/sebi_data/careerfiles/oct-2025/1761782417659.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Phase I: on-line screening examination in two papers of 100 marks each",
     "Phase II: on-line main examination in two papers of 100 marks each",
     "Phase III: interview",
     "Negative marking of 1/4 of the marks assigned applies to objective questions in both phases. Final selection weights Phase II at 85% and the interview at 15%; Phase I marks do not count toward final selection"
    ],
    "title": "Scheme of examination (inside the official advertisement)",
    "url": "https://www.sebi.gov.in/sebi_data/careerfiles/oct-2025/1761782417659.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "SEBI does not publish previous question papers.",
   "pastPapersPage": "https://www.sebi.gov.in/sebiweb/about/AboutAction.do?doVacancies=yes",
   "answerKeys": [],
   "answerKeysPage": "https://www.sebi.gov.in/sebiweb/about/AboutAction.do?doVacancies=yes",
   "mockTests": []
  },
  {
   "id": "gic-assistant-manager",
   "name": "GIC Re Assistant Manager (Scale I Officer)",
   "category": "gov-job",
   "ageMin": 21,
   "ageMax": 30,
   "minEducation": "ug",
   "feeINR": 1000,
   "oneLiner": "Assistant Manager (Scale I) at GIC Re, India's national reinsurer. Recruited only when vacancies arise, not on an annual calendar.",
   "benefit": "Rs 50,925 starting basic (Scale I) plus allowances",
   "window": "no fixed window (last drive: 4 Dec–19 Dec 2024)",
   "windowMonths": [],
   "nextExpected": "not announced",
   "frequency": "occasional",
   "official": "https://www.gicre.in/",
   "tags": [
    "insurance",
    "reinsurance",
    "gic-re",
    "occasional-recruitment"
   ],
   "resources": [],
   "type": "exam",
   "organization": "GIC",
   "organizationFull": "General Insurance Corporation of India (GIC Re)",
   "officialWebsite": "https://www.gicre.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Assistant Manager (Scale I) at General Insurance Corporation of India — reinsurance, actuarial, IT, finance, legal and medical streams"
   ],
   "description": "Officer entry at India's national reinsurer. GIC Re recruits only when it has vacancies, not on an annual calendar — the last drive was for 110 posts and is now complete.",
   "officialExamPage": "https://www.gicre.in/en/people-resources/career-en",
   "status": "not-announced",
   "statusNote": "The Assistant Manager (Scale I) recruitment of 110 posts advertised on 4 December 2024 is complete — group discussion and interview results have been published. No new Assistant Manager advertisement is live. GIC Re does not follow an annual cycle.",
   "notification": {
    "title": "Detailed Advertisement — Recruitment of Assistant Managers (Scale I), 110 posts",
    "date": "2024-12-04",
    "cycle": "2024",
    "current": false,
    "pdfUrl": "https://www.gicre.in/images/2024/Detailed_Advertisement_for_Recruitment_of_AMs_in_GIC_Re_2024_-_v3_-_Final.pdf",
    "embeddable": false
   },
   "application": {
    "openingDate": "2024-12-04",
    "closingDate": "2024-12-19",
    "url": "https://www.gicre.in/en/people-resources/career-en"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "GIC Re careers page",
    "sourceUrl": "https://www.gicre.in/en/people-resources/career-en"
   },
   "eligibility": {
    "education": "A degree matching the stream — for example any graduate degree for the generalist stream, MBBS for medical, or a relevant professional qualification for actuarial, legal, IT and finance streams",
    "age": "21 to 30 years as on 1 November 2024 in the last drive (born between 2 November 1994 and 1 November 2003), with relaxations capped so that the maximum age does not exceed 45 years",
    "other": "Indian citizen. Each advertisement sets its own stream-wise eligibility."
   },
   "fee": "₹1,000 plus 18% GST, non-refundable. SC/ST candidates, PH candidates, female candidates and employees of GIC and GIPSA member companies pay nothing at all",
   "syllabus": {
    "title": "Official information handout for the written examination",
    "url": "https://www.gicre.in/images/2024/pdf/Recruitment_2024_Written_Examination_Information_Handout_English.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Online written examination",
     "Then a group discussion and interview",
     "Then a pre-employment medical examination"
    ],
    "title": "Selection procedure (inside the official advertisement)",
    "url": "https://www.gicre.in/images/2024/Detailed_Advertisement_for_Recruitment_of_AMs_in_GIC_Re_2024_-_v3_-_Final.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "GIC Re does not publish previous question papers. It does publish an official information handout describing the test format.",
   "pastPapersPage": "https://www.gicre.in/en/people-resources/career-en",
   "answerKeys": [],
   "answerKeysPage": "https://www.gicre.in/en/people-resources/career-en",
   "mockTests": []
  },
  {
   "id": "india-post-gds",
   "name": "India Post Gramin Dak Sevak (GDS)",
   "category": "gov-job",
   "ageMin": 18,
   "ageMax": 40,
   "minEducation": "10th",
   "feeINR": 100,
   "oneLiner": "Village-level postal jobs (Branch Postmaster, Assistant BPM, Dak Sevak) selected purely on class 10 marks — no written exam.",
   "benefit": "Rs 12,000–14,500 time-related continuity allowance a month",
   "window": "notified in cycles through the official GDS portal",
   "windowMonths": [],
   "nextExpected": "check the official GDS portal for the current cycle",
   "frequency": "varies (per cycle)",
   "official": "https://www.indiapost.gov.in/vacancies",
   "tags": [
    "india-post",
    "gds",
    "class-10",
    "no-exam",
    "merit-list"
   ],
   "resources": [],
   "type": "exam",
   "organization": "India Post",
   "organizationFull": "Department of Posts, India Post",
   "officialWebsite": "https://www.indiapost.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Branch Postmaster (BPM)",
    "Assistant Branch Postmaster (ABPM)",
    "Dak Sevak"
   ],
   "description": "India Post's largest direct recruitment — village-level postal staff, selected on class 10 marks with no written examination. Notified circle by circle through the official GDS portal.",
   "officialExamPage": "https://www.indiapost.gov.in/vacancies",
   "status": "not-announced",
   "statusNote": "GDS recruitment is notified in cycles through the official GDS online portal, not on a fixed annual date. Check the portal for the current cycle. Note: Postal Assistant and Sorting Assistant posts were not part of the latest SSC CHSL notice, and India Post has no current standalone notification for them.",
   "notification": null,
   "notificationNote": "GDS notifications are published on the official India Post GDS online portal for each cycle.",
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://www.indiapost.gov.in/vacancies/online-gds"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "India Post vacancies page",
    "sourceUrl": "https://www.indiapost.gov.in/vacancies"
   },
   "eligibility": {
    "education": "Class 10 pass with Mathematics and English as subjects; knowledge of the local language and a basic computer training certificate",
    "age": "18 to 40 years, with relaxations for reserved categories",
    "other": "Cycling knowledge is required. Selection is by a merit list of class 10 marks — there is no examination."
   },
   "fee": "₹100 (women, SC/ST, PwBD and transgender candidates are exempt)",
   "syllabus": {
    "title": "Not applicable — GDS selection has no examination",
    "url": "https://www.indiapost.gov.in/vacancies/online-gds",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "There is no written examination",
     "Selection is on an automatically generated merit list of class 10 marks",
     "Then document verification"
    ],
    "title": "India Post GDS online portal",
    "url": "https://www.indiapost.gov.in/vacancies/online-gds"
   },
   "pastPapers": [],
   "pastPapersNote": "Not applicable — there is no written examination for GDS posts.",
   "pastPapersPage": "https://www.indiapost.gov.in/vacancies",
   "answerKeys": [],
   "answerKeysPage": "https://www.indiapost.gov.in/vacancies",
   "mockTests": []
  },
  {
   "id": "drdo-rac-scientist",
   "name": "DRDO Scientist recruitment (RAC)",
   "category": "gov-job",
   "ageMin": null,
   "ageMax": 45,
   "minEducation": "ug",
   "feeINR": 100,
   "oneLiner": "Scientist posts in DRDO's Defence Research & Development Service — Scientist 'B' through GATE, senior grades through lateral recruitment with experience.",
   "benefit": "Rs 67,700 basic (Level 11) for Scientist 'C', Rs 78,800 (Level 12) for Scientist 'D' and Rs 1,23,100 (Level 13) for Scientist 'E' in Advertisement 157",
   "window": "no fixed window (Advt 157: 30 May–19 Jun 2026)",
   "windowMonths": [],
   "nextExpected": "watch the RAC website; DRDO has no fixed annual date",
   "frequency": "occasional",
   "official": "https://rac.gov.in/",
   "tags": [
    "drdo",
    "scientist",
    "defence-research",
    "gate",
    "lateral-entry"
   ],
   "resources": [],
   "type": "exam",
   "organization": "DRDO",
   "organizationFull": "Defence Research & Development Organisation",
   "officialWebsite": "https://rac.gov.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Scientist 'B' (entry level, through GATE)",
    "Scientist 'C', 'D' and 'E' (lateral entry with experience)"
   ],
   "description": "DRDO recruits scientists into the Defence Research & Development Service through its Recruitment & Assessment Centre (RAC). Entry-level Scientist 'B' recruitment uses GATE scores; senior grades are advertised as lateral recruitment with experience.",
   "officialExamPage": "https://rac.gov.in/",
   "status": "closed",
   "statusNote": "RAC Advertisement No. 157 (Scientist C, D and E lateral recruitment, 33 posts) closed for applications on 19 June 2026. Watch the RAC website for the next advertisement — DRDO does not publish on a fixed annual date.",
   "notification": {
    "title": "RAC Advertisement No. 157 — Scientist E, D and C (lateral recruitment)",
    "date": "2026-05-30",
    "cycle": "Advt 157",
    "current": true,
    "pdfUrl": "https://rac.gov.in/download/advt_157.pdf",
    "embeddable": false
   },
   "extraNotifications": [
    {
     "title": "RAC Advertisement No. 157 — brief advertisement",
     "date": "2026-05-30",
     "url": "https://rac.gov.in/download/advt_157_brief.pdf"
    },
    {
     "title": "RAC Advertisement No. 157 — official FAQ (technical posts)",
     "date": "2026-05-30",
     "url": "https://rac.gov.in/drdo/public/advt_157_faq_technical.pdf?ver=1"
    }
   ],
   "application": {
    "openingDate": "2026-05-30",
    "closingDate": "2026-06-19",
    "url": "https://rac.gov.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "DRDO RAC website",
    "sourceUrl": "https://rac.gov.in/"
   },
   "eligibility": {
    "education": "A first-class engineering degree or postgraduate degree in a relevant subject. Scientist 'B' requires a valid GATE score; senior grades require 3 to 11 years of relevant experience",
    "age": "Up to 35 years for Scientist 'C' and up to 45 years for Scientist 'D' and 'E' in Advertisement 157, reckoned on the closing date",
    "other": "Indian citizen. DRDO also runs separate CEPTAM recruitment for technical and administrative cadres."
   },
   "fee": "₹100 in Advertisement 157, non-refundable and non-transferable, payable online only by General, OBC and EWS male candidates; no fee for SC/ST/Divyang and women candidates",
   "syllabus": {
    "title": "Requirements and selection procedure (inside the advertisement)",
    "url": "https://rac.gov.in/download/advt_157.pdf",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Scientist 'B' (separate advertisements): shortlisting on GATE score, then a personal interview",
     "Advertisement 157 (Scientist C, D and E lateral entry): administrative screening of identity, age, qualifications and length of experience, then biodata-based Technical Screening by an independent committee",
     "If too many clear that stage, a Preliminary Online Interview of 10 to 15 minutes is held, shortlisting up to 24 candidates per post to up to 12 for the final interview",
     "Final Personal Interview must be attended in person at RAC, Delhi — no online option — and final selection is purely on those marks",
     "A candidate must score at least 75 out of 100 in the Final Personal Interview to be considered for selection",
     "There is no written test in Advertisement 157"
    ],
    "title": "Selection procedure (inside the advertisement)",
    "url": "https://rac.gov.in/download/advt_157.pdf"
   },
   "pastPapers": [],
   "pastPapersNote": "DRDO RAC does not publish previous question papers for scientist recruitment.",
   "pastPapersPage": "https://rac.gov.in/",
   "answerKeys": [],
   "answerKeysPage": "https://rac.gov.in/",
   "mockTests": []
  },
  {
   "id": "csir-recruitment",
   "name": "CSIR recruitment (headquarters and laboratories)",
   "category": "gov-job",
   "ageMin": null,
   "ageMax": 28,
   "minEducation": "10th",
   "feeINR": 500,
   "oneLiner": "CSIR has no single national exam — its 37 laboratories and headquarters advertise separately. Live now: 43 Technician posts at CSIR headquarters, open to class 10 with ITI.",
   "benefit": "Rs 19,900–63,200 (Pay Level 2) for the Technician posts open now",
   "window": "rolling — advertisements appear through the year (R&A/01/2026: 18 Aug–17 Sep 2026)",
   "windowMonths": [
    8,
    9
   ],
   "nextExpected": "open now — Technician (1) closes 17 Sep 2026",
   "frequency": "rolling",
   "official": "https://www.csir.res.in/career-opportunities/recruitment",
   "tags": [
    "csir",
    "scientist",
    "laboratories",
    "rolling",
    "technician"
   ],
   "resources": [],
   "type": "exam",
   "organization": "CSIR",
   "organizationFull": "Council of Scientific & Industrial Research",
   "officialWebsite": "https://www.csir.res.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Scientist and Senior Scientist at CSIR laboratories",
    "Technical Officer and Technician",
    "Group II and Group III administrative and technical posts",
    "Project staff and Junior Research Fellows"
   ],
   "description": "CSIR does not run one nationwide annual exam. Its 37 laboratories and its headquarters advertise posts separately, each with its own notification, deadline and selection method. Watch the central recruitment listing for the live advertisements.",
   "officialExamPage": "https://www.csir.res.in/career-opportunities/recruitment",
   "status": "open",
   "statusNote": "CSIR headquarters advertisement R&A/01/2026 is open for 43 Technician (1) posts (Group C, Pay Level 2): applications from 18 August to 17 September 2026 (17:00). CSIR has no single national exam — its 37 laboratories and its headquarters advertise separately, and other live advertisements are listed on the same page with their own deadlines.",
   "notification": {
    "title": "Advertisement R&A/01/2026 — Recruitment to the post of Technician (1), 43 posts at CSIR headquarters",
    "date": null,
    "cycle": "R&A/01/2026",
    "current": true,
    "pdfUrl": "https://www.csir.res.in/sites/default/files/2026-08/gr._ii_advertisement.pdf",
    "embeddable": false,
    "pdf": "https://www.csir.res.in/sites/default/files/2026-08/gr._ii_advertisement.pdf"
   },
   "application": {
    "openingDate": "2026-08-18",
    "closingDate": "2026-09-17",
    "url": "https://recruitment.csir.res.in/"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "CSIR recruitment listing",
    "sourceUrl": "https://www.csir.res.in/career-opportunities/recruitment"
   },
   "eligibility": {
    "education": "For the live advertisement R&A/01/2026 (Technician (1), 43 posts): class 10 / SSC or equivalent with Science subjects and at least 55% marks, plus an ITI certificate or National / State Trade Certificate in the relevant trade (COPA, DTPO, CH&NM, MLT, Draughtsman, Instrument Mechanic, LACP and others) — or, in place of the ITI certificate, 2 years as an apprentice trainee or 3 years of work experience in that trade in a government body",
    "age": "Upper age limit 28 years as on the closing date (17/09/2026) in advertisement R&A/01/2026, with relaxation of 5 years for SC/ST, 3 years for OBC (Non-Creamy Layer) and 10 years for PwBD",
    "other": "CSIR-UGC NET is a separate national test for research fellowships and lectureship, not a CSIR staff recruitment."
   },
   "fee": "₹500, non-refundable, for the headquarters advertisement R&A/01/2026 (Technician) that is open now — women, SC, ST, PwBD and ex-servicemen candidates pay nothing. Every CSIR advertisement sets its own fee and many laboratory and project positions charge none, so check the one you are applying under.",
   "syllabus": {
    "title": "Requirements and selection method (inside each advertisement)",
    "url": "https://www.csir.res.in/career-opportunities/recruitment",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Advertisement R&A/01/2026 (Technician (1)): applications screened by a Screening Committee, then a qualifying Trade Test, then a competitive written examination",
     "Written exam is OMR or computer-based objective MCQ: 150 questions, 2 hours 30 minutes total, standard SSC+ITI / class 12",
     "Paper-I (1 hour): Mental Ability Test, 50 questions, 100 marks, 2 marks per correct answer, NO negative marking",
     "Paper-II (30 minutes): General Awareness 25 questions / 75 marks and English Language 25 questions / 75 marks, 3 marks per correct answer, minus 1 per wrong answer",
     "Paper-III (1 hour): Concerned Subject, 50 questions, 150 marks, 3 marks per correct answer, minus 1 per wrong answer",
     "Paper-II and Paper-III are evaluated only if Paper-I clears the threshold, and the final merit list is prepared from Paper-II and Paper-III marks only",
     "There is no interview for this advertisement"
    ],
    "title": "CSIR recruitment listing",
    "url": "https://www.csir.res.in/career-opportunities/recruitment"
   },
   "pastPapers": [],
   "pastPapersNote": "CSIR does not publish previous question papers for staff recruitment.",
   "pastPapersPage": "https://www.csir.res.in/career-opportunities/recruitment",
   "answerKeys": [],
   "answerKeysPage": "https://www.csir.res.in/career-opportunities/recruitment",
   "mockTests": [],
   "extraNotifications": [
    {
     "title": "Advertisement R&A/01/2026 — Hindi version",
     "date": null,
     "url": "https://www.csir.res.in/sites/default/files/2026-08/gr_ii_advertisement-hindi.pdf"
    }
   ]
  },
  {
   "id": "aiims-norcet",
   "name": "AIIMS NORCET (Nursing Officer Recruitment Common Eligibility Test)",
   "category": "gov-job",
   "ageMin": null,
   "ageMax": 30,
   "minEducation": "ug",
   "feeINR": null,
   "oneLiner": "The common national test for Nursing Officer posts at AIIMS and participating central hospitals, conducted by AIIMS New Delhi.",
   "benefit": "Rs 44,900 starting basic (Level 7) plus allowances",
   "window": "varies by edition — check the official NORCET page",
   "windowMonths": [],
   "nextExpected": "not announced",
   "frequency": "varies (per edition)",
   "official": "https://www.aiimsexams.ac.in/",
   "tags": [
    "aiims",
    "nursing-officer",
    "norcet",
    "healthcare"
   ],
   "resources": [],
   "type": "exam",
   "organization": "AIIMS",
   "organizationFull": "All India Institute of Medical Sciences, New Delhi",
   "officialWebsite": "https://www.aiimsexams.ac.in/",
   "source": "official",
   "verifiedAt": "2026-08-21",
   "typicalJobs": [
    "Nursing Officer at AIIMS New Delhi and other AIIMS",
    "Nursing Officer at central government hospitals participating in NORCET"
   ],
   "description": "The common national test for Nursing Officer posts at AIIMS and participating central hospitals, conducted by AIIMS New Delhi. AIIMS also advertises Group-A non-faculty, faculty and scientist posts separately on the same portal.",
   "officialExamPage": "https://www.aiimsexams.ac.in/landingpage/courses/68dbbb27b7b096817673976e",
   "status": "not-announced",
   "statusNote": "AIIMS publishes each NORCET edition with its own prospectus and dates on the AIIMS examination portal. Check the NORCET page for the current edition — there is no fixed annual date, and AIIMS notice documents are served through time-limited links, so we point you at the official page rather than a file.",
   "notification": null,
   "notificationNote": "AIIMS serves its notice PDFs through expiring links, so we link the official NORCET page instead of a file that would break.",
   "application": {
    "openingDate": null,
    "closingDate": null,
    "url": "https://www.aiimsexams.ac.in/landingpage/courses/advertisement/66ab7926ebb3815a4b707804"
   },
   "examDate": null,
   "expected": {
    "notificationDate": null,
    "closingDate": null,
    "examDate": null,
    "source": "AIIMS examinations portal",
    "sourceUrl": "https://www.aiimsexams.ac.in/landingpage/courses/68dbbb27b7b096817673976e"
   },
   "eligibility": {
    "education": "B.Sc. (Hons) Nursing, B.Sc. Nursing, or a Diploma in General Nursing & Midwifery with the experience stated in the prospectus, plus registration with a State Nursing Council",
    "age": "Up to 30 years in recent editions, with relaxations for reserved categories",
    "other": "Read the prospectus for the current edition — eligibility and stages change between editions."
   },
   "fee": "Set in the prospectus for each edition",
   "syllabus": {
    "title": "Official NORCET prospectus and syllabus (on the NORCET page)",
    "url": "https://www.aiimsexams.ac.in/landingpage/courses/advertisement/66ab7926ebb3815a4b707804",
    "source": "official",
    "verifiedAt": "2026-08-21"
   },
   "examPattern": {
    "summary": [
     "Computer-based preliminary test (objective)",
     "Then a computer-based main test for shortlisted candidates",
     "Then document verification. The exact stages are set in each edition's prospectus."
    ],
    "title": "AIIMS NORCET official page",
    "url": "https://www.aiimsexams.ac.in/landingpage/courses/advertisement/66ab7926ebb3815a4b707804"
   },
   "pastPapers": [],
   "pastPapersNote": "AIIMS does not publish an archive of previous NORCET question papers.",
   "pastPapersPage": "https://www.aiimsexams.ac.in/landingpage/courses/68dbbb27b7b096817673976e",
   "answerKeys": [],
   "answerKeysNote": "AIIMS releases answer keys and objection windows through the candidate login for each edition.",
   "answerKeysPage": "https://www.aiimsexams.ac.in/landingpage/notice",
   "mockTests": []
  }
 ],
 "examsVerifiedAt": "2026-08-21"
};
