// Data for subcategories and their respective quizzes
const subcategoryData = {
  anatomy: ["Set-1", "Set-2", "Geometry", "Trigonometry"],
  science: ["Physics", "Chemistry", "Biology"],
  history: ["Ancient", "Medieval", "Modern"],
  geography: ["Continents", "Countries", "Cities"],
  sports: ["Football", "Tennis", "Cricket"],
  art: ["Renaissance", "Modern", "Baroque"],
};

// Function to load subcategories dynamically based on the selected category
function loadSubcategories() {
  const category = document.getElementById("category").value;
  const subcategorySelect = document.getElementById("subcategory");
  const subcategorySection = document.getElementById("subcategory-section");

  // Clear previous subcategory options
  subcategorySelect.innerHTML = "";

  if (category && subcategoryData[category]) {
    subcategoryData[category].forEach((subcat) => {
      const option = document.createElement("option");
      option.value = subcat;
      option.innerText = subcat;
      subcategorySelect.appendChild(option);
    });
    subcategorySection.classList.remove("hidden"); // Show the subcategory dropdown
  } else {
    subcategorySection.classList.add("hidden"); // Hide subcategory dropdown if no category is selected
  }
}

// Function to start the quiz by navigating to a new page with URL parameters for category and subcategory
function startQuiz() {
  const category = document.getElementById("category").value;
  const subcategory = document.getElementById("subcategory").value;

  if (category && subcategory) {
    // Redirect to quiz page with category and subcategory as URL parameters
    window.location.href = `quiz.html?category=${category}&subcategory=${subcategory}`;
  } else {
    alert("Please select both a category and subcategory to start the quiz.");
  }
}

