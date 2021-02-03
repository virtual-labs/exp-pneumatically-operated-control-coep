(function(AH, UP, FB, TM) {
	
FB.FeedbackAnswers = {
	"1" : "Excellent",
	"2" : "Very Good",
	"3" : "Good",
	"4" : "Average",
	"5" : "Poor"
};

//FB.BarColor = {
//	"1" : "darkgreen",
//	"2" : "ForestGreen",
//	"3" : "LightGreen",
//	"4" : "IndianRed",
//	"5" : "red"
//};

FB.departments = {
	"1" : "Computer Engineering",
	"2" : "Electronics and Communications",
	"3" : "Electrical Engineering",
	"4" : "Biotechnology and Biomedical Engineering",
	"5" : "Mechanical Engineering",
	"6" : "Chemical Engineering",
	"7" : "Civil Engineering",
	"8" : "Chemical Science",
	"9" : "Physical Science",
	"10" : "Metallurgy Engineering",
	"11" : "Other Disciplines"
};

FB.compLabs = {
	"1" : "FPGA and Embedded Systems Lab",
	"2" : "Data Structures Lab",
	"3" : "Pattern Recognition Lab",
	"4" : "Computer Organization Lab",
	"5" : "Computer Programming Lab",
	"6" : "Computer Graphics Lab",
	"7" : "Analog CMOS VLSI Circuit Design (IIITH)",
	"8" : "VLSI (IIITH)",
	"9" : "Digital Logic Design Lab (IIITH)",
	"10" : "Mobile Robotics Lab (IIITH)",
	"11" : "Advanced VLSI Virtual Lab (IIITH)",
	"12" : "Optical Remote Sensing Lab (IIITH)",
	"13" : "Wireless Sensor Network Remote Triggered Lab (Amrita)",
	"14" : "Computer Organisation and Architecture (Kharagpur)",
};

FB.encLabs = {
	"1" : "Hybrid Electronics Lab",
	"2" : "Virtual Microwave Lab",
	"3" : "Electromagnetic Theory (IIITH)",
	"4" : "Queuing Networks Modelling Lab (IITD)",
	"5" : "Virtual Electric Circuits Lab (Amrita)",
	"6" : "Digital Electronic Circuits Laboratory (Kharagpur)",
	"7" : "Digital Signal processing virtual laboratory (Kharagpur)",
	"8" : "Fading Channels and Mobile Communications (Kharagpur)",
	"9" : "Real Time Embedded Systems Laboratory (Kharagpur)",
	"10" : "Basic Electronics (Kharagpur)",
 };

FB.elecEnggLabs = {
	"1" : "Sensors Modeling and Simulation",
	"2" : "Industrial Automation Laboratory",
	"3" : "Electrical Machines",
	"4" : "Programmable Logic Controller",
	"5" : "Substation Automation lab",
	"6" : "Industrial Electric Drives lab",
	"7" : "Electrical Machines Lab (IITG)",
	"8" : "Ergonomics Lab",	
	"9" : "Virtual Anthropology Lab",
	"10" : "Creative Design, Prototyping & Experiential Simulation Lab",
	"11" : "Analog Signals, Network and Measurement Laboratory (Kharagpur)",
	"12" : "Pneumatic System Laboratory (Phase III)",
	"13" : "Process Loop Components (Phase III)"
};


FB.bioTechLabs = {
	"1" : "Biomedical and Signal processing Laboratory",
	"2" : "Bioreactor Lab", 
	"3" : "Virtual Proteomics Lab",
	"4" : "Bio-inspired Robotics Virtual Labs (Remote Trigger)",
	"5" : "Bioinformatics Virtual Lab I (Amrita)",
	"6" : "Bioinformatics Virtual Lab II (Amrita)",
	"7" : "Bioinformatics Virtual Lab III (Amrita)",
	"8" : "Systems Biology Virtual Lab (Amrita)",
	"9" : "Neurophysiology Virtual Lab (pilot)(Amrita)",
	"10" : "Neuron Simulation Virtual Lab (pilot) (Amrita)",
	"11" : "Biochemistry Virtual Lab I (Amrita)",
	"12" : "Biochemistry Virtual Lab II (Amrita)",
	"13" : "Immunology Virtual Lab I (Amrita)",
	"14" : "Immunology Virtual Lab II (Amrita)",
	"15" : "Microbiology Virtual Lab I (Amrita)",
	"16" : "Microbiology Virtual Lab II (Amrita)",
	"17" : "Population Ecology Virtual Lab I (Amrita)",
	"18" : "Population Ecology Virtual Lab II (Amrita)",
	"19" : "Molecular Biology Virtual Lab I (Amrita)",
	"20" : "Molecular Biology Virtual Lab II (Amrita)",
	"21" : "Cell biology Virtual Lab I (Amrita)",
	"22" : "Cell biology Virtual Lab II (Amrita)",
	"23" : "Virtual Biophysics Lab (Remote Trigger)(Amrita)",
 };




FB.mechLabs = {
	"1" : "Vibration and Acoustics",
	"2" : "Micromachining laboratory",
	"3" : "FAB laboratory",
	"4" : "Machine Dynamics and Machine Vibration laboratory",
	"5" : "Mechanics of Machines Lab",
	/*"6" : "Kinematics & Dynamics of Mechanisms",*/
	"6" : "Mine Automation and Virtual Reality",
	"7" : "Virtual Combustion and Atomization Laboratory (IITKanpur)",
};

FB.phySciLabs = {
	"1" : "Physical Science (IIITH)",
	"2" : "Optics Virtual Lab (Amrita)",
	"3" : "Solid State Physics Virtual Lab (Amrita)",
	"4" : "Mechanics Virtual Lab (Pilot) (Amrita)",
	"5" : "Laser Optics Virtual Lab (Amrita)",
	"6" : "Electricity and Magnetism Virtual Lab (Amrita)",
	"7" : "Heat & Thermodynamics Virtual Lab (Amrita)",
	"8" : "Modern Physics Virtual Lab (Amrita)",
	"9" : "Harmonic Motion and Waves Virtual Lab (Amrita)",
	"10" : "Physical Sciences &minus; Optical Device Characterizations (T) (IITKanpur)",
	"11" : "Virtual Laboratory: Oscillations (IITKanpur)",
};

FB.otherDisciplinesLabs = {
	"1" : "Materials - Thermal processing & Microstructural Characterization (IITKanpur)",	
}

FB.matThermalMicorCharExp = {
	"1" : "Introduction to Tensile Testing: Analysis of Stress-Strain Curves",
	"2" : "The Yield Point Phenomenon",
	"3" : "Determination of Weibull Modulus of Brittle Materials",
}

FB.otherDiscip = [];
FB.otherDiscip.push(FB.matThermalMicorCharExp);


FB.compExp = {
	"1" : "Introduction to FPGA and Verilog Programming",
	"2" : "Introduction to Verilog Abstraction Levels",
	"3" : "Fixed Point Arithmetic Operations and Logical Operators",
	"4" : "Floating Point Arithmetic Operations",
	"5" : "Logarithmic Number System (LNS) Based Arithmetic Operations",
	"6" : "Linear Matrix Algebra",
	"7" : "Linear Equation Solver",
	"8" : "Pulse-Width Modulation (PWM) Generation Using FPGA",
	"9" : "Architectural Design Approach",
	"10": "Designing of Reconfigurable Architecture for PID Controller"
};


FB.phySciExp = {
		"1" : "Familiarization with Dipole Moment",
		"2" : "Millikan's Experiment",
		"3" : "Photoelectric Effect",
		"4" : "Inversion of Cane Sugar",
		"5" : "Heat of Neutralization",
		"6" : "Acid-Base Indicators",
		"7" : "Geiger Muller Counter",
		"8" : "Young's Modulus",
		"9" : "Surface Tension",
};

FB.OptVirphySciExp = {
		
		"1" : "Angle of the prism using Spectrometer",
		"2" : "Spectrometer i-i' curve",
		"3" : "Spectrometer: i-d curve",
		"4" : "Spectrometer- Determination of Cauchy's constants",
		"5" : "Spectrometer, Refractive Index of the material of a prism",
		"6" : "Spectrometer,Dispersive power of a prism",
		"7" : "Diffraction Grating",
		"8" : "Resolving power of a prism",
};

FB.solidStateVirphySciExp = {
		
		"1" : "Characteristics of Zener diode",
		"2" : "Characteristics of Thermistor",
		"3" : "Resistivity by Four Probe Method",
		"4" : "B-H Curve",
		"5" : "Hall effect experiment:- Determination of charge carrier density",
		"6" : "Cornus Experiment",
		"7" : "Zener Diode as Voltage Regulator",
		"8" : "Crystal Structure",
};

FB.mechanicsPilotVirphySciExp = {
	
		"1" : "Torque and angular acceleration of a fly wheel",
		"2" : "Torsional oscillations in different liquids",
		"3" : "Moment of Inertia of Flywheel",
		"4" : "Newton's Second Law of Motion",
		"5" : "Ballistic Pendulum",
		"6" : "Collision balls",
		"7" : "Projectile Motion",
		"8" : "Elastic and Inelastic Collision",
		
		
};



FB.opticsVirphySciExp = {
	
	"1" : "Michelson's Interferometer- Refractive index of glass plate ",
	"2" : "Newton's Rings-Refractive index of liquid",
	"3" : "Michelson's Interferometer- Wavelength of laser beam ",
	"4" : "Laser beam divergence and spot size",
	"5" : "Newton's Rings-Wavelength of light",
	"6" : "Brewsters Angle determination",
	"7" : "Numerical Aperture of Optical Fiber",
	
};


FB. electricityMagnetismVirphySciExp = {
		
		"1" : "Tangent Galvanometer",
		"2" : "Magnetic Field Along The Axis of A Circular Coil Carrying Current",
		"3" : "Deflection Magnetometer",
		"4" : "Van De Graaff Generator",
		"5" : "Barkhausen Effect",
		"6" : "Temperature Coefficient of Resistance",
		"7" : "Anderson's Bridge",
		"8" : "Quincke's Method",
};

FB. heatThermoVirphySciExp = {
		
		"1" : "Heat Transfer by Radiation",
		"2" : "Heat transfer by Conduction",
		"3" : "Heat Transfer by Natural Convection",
		"4" : "The Study of Phase Change",
		"5" : "Black Body Radiation: Determination of Stefan's Constant",
		"6" : "Newton's Law of Cooling",
		"7" : "Lee's Disc Apparatus",
		"8" : "Thermo Couple-Seebeck Effect",
};

FB. modPhyVirExp = {
		
		"1" : "Franck-Hertz Experiment",
		"2" : "Soldering (Remote Trigger)",
		"3" : "Solar Panel Experiment (Remote Trigger)",
		"4" : "Photoelectric effect",
		"5" : "Determination of Planck's Constant",
		"6" : "Abbe's Refractometer",
		"7" : "Emission spectra",
		"8" : "Millikan's oil drop experiment",
		"9" : "Magnetic Material Characterization via Hystersis (Remote Trigger)",
};


FB.harmonicPhyVirExp = {
		
		"1" : "Astable multivibrator",
		"2" : "Melde's String Apparatus",
		"3" : "Kundt's Tube Apparatus",
		"4" : "Ultrasonic Interferometer",
		"5" : "Doppler Effect",
		"6" : "A.C Sonometer",
		"7" : "Colpitts Oscillator",
		"8" : "Hartley Oscillator",
};

FB.optDevCharExp = {
		"1" : "L-I and V-I Characteristics of fiber optic LEDs",
		"2" : "Optical Spectral Characteristics of Laser Diodes",
		"3" : "Optical Spectral Characteristics of LEDs",
		"4" : "Digital Fiber Optic link for different data rates (trial stage)",
};

FB.oscillationExp = {
		"1" : "Few important things to DO befor going to the experiments",
		"2" : "Philosophy",
		"3" : "Simple Harmonic Motion",
		"4" : "Damped Harmonic Motion",
		"5" : "LC Circuit",
		"6" : "LCR Circuit",
		"7" : "Resonance in LCR Circuit",
		"8" : "Coupled Harmonic Oscillator",
		"9" : "Nonlinear Oscillator",
		"10" : "Nonlinear Damped Oscillator",
};


FB.physci = [];
FB.physci.push(FB.phySciExp);
FB.physci.push(FB.OptVirphySciExp);
FB.physci.push(FB.solidStateVirphySciExp);
FB.physci.push(FB.mechanicsPilotVirphySciExp);
FB.physci.push(FB.opticsVirphySciExp);
FB.physci.push(FB.electricityMagnetismVirphySciExp);
FB.physci.push(FB.heatThermoVirphySciExp);
FB.physci.push(FB.modPhyVirExp);
FB.physci.push(FB.harmonicPhyVirExp);
FB.physci.push(FB.optDevCharExp);
FB.physci.push(FB.oscillationExp);

/*
 * @author : vaibhav Kurhe
 * 
 * This Data structures lab is newly added under Computer Dept.
 */

FB.chemSciLabs = {
		"1" : "Colloid and Surface Chemistry",
		"2" : "Circular Dichroism Spectroscopy",
		"3" : "Molecular Absorption Spectroscopy",
		"4" : "Physical Chemistry Lab ",
		"5" : "Analytical Lab",
		"6" : "Virtual Chemistry Lab",
		"7" : "(Molecular) Fluorescence Spectroscopy Virtual Lab",
		"8" : "Quantum chemistry Lab",
		"9" : "Organic Chemistry Virtual Lab (Amrita)",
		"10": "Inorganic Chemistry Virtual Lab (Amrita)",
		"11": "Physical Chemistry Virtual Lab (Amrita)",
		"12": "Advanced Analytical Chemistry Virtual Lab (Amrita)", 
};


FB.pcChemExp ={
		"1" : "Instrumentation and working principles of infra red (IR) spectroscopy using salt plates",
		"2" : "Instrumentation and working principles of solutions infra red (IR) spectroscopy",
		"3" : "Instrumentation and working principles principles of mass spectroscopy",
		"4" : "Determination of molar mass of simple compounds using mass spectroscopy",
		"5" :  "Nuclear magnetic resosnace spectrocopy and evaulation of simple 1H NMR spectra of select organic compounds",
		"6" : "Identification of unknown components using spectroscopic techniques",
		/*"7" : "Principles of electron paramagnetic resonance spectroscopy ",
		"8" : "Electron paramagnetic resonance spectral studies of select organic free radicals ",	*/
};

FB.cscChemExp = {
	"1" : "Preparation of Sols",
	"2" : "Preparation of Gels",
	"3" : "Demonstration of the Preparation and Use of Association Colloids (Micelles)",
	"4" : "Determination of Critical Micelle Concentration (CMC) of a Surfactant",
	"5" : "Demonstration of the Surface Tension Lowering of Water by Soaps/Detergents",
	"6" : "Demonstration of Tyndall Effect or Tyndall Scattering in Colloidal Systems",
	"7" : "Gel Electrophoresis",
	"8" : "Demonstration of the Surface-Effect on Chemical Properties of Finely Divided Particles",
	"9" : "Study of the Catalytic Effects of Finely Divided Particles",
};

FB.masChemExp = {
		"1" : "Familiarization with the UV-Visible Absorption Spectroscopy",
		"2" : "Solvent effects on absorption spectra",
		"3" : "Effects of sample path length",
		"4" : "Effects of sample concentration",
		"5" : "Determination of molar absorptivity",
		"6" : "Verification of Beer-Lambert Law",
		"7" : "Determination of unknown concentration of a light absorbing analyte",
		"8" : "Simultaneous estimation method for multicomponent samples: Principle of additivity of absorbance",
		"9" : "pH effects on absorption spectra: pKa determination by spectrophotometric method",
		"10" : "Study of kinetics of a reaction by using spectrophotometric method",
	};

FB.cdsChemExp = {
		"1" : "Specific rotation of a sugar using a polarimeter",
		"2" : "Operational details of a CD spectrometer",
		"3" : "Effect of Secondary Structure elements on CD spectrum of proteins",
		"4" : "CD spectrum of a given protein solution and to classify it in terms of its secondary structure elements",
		"5" : "Effect of chiral substances on plane polarized light as a function of wavelength",
	};

FB.analyticalChemExp = {
		"1" : "Introduction to Electrochemical Technique, Cyclic Voltammetry. (A) Ferricyanide System (B) Dopamine",
		"2" : "Determination of Heavy Metals in Yamuna River Water by Differential Pulse Anodic Stripping Voltammetry",
		"3" : "Study of Electrochemical behaviour of Ascorbic Acid by CNT Electrode",
		"4" : "Electrochemical Study of Acetaminophen in Paracetamol Tablet",
		"5" : "Simultaneous Determination Of Heavy Metals In Water Samples Using Boron Doped Diamond Electrode",
		"6" : "Electrochemical study of ferri/ferro system with MUX MULTI4 Module",
};

FB.chemistryChemExp = {
		"1" : "Caffeine content in tea and coffee",
		"2" : "Estimation of amino acids in coconut water",
		"3" : "Estimation of Cholesterol in edible oils",
		"4" : "Analysis of Lactose & Cane sugar",
		"5" : "Analysis of Urea",
		"6" : "Analysis of Machine Oil",
		"7" : "Estimation of Oxytocin in Various Edibles",
		"8" : "Estimation of Capsaicin in Capsicum",
		"9" : "Estimation of Embelin content in Embelia ribes (kali mirch) and Tamarind",
};

FB.fluorSpectroChemExp = {
		"1" : "Introduction to the fluorescence spectroscopy principle",
		"2" : "Familiarization with the fluorescence instrumentation",
		"3" : "Familiarization with excitation and emission spectra, Mirror Image relation and Stokes Shift",
		"4" : "Demonstration of solvent effects on fluorescence spectra",
		"5" : "Demonstration of pH effects on fluorescence spectra",
		"6" : "Effects of concentration (optical density) of a fluorophore on emission spectra",
		"7" : "Relationship between the concentration of a fluorophore and its fluorescence intensity: Determination of unknown concentration of an analyte in solution",
		"8" : "Determination of fluorescence quantum yield of a fluorophore",
		"9" : "Fluorescence Quenching and Stern-Volmer plot: Estimation of the quenching constant from Stern-Volmer plot",
		"10" : "Effects of excimer and exciplex formations on fluorescence emission spectra",
};

FB.quantamChemExp = {
		"1" : "UV-Visible Spectroscopy of Conjugated Molecules",
		"2" : "Vib-rotational Spectroscopy of Hydrogen Chloride",
		"3" : "Geometry Optimization using ab initio quantum calcuations",
		"4" : "Calculation of Vibrational Frequency of Molecules and Visualization of Normal Modes",
		"5" : "Huckel Molecular Orbital Theory",
		"6" : "Conformational Analysis of 1,2-dichloroethane",
		"7" : "Transition State Calculation for a SN2 reaction",
		"8" : "Eigen systems: Geometrical Intepretation",
		"9" : "Geometry Optimization of Molecules",
};

FB.orgChemVirChemExp = {
		"1" : "Detection of Functional Groups",
		"2" : "Detection of Elements: Lassaigne's Test",
		"3" : "Separation of Compounds Using Column Chromatography",
		"4" : "Purification by Fractional distillation/crystallisation",
		"5" : "Purification by Steam distillation/crystallisation",
		"6" : "Laser Flash Photometer",
		"7" : "Organic Preparations - Allylation of Isatin",
		"8" : "Estimation of Aspirin",
		"9" : "Estimation Of Glucose",
		"10" : "Calculation of &lambda;max of Organic Compounds Using Woodward Fieser Rules",
};

FB.inorgChemVirChemExp = {
		"1" : "Water analysis-Determination of Physical parameters",
		"2" : "Water analysis-Determination of Chemical parameters",
		"3" : "Acid Base Titration",
		"4" : "Gravimetric Estimation of Barium ",
		"5" : "Gravimetric Estimation of Nickel ",
		"6" : "Crystal Field Theory",
		"7" : "Group Theory" ,
		"8" : "Alloy Analysis (Brass)",
		"9" : "Soil Analysis-Determination of Specific conductivity of Soil",
		"10": "Soil Analysis-Determination of pH of Soil",
};

FB.phyChemVirChemExp = {
		"1" : "Spectrophotometry",
		"2" : "Cryoscopy",
		"3" : "Ebullioscopy",
		"4" : "EMF measurement",
		"5" : "Determination of Viscosity of Organic Solvents",
		"6" : "Adsorption Isotherm",
		"7" : "Verification of Tafel Equation",
		"8" : "Determination of Viscosity Average Molecular Weight of Polymer ",
		"9" : "Calorimetry -Water equivalent Calorimetry",
		"10": "Calorimetry -Heat of Neutralization",
};


FB.advanalyticalChemVirChemExp = {
		"1" : "Soil Analysis-Determination of Available Organic Carbon content in the Soil",
		"2" : "Soil Analysis-Determination of Available Nitrogen content in the Soil by Kjeldahl method",
		"3" : "Soil Analysis-Determination of Available Phosphorus content in the Soil by Bray's method",
		"4" : "Electrogravimetric Estimation of Metals",
		"5" : "Estimation of Phosphate Content in Soft Drinks",
		"6" : "Flame Photometry",
		"7" : "Polarography - Determination of Unknown Concentration of Cadmium",
		"8" : "Polarography - Determination of Unknown Concentration of Vitamin C",
		
};





FB.chemsci = [];
FB.chemsci.push(FB.cscChemExp);
FB.chemsci.push(FB.cdsChemExp);
FB.chemsci.push(FB.masChemExp);
FB.chemsci.push(FB.pcChemExp);
FB.chemsci.push(FB.analyticalChemExp);
FB.chemsci.push(FB.chemistryChemExp);
FB.chemsci.push(FB.fluorSpectroChemExp);
FB.chemsci.push(FB.quantamChemExp);
FB.chemsci.push(FB.orgChemVirChemExp);
FB.chemsci.push(FB.inorgChemVirChemExp);
FB.chemsci.push(FB.phyChemVirChemExp);
FB.chemsci.push(FB.advanalyticalChemVirChemExp);



FB.dsCompExp = {
		"1" : "Number Systems",
		"2" : "Expression Evaluation using Stacks",
		"3" : "Sorting using Arrays",
		"4" : "Polynomials via Linked Lists",
		"5" : "Expression Trees",
		"6" : "Search Trees",
		"7" : "Graph Traversals",
		"8" : "Shortest Paths in Graphs",
		"9" : "Minimum Spanning Trees",	
};

FB.prCompExp = {
		"1" : "Feature Representation",
		"2" : "Mean and Covariance",
		"3" : "Linear Perceptron Learning",
		"4" : "Generation of Random Variables",
		"5" : "Bayesian Classification",
		"6" : "MLE: Learning the classifier from data",
		"7" : "Data Clustering: K-Means, MST-based",
};

FB.coCompExp = {
		"1" : "Representation of Integers and their Arithmetic",
		"2" : "Representation of Floating Point Numbers and their Arithmetic",
		"3" : "Single Cycle MIPS CPU",
		"4" : "Virtual Memory",
		/*"5" : "MIPS Assembly Language Programming - 1",
		"6" : "MIPS Assembly Language Programming - 2");,
		"7" : "ARM Assembly Language Programming - 1",
		"8" : "ARM Assembly Language Programming - 2 ",
		"9" : "Cache Organizations ",*/	
};

FB.cpCompExp = {
		"1" : "Numerical Approximation",
		"2" : "Functions",
		"3" : "Advanced Control Flow",
		"4" : "Arrays",
		"5" : "Structures",
		"6" : "Basic Control Flow",
		"7" : "Strings",
		"8" : "Pointers",
		"9" : "Recursion",
		"10" : "Expression Evaluation",
};

FB.cgCompExp = {
		"1" : "Points and Co-ordinate Systems",
		"2" : "Transformations: Translation",
		"3" : "Transformations: Rotation",
		"4" : "Transformations: Scaling",
		"5" : "Hierarchical Transformations: 2D Demo",
		"6" : "Hierarchical Transformations: 3D Articulated Arm",
		"7" : "Projections and Cameras",
		/*"8" : "Clipping: Line",
		"9" : "Clipping: Polygon",
		"10" : "Rasterization: Line",
		"11" : "Rasterization: Polygon",*/
};

FB.cmosVlsiExp = {
		"1" : "CS amplifier with resisitive load : Transfer Characteristics (Vin v/s Vout)",
		"2" : "CS amplifier with resisitive load : Frequency Response (Vin v/s Frequency)",
		"3" : "CS amplifier with diode connected load : Transfer Characteristics (Vin v/s Vout)",
		"4" : "CS amplifier with diode connected load : Frequency Response (Vin v/s Frequency)",
		"5" : "CS amplifier with current source load  : Transfer Characteristics (Vin v/s Vout)",
		"6" : "CS amplifier with current source load  : Frequency Response (Vin v/s Frequency)",
		"7" : "Common gate amplifier : Transfer Characteristics (Vin v/s Vout)",
		"8" : "Common gate amplifier : Frequency Response (Vin v/s Frequency)",
		"9" : "Differential amplifier : Transfer Characteristics (Vin v/s Vout)",
		"10" : "Differential amplifier : Frequency Response (Vin v/s Frequency)",
		"11" : "Differential to single ended conversion : Transfer Characteristics (Vin v/s Vout)",
		"12" : "Differential to single ended conversion : Frequency Response (Vin v/s Frequency)",
		"13" : "Design and characterization of basic current mirror",
		"14" : "Design and characterization of cascode current mirror",
		"15" : "Voltage Mode Buffer : Transfer Characteristics (Vin v/s Vout)",
		"16" : "Voltage Mode Buffer : Frequency Response (Vin v/s Frequency)",
};

FB.compVlsiExp = {
		"1" : "Schematic Design Of Transistor Level Inverter",
		"2" : "Schematic Design Of Transistor Level NAND & NOR Gate",
		"3" : "Schematic Design Of Transistor Level XOR & XNOR Gate",
		"4" : "Schematic Design Of Pass Transistor Logic & Multiplexer",
		"5" : "Delay Estimation In Chain Of Inverters",
		"6" : "Schematic Design Of D-Latch and D-Flip Flop",
		"7" : "Spice Code Platform",
		"8" : "Design Of D-Flip Flop Using Verilog",
		"9" : "Design Of Digital Circuits Using Verilog",
		"10" : "Layout Design",
};

FB.compDigiLogicExp = {
		"1" : "Adder Circuit",
		"2" : "Multiplexer",
		"3" : "Decoder with 7-Segment Display",
		"4" : "ALU with function",
		"5" : "Comparator",
		"6" : "Latch and Flip Flops",
		"7" : "Registers",
		"8" : "Counters",
		"9" : "Multipliers",
		"10" : "State Digrams",
};

FB.compMobRoboticsExp = {
		"1" : "Sensor Modelling",
		"2" : "Velocity Modelling",
		"3" : "Mapping",
		"4" : "Localization",
		"5" : "Grid based navigation",
		"6" : "Forward kinematics",
		"7" : "Scan matching",
		"8" : "RRT based path planning",
		"9" : "Exploration",
		"10" : "Monte Carlo localization",
};

FB.compAdvanceVLSIExp = {
		"1" : "Full Custom Design",
		"2" : "Semi Custom Design",
		"3" : "Power Reduction Using Gated Clocking",
		"4" : "Ripple Carry Adder",
		"5" : "Carry Look Ahead Adder",
		"6" : "5-3 Compressor",
		"7" : "Array Multiplier",
		"8" : "(8,4) Hamming Coder",
		"9" : "Linear Feedback Shift Register (LFSR)",
};

FB.compOptRemoteExp = {
		"1" : "Basics EM Radiation and Properties that can be sensed - EM Spectrum",
		"2" : "Basics EM Radiation and Properties that can be sensed - Black Body Radiation",
		"3" : "Basics EM Radiation and Properties that can be sensed - Reflectance of Natural objects in the Electromagnetic spectrum",
		"4" : "Sensors and Image Data Characteristics - Capturing Area-wide reflectance effect of spatial resolution",
		"5" : "Sensors and Image Data Characteristics - Data quantization levels and object extraction effects of Radiometric characteristics of the sensor",
		"6" : "Sensors and Image Data Characteristics - Visual Analysis - Band Combination",
		"7" : "Sensors and Image Data Characteristics - Band Algebra - Index based Analysis",
};

FB.wirelessSenSNetExp = {
		"1" : "Introduction to WSN",
		"2" : "nesC Programming",
		"3" : "Send and Receive",
		"4" : "Range & Connectivity vs. Antenna Power",
		"5" : "Duty Cycle vs. Power Consumption",
		"6" : "Sensor Data Acquisition",
		"7" : "Data Collection Frequency and Tx. vs. Power Consumption",
		"8" : "Wireless Propagation",
		"9" : "Wireless Sensor Network",
		"10" : "Wireless Sensor Network Data Acquisition, Transmission, and Aggregation",
		"11" : "Clustering Algorithms",
		"12" : "Time Synchronization",
}

FB.compOrgArchExp = {
		
		"1" : "Ripple Carry Adder",
		"2" : "Carry-Look-Ahead Adder",
		"3" : "Registers and Counters",
		"4" : "Wallace Tree Adder",
		"5" : "Combinational Multipliers",
		"6" : "Booth's Multiplier",
		"7" : "Arithmetic Logic Unit",
		"8" : "Memory Design",
		"9" : "Associative cache Design",
		"10" : "Direct Mapped cache Design",
		"11" : "CPU Design",
		"12" : "Karnaugh Map",
		"13" : "Quine - Mc Clusky Algorithm",
		"14" : "Synthesis of Flip Flops",
		
}



FB.comp = [];
FB.comp.push(FB.compExp);
FB.comp.push(FB.dsCompExp);
FB.comp.push(FB.prCompExp);
FB.comp.push(FB.coCompExp);
FB.comp.push(FB.cpCompExp);
FB.comp.push(FB.cgCompExp);
FB.comp.push(FB.cmosVlsiExp);
FB.comp.push(FB.compVlsiExp);
FB.comp.push(FB.compDigiLogicExp);
FB.comp.push(FB.compMobRoboticsExp);
FB.comp.push(FB.compAdvanceVLSIExp);
FB.comp.push(FB.compOptRemoteExp);
FB.comp.push(FB.wirelessSenSNetExp);
FB.comp.push(FB.compOrgArchExp);

FB.encExp = {
	"1" : "Design and Simulate Various Comparators and Multipliers",
	"2" : "Design and Simulate Analog to Digital Converter and Digital to Analog Converter",
	"3" : "Design and Simulation of Decoders:Encoders:Multiplexer and Demultiplexer",
	"4" : "Design and Simulation of Arithmetic Logic Unit",
	"5" : "Design and Simulation of Various Counters and Shift Registers",
	"6" : "Design and Simulate Various Code Converters",
	"7" : "Design and Implementation of Various Arithmetic Circuits",
	"8" : "Design and Simulate Astable and Monostable Multivibrators using IC 555",
	"9" : "Design and Simulate Inverting and Non Inverting Operational Amplifiers - 1",	
	"10": "Design and Simulate Differentiator and Integrator Operational Amplifiers",
	//"11" : "Design and Simulate Inverting and Non Inverting Operational Amplifiers - 2",
};

FB.microwaveExp = {
	"1" : "Design and Characterisation of Strip Line",
	"2" : "Design and Characterisation of Microstrip Line",
	"3" : "Design and Characterization the slot line",
	"4" : "Half Wavelength Capacitively Coupled Linear Resonator",
	"5" : "Square Resonator",
	"6" : "Patch Antenna",
	"7" : "Dipole Antenna",
	"8" : "Yagi - Uda Antenna",
	"9" : "Design and Characterisation of Coplanar Waveguide",
	"10" : "Hairpin Filter",
};

FB.eleMagExp = {
	"1" : "Coulomb's Law",
	"2" : "Electrostatic Fields I",
	"3" : "Electrostatic Fields II",
	"4" : "Boundary Conditions",
	"5" : "Electric Field in Material Space",
	"6" : "Magnetostatic Fields",
	"7" : "Application of Faraday's Laws",
	"8" : "Wave Propagation",
	"9" : "Distance and Altitude Measurement",
	"10" : "Plane Waves - Reflection and Refraction",
};

FB.quiuingNetExp = {
	"1" : "Infinite Capacity Markovian Models",
	"2" : "Finite Capacity Markovian Models",
	"3" : "Retrial Markovian Models for Bulk Arrival/Service",
	"4" : "Infinite Capacity Non Markovian Models",
	"5" : "Finite Capacity Non Markovian Models",
	"6" : "Non Markovian Models for Bulk Arrival/Service",
	"7" : "Discrete time Experiments",
	"8" : "Open Tandem Queue",
	"9" : "Tandem Queue with feedback",
	"10" : "Open Queueing Network Experiment",
	"11" : "Closed Queueing Network Experiment",
	"12" : "Fluid Queue Experiments",	
};

FB.VirtualEleCktExp = {
	"1" : "Parallel RC Circuits",
	"2" : "Parallel LC Circuits",
	"3" : "Thevenin's Theorem",
	"4" : "Series RL Circuits",
	"5" : "Norton's theorem",
	"6" : "Series LCR Circuits",
	"7" : "Kirchhoff's Laws",
	"8" : "Series RC Circuits",
	"9" : "Series LC Circuits",
	"10" : "Parallel LCR Circuits",
	"11" : "Parallel RL Circuits",
	
};


FB.DigiElectroCirExp = {
		
		"1" : "Analysis of Functions of BCD-TO-7-segment Decoder / Driver and Operation of 7-segment LED Display",
		"2" : "Characterization of Digital Logic Families",
		"3" : "Analysis and Synthesis of Boolean Expressions using Basic Logic Gates",
		"4" : "Analysis and Synthesis of Logic Functions using Multiplexers",
		"5" : "Analysis and Synthesis of Logic Functions using Decoders",
		"6" : "Analysis and Synthesis of Boolean Relations using Digital Comparators",
		"7" : "Analysis and Synthesis of Arithmetic Expressions using Adders / Subtractors",
		"8" : "Analysis and Synthesis of Sequential Circuits using Basic Flip-Flops",
		"9" : "Analysis and Synthesis of Multi-bit Sequential Circuits using Shift Registers",
		"10" : "Design of Arithmetic Logic Unit (ALU)",	
		
};

FB.DigiSigProExp = {
		
		"1" : "Study of sampling theorem, effect of undersampling",
		"2" : "Study of Quantization of continuous-amplitude, discrete-time analog signals",
		"3" : "Study of different types of Companding Techniques",
		"4" : "Study of properties of Linear time-invariant system",
		"5" : "Study of convolution: series and parallel system",
		"6" : "Study of Discrete Fourier Transform (DFT) and its inverse",
		"7" : "Study of Transform domain properties and its use",
		"8" : "Study of FIR filter design using window method: Lowpass and highpass filter",
		"9" : "Study of FIR filter design using window method: Bandpass and Bandstop filter",
		"10" : "Study of Infinite Impulse Response (IIR) filter",	
		
		
};


FB.FadingMobileExp = {
		
		"1" : "Understanding of Pathloss",
		"2" : "Pathloss with Shadowing",
		"3" : "Horizontal and Vertical Beam Pattern",
		"4" : "Calculation of Boundary Coverage Probability",
		"5" : "Calculation of SINR including Beam Tilt",
		"6" : "Frequency Reuse",
		"7" : "Sectoring",
		"8" : "Handoff",
		"9" : "Flat Fading",
		"10" : "Frequency Selective Fading",	
	 	
};



FB.RealTimeEmbSysExp = {
		
		"1" : "DF-Part1: Digital FIR filter design and simulation",
		"2" : "DF-Part2: Fixed point Implementation of Digital FIR Filter",
		"3" : "DF-Part3: MCU-DAC interfacing and generation of ramp wave",
		"4" : "DF-Part4: Interfacing of ADC and data trasnfer by software polling, study of aliasing",
		"5" : "DF-Part5: ADC triggering through timer(On Chip Timer)",
		"6" : "DF-Part6: Interrupt driven data transfer from ADC ",
		"7" : "DF-Part7 Implementation of Digital FIR Filter on 8051 Microcontroller",
		"8" : "SM-Part1: LCD - MCU interfacing and displaying a string",
		"9" : "SM-Part2 Keyboard-MCU interfacing take a input from keypad and display on LCD",
		"10" : "SM-Part3: Stepper Motor Control Using ATMEGA-16 Microcontroller",
		"11" : "HN-Part1: Interface a LED matrix and display a number on the matrix.",
		"12" : "HN-Part2: Interfacing 4x4 switch matrix with the microcontroller",
		"13" : "HN-Part3: Implementation of Hopfield network in C to recognize a simple ASCII character",
		"14" : "HN-Part4: Implementation of Hopfield Network on ATMEGA-16 microcontroller",
		"15" : "SC: Serial Communication between micro controller and PC",
	 	"16" : "TC: Temperature control using ATmega16",
};

FB.basicEleExp = {
		"1" : "Familiarisation with Resistor",
		"2" : "Familiarisation with Capacitor",
		"3" : "Familiarisation with Inductor",
		"4" : "Ohm's Law",
		"5" : "VI Characteristics of a Diode",
		"6" : "Half Wave Rectification",
		"7" : "Full Wave Rectification",
		"8" : "Capacitative Rectification",
		"9" : "Zener Diode-Voltage Regulator",
		"10" : "BJT Common Emitter Characteristics",
		"11" : "BJT Common Base Characteristics",
		"12" : "RC Differentiator and Integrator",
		"13" : "Voltage Multipliers",
		"14" : "Studies on BJT CE Amplifier",
		"15" : "RC Frequency Response",
};


FB.enc = [];
FB.enc.push(FB.encExp);
FB.enc.push(FB.microwaveExp);
FB.enc.push(FB.eleMagExp);
FB.enc.push(FB.quiuingNetExp);
FB.enc.push(FB.VirtualEleCktExp);
FB.enc.push(FB.DigiElectroCirExp);
FB.enc.push(FB.DigiSigProExp);
FB.enc.push(FB.FadingMobileExp);
FB.enc.push(FB.RealTimeEmbSysExp);
FB.enc.push(FB.basicEleExp);


FB.sensLab = {
	"1" : "Characterize the temperature sensor (RTD)",
	"2" : "Characterize the temperature sensor (Thermocouple)",
	"3" : "Measurement of level in a tank using capacitive type level probe",
	"4" : "Characterize the LVDT",
	"5" : "Characterize the strain gauge sensor",
	"6" : "Simulate the performance of a chemical sensor",
	"7" : "Simulate the performance of a bio-sensor",
	"8" : "Design an orifice plate for a typical application"
};

FB.indusLab = {
	"1" : "Study hardware and software platforms for DCS",
	"2" : "Simulate analog and digital function blocks",
	"3" : "Study understand and perform experiments on timers and counters ",
	"4" : "Logic implementation for traffic Control Application ",
	"5" : "Logic implementation for Bottle Filling Application ",
	"6" : "Tune PID controller for heat exchanger using DCS",
	"7" : "FBD for autoclavable laboratory fermentor",
	"8" : "Develop graphical user interface for the fermentor plant"
};

FB.elctMachLab = {
	
	"1" : "Load Test On Separately Excited DC Motor",
	"2" : "Speed Control of Separately Excited DC Motor",
	"3" : "No Load Test on Three Phase Induction Motor",
	"4" : "Blocked Rotor Test on Three Phase Induction Motor",
	"5" : "Open Circuit Test on Three Phase Alternator",
	"6" : "Short Circuit Test on Three Phase Alternator",
	"7" : "Load Test on Three Phase Alternator",
	"8" : "V and Inverted V curves of Synchronous Motor",
};

FB.plcLab = {
	"1" : "Study hardware and software used in PLC ",
	"2" : "Implementation of Logic gates ",
	"3" : "Develop a ladder program for DOL starter",
	"4" : "Develop an application using On-Delay timer.",
	"5" : "Develop an application using OFF Delay Timer",
	"6" : "Develop an application using UP/DOWN counter",
	"7" : "Implementation of PLC Arithmatic instructions",
	"8" : "Study of PID controller instruction for a pilot plant"
};


FB.saLab = {
		"1" : "DCS (Yokogawa CENTUM CS 1000)",
		"2" : "Substation Automation (Theory)",
		"3" : "Circuit Breaker Status Indication from field input",
		"4" : "Control of Group Operated Switches (GOS) from workstation",
		"5" : "Monitoring Feeder parameter from workstation",
		"6" : "Fault scenario simulation in a feeder",
		"7" : "Fault scenario simulation in a Transformer /Bus",
		"8" : "Load Transfer from one Feeder to other during Transformer Maintenance",
		"9" : "Control Of Bus Voltages Through Onload Tap Changes",
		"10" : "Development of 11KV/433 volts substation automation scheme using PLC for normal load operation",
		"11" : "Development of 11KV/433 volts substation automation scheme using PLC for timer ON/OFF load control",
		"12" : "Development of 11KV/433 volts substation automation scheme using PLC for cyclic ON/OFF load control",
		"13" : "Autoreclosure And Sectionalizer Operation"
	};

FB.IEDLab = {
		"1" : "Introduction to Programmable Logic Controller and Digital I/O Interface to PLC",
		"2" : "Introduction to Ladder Logic",
		"3" : "PLC On-Delay Timer Instruction",
		"4" : "PLC Off-Delay Timer Instruction",
		"5" : "PLC Retentive Timer On Instruction",
		"6" : "PLC Count-Up instruction",
		"7" : "PLC Count-Down instruction",
		"8" : "Garage Shutter Opening and Closing Using PLC",
		"9" : "Container Filling Process Using PLC",
		"10" : "Simultaneous output interlock using PLC",
		"11" : "Maximum Simultaneous Operations Limiter using PLC",
		"12" : "Motor forward and reverse direction control using PLC"
	};

FB.EMLab = {
		"1" : "Magnetic Field Behaviour in single coil",
		"2" : "Rotating Magnetic Field Behaviour in two coils",
		"3" : "Rotating Magnetic Field Behaviour in three coils",
		"4" : "The DC Test for Stator Resistance",
		"5" : "No-Load Test",
		"6" : "Blocked-Rotor Test",
		"7" : "Stator Resistance Starter",
		"8" : "Auto Transformer Starting",
		"9" : "Star-Delta Starting"
			
	};
FB.ergonLab = {
		"1" : "Static anthropometry, standing heights",
		"2" : "Arm forward reaches, standing erect and forward bend",
		"3" : "Sitting Antropometry, static heights",
		"4" : "Horizontal work surface at around elbow height",
		"5" : "Effective work platform height, standing",
		"6" : "Effective vertical work surface",
		"7" : "Hand dimension",
		"8" : "Human dimensional consideration for general seating",
		"9" : "Squatting posture",
		"10" : "Body movement ranges",		
};

FB.anthroLab = {
		"1" : "Identification of Prehistoric handaxe",
		"2" : "Identification of finger print patterns",
		"3" : "Pottery - Virtual Reconstruction of Shapes",
		"4" : "Calculation of Indices",
		"5" : "Obtain the main line formula",
		"6" : "Skeleton - Assembling, Identification & labeling",
		"7" : "Blood Group Techniques",
		"8" : "Hunting, Fishing, Gathering Tools",
		"9" : "Mendel's Law",
};

FB.hciLab = {
		"1" : "Serial Position Effect",
		"2" : "Weber's Law",
		"3" : "Sensitivity, Errors And Task Complexity Measurements For Pointing Devices",
		"4" : "Fitts Law",
		"5" : "Hick Hyman's Law",
		"6" : "GOMS Model",
		"7" : "Consistency and Inconsistency In Interaction",
		"8" : "Prototyping of Control Panel of Domestic Appliances",
		"9" : "Prototyping of TV Remote Control Panel",
		"10" : "Card Sorting Technique",
};

FB.analogNetMeasurementLab = {
		"1" : "Medium Resistance Measurement by Ammeter Voltmeter Metheod",
		"2" : "Measurement of Capacitance by Wien Series Bridge",
		"3" : "Measurement of Relative permittivity by Schering Bridge",
		"4" : "Mutual Inductance measurement by Campbell's Bridge",
		"5" : "Verification of Substitution Theorem", 
		"6" : "Mutual Inductance measurement by Heaviside Bridge",
		"7" : "Self-Inductance and Capacitance measurement by Resonance Bridge",
		"8" : "Low Capacitance measurement by High Voltage Schering Bridge",
        "9" : "Self Inductance measurement of an unknown coil by Heaviside Campbell Equal Ratio Bridge",
        "10" : "Verification of Compensation Theorem",
        "11" : "Verification of Superposition Theorem",
        "12" : "Verification of Thevenin Theorem",
        "13" : "Verification of Reciprocity Theorem",
        "14" : "Verification of Norton Theorem",
        "15" : "Verification of Tellegen's Theorem",
        "16" : "Measurement of Capacitance by Schering Bridge",
        "17" : "Mesurement of Self Inductance by Owen Bridge",
        "18" : "Measurement of Self Inductance by Maxwell's Bridge",
        "19" : "Measurement of Capacitance by Carey Foster Bridge",
        "20" : "Verification of Millman's Theorem",
        "21" : "Tests on Single Phase Transformer",
        "22" : "Verification of Maximum Power Transfer Theorem",
        "23" : "Determination of different parameters of Two-port network and verification of their interrelations",
        "24" : "Measurement of Self-Inductance by Maxwell Bridge",
        "25" : "Measurement of Capacitance by De Sauty's (Modified) bridge ",
        "26" : "To study the Wien Robinson's Frequency Bridge",
        "27" : "To study the Kelvin Double Bridge for Low resistance measurement",
        "28" : "To determine Mutual Inductance measurement by Campbell's Modification of Heaviside Bridge",
        "29" : "To determine the High Resistance by Megohm Bridge method",
        "30" : "Q meter Experiment",
        "31" : "Precision Resistance Measurement by Carey Foster Slide-Wire Bridge",
        "32" : "R-L-C Circuit Analysis",
        "33" : "Measurement of Self Inductance of High Quality Factor Coil by Hay's Bridge",
        "34" : "Mutual Inductance measurement by Heydweiller Bridge",
        "35" : "Measurement of Self Inductance accurately by Anderson's Bridge",
        "36" : "Three Phase Power Measurement",
};


FB.pneumaticLab = {
		"1" : "Select pneumatic cylinder for given load and speed requirement",
		"2" : "Calculate load carrying capacity and speed for given pneumatic cylinder",
		"3" : "Develop pneumatic circuit to operate direct single acting cylinder",
		"4" : "Develop pneumatic circuit to operate direct double acting cylinder",
		"5" : "Develop pneumatic circuit to operate indirect single acting cylinder",
		"6" : "Develop pneumatic circuit to operate indirect double acting cylinder",
		"7" : "Speed control of a pneumatic cylinder",
		"8" : "Develop pneumatic circuit to transfer block from a magazine",
		"9" : "Develop pneumatic circuit for plastic components embossing",
		"10" : "Develop pneumatic circuit to press glued components",
		"11" : "Develop pneumatic circuit for sequencing of cylinder"
}

FB.processLoopLab = {
		"1" : "Size and select a pneumatically operated control valve for a particular application",
		"2" : "Configure a Transmitter for a particular process application",
		"3" : "Calibration and fault finding of current to pneumatic converter",
		"4" : "Calibration and fault finding of pneumatic to current converter",
		"5" : "Design High/Low selector for interlocking in process industry",
		"6" : "Design an alarm annunciator",
		"7" : "Configure a Transmitter for level control system",
		"8" : "Calibration and fault finding of I/P converter for level control system",
		"9" : "Calibration and fault finding of P/E converter for level control system",
		"10" : "Design High/Low selector for interlocking in process industry for level loop",
		"11" : "Design an alarm annunciator for level control system",
		"12" : "Estimate the time to fill the tank for the level control system",
		"13" : "Estimate the time to empty the tank for the level control system(Gravity flow)",
		"14" : "Configure a Transmitter for temperature control system",
		"15" : "Calibration and fault finding of I/P converter for temperature control system",
		"16" : "Calibration and fault finding of P/E converter for temperature control system",
		"17" : "Design High/Low selector for interlocking in process industry for temperature loop",
		"18" : "Design an alarm annunciator for temperature control system",
		"19" : "Configure a Transmitter for pressure control system",
		"20" : "Calibration and fault finding of I/P converter for pressure control system",
		"21" : "Calibration and fault finding of P/E converter for pressure control system",
		"22" : "Design High/Low selector for interlocking in process industry for pressure loop",
		"23" : "Design an alarm annunciator for pressure control system",
		"24" : "Configure a Transmitter for flow control system",
		"25" : "Calibration and fault finding of I/P converter for flow control system",
		"26" : "Calibration and fault finding of P/E converter for flow control system",
		"27" : "Design High/Low selector for interlocking in process industry for flow loop",
		"28" : "Design an alarm annunciator for flow control system",
}


FB.elec = [];
FB.elec.push(FB.sensLab);
FB.elec.push(FB.indusLab);
FB.elec.push(FB.elctMachLab);
FB.elec.push(FB.plcLab);
FB.elec.push(FB.saLab);
FB.elec.push(FB.IEDLab);
FB.elec.push(FB.EMLab);
FB.elec.push(FB.ergonLab);
FB.elec.push(FB.anthroLab);
FB.elec.push(FB.hciLab);
FB.elec.push(FB.analogNetMeasurementLab);
FB.elec.push(FB.pneumaticLab);
FB.elec.push(FB.processLoopLab);

FB.bioExp = {
	"1" : "To simulate Electrocardiogram Waveform ",
	"2" : "To simulate Electroencephalogram Signal",
	"3" : "To simulate Electromyogram Signal",
	"4" : "To Simulate Defibrillator",
	"5" : "To simulate Pacemaker",
	"6" : "To simulate Haemodialysis Machine",
	"7" : "To simulate Motor Nerve Conduction Velocity",
	"8" : "To simulate Biopotential Amplifier ",
	"9" : "To simulate ECG Pulse missing detector ",
	"10": "To simulate 12 Lead Ecg Signals"
};

FB.bioReactorExp = {
	"1" : "Bioreactor- Basics",
	"2" : "Control Characteristics of pH Controller",
	"3" : "Estimation of growth kinetic parameters in batch fermentation",
	"4" : "Simultaneous measurement of specific growth / death rate of micro organisms",
	"5" : "Determination of Volumeteric Mass Transfer Co-efficient (Dynamic method)",
	"6" : "Determination of Volumeteric Mass Transfer Co-efficient (Oxygen balance method)",
	"7" : "Study of Enzyme Kinetics",
	"8" : "Batch Microbial Cultivation",
	"9" : "Fed-Batch Microbial Cultivation",
	"10" : "Continuous Microbial Cultivation",
	"11" : "Biopolymer Production by Microbes",
	"12" : "Acetone-Butanol-Ethanol Fermentation",
	"13" : "Propionic Acid Fermentation",
	"14" : "1, 3 Propanediol Fermentation",
	"15" : "Immobilization of whole cells",
	"16" : "Plant Cell-Batch Cultivation",
	"17" : "Animal Cell Batch Culture",
	"18" : "Animal Cell Fed Batch Cultivation",
};

FB.bioProteomicsExp = {
	"1" : "Gel-based Proteomics to Analyze Human Serum Proteome",	
	"2" : "Gel-based proteomics to analyze bacterial proteome",
	"3" : "Gel-based Proteomics to Analyze Plant Proteome",
	"4" : "In-Gel Digestion of Proteins",
	"5" : "Sample Preparation for the MALDI-TOF MS Analysis",
	"6" : "MALDI-TOF Instrumentation and MS Analysis of Serum Proteins",
	"7" : "MS Data Analysis- Peptide Mass Fingerprinting (PMF)",
	"8" : "Determination of Molecular Weight of Intact Proteins using MALDI-TOF MS",
	"9" : "Introduction to Bio-informatics Tools: Sequence Alignment",
	"10" : "Homology Modeling",
	"11" : "Protein Function Annotation",
	"12" : "Molecular Docking",
};

FB.bioInspiredExp = {
	"1" : "Controlling a servo motor in a bio-robotic environment",	
	"2" : "Understanding the kinematics of a robotic upper arm",
	"3" : "Understanding the kinematics of a robotic upper arm - Interactive",
	"4" : "Light sensing process in a neural circuit",
	"5" : "Mechanism behind the movement of a Walker robot with 4 neurons",
	"6" : "Interaction study with Neuronal Circuits",
	"7" : "Constructing a six core brain like circuit",
	"8" : "Pattern recognition in a hardware neural network",
};

FB.bioInfoVir1Exp = {
	"1" : "Retrieving sequence data from Entrez",	
	"2" : "Locating the chromosome of a Gene",	
	"3" : "Retrieve gene expression data from GEO",	
	"4" : "Retrieving articles using PubMed",	
	"5" : "Finding ORF of a Given Sequence",	
	"6" : "Retrieving structural data of a protein using PDB database",	
	"7" : "Retrieving Motif Information of a Protein Using Prosite",	
	"8" : "Retrieving Gene Information from TAIR database",	
	"9" : "Designing a primer",	
}

FB.bioInfoVir2Exp = {
		"1" : "Global alignment of two sequences - Needleman-Wunsch Algorithm",	
		"2" : "Smith-Waterman Algorithm - Local Alignment of Sequences",	
		"3" : "Pairwise Sequence Alignment using BLAST",	
		"4" : "Pairwise sequence alignment using FASTA",	
		"5" : "Aligning Multiple Sequences with CLUSTAL W",	
		"6" : "Construction of Cladogram",	
		"7" : "Phylogenetic Analysis using PHYLIP - Rooted trees",	
		"8" : "Phylogenetic Analysis using PHYLIP - Unrooted trees",	
		"9" : "Genome Annotation and Multiple Sequence Allignment",	
}


FB.bioInfoVir3Exp = {
		"1" : "Visualizing the Secondary Structure of a Protein",	
		"2" : "Calculating the Distance between the Ligand and a Particular Amino acid",	
		"3" : "Finding the Active Site Pockets of a given Protein Molecule",	
		"4" : "Primary Structure Analysis of a Protein Using ProtParam",	
		"5" : "Secondary structure analysis of a protein using SOPMA",	
		"6" : "Surface Analysis of a Protein Using CASTp",	
		"7" : "Retrieving details of a drug molecule",	
		"8" : "Converting chemical file formats",	
		"9" : "Homology Modeling using Modeller",	
		"10" : "Protein- Ligand Interaction",	
}


FB.systBioVirExp = {
		"1" : "Mathematical modeling and simulating of Biochemical network",	
		"2" : "Import and simulate models from different databases ",	
		"3" : "To Import and simulate a model from the repository ",	
		"4" : "SBML-A markup language for mathematical models in systems biology using cell designer",	
		"5" : "Creating and Visualizing a Simple Network Model",	
		"6" : "Analysis of biological networks for feature detection",	
		"7" : "Integrating Biological Networks and Microarray Expression data",	
		"8" : "Analyzing the network by finding sub modules",	
}


FB.neuroVirLabExp = {
		
		"1" : "Brain Slice Preparation",	
		"2" : "Simple Neuron Model - the HH neuron ",	
		"3" : "Patch Clamp Technique ",	
		"4" : "Current Clamp Technique ",	
		"5" : "Voltage Clamp Technique",	
		"6" : "Study of Synaptic Transmission (Remote trigger) ",	
		"7" : "Measuring Field Potentials Using MEA chips ",	
		"8" : "Understanding the Passive Properties of a Simple Neuron (Remote trigger)",
		"9" : "Effects of Ion Channels in Membrane Biophysics (Remote trigger)",
		"10": "Effect of Noise on Spiking Neurons (Remote trigger)",
}


FB.neuronSimLabExp = {
		
		"1" : "Modeling resting potentials in Neurons",	
		"2" : "Modeling action potentials ",	
		"3" : "Modeling the delayed rectifier Potassium channels ",	
		"4" : "Modeling the sodium ion channel and its effects on neural signaling",	
		"5" : "Current Clamp protocol",	
		"6" : "Voltage Clamp Protocol",	
		"7" : "Understanding Frequency-Current relationship",	
		"8" : "Understanding first spike latency - current relationship",
		"9" : "Voltage-Current (VI) plot",
		"10": "Effects of pharmacological blockers on action potential ",
}

FB.bioChemVirLabExp = {
		"1" : "Qualitative Analysis of Carbohydrates",	
		"2" : "Isoelectric Precipitation of Proteins: Casein from Milk",	
		"3" : "Quantitative Estimation of Amino Acids by Ninhydrin",	
		"4" : "Separation of Amino Acids by Thin Layer Chromatography",	
		"5" : "Estimation of Saponification Value of Fats/Oils",	
		"6" : "Detection of Adulteration in Milk",	
		"7" : "Qualitative Analysis of Amino Acid",	
		"8" : "Estimation of Iodine Value of Fats and Oils",
		"9" : "Titration Curves of Aminoacids",
		"10": "Estimation of blood glucose by Glucose oxidase method",
}

FB.bioChem2VirLabExp = {
		"1" : "Isolation of &beta; -Amylase from Sweet Potato",	
		"2" : "Gelatin Zymography",	
		"3" : "Extraction of Caffeine from Tea",	
		"4" : "Construction of Maltose Standard Curve by DNS Method",	
		"5" : "Isolation of Plant Pigments by Column Chromatography",	
		"6" : "Structural Studies of Phycobiliproteins from Spirulina",	
		"7" : "Construction of Protein Standard Curve using Folin's Lowry Method",	
		"8" : "Effect of Substrate Concentration on Enzyme Kinetics",
		"9" : "Effect of temperature on enzyme kinetics",
		"10": "Hydrolysis of Ester using orange peel esterase",
}

FB.immunoVir1LabExp = {
		"1" : "Collection of Serum from Blood",	
		"2" : "Blood Grouping Experiment",	
		"3" : "Latex Agglutination",	
		"4" : "INDIRECT Elisa",	
		"5" : "DIRECT Elisa",	
		"6" : "SANDWICH Elisa",	
		"7" : "ELISPOT Assay",	
		"8" : "Antibody Labeling with HRP",
		"9" : "Extraction of IgG Antibodies from Immunized Hen Egg",
		"10": "Isolation of lymphocytes from whole blood",
}



FB.immunoVir2LabExp = {
		"1" : "Ouchterlony Double Diffusion -Titration",	
		"2" : "Ouchterlony Double Diffusion - Patterns",	
		"3" : "Purification of IgG Antibodies with Ammonium Sulphate",	
		"4" : "Removal of Thymus and Spleen from Mice",	
		"5" : "Mouse Anesthesia and Blood Collection",	
		"6" : "Parenteral Injections",	
		"7" : "Purification of IgG Antibodies using Affinity Chromatography",	
		"8" : "Fluorescent Labeling of Antibodies",
		"9" : "Fragmentation of IgG Using Papain",
		"10": "Fragmentation of IgG using pepsin",
}



FB.microBioVir1LabExp = {
		"1" : "Gram Stain Technique",	
		"2" : "Aseptic Technique and the Transfer of Microorganisms",	
		"3" : "Streak Plate Method",	
		"4" : "Motility Test",	
		"5" : "Catalase and Coagulase Test",	
		"6" : "Selective and Differential Media for Identifying Microorganisms",	
		"7" : "Lecithinase Test",	
		"8" : "Bacterial Growth Curve",
		"9" : "Carbohydrate Fermentation Test",
		"10": "Differential and Cytological Staining Techniques",
		"11": "Antibiotic Susceptibility Testing",
		"12": "Methylene Blue Reductase Test",
}

FB.microBioVir2LabExp = {
		"1" : "Voges-Proskauer Test",	
		"2" : "Triple Sugar Iron Agar ",	
		"3" : "Urease Test",	
		"4" : "Litmus Milk Test",	
		"5" : "Slide Culture Technique for Fungi",	
		"6" : "Bacteriophage Plaque Assay for Phage Titer",	
		"7" : "Isolation and Identification of Auxotrophic and Drug Resistant Mutants",	
		"8" : "Isolation and Identification of Two Bacterial Unknowns",
		"9" : "Routes of Viral Inoculation in Embryonated Eggs",
		"10": "16S Ribosomal RNA Sequencing",
		
}


FB.popEcol1LabExp = {
		
		"1" : "Interspecific Competition and Coexistence",
		"2" : "Conserving an Endangered Species",	
		"3" : "Effect of Interspecific Competition on Species Border",	
		"4" : "Metapopulation Dynamics -Levins Model",	
		"5" : "Parasitoid-Host Dynamics",	
		"6" : "Spread of a Pest Population - Population Invasion",	
		"7" : "Population with Continuous and Discrete Growth",	
		"8" : "Age Structured Leslie Matrix",
		"9" : "Stage Structured Leslie Matrix",
		"10": "Logistic Population Growth: Continuous and Discrete",
}


FB.popEcol2LabExp = {
		
		"1" : "Predator - Prey Dynamics - Rats and Snakes (Lotka Volterra Simulation)",
		"2" : "Effect of Predator Efficiency on Equilibrium Densities & Pop. Stability",	
		"3" : "Effect of Social Behavior Amongst Predator-Prey Populations",	
		"4" : "Effects of Carrying Capacity and Satiation in Predator-Prey Dynamics",	
		"5" : "Harvesting a Prey Population",	
		"6" : "Optimal Foraging with Minimal Time: A Case of Searching Predators",	
		"7" : "Optimal PollinatorsOptimal Foraging : Searching Predators that Maximize Energy",	
		"8" : "Optimal Pollinators",
		"9" : "Optimal Foraging: Sit-and-wait Predators that Maximize Energy",
		"10": "Microparasite and Macroparasite - Host Dynamics ",
}




FB.moleBio1LabExp = {
		
		"1" : "Preparation of Buffer stocks (TBE,TE and TAE)",
		"2" : "Plasmid Isolation (Mini prep)",
		"3" : "Extraction of DNA from Fish Fins",
		"4" : "Hot Shot Method of DNA Extraction",
		"5" : "Agarose Gel Electrophoresis (AGE)",
		"6" : "Restriction Digestion",
		"7" : "Maintenance and Storage of DH5alpha E.coli cells",
		"8" : "Preparation of Competent Cell (Calcium Chloride Treatment) ",
		"9" : "Transformation of the Host Cells",
		"10" : "Extraction of DNA from Agarose gel",
}

FB.moleBio2LabExp = {
		
		"1" : "Preparation of Equilibrated Phenol",
		"2" : "Isolation of RNA",
		"3" : "Polyacrylamide Gel Electrophoresis",
		"4" : "Ligation ( Using T4 DNA Ligase)",
		"5" : "Polymerase Chain Reaction (PCR)",
		"6" : "Electroblotting",
		"7" : "Plating of the Bacteriophage",
		"8" : "Plasmid Curing",
		"9" : "Extraction of Bacteriophage DNA from Large Scale Cultures Using Proteinase K and SDS",
		"10" : "Preparation of stocks of bacteriophage lambda by plate lysis and elution",
}


FB.cellBio1LabExp = {
		
		"1" : "Light Microscope",
		"2" : "Cell Organization and Sub Cellular Structure Studies (Prokaryotic and Eukaryotic)",
		"3" : "Transmission Electron Microscopy",
		"4" : "Isolation of Mitochondria",
		"5" : "Isolation of Chloroplast",
		"6" : "Isolation of Endoplasmic Reticulum",
		"7" : "Basics of Plant Tissue Culture",
		"8" : "Glucose Uptake Assay",
		"9" : "Transfection",
		"10" :"Western Blotting",
}


FB.cellBio2LabExp = {
		
		"1" : "Lignin Staining",
		"2" : "Hemocytometer (Counting of Cells)",
		"3" : "Maintenance of Mamallian Cell Lines",
		"4" : "Cell Attachment",
		"5" : "Cell Migration",
		"6" : "Actin Assembly",
		"7" : "Mitosis in Onion Root Tips",
		"8" : "Cell Proliferation",
		"9" : "Toxicity studies in Zebrafish",
		"10" : "Primary Cell Culture",
}

FB.virBioPhyLabExp = {
		
		"1" : "Using a light microscope (Remote Trigger)",
		"2" : "Observing an animal cell using a light microscope (Remote Trigger)",
		"3" : "Study of RC Properties of Cell Membrane (Remote Trigger)",
		"4" : "Study of Electrically excitable cells (Remote trigger)",
		"5" : "Bursting phenomenon in biology via RC models (Remote Trigger)",
		"6" : "Micrometry (Remote Trigger)",
		"7" : "Multicompartmental modelling of biophysical behaviour of neurons (Remote Trigger)",
		"8" : "Understanding Photosynthesis as a Biologically Closed Process",
}





FB.bio = [];
FB.bio.push(FB.bioExp);
FB.bio.push(FB.bioReactorExp);
FB.bio.push(FB.bioProteomicsExp);
FB.bio.push(FB.bioInspiredExp);
FB.bio.push(FB.bioInfoVir1Exp);
FB.bio.push(FB.bioInfoVir2Exp);
FB.bio.push(FB.bioInfoVir3Exp);
FB.bio.push(FB.systBioVirExp);
FB.bio.push(FB.neuroVirLabExp);
FB.bio.push(FB.neuronSimLabExp);
FB.bio.push(FB.bioChemVirLabExp);
FB.bio.push(FB.bioChem2VirLabExp);
FB.bio.push(FB.immunoVir1LabExp);
FB.bio.push(FB.immunoVir2LabExp);
FB.bio.push(FB.microBioVir1LabExp);
FB.bio.push(FB.microBioVir2LabExp);
FB.bio.push(FB.popEcol1LabExp);
FB.bio.push(FB.popEcol2LabExp);
FB.bio.push(FB.moleBio1LabExp);
FB.bio.push(FB.moleBio2LabExp);
FB.bio.push(FB.cellBio1LabExp);
FB.bio.push(FB.cellBio2LabExp);
FB.bio.push(FB.virBioPhyLabExp);


FB.vibraExp = {
	"1" : "MI of Connecting Rod",
	"2" : "Impact test on cantilever Modal analysis",
	"3" : "Sine Sweep of base excitation of cantilever",
	"4" : "Forced response of SDOF",
	"5" : "Free response of SDOF",
	"6" : "Trifiliar Suspension",
	"7" : "SDOF System - Arbitrary Excitation",
	"8" : "Tuned Vibration Absorber"
};

FB.microExp = {
	"1" : "To study pulsed-heating of materials",
	"2" : "To study erosion mechanism from Lazarenko's model ",
	"3" : "To study various thermal models for EDM",
	"4" : "To study influence of process parameters on the Wire EDM",
	"5" : "Laser hardening using NdYAG laser system",
	"6" : "Laser spot welding using NdYAG laser system",
	"7" : "Study of Electrochemical machining process",
	"8" : "Study the effect of process parameters in electrochemical grinding"
};

FB.fabExp = {
	"1" : "Computer Controlled Cutting of wooden object",
	"2" : "3D Machining",
	"3" : "PCB design & fabrication",
	"4" : "Interface & Application Programming",
	"5" : "Digital Fabrication of Flexible Circuit board",
	"6" : "3D scanning",
	"7" : "Molding and Casting of Polyurethane parts",
    "8" : "Digital Fabrication and Project Development"
};




FB.machineDynamicsExp = {
		"1" : "Free vibration of cantilever beam",
		"2" : "Free vibration of simply supported beam",
		"3" : "Free vibration of fixed beam",
		"4" : "Forced vibration of SDOF system",
		"5" : "Base Excitation",
		"6" : "Rotating Unbalance",
		"7" : "2DOF Forced vibration",
		"8" : "Dynamic Vibration Absorber"
	};

FB.mechanicsOfMachineExp = {
		"1" : "Position analysis of Grashof four bar mechanism",
		"2" : "Velocity analysis of Grashof four bar mechanism",
		"3" : "Acceleration analysis of Grashof four bar mechanism",
		"4" : "Position analysis of NonGrashof four bar mechanism",
		"5" : "Velocity analysis of NonGrashof four bar mechanism",
		"6" : "Acceleration analysis of NonGrashof four bar mechanism",
		"7" : "Acceleration analysis of NonGrashof four bar mechanism",
		"8" : "Velocity analysis of Slider crank mechanism",
		"9" : "Acceleration analysis of Slider crank mechanism",
		"10" : "Position analysis of Slider crank mechanism with Offset",
		"11" : "Position analysis of Scotch Yoke Mechanism",
		"12" : "Velocity analysis of Scotch Yoke Mechanism",
		"13" : "Acceleration analysis of Scotch Yoke Mechanism",
		"14" : "Position analysis of Elliptical Trammel",
		"15" : "Hart Straight Line Mechanism",
		"16" : "Tchebichev Straight Line Mechanism",		
	};

FB.kinematicsExp = {
		"1" : "Drawing Board",
		"2" : "Three Point Path Synthesis with a RRRR Mechanism",
		"3" : "Position Analysis of Spherical 4 Bar Mechanisms",
		"4" : "Three Position Coordinated Motion Synthesis with a RRRR Mechanism",
		"5" : "Simulation of Universal Joint",
		"6" : "Position Analysis of a 4 Bar RRRR Grashofian Double Crank",
		"7" : "Position Analysis of a 4 Bar Grashofian Crank Rocker",
		"8" : "Position Analysis of a 4 Bar RRRR Grashofian Double Rocker",
		"9" : "Position Analysis of a 4 Bar RRRR Non Grashofian Double Rocker",
		"10" : "Position Analysis of a 4 Bar RRRP Grashofian Slider Crank",
		"11" : "Position Analysis of a 4 Bar RRRP Grashofian Slider Rocker",
		"12" : "Position Analysis of a 4 Bar RRRP Non Grashofian Slider Rocker",
		"13" : "Position Analysis of a 4 Bar RRPR Grashofian Inverted Slider Crank",
		"14" : "Position Analysis of a 4 Bar RRPR Grashofian Inverted Slider Crank Rocker",
		"15" : "Position Analysis of a 4 Bar RRPR Non Grashofian Inverted Slider Double Rocker",
		"16" : "Dead Center Synthesis with RRRR Mechanism",
		"17" : "Dead Center Synthesis with RRRP Mechanism",
		"18" : "Two Position Coordinated Motion Synthesis with a RRRP Mechanism",
		"19" : "Three Position Coordinated Motion Synthesis with a RRRP Mechanism",
		"20" : "Two Position Coordinated Motion Synthesis with a RRRR Mechanism",
		"21" : "Four Point Path Synthesis with a RRRR Mechanism",
		"22" : "Three Point Path Synthesis with Coordinated Motion using a RRRR Mechanism",
		"23" : "Three Position Rigid Body Guidance with a RRRR Mechanism",
		"24" : "Three Position Rigid Body Guidance with a RRRP Mechanism",
		"25" : "Peaucellier Mechanism",
		"26" : "Hart Straight Line Mechanism 1",
		"27" : "Hart Straight Line Mechanism 2",
		"28" : "Kempe Straight Line Mechanism",		
	};


FB.mineAutoVirlRealExp = {
		
		"1" : "Calibration of Inclined Tube Manometer by the use of Askania Minimeter",
		"2" : "Familiarization with Assmann Psychrometer and Estimation of Psychrometric Properties of Mine ",
		"3" : "Establishment of the Relationship between Kata Cooling Power and Air Velocity",
		"4" : "Determination of Shock Pressure Loss in Presence of Tub and Estimation of Drag coefficient",
		"5" : "Determination of Frictional Co-efficient of Mine Airways",
		"6" : "Determination of method factor for a duct",
		"7" : "Calibration of Orifice Plate",
		"8" : "Precise Traversing in a Duct using Pitot Tube",
		"9" : "Performance Evaluation of Mine Evasee Present in a Ventilation System",
		"10" : "Fan Rating Test",
};

FB.virCombAutoLabExp = {
		"1": "Measurement of laminar burning velocity",
		"2": "Characterization of laminar premixed flame using chemiluminescence sensor",
		"3": "Numerical characterization of laminar premixed methane-air flames",
		"4": "Observations on flame height of a laminar jet diffusion flame",
		"5": "Measurement of Turbulent Inverse Diffusion flame height",
		"6": "Visualization of swirling flow and flame in a burner", 
		"7": "Flame spread over a solid fuel surface",	
		"8": "Characterization of droplet combustion",
		"9": "Measurement of droplet size for an air-blast atomizer",
	};


FB.mech = [];
FB.mech.push(FB.vibraExp);
FB.mech.push(FB.microExp);
FB.mech.push(FB.fabExp);
FB.mech.push(FB.machineDynamicsExp);
FB.mech.push(FB.mechanicsOfMachineExp);
/*FB.mech.push(FB.kinematicsExp);*/
FB.mech.push(FB.mineAutoVirlRealExp);
FB.mech.push(FB.virCombAutoLabExp);

FB.feedbackQues = {
	"1": "How do you rate the online performance of the experiment?",
	"2": "To what extent did you have control over the interactions?",
	"3": "To what degree was the actual lab environment simulated?",
	"4": "Was the measurement and analysis of data easy for you?",
	"5": "The manuals were found to be helpful",
	"6": "Were the links provided consistent with the objectives of the experiment?", 
	"7": "Were the results of the experiment easily interpreted?",	
	"8": "A clear understanding of the experiment and related topics was gained"
};



FB.chemLabs = {
		"1" : "Unit Operation Reaction Engg Process Control Lab"
};

FB.chemUOREPCExp = {
		"1" : "Flow Through Pipes",
		"2" : "Flow Through Fittings",
		"3" : "Flow through orifice meter",
		"4" : "Flow through Venturi meter",
		"5" : "Flow through Packed Bed",
		"6" : "Flow through Fluidized Bed",
		"7" : "Reaction kinetic studies in a batch reactor",
		"8" : "Reaction kinetic studies in a mixed flow reactor",
		"9" : "Reaction kinetic studies in a plug flow reactor",
};

FB.chem = [];
FB.chem.push(FB.chemUOREPCExp);

FB.metallurgyLabs = {
	"1" : "EMF Series"	
};

FB.metalEMFExp = {
	"1" : "Construction of an EMF Series",	
};

FB.Metallurgy = [];
FB.Metallurgy.push(FB.metalEMFExp);

FB.civilLabs = {
		"1" : "Fluid Mechanics Lab (NITK)",
		"2" : "Strength of Meterials Lab (NITK)",
		"3" : "Surveying Lab",
		"4" : "Soil Mechanics Lab",
		"5" : "Basic Structural Analysis Lab",
		"6" : "Geotechnical Engineeering Lab",
		"7" : "Strength of Materials Lab (IIITH)",
		"8" : "Fluid Mechanics Lab (IIITH)",
};

FB.civilFMExp = {
		"1" : "Impact of Jet",
};

FB.civilSoMExp = {
		"1" : "Mohr's circle",
		"2" : "Bending Stresses",
		"3" : "Deflection in Cantilever",
		"4" : "Deflection in Beam",
};

FB.civilSLExp = {
		"1" : "Study of various parts of Auto Level",
		"2" : "Carry out Fly Leveling using Auto Level",
		"3" : "Profile Leveling using Auto Level",
		"4" : "Observations of Vertical and Horizontal angles using Total Station",
		"5" : "Study of Plane Table and its Accessories",
		"6" : "Detail Plotting by Radiation Method",
		"7" : "Detail Plotting by Intersection Method",
		"8" : "Detail Plotting by Resection Method",
		"9" : "Carry out Contouring in the field",
		"10" : "Study of Global Positioning System (GPS) and its Accessories",
		"11" : "Observations using GPS",
};

FB.civilSoilExp = {
		"1" : "Water Content Experiment",
		"2" : "Unit Weight Experiment",
		"3" : "Specific Gravity Experiment",
		"4" : "Grain Size Distribution Experiment",
		"5" : "Triaxial Test Experiment",
		"6" : "Permeability Experiment",
		"7" : "Compaction Test Experiment",
		"8" : "Consolidation Test Experiment",
		"9" : "Direct Shear Test Experiment",
		/*"10" : "Attenberg Limits Experiment",*/
};

FB.civilBSALExp = {
		"1" : "Single Span Beams Experiment",	
		"2" : "Continuous Beams Experiment",
		"3" : "Column Analysis Experiment",
		"4" : "Portal Frames Experiment",
		"5" : "Plates Experiment",
		"6" : "Rigid Joints Experiment",
		"7" : "Retaining Walls Experiment",
		/*"8" : "Trusses Experiment",
		"9" : "Arches Experiment",
		"10" : "Plastic Hinge Experiment",*/
};

FB.civilGeoExp = {
		"1" : "Free Swell Index Experiment",
		"2" : "California Bearing Ratio Test (CBR Test)",
		"3" : "pH Test",
		"4" : "Determination of Total Soluble Solids",
		"5" : "Core Cutter Experiment",
		"6" : "Vane Shear Test",
		"7" : "Total Sulphate Test",
		"8" : " Standard Penetration Test ",
		"9" : "Plate Load Test",
};

FB.civilSoMHExp = {
		"1" : "Tensile Test Experiment",
		"2" : "Impact Test Experiment",
		"3" : "Compression Test on Spring Experiment",
		"4" : "Torsion Test Experiment",
		/*"5" : "Compression Test Experiment",
		"6" : "Creep Test Experiment",
		"7" : "Fatigue Test Experiment",
		"8" : "Shear Test Experiment",
		"9" : "Principal Stresses Experiment",
		"10" : "Rockwell Hardness Experiment",		*/	
};

FB.civilFMHExp = {
		"1" : "Bernoulli's Experiment",
		"2" : "Venturi Meter Experiment",
		"3" : "Orifices Experiment",
		"4" : "Mouthpieces Experiment",
		"5" : "Reynold's Experiment",
		/*"6" : "Channels Experiment",
		"7" : "Weirs Experiment",
		"8" : "Vortices's Experiment",
		"9" : "Jets Experiment",
		"10" : "Turbines Experiment",*/
};


FB.civil = [];
FB.civil.push(FB.civilFMExp);
FB.civil.push(FB.civilSoMExp);
FB.civil.push(FB.civilSLExp);
FB.civil.push(FB.civilSoilExp);
FB.civil.push(FB.civilBSALExp);
FB.civil.push(FB.civilGeoExp);
FB.civil.push(FB.civilSoMHExp);
FB.civil.push(FB.civilFMHExp);

FB.labs = [];
FB.labs.push(FB.compLabs);
FB.labs.push(FB.encLabs);
FB.labs.push(FB.elecEnggLabs);
FB.labs.push(FB.bioTechLabs);
FB.labs.push(FB.mechLabs);
FB.labs.push(FB.chemLabs);
FB.labs.push(FB.civilLabs);
FB.labs.push(FB.chemSciLabs);
FB.labs.push(FB.phySciLabs);
FB.labs.push(FB.metallurgyLabs);
FB.labs.push(FB.otherDisciplinesLabs);


FB.labExp = [];
FB.labExp.push(FB.comp);
FB.labExp.push(FB.enc);
FB.labExp.push(FB.elec);
FB.labExp.push(FB.bio);
FB.labExp.push(FB.mech);
FB.labExp.push(FB.chem);
FB.labExp.push(FB.civil);
FB.labExp.push(FB.chemsci);
FB.labExp.push(FB.physci);
FB.labExp.push(FB.Metallurgy);
FB.labExp.push(FB.otherDiscip);

FB.feedback = function(dept,lab,exp) {
	//dept,lab,exp
	FB.getFeedbackQuestions();
	//var defaultOption = "<option value='0'>---All---</option>";
	var create = '';
	create += '<legend>Feedback - COE PUNE Virtual Lab</legend><div class="form-horizontal tarm" role="form">'
			+ '<div class="form-group"><label class="col-lg-2 control-label" for = "deptnm">Department Name</label><div class="col-lg-4" > <select id="deptnm" name ="department" class="large-selectBox form-control input-sm" style="font-size:15px;"><option value="'+dept+'">---Select---</option>';
	for ( var key in FB.departments) {
		create += "<option value=" + key + ">   " + FB.departments[key]+ "</option>";
	}

	create += '</select></div></div>'
		+ '<div class="form-group"><label class="col-lg-2">Lab Name</label><div class="col-lg-4"  ><span id="tstspann"><select	name= "lab" id="selLabs" class="large-selectBox  form-control input-sm" style="font-size:15px;"><option value="'+lab+'">---All---</option>';
		for ( var key in FB.labs[dept - 1]) {
			create += '<option value="' + key + '" >'
					+ FB.labs[dept - 1][key] + '</option>';
		}
	create += '</select></span></div></div>';

	create += '<div class="form-group"><label class="col-lg-2">Experiment Name</label><div class="col-lg-4"  ><span id="expspann"><select	name= "expt" id="selExp" class="large-selectBox form-control input-sm" style="font-size:15px;"><option value="'+exp+'">---All---</option>';
	for ( var key in FB.labExp[dept - 1][lab - 1]) {
		create += '<option value="'+ key+ '">'+ FB.labExp[dept - 1][lab - 1][key]	+ '</option>';
	}
	create += '</select></span></div></div>';
	$('#feedback').html(create);
	
	$('#deptnm option[value="' + dept + '"]').prop('selected', true);
	$('#selLabs option[value="' + lab + '"]').prop('selected', true);
	$('#selExp option[value="' + exp + '"]').prop('selected', true);
		
	$("#deptnm")
			.change(
					function() {
						var deptname = $("#deptnm").val();
						var selT = '<select id="selLabs" class="large-selectBox form-control input-sm"><option value="'+lab+'">---All---</option>';
						$('#tstspann').html('');
						if (FB.labs != null) {
							for ( var key in FB.labs[deptname - 1]) {
								selT += '<option value="' + key + '" >'
										+ FB.labs[deptname - 1][key] + '</option>';
							}
							
							$('#tstspann').html(selT + '</select>');
							$('#testinfo')
									.html(
											'<div class="alert alert-success">Please Select Test Now</div>');
						}
						
						$("#selLabs")
								.change(
										function() {
											var labname = $("#selLabs").val();
											var selT = '<select id="selExp" class="large-selectBox form-control input-sm"><option value="'+exp+'">---All---</option>';
											$('#expspann').html('');

											if (FB.labExp != null) {
												for ( var key in FB.labExp[deptname - 1][labname - 1]) {
													selT += '<option value="'
															+ key
															+ '">'
															+ FB.labExp[deptname - 1][labname - 1][key]
															+ '</option>';
												}
												$('#expspann').html(
														selT + '</select>');
												$('#testinfo')
														.html(
																'<div class="alert alert-success">Please Select Test Now</div>');
											}
										});
					});

	var tempdiv = '<div id = "temp" overflow = "auto"></div>';
	$('#feedback').append(tempdiv);
};

FB.getFeedbackQuestions = function() {
	try {
		AH.getQuestions('getall/questions', 'GET');
	} catch (e) {
		var msg = "There was an error in execution of Code";
		msg += "Error Description : " + e.message;
		UP.showCustomAlert('Error', msg);
	}
};

FB.showFeedbackQuestion = function(data) {
	try {
		if (data.dt != null) {
			var htm = '';
			var lpk = '';

			htm += '<table align="center" class="table table-condenced table-hover" style="font-size:100%""><tr><td width="5%"><b>No.</b></td><td width="55%"><b>Questions</b></td>';
			for ( var key in FB.FeedbackAnswers) {
				lpk += '<td><center><input type="radio" name="radio-{%=QID%}" id="{%=QID%}" value="'
						+ key + '"/></center></td>';
				htm += '<td width="8%"><center><b>' + FB.FeedbackAnswers[key] + "</b></center></td>";
			}
			htm += '</tr>';

			var boilerPlate = '<tr><td>{%=NO%}</td><td>{%=QTXT%}</td>'
					+ lpk + '</tr>';

			for ( var i = 0; i < data.dt.length; i++) {
				data.dt[i]["NO"] = (i + 1);
				htm += TM.interpolate(boilerPlate, data.dt[i]);
			}

			htm += '<tr><td colspan="7"><div class="form-group"><div class="col-lg-2 col-lg-offset-10" style="margin-top: 20px;"><button id="submit" class="btn btn-success btn3d btn-block">Submit</button></div></div><td></tr></table>';
			
			$("#temp").html(htm);

			$("#submit").bind(
					"click",
					function() {
						var flag = true;
						var msg = '';
						var dname = $("#deptnm").val();
						var lbname = $("#selLabs").val();
						var exptname = $("#selExp").val();

						var arr = [];
						for ( var i = 1; i <= data.dt.length; i++) {
							var qid = $('input[name=radio-' + i + ']').attr(
									'id');
							var myRadio = $(
									'input[name=radio-' + i + ']:checked')
									.val();
							if (myRadio == null) {
								flag = flag && false;
								msg = 'Please give feedback for question no '
										+ qid;
								break;
							}
							arr.push({
								"QID" : qid,
								"FBK" : myRadio
							});
						}

						if (flag == false) {
							alert(msg);
							flag = false;
						} else {
								var json = {
									"DEPT" : dname,
									"LAB" : lbname,
									"EXP" : exptname,
									"SFBK" : arr
								};
							AH.saveFeedBackAnswer('setall/FeedBackAnswer', 'POST',
									json);
						}

					});
		}

	} catch (e) {
		var msg = "There was an error in execution of Code";
		msg += "Error Description : " + e.message;
		UP.showCustomAlert('Error', msg);
	}
};

})(com.coep.vlab.ajaxHandler, com.coep.vlab.userProfile, com.coep.vlab.feedback, com.coep.template);