export interface ResearchTopic {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  keywords: string[];
  overview: string;
  image?: string;
  scientificApproach?: string[];
  keyTopics?: string[];
}

export interface PreviousResearchTopic {
  title: string;
  period: string;
  description: string;
  keywords: string[];
}

export const coreConcept = {
  category: "RESEARCH DOMAIN",
  title: "ELECTROCHEMICAL ENERGY CONVERSION",
  description: "Developing advanced nanomaterials and interfacial electrochemical processes for sustainable, high-efficiency green hydrogen production and energy conversion systems."
};

export const currentResearchTopics: ResearchTopic[] = [
  {
    id: "pemwe",
    number: "01",
    title: "PEM WATER ELECTROLYSIS",
    shortTitle: "PEMWE",
    tagline: "Proton Exchange Membrane Water Electrolysis for High-Current Green Hydrogen Production",
    keywords: ["HER", "OER", "Electrocatalysts", "Electrode Engineering"],
    overview: "Focusing on highly active and durable low-iridium/non-noble electrocatalysts and multi-scale structured catalyst layers for PEM water electrolysis. We develop advanced interfacial architectures that drastically decrease overpotentials during both oxygen evolution reaction (OER) and hydrogen evolution reaction (HER).",
    keyTopics: [
      "Low-Ir and Ir-free nanostructured OER catalyst design",
      "Porous transport layer (PTL) / catalyst layer interface engineering",
      "Accelerated stress testing and degradation mechanism analysis",
      "High-current density membrane electrode assembly (MEA) fabrication"
    ],
    scientificApproach: [
      "Defect engineering and facet tuning of nanocatalysts",
      "Interfacial charge transfer resistance minimization",
      "Mass transport optimization in two-phase microenvironments"
    ]
  },
  {
    id: "aemwe",
    number: "02",
    title: "AEM WATER ELECTROLYSIS",
    shortTitle: "AEMWE",
    tagline: "Anion Exchange Membrane Water Electrolysis Utilizing Cost-Effective Earth-Abundant Materials",
    keywords: ["HER", "OER", "Electrocatalysts", "Electrode Engineering"],
    overview: "Developing noble-metal-free, high-performance transition metal electrocatalysts (Ni, Fe, Co-based alloys and oxides) and robust electrode frameworks operated in alkaline or pure-water fed anion exchange membrane environments.",
    keyTopics: [
      "Non-precious transition metal multi-metal (NiFe, CoFe) catalyst synthesis",
      "Pure-water and dilute alkaline fed AEMWE cell architecture",
      "Anion-conducting ionomer/catalyst interfacial stabilization",
      "In situ electrochemical surface reconstruction study"
    ],
    scientificApproach: [
      "Electronic structure modulation via chemical composition and valence tuning",
      "Hierarchically ordered porous electrodes for bubble release kinetics",
      "Long-term stability enhancement under dynamic operating profiles"
    ]
  },
  {
    id: "electrodeposition",
    number: "03",
    title: "ELECTRODEPOSITION",
    shortTitle: "ELECTRODEPOSITION",
    tagline: "Precision Electrochemical Nanofabrication of Advanced 3D Structured Electrodes",
    keywords: ["Nanostructured Electrodes", "Self-Supported Electrodes", "Alloy / Multicomponent Materials", "Electrode Engineering"],
    overview: "Pioneering tailored electrodeposition methodologies to fabricate self-supported, 3D porous, and multi-component nano-architectured electrodes directly on metallic substrates without polymeric binders.",
    keyTopics: [
      "Direct electrodeposition of binary and ternary alloy nanostructures",
      "Dynamic hydrogen bubble template (DHBT) for hierarchical 3D foams",
      "Binder-free self-supported monolithic electrode fabrication",
      "Large-scale continuous electrochemical coating process design"
    ],
    scientificApproach: [
      "Nucleation and growth kinetic control via pulsed current/potential regimens",
      "Electrolyte chemistry design for uniform multicomponent alloy deposition",
      "Binder-free direct growth for ultra-low ohmic contact resistance"
    ]
  }
];

export const previousResearchTopics: PreviousResearchTopic[] = [
  {
    title: "Fuel Cell (PEMFC / AEMFC)",
    period: "Past Research Activity",
    description: "Investigated low-Pt electrocatalyst structures and electrode assemblies for polymer electrolyte membrane fuel cells.",
    keywords: ["PEMFC", "ORR Electrocatalysts", "Catalyst Durability"]
  },
  {
    title: "Electrochemical CO₂ Conversion",
    period: "Past Research Activity",
    description: "Explored electrocatalytic reduction of carbon dioxide into high-value chemical feedstocks and multicarbon products.",
    keywords: ["CO₂ Reduction", "Selectivity Tuning", "Gas-Diffusion Electrodes"]
  }
];