// Data for quiz questions organized by category and subcategory
const quizData = {
  anatomy: {
    "Set-1": [
      {
        question:
          "A patient underwent extraction of 3rd molar tooth and after this the patient was observed to have a loss of sensation from the anterior 2/3rd of the tongue and floor of the mouth. Which nerve is most likely to be damaged?",
        options: [
          "Hypoglossal nerve",
          "Lingual nerve",
          "Accessory nerve",
          "Inferior alveolar nerve",
        ],
        answer: 1,
      },
      {
        question:
          "A person had a road traffic accident and suffered from injury to the membranous urethra. Which will be the location of collection of urine due to this injury?",
        options: [
          "Superficial perineal pouch",
          "Peritoneal cavity",
          "Anterior abdominal wall",
          "Ischiorectal fossa",
        ],
        answer: 0,
      },
      {
        question:
          "A needle has to be inserted by an intern for thoracentesis. Which is the most preferred site for this clinical procedure?",
        options: [
          "Lower border of the upper rib",
          "Upper border of the lower rib",
          "Middle of the intercostal space",
          "Lower border of the lower rib",
        ],
        answer: 1,
      },
      {
        question:
          "What is the vertebral level for the red-colored line shown in the image?<br><img src='images/4.jpeg' alt='Vertebral Level Image' />",
        options: ["L2-L3", "L3-L4", "L4-L5", "L5-S1"],
        answer: 2,
      },
      {
        question:
          "A maid in the house complained of pain and swelling at the knee. Which bursa can be involved in this condition?<br><img src='images/5.jpeg' alt='Vertebral Level Image' />",
        options: ["A", "B", "C", "D"],
        answer: 0,
      },
      {
        question:
          "Which congenital deformity is shown in the image?<br><img src='images/6.jpeg' alt='Vertebral Level Image' />",
        options: [
          "Anencephaly",
          "Craniorachischisis",
          "Meningomyelocele",
          "Spina bifida occulta",
        ],
        answer: 2,
      },
      {
        question:
          "Post-delivery a female is complaining of pain in the anterolateral aspect of the thigh. Which nerve is most likely to be damaged?",
        options: [
          "Femoral nerve",
          "Lateral femoral cutaneous nerve",
          "Obturator nerve",
          "Tibial nerve",
        ],
        answer: 1,
      },
      {
        question:
          "Which of the following conditions is shown in the image?<br><img src='images/1.jpeg' alt='Condition Image' />",
        options: [
          "Biceps muscle rupture",
          "Humerus shaft fracture",
          "Radial nerve injury",
          "Triceps muscle injury",
        ],
        answer: 2,
      },
      {
        question:
          "A patient complains of pain and swelling below the ear. He cannot close his left eye completely and is having difficulty in eating food. Which nerve is most likely to be damaged?",
        options: [
          "Greater auricular nerve",
          "Auriculotemporal nerve",
          "Facial nerve",
          "Inferior alveolar nerve",
        ],
        answer: 2,
      },
      {
        question:
          "A patient is suffering from aortic dissection. Injury to which marked structure in the image will cause hiccups?<br><img src='images/2.jpeg' alt='Aortic Dissection Image' />",
        options: ["A", "B", "C", "D"],
        answer: 0,
      },
      {
        question:
          "Which underlying cause is responsible for the congenital deformity shown in the image?<br><img src='images/3.jpeg' alt='Congenital Deformity Image' />",
        options: [
          "Morulation",
          "Neurulation",
          "Lateral rotation",
          "Gastrulation",
        ],
        answer: 1,
      },
      {
        question:
          "At which time does the talus bone get ossified in the intrauterine life?",
        options: ["3 months", "6 months", "7 months", "9 months"],
        answer: 2,
      },
      {
        question: "Identify the arrow-marked structure in the given image.",
        options: [
          "External capsule",
          "Internal capsule",
          "Claustrum",
          "Globus pallidus",
        ],
        answer: 1,
      },
      {
        question:
          "Which embryological basis is correct about the malformation shown in the image?",
        options: [
          "Abnormal fusion of the maxillary and medial nasal processes",
          "Abnormal fusion of the maxillary and lateral nasal processes",
          "Abnormal fusion of the medial nasal and lateral nasal processes",
          "Abnormal fusion of the mandibular and lateral nasal processes",
        ],
        answer: 0,
      },
      {
        question:
          "In the given image which landmark carries splenic vessels?<br><img src='images/6.jpeg' alt='Splenic Vessels Image' />",
        options: ["A", "B", "C", "D"],
        answer: 2,
      },
      {
        question:
          "If the fracture occurs at an arrow-marked location, then which nerve is most likely to be involved?<br><img src='images/7.jpeg' alt='Fracture Image' />",
        options: [
          "Ulnar nerve",
          "Median nerve",
          "Radial nerve",
          "Musculocutaneous nerve",
        ],
        answer: 2,
      },
      {
        question:
          "Which structure passes through the arrow-marked area?<br><img src='images/8.jpeg' alt='Structure Image' />",
        options: [
          "Inferior vena cava",
          "Thoracic duct",
          "Sympathetic trunk",
          "Esophagus",
        ],
        answer: 1,
      },
      {
        question:
          "If the paracentral lobule of the brain is involved, then which region of the body will be affected?",
        options: [
          "Brain and neck",
          "Trunk and leg",
          "Trunk and arm",
          "Perineum and leg",
        ],
        answer: 3,
      },
      {
        question:
          "During the examination, when a patient was asked to stand on the left foot, a drop of the right hip/side was observed. Which muscles are paralyzed in this case?",
        options: [
          "Right gluteus medius and gluteus minimus",
          "Left gluteus medius and gluteus minimus",
          "Right gluteus maximus",
          "Left gluteus maximus",
        ],
        answer: 1,
      },
      {
        question:
          "At the level of the elbow, fracture is observed as seen in the image. Due to this, the forearm is pulseless. Which of the following structures is most likely injured?<br><img src='images/9.jpeg' alt='Elbow Fracture Image' />",
        options: [
          "Brachial artery",
          "Radial artery",
          "Ulnar artery",
          "Anterior interosseous artery",
        ],
        answer: 0,
      },
      {
        question:
          "A cyst is observed at the anterior border of the sternocleidomastoid in a 25-year-old man. This cyst is due to persistence of which of the following cleft?",
        options: ["1st", "2nd", "3rd", "4th"],
        answer: 1,
      },
      {
        question:
          "Identify the type of epithelium shown in the image.<br><img src='images/10.jpeg' alt='Epithelium Image' />",
        options: [
          "Transitional epithelium",
          "Keratinized stratified squamous epithelium",
          "Nonkeratinized stratified squamous epithelium",
          "Ciliated pseudostratified columnar epithelium",
        ],
        answer: 0,
      },
      {
        question:
          "The section along the frontal plane (as shown in diagram) is called:<br><img src='images/11.jpeg' alt='Frontal Plane Image' />",
        options: ["Sagittal", "Coronal", "Transverse", "Median"],
        answer: 1,
      },
      {
        question:
          "Identify the arrow marked follicle.<br><img src='images/12.jpeg' alt='Follicle Image' />",
        options: ["Primordial", "Primary", "Preantral", "Antral"],
        answer: 3,
      },
      {
        question: "Fallopian tube epithelium is:",
        options: [
          "Simple squamous",
          "Ciliated cuboidal",
          "Ciliated columnar",
          "Pseudostratified columnar",
        ],
        answer: 2,
      },
      {
        question:
          "The marked cell in the HPE image of thyroid follicles secrete which hormone?<br><img src='images/13.jpeg' alt='Thyroid Follicles Image' />",
        options: ["Thyroxine", "Calcitonin", "Adrenaline", "Prolactin"],
        answer: 0,
      },
      {
        question:
          "What is the embryological basis of the following congenital anomaly?<br><img src='images/14.jpeg' alt='Congenital Anomaly Image' />",
        options: [
          "Nonclosure of anterior neuropore",
          "Nonclosure of posterior neuropore",
          "Nonclosure of entire neural tube",
          "Nonclosure of skull bones",
        ],
        answer: 1,
      },
      {
        question:
          "Identify the encircled structure:<br><img src='images/28.jpeg' alt='Encircled Structure' />",
        options: ["Pterion", "Glabella", "Asterion", "Nasion"],
        answer: 0,
      },
      {
        question:
          "Ductus arteriosus develops from which pharyngeal arch artery?",
        options: ["3", "4", "5", "6"],
        answer: 1,
      },
      {
        question: "Structure developing in dorsal mesogastrium:",
        options: ["Lesser omentum", "Falcriform ligament", "Spleen", "Liver"],
        answer: 2,
      },
      {
        question:
          "Skin receptor responsible for detecting rapid vibration sense.",
        options: [
          "Meissner corpuscle",
          "Pacinian corpuscle",
          "Merkel cell",
          "Ruffini's corpuscle",
        ],
        answer: 1,
      },
      {
        question:
          "Failure of closure of rostral neuropore at 25th day leads to:",
        options: [
          "Craniorachischisis",
          "Spina bifida",
          "Anencephaly",
          "Hydranencephaly",
        ],
        answer: 2,
      },
      {
        question: "Fetal midgut rotates in intrauterine life by:",
        options: [
          "270 degree clockwise",
          "360 degree clockwise",
          "270 degree anticlockwise",
          "360 degree anticlockwise",
        ],
        answer: 0,
      },
      {
        question: "Rotation of mid gut loop occurs around:",
        options: [
          "Superior mesenteric artery",
          "Inferior mesenteric artery",
          "Middle-colic artery",
          "Superior rectal artery",
        ],
        answer: 0,
      },
      {
        question: "Neural crest cell migration is due to:",
        options: [
          "Heparin",
          "Heparan sulfate",
          "Dermal sulfate",
          "None of the above",
        ],
        answer: 1,
      },
      {
        question:
          "Which of the following is the derivative of ultimobranchial body?",
        options: [
          "Thyroid",
          "Parafollicular (C) cells",
          "Capsule of thyroid",
          "2nd branchial pouch",
        ],
        answer: 1,
      },
      {
        question:
          "Which of the following is the derivative of tumor from Rathke's pouch?",
        options: [
          "Meningioma",
          "Craniopharyngioma",
          "Ependymoma",
          "Low grade glioma",
        ],
        answer: 1,
      },
      {
        question: "Hardest bone of the body is:",
        options: [
          "Head of humerus",
          "Calcaneum",
          "Tibial condyle",
          "Osseous labyrinth",
        ],
        answer: 3,
      },
      {
        question:
          "Which of the following structure is derived from umbilical artery?",
        options: [
          "Ligamentum arteriosum",
          "Medial umbilical ligament",
          "Ligamentum venosum",
          "Ligamentum teres",
        ],
        answer: 1,
      },
      {
        question: "Labia majora is homologous to ____ in a male.",
        options: [
          "Glans penis",
          "Scrotum",
          "Corpus cavernosa",
          "Shaft of penis",
        ],
        answer: 1,
      },
      {
        question: "Morula cell stage has how many cells?",
        options: ["8", "16", "32", ">64"],
        answer: 1,
      },
      {
        question: "Umbilical cord has:",
        options: [
          "One artery, two veins and umbilical artery going to fetus",
          "One artery, two veins and umbilical artery going to placenta",
          "Two arteries and one vein, umbilical artery supplying towards fetus",
          "Two arteries and one vein, umbilical vein supplying towards fetus",
        ],
        answer: 3,
      },
      {
        question:
          "In the Umbilical cord which of the following structure does not get obliterated during fetal life?",
        options: [
          "Vitelline duct",
          "Vitelline vessels",
          "Allantois",
          "Umbilical vessels",
        ],
        answer: 2,
      },
      {
        question: "What is correct about embryogenesis?",
        options: [
          "Branchial cleft: Mesoderm",
          "Branchial arch: Ectoderm",
          "Branchial pouch: Endoderm",
          "All are correct",
        ],
        answer: 2,
      },
      {
        question: "Superior vena cava is derived from:",
        options: [
          "Aortic arch",
          "Pharyngeal arch",
          "Cardinal vein",
          "Vitelline vein",
        ],
        answer: 2,
      },
      {
        question: "Arch of aorta is derived from:",
        options: [
          "2nd Aortic arch",
          "3rd Aortic arch",
          "3rd pharyngeal arch",
          "4th pharyngeal arch",
        ],
        answer: 3,
      },
      {
        question: "Common carotid artery is derived from:",
        options: [
          "2nd aortic arch",
          "3rd pharyngeal arch",
          "4th pharyngeal arch",
          "6th pharyngeal arch",
        ],
        answer: 1,
      },
      {
        question: "Stylohyoid ligament is derived from:",
        options: [
          "1st branchial arch",
          "2nd branchial arch",
          "1st branchial pouch",
          "2nd branchial pouch",
        ],
        answer: 1,
      },
      {
        question:
          "Sphenomandibular ligament is derived from which branchial arch?",
        options: ["1", "2", "3", "4"],
        answer: 1,
      },
      {
        question:
          "Which of the following is a derivative of the 2nd branchial arch?",
        options: [
          "Stylohyoid ligament",
          "Sphenomandibular ligament",
          "Spine of sphenoid",
          "Greater cornu of hyoid",
        ],
        answer: 0,
      },
    ],

    //set-2 starts here --

    "Set-2": [
      {
        question: "Lesser cornu of hyoid bone is derived from which arch?",
        options: [
          "1st mandibular arch",
          "2nd branchial arch",
          "3rd branchial arch",
          "4th branchial arch",
        ],
        answer: 1, // Correct answer: 2nd branchial arch
      },
      {
        question:
          "Superior portion of hyoid bone is derived from which branchial arch?",
        options: ["1", "II", "III", "IV"],
        answer: 1, // Correct answer: II
      },
      {
        question:
          "All of the following muscles are derived from the 6th branchial arch, EXCEPT:",
        options: [
          "Lateral cricoarytenoid",
          "Posterior cricoarytenoid",
          "Interarytenoid",
          "Cricothyroid",
        ],
        answer: 3, // Correct answer: Cricothyroid
      },
      {
        question:
          "Which of the following does not develop from branchial pouch?",
        options: [
          "Superior parathyroid",
          "Inferior parathyroid",
          "Thymus",
          "Thyroid",
        ],
        answer: 3, // Correct answer: Thyroid
      },
      {
        question: "The auricle develops from:",
        options: [
          "1st branchial cleft",
          "1st branchial arch",
          "1st and 3rd branchial arch",
          "1st and 2nd branchial arch",
        ],
        answer: 3, // Correct answer: 1st and 2nd branchial arch
      },
      {
        question: "Inferior parathyroid gland develops from:",
        options: [
          "Branchial arch 3rd",
          "Branchial arch 4th",
          "Branchial pouch 3rd",
          "Branchial pouch 4th",
        ],
        answer: 2, // Correct answer: Branchial pouch 3rd
      },
      {
        question: "Tonsil is derived from:",
        options: ["1st pouch", "2nd pouch", "3rd pouch", "4th pouch"],
        answer: 1, // Correct answer: 2nd pouch
      },
      {
        question:
          "Which of the following is not derived from 1st pharyngeal pouch?",
        options: [
          "Middle ear",
          "Eustachian tube",
          "Tympanic membrane",
          "Palatine tonsils",
        ],
        answer: 3, // Correct answer: Palatine tonsils
      },
      {
        question: "External auditory canal is formed from:",
        options: [
          "Ventral part of 1st cleft",
          "Dorsal part of 1st cleft",
          "Ventral part of 2nd cleft",
          "Dorsal part of 2nd cleft",
        ],
        answer: 1, // Correct answer: Dorsal part of 1st cleft
      },
      {
        question: "Lower 1/3 of vagina is formed by:",
        options: [
          "Mesonephric duct",
          "Paramesonephric duct",
          "Sinovaginal bulb",
          "Mesoderm of mullerian duct",
        ],
        answer: 2, // Correct answer: Sinovaginal bulb
      },
      {
        question: "Hypoblast forms:",
        options: [
          "Notochord",
          "Apical ligament of atlas",
          "Endoderm",
          "Prochordal plate",
        ],
        answer: 2, // Correct answer: Endoderm
      },
      {
        question: "First organ to attain functional maturity is:",
        options: ["CVS", "CNS", "GIT", "Lungs"],
        answer: 0, // Correct answer: CVS
      },
      {
        question: "Gastrulation occurs in which week of embryonic development?",
        options: ["Week 1", "Week 2", "Week 3", "Week 4"],
        answer: 2, // Correct answer: Week 3
      },
      {
        question: "First germ layer to be formed is:",
        options: [
          "Ectoderm",
          "Endoderm",
          "Mesoderm",
          "All of them develop simultaneously",
        ],
        answer: 1, // Correct answer: Endoderm
      },
      {
        question: "Notochord is formed by:",
        options: ["Nucleus pulposus", "Epiblast", "Hypoblast", "Myeloblast"],
        answer: 1, // Correct answer: Epiblast
      },
      {
        question: "Homeobox gene is responsible for:",
        options: [
          "Segmental organization of embryo in cranio-caudal direction",
          "Proper organization along dorsal-ventral axis",
          "Stimulation for lengthening of limbs",
          "All of the above",
        ],
        answer: 0, // Correct answer: Segmental organization of embryo in cranio-caudal direction
      },
      {
        question: "Chromaffin cells are derived from:",
        options: ["Neural crest", "Ectoderm", "Neuroectoderm", "Endoderm"],
        answer: 0, // Correct answer: Neural crest
      },
      {
        question: "Proximal umbilical artery forms:",
        options: [
          "Superior vesical artery",
          "Median umbilical fold",
          "Lateral umbilical fold",
          "Ligamentum teres",
        ],
        answer: 0, // Correct answer: Superior vesical artery
      },
      {
        question: "Ligamentum teres is a remnant of:",
        options: [
          "Ductus venosus",
          "Ductus arteriosus",
          "Hypogastric artery",
          "Umbilical vein",
        ],
        answer: 3, // Correct answer: Umbilical vein
      },
      {
        question: "Remnant of ductus venosus will be:",
        options: [
          "Ligamentum teres",
          "Ligamentum venosum",
          "Ligamentum arteriosum",
          "Falciform ligament",
        ],
        answer: 1, // Correct answer: Ligamentum venosum
      },
      {
        question: "Left horn of sinus venosus forms:",
        options: [
          "Coronary sinus",
          "Smooth part of right atrium",
          "Superior vena cava",
          "Inferior vena cava",
        ],
        answer: 0, // Correct answer: Coronary sinus
      },
      {
        question: "Stapedial artery is derived from which aortic arch?",
        options: ["1", "2", "3", "4"],
        answer: 1, // Correct answer: 2
      },
      {
        question: "Fossa ovalis is a remnant of:",
        options: ["Septum primum", "Septum secundum", "Bulbus cordis", "Conus"],
        answer: 1, // Correct answer: Septum secundum
      },
      {
        question: "In a fetus, testis lies at superficial inguinal ring at:",
        options: ["6th month", "7th month", "8th month", "9th month"],
        answer: 1, // Correct answer: 7th month
      },
      {
        question: "Pons is derived from:",
        options: [
          "Metencephalon",
          "Myelencephalon",
          "Mesencephalon",
          "Prosencephalon",
        ],
        answer: 0, // Correct answer: Metencephalon
      },
      {
        question: "Glomerulus is derived from:",
        options: [
          "Metanephros",
          "Mesonephros",
          "Ureteric bud",
          "Urogenital sinus",
        ],
        answer: 0, // Correct answer: Metanephros
      },
      {
        question: "Prostate gland is derived from:",
        options: [
          "Urogenital sinus",
          "Urogenital folds",
          "Labioscrotal swelling",
          "Gubernaculum",
        ],
        answer: 0, // Correct answer: Urogenital sinus
      },
      {
        question: "Collecting duct is derived from:",
        options: ["Ureteric bud", "Mesonephros", "Metanephros", "Allantois"],
        answer: 0, // Correct answer: Ureteric bud
      },
      {
        question: "Synovial fluid is produced by:",
        options: [
          "Type A synoviocytes",
          "Type B synoviocytes",
          "Type C synoviocytes",
          "Type D synoviocytes",
        ],
        answer: 1, // Correct answer: Type B synoviocytes
      },
      {
        question: "Blue cartilage is:",
        options: ["Hyaline", "Elastic", "Fibrocartilage", "Synchondrosis"],
        answer: 2, // Correct answer: Fibrocartilage
      },
      {
        question: "Tyson's glands are:",
        options: [
          "Apocrine glands",
          "Holocrine gland",
          "Eccrine gland",
          "Endocrine gland",
        ],
        answer: 1, // Correct answer: Holocrine gland
      },
      {
        question: "Fecal fistula at the umbilicus is due to:",
        options: [
          "Persistent urachus",
          "Persistent vitellointestinal duct",
          "Raspberry tumor",
          "Sister Joseph nodules",
        ],
        answer: 1, // Correct answer: Persistent vitellointestinal duct
      },
      {
        question: "Ribs develop from:",
        options: [
          "Endothoracic fascia",
          "Para-axial mesenchyme",
          "Deep intercostal fascia",
          "Superficial intercostal fascia",
        ],
        answer: 1, // Correct answer: Para-axial mesenchyme
      },
      {
        question: "Pituitary develops from:",
        options: [
          "Posterior neural ridge",
          "Rathke pouch",
          "Neural crest",
          "Neural plate",
        ],
        answer: 1, // Correct answer: Rathke pouch
      },
      {
        question: "What is true about spermatogenesis?",
        options: [
          "It takes 74 days",
          "Takes place in spermatic cord",
          "Meiosis occurs only after secondary spermatocyte",
          "Spermatid is from spermatozoa",
        ],
        answer: 0, // Correct answer: It takes 74 days
      },
      {
        question: "Which of the following has the largest size?",
        options: [
          "Spermatogonium",
          "Primary spermatocyte",
          "Secondary spermatocyte",
          "Spermatozoa",
        ],
        answer: 1, // Correct answer: Primary spermatocyte
      },
      {
        question:
          "Spermatogonium to spermatozoon transformation takes place in:",
        options: ["64 days", "74 days", "84 days", "94 days"],
        answer: 1, // Correct answer: 74 days
      },
      {
        question: "Sperm acquires motility in:",
        options: [
          "Seminiferous tubule",
          "Fallopian tube",
          "Epididymis",
          "Spermatic cord",
        ],
        answer: 2, // Correct answer: Epididymis
      },
      {
        question:
          "All the following statements about seminal vesicles are true; EXCEPT:",
        options: [
          "Stores the spermatozoa",
          "Actively depends on the level of testosterone",
          "Secretion has abundant fructose",
          "Lined by pseudostratified columnar epithelium",
        ],
        answer: 0, // Correct answer: Stores the spermatozoa
      },
      {
        question:
          "At what stage of embryonic development does an embryo normally begin to implant in the endometrium?",
        options: [
          "Blastocyst",
          "Four-cell stage",
          "Morula",
          "Trilaminar embryo",
        ],
        answer: 0, // Correct answer: Blastocyst
      },
      {
        question: "Embryo term is used till:",
        options: [
          "12 weeks after LMP",
          "10 weeks after fertilization",
          "10 weeks after LMP",
          "8 weeks of fertilization",
        ],
        answer: 1, // Correct answer: 10 weeks after fertilization
      },
      {
        question: "Fetal stage is termed:",
        options: [
          "From the day of implantation",
          "From 6th week of gestation",
          "From 8th week of gestation",
          "From 10th week of gestation",
        ],
        answer: 2, // Correct answer: From 8th week of gestation
      },
      {
        question: "Which is not a derivative of midgut?",
        options: ["Appendix", "Jejunum", "Ascending colon", "Descending colon"],
        answer: 3, // Correct answer: Descending colon
      },
      {
        question: "Which of the following artery mainly supplies hind gut?",
        options: [
          "Celiac trunk",
          "Superior mesenteric artery",
          "Inferior mesenteric artery",
          "Rectal artery",
        ],
        answer: 2, // Correct answer: Inferior mesenteric artery
      },
      {
        question: "Adrenal medulla is derived from:",
        options: ["Ectoderm", "Endoderm", "Mesoderm", "Neural crest"],
        answer: 3, // Correct answer: Neural crest
      },
      {
        question: "Germ cells develop from:",
        options: [
          "Yolk sac",
          "Surface ectoderm",
          "Coelomic endoderm",
          "Trophoblastic layer",
        ],
        answer: 0, // Correct answer: Yolk sac
      },
      {
        question: "How many ossification centers are there for the hyoid bone?",
        options: ["5", "6", "7", "8"],
        answer: 1, // Correct answer: 6
      },
      {
        question: "Trigone of urinary bladder develops from:",
        options: ["Endoderm", "Ectoderm", "Mesoderm", "None of the above"],
        answer: 2, // Correct answer: Mesoderm
      },
      {
        question: "What are the vessels in umbilical cord?",
        options: [
          "1 artery, 2 veins",
          "2 arteries, 1 vein",
          "1 artery, 1 vein",
          "2 arteries, 2 veins",
        ],
        answer: 1, // Correct answer: 2 arteries, 1 vein
      },
      {
        question: "Testosterone in male is secreted from:",
        options: [
          "Leydig cell",
          "Sertoli cell",
          "Seminal vesicle",
          "Epididymis",
        ],
        answer: 0, // Correct answer: Leydig cell
      },
    ],

    //set3 starts here --

    "Set-3": [
      {
        question: "Gallbladder is lined by:",
        options: [
          "Ciliated columnar cells",
          "Brush bordered columnar epithelium",
          "Striated columnar epithelium",
          "Pseudostratified columnar cells",
        ],
        answer: 1, // Correct answer: Brush bordered columnar epithelium
      },
      {
        question: "Hassall's corpuscles are found in:",
        options: ["Liver", "Spleen", "Kidney", "Thymus"],
        answer: 3, // Correct answer: Thymus
      },
      {
        question: "Malphigian corpuscles are seen in:",
        options: ["Thyroid", "Kidney", "Neurons", "Liver"],
        answer: 1, // Correct answer: Kidney
      },
      {
        question: "Cord of Billroth is seen in:",
        options: ["Liver", "Spleen", "Kidney", "Thymus"],
        answer: 1, // Correct answer: Spleen
      },
      {
        question: "T cells are derived from:",
        options: ["Tonsils", "Spleen", "Thalamus", "Thymus"],
        answer: 3, // Correct answer: Thymus
      },
      {
        question: "Name the type of joint present at the arrow marked region:",
        options: ["Synchondrosis", "Syndesmosis", "Symphysis", "Synostosis"],
        answer: 1, // Correct answer: Syndesmosis
      },
      {
        question:
          "A patient presents to the emergency room with pain and swelling in the right shoulder. A fracture of the clavicle is suspected. The most common site of fracture is:",
        options: [
          "Junction of medial 1/3 and lateral 2/3",
          "Junction of medial 2/3 and lateral 1/3",
          "Medial 1/3",
          "Lateral 1/3",
        ],
        answer: 1, // Correct answer: Junction of medial 2/3 and lateral 1/3
      },
      {
        question:
          "In case of frozen shoulder, the marked muscle is involved. Identify which movement has been compromised at the joint:",
        options: ["Abduction", "Adduction", "Flexion", "Extension"],
        answer: 0, // Correct answer: Abduction
      },
      {
        question: "Identify the arrow marked tendon:",
        options: [
          "Abductor pollicis longus",
          "Abductor pollicis brevis",
          "Extensor pollicis longus",
          "Extensor pollicis brevis",
        ],
        answer: 2, // Correct answer: Extensor pollicis longus
      },
      {
        question:
          "Biceps brachii functions as which type of muscle for lifting forearm?",
        options: ["Prime mover", "Fixator", "Antagonist", "Synergist"],
        answer: 0, // Correct answer: Prime mover
      },
      {
        question:
          "A known case of leprosy has presented with the following deformity. The nerve compromised is:",
        options: ["Ulnar", "Median", "Ulnar and median", "Radial"],
        answer: 0, // Correct answer: Ulnar
      },
      {
        question: "The tendon marked 'X' in the given image is:",
        options: [
          "Flexor digitorum superficialis",
          "Flexor digitorum profundus",
          "Flexor carpi radialis",
          "Flexor carpi ulnaris",
        ],
        answer: 1, // Correct answer: Flexor digitorum profundus
      },
      {
        question:
          "A young computer operator presents with tingling sensation and paresthesia on the medial side of the hand. Which structure is most likely affected?",
        options: ["A", "B", "C", "D"],
        answer: 0, // Correct answer: A
      },
      {
        question: "The highlighted muscle is supplied by which nerve?",
        options: [
          "Axillary nerve",
          "Ulnar nerve",
          "Median nerve",
          "Musculocutaneous nerve",
        ],
        answer: 0, // Correct answer: Axillary nerve
      },
      {
        question: "Nerve involved in injury to the marked structure:",
        options: [
          "Axillary nerve",
          "Ulnar nerve",
          "Median nerve",
          "Radial nerve",
        ],
        answer: 0, // Correct answer: Axillary nerve
      },
      {
        question:
          "Which of the following nerves get compromised in a lesion at the arrow marked area?",
        options: [
          "Axillary nerve",
          "Radial nerve",
          "Median nerve",
          "Ulnar nerve",
        ],
        answer: 1, // Correct answer: Radial nerve
      },
      {
        question:
          "An injury to the shown area can lead to fracture of which bone?",
        options: ["Scaphoid", "Lunate", "Trapezium", "Hamate"],
        answer: 0, // Correct answer: Scaphoid
      },
      {
        question:
          "Which muscle originates from the medial epicondyle of the humerus?",
        options: [
          "Supinator",
          "Pronator teres",
          "Pronator quadratus",
          "Brachioradialis",
        ],
        answer: 1, // Correct answer: Pronator teres
      },
      {
        question:
          "A patient presents with hypothenar muscle wasting and loss of sensation of medial one and a half digits. Which nerve is involved?",
        options: [
          "Ulnar nerve",
          "Median nerve",
          "Radial nerve",
          "Musculocutaneous nerve",
        ],
        answer: 0, // Correct answer: Ulnar nerve
      },
      {
        question: "Identify the muscle marked in the diagram.",
        options: [
          "Teres major",
          "Teres minor",
          "Infraspinatus",
          "Supraspinatus",
        ],
        answer: 1, // Correct answer: Teres minor
      },
      {
        question: "Inferior scapular angle is at which level?",
        options: ["T4", "T6", "T8", "T2"],
        answer: 1, // Correct answer: T6
      },
      {
        question:
          "Flexion, adduction, and medial rotation of the arm is done by which muscle?",
        options: [
          "Pectoralis minor",
          "Pectoralis major",
          "Subclavius",
          "Serratus anterior",
        ],
        answer: 1, // Correct answer: Pectoralis major
      },
      {
        question: "Upper lateral cutaneous nerve of the arm is a branch of:",
        options: [
          "Radial nerve",
          "Ulnar nerve",
          "Axillary nerve",
          "Musculocutaneous nerve",
        ],
        answer: 2, // Correct answer: Axillary nerve
      },
      {
        question: "Identify the marked bone:",
        options: ["Capitulum", "Olecranon", "Trochlea", "Radial head"],
        answer: 1, // Correct answer: Olecranon
      },
      {
        question: "Retraction of the scapula is by:",
        options: [
          "Serratus anterior",
          "Trapezius",
          "Suprascapularis",
          "Deltoid muscle",
        ],
        answer: 1, // Correct answer: Trapezius
      },
      {
        question:
          "In a patient with a fracture of the upper radius and ulna, insertion of pronator teres muscle, which movement is restricted?",
        options: [
          "Pronation",
          "Supination",
          "Hyperpronation",
          "Hyperabduction",
        ],
        answer: 0, // Correct answer: Pronation
      },
      {
        question:
          "Which of the following is the insertion of the shown muscle?",
        options: [
          "Radial tuberosity",
          "Olecranon process",
          "Radial head",
          "Medial malleolus",
        ],
        answer: 0, // Correct answer: Radial tuberosity
      },
      {
        question: "Coracoid process of the scapula is:",
        options: [
          "Pressure epiphysis",
          "Traction epiphysis",
          "Atavistic epiphysis",
          "Aberrant epiphysis",
        ],
        answer: 1, // Correct answer: Traction epiphysis
      },
      {
        question:
          "Which of the following is not a component of the carpal tunnel?",
        options: [
          "Ulnar nerve",
          "Median nerve",
          "Flexor digitorum superficialis",
          "Flexor digitorum profundus",
        ],
        answer: 0, // Correct answer: Ulnar nerve
      },
      {
        question: "Which structure passes through Guyon's canal?",
        options: [
          "Ulnar nerve",
          "Median nerve",
          "Radial nerve",
          "Flexor carpi radialis",
        ],
        answer: 0, // Correct answer: Ulnar nerve
      },
      {
        question: "Which is the nerve root of the biceps jerk?",
        options: ["C5-C6", "C6-C8", "C7-C8", "C8-T1"],
        answer: 0, // Correct answer: C5-C6
      },
      {
        question: "Angle of humeral torsion is — degrees:",
        options: ["15", "35", "135", "164"],
        answer: 2, // Correct answer: 135
      },
      {
        question: "Which carpal bone has a hook?",
        options: ["Capitate", "Lunate", "Hamate", "Pisiform"],
        answer: 2, // Correct answer: Hamate
      },
      {
        question: "Which is the 1st carpal bone to ossify?",
        options: ["Capitate", "Lunate", "Hamate", "Pisiform"],
        answer: 0, // Correct answer: Capitate
      },
      {
        question: "Which is not a part of the proximal row of carpal bones?",
        options: ["Scaphoid", "Lunate", "Triquetral", "Hamate"],
        answer: 3, // Correct answer: Hamate
      },
      {
        question: "Which is the most commonly fractured carpal bone?",
        options: ["Hamate", "Lunate", "Scaphoid", "Capitate"],
        answer: 2, // Correct answer: Scaphoid
      },
      {
        question: "Articulation of pisiform bone is with:",
        options: ["Triquetrum", "Lunate", "Scaphoid", "Trapezoid"],
        answer: 0, // Correct answer: Triquetrum
      },
      {
        question: "Middle trunk of the brachial plexus is formed of:",
        options: ["C6, C7", "C7, C8", "C8, T1", "C7"],
        answer: 3, // Correct answer: C7
      },
      {
        question: "Regimental band anesthesia is due to lesion of:",
        options: [
          "Musculocutaneous nerve",
          "Axillary nerve",
          "Long thoracic nerve",
          "Spinal accessory nerve",
        ],
        answer: 1, // Correct answer: Axillary nerve
      },
      {
        question: "Screwing movement in the upper limb is possible with:",
        options: ["Brachioradialis", "Anconeus", "Supinator", "Pronator teres"],
        answer: 2, // Correct answer: Supinator
      },
      {
        question: "Radial artery ends as:",
        options: [
          "Superficial palmar arch",
          "Deep palmar arch",
          "Both of the above",
          "Profunda brachii artery",
        ],
        answer: 1, // Correct answer: Deep palmar arch
      },
      {
        question: "The largest bursa in the body is:",
        options: [
          "Prepatellar bursa",
          "Subacromial bursa",
          "Infrapatellar bursa",
          "Trochanteric bursa",
        ],
        answer: 3, // Correct answer: Trochanteric bursa
      },
      {
        question: "Which is the nerve passing through the medial epicondyle?",
        options: ["Ulnar", "Radial", "Median", "Posterior interosseous"],
        answer: 0, // Correct answer: Ulnar
      },
      {
        question:
          "Anastomosis of the subscapular artery is formed by all EXCEPT:",
        options: [
          "Transverse cervical artery",
          "Suprascapular artery",
          "1st part of the subclavian artery",
          "Axillary artery",
        ],
        answer: 2, // Correct answer: 1st part of the subclavian artery
      },
      {
        question: "Which structure is present in the anatomical snuff box?",
        options: [
          "Ulnar artery",
          "Radial artery",
          "Median nerve",
          "Radial nerve",
        ],
        answer: 1, // Correct answer: Radial artery
      },
      {
        question: "Anatomical snuff box contains:",
        options: [
          "Axillary nerve",
          "Radial artery",
          "Brachial artery",
          "Ulnar artery",
        ],
        answer: 1, // Correct answer: Radial artery
      },
      {
        question:
          "The medial boundary of the anatomical snuff box is formed by the:",
        options: [
          "Ext. pollicis brevis",
          "Ext. carpi radialis longus",
          "Extensor pollicis longus",
          "Ext. carpi radialis brevis",
        ],
        answer: 2, // Correct answer: Extensor pollicis longus
      },
      {
        question: "Surgical neck fracture leads to EXCEPT:",
        options: [
          "Teres major palsy",
          "Teres minor palsy",
          "Weakness of abduction",
          "Deltoid muscle palsy",
        ],
        answer: 0, // Correct answer: Teres major palsy
      },
      {
        question:
          "Which of the following artery is affected in anterior shoulder dislocation?",
        options: ["Radial", "Axillary", "Median", "Ulnar"],
        answer: 1, // Correct answer: Axillary
      },
      {
        question:
          "Which among the following muscles receives dual nerve supply?",
        options: [
          "Flexor digitorum profundus",
          "Flexor digitorum superficialis",
          "Palmaris longus",
          "Extensor carpi radialis",
        ],
        answer: 0, // Correct answer: Flexor digitorum profundus
      },
    ],
    "Set-4": [
      {
        question: "All of the following structures are passing deep to the flexor retinaculum; EXCEPT:",
        options: ["Flexor pollicis longus", "Flexor digitorum superficialis", "Palmaris longus", "Flexor digitorum profundus"],
        answer: 2 // Correct answer: Palmaris longus
    },
    {
        question: "Which structure passes superficial to the flexor retinaculum?",
        options: ["Ulnar nerve", "Median nerve", "Flexor digitorum superficialis", "Flexor digitorum profundus"],
        answer: 0 // Correct answer: Ulnar nerve
    },
    {
        question: "Root value to axillary nerve:",
        options: ["C5, C6", "C6, C7", "C5, C6, C7", "C6, C7, C8"],
        answer: 0 // Correct answer: C5, C6
    },
    {
        question: "Musculocutaneous nerve arises from which cord?",
        options: ["Medial cord", "Lateral cord", "Anterior cord", "Posterior cord"],
        answer: 1 // Correct answer: Lateral cord
    },
    {
        question: "Root of radial nerve:",
        options: ["C6, C7, T1", "C5, C6, C7, T1", "C4, C5, C6, C7, C8, T1", "C6, C7, C8"],
        answer: 1 // Correct answer: C5, C6, C7, T1
    },
    {
        question: "Winging of the scapula is due to damage of:",
        options: ["Axillary nerve", "Long thoracic nerve", "Median nerve", "Ulnar nerve"],
        answer: 1 // Correct answer: Long thoracic nerve
    },
    {
        question: "Winging of the scapula is due to paralysis of:",
        options: ["Serratus anterior muscle", "Latissimus dorsi muscle", "Rhomboid major muscle", "Pectoralis major muscle"],
        answer: 0 // Correct answer: Serratus anterior muscle
    },
    {
        question: "'Dropped shoulder' occurs due to paralysis of:",
        options: ["Teres minor", "Deltoid", "Teres major", "Trapezius"],
        answer: 3 // Correct answer: Trapezius
    },
    {
        question: "Trapezius muscle is attached to all structures; EXCEPT:",
        options: ["First rib", "Clavicle", "Scapula", "Occiput"],
        answer: 0 // Correct answer: First rib
    },
    {
        question: "All of the following show ulnar nerve injury; EXCEPT:",
        options: ["Clawing of medial 2 digits", "Abductor pollicis palsy", "Adductor pollicis palsy", "Weak grip"],
        answer: 3 // Correct answer: Weak grip
    },
    {
        question: "Pointing finger injury is due to injury of which nerve?",
        options: ["Radial nerve", "Ulnar nerve", "Median nerve", "Axillary nerve"],
        answer: 2 // Correct answer: Median nerve
    },
    {
        question: "Clawhand is due to:",
        options: ["Median nerve", "Ulnar nerve", "Median and ulnar both", "Radial nerve"],
        answer: 1 // Correct answer: Ulnar nerve
    },
    {
        question: "Ape thumb deformity is due to injury of which nerve?",
        options: ["Radial nerve", "Ulnar nerve", "Median nerve", "Axillary nerve"],
        answer: 2 // Correct answer: Median nerve
    },
    {
        question: "Compression of which of the following nerves leads to carpal tunnel syndrome?",
        options: ["Ulnar nerve", "Median nerve", "Radial nerve", "Both a and b"],
        answer: 1 // Correct answer: Median nerve
    },
    {
        question: "Median nerve supplies all; EXCEPT:",
        options: ["Abductor pollicis longus", "Pronator quadratus", "Flexor pollicis longus", "Flexor carpi radialis"],
        answer: 0 // Correct answer: Abductor pollicis longus
    },
    {
        question: "All are muscles of the rotator cuff; EXCEPT:",
        options: ["Teres major", "Teres minor", "Infraspinatus", "Supraspinatus"],
        answer: 0 // Correct answer: Teres major
    },
    {
        question: "Most common injured muscle in the rotator cuff is:",
        options: ["Supraspinatus muscle", "Infraspinatus muscle", "Teres minor", "Subscapularis"],
        answer: 0 // Correct answer: Supraspinatus muscle
    },
    {
        question: "In a man lifting up a suitcase, downward dislocation of the glenohumeral joint is prevented by:",
        options: ["Deltoid", "Latissimus dorsi", "Coracobrachialis", "Supraspinatus"],
        answer: 3 // Correct answer: Supraspinatus
    },
    {
        question: "Short head of biceps is innervated by:",
        options: ["Musculocutaneous nerve", "Radial nerve", "Axillary nerve", "Median nerve"],
        answer: 0 // Correct answer: Musculocutaneous nerve
    },
    {
        question: "Muscle which covers both elbow and shoulder joint:",
        options: ["Biceps", "Biceps brachialis", "Coracobrachialis", "Long head of triceps brachii"],
        answer: 0 // Correct answer: Biceps
    },
    {
        question: "Which one of the following is a multipennate muscle?",
        options: ["Tibialis anterior", "Deltoid", "Tibialis posterior", "Latissimus dorsi"],
        answer: 1 // Correct answer: Deltoid
    },
    {
        question: "Fracture of the shaft of the humerus leads to:",
        options: ["Radial nerve injury", "Ulnar nerve injury", "Median nerve injury", "Musculocutaneous nerve injury"],
        answer: 0 // Correct answer: Radial nerve injury
    },
    {
        question: "Posterior wall of the axilla is formed by all; EXCEPT:",
        options: ["Teres major", "Subscapularis", "Supraspinatus", "Latissimus dorsi"],
        answer: 2 // Correct answer: Supraspinatus
    },
    {
        question: "Location of level III axillary lymph node in relation to pectoralis minor is:",
        options: ["Anterior", "Posterior", "Superior", "Inferior"],
        answer: 1 // Correct answer: Posterior
    },
    {
        question: "Supination and pronation of the upper limb is due to:",
        options: ["Wrist joint", "Radioulnar joint", "Elbow joint", "Carpometacarpal joint"],
        answer: 1 // Correct answer: Radioulnar joint
    },
    {
        question: "Medial border of cubital fossa is formed by:",
        options: ["Pronator teres", "Brachioradialis", "Supinator", "Brachialis"],
        answer: 0 // Correct answer: Pronator teres
    },
    {
        question: "All are contents of the cubital fossa; EXCEPT:",
        options: ["Ulnar artery", "Median nerve", "Biceps tendon", "Brachial artery"],
        answer: 0 // Correct answer: Ulnar artery
    },
    {
        question: "Boundary of the triangle of auscultation is formed by; EXCEPT:",
        options: ["Scapula", "Trapezius", "Serratus anterior", "Latissimus dorsi"],
        answer: 2 // Correct answer: Serratus anterior
    },
    {
        question: "Which arterial pulse is being taken?",
        options: ["Anterior tibial artery", "Posterior tibial artery", "Dorsalis pedis artery", "Medial plantar artery"],
        answer: 2 // Correct answer: Dorsalis pedis artery
    },
    {
        question: "The examiner is palpating which artery in the following diagram?",
        options: ["Anterior tibial", "Posterior tibial", "Dorsalis pedis", "Medial plantar"],
        answer: 2 // Correct answer: Dorsalis pedis
    },
    {
        question: "The dermatome of the area marked with arrow is:",
        options: ["L2", "L3", "L4", "L5"],
        answer: 1 // Correct answer: L3
    },
    {
        question: "Nerve involved in the difficulty in eversion of foot and loss of sensation in dorsal aspect of foot is:",
        options: ["Deep peroneal nerve", "Superficial peroneal nerve", "Sural nerve", "Saphenous nerve"],
        answer: 1 // Correct answer: Superficial peroneal nerve
    },
    {
        question: "Which muscle tendon is stretched in patellar tendon reflex?",
        options: ["Biceps femoris", "Quadriceps femoris", "Adductor magnus", "Quadratus"],
        answer: 1 // Correct answer: Quadriceps femoris
    },
    {
        question: "A 45-year-old policeman comes from duty with complaint of pain in right leg and starts from right buttock. On examination, pulse in right popliteal fossa was absent whereas in left side it was normal. The block is at which level?",
        options: ["Femoral", "External iliac", "Popliteal", "Articular"],
        answer: 1 // Correct answer: External iliac
    },
    {
        question: "What is the name of marked artery?",
        options: ["Posterior tibial artery", "Deep phalangeal artery", "Lateral planter", "Medial plantar"],
        answer: 0 // Correct answer: Posterior tibial artery
    },
    {
        question: "Identify the arrow marked tarsal in the given image:",
        options: ["Cuboid", "Navicular", "Talus", "Cuneiform"],
        answer: 2 // Correct answer: Talus
    },
    {
        question: "Posterior tibial artery pulse is felt:",
        options: ["Between medial malleolus & medial border of tendon calcaneus in inversion", "Between medial malleolus & medial border of tendon calcaneus in eversion", "Between medial malleolus & lateral border of tendon calcaneus in inversion", "Between medial malleolus & lateral border of tendon calcaneus in eversion"],
        answer: 0 // Correct answer: Between medial malleolus & medial border of tendon calcaneus in inversion
    },
    {
        question: "Identify the marked muscle tendon in the diagram:",
        options: ["Flexor hallucis longus", "Extensor hallucis longus", "Extensor digitorum longus", "Tibialis anterior"],
        answer: 1 // Correct answer: Extensor hallucis longus
    },
    {
      question: "Abduction at the hip joint is done by:",
      options: ["Gluteus maximus", "Obturator internus", "Quadratus femoris", "Gluteus medius"],
      answer: 3 // Correct answer: Gluteus medius
  },
  {
      question: "Tibial and common peroneal nerve supplies:",
      options: ["Adductor magnus muscle", "Adductor longus muscle", "Gracilis muscle", "Biceps femoris muscle"],
      answer: 3 // Correct answer: Biceps femoris muscle
  },
  {
      question: "Which of the following muscle is supplied by obturator nerve?",
      options: ["Gluteus medius", "Obturator internus", "Sartorius", "Adductor brevis"],
      answer: 3 // Correct answer: Adductor brevis
  },
  {
      question: "Which of the following muscle is evertor of foot?",
      options: ["Tibialis anterior muscle", "Tibialis posterior", "Peroneus longus muscle", "Extensor digitorum longus"],
      answer: 2 // Correct answer: Peroneus longus muscle
  },
  {
      question: "Most common nerve damaged in leg:",
      options: ["Common peroneal nerve", "Femoral nerve", "Sciatic nerve", "Tibial nerve"],
      answer: 0 // Correct answer: Common peroneal nerve
  },
  {
      question: "Femoral triangle base is formed by:",
      options: ["Medial border of sartorius", "Inguinal ligament", "Medial border of adductor longus", "Iliacus"],
      answer: 1 // Correct answer: Inguinal ligament
  },
  {
      question: "Medial compartment of thigh is supplied by which nerve?",
      options: ["Tibial nerve", "Obturator nerve", "Femoral nerve", "Common peroneal nerve"],
      answer: 1 // Correct answer: Obturator nerve
  },
  {
      question: "First web space of foot is supplied by:",
      options: ["Common peroneal nerve", "Superficial peroneal nerve", "Deep peroneal nerve", "Sural nerve"],
      answer: 2 // Correct answer: Deep peroneal nerve
  },
  {
      question: "Which bone in foot is not attached by any muscle?",
      options: ["Talus", "Calcaneum", "Metatarsals", "Fibula"],
      answer: 0 // Correct answer: Talus
  },
  {
      question: "Which muscle originates from anterior superior iliac spine?",
      options: ["Iliofemoral ligament", "Sartorius", "Vastus lateralis", "Vastus medialis"],
      answer: 1 // Correct answer: Sartorius
  },
  
    
    ],
//set 5 starts here -- 

    "Set-5": [
      {
        question: "Tibialis posterior muscle is supplied by which nerve?",
        options: ["Posterior tibial nerve", "Deep peroneal nerve", "Femoral nerve", "Sural nerve"],
        answer: 0 // Correct answer: Posterior tibial nerve
    },
    {
        question: "Adductor canal lateral boundary is formed by:",
        options: ["Adductor longus", "Rectus medialis", "Vastus lateralis", "Vastus medialis"],
        answer: 3 // Correct answer: Vastus medialis
    },
    {
        question: "Which is true about the origin of the Femoral nerve root?",
        options: ["Anterior division of L1, L2, L3, L4 ventral rami", "Anterior division of L1, L2, L3 ventral rami", "Posterior division of L2, L3, L4 ventral rami", "Posterior division of L1, L2, L3 ventral rami"],
        answer: 2 // Correct answer: Posterior division of L2, L3, L4 ventral rami
    },
    {
        question: "Which is the muscle marked as A in the femoral triangle?",
        options: ["Iliacus", "Psoas major", "Pectineus", "Adductor longus"],
        answer: 2 // Correct answer: Pectineus
    },
    {
        question: "Biceps femoris does which of the following function?",
        options: ["Adduction of knee", "Flexion of knee", "Extension of knee", "Abduction of knee"],
        answer: 1 // Correct answer: Flexion of knee
    },
    {
        question: "Chief extensor of thigh at hip joint is supplied by:",
        options: ["Inferior gluteal nerve", "Superior gluteal nerve", "Sciatic nerve", "Peroneal nerve"],
        answer: 0 // Correct answer: Inferior gluteal nerve
    },
    {
        question: "Which of the following muscles is an evertor of foot?",
        options: ["Peroneus tertius", "Tibialis anterior", "Extensor hallucis longus", "Extensor digitorum"],
        answer: 0 // Correct answer: Peroneus tertius
    },
    {
        question: "What is the nerve supply of popliteus muscle?",
        options: ["Tibial nerve", "Popliteal nerve", "Common peroneal nerve", "Deep peroneal nerve"],
        answer: 0 // Correct answer: Tibial nerve
    },
    {
        question: "Which is not a cause of positive Trendelenburg sign?",
        options: ["Paralysis of gluteus maximus", "Congenital dislocation of hip", "Ununited fracture of neck", "Coxa vara"],
        answer: 0 // Correct answer: Paralysis of gluteus maximus
    },
    {
        question: "Which of the following nerve injury leads to positive Trendelenburg test?",
        options: ["Inferior gluteal", "Obturator", "Tibial", "Superior gluteal nerve"],
        answer: 3 // Correct answer: Superior gluteal nerve
    },
    {
        question: "Trendelenburg test is done for:",
        options: ["Gluteus medius, minimus", "Gluteus maximus, minimus", "Gluteus maximus, medius", "Gluteus maximus, medius, minimus"],
        answer: 0 // Correct answer: Gluteus medius, minimus
    },
    {
        question: "Capsule of knee joint is supplied by:",
        options: ["Genital branch of genitofemoral nerve", "Femoral branch of genitofemoral nerve", "Genicular branch of obturator nerve", "Femoral branch of obturator nerve"],
        answer: 2 // Correct answer: Genicular branch of obturator nerve
    },
    {
        question: "Fabella is present in:",
        options: ["Medial head of gastrocnemius", "Lateral head of gastrocnemius", "Adductor magnus", "Adductor longus"],
        answer: 1 // Correct answer: Lateral head of gastrocnemius
    },
    {
        question: "Which is the nerve supply of soleus muscle?",
        options: ["Tibial nerve", "Common peroneal nerve", "Superficial peroneal nerve", "Deep peroneal nerve"],
        answer: 0 // Correct answer: Tibial nerve
    },
    {
        question: "What is true about iliotibial tract?",
        options: ["Thickening of fascia lata", "Gluteus medius is inserted into it", "Insertion at medial aspect of tibia", "Runs along the medial aspect of thigh"],
        answer: 0 // Correct answer: Thickening of fascia lata
    },
    {
        question: "Which muscle is responsible for sitting to standing position?",
        options: ["Gluteus medius", "Gluteus maximus", "Gluteus minimus", "Tensor fascia lata"],
        answer: 1 // Correct answer: Gluteus maximus
    },
    {
        question: "All are branches of femoral artery; EXCEPT:",
        options: ["Superficial epigastric artery", "Superficial circumflex artery", "Inferior epigastric artery", "Descending genicular artery"],
        answer: 2 // Correct answer: Inferior epigastric artery
    },
    {
        question: "Gluteus maximus is inserted on:",
        options: ["Lesser trochanter", "Gluteal tuberosity", "Iliotibial tract", "Iliac crest"],
        answer: 2 // Correct answer: Iliotibial tract
    },
    {
        question: "Iliotibial band has insertion of all of the following muscles; EXCEPT:",
        options: ["Tensor fasciae latae", "Gluteus maximus", "Gluteus minimus", "Vastus lateralis"],
        answer: 2 // Correct answer: Gluteus minimus
    },
    {
        question: "Which is the longest muscle of the body?",
        options: ["Sartorius", "Extraocular muscle", "External oblique", "Popliteal muscle"],
        answer: 0 // Correct answer: Sartorius
    },
    {
        question: "Which of the following muscles has attachment on the capsule of hip joint?",
        options: ["Sartorius", "Rectus femoris", "Vastus lateralis", "Vastus medialis"],
        answer: 1 // Correct answer: Rectus femoris
    },
    {
        question: "This muscle is part of hamstrings muscle:",
        options: ["Semimembranosus", "Gracilis", "Short head of biceps femoris", "Sartorius"],
        answer: 0 // Correct answer: Semimembranosus
    },
    {
        question: "Gluteus medius is supplied by:",
        options: ["Superior gluteal nerve", "Inferior gluteal nerve", "Nerve to obturator internus", "Nerve to quadratus femoris"],
        answer: 0 // Correct answer: Superior gluteal nerve
    },
    {
        question: "Which of the following nerve supplies gluteus maximus?",
        options: ["Superior gluteal nerve", "Inferior gluteal nerve", "Anterior gluteal nerve", "Posterior gluteal nerve"],
        answer: 1 // Correct answer: Inferior gluteal nerve
    },
    {
        question: "Which is the nerve supplying gamellus inferior muscle?",
        options: ["Nerve to obturator internus", "Nerve to obturator externus", "Nerve to quadratus femoris", "Ventral rami to S1 and S2"],
        answer: 2 // Correct answer: Nerve to quadratus femoris
    },
    {
      question: "All of the following structures pass through lesser sciatic foramen; EXCEPT:",
      options: ["Pudendal nerve", "Internal pudendal vessels", "Nerve to obturator internus", "Nerve to obturator externus"],
      answer: 3 // Correct answer: Nerve to obturator externus
  },
  {
      question: "Which is the main extensor of knee?",
      options: ["Biceps femoris", "Quadriceps femoris", "Semitendinosus", "Semimembranosus"],
      answer: 1 // Correct answer: Quadriceps femoris
  },
  {
      question: "Which muscle is responsible for unlocking of knee?",
      options: ["Popliteus", "Quadriceps femoris", "Semitendinosus", "Semimembranosus"],
      answer: 0 // Correct answer: Popliteus
  },
  {
      question: "Which of the following bone has no muscle attachment?",
      options: ["Navicular", "Calcaneum", "Talus", "Cuboid"],
      answer: 2 // Correct answer: Talus
  },
  {
      question: "In injury to the neck of fibula, which of the following nerve is usually injured?",
      options: ["Superficial peroneal nerve", "Deep peroneal nerve", "Common peroneal nerve", "Tibial nerve"],
      answer: 2 // Correct answer: Common peroneal nerve
  },
  {
      question: "Medial border of Hesselbach's triangle is formed by:",
      options: ["Linea alba", "Linea semilunaris", "Inferior epigastric artery", "Conjoint tendon"],
      answer: 1 // Correct answer: Linea semilunaris
  },
  {
      question: "Poupart's ligament forms which border of Hesselbach's triangle?",
      options: ["Anterior", "Posterior", "Superior", "Inferior"],
      answer: 3 // Correct answer: Inferior
  },
  {
      question: "All of the following are true about lateral cutaneous nerve of thigh; EXCEPT:",
      options: ["Supplies skin over the lateral skin of thigh", "Supplies skin over the medial aspect of thigh", "Arises from L1 and L3", "It is a purely sensory nerve"],
      answer: 1 // Correct answer: Supplies skin over the medial aspect of thigh
  },
  {
      question: "What is the nerve root value of superior gluteal nerve?",
      options: ["L1, S1, S2", "L2, S1, S2", "L5, S1, S2", "L5, S2, S3"],
      answer: 2 // Correct answer: L5, S1, S2
  },
  {
      question: "Root value of the posterior cutaneous nerve of the thigh:",
      options: ["S1, S2, S3", "S2, S3, S4", "S1, S2, S3", "S1, S2, S4"],
      answer: 0 // Correct answer: S1, S2, S3
  },
  {
      question: "Root value of sciatic nerve is:",
      options: ["S1, S2, S3", "L4, L5, S1, S2, S3", "L1, L2, S1", "L1, L2, L3"],
      answer: 1 // Correct answer: L4, L5, S1, S2, S3
  },
  {
      question: "Nerve root of pudendal nerve is:",
      options: ["S2, S3, S4", "S1, S2, S3", "S1, S2, S4", "S2, S3, S5"],
      answer: 0 // Correct answer: S2, S3, S4
  },
  {
      question: "Identify the arrow marked structure in the dissected specimen:",
      options: ["Oesophagus", "Superior vena cava", "Inferior vena cava", "Descending aorta"],
      answer: 2 // Correct answer: Inferior vena cava
  },
  {
      question: "The marked line corresponds to vertebral level:",
      options: ["T-12", "L-1", "L-2", "L-3"],
      answer: 1 // Correct answer: L-1
  },
  {
      question: "Identify the chamber marked with arrow:",
      options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
      answer: 0 // Correct answer: Right atrium
  },
  {
      question: "The neurovascular bundle in anterior wall of abdomen lies between:",
      options: ["External and internal oblique muscle", "Internal oblique and transverse abdominis muscle", "External oblique and transversus abdominis", "Transversus abdominis and transversalis fascia"],
      answer: 1 // Correct answer: Internal oblique and transverse abdominis muscle
  },
  {
      question: "Structure marked in the image will terminate at:",
      options: ["Junction of left jugular vein and subclavian vein", "Brachiocephalic vein", "Superior vena cava", "Right subclavian vein"],
      answer: 0 // Correct answer: Junction of left jugular vein and subclavian vein
  },
  {
      question: "A baby at 9 to 10 months develops which curvature in the vertebral spine?",
      options: ["Secondary curvature at cervical spine", "Secondary curvature at thoracic spine", "Secondary curvature at lumbar spine", "Secondary curvature at sacral spine"],
      answer: 2 // Correct answer: Secondary curvature at lumbar spine
  },
  {
    question: "Identify the structure marked with pointer:",
    options: ["Hepatic artery", "Hepatic vein", "Inferior vena cava", "Portal vein"],
    answer: 3 // Correct answer: Portal vein
},
{
    question: "Testicular artery is a branch of:",
    options: ["Common iliac artery", "Abdominal aorta", "Internal iliac artery", "External iliac artery"],
    answer: 1 // Correct answer: Abdominal aorta
},
{
    question: "Which of the following structure is present over the mediastinal surface of right lung?",
    options: ["Azygos vein", "Right thoracic duct", "Aorta", "Trachea"],
    answer: 0 // Correct answer: Azygos vein
},
{
    question: "Which of the following structures is not found in superior mediastinum?",
    options: ["Pulmonary trunk", "Thymus", "Left intercostal artery", "Arch of aorta"],
    answer: 0 // Correct answer: Pulmonary trunk
},
{
    question: "Which of these is true about bronchopulmonary segment?",
    options: ["Nonresectable", "Spherical in shape", "Artery is intersegmental", "Pulmonary veins are intersegmental"],
    answer: 3 // Correct answer: Pulmonary veins are intersegmental
},
{
    question: "Left anterior descending artery is a branch of:",
    options: ["Right coronary artery", "Left coronary artery", "Ascending aorta", "Coronary sinus"],
    answer: 1 // Correct answer: Left coronary artery
},
{
    question: "VAN (vein, artery, nerve) sequence is present in intercostal space at:",
    options: ["Upper border of rib", "Middle border of rib", "Lower border of rib", "Middle portion of intercostal space"],
    answer: 2 // Correct answer: Lower border of rib
}

  
    
    ],
    "Set-6": [
      {
        question: "Which of the following rib is known as floating rib?",
        options: ["8", "9", "10", "11"],
        answer: 3 // Correct answer: 11
    },
    {
        question: "Which is not a true rib?",
        options: ["5th", "6th", "7th", "8th"],
        answer: 3 // Correct answer: 8th
    },
    {
        question: "Xiphoid process unites with the body at age of how many years?",
        options: ["10", "20", "30", "40"],
        answer: 2 // Correct answer: 30
    },
    {
        question: "Which structure passes through foramen of Langer?",
        options: ["Inguinal canal", "Tail of spence", "CN V3", "CN VII"],
        answer: 1 // Correct answer: Tail of spence
    },
    {
        question: "Sappey’s plexus drains?",
        options: ["Breast", "Thyroid", "Adrenal", "Porta hepatis"],
        answer: 0 // Correct answer: Breast
    },
    {
        question: "Lingula is which part of lung?",
        options: ["Left lower lobe", "Right lower lobe", "Left upper lobe", "Right upper lobe"],
        answer: 2 // Correct answer: Left upper lobe
    },
    {
        question: "Which muscle is involved in violent expiratory efforts?",
        options: ["Diaphragm", "Latissimus dorsi", "External oblique", "Internal intercostal"],
        answer: 1 // Correct answer: Latissimus dorsi
    },
    {
        question: "Right coronary artery supplies all; EXCEPT:",
        options: ["Azygos vein", "Right thoracic duct", "Posterior part of interventricular septum", "Anterior interventricular groove"],
        answer: 0 // Correct answer: Azygos vein
    },
    {
        question: "Base of the heart is formed by:",
        options: ["RA", "RV", "LA", "LV"],
        answer: 2 // Correct answer: LA (Left Atrium)
    },
    {
        question: "All of these form right heart border; EXCEPT?",
        options: ["SVC", "Right atrium", "Right ventricle", "Right ventricle"],
        answer: 2 // Correct answer: Right ventricle
    },
    {
        question: "What is the length of trachea?",
        options: ["5 cm", "10 cm", "20 cm", "25 cm"],
        answer: 2 // Correct answer: 20 cm
    },
    {
        question: "What is the diameter of trachea?",
        options: ["0.5 cm", "2 cm", "3 cm", "5 cm"],
        answer: 1 // Correct answer: 2 cm
    },
    {
        question: "Most commonly foreign body lodges in which part of esophagus?",
        options: ["Where it crosses the aortic arch", "Cricopharyngeus", "Where it is crossed by left bronchus", "Where it pierces the diaphragm"],
        answer: 1 // Correct answer: Cricopharyngeus
    },
    {
        question: "Which is not an accessory muscle of respiration?",
        options: ["Sternocleidomastoid", "Scaleneus", "Erector spinae", "None of these"],
        answer: 2 // Correct answer: Erector spinae
    },
    {
        question: "75% respiration is due to:",
        options: ["Diaphragm", "Internal intercostals", "Intercostals", "Serratus anterior"],
        answer: 0 // Correct answer: Diaphragm
    },
    {
        question: "Which is the motor supply of diaphragm?",
        options: ["Phrenic nerve", "Thoracodorsal nerve", "Intercostals", "Sympathetic nerves"],
        answer: 0 // Correct answer: Phrenic nerve
    },
    {
        question: "Intercostal veins drain into:",
        options: ["Left subclavian vein", "Internal jugular vein", "Azygos vein", "Inferior vena cava"],
        answer: 2 // Correct answer: Azygos vein
    },
    {
        question: "Celiac artery is seen at which vertebral level?",
        options: ["T9", "T10", "T12", "L2"],
        answer: 2 // Correct answer: T12
    },
    {
        question: "Identify the branch originating from Celiac trunk:",
        options: ["Splenic artery", "Left gastric artery", "Left gastroepiploic artery", "Left renal artery"],
        answer: 0 // Correct answer: Splenic artery
    },
    {
        question: "Tail of pancreas is present in:",
        options: ["Gastrosplenic ligament", "Splenorenal ligament", "Hepatogastric ligament", "Gastro-duodenal ligament"],
        answer: 1 // Correct answer: Splenorenal ligament
    },
    {
        question: "Sternum attached to scapula via:",
        options: ["Manubrium", "First rib", "Second rib", "Clavicle"],
        answer: 3 // Correct answer: Clavicle
    },
    {
        question: "Vasa Brevia is the name of:",
        options: ["Long gastric arteries", "Short gastric arteries", "Duodenal arteries", "Renal arteries"],
        answer: 1 // Correct answer: Short gastric arteries
    },
    {
        question: "Identify the part of duodenum marked below:",
        options: ["1st part", "2nd part", "3rd part", "4th part"],
        answer: 1 // Correct answer: 2nd part
    },
    {
        question: "Cords of Billroth in spleen are found in:",
        options: ["White pulp", "Trabecular zone", "Red pulp", "Mantle zone"],
        answer: 2 // Correct answer: Red pulp
    },
    {
        question: "Which is the watershed area of inferior mesenteric artery and internal iliac artery?",
        options: ["Griffith's point", "Sigmoid colon", "Ano rectal junction", "Sudeck's point"],
        answer: 3 // Correct answer: Sudeck's point
    },
    {
      question: "Portal vein starts at level of:",
      options: ["L2", "L3", "L4", "L5"],
      answer: 0 // Correct answer: L2
  },
  {
      question: "Which is not a derivative of dorsal mesogastrium?",
      options: ["Greater omentum", "Gastrosplenic ligament", "Gastro-phrenic ligament", "Coronary ligament"],
      answer: 3 // Correct answer: Coronary ligament
  },
  {
      question: "Which of the following is not a part of pancreatic blood supply?",
      options: ["Splenic vein", "Right suprarenal gland", "Aorta", "Left crus of diaphragm"],
      answer: 1 // Correct answer: Right suprarenal gland
  },
  {
      question: "Smallest branch of celiac artery is:",
      options: ["Right gastric artery", "Splenic artery", "Left gastric artery", "Cystic artery"],
      answer: 2 // Correct answer: Left gastric artery
  },
  {
      question: "Constriction of diaphragm will not cause constriction of which opening?",
      options: ["Aortic opening", "Esophageal opening", "IVC opening", "Thoracic duct aperture"],
      answer: 0 // Correct answer: Aortic opening
  },
  {
      question: "Identify the intestinal segment:",
      options: ["Ileum", "Jejunum", "Caecum", "Large intestine"],
      answer: 1 // Correct answer: Jejunum
  },
  {
      question: "Shape of left adrenal gland:",
      options: ["Oval", "Semilunar", "Triangular", "Trapezoid"],
      answer: 1 // Correct answer: Semilunar
  },
  {
      question: "All of the following form boundary of Left suprarenal gland; EXCEPT:",
      options: ["Greater sac of stomach forms anterior border", "Psoas major forms posterior border", "Spleen forms anterolateral border", "Left kidney forms inferior border"],
      answer: 1 // Correct answer: Psoas major forms posterior border
  },
  {
      question: "What is the weight of adrenal gland?",
      options: ["4 grams", "8 grams", "10 grams", "15 grams"],
      answer: 0 // Correct answer: 4 grams
  },
  {
      question: "Aortic hiatus pierces diaphragm at what level?",
      options: ["T8", "T10", "T11", "T12"],
      answer: 3 // Correct answer: T12
  },
  {
      question: "Structures passing through aortic opening in diaphragm are EXCEPT:",
      options: ["Aorta", "Azygos vein", "Thoracic duct", "Vagus nerve"],
      answer: 3 // Correct answer: Vagus nerve
  },
  {
      question: "Right phrenic nerve passes through this diaphragmatic opening:",
      options: ["Aortic opening", "Caval opening", "Esophageal opening", "Phrenic nerve opening"],
      answer: 1 // Correct answer: Caval opening
  },
  {
      question: "Structures passing through esophageal opening are all; EXCEPT:",
      options: ["Esophagus", "Phrenic nerve", "Vagus nerve", "Gastric artery branches"],
      answer: 1 // Correct answer: Phrenic nerve
  },
  {
      question: "Which of the following structures does not pass through diaphragm?",
      options: ["Aorta", "IVC", "Esophagus", "Cisterna chyli"],
      answer: 3 // Correct answer: Cisterna chyli
  },
  {
      question: "All of the following vessels are valveless; EXCEPT:",
      options: ["Inferior vena cava", "Superior vena cava", "Pulmonary vein", "Internal jugular vein"],
      answer: 3 // Correct answer: Internal jugular vein
  },
  {
      question: "Which of the following vessels has valve to prevent backflow of blood?",
      options: ["Internal jugular vein", "Portal vein", "Superior vena cava", "Inferior vena cava"],
      answer: 0 // Correct answer: Internal jugular vein
  },
  {
      question: "All are muscular arteries; EXCEPT?",
      options: ["Aorta", "Femoral artery", "Popliteal artery", "Splenic artery"],
      answer: 0 // Correct answer: Aorta
  },
  {
      question: "Inferior vena cava is formed at which level:",
      options: ["L2", "L3", "L4", "L5"],
      answer: 3 // Correct answer: L5
  },
  {
      question: "Portal vein forms at which vertebral level?",
      options: ["L1", "L5", "S1", "S5"],
      answer: 0 // Correct answer: L1
  },
  {
      question: "Brunner glands are seen in:",
      options: ["Duodenum", "Esophagus", "Cardia of stomach", "Small intestine"],
      answer: 0 // Correct answer: Duodenum
  },
  {
      question: "Brunner's gland in the duodenum secretes:",
      options: ["Mucus alkaline", "Acid", "Pepsin", "Gastrin"],
      answer: 0 // Correct answer: Mucus alkaline
  },
  {
      question: "All of the following form visceral relation of spleen; EXCEPT:",
      options: ["Fundus of stomach", "Left kidney", "Splenic flexure of colon", "Duodenum"],
      answer: 3 // Correct answer: Duodenum
  },
  {
      question: "Which of the following forms the posterior wall of kidney?",
      options: ["Latissimus dorsi", "Quadratus lumborum", "Transverse abdominis", "External oblique"],
      answer: 1 // Correct answer: Quadratus lumborum
  },
  {
      question: "Which of the following is not in anterior relationship with left kidney?",
      options: ["Jejunal flexure", "Splenic flexure", "Head of pancreas", "Left suprarenal gland"],
      answer: 2 // Correct answer: Head of pancreas
  },
  {
      question: "Which of these is present anterior to right kidney?",
      options: ["Suprarenal gland", "Right colic flexure", "Intestinal looping", "Duodenum 2nd part"],
      answer: 3 // Correct answer: Duodenum 2nd part
  }
      
    ],

    "Set-7": [
      {
        question: "Which of the following structure will affect or stop the ascent of kidney in fetal development?",
        options: ["Superior mesenteric artery", "Inferior mesenteric artery", "Left splenic vein", "Celiac trunk"],
        answer: 0 // Correct answer: Superior mesenteric artery
    },
    {
        question: "Kidney cortex contains:",
        options: ["Loop of Henle", "Pyramids", "Collecting tubule and duct", "Calyces"],
        answer: 2 // Correct answer: Collecting tubule and duct
    },
    {
        question: "Which is the longest part of duodenum?",
        options: ["First part", "Second part", "Third part", "Fourth part"],
        answer: 2 // Correct answer: Third part
    },
    {
        question: "Which of the following is dermatome of umbilicus:",
        options: ["T8", "T10", "T12", "L1"],
        answer: 1 // Correct answer: T10
    },
    {
        question: "Commonest position of the appendix is:",
        options: ["Paracecal", "Retrocecal", "Pelvic", "Subcecal"],
        answer: 1 // Correct answer: Retrocecal
    },
    {
        question: "Which is the least common position of appendix?",
        options: ["Retrocecal", "Preileal", "Postileal", "Pelvic"],
        answer: 1 // Correct answer: Preileal
    },
    {
        question: "All are tributaries of portal vein; EXCEPT:",
        options: ["Left gastric vein", "Right gastric vein", "Inferior pancreatoduodenal vein", "Superior mesenteric vein"],
        answer: 2 // Correct answer: Inferior pancreatoduodenal vein
    },
    {
        question: "Which are the correct boundaries of Calot's triangle?",
        options: ["Cystic artery, liver, right hepatic duct", "Cystic duct, liver, common hepatic duct", "Cystic duct, liver, cystic artery", "Common bile duct, cystic duct, liver"],
        answer: 1 // Correct answer: Cystic duct, liver, common hepatic duct
    },
    {
        question: "Superior boundary of Calot's triangle is formed by:",
        options: ["Hepatic duct", "Superior surface of liver", "Inferior surface of liver", "Cystic duct"],
        answer: 1 // Correct answer: Superior surface of liver
    },
    {
        question: "All of the structures pass through Calot's triangle; EXCEPT:",
        options: ["Portal vein", "Cystic artery", "Right hepatic artery", "Lymph node of Lund"],
        answer: 0 // Correct answer: Portal vein
    },
    {
        question: "Structures at the transpyloric plane include all; EXCEPT:",
        options: ["Fundus of gallbladder", "Termination of portal vein", "Hilum of kidneys", "Pylorus of stomach"],
        answer: 1 // Correct answer: Termination of portal vein
    },
    {
        question: "Which is true regarding portal venous system?",
        options: ["Whole system is valveless", "Valves are present at the junction of superior mesenteric artery and splenic artery", "Valves are present in the intrahepatic system", "There are about 10–12 valves along the entire course"],
        answer: 0 // Correct answer: Whole system is valveless
    },
    {
        question: "Chief cells are found in which area of stomach?",
        options: ["Fundus", "Pit", "Neck", "Body"],
        answer: 3 // Correct answer: Body
    },
    {
        question: "Average weight of spleen in adult:",
        options: ["5 ounce", "7 ounce", "14 ounce", "21 ounce"],
        answer: 1 // Correct answer: 7 ounce
    },
    {
        question: "Which is the most mobile part of rectum?",
        options: ["Upper 1/3", "Middle 1/3", "Lower 1/3", "Lower 2/3"],
        answer: 0 // Correct answer: Upper 1/3
    },
    {
        question: "What is the length of rectum?",
        options: ["5 cm", "12 cm", "15 cm", "20 cm"],
        answer: 2 // Correct answer: 15 cm
    },
    {
        question: "Which of the following is not in posterior relationship to rectum?",
        options: ["Sacral vertebra", "Superior rectal artery", "Seminal vesicles", "Middle rectal artery"],
        answer: 2 // Correct answer: Seminal vesicles
    },
    {
        question: "Opening of anal epithelium is made up of:",
        options: ["Squamous cell", "Columnar", "Transitional", "Cuboidal"],
        answer: 0 // Correct answer: Squamous cell
    },
    {
        question: "The puborectalis covers anorectal angle:",
        options: ["Completely", "Anteriorly", "Posteriorly", "Laterally"],
        answer: 1 // Correct answer: Anteriorly
    },
    {
        question: "All of the following arteries supply pancreas; EXCEPT:",
        options: ["Gastroduodenal artery", "Superior mesenteric artery", "Inferior mesenteric artery", "Pancreatic branch of splenic artery"],
        answer: 2 // Correct answer: Inferior mesenteric artery
    },
    {
        question: "Which of the following is not a ventral branch of abdominal aorta?",
        options: ["Gonadal artery", "Celiac trunk", "Superior mesenteric artery", "Inferior mesenteric artery"],
        answer: 0 // Correct answer: Gonadal artery
    },
    {
        question: "All of the following are branches of external iliac artery; EXCEPT:",
        options: ["Femoral artery", "Deep circumflex artery", "Inferior epigastric artery", "Gonadal artery"],
        answer: 3 // Correct answer: Gonadal artery
    },
    {
        question: "Name the dural venous sinus arrow marked in the radiograph:",
        options: ["Straight sinus", "Superior sagittal sinus", "Inferior sagittal sinus", "Confluence of sinuses"],
        answer: 1 // Correct answer: Superior sagittal sinus
    },
    {
        question: "Identify the arrow marked structure in the radiograph:",
        options: ["Midbrain", "Pons", "Medulla oblongata", "Spinal cord"],
        answer: 1 // Correct answer: Pons
    },
    {
        question: "In unilateral hypoglossal nerve lesion, position of tongue on protrusion is:",
        options: ["Midline", "Deviates to ipsilateral side", "Deviates to contralateral side", "No protrusion possible"],
        answer: 1 // Correct answer: Deviates to ipsilateral side
    },
    
          {
              "question": "Identify the muscle shown in the figure below:",
              "options": ["Inter-arytenoid", "Longitudinal muscle of esophagus", "Circular muscle of esophagus", "Trachealis"],
              "answer": 1
          },
          {
              "question": "A patient presented where physician noted that all extraocular muscles have been paralyzed. The most probable level of lesion is:",
              "options": ["Midbrain", "Pons", "Upper medulla", "Lower medulla"],
              "answer": 1
          },
          {
              "question": "The marked structure is:",
              "options": ["Epiglottis", "Uvula", "Glottis", "Tongue"],
              "answer": 0
          },
          {
              "question": "Termination of spinal cord in a newborn lies at which vertebral level?",
              "options": ["Lower border of L1", "Lower border of L2", "Lower border of L3", "Lower border of S2"],
              "answer": 2
          },
          {
              "question": "Identify the muscle marked 'X' in the given image:",
              "options": ["Styloglossus", "Genioglossus", "Hyoglossus", "Palatoglossus"],
              "answer": 1
          },
          {
              "question": "All are paired cartilages; EXCEPT:",
              "options": ["Arytenoid", "Corniculate", "Thyroid", "Cuneiform"],
              "answer": 2
          },
          {
              "question": "Which of the following is an abductor of vocal cords?",
              "options": ["Posterior cricoarytenoid", "Lateral cricoarytenoid", "Cricothyroid", "Thyroarytenoid"],
              "answer": 0
          },
          {
              "question": "All of the following are true; EXCEPT:",
              "options": ["A - Caudate nucleus", "B - Thalamus", "C - Lentiform nucleus", "D - Internal capsule"],
              "answer": 3
          },
          {
              "question": "Corticospinal tract crosses at the level of:",
              "options": ["Midbrain", "Pons", "Upper medulla", "Lower medulla"],
              "answer": 2
          },
          {
              "question": "Killian's dehiscence is seen between:",
              "options": ["Cricopharyngeus and thyropharyngeus", "Stylopharyngeus and palatopharyngeus", "Palatopharyngeus and salpingopharyngeus", "Stylopharyngeus and salpingopharyngeus"],
              "answer": 0
          },
          {
              "question": "Which of the following is the safety muscle of the tongue?",
              "options": ["Genioglossus", "Hyoglossus", "Palatoglossus", "Styloglossus"],
              "answer": 0
          },
          {
              "question": "Lacrimal gland is supplied through parasympathetic system. It is supplied by which ganglion?",
              "options": ["Ciliary ganglion", "Otic ganglion", "Pterygopalatine", "Submandibular"],
              "answer": 2
          },
          {
              "question": "The structure which doesn't pass through the parotid gland?",
              "options": ["Facial nerve", "Internal carotid artery", "Branch of external carotid artery", "Retromandibular vein"],
              "answer": 1
          },
          {
              "question": "Protraction of jaw is due to which of the following muscle?",
              "options": ["Serratus anterior", "Pectoralis major", "Pectoralis minor", "Lateral pterygoid"],
              "answer": 3
          },
          {
              "question": "Middle meningeal artery is a branch of:",
              "options": ["Maxillary artery", "Mandibular artery", "Facial artery", "Ophthalmic artery"],
              "answer": 0
          },
          {
              "question": "The muscle which is required to open the eustachian tube:",
              "options": ["Tensor veli palatini muscle", "Salpingo pharyngeous", "Tensor veli tympani", "Levator veli palatini"],
              "answer": 0
          },
          {
              "question": "Identify the structure marked with arrow:",
              "options": ["Midbrain", "Pons", "Medulla oblongata", "Platysma"],
              "answer": 1
          },
          {
              "question": "Killian's dehiscence is formed due to:",
              "options": ["Superior constrictor muscle", "Inferior constrictor muscle", "Middle pharyngeal constrictor muscle", "Esophageal fibers"],
              "answer": 0
          },
          {
              "question": "Glossopharyngeal nerve supplies which of the following gland?",
              "options": ["Parotid gland", "Submandibular gland", "Sublingual gland", "Lacrimal gland"],
              "answer": 0
          },
          {
              "question": "Which branch of facial nerve supplies muscles of the lower lip?",
              "options": ["Temporal branch", "Cervical branch", "Buccal branch", "Mandibular branch"],
              "answer": 3
          },
          {
              "question": "Lower lip blood supply:",
              "options": ["Angular artery", "Lateral nasal artery", "Labial artery", "Greater palatine artery"],
              "answer": 2
          },
          {
              "question": "Landmark of facial nerve in parotid gland:",
              "options": ["Tragal pointer", "Anterior belly of digastric muscle", "Helical point", "Suprameatal triangle"],
              "answer": 0
          },
          {
              "question": "Trismus is due to spasm of which muscle?",
              "options": ["Orbicularis", "Lateral pterygoid", "Mentalis", "Medial pterygoid"],
              "answer": 1
          },
          {
              "question": "Accessory muscle of mastication:",
              "options": ["Risorius", "Orbicularis oris", "Buccinator", "Platysma"],
              "answer": 3
          },
          {
              "question": "Parotid duct opens into:",
              "options": ["First mandibular molar", "First maxillary pre-molar", "Second mandibular molar", "Second maxillary molar"],
              "answer": 2
          }
      
  
  
    
    ],
  },
  science: {
    Physics: [
      {
        question: "What is the speed of light?",
        options: ["3x10^8 m/s", "1x10^6 m/s", "5x10^8 m/s", "2x10^8 m/s"],
        answer: 0,
      },
    ],
    Chemistry: [
      {
        question: "What is H2O?",
        options: ["Water", "Oxygen", "Hydrogen", "Carbon"],
        answer: 0,
      },
    ],
  },
};

