export const portfolioData = {
  personalInfo: {
    name: "Ali Wael Mohamed Ali Ahmed",
    title: "Mechatronics Engineer",
    phone: "01011050393",
    email: "aliwael908@gmail.com",
    linkedin: "linkedin.com/in/ali-wael908",
    github: "github.com/Ali-W908",
    summary: "Passionate about bridging the gap between hardware and software. Dedicated to clean architecture, high performance, and continuous learning. Bringing a deep curiosity and a strong technical foundation in embedded systems, Linux, robotics, automation, and machine learning to build robust physical and digital systems."
  },
  projects: [
    {
      id: "bvm-ventilator",
      title: "Machine Learning Enhanced Emergency BVM Ventilator",
      role: "Team Lead",
      date: "Sep 2025 – Present",
      description: "Developed robust, safety-critical ventilation firmware in C/C++, managing real-time sensor calibration, hardware protection circuits, and serial communication.",
      deliverables: "Develop a safe, reliable medical ventilator with machine learning anomaly detection.",
      results: "Assembled all electrical components, implemented advanced S-Curve motion profiling for stepper motors, designed signal conditioning using EMA filters, and directed a cross-functional Agile team.",
      skills: ["Embedded C/C++", "Motor Control", "ADC Oversampling", "Agile Leadership"],
      repo: "https://github.com/Ali-W908/bvm-ventilator"
    },
    {
      id: "bottling-simulation",
      title: "Automated Bottling & Capping Line Simulation",
      role: "PLC Programmer",
      date: "Dec 2024 – Jan 2025",
      description: "Programmed Siemens PLCs in TIA Portal to simulate full bottling and capping operations.",
      deliverables: "Simulate a fully functioning industrial bottling line with safety interlocks.",
      results: "Designed a comprehensive HMI interface for real-time process monitoring and manual interventions with fully documented industrial logic.",
      skills: ["Siemens PLCs", "TIA Portal", "HMI Design", "Automation Logic"],
      repo: ""
    },
    {
      id: "robotic-arm",
      title: "Robotic Arm Trajectory Automation & Teleoperation",
      role: "Embedded Developer",
      date: "Nov 2025 – Dec 2025",
      description: "Configured low-level CAN bus network interfaces in Linux environments for a 6-DOF robotic arm.",
      deliverables: "High-precision trajectory tracking and teleoperation.",
      results: "Translated physical mechanics into software control laws utilizing teach mode and HTTP requests for smartphone IMU teleoperation.",
      skills: ["CAN Bus", "Linux", "Control Laws", "IMU Integration"],
      repo: ""
    },
    {
      id: "smartwatch",
      title: "Minimalist Smartwatch on STM32 Microcontroller",
      role: "Bare-Metal Developer",
      date: "Jun 2024",
      description: "Built a real-time digital watch programmed entirely in bare-metal ARM Assembly.",
      deliverables: "Sub-1-second/day accuracy digital watch without an external RTC.",
      results: "Demonstrated deep hardware understanding (memory mapping, registers, interrupts). Interfaced a TFT display with optimized GPIO protocols.",
      skills: ["ARM Assembly", "STM32", "Bare-Metal", "TFT Interfacing"],
      repo: ""
    },
    {
      id: "pick-place-robot",
      title: "Pick and Place Robotic Arm & Custom Gripper",
      role: "Mechatronics Engineer",
      date: "April 2026 – May 2026",
      description: "Engineered a custom robotic gripper mechanism with a closed-loop PID control system.",
      deliverables: "Precise position regulation and multi-axis interpolation.",
      results: "Developed synchronized algorithms ensuring fast, smooth, and vibration-free movement.",
      skills: ["PID Control", "Motion Profiling", "Hardware Integration", "PCB Design"],
      repo: ""
    },
    {
      id: "museum-guide",
      title: "Autonomous Museum Guide Robot (ROS-based)",
      role: "Systems Architect",
      date: "Feb 2025 – May 2025",
      description: "Designed and deployed an indoor autonomous navigation system using ROS.",
      deliverables: "95% route completion accuracy in dynamic environments.",
      results: "Integrated YOLOv11 object detection, improved latency by 30%, and deployed an ESP32 for odometry.",
      skills: ["ROS", "YOLOv11", "ESP32", "Sensor Fusion"],
      repo: ""
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
    date: "Expected Graduation: July 2026",
    details: "Relevant Coursework: Control Systems, Automatic Control, Microprocessors, Embedded Systems, Advanced Robotics."
  },
  hobbies: [
    { title: "eBook Authoring", description: "Sharing knowledge and insights on technical topics." },
    { title: "Calisthenics", description: "Bodyweight training for strength and discipline." },
    { title: "Tennis", description: "Competitive and recreational play." },
    { title: "Drawing & Painting", description: "Creative outlet balancing technical engineering." }
  ],
  certificates: [
    { title: "Embedded Linux Course", issuer: "IMT", date: "2023" },
    { title: "DELF B2", issuer: "French Ministry of Education", date: "2021" }
  ]
};
