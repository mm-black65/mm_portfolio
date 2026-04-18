export type Tag = "AI" | "IoT" | "Robotics" | "ML" | "CV" | "NLP" | "Embedded" | "Cloud" | "Prompt Engineering" | "Web Development" | "OSDC" | "Mini Project" | "Data Science"

export interface Project {
    id: string
    title: string
    overview?: string
    description: string
    tags: Tag[]
    image: string
    detailImage?: string
    category: "projects" | "ideas" | "mini project"
    demoVideo?: string
    demoPdf?: string
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
        id: "cert-completion",
        title: "Machine Learning using Python",
        issuer: "NIELIT",
        year: "2026",
        credentialUrl: "#",
        image: "/images/certificates/ML.png",
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
        title: "Data Science Internship",
        issuer: "Finsentsis",
        year: "2026",
        credentialUrl: "#",
        image: "/images/certificates/ff.png",
    },


]

export const projects: Project[] = [
    {
        id: "ml-wine",
        title: "Wine Classification using Machine Learning (SVM Focus)",
        overview: " A machine learning project that classifies wine types based on chemical properties using Support Vector Machines (SVM) and other algorithms, with an interactive Streamlit application for real-time predictions.",
        description: "Developed a machine learning-based wine classification system using multiple algorithms including SVM, with hyperparameter tuning and cross-validation. Built an interactive Streamlit application for real-time predictions, demonstrating end-to-end ML workflow from model training to deployment.",
        tags: ["Data Science", "ML", "Mini Project"],
        image: "/images//pro/wine.png",
        detailImage: "/images/pro/wine-1.png",
        category: "mini project",
        year: "2026",
        github: "https://github.com/mm-black65/Wine-Classification-using-Machine-Learning.git",
        demoVideo: "https://youtu.be/KyXRK43HZhQ",
        futureScope: ["Use advanced models (Random Forest, Boosting)", "Improve visualization", "Deploy model as web app","Use real-world datasets"],
        materials: ["Python programming", "Jupyter Notebook", "Joblib", "Streamlit", "Scikit-learn library", "NumPy and Pandas"],
        challenges: ["Model selection ", "Hyperparameter tuning", "Scaling requirement  ","Understanding cross-validation workflow"],
    },
     {
        id: "ml-cluster",
        title: "Customer Segmentation using K-Means Clustering",
        overview: "A machine learning project that segments customers into distinct groups using K-Means clustering algorithm to identify patterns in customer data for targeted marketing and personalized strategies.",
        description: "This project implements customer segmentation using the K-Means clustering algorithm in Python. It analyzes customer datasets to group similar customers based on key features such as purchase history, demographics, spending patterns, and behavioral data. The implementation includes comprehensive data preprocessing, feature scaling, optimal cluster determination using the elbow method, model training and evaluation, and interactive visualizations of the resulting customer segments. or data manipulation, matplotlib and seaborn for data visualization",
        tags: ["Data Science", "ML", "Mini Project"],
        image: "/images//pro/market-1.jpg",
        detailImage: "/images/pro/market.png",
        category: "mini project",
        year: "2026",
        github: "https://github.com/mm-black65/Customer-Segmentation-.git",
        demoVideo: "https://youtu.be/vIbZTGPx4tg",
        futureScope: ["Use advanced clustering algorithms (DBSCAN, Hierarchical)", "Improve visualization with interactive dashboards", "Apply on real-world business datasets"],
        materials: ["Python programming", "Jupyter Notebook", "Joblib", "Streamlit", "Scikit-learn library", "NumPy and Pandas"],
        challenges: ["Selecting optimal number of clusters", "Interpreting cluster results meaningfully", "Handling non-numeric data during analysis","Understanding unsupervised learning workflow"],
    },
        {
        id: "ml-iris",
        title: "Iris Flower Classifier",
        overview: "A machine learning classifier for Iris flower species using sepal and petal measurements, with comparative algorithm analysis and Streamlit web interface.",
        description: "This project implements a machine learning classification system for Iris flower species identification. It includes exploratory data analysis and visualization of feature relationships in the dataset. Multiple algorithms are implemented and evaluated, including KNN, Logistic Regression, and Decision Trees, with hyperparameter tuning for optimal performance. The system features a real-time web application built with Streamlit for user input and predictions. Technologies used include Python, scikit-learn, NumPy, Pandas, and Jupyter Notebook.",
        tags: ["ML", "Data Science", "Mini Project"],
        image: "/images/pro/iris-s.jpg",
        detailImage: "/images/pro/iris.png",
        category: "mini project",
        year: "2026",
        github: "https://github.com/mm-black65/Iris-Flower-Classification.git",
        demoVideo: "https://youtu.be/gQgAbTLBQ40",
        futureScope: ["Improve model performance by using advanced algorithms such as Random Forest and Support Vector Machines.", "Implement automated model selection based on performance metrics.","Enhance the user interface of the application for a more interactive and visually appealing experience.","Deploy the application on cloud platforms to make it accessible online."],
        materials: ["Python programming", "Jupyter Notebook", "Joblib", "Streamlit", "Scikit-learn library", "NumPy and Pandas"],
        challenges: ["Classification Accuracy", "Overfitting", "Improper hyperparameter tuning","Notebook app integration"],
    },
     {
        id: "iot",
        title: "Arduino Radar System with Obstacle Alert",
        overview: " An Arduino-based radar system that uses an ultrasonic sensor and servo motor to scan surroundings and detect objects. It provides real-time visual feedback with distance-based alerts.",
        description: "This project simulates a radar by rotating an ultrasonic sensor to measure distances at different angles. Detected objects are displayed on a radar-style interface, with distance shown dynamically and highlighted when objects are close, demonstrating concepts of embedded systems, sensing, and real-time visualization.",
        tags: ["Embedded", "IoT", "Mini Project"],
        image: "/images/pro/rad.png",
        detailImage: "/images/pro/rada.png",
        category: "mini project",
        year: "2026",
        github: "https://github.com/mm-black65/-Arduino-Radar-System-with-Obstacle-Alert.git",
        demoVideo: "https://youtu.be/qLoQKdYl8-k",
        futureScope: ["Add OLED display for live distance visualization", "Create radar GUI using Processing.", "Integrate AI for object recognition", " Expand to full 360° scanning using multiple sensors"],
        materials: ["Arduino Uno", "Ultrasonic Sensor (HC-SR04)", "Servo Motor (SG90)", "LED", "Buzzer", "Breadboard & Jumper Wires"],
        challenges: ["Serial Communication Issues: ", "Data Parsing Errors", "Real-Time Synchronization","Hardware Limitations"],
    },
    {
        id: "Autmatic Light Control System",
        title: "Smart RGB LED System using ESP32",
        overview: "A motion- and light-aware IoT lighting system that adjusts illumination automatically and provides status through RGB feedback.",
        description: "A compact ESP32-based lighting solution that responds to both movement and ambient brightness. The system uses a PIR sensor to detect motion and an LDR sensor to measure light levels, then controls a relay and RGB LED output based on those conditions. It is designed to activate lighting only when necessary and to indicate system state clearly using color feedback.",
        tags: ["Embedded", "IoT", "Mini Project"],
        image: "/images/s3.png",
        detailImage: "/images/pro/ll.png",
        category: "mini project",
        year: "2026",
        github: "https://github.com/mm-black65/Advanced-Smart-RGB-LED-System-using-ESP32.git",
        demoVideo: "https://youtube.com/shorts/ZYl1fGeHEUk?feature=share",
        futureScope: ["Wi-Fi Control & Web Interface : allow users to control the lights and view sensor status via a web dashboard hosted on the ESP32.", "Mobile App Integration : build a mobile app (e.g., using Blynk or Flutter) to remotely control and monitor the lighting system.", "Energy Consumption Monitoring : add a current sensor (like ACS712) to measure actual power used and optimize energy efficiency", "Manual Override & Smart Schedules : add physical buttons or scheduling features to override automatic behavior or set customized on/off times."],
        materials: ["ESP32 Dev Module", "PIR Motion Sensor", "LDR Light Sensor", "4-Pin RGB LED (Common Cathode)", "2-Channel Relay Module", "Resistors", "Breadboard & Jumper Wires"],
        challenges: ["Sensor Calibration & Accuracy ", "Power Management", "Debouncing Motion Detection"],
    },
    {
        id: "smart-trash-bin",
        title: "Smart Trash Bin",
        overview: "An Arduino-based smart trash bin with ultrasonic sensing, OLED display, and audio feedback for touchless operation.",
        description: "This project creates an automatic smart trash bin using Arduino. It features ultrasonic sensor for hand detection to open the lid automatically, OLED display for status information, and buzzer for audio feedback including Mario tunes. The lid closes after a set delay. Hardware includes Arduino Uno, Ultrasonic Sensor (HC-SR04), Servo Motor, Buzzer, and OLED Display (SSD1306 I2C).",
        tags: ["IoT", "Embedded", "Mini Project"],
        image: "/images/s6.png",
        detailImage: "/images/pro/stp.jpeg",
        category: "mini project",
        year: "2026",
        github: "https://github.com/mm-black65/Smart-Trash-Bin.git",
        demoVideo: "https://youtube.com/shorts/47OPjZ_f15A?feature=share",
        futureScope: ["Add garbage fullness detection using an ultrasonic level sensor", "Send “Bin Full” alerts to a mobile app or cloud dashboard.", "Make it battery powered and portable.", "Integrate IoT monitoring with Wi-Fi.", "Add segregation or sorting features (recyclables vs normal trash)."],
        materials: ["Arduino Uno", "Ultrasonic Sensor (HC-SR04)", "Servo Motor", "Buzzer", "OLED Display (SSD1306 I2C)", "Breadboard & jumper wires"],
        challenges: ["Accurate hand detection (adjusting distance threshold).", "OLED integration and screen refresh control."],
    },
    {
        id: "smart-house",
        title: "HomeGuardX",
        overview: "An IoT smart home ecosystem with ESP32, featuring security, automation, and environmental controls.",
        description: "HomeGuardX is an IoT-based smart home platform built with ESP32 microcontroller. It includes temperature control, smart lighting, intrusion detection, door automation, and security mode management. The system integrates multiple sensors including temperature sensor, LDR, IR motion sensor, and servo motor for door control. Additional components are LEDs and buzzer for alerts. Developed using Arduino IDE and Wokwi Simulator.",
        tags: ["IoT", "ML", "Cloud", "Embedded"],
        image: "/images/s1.png",
        detailImage: "/images/pro/hxp.jpeg",
        category: "projects",
        year: "2025",
        github: "https://github.com/mm-black65/HOMEGUARDX.git",
        demoVideo: "https://youtu.be/BAZMuHU15cI",
        futureScope: ["Add IoT Cloud Connectivity.", "Mobile App Control : Enable smartphone control of lights, modes, and sensors.", "Smart Alerts & Logs", "Expand Security Features : Add camera module and automated alarms."],
        materials: ["ESP32", "Temperature Sensor (analog/thermistor)", "LDR (Light Dependent Resistor)", "IR Motion Sensor", "Servo Motor", "LEDs & Buzzer", "Arduino IDE / Wokwi Simulator"],
        challenges: ["Sensor Integration:Reading and combining data from temperature, light, and motion sensors reliably in one loop", "Non-blocking Logic", "Simulating Real-World Responses"],
    },
    {
        id: "agentic-ai",
        title: "Hackmate(Workshop Project)",
        overview: "A Python-based multi-agent AI system for autonomous task execution and coordination.",
        description: "Hackmate is a Python project that implements a multi-agent AI system. It features coordinated AI agents that work together to perform tasks autonomously. The system includes various agents and tools designed for AI workflows, automation, and intelligent decision-making. Built as part of a workshop project.",
        tags: ["Robotics", "AI", "Mini Project"],
        image: "/images/s2.png",
        detailImage: "/images/pro/ha.jpeg",
        category: "mini project",
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
        overview: "A 24-hour hackathon project creating a comprehensive campus management system with AI and CV integration.",
        description: "CampusVerse is a campus management system developed during a 24-hour hackathon. It streamlines administrative tasks, enhances student engagement, and provides real-time campus information. The project incorporates prompt engineering, computer vision, AI, and OSDC technologies. Features include real-time location tracking and communication systems. Built with a focus on scalability and user experience.",
        tags: ["Prompt Engineering", "AI", "OSDC"],
        image: "/images/hack/cc.png",
        year: "2025",
        github: "https://github.com/mm-black65/campusverse1.0.git",
        certificate: "/images/hack/campverse.jpg",
        demoVideo: "https://youtu.be/E8Pvxu5El7c",
        futureScope: ["Full Backend & Database Integration", "Real-Time Communication System", "Study Resource & File Sharing Module", "Mobile App Development", "AI-Based Smart Features"],
        challenges: ["24-hour time constraint", "Real time location tracking", "Databse integration"],
    },
    {
        id: "hack-air-quality",
        title: "HeyBuddy AI!",
        overview: "An eco-friendly application for measuring, tracking, and reducing daily carbon emissions with personalized recommendations.",
        description: "HeyBuddy AI is an application designed to help users track and reduce their carbon footprint. It analyzes lifestyle activities including transportation, energy usage, and consumption habits to provide personalized suggestions for sustainable living. The app combines IoT, machine learning, and cloud technologies to deliver actionable environmental insights.",
        tags: ["ML", "Cloud"],
        image: "/images/hack/buh.png",
        year: "2026",
        github: "https://github.com/mmblack65/treehacks-airguard",
        demoPdf: "https://docs.google.com/presentation/d/1c2P8-7wkuq7n77s_Ft0CsDgIehGJmVE_/edit?usp=drive_link&ouid=100563965810713043135&rtpof=true&sd=true",
        certificate: "/images/hack/carrer.jpeg",
        futureScope: ["Real-time carbon tracking using IoT integration", "Integration with smart devices & wearables", "Government or NGO collaboration for sustainability programs"],
        materials: [],
        challenges: [],
    },
    {
        id: "buddyai",
        title: "OkOkay AI",
        overview: "An AI-powered assistant for accessing opportunities, information, and public resources through personalized recommendations.",
        description: "OkOkay AI is an AI-powered assistant that helps users discover scholarships, jobs, government schemes, and community services. It provides personalized guidance and recommendations based on user needs. The platform features web development, AI integration, and cloud technologies for a seamless user experience.",
        tags: ["AI", "ML", "Web Development", "Cloud"],
        image: "/images/hack/ok.png",
        year: "2026",
        github: "https://github.com/mm-black65/OkOkay-AI.git",
        demoPdf: "https://docs.google.com/presentation/d/12T1BtRW8OztE9GkYS21Vj112hmQjJr9l/edit?usp=drive_link&ouid=100563965810713043135&rtpof=true&sd=true",
        certificate: "/images/hack/ok.png",
        futureScope: ["Add multilingual support for wider reach", "Mobile app version with push notifications", "Integration with government databases", "AI-based recommendation engine", "Real-time chatbot with voice assistant"],
        materials: [],
        challenges: [],
    },
    {
        id: "zephyr_ai",
        title: "Zephyr AI",
        overview: "An AI-powered air quality platform providing personalized environmental insights based on location and health factors.",
        description: "Zephyr AI is an air quality assistance platform that offers personalized environmental insights beyond traditional city-wide AQI statistics. It considers individual location, health sensitivity, and daily activities to provide relevant air quality information. The platform integrates AI, machine learning, web development, and cloud technologies for comprehensive environmental monitoring and user guidance.",
        tags: ["AI", "ML", "Web Development", "Cloud", "Prompt Engineering"],
        image: "/images/hack/zz.png",
        year: "2026",
        github: "https://github.com/mm-black65/zephyr-health.git",
        demoPdf: "https://docs.google.com/presentation/d/19ZTVPp83AfGkjZ4D8pf98OgHJRJqURY6/edit?usp=drive_link&ouid=100563965810713043135&rtpof=true&sd=true",
        demoVideo: "https://youtube.com/shorts/ESMuJbYf6rA?feature=share",
        certificate: "/images/hack/cdh.jpeg",
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
