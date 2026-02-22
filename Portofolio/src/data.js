export const projects = [
	// {
	// 	id: 1,
	// 	title: "DineFlow",
	// 	role: "Fullstack Developer",
	// 	techStack: ["Golang", "Next.js", "PostgreSQL", "Tailwind"],
	// 	description:
	// 		"Modern restaurant management ecosystem using a 'Frontend First' approach for a seamless UI and Golang for robust backend operations.",
	// 	link: "#", // Ganti dengan link github/demo
	// },
	{
		id: 1,
		title: "Pollen Mapping System",
		role: "Machine Learning Engineer",
		techStack: ["Flask", "React", "TensorFlow", "SQLAlchemy"],
		description:
			"Collaborated with Ritsumeikan University to build a crowdsourced GIS for pollen allergy tracking. Conducted comprehensive field data collection to build the dataset and trained a MobileNetV2 classification model. Engineered the backend using Flask to integrate the trained model for real-time plant image classification.",
		link: "https://drive.google.com/file/d/1Kkhir0wbve-XaaEL7BiGUD-POHFaA0-6/view?usp=sharing", // Bisa kamu isi dengan link publikasi atau GitHub jika ada
		image: null,
	},
	{
		id: 2,
		title: "Hi-Ponic (Smart Hydroponic)",
		role: "Machine Learning Engineer",
		techStack: ["Python", "TensorFlow", "GCP"],
		description:
			"Engineered the plant disease identification model, specializing in rigorous data cleaning and preprocessing pipelines. Integrated TensorFlow models into the backend for real-time analysis, leading the project to be selected as a Top 50 Capstone Team at Bangkit Academy.",
		link: "https://github.com/HI-PONIC",
		image: null,
	},
	{
		id: 3,
		title: "KRILLIN (Scholarship DSS)",
		role: "Fullstack Developer",
		techStack: ["Laravel", "PHP", "MySQL"],
		description:
			"Architected a Decision Support System implementing the Simple Additive Weighting (SAW) algorithm. Developed both the frontend UI and robust backend logic for dynamic criteria configuration, automated weight calculations, and the final student ranking dashboard.",
		link: "https://github.com/habibfr/Mahasiswa-Berprestasi",
		image: null,
	},
	{
		id: 4,
		title: "Budget Buddy",
		role: "Android Developer",
		techStack: ["Java", "SQL Lite"],
		description:
			"An simple application where user can keep track their financials. This application has feature like add transactions (income and outcome), add the description of transactions, display transaction history, and expense charts. I worked on this project with my team for final exam (UAS) of Mobile Development.",
		link: "https://github.com/habibfr/Budget-Mobile",
		image: null,
	},
];

export const experiences = [
	{
		id: 1,
		title: "IoT Middleware Developer Intern",
		organization: "AdamLabs (Medical Software House)",
		duration: "Jul 2024 – Oct 2024",
		description:
			"Engineered middleware solutions using Python to bridge medical analyzers with LIS backend. Developed data parsing algorithms to convert raw RS-232 serial data into standardized HL7 and ASTM formats, ensuring 100% transmission accuracy.",
	},
];

export const campusExperiences = [
	{
		id: 1,
		title: "Undergraduate Machine Learning Researcher",
		organization: "Universitas Dinamika",
		duration: "2025",
		description:
			"Conducting an academic research study on employee turnover prediction. Developed and evaluated a predictive model utilizing the XGBoost algorithm, effectively handling and preprocessing real-world HR datasets comprising active employees from 2023 and resigned employees from the 2022-2023 period.",
	},
	{
		id: 2,
		title: "Joint-Class Program Participant",
		organization: "Ritsumeikan University & Universitas Dinamika",
		duration: "2025",
		description:
			"Selected for an international academic collaboration program. Co-authored and developed a crowdsourced Geographical Information System (GIS) project named 'A Pollen Mapping System'. Worked closely with cross-border peers to integrate a MobileNetV2 AI model with a Flask backend architecture.",
	},
	{
		id: 3,
		title: "Machine Learning Independent Study",
		organization: "Bangkit Academy (Google, GoTo, Traveloka)",
		duration: "2024",
		description:
			"Integrated TensorFlow ML models into the application backend for real-time plant disease identification and harvest prediction. Selected as a Top 50 Capstone Team for the 'Hi-Ponic' smart hydroponic system.",
	},
];

export const educations = [
	{
		id: 1,
		title: "Bachelor of Information Systems",
		organization: "Universitas Dinamika",
		duration: "2021 – 2025",
		description:
			"GPA: 3.84 / 4.00. Relevant Coursework: Web Programming, Database Systems, Data Structures, Algorithms.",
	},
];

export const certifications = [
	{
		id: 1,
		name: "TensorFlow Developer Professional Certificate",
		issuer: "dev.id",
		link: "https://dev.id/certificate/verify/J7208ODV56",
	},
	{
		id: 2,
		name: "Web Developer Bootcamp",
		issuer: "Udemy",
		link: "https://www.udemy.com/certificate/UC-bc268b07-0134-4bb3-9333-39293270956e/",
	},
];
