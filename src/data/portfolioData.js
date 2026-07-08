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
      id: "museum-guide",
      customLayout: "museum-guide",
      title: "Autonomous Museum Guide Robot",
      role: "Systems Architect",
      date: "Feb 2025 – May 2025",
      description: "Designed and deployed an indoor autonomous navigation system using ROS, integrating motor control and visual tracking.",
      theAsk: "To build an autonomous indoor platform capable of real-time teleoperation, visual obstacle detection, and guided navigation through a dynamic museum environment.",
      theResult: "Successfully integrated a distributed ROS architecture, overcoming camera processing lag and YOLO misclassifications to achieve robust, real-time autonomous navigation and object detection.",
      architecture: "An ESP32 node handles low-level hardware control, subscribing to /cmd_vel and publishing /odom using encoder and IMU feedback. A Python navigation node processes kinematics, while a parallel vision thread runs OpenCV and YOLO for real-time object detection and ArUco marker processing.",
      techStack: ["ROS", "Python", "YOLO Object Detection", "OpenCV", "ESP32", "SolidWorks"],
      skills: ["ROS", "Python", "YOLO Object Detection", "OpenCV", "ESP32", "SolidWorks"],
      repo: "",
      image: "/media/Autonomous-Ros-Based-Robot-preview.jpeg"
    },
    {
      id: "bvm-ventilator",
      title: "ML Enhanced Emergency Ventilator",
      role: "Team Lead",
      date: "Sep 2025 – Present",
      description: "Developed a smart, adaptive medical ventilator bridging mechanical BVM components with machine learning anomaly detection.",
      theAsk: "Automate a standard Bag Valve Mask (BVM) to serve as an emergency electronic ventilator (E-Vent), integrating ML to improve patient safety and provide smart ventilation metrics.",
      theResult: "Designed and prototyped an automated 'Smart E-Vent' capable of consistent mechanical bagging combined with intelligent ML feedback mechanisms for safer, low-cost emergency respiratory care.",
      architecture: "Implemented a mechanical actuator to systematically compress a resuscitator bag. Integrated ML algorithms to create an adaptive feedback loop for the electronic ventilator, managing real-time sensor calibration and hardware protection.",
      techStack: ["Machine Learning", "Embedded C/C++", "Motor Control", "ADC Oversampling", "Microcontrollers"],
      skills: ["Machine Learning", "Embedded C/C++", "Motor Control", "ADC Oversampling", "Microcontrollers"],
      repo: "https://github.com/Smart-E-Vent-26/Smart-E-Vent-Software",
      image: "/media/smart-E-Vent-preview.jpeg"
    },
    {
      id: "smartwatch",
      title: "Minimalist Smartwatch on STM32",
      role: "Bare-Metal Developer",
      date: "Jun 2024",
      description: "Built a real-time digital watch programmed entirely in bare-metal ARM Assembly, interfacing directly with hardware registers.",
      theAsk: "Interact directly with an STM32 microcontroller and a TFT display using pure Assembly language, without relying on high-level C libraries (HAL) or external RTCs.",
      theResult: "Developed a suite of low-level graphics functions in Assembly, achieving manual screen initialization and pixel-perfect geometric rendering without relying on external libraries.",
      architecture: "Utilizes direct memory-mapped I/O to configure APB2 buses, GPIO pins, and clock signals. Communicates with the TFT display by manipulating individual control pins and sending 8-bit data/commands to render shapes and digits.",
      techStack: ["ARM Assembly", "STM32", "Bare-Metal", "TFT LCD Display", "RTC"],
      skills: ["ARM Assembly", "STM32", "Bare-Metal", "TFT LCD Display", "RTC"],
      repo: "",
      image: "/media/STM32Assmbly-preview.jpeg"
    },
    {
      id: "robotic-arm",
      title: "Arm Trajectory Teleoperation",
      role: "Embedded Developer",
      date: "Nov 2025 – Dec 2025",
      description: "Configured low-level CAN bus network interfaces in Linux environments for a 6-DOF robotic arm.",
      theAsk: "Enable high-precision trajectory tracking and remote teleoperation for a complex 6-DOF robotic arm using smartphone sensors.",
      theResult: "Successfully achieved real-time, low-latency teleoperation leveraging HTTP requests and smartphone IMU data.",
      architecture: "Configured low-level CAN bus network interfaces in Linux. Translated physical mechanics into mathematical software control laws, utilizing an intuitive teach mode for trajectory playback.",
      techStack: ["CAN Bus", "Linux", "Control Laws", "IMU Integration"],
      skills: ["CAN Bus", "Linux", "Control Laws", "IMU Integration"],
      repo: "",
      video: "/media/RoboticArm-Teleoperation-previewVid.mp4"
    },
    {
      id: "solar-tracker",
      title: "Dual-Axis Solar Tracker",
      role: "Mechatronics Engineer",
      date: "Jan 2024 – Feb 2024",
      description: "Designed and fabricated an automated dual-axis solar tracking system to maximize energy yield.",
      theAsk: "Design, fabricate, and test an automated mechatronic system to actively maintain a perpendicular orientation to the sun, minimizing the angle of incidence and maximizing energy generation.",
      theResult: "Designed a robust, laser-cut interlocking mechanical frame. The intelligent tracking system achieved an estimated daily harvested energy increase of 35.7% compared to a static panel.",
      architecture: "A closed-loop system using an Arduino to sample analog error signals from a quadrant of 4 LDRs acting as a voltage divider. The controller generates PWM commands for a pan-tilt servo mechanism providing 2 degrees of freedom.",
      techStack: ["Arduino", "SolidWorks", "LDR Sensors", "Servo Control", "Mechatronics"],
      skills: ["Arduino", "SolidWorks", "LDR Sensors", "Servo Control", "Mechatronics"],
      repo: "",
      video: "/media/Dual-Axis-Solar-Panel-Tracker-Project-vid.mp4"
    },
    {
      id: "pick-place-robot",
      title: "Pick and Place Robotic Arm",
      role: "Mechatronics Engineer",
      date: "April 2026 – May 2026",
      description: "Engineered a 4-DOF custom robotic arm and gripper mechanism with a closed-loop PID control system.",
      theAsk: "Accurately execute a robotic pick-and-place operation on a 6-cube grid, managing the high power draw of multiple actuators and calculating complex spatial trajectories.",
      theResult: "Achieved reliable, collision-free movement by implementing an 'anti-brownout sequential logic' protocol and a highly accurate custom PID gripper controller with deadband thresholds.",
      architecture: "Features a split-power electrical topology isolating ESP32 logic from servo inrush spikes. The custom DC-motor gripper operates via a closed-loop PID controller. Trajectories are pre-calculated in MATLAB using D-H kinematics and executed sequentially.",
      techStack: ["ESP32", "PID Control", "MATLAB Kinematics", "SolidWorks", "PCB Design"],
      skills: ["ESP32", "PID Control", "MATLAB Kinematics", "SolidWorks", "PCB Design"],
      repo: "",
      image: "/media/PickPlace-RoboticArm-preview.jpeg"
    },
    {
      id: "bottling-simulation",
      title: "PLC AUTOMATED BOTTLING LINE",
      role: "PLC Programmer",
      date: "Dec 2024 – Jan 2025",
      description: "Programmed Siemens PLCs to simulate a full industrial bottling and capping liquid handling process.",
      theAsk: "Design, simulate, and program an industrial liquid handling and filling process, requiring complex state management, MCC electrical documentation, and safety interlocks.",
      theResult: "Successfully modeled the chemical/filling process. Implemented comprehensive LD/SFC code for automated duty/standby pump switching and developed an intuitive SCADA/HMI interface.",
      architecture: "An industrial control architecture managing a cascaded multi-tank system. The PLC reads analog data from ultrasonic level transmitters and controls solenoids and variable flow-rate pumps, monitored via a comprehensive HMI.",
      techStack: ["Siemens PLCs", "TIA Portal", "SCADA / HMI", "Ladder Logic (LD)"],
      skills: ["Siemens PLCs", "TIA Portal", "SCADA / HMI", "Ladder Logic (LD)"],
      repo: "",
      image: "/media/plc_project_state_diagram.svg"
    }
  ],
  skills: [
    { category: "Programming", items: ["C/C++", "Python", "ARM Assembly", "MATLAB", "Simulink"] },
    { category: "Hardware", items: ["STM32", "ESP32", "Arduino", "Raspberry Pi", "Sensors", "PCB Design"] },
    { category: "Embedded & Protocols", items: ["Embedded Linux", "HAL", "CAN Bus", "I2C", "SPI", "ADC", "PWM"] },
    { category: "Automation", items: ["Siemens PLCs", "TIA Portal", "PID Control", "Kinematics", "Motor Control"] },
    { category: "Software & AI", items: ["ROS", "OpenCV", "YOLOv11", "Git", "Linux", "Qt"] }
  ],
  experience: [
    {
      role: "Embedded Linux Engineer Intern",
      company: "Ezzmedical",
      date: "Aug 2025 – Sep 2025",
      description: "Developed a highly reliable custom Linux OS for EZvent, an unconditionally approved medical ventilator. Integrated a Qt 6.8.4 interface and ensured life-critical system stability."
    },
    {
      role: "Level 2 Automation Engineer Intern",
      company: "Al Ezz Dekheila Steel Co. (EZDK)",
      date: "Jul 2024",
      description: "Mapped complex industrial data flows between Level 1 and Level 2 automation. Documented real-time data acquisition strategies for distributed industrial systems."
    },
    {
      role: "Trainee",
      company: "Egyptian Youth Diplomacy Program",
      date: "Feb 2025",
      description: "Completed an intensive youth leadership program focusing on international relations and strategic leadership."
    }
  ],
  education: {
    degree: "B.Sc. in Mechatronics Engineering",
    school: "Cairo University, Giza, Egypt",
    date: "Graduated: July 2026",
    details: "Relevant Coursework: Control Systems, Automatic Control, Microprocessors, Embedded Systems, Advanced Robotics."
  },
  hobbies: [
    { title: "Graphic Designing", description: "Developing my artistic side through Graphic Designing projects like this portfolio made by me :)" },
    { title: "Calisthenics", description: "Bodyweight training for movement, strength, flexibility and overall wellbeing." },
    { title: "Tennis", description: "Competitive and recreational play." },
    { title: "Drawing & Painting", description: "Creative and artistic side." }
  ],
  certificates: [
    { title: "Embedded Linux Course", issuer: "IMT", date: "2023", image: "/media/IMTcertificate.jpg" },
    { title: "DELF B2", issuer: "French Ministry of Education", date: "2021", image: "/media/DELFB2certificate.jpeg" }
  ]
};
