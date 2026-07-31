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
      id: "ml-machines",
      title: "Machine Listener System (ML Fault Recognition)",
      role: "Machine Learning Engineer",
      date: "Spring 2026",
      association: "Pattern Recognition and Neural Networks Course",
      description: "An optimized 2D Convolutional Neural Network pipeline for real-time factory machine fault detection, achieving #1 rank in competitive evaluation.",
      theAsk: "Build a robust machine learning pipeline capable of listening to factory audio and classifying it into 6 classes (3 machine types, normal vs. abnormal states) while handling background noise and variations.",
      theResult: "Developed a memory-optimized CNN pipeline achieving 99.08% test accuracy and a lightning-fast 0.17s inference time, ranking #1 overall in the competition.",
      techStack: ["Python", "TensorFlow/Keras", "Librosa", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Noisereduce", "Soundfile"],
      skills: ["Machine Learning", "Signal Processing", "CNNs", "Audio Processing", "Data Optimization"],
      repo: "",
      image: "/media/projects/ml-machines/3Machine2Abnormal-PreProc-TargetFile.png",
      sections: [
        {
          title: "1. EDA & Preprocessing Engine",
          text: "Analyzed raw factory audio waveforms and built a robust preprocessing engine using Python and Librosa. The engine cleans the audio by aggressively reducing background noise via noisereduce, standardizing volume variations, and performing precise silence removal. This ensures the neural network receives clean, consistent mechanical fault signatures without destroying critical data.",
          media: [
            { type: "image", src: "/media/projects/ml-machines/0Machine1Normal-RawAudio.png", caption: "Machine 1 Normal - Raw Waveform" },
            { type: "image", src: "/media/projects/ml-machines/0Machine1Normal-PreProc.png", caption: "Machine 1 Normal - Cleaned Waveform" },
            { type: "audio", src: "/media/projects/ml-machines/0Machine1Normal-RawAudio.wav", caption: "Machine 1 Normal State (Raw Audio) - Original factory recording before preprocessing." },
            { type: "image", src: "/media/projects/ml-machines/3Machine2Abnormal-PreProc-TargetFile.png", caption: "Machine 2 Abnormal - Preprocessed Target" },
            { type: "audio", src: "/media/projects/ml-machines/3Machine2Abnormal-RawAudio.wav", caption: "Machine 2 Abnormal State (Raw Audio) - Original factory recording showing fault signatures." },
            { type: "audio", src: "/media/projects/ml-machines/3Machine2Abnormal-Cleaned.wav", caption: "Machine 2 Abnormal State (Cleaned Audio) - Noise-reduced and standardized audio ready for ML extraction." }
          ]
        },
        {
          title: "2. Mel-Spectrogram Feature Extraction",
          text: "Neural networks process visual patterns exceptionally well. Therefore, instead of feeding raw 1D audio arrays into the model, the cleaned sound waves were mathematically converted into 2D Mel-Spectrograms (fixed to 128x250 dimensions). To handle the massive dataset (58,000+ files) without crashing system RAM, the pipeline processes each class sequentially, compressing the extracted 2D features into highly efficient .npz archives."
        },
        {
          title: "3. 2D CNN Model Training",
          text: "Designed and trained a deep 2D Convolutional Neural Network (CNN) specifically tailored for spectrogram image classification. Key optimizations included:\n\n• RAM Management: Feature data was cast to float16 to prevent memory overflow.\n• Imbalance Handling: Computed balanced class weights to force the model to prioritize the minority \"Abnormal\" states.\n• Overfitting Prevention: Implemented strict Early Stopping callbacks to monitor validation loss and restore the absolute best model weights."
        },
        {
          title: "4. The Outcome & Competition Results",
          text: "The final model was evaluated on a hidden test dataset (11,146 files) where it achieved a staggering 99.08% Test Accuracy with an absolute loss of only 0.0377. \n\nIn the final competition evaluation, our team (Font-astic Four / team_unexpected) achieved Rank 1 overall across all cohorts, boasting the highest Macro F1 Score (0.76) and an incredibly low inference time of 0.17 seconds.",
          media: [
            { type: "image", src: "/media/projects/ml-machines/Final-Confusion-Matrix.png", caption: "Final Model Confusion Matrix" }
          ]
        },
        {
          title: "Classification Report",
          text: "              precision    recall  f1-score   support\n\n     M1_Norm       0.99      1.00      0.99      3170\n   M1_Abnorm       0.98      0.95      0.96       604\n     M2_Norm       0.99      0.99      0.99      3240\n   M2_Abnorm       0.96      0.97      0.96       648\n     M3_Norm       1.00      1.00      1.00      2880\n   M3_Abnorm       0.99      0.99      0.99       604\n\n    accuracy                           0.99     11146\n   macro avg       0.98      0.98      0.98     11146\nweighted avg       0.99      0.99      0.99     11146"
        },
        {
          title: "Final Competition Leaderboard",
          text: "Rank 1: team_unexpected (Font-astic Four) | Macro F1: 0.76 (Rank 1) | Time: 0.17s (Rank 3) | Weighted Score: 0.94 | Grade: 7 / 7\nRank 2: team_hidden_layers (Hidden Layers) | Macro F1: 0.74 (Rank 2) | Time: 0.16s (Rank 2) | Weighted Score: 0.93 | Grade: 6.93\nRank 3: team_the_neurons (The Neurons) | Macro F1: 0.70 (Rank 5) | Time: 0.02s (Rank 1) | Weighted Score: 0.84 | Grade: 6.32\nRank 4: team_audio analysts (Audio Analysts) | Macro F1: 0.68 (Rank 8) | Time: 0.29s (Rank 5) | Weighted Score: 0.59 | Grade: 4.70\n..."
        }
      ]
    },
    {
      id: "cooling-fan",
      title: "3D Printed Handheld Manual Cooling Fan",
      role: "Product Developer & Innovator",
      date: "Spring 2026",
      association: "Cairo University",
      description: "A battery-free, squeeze-actuated personal cooling device developed through rigorous product development methodologies, from customer needs analysis to alpha prototyping.",
      theAsk: "Apply Product Development and Innovation concepts to identify a market gap, define target specifications, generate concepts, and build a functional physical prototype of a chosen product.",
      theResult: "Designed and 3D printed a manual squeeze fan that effectively provides airflow without the need for electricity or batteries, validating the mechanics through a physical alpha prototype.",
      techStack: ["3D Printing", "Product Development", "CAD Integration", "Pugh Matrix", "SolidWorks", "PLA/ABS"],
      skills: ["Product Innovation", "Needs Analysis", "Rapid Prototyping", "Mechanical Evaluation"],
      repo: "",
      video: "/media/projects/cooling-fan/3d-printed-fan-in-action.mp4",
      sections: [
        {
          title: "1. Market Gap & Customer Needs",
          text: "There is a strong need for cooling in hot climates, but current options rely heavily on batteries, leading to constant charging anxiety and significant e-waste. By conducting direct field observations and semi-structured interviews, we mapped out a latent customer need and translated it into 6 core demands, including effective airflow, portability, and eco-friendliness.",
          media: [
            { type: "image", src: "/media/projects/cooling-fan/2.png", caption: "Opportunity Identification & Market Gap" }
          ]
        },
        {
          title: "2. Concept Generation & Selection",
          text: "We conducted internal brainstorming to explore diverse mechanical approaches for power-independent operation. This resulted in several concepts, including a Hand Crank Fan, a Squeeze Trigger Fan, a Pull Cord Fan, and a Push Button Fan. Using a Pugh Screening Matrix against a traditional folding hand fan baseline, followed by a Weighted Scoring Matrix driven by 'Airflow effectiveness' and 'Ease of one-hand use', the Manual Squeeze Fan emerged as the definitive winner.",
          media: [
            { type: "image", src: "/media/projects/cooling-fan/7.png", caption: "Concept Generation - Alternative Mechanical Designs" },
            { type: "image", src: "/media/projects/cooling-fan/9.png", caption: "Pugh Screening Matrix" },
            { type: "image", src: "/media/projects/cooling-fan/10.png", caption: "Weighted Scoring Matrix" }
          ]
        },
        {
          title: "3. Open-Source CAD Integration",
          text: "To rapidly accelerate our timeline towards physical validation, we sourced a robust, open-source mechanical assembly design from Printables.com. This allowed us to bypass lengthy iterative gear-modeling and jump straight into testing the mechanical viability and manufacturing constraints (such as checking if PLA/ABS could survive repetitive squeeze stress). You can view the original CAD source here: https://www.printables.com/model/157894-squeeze-fan-ruggedized-not-a-solution-to-an-electr",
          media: [
            { type: "image", src: "/media/projects/cooling-fan/13.png", caption: "Prototyping Strategy & Principles" }
          ]
        },
        {
          title: "4. Alpha Prototype & Functional Validation",
          text: "We required a physical, focused Alpha Prototype to validate the mechanical airflow and durability. We successfully printed a proof-of-concept assembly to test the gear engagement, linear-to-rotary ratchet mechanics, and blade rotation. The final 3D printed prototype successfully generated sustained airflow via a single ergonomic squeeze action.",
          media: [
            { type: "image", src: "/media/projects/cooling-fan/finalprototype.jpeg", caption: "Final 3D Printed Assembly" }
          ]
        }
      ]
    },
    {
      id: "control-room",
      title: "Control Room Environmental Monitoring System",
      role: "Hardware Designer & Integrator",
      date: "Spring 2026",
      association: "Cairo University",
      description: "A fully integrated environmental monitoring system for industrial control rooms, featuring an active FSM alarm logic, an ESP32 microcontroller, I2C UI, and a custom CAD enclosure.",
      theAsk: "Design and prototype a monitoring system for a factory control room to track temperature and humidity. Provide a clear audiovisual alarm if conditions exceed safe, user-defined setpoints to prevent system downtime and hardware damage.",
      theResult: "Successfully built and integrated a complete mechatronic system with a custom software low-pass filter to overcome digital signal corruption, robust FSM alarm logic, and a professionally laser-cut CAD enclosure.",
      techStack: ["ESP32", "C++", "SolidWorks", "Fritzing", "I2C", "PCB Assembly", "Signal Processing (EMA)"],
      skills: ["Embedded Systems", "CAD/SolidWorks", "Hardware Filtering", "Finite State Machines (FSM)", "Industrial Safety", "System Integration"],
      repo: "",
      image: "/media/projects/control-room/Control-Room7.jpg",
      sections: [
        {
          title: "1. Hardware Architecture & Breadboard Validation",
          text: "The system features a DHT11 environmental sensor, a 16x2 I2C LCD, a 4x3 matrix keypad, and an active alarm interface managed via a 5V relay module driving the buzzer and alert lamp. Before committing to a permanent soldered assembly, the entire project was rigorously implemented and tested on a standard solderless breadboard.",
          media: [
            { type: "image", src: "/media/projects/control-room/Schematic-View.PNG", caption: "System Schematic Diagram" },
            { type: "image", src: "/media/projects/control-room/Component-Wiring-View.PNG", caption: "Hardware Wiring and Layout" }
          ]
        },
        {
          title: "2. The Signal Filtering Challenge",
          text: "Initially, we planned to utilize a passive RC Low-Pass filter to smooth the sensor signal and remove high-frequency electrical noise. However, because the DHT11 utilizes a proprietary digital 1-wire communication protocol, implementing a hardware capacitor fundamentally corrupted the signal integrity by \"rounding off\" the sharp square waves.\n\nTo overcome this, we designed a custom Software Low-Pass Filter — specifically an Exponential Moving Average (EMA). By heavily weighing the historical data (90%) relative to new incoming data (10%), the software absorbs sudden, unrealistic thermal spikes, ensuring the alarm logic operates robustly without triggering false positives."
        },
        {
          title: "3. Voltage Drop Analysis",
          text: "When extending sensor wiring 5 meters into the field, voltage drop across the copper wire must be evaluated. We used high-quality 0.5mm² copper wire. Calculating for a total 10-meter round trip, the resistance is 0.39Ω.\n\nWith the DHT11 peak current at 2.5mA, the total voltage drop was 0.000975V (less than 1mV). By supplying a stable 5V input from an LM2596 Buck Converter, the delivered voltage remains comfortably within the required operating range of 3.5V to 5.5V. This proved that mechanical durability, rather than electrical resistance, dictates the wire choice."
        },
        {
          title: "4. CAD Enclosure & Final Assembly",
          text: "A professional system requires robust physical housing. Utilizing SolidWorks, we engineered a comprehensive mechanical enclosure utilizing wood finger joints. The DXF files were sent for precise laser cutting of the panels, which securely mount the LCD, keypad, buzzer, and internal MCU board while offering professional access to sensor headers.\n\nFollowing successful breadboard validation, the components were rigorously transferred to a Veroboard PCB and placed into the final housing.",
          media: [
            { type: "image", src: "/media/projects/control-room/CADDesign1.png", caption: "3D CAD Housing Design" },
            { type: "image", src: "/media/projects/control-room/CADDesign2.png", caption: "CAD Housing Assembly - Back View" },
            { type: "image", src: "/media/projects/control-room/Control-Room2.jpg", caption: "Final Assembled Prototype" },
            { type: "image", src: "/media/projects/control-room/Control-Room7.jpg", caption: "Final Assembled Prototype" }
          ]
        }
      ]
    },
    {
      id: "bvm-ventilator",
      title: "ML Enhanced BVM Smart Emergency Ventilator",
      role: "Cross-Functional Team Lead",
      date: "Sept 2025 – Jul 2026",
      association: "Cairo University — Graduation Project",
      description: "A Machine Learning enhanced smart emergency ventilator that automates a standard BVM to deliver consistent, safe, and intelligent ventilation. Features PCV, VCV, and Assist Control modes with real-time waveform display, edge ML breath classification, and sub-millisecond hardware safety cutoffs.",
      theAsk: "Design and build a fully autonomous emergency ventilator by automating a standard BVM, integrating real-time sensor feedback, ML-driven breath classification, and safety-critical firmware — all at a fraction of commercial ICU ventilator costs.",
      theResult: "Delivered a working prototype providing PCV, VCV, and Assist Control ventilation modes with real-time waveform display, edge ML inference with 0.985 AUC for breath classification (Normal, Obstructive, Restrictive), and sub-millisecond hardware E-Stop — validated through continuous 10-hour endurance testing. Awarded A- after a rigorous 1-hour technical thesis defense.",
      techStack: ["Embedded C/C++", "Machine Learning", "Raspberry Pi 4", "Arduino", "TFLite", "Qt 6", "Embedded Linux", "S-Curve Motion Profiling", "DSP Filters", "I2C", "USB Serial"],
      skills: ["Embedded C/C++", "Machine Learning", "Motor Control", "DSP", "Medical Devices", "Team Leadership", "Safety-Critical Systems", "System Architecture"],
      repo: "https://github.com/Smart-E-Vent-26/Smart-E-Vent-Software",
      video: "/media/projects/bvm-ventilator/Project-inExpo-Preview-Video.mp4",
      sections: [
        {
          title: "1. The Problem: Why Manual Ventilation Fails",
          text: "Manual ventilation using a Bag-Valve-Mask (BVM) during ICU surges or patient transport demands continuous human pumping, causing rapid operator fatigue, inconsistent tidal volume delivery, uncontrolled airway pressures, and risk of barotrauma. Full-featured commercial ICU ventilators cost $10,000–$50,000+ and are often unavailable in resource-limited settings or mass-casualty crises.\n\nOur mission: transform a standard low-cost BVM into an autonomous, ML-enhanced emergency ventilator that delivers ICU-grade safety features at a fraction of the cost."
        },
        {
          title: "2. System Architecture",
          text: "The system uses a master-slave topology with deliberate isolation: a Raspberry Pi 4 handles the Qt GUI, real-time waveforms, and TFLite ML inference, while an Arduino Nano runs the safety-critical 100 Hz FSM control loop, motor kinematics, and sensor processing. They communicate over USB Serial at 115200 baud — this intentional decoupling ensures a UI crash can never interrupt patient ventilation.\n\nA hardwired Emergency Stop button is physically wired in series with the motor driver's enable line. Pressing E-Stop cuts motor power in <1 ms at the hardware level, completely independent of software state.",
          media: [
            { type: "image", src: "/media/projects/bvm-ventilator/Communication-Circuit-Architechture.png", caption: "Communication & Circuit Architecture" }
          ]
        },
        {
          title: "3. Mechanical Design & Actuation",
          text: "We evaluated 6 distinct compression mechanisms (Rack & Pinion, Geared Cam, Double Rack, Self-Centering Gripper, Webbing Strap, Cam Follower) using a weighted decision matrix scoring response time, size, noise, bag fixation, torque load, and compression speed. The self-centering gripper mechanism scored highest at 83/100.\n\nTorque analysis confirmed the NEMA 23 closed-loop stepper motor (3.1 N·m) operates at only 46.5% utilization against worst-case bag resistance (150 N at 40 cmH₂O with safety factor 2.0), providing a 53.5% safety margin. Stroke calibration yields ~6 mm of linear compression per 100 mL of delivered volume, covering the full 200–800 mL tidal volume range.",
          media: [
            { type: "image", src: "/media/projects/bvm-ventilator/Mechanisms-Comparison.png", caption: "6 Candidate Mechanisms Evaluated" },
            { type: "image", src: "/media/projects/bvm-ventilator/Mechanisms-Desicion-Matrix.png", caption: "Weighted Decision Matrix" },
            { type: "image", src: "/media/projects/bvm-ventilator/Mechanism-IsometricView.png", caption: "CAD Isometric View — Selected Mechanism" },
            { type: "image", src: "/media/projects/bvm-ventilator/Mechanism-Parts.png", caption: "Assembled Mechanism with Labeled Components" }
          ]
        },
        {
          title: "4. Electronics, Sensing & Safety",
          text: "The sensor suite includes an MPX5010DP differential pressure sensor across a custom 3D-printed Venturi tube (22→12 mm throat) for flow measurement — with a clever ADC trick using Arduino's internal 1.1V AREF for a 4.5× resolution boost (2.39 Pa/count). Dual BMP280 barometric sensors on I2C (0x76 for circuit, 0x77 for ambient) provide gauge pressure via differential subtraction with ±0.12 cmH₂O accuracy. Dual AT3503 Hall effect sensors provide absolute home and forward-limit referencing.\n\nPower is supplied by a Mean Well LRS-350-36 PSU (350W) through dual isolated LM2596S buck converters — one dedicated rail for the Raspberry Pi 4, one for the Arduino and sensor suite. Safety hardware includes an 85dB piezo alarm, tri-color status LEDs, a crowbar overvoltage protection circuit (SCR + Zener), and the hardwired E-Stop.",
          media: [
            { type: "image", src: "/media/projects/bvm-ventilator/Complete-Component-View.png", caption: "Complete System Wiring Diagram" },
            { type: "image", src: "/media/projects/bvm-ventilator/Final-PCB.png", caption: "Real PCB Assembly vs. PCB Layout Design" },
            { type: "image", src: "/media/projects/bvm-ventilator/3d-printed-Venturi-Tube.png", caption: "Custom 3D-Printed Venturi Tube for Flow Measurement" }
          ]
        },
        {
          title: "5. Firmware & Software",
          text: "The firmware follows a strict 3-layer modular architecture: a Hardware Abstraction Layer (HAL) for GPIO, Motor Driver, Sensors, and Timing; a Service Layer providing the S-Curve Kinematics Engine, EMA Signal Filter, and Safety Monitor daemon; and an Application Layer containing the Ventilator FSM.\n\nExecution uses non-blocking dual loops — a Fast Loop (~50–100 µs) generates jitter-free step pulses for smooth S-curve acceleration profiles, while a Slow Loop (100 Hz) handles sensor acquisition, FSM state evaluation, and serial telemetry streaming. The FSM manages states from BOOT → CALIBRATE (homes against Hall sensor) → READY → INHALE → HOLD → EXHALE → PAUSE, with dedicated FAULT and SOFT_STOP_WAIT states. A hardware Watchdog Timer provides 250 ms automatic MCU reset on any software hang.\n\nThe Raspberry Pi 4 runs a custom Embedded Linux image with Qt 6 / Python GUI rendering real-time 30+ FPS waveforms for Pressure, Flow, and Volume, alongside ML inference and alarm management.",
          media: [
            { type: "image", src: "/media/projects/bvm-ventilator/Firmware-State-Flow-Diagram.png", caption: "Firmware FSM State Flow Diagram" },
            { type: "image", src: "/media/projects/bvm-ventilator/Qt-GUI.jpeg", caption: "Live Qt GUI — Real-Time Pressure, Flow & Volume Waveforms" },
            { type: "image", src: "/media/projects/bvm-ventilator/Splash-Screen.png", caption: "Custom Branded Boot Splash Screen" }
          ]
        },
        {
          title: "6. Edge ML & Validation",
          text: "The ML pipeline classifies patient breathing patterns in real-time on the Raspberry Pi 4: raw telemetry data is segmented into individual breaths, features are extracted (peak pressure, rise time, plateau duration, decay slope), then passed through a Random Forest Classifier to distinguish Normal, Obstructive, and Restrictive lung conditions — achieving an AUC of 0.985.\n\nEndurance testing ran the system continuously for 10 hours at 35 BPM with I:E 1:4. Motor temperature remained stable; PSU reached only ~45°C (rated 70°C, 40% load). Safety verification confirmed E-Stop response <1 ms, driver fault detection <10 ms, and WDT recovery within 250 ms.\n\nThe project was awarded A- following a rigorous 1-hour technical thesis defense at Cairo University.",
          media: [
            { type: "image", src: "/media/projects/bvm-ventilator/ML-Pipeline.png", caption: "ML Inference Pipeline Architecture" },
            { type: "image", src: "/media/projects/bvm-ventilator/ML-Pressure-Waveforms.png", caption: "Pressure Waveforms per Lung Condition Class" },
            { type: "image", src: "/media/projects/bvm-ventilator/ML-Random-Forest-Classifier.png", caption: "Random Forest Classifier — Ensemble Architecture" },
            { type: "image", src: "/media/projects/bvm-ventilator/ML-Confusion-Matrix.png", caption: "Confusion Matrix — AUC = 0.985" },
            { type: "image", src: "/media/projects/bvm-ventilator/ExpoImag2.jpeg", caption: "Demonstrating the Prototype at the Engineering Expo" },
            { type: "image", src: "/media/projects/bvm-ventilator/smart-E-Vent-preview.jpeg", caption: "The Team at the Graduation Project Expo" }
          ]
        }
      ]
    },
    {
      id: "museum-guide",
      title: "Autonomous Museum Guide Robot",
      role: "Systems Architect",
      date: "Feb 2025 – May 2025",
      association: "Cairo University",
      description: "Designed and deployed an indoor autonomous navigation system using ROS, integrating motor control, visual tracking, and an interactive tour guide with YOLOv11 artifact detection and TTS.",
      theAsk: "Build an autonomous indoor platform capable of real-time teleoperation, visual obstacle detection, and guided navigation through a dynamic museum environment.",
      theResult: "Successfully integrated a distributed ROS architecture, overcoming camera processing lag and YOLO misclassifications to achieve robust, real-time autonomous navigation and object detection.",
      techStack: ["ROS2", "Python", "YOLOv11", "OpenCV", "ESP32", "SolidWorks", "TTS"],
      skills: ["ROS", "Python", "YOLO Object Detection", "OpenCV", "ESP32", "SolidWorks"],
      repo: "",
      image: "/media/Autonomous-Ros-Based-Robot-preview.jpeg",
      sections: [
        {
          title: "1. Mechanical Design (SOLIDWORKS)",
          text: "Designed the car chassis in SOLIDWORKS specifically for laser cutting. The design incorporated several flat parts to ensure we could utilize a single sheet of acrylic for cost efficiency and manufacturing speed. I designed the parts to have finger joints compatible with each other for easy assembly, and ensured proper holes were mapped out for the electronic components and the PCB.",
          media: [
            { type: "image", src: "/media/museum-guide/CADdesign.png", caption: "Full CAD Design" },
            { type: "image", src: "/media/museum-guide/CADchassis.png", caption: "Chassis CAD Model" },
            { type: "image", src: "/media/museum-guide/ElectronicsImag1.jpeg", caption: "Electronics Assembly 1" },
            { type: "image", src: "/media/museum-guide/ElectronicsImag2.jpeg", caption: "Electronics Assembly 2" },
            { type: "image", src: "/media/museum-guide/CarwithChassisphone.png", caption: "Physical Chassis Assembly" },
            { type: "image", src: "/media/museum-guide/CarwithBody.png", caption: "Final Car Body Integration" }
          ]
        },
        {
          title: "2. Turtlesim & CoppeliaSim Exploration",
          text: "Working with ROS2 for the first time, I created a keyboard navigable Turtlesim node that listens to keyboard inputs for movement. This served as essential practice before integrating with the actual hardware. I also briefly explored CoppeliaSim to understand simulation capabilities within this ecosystem.",
          media: [
            { type: "video", src: "/media/museum-guide/TurtleSimROS.mp4", caption: "Turtlesim Keyboard Navigation Node" }
          ]
        },
        {
          title: "3. Systematic PID Tuning",
          text: "We performed PID tuning for the 4 motors separately using a dedicated Python script that allowed us to dynamically test parameters. We utilized a systematic approach, tuning Proportional (P), then Derivative (D), then Integral (I) to achieve optimal settling time and minimal steady-state error."
        },
        {
          title: "4. Teleoperation (Navigation.py)",
          text: "After assembling and integrating the electrical components and completing the PID tuning, we developed 'Navigation.py' to control the robot via keyboard inputs for manual teleoperation and testing.",
          media: [
            { type: "video", src: "/media/museum-guide/Car-with-Chassis.mp4", caption: "Keyboard Teleoperation of the Chassis" }
          ]
        },
        {
          title: "5. Odometry & Kinematics (Go_to_goal.py)",
          text: "To achieve autonomous movement to specified (X, Y) coordinates, we developed a 'go to goal' script. This required precise physical and mechanical calibration, mapping desired locations to actual differential motor movements for turning and straight-line driving. We utilized the IMU MPU6050 sensor to actively adjust and calculate movement errors (like motor slip) in real-time."
        },
        {
          title: "6. Camera Calibration",
          text: "We developed a 'camera_claiberation.py' script capable of calibrating the camera to accurately calculate objects' distance and angle relative to the robot's position, a critical step for spatial awareness."
        },
        {
          title: "7. Obstacle Avoidance & Aruco Markers",
          text: "Integrated a pre-trained YOLOv11 model to detect standard objects for dynamic obstacle avoidance. We also implemented Aruco marker detection to serve as spatial checkpoints, allowing the robot to update its location and zero-out long-term IMU drift.",
          media: [
            { type: "video", src: "/media/museum-guide/Aruco-Obstacle-Avoidance.mp4", caption: "Aruco Marker Detection & Obstacle Avoidance" }
          ]
        },
        {
          title: "8. YOLOv11 Artifact Training & TTS",
          text: "Trained a custom YOLOv11 model on 3 specific museum artifacts: a Medieval Sword, a Dinosaur Skull, and an Ancient Vase, using 50+ images per artifact covering different angles and lighting. When the robot detects an artifact, it stops and utilizes a Text-to-Speech (TTS) integration to present the artifact to tourists. \n\n*Engineering Note*: We encountered significant friction issues due to rubber wheels on tile (بلاط) floors. We solved this practically by applying starch (نشا طعام) to the wheels, which effectively reduced friction and allowed smooth differential turning.",
          media: [
            { type: "image", src: "/media/museum-guide/dino1.jpeg", caption: "Dinosaur Artifact Dataset" },
            { type: "image", src: "/media/museum-guide/sword1.jpeg", caption: "Sword Artifact Dataset" },
            { type: "image", src: "/media/museum-guide/vase1.jpeg", caption: "Vase Artifact Dataset" }
          ]
        }
      ]
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
      techStack: ["Yocto Project", "BitBake", "Embedded Linux", "Qt 6.8.4", "Raspberry Pi 4", "systemd", "CAN Bus"],
      skills: ["Embedded Linux", "Yocto Project", "BitBake", "Linux customization", "U-Boot", "Qt"],
      repo: "",
      image: "/media/Ezzmedical-Embedded-Linux-2025intern.png",
      recommendation: {
        name: "Eng. Mohamed Elshaikh",
        title: "Software Engineering Senior Manager @ EzzMedical",
        text: "I highly recommend Ali for their strong contributions as an Embedded Linux Engineer intern at EzzMedical. They quickly adapted to complex tasks, showed excellent problem-solving skills, and worked with professionalism and dedication throughout their internship."
      },
      sections: [
        {
          title: "Environment Setup & Toolchain Building",
          text: "Configured the build environment for Raspberry Pi 4, cloning and setting up essential Yocto meta layers including meta-qt6, meta-raspberrypi, and meta-boot2qt. Generated a robust cross-toolchain for deploying Qt applications directly from Windows hosts."
        },
        {
          title: "Application Integration & Features",
          text: "Integrated the Qt ventilator application into the OS image. Enabled critical features such as Screenshot Utility, OpenGL, EGLFS, SQLite, and Audio Support. Engineered systemd services to manage automatic startup, CAN bus configuration, and custom branded splash screens."
        },
        {
          title: "Migration to Scarthgap",
          text: "Successfully migrated the system from Kirkstone to Scarthgap (Yocto 5.0.10), updating recipes and resolving dependency mismatches to ensure full compatibility with Qt 6.8.4 and align with upstream best practices."
        },
        {
          title: "Security Preparations",
          text: "Documented preparatory research for secure boot, user monitoring, and system hardening to lay the groundwork for future medical device security compliance."
        }
      ]
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
      techStack: ["CAN Bus", "Linux", "Python", "Piper SDK", "IMU Integration", "Virtual Machines"],
      skills: ["Robotics", "CAN Bus", "Linux", "Python", "Virtual Machines"],
      repo: "https://github.com/agilexrobotics/piper_sdk",
      repoLabel: "Piper SDK (Open Source)",
      video: "/media/RoboticArm-Teleoperation-previewVid.mp4",
      sections: [
        {
          title: "Hardware Interface & Networking",
          text: "Troubleshot and configured a Linux VM (Ubuntu) environment for secure external hardware communication, solving critical USB passthrough bottlenecks. Configured the can0 network interface and managed baud rates for live telemetry."
        },
        {
          title: "High-Precision Trajectory Tracking",
          text: "Programmed the arm using high-level Python control laws to grip an upright pencil cap and relocate it without tipping — a task demanding extremely high spatial accuracy and smooth trajectory profiling."
        },
        {
          title: "IMU Teleoperation",
          text: "Prototyped a real-time reactive control system by extracting IMU data from a smartphone (using the Phyphox app) via HTTP requests, mapping the data to dynamically drive the 6-DOF joints."
        }
      ]
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
      techStack: ["ESP32", "PID Control", "MATLAB", "D-H Kinematics", "SolidWorks", "CoppeliaSim", "YOLOv8", "OpenCV"],
      skills: ["ESP32", "PID Control", "MATLAB Kinematics", "SolidWorks", "CoppeliaSim", "Computer Vision"],
      repo: "",
      image: "/media/PickPlace-RoboticArm-preview.jpeg",
      sections: [
        {
          title: "Electrical Architecture & Anti-Brownout Logic",
          text: "Designed a split-power electrical topology to isolate the ESP32 logic from high-current servo inrush spikes. Implemented sequential logic to manage the power draw of multiple actuators and prevent system resets.",
          media: [
            { type: "image", src: "/media/pick-place/schematic.png", caption: "Electrical Schematic" },
            { type: "image", src: "/media/pick-place/component-view.png", caption: "Component View" }
          ]
        },
        {
          title: "Custom PID Gripper",
          text: "Fabricated a custom DC-motor driven gripper equipped with linear potentiometer feedback. Programmed a closed-loop PID controller with deadband thresholds to ensure firm, gentle grasping of objects without crushing them.",
          media: [
            { type: "image", src: "/media/pick-place/custom-gripper.jpeg", caption: "Potentiometer Gripper" }
          ]
        },
        {
          title: "Kinematics & Trajectory Generation",
          text: "Pre-calculated all spatial trajectories in MATLAB using Denavit-Hartenberg (D-H) kinematics. Translated these mathematical coordinate models into discrete, executable firmware instructions for the ESP32.",
          media: [
            { type: "image", src: "/media/pick-place/cad-model.png", caption: "CAD Model & Kinematics" }
          ]
        },
        {
          title: "CoppeliaSim & Vision Integration",
          text: "Separately from the physical arm, simulated a robust face mask detection protocol in CoppeliaSim. Utilized YOLOv8 and OpenCV to identify unmasked individuals and trigger a simulated robotic sorting process.",
          media: [
            { type: "video", src: "/media/PickPlace-SimVideo.mp4", caption: "CoppeliaSim Face Mask Detection" }
          ]
        }
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
      image: "/media/STM32Assmbly-preview.jpeg",
      sections: [
        {
          title: "Bare-Metal Architecture",
          text: "Utilized direct memory-mapped I/O to configure APB2 buses, GPIO pins, and clock signals directly in ARM Assembly, completely bypassing standard C HAL libraries."
        },
        {
          title: "Display Interfacing",
          text: "Communicated directly with the TFT display by manipulating individual control pins and sending 8-bit data/commands to manually initialize the screen and render pixel-perfect shapes and digits."
        },
        {
          title: "Internal Timekeeping",
          text: "Engineered a custom timekeeping algorithm leveraging the STM32's internal timers instead of relying on an external Real-Time Clock (RTC) module."
        }
      ]
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
      video: "/media/Dual-Axis-Solar-Panel-Tracker-Project-vid.mp4",
      sections: [
        {
          title: "Mechanical Fabrication",
          text: "Designed a robust, interlocking frame in SolidWorks optimized for laser cutting. The pan-tilt servo mechanism provides 2 degrees of freedom to accurately track the sun's trajectory."
        },
        {
          title: "Closed-Loop Control",
          text: "Implemented a closed-loop system using an Arduino to sample analog error signals from a quadrant of 4 LDRs acting as a voltage divider, dynamically adjusting the servos to minimize the angle of incidence."
        }
      ]
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
      image: "/media/plc_project_state_diagram.svg",
      sections: [
        {
          title: "Industrial Control Architecture",
          text: "Managed a cascaded multi-tank system where the PLC reads analog data from ultrasonic level transmitters to control solenoids and variable flow-rate pumps."
        },
        {
          title: "State Management & HMI",
          text: "Developed comprehensive Ladder Logic (LD) for automated duty/standby pump switching, fault handling, and safety interlocks, monitored via a fully functional SCADA/HMI interface."
        }
      ]
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
      techStack: ["Yocto Project", "Embedded Linux", "Qt Creator", "iMX8mp", "Cross-compilation", "SDK"],
      skills: ["Embedded Linux", "Yocto Project", "Linux customization", "Qt Creator", "Cross-compilation"],
      repo: "",
      image: "/media/Ezzmedical-Embedded-Linux-2024intern.png",
      sections: [
        {
          title: "Linux Image Compilation",
          text: "Customized and built the Linux image following iWave's documentation for the iMX8mp-4g board, resolving massive `do_fetch` network connectivity and disk space bottlenecks along the way."
        },
        {
          title: "Toolchain & Deployment",
          text: "Successfully built the SDK cross-compiler and manually configured the Qt Creator kit to deploy the ventilator software directly onto the board, proving the viability of embedded Linux for the product line."
        }
      ]
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
      image: "/media/IMTcertificate.jpg",
      sections: [
        {
          title: "OS Customization",
          text: "Built a fully customized Linux image from scratch for the Raspberry Pi 3B+, managing the bootloader, kernel, and root filesystem."
        },
        {
          title: "Transaction Logic",
          text: "Engineered Python-based transaction logic handling card authentication, deposits, withdrawals, and secure password management, backed by an auto-updating local database."
        }
      ]
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
