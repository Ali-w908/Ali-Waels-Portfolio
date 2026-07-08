export const portfolioData = {
  personalInfo: {
    name: "Ali Wael Mohamed Ali",
    title: "Mechatronics Engineer",
    phone: "+201011050393",
    email: "aliwael908@gmail.com",
    linkedin: "linkedin.com/in/ali-wael908",
    github: "github.com/Ali-W908",
    summary: "Passionate about bridging the gap between hardware and software. Dedicated to clean architecture, high performance, and continuous learning. Bringing a deep curiosity and a strong technical foundation in embedded systems, Linux, robotics, automation, and machine learning to build robust physical and digital systems."
  },

  projects: [
    {
      id: "bvm-ventilator",
      title: "ML Enhanced BVM Smart Emergency Ventilator",
      role: "Cross-Functional Team Lead",
      date: "Feb 2026 – Jun 2026",
      association: "Cairo University — Graduation Project",
      description: "A Machine Learning enhanced smart emergency ventilator, built to provide overworked ICU medical staff with consistent, safe, and intelligent ventilation. Provides PCV, VCV, and Assist Control modes with real-time waveform display and ML-driven breath classification.",
      theAsk: "Automate a standard BVM to serve as a low-cost emergency ventilator, integrating ML to classify patient breath types and provide critical insights to medical staff.",
      theResult: "Developed an autonomous emergency BVM ventilator providing consistent ventilation, smart alarm systems, real-time waveforms, and ML-driven breath analysis — a complete safety-critical embedded system.",
      contributions: [
        "Developed robust FSM ventilation firmware in Embedded C/C++ managing real-time sensor calibration, hardware protection, and serial communication.",
        "Conducted electrical calculations, analysis, and assembled all electrical components with safe, stable wiring.",
        "Implemented advanced S-Curve motion profiling for stepper motors ensuring jerk-free operation.",
        "Designed signal conditioning for MPX5010DP and BMP280 sensors using ADC oversampling and EMA filters.",
        "Directed the team across mechanical, electrical, software, and medical domains using Agile methodology."
      ],
      techStack: ["Embedded C/C++", "Machine Learning", "Raspberry Pi", "Arduino", "S-Curve Motion Profiling", "DSP Filters", "I2C", "SSH"],
      skills: ["Embedded C/C++", "Machine Learning", "Motor Control", "DSP", "Medical Devices", "Team Leadership"],
      repo: "https://github.com/Smart-E-Vent-26/Smart-E-Vent-Software",
      image: "/media/smart-E-Vent-preview.jpeg"
    },
    {
      id: "museum-guide",
      customLayout: "museum-guide",
      title: "Autonomous Museum Guide Robot",
      role: "Systems Architect",
      date: "Feb 2025 – May 2025",
      association: "Cairo University",
      description: "Designed and deployed an indoor autonomous navigation system using ROS, integrating motor control, visual tracking, and an interactive tour guide with YOLOv11 artifact detection and TTS.",
      theAsk: "Build an autonomous indoor platform capable of real-time teleoperation, visual obstacle detection, and guided navigation through a dynamic museum environment.",
      theResult: "Successfully integrated a distributed ROS architecture, overcoming camera processing lag and YOLO misclassifications to achieve robust, real-time autonomous navigation and object detection.",
      architecture: "An ESP32 node handles low-level hardware control, subscribing to /cmd_vel and publishing /odom using encoder and IMU feedback. A Python navigation node processes kinematics, while a parallel vision thread runs OpenCV and YOLO for real-time object detection and ArUco marker processing.",
      techStack: ["ROS", "Python", "YOLOv11", "OpenCV", "ESP32", "SolidWorks", "TTS"],
      skills: ["ROS", "Python", "YOLO Object Detection", "OpenCV", "ESP32", "SolidWorks"],
      repo: "",
      image: "/media/Autonomous-Ros-Based-Robot-preview.jpeg"
    },
    {
      id: "embedded-linux-2025",
      title: "Custom Embedded Linux OS for EZvent Ventilator",
      role: "Embedded Linux Engineer",
      date: "Aug 2025 – Sep 2025",
      association: "Ezzmedical Industries",
      linkedExperience: "ezzmedical-2025",
      description: "Engineered a specialized custom Linux operating system from scratch for Raspberry Pi 4, seamlessly integrated with Qt 6.8.4, designed for Ezzmedical's unconditionally approved medical ventilator device.",
      theAsk: "Build a highly dependable embedded OS foundation for a life-saving medical ventilator, ensuring rapid boot times, robust application integration, and security compliance readiness.",
      theResult: "Delivered a production-ready custom Linux OS with Qt 6.8.4 integration, custom systemd services, CAN bus setup, splash screens, and successful migration from Yocto Kirkstone to Scarthgap (5.0.10).",
      contributions: [
        "Built and configured Yocto meta layers (meta-qt6, meta-raspberrypi, meta-openembedded, meta-boot2qt) for Raspberry Pi 4.",
        "Integrated the Qt ventilator application with full functionality including Screenshot Utility, OpenGL, EGLFS, SQLite, and Audio Support.",
        "Wrote systemd services for auto-launch, CAN bus setup, splash screen, and system configurations.",
        "Migrated the entire system from Kirkstone to Scarthgap, updating recipes and ensuring Qt 6.8.4 compatibility.",
        "Researched and prepared secure boot, user monitoring, and system hardening for medical regulatory certifications."
      ],
      techStack: ["Yocto Project", "BitBake", "Embedded Linux", "Qt 6.8.4", "Raspberry Pi 4", "systemd", "CAN Bus"],
      skills: ["Embedded Linux", "Yocto Project", "BitBake", "Linux customization", "U-Boot", "Qt"],
      repo: "",
      image: "/media/Ezzmedical-Embedded-Linux-2025intern.png",
      recommendation: {
        name: "Eng. Mohamed Elshaikh",
        title: "Software Engineering Senior Manager @ EzzMedical",
        text: "I highly recommend Ali for their strong contributions as an Embedded Linux Engineer intern at EzzMedical. They quickly adapted to complex tasks, showed excellent problem-solving skills, and worked with professionalism and dedication throughout their internship."
      }
    },
    {
      id: "robotic-arm",
      title: "Robotic Arm Trajectory Automation & Teleoperation",
      role: "Control Software Developer",
      date: "Nov 2025 – Dec 2025",
      association: "Cairo University",
      description: "Configured and deployed control software for an advanced 6-DOF collaborative robotic arm (Piper). Bridged hardware CAN Bus protocols with high-level Python control and prototyped real-time teleoperation via smartphone IMU data.",
      theAsk: "Enable high-precision trajectory tracking and remote teleoperation for a 6-DOF robotic arm using smartphone sensors and the Piper SDK.",
      theResult: "Successfully achieved real-time, low-latency teleoperation by extracting IMU data from a smartphone via HTTP requests, dynamically driving the arm's joints in a reactive control system.",
      contributions: [
        "Troubleshot and configured a Linux VM (Ubuntu) environment for secure external hardware communication, solving USB passthrough bottlenecks.",
        "Configured the can0 network interface, managed baud rates, and monitored live telemetry.",
        "Programmed the arm to grip an upright pencil cap and relocate it without tipping — requiring high spatial accuracy.",
        "Extracted real-time IMU data from a smartphone (Phyphox app) via HTTP to dynamically drive the arm's joints."
      ],
      techStack: ["CAN Bus", "Linux", "Python", "Piper SDK", "IMU Integration", "Virtual Machines"],
      skills: ["Robotics", "CAN Bus", "Linux", "Python", "Virtual Machines"],
      repo: "https://github.com/agilexrobotics/piper_sdk",
      repoLabel: "Piper SDK (Open Source)",
      video: "/media/RoboticArm-Teleoperation-previewVid.mp4"
    },
    {
      id: "pick-place-robot",
      title: "Pick-and-Place + Face Mask Detection Robotic Arm",
      role: "Mechatronics Engineer",
      date: "Apr 2026 – May 2026",
      association: "Cairo University",
      description: "Engineered a 4-DOF custom robotic arm with a closed-loop PID-controlled gripper, combining precision pick-and-place with CoppeliaSim-simulated face mask detection using YOLOv8 and OpenCV.",
      theAsk: "Accurately execute robotic pick-and-place on a 6-cube grid while managing actuator power draw and complex spatial trajectories. Separately, simulate face mask detection and robotic handling in CoppeliaSim.",
      theResult: "Achieved reliable, collision-free movement via anti-brownout sequential logic and a custom PID gripper controller. Successfully simulated face mask detection and picking in CoppeliaSim.",
      contributions: [
        "Designed the electrical system with a split-power topology isolating ESP32 logic from servo inrush spikes.",
        "Built a custom DC-motor gripper with potentiometer feedback and closed-loop PID control with deadband thresholds.",
        "Pre-calculated trajectories in MATLAB using Denavit-Hartenberg kinematics.",
        "Implemented anti-brownout sequential logic for safe multi-actuator movement.",
        "Simulated face mask detection in CoppeliaSim with YOLOv8 and OpenCV integration."
      ],
      techStack: ["ESP32", "PID Control", "MATLAB", "D-H Kinematics", "SolidWorks", "CoppeliaSim", "YOLOv8", "OpenCV"],
      skills: ["ESP32", "PID Control", "MATLAB Kinematics", "SolidWorks", "CoppeliaSim", "Computer Vision"],
      repo: "",
      image: "/media/PickPlace-RoboticArm-preview.jpeg",
      media: [
        { type: "image", src: "/media/pick-place/cad-model.png", caption: "CAD Model" },
        { type: "image", src: "/media/pick-place/schematic.png", caption: "Schematic View" },
        { type: "image", src: "/media/pick-place/component-view.png", caption: "Component View" },
        { type: "image", src: "/media/pick-place/custom-gripper.jpeg", caption: "Custom Potentiometer Gripper" },
        { type: "video", src: "/media/PickPlace-SimVideo.mp4", caption: "CoppeliaSim Face Mask Detection" }
      ]
    },
    {
      id: "smartwatch",
      title: "Minimalist Real-Time Smartwatch on STM32",
      role: "Bare-Metal Developer",
      date: "Oct 2024 – Dec 2024",
      association: "Cairo University",
      description: "Developed a minimalist real-time smartwatch using the STM32F103C8T6 (Blue Pill), fully programmed in ARM Assembly. Custom timekeeping algorithm using internal timers — no external RTC or libraries.",
      theAsk: "Build a functional smartwatch interfacing directly with an STM32 and TFT LCD using pure ARM Assembly, without any HAL libraries or external RTCs.",
      theResult: "Achieved manual screen initialization, pixel-perfect rendering, and real-time timekeeping entirely through bare-metal register manipulation and SWD debugging via ST-LINK.",
      techStack: ["ARM Assembly", "STM32F103C8T6", "TFT LCD", "ST-LINK", "SWD", "Keil uVision"],
      skills: ["ARM Assembly", "STM32", "Bare-Metal", "Datasheet Navigation", "Keil uVision"],
      repo: "",
      image: "/media/STM32Assmbly-preview.jpeg"
    },
    {
      id: "solar-tracker",
      title: "Dual-Axis Solar Tracker",
      role: "Mechatronics Engineer",
      date: "Jan 2024 – Feb 2024",
      association: "Cairo University",
      description: "Designed and fabricated an automated dual-axis solar tracking system to maximize energy yield, achieving a 35.7% increase in daily harvested energy compared to a static panel.",
      theAsk: "Design, fabricate, and test an automated mechatronic system to actively maintain perpendicular orientation to the sun.",
      theResult: "Designed a robust, laser-cut interlocking mechanical frame with an intelligent tracking system achieving an estimated 35.7% daily energy increase.",
      techStack: ["Arduino", "SolidWorks", "LDR Sensors", "Servo Control", "Mechatronics"],
      skills: ["Arduino", "SolidWorks", "LDR Sensors", "Servo Control", "Mechatronics"],
      repo: "",
      video: "/media/Dual-Axis-Solar-Panel-Tracker-Project-vid.mp4"
    },
    {
      id: "bottling-simulation",
      title: "PLC Automated Bottling Line",
      role: "PLC Programmer",
      date: "Dec 2024 – Jan 2025",
      association: "Cairo University",
      description: "Programmed Siemens PLCs to simulate a full industrial bottling and capping liquid handling process with automated duty/standby pump switching and SCADA/HMI interface.",
      theAsk: "Design, simulate, and program an industrial liquid handling and filling process with complex state management and safety interlocks.",
      theResult: "Successfully modeled the chemical/filling process with comprehensive LD/SFC code and an intuitive SCADA/HMI interface.",
      techStack: ["Siemens PLCs", "TIA Portal", "SCADA / HMI", "Ladder Logic (LD)"],
      skills: ["Siemens PLCs", "TIA Portal", "SCADA / HMI", "Ladder Logic (LD)"],
      repo: "",
      image: "/media/plc_project_state_diagram.svg"
    },
    {
      id: "embedded-linux-2024",
      title: "Embedded Linux for iMX8mp Ventilator Board",
      role: "Embedded Linux Engineer Intern",
      date: "Aug 2024",
      association: "Ezzmedical Industries",
      linkedExperience: "ezzmedical-2024",
      description: "Built a customized Linux image and toolchain for the deployment of a medical ventilator application on a new iMX8mp board, successfully deploying the application and encouraging the company to invest further in embedded Linux.",
      theAsk: "Build a custom Linux image and cross-compilation toolchain for a newly acquired iMX8mp board, and deploy the medical ventilator application onto it.",
      theResult: "Successfully deployed the ventilator application on the custom-built Linux OS, demonstrating feasibility and inspiring further company investment in embedded Linux technology.",
      contributions: [
        "Built and customized the Linux image following iWave's documentation for the iMX8mp-4g board.",
        "Resolved network connectivity (do_fetch) issues by optimizing network configuration.",
        "Built the SDK cross-compiler and manually configured the Qt Creator kit for the board.",
        "Successfully deployed the ventilator software on the custom OS running on the iMX8mp board."
      ],
      techStack: ["Yocto Project", "Embedded Linux", "Qt Creator", "iMX8mp", "Cross-compilation", "SDK"],
      skills: ["Embedded Linux", "Yocto Project", "Linux customization", "Qt Creator", "Cross-compilation"],
      repo: "",
      image: "/media/Ezzmedical-Embedded-Linux-2024intern.png"
    },
    {
      id: "atm-software",
      title: "Embedded ATM Software on Raspberry Pi",
      role: "Embedded Linux Developer",
      date: "2023",
      association: "IMT Embedded Linux Diploma",
      linkedCertificate: "imt-embedded-linux",
      description: "Developed a full ATM software system on a Raspberry Pi 3B+ with account management, transactions, auto-updating database, and email notifications — all running on a fully customized Linux image built from scratch.",
      theAsk: "Build an ATM system with full account management on a custom Linux image, integrating hardware interaction with Python-based transaction logic.",
      theResult: "Delivered a functional embedded ATM with card-based authentication, withdrawals, deposits, phone recharges, password management, transaction history, and automated email notifications.",
      techStack: ["Raspberry Pi 3B+", "Python", "Embedded Linux", "Linux Customization", "Bootloader", "File Systems"],
      skills: ["Embedded Linux", "Python", "Raspberry Pi", "Linux customization", "Bootloader"],
      repo: "",
      image: "/media/IMTcertificate.jpg"
    }
  ],

  skills: [
    { category: "Programming", items: ["C/C++", "Python", "ARM Assembly", "MATLAB", "Simulink"] },
    { category: "Hardware", items: ["STM32", "ESP32", "Arduino", "Raspberry Pi", "Sensors", "PCB Design"] },
    { category: "Embedded & Protocols", items: ["Embedded Linux", "Yocto", "HAL", "CAN Bus", "I2C", "SPI", "ADC", "PWM"] },
    { category: "Automation", items: ["Siemens PLCs", "TIA Portal", "PID Control", "Kinematics", "Motor Control"] },
    { category: "Software & AI", items: ["ROS", "OpenCV", "YOLOv11", "Git", "Linux", "Qt"] }
  ],

  experience: [
    {
      id: "ezzmedical-2025",
      role: "Embedded Linux Engineer Intern",
      company: "Ezzmedical Industries",
      date: "Aug 2025 – Sep 2025",
      description: "Developed a custom Linux OS for EZvent — Egypt's first unconditionally approved ventilator. Built Yocto images for RPi4, integrated Qt 6.8.4, wrote systemd services, and migrated from Kirkstone to Scarthgap.",
      linkedProject: "embedded-linux-2025"
    },
    {
      id: "diplomacy",
      role: "Trainee",
      company: "Egyptian Youth Diplomacy Program",
      date: "Feb 2025",
      description: "Completed an intensive youth leadership program focusing on international relations, strategic communication, and cross-cultural collaboration.",
      linkedProject: null
    },
    {
      id: "ezdk",
      role: "Level 2 Automation Engineer Intern",
      company: "Al Ezz Dekheila Steel Co. (EZDK)",
      date: "Jul 2024",
      description: "Mapped complex industrial data flows between Level 1 and Level 2 automation. Documented real-time data acquisition strategies for distributed industrial systems.",
      linkedProject: null
    },
    {
      id: "ezzmedical-2024",
      role: "Embedded Linux Intern",
      company: "Ezzmedical Industries",
      date: "Aug 2024",
      description: "Built a customized Linux image and toolchain for deploying the ventilator application on a new iMX8mp board. Resolved critical build challenges and successfully demonstrated feasibility.",
      linkedProject: "embedded-linux-2024"
    }
  ],

  education: {
    degree: "B.Sc. in Mechatronics Engineering",
    school: "Cairo University, Giza, Egypt",
    date: "Graduated: July 2026",
    details: "Relevant Coursework: Control Systems, Automatic Control, Microprocessors, Embedded Systems, Advanced Robotics."
  },

  hobbies: [
    { title: "Calisthenics", description: "Bodyweight training for movement, strength, flexibility and overall wellbeing.", video: "/media/hobbies/calisthenics-pullups.mp4" },
    { title: "Graphic Designing", description: "Visual identity and digital layouts that convey precision and elegance.", image: "/media/hobbies/Portfolio-hero.png" },
    { title: "Tennis", description: "Competitive and recreational play.", images: ["/media/hobbies/FirstTennisCup.jpeg", "/media/hobbies/FirstTennisCup2.jpeg", "/media/hobbies/TennisChampionship.jpeg", "/media/hobbies/TennisShot2.jpeg", "/media/hobbies/Championship.jpeg"] },
    { title: "Drawing & Painting", description: "Creative and artistic side.", images: ["/media/hobbies/Drawing-CryingEyeGirl.jpeg", "/media/hobbies/Drawing-BIGEYES.jpeg", "/media/hobbies/Drawing-Dark-and-light-Waves.jpeg", "/media/hobbies/Drawing-Sad-Happy-Band.jpeg", "/media/hobbies/Drawing-Shadowless-Stand.jpeg", "/media/hobbies/Drawing-Everybody-Stare.jpeg"] }
  ],

  certificates: [
    { id: "imt-embedded-linux", title: "Embedded Linux Course", issuer: "IMT", date: "2023", image: "/media/IMTcertificate.jpg", linkedProject: "atm-software" },
    { id: "delf-b2", title: "DELF B2", issuer: "French Ministry of Education", date: "2021", image: "/media/DELFB2certificate.jpeg" }
  ]
};
