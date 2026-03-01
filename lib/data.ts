export type Tag = "AI" | "IoT" | "Robotics" | "ML" | "CV" | "NLP" | "Embedded" | "Cloud" | "Prompt Engineering" | "Web Development" | "OSDC"

export interface Project {
    id: string
    title: string
    description: string
    tags: Tag[]
    image: string
    detailImage?: string
    category: "projects" | "ideas"
    demoVideo?: string
    demoPdf?: string
    code?: string
    futureScope?: string[]
    materials?: string[]
    challenges?: string[]
    year: string
    github: string
}

export interface Hackathon extends Omit<Project, "category"> {
    certificate: string
}

export interface Certification {
    id: string
    title: string
    issuer: string
    year: string
    credentialUrl?: string
    image?: string
}

export const certifications: Certification[] = [
    {
        id: "cert-emb",
        title: "Embedded Systems for Beginners",
        issuer: "NIELIT",
        year: "2026",
        credentialUrl: "#",
        image: "/images/certificates/emb_nielit.png",
    },
    {
        id: "cert-emb-simpli",
        title: "Embedded Systems Course ",
        issuer: "SimpliLearn",
        year: "2026",
        credentialUrl: "#",
        image: "/images/certificates/emb_simpli.jpg",
    },
    {
        id: "cert-unlox-iot",
        title: "IoT and Robotics",
        issuer: "Unlox",
        year: "2025",
        credentialUrl: "#",
        image: "/images/certificates/program.jpg",
    },
    {
        id: "cert-unlox-internship",
        title: "Internship Completion",
        issuer: "Unlox - Unibotix",
        year: "2025",
        credentialUrl: "#",
        image: "/images/certificates/program_i.jpg",
    },
    {
        id: "cert-workshop",
        title: "Workshop on Agentic AI",
        issuer: "IEEE-JIIT",
        year: "2025",
        credentialUrl: "#",
        image: "/images/certificates/ai.jpeg",
    },
    {
        id: "cert-competition",
        title: "Aicade Game Development Challenge",
        issuer: "Aicade",
        year: "2025",
        credentialUrl: "#",
        image: "/images/certificates/game.jpeg",
    },
    {
        id: "cert-internship",
        title: "Data Analytics Internship",
        issuer: "Finsentsis",
        year: "2026",
        credentialUrl: "#",
        image: "/images/certificates/ff.png",
    },

]