// Function to load quiz questions based on the selected category and subcategory
function loadQuiz(category, subcategory) {
  const quizStartTime = new Date().getTime();

  const quizContainer = document.getElementById("quiz-container");
  const questionsDiv = document.getElementById("questions");
  questionsDiv.innerHTML = ""; // Clear any previous quiz questions

  // Check if quiz data exists for the selected category and subcategory
  if (!quizData[category] || !quizData[category][subcategory]) {
    document.body.innerHTML = "<h1>No quiz available for this subcategory</h1>";
    return;
  }

  // Loop through each quiz question and dynamically create the quiz interface
  quizData[category][subcategory].forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionLabel = document.createElement("label");
    questionLabel.innerHTML = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionLabel);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    q.options.forEach((option, optionIndex) => {
      const optionLabel = document.createElement("label");

      const optionInput = document.createElement("input");
      optionInput.type = "radio";
      optionInput.name = `question-${index}`;
      optionInput.value = optionIndex;

      optionInput.addEventListener("change", () => {
        const inputs = optionsDiv.querySelectorAll('input[type="radio"]');
        inputs.forEach((input) => {
          const label = input.parentElement;
          const feedback = label.querySelector(".feedback");
          if (feedback) feedback.remove();
          label.style.border = "";
        });

        const feedbackIcon = document.createElement("span");
        feedbackIcon.classList.add("feedback");
        feedbackIcon.style.marginLeft = "10px";
        const label = optionInput.parentElement;

        if (parseInt(optionInput.value) === q.answer) {
          // Fill the background with green for correct answers
          label.style.backgroundColor = "green";
          label.style.color = "white"; // Change text color for better visibility
          label.style.border = "3px solid green";
          inputs.forEach((input) => (input.disabled = true)); // Disable all inputs after selection
        } else {
          // Fill the background with red for incorrect answers
          label.style.backgroundColor = "red";
          label.style.color = "white"; // Change text color for better visibility
          label.style.border = "3px solid red";
          optionInput.disabled = true; // Disable only the incorrect input

          // Highlight the correct answer with green
          inputs.forEach((input) => {
            if (parseInt(input.value) === q.answer) {
              const correctLabel = input.parentElement;
              correctLabel.style.backgroundColor = "green";
              correctLabel.style.color = "white"; // Change text color for better visibility
              correctLabel.style.border = "2px solid green";
            }
          });

          // Disable all inputs after selection
          inputs.forEach((input) => (input.disabled = true));
        }

        label.appendChild(feedbackIcon);
      });

      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));
      optionsDiv.appendChild(optionLabel);
    });

    questionDiv.appendChild(optionsDiv);
    questionDiv.style.borderBottom = "1px solid black";
    questionDiv.style.paddingBottom = "10px";
    questionDiv.style.marginBottom = "20px";
    questionsDiv.appendChild(questionDiv);
  });

  quizContainer.classList.remove("hidden"); // Show the quiz once questions are loaded
}