export const projects: Project[] = [
    {
        id: "Autmatic Light Control System",
        title: "Smart RGB LED System using ESP32",
        description: "The Advanced Smart RGB LED System is an intelligent lighting system built using an ESP32 microcontroller that automatically controls a light based on environmental conditions. It uses a PIR motion sensor to detect motion and an LDR light sensor to check ambient brightness. When motion is detected in a dark environment, the system switches ON a light via a relay and uses an RGB LED to indicate system status through different colors",
        tags: ["Embedded", "IoT"],
        image: "/images/s3.png",
        detailImage: "/images/pro/ll.png",
        category: "projects",
        year: "2026",
        github: "https://github.com/mm-black65/Advanced-Smart-RGB-LED-System-using-ESP32.git",
        demoVideo: "/images/pro/light.mp4",
        futureScope: ["Wi-Fi Control & Web Interface : allow users to control the lights and view sensor status via a web dashboard hosted on the ESP32.", "Mobile App Integration : build a mobile app (e.g., using Blynk or Flutter) to remotely control and monitor the lighting system.", "Energy Consumption Monitoring : add a current sensor (like ACS712) to measure actual power used and optimize energy efficiency", "Manual Override & Smart Schedules : add physical buttons or scheduling features to override automatic behavior or set customized on/off times."],
        materials: ["ESP32 Dev Module", "PIR Motion Sensor", "LDR Light Sensor", "4-Pin RGB LED (Common Cathode)", "2-Channel Relay Module", "Resistors", "Breadboard & Jumper Wires"],
        challenges: ["Sensor Calibration & Accuracy ", "Power Management", "Debouncing Motion Detection"],
    },
    {
        id: "smart-trash-bin",
        title: "Smart Trash Bin",
        description: "An automatic smart trash bin built with Arduino that opens the lid when a hand is detected using an ultrasonic sensor, displays status on an OLED screen, and plays a short Mario tune via a buzzer. The lid then closes after a delay, making garbage disposal touchless and fun.",
        tags: ["IoT", "Embedded"],
        image: "/images/s6.png",
        detailImage: "/images/pro/stp.jpeg",
        category: "projects",
        year: "2026",
        github: "https://github.com/mm-black65/Smart-Trash-Bin.git",
        demoVideo: "/images/pro/st.mp4",
        futureScope: ["Add garbage fullness detection using an ultrasonic level sensor", "Send “Bin Full” alerts to a mobile app or cloud dashboard.", "Make it battery powered and portable.", "Integrate IoT monitoring with Wi-Fi.", "Add segregation or sorting features (recyclables vs normal trash)."],
        materials: ["Arduino Uno", "Ultrasonic Sensor (HC-SR04)", "Servo Motor", "Buzzer", "OLED Display (SSD1306 I2C)", "Breadboard & jumper wires"],
        challenges: ["Accurate hand detection (adjusting distance threshold).", "OLED integration and screen refresh control."],
    },
    {
        id: "smart-house",
        title: "HomeGuardX",
        description: "HomeGuardX is an IoT-based smart home automation and security ecosystem built using ESP32. It integrates temperature control, smart lighting, intrusion detection, door automation, and security mode management to simulate real-world smart home systems",
        tags: ["IoT", "ML", "Cloud", "Embedded"],
        image: "/images/s1.png",
        detailImage: "/images/pro/hxp.jpeg",
        category: "projects",
        demoPdf: "https://example.com/rescue-robot-presentation.pdf",
        year: "2025",
        github: "https://github.com/mm-black65/HOMEGUARDX.git",
        demoVideo: "/images/pro/hx.mp4",
        futureScope: ["Add IoT Cloud Connectivity.", "Mobile App Control : Enable smartphone control of lights, modes, and sensors.", "Smart Alerts & Logs", "Expand Security Features : Add camera module and automated alarms."],
        materials: ["ESP32", "Temperature Sensor (analog/thermistor)", "LDR (Light Dependent Resistor)", "IR Motion Sensor", "Servo Motor", "LEDs & Buzzer", "Arduino IDE / Wokwi Simulator"],
        challenges: ["Sensor Integration:Reading and combining data from temperature, light, and motion sensors reliably in one loop", "Non-blocking Logic", "Simulating Real-World Responses"],
    },
    {
        id: "agentic-ai",
        title: "Hackmate(Workshop Project)",
        description: "Hackmate is a Python-based AI project focused on building a multi-agent AI system (a group of AI agents that coordinate to perform tasks). The codebase includes different agents and tools that work together in an agentic architecture, enabling autonomous task execution and coordination — useful for AI workflows, automation, and intelligent decision-making.",
        tags: ["Robotics", "AI", "Embedded"],
        image: "/images/s2.png",
        detailImage: "/images/pro/ha.jpeg",
        category: "projects",
        year: "2025",
        github: "https://github.com/mm-black65/TechBlocks_agentic_ai_MP.git",
        futureScope: ["Add More Specialized Agents :, Include task-specific agents (e.g., data processing, analytics, automation).", "Web UI / Dashboard"],
        materials: [],
        challenges: ["Coordinating Multiple Agents", "Tool & API Integration", "Error Handling Across Agents"],
    },

]

export const hackathons: Hackathon[] = [
    {
        id: "hack-your-campus",
        title: "CampusVerse - Your Campus Partner ",
        description: "24-hour hackathon project: A comprehensive campus management system designed to streamline administrative tasks, enhance student engagement, and provide real-time campus information.",
        tags: ["Prompt Engineering", "CV", "AI", "OSDC"],
        image: "/images/hack/cc.png",
        year: "2025",
        github: "https://github.com/mm-black65/campusverse1.0.git",
        certificate: "/images/hack/cc.png",
        demoVideo: "/images/hack/x.mp4",
        futureScope: ["Full Backend & Database Integration", "Real-Time Communication System", "Study Resource & File Sharing Module", "Mobile App Development", "AI-Based Smart Features"],
        challenges: ["24-hour time constraint", "Real time location tracking", "Databse integration"],
    },
    {
        id: "hack-air-quality",
        title: "HeyBuddy AI!",
        description: "HeyBuddy!! AI is an innovative eco-friendly application designed to help users measure, track, and reduce their daily carbon emissions. The app analyzes lifestyle activities such as transportation, energy usage, and consumption habits, then provides personalized suggestions to promote sustainable living",
        tags: ["IoT", "ML", "Cloud"],
        image: "/images/hack/buh.png",
        year: "2026",
        github: "https://github.com/mmblack65/treehacks-airguard",
        demoPdf: "/images/hack/hey.pptx",
        certificate: "/images/hack/bu.png",
        futureScope: ["Real-time carbon tracking using IoT integration", "Integration with smart devices & wearables", "Government or NGO collaboration for sustainability programs"],
        materials: [],
        challenges: [],
    },
    {
        id: "buddyai",
        title: "OkOkay AI",
        description: "OkOkay AI is an AI-powered assistant designed to improve access to opportunities, information, and public resources. It acts as a smart guide that helps users discover scholarships, jobs, government schemes, and community services in a simple and personalized way.",
        tags: ["AI", "ML", "Web Development", "Cloud"],
        image: "/images/hack/ok.png",
        year: "2026",
        github: "https://github.com/mm-black65/OkOkay-AI.git",
        demoPdf: "/images/hack/ppt.pptx",
        certificate: "/images/hack/ok.png",
        futureScope: ["Add multilingual support for wider reach", "Mobile app version with push notifications", "Integration with government databases", "AI-based recommendation engine", "Real-time chatbot with voice assistant"],
        materials: [],
        challenges: [],
    },
    {
        id: "zephyr_ai",
        title: "Zephyr AI",
        description: "Zephyr AI : Your AirPal is an AI-powered air quality assistance platform designed to provide personalized environmental insights rather than only city-wide pollution statistics. Traditional AQI systems show generalized data, but Zephyr AI focuses on how air quality affects individuals based on their location, health sensitivity, and daily activities.",
        tags: ["AI", "ML", "Web Development", "Cloud", "Prompt Engineering"],
        image: "/images/hack/zz.png",
        year: "2026",
        github: "https://github.com/mm-black65/OkOkay-AI.git",
        demoPdf: "/images/hack/Ppt.pdf",
        demoVideo: "/images/hack/z1.mp4",
        certificate: "/images/hack/ok.png",
        futureScope: ["AI Health Personalization:Integrate wearable devices (smartwatch, fitness trackers).", "Predictive Pollution Forecasting", "IoT Sensor Network:Deploy low-cost air quality sensors for hyperlocal data.", "AI-based recommendation engine", "Real-time chatbot with voice assistant"],
        materials: [],
        challenges: ["Data Accuracy & Availability:AQI data may vary between sources.", "Real-Time Processing : Handling continuous environmental data streams requires efficient backend systems.", "Prediction Reliability:Weather and pollution patterns are highly dynamic.", "User Privacy & Security:Location and health-related data must be securely handled."],
    },
]

export const skills = [
    {
        category: "Languages",
        items: ["Python", "C++", "C", "MySQL", "HTML/CSS", "Numpy", "Pandas", "Matplotlib"],
    },
    {
        category: "AI / ML",
        items: ["scikit-learn"],
    },
    {
        category: "Robotics",
        items: ["Arduino", "Sensors", "ESP32", "Actuators"],
    },
    {
        category: "Tools",
        items: ["Git", "Github", "AutoCad", "Wokwi", "Fusion 360", "TinckerCad"],
    },
]