// Function to submit the quiz and calculate the score
let quizStartTime; // Declare quizStartTime globally to capture start time

function loadQuiz(category, subcategory) {
  quizStartTime = new Date().getTime(); // Record start time here

  const quizContainer = document.getElementById("quiz-container");
  const questionsDiv = document.getElementById("questions");
  questionsDiv.innerHTML = ""; // Clear any previous quiz questions

  if (!quizData[category] || !quizData[category][subcategory]) {
    document.body.innerHTML = "<h1>No quiz available for this subcategory</h1>";
    return;
  }

  // Loop through each quiz question and dynamically create the quiz interface
  quizData[category][subcategory].forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionLabel = document.createElement("label");
    questionLabel.innerHTML = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionLabel);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    q.options.forEach((option, optionIndex) => {
      const optionLabel = document.createElement("label");

      const optionInput = document.createElement("input");
      optionInput.type = "radio";
      optionInput.name = `question-${index}`;
      optionInput.value = optionIndex;

      optionInput.addEventListener("change", () => {
        const inputs = optionsDiv.querySelectorAll('input[type="radio"]');
        inputs.forEach((input) => {
          const label = input.parentElement;
          const feedback = label.querySelector(".feedback");
          if (feedback) feedback.remove();
          label.style.border = "";
        });

        const feedbackIcon = document.createElement("span");
        feedbackIcon.classList.add("feedback");
        feedbackIcon.style.marginLeft = "10px";
        const label = optionInput.parentElement;

        if (parseInt(optionInput.value) === q.answer) {
          label.style.backgroundColor = "green";
          label.style.color = "white";
          label.style.border = "3px solid green";
          inputs.forEach((input) => (input.disabled = true));
        } else {
          label.style.backgroundColor = "red";
          label.style.color = "white";
          label.style.border = "3px solid red";
          optionInput.disabled = true;

          inputs.forEach((input) => {
            if (parseInt(input.value) === q.answer) {
              const correctLabel = input.parentElement;
              correctLabel.style.backgroundColor = "green";
              correctLabel.style.color = "white";
              correctLabel.style.border = "2px solid green";
            }
          });

          inputs.forEach((input) => (input.disabled = true));
        }

        label.appendChild(feedbackIcon);
      });

      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));
      optionsDiv.appendChild(optionLabel);
    });

    questionDiv.appendChild(optionsDiv);
    questionDiv.style.borderBottom = "1px solid black";
    questionDiv.style.paddingBottom = "10px";
    questionDiv.style.marginBottom = "20px";
    questionsDiv.appendChild(questionDiv);
  });

  quizContainer.classList.remove("hidden");
}

function submitQuiz() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const subcategory = params.get("subcategory");

  if (!quizData[category] || !quizData[category][subcategory]) {
    alert("No quiz data found for the selected category and subcategory.");
    return;
  }

  const totalQuestions = quizData[category][subcategory].length;
  let score = 0;

  quizData[category][subcategory].forEach((q, index) => {
    const selectedOption = document.querySelector(
      `input[name="question-${index}"]:checked`
    );
    if (selectedOption && parseInt(selectedOption.value) === q.answer) {
      score++;
    }
  });

  const quizEndTime = new Date().getTime(); // Calculate end time
  const timeTaken = Math.floor((quizEndTime - quizStartTime) / 1000); // Time in seconds

  window.location.href = `result.html?score=${score}&total=${totalQuestions}&time=${timeTaken}`;
}

// Function to handle result page URL and display the score
function displayResult() {
  const urlParams = new URLSearchParams(window.location.search);
  const score = urlParams.get("score");
  const total = urlParams.get("total");

  if (score !== null && total !== null) {
    document.getElementById(
      "result"
    ).innerText = `You scored ${score} out of ${total}`;
  } else {
    document.getElementById("result").innerText = "No score available.";
  }
}
