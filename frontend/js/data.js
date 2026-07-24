/**
 * NX Studio - Reusable Data Architecture
 * Centralized data store powering the entire creative agency website.
 * Modifying this file will automatically update content across all pages.
 */

const NX_DATA = {
  // Agency branding & metadata
  agency: {
    name: "NX Studio",
    tagline: "Creative Studio by IFX Group",
    parentName: "IFX Group",
    description: "NX Studio is the flagship creative studio of IFX Group, delivering high-end branding, films, advertisements, digital experiences, photography, post-production, and AI-driven creative solutions for startups, brands, and enterprises globally.",
    founded: 2018,
    officeAddress: "400 Premium Way, Suite 800, Media District, New York, NY 10011",
    phone: "+1 (800) 555-0190",
    email: "nx.studio.network@gmail.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM EST",
    mapIframePlaceholder: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2396602324905!2d-74.0084534!3d40.7358178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzA4LjkiTiA3NMKwMDAnMzAuNCJX!5e0!3m2!1sen!2sus!4v1625482390192!5m2!1sen!2sus"
  },

  // Social Media Channels
  socials: [
    { platform: "Instagram", url: "https://instagram.com/nxstudio", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>` },
    { platform: "Vimeo", url: "https://vimeo.com/nxstudio", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 12a11.02 11.02 0 0 1-1.07 4.88c-.58.8-1.58 1.12-2.53.8a6 6 0 0 1-4.22-4.13c-.36-1.16-.76-2.1-1.2-2.82-.44-.72-1-.87-1.68-.45a3.84 3.84 0 0 0-1.47 1.8 11.38 11.38 0 0 0-.6 2.5c-.3 1.95-1.07 2.87-2.3 2.76A3.42 3.42 0 0 1 7 15.68c-.9-1.04-1.21-2.58-1-4.6.3-2.82 1.83-4.57 4.6-5.23a8.88 8.88 0 0 1 4 .2c1.78.68 2.6 1.8 2.47 3.37-.1 1.25-.45 2.54-.92 3.87-.47 1.33-.7 2.22-.7 2.67a1.07 1.07 0 0 0 .8.92c.67.1 1.5-.53 2.5-1.92A13.43 13.43 0 0 0 22 12a1 1 0 0 1 1 1z"></path></svg>` },
    { platform: "LinkedIn", url: "https://linkedin.com/company/nxstudio", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>` },
    { platform: "Twitter/X", url: "https://twitter.com/nxstudio", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>` },
    { platform: "Behance", url: "https://behance.net/nxstudio", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12a3 3 0 0 0-3-3H4v6h5a3 3 0 0 0 3-3z"></path><path d="M18 10a1.5 1.5 0 0 0-1.5-1.5H13V13h3.5A1.5 1.5 0 0 0 18 10z"></path><path d="M2 5v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"></path></svg>` }
  ],

  // Statistics
  statistics: [
    { id: "projects", label: "Projects Completed", targetValue: 340, suffix: "+" },
    { id: "clients", label: "Happy Clients", targetValue: 120, suffix: "+" },
    { id: "industries", label: "Industries Served", targetValue: 12, suffix: "" },
    { id: "experience", label: "Years of Experience", targetValue: 8, suffix: "+" },
    { id: "team", label: "Team Members", targetValue: 24, suffix: "" },
    { id: "videos", label: "Videos Produced", targetValue: 180, suffix: "+" },
    { id: "brands", label: "Brands Built", targetValue: 45, suffix: "" }
  ],

  // Client Logos (Scroll marquee)
  clients: [
    { name: "Apex Global", industry: "Technology", logoText: "APEX" },
    { name: "Novus Wear", industry: "Fashion", logoText: "NOVUS" },
    { name: "Vanguard Capital", industry: "Finance", logoText: "VANGUARD" },
    { name: "Zenith Tech", industry: "Electronics", logoText: "ZENITH" },
    { name: "Aura Automotive", industry: "Automotive", logoText: "AURA" },
    { name: "Krypton Labs", industry: "Healthcare", logoText: "KRYPTON" },
    { name: "Helios Energy", industry: "Energy", logoText: "HELIOS" },
    { name: "Vesper Food Group", industry: "Restaurants", logoText: "VESPER" }
  ],

  // Industries We Serve
  industries: [
    {
      id: "startups",
      name: "Startups & Ventures",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
      description: "Fast-tracked identity building and viral launch campaigns to secure funding."
    },
    {
      id: "fashion",
      name: "Fashion & Luxury",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.813 15.904L9 21m0 0l-.813-5.096m.813 5.096h6M8.147 4.148A9.003 9.003 0 0112 3c1.782 0 3.42.518 4.8 1.411m-9.653 0A9 9 0 004 12c0 2.492 1.012 4.75 2.653 6.376m9.653-14.228A9 9 0 0120 12c0 2.492-1.012 4.75-2.653 6.376M8.147 4.148a9.003 9.003 0 00-1.494 6.228M15.853 4.148a9.003 9.003 0 011.494 6.228M4 12a9 9 0 001.5 5M20 12a9 9 0 01-1.5 5M6.653 18.376A9 9 0 0012 21a9 9 0 005.347-2.624"/></svg>`,
      description: "Cinematic lifestyle photography, sensory editorial styling, and global brand positioning."
    },
    {
      id: "technology",
      name: "Technology & SaaS",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
      description: "Interactive UX/UI interfaces, visual explainers, and web products with clean aesthetics."
    },
    {
      id: "realestate",
      name: "Real Estate & Architecture",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
      description: "High-definition architectural cinematography and interactive virtual properties."
    },
    {
      id: "corporate",
      name: "Corporate & Enterprise",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
      description: "Investor relation decks, visual reports, internal culture films, and global campaigns."
    },
    {
      id: "restaurants",
      name: "Restaurants & Hospitality",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
      description: "Sensory content creation, visual menus, branding assets, and custom digital portals."
    }
  ],

  // Creative Process (Timeline)
  creativeProcess: [
    { step: 1, title: "Discovery", icon: "🔍", description: "Deep alignment on targets, market segments, brand DNA, and campaign requirements." },
    { step: 2, title: "Research", icon: "📊", description: "Competitive landscape reviews, mood boards, and aesthetic direction profiling." },
    { step: 3, title: "Planning", icon: "📅", description: "Production timelines, creative scripts, resource allocation, and project roadmaps." },
    { step: 4, title: "Creative Direction", icon: "🎨", description: "Visual style frames, copywriting concepts, narrative structures, and design schemes." },
    { step: 5, title: "Production", icon: "🎥", description: "On-set filming, photography, asset creation, or high-fidelity UI layout building." },
    { step: 6, title: "Editing", icon: "🖥️", description: "Precision video cuts, audio design, visual effects sequencing, and color grading." },
    { step: 7, title: "Review", icon: "👥", description: "Collaborative review portal cycles to iterate on fine details and optimize output." },
    { step: 8, title: "Delivery", icon: "🚀", description: "Handoff of final assets in all requested formats, web deployment, and release guidance." },
    { step: 9, title: "Support", icon: "🛠️", description: "Post-campaign analytics, file maintenance, content scaling, and iterative changes." }
  ],

  // Why Choose NX Studio
  whyChooseUs: [
    { title: "Experienced Team", icon: "💼", description: "Industry veterans across cinema, design, strategy, and engineering." },
    { title: "Creative Thinking", icon: "💡", description: "We push beyond templates to build bespoke, memorable, cinematic narratives." },
    { title: "Fast Delivery", icon: "⚡", description: "Rigorous execution methods without compromising on premium quality." },
    { title: "Premium Quality", icon: "⭐", description: "No-compromise craftsmanship, high-resolution rendering, and ultra-detailed edits." },
    { title: "Modern Equipment", icon: "🎥", description: "RED V-Raptor cameras, specialized lighting rigs, and top-tier computing clusters." },
    { title: "Dedicated Support", icon: "📞", description: "Direct communication channels and dedicated post-production follow-through." }
  ],

  // Awards & Recognition
  awards: [
    { year: 2025, title: "Agency of the Year", organization: "Webby Awards", category: "Best Digital Creative" },
    { year: 2024, title: "Best Brand Video", organization: "Cannes Corporate Media", category: "Commercials & Shorts" },
    { year: 2024, title: "Design Excellence", organization: "Awwwards", category: "SaaS Digital Experience" },
    { year: 2023, title: "Outstanding Cinematography", organization: "Telly Awards", category: "Commercial Ads" }
  ],

  // Equipment List (Studio Page)
  equipment: [
    {
      category: "Cinematography & Cameras",
      items: [
        "RED V-Raptor 8K VV Cinema System",
        "ARRI Alexa Mini LF",
        "Sony FX6 & FX3 Run-and-Gun Kits",
        "DJI Ronin 4D 8K Stabilized Camera System"
      ]
    },
    {
      category: "Lenses & Glass",
      items: [
        "Cooke Anamorphic/i Full Frame Prime Set",
        "Arri Signature Prime Lenses (24mm, 35mm, 55mm, 85mm)",
        "Angenieux Optimo Ultra 12x Zoom",
        "Zeiss Supreme Prime Lenses"
      ]
    },
    {
      category: "Lighting & Rigging",
      items: [
        "Aputure Electro Storm CS15 LED Lights",
        "Arri Orbiter & SkyPanel S60-C Packages",
        "Astera Titan Tubes Creative Kits",
        "Freefly Movi Pro Camera Gimbal System"
      ]
    },
    {
      category: "Post-Production & Hardware",
      items: [
        "DaVinci Resolve Studio Edit & Grading Suites",
        "Custom Threadripper PRO Workstations (128GB RAM, RTX 4090)",
        "PROMISE Pegasus32 R8 RAID Storage arrays",
        "Dolby Atmos Certified Audio Engineering Station"
      ]
    }
  ],

  // Services
  services: [
    {
      id: "branding",
      category: "brand-strategy",
      name: "Branding & Identity",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`,
      tagline: "Define Your Presence. Establish Your Authority.",
      description: "We construct robust design systems and brand strategies. We align typography, color theory, positioning, and storytelling into a cohesive manual that transforms companies into household names.",
      features: [
        "Bespoke typography & wordmarks designed from scratch",
        "Complete color palettes with high-accessibility profiling",
        "Comprehensive brand guidelines book (150+ pages)",
        "Multi-platform collateral kit (Business cards, email signatures, letters)",
        "Strategy analysis defining market position and unique values",
        "Trademark-ready legal clearing preparation documents"
      ],
      deliverables: ["Vector Logo Assets (SVG, AI, PDF)", "Digital Brand Book", "Stationery Designs", "Brand Strategy Pitch Slide Deck", "Corporate Presentation Templates"],
      timeline: "6 - 8 Weeks",
      bestFor: "Startups planning scale-up rounds or corporations pursuing full identity modernizations.",
      software: ["Adobe Illustrator", "Figma", "Adobe InDesign", "Keynote"]
    },
    {
      id: "video-production",
      category: "creative-film",
      name: "Video Production & Films",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z"/></svg>`,
      tagline: "Cinematic Narratives. Immersive Visual Quality.",
      description: "From scripting to final master output, we produce high-end films, internal documentaries, and company highlights that carry emotional weight and professional polish.",
      features: [
        "Full pre-production scripting, storyboarding, and location scouts",
        "State-of-the-art camera capture systems (RED 8K, ARRI Alexa Mini)",
        "Precision lighting design by professional directors of photography",
        "Professional voiceover casting and audio field recording",
        "Licensed bespoke theatrical music selection or custom scoring",
        "Comprehensive digital master file outputs optimized for theatrical & social screens"
      ],
      deliverables: ["Main Narrative Film (2-3 mins)", "Cinematic Teaser Cuts (15s, 30s, 60s)", "Raw Footage Archival Hard-Drive", "Original Soundtrack Master", "Behind-The-Scenes Video Capsule"],
      timeline: "8 - 12 Weeks",
      bestFor: "Brands seeking high-impact landing assets, event openers, or investor relation videos.",
      software: ["DaVinci Resolve Studio", "Adobe Premiere Pro", "Avid Media Composer", "Redcine-X PRO"]
    },
    {
      id: "commercial-ads",
      category: "creative-film",
      name: "Commercial Advertisements",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>`,
      tagline: "Direct-Response Campaigns. Unforgettable Hooks.",
      description: "We create commercial ads that grab visual focus immediately. Combining fast-paced scripts, bold colors, and clever direction, we turn impressions into clicks and sales.",
      features: [
        "High-retention script formulation targeting consumer psychology",
        "Studio stage set design or custom visual asset locations",
        "Macro product photography and dynamic motion capture",
        "Vibrant sound design, foley work, and upbeat license mixes",
        "Interactive testing formats (A/B script hooks for social ads)",
        "Dynamic overlays, text graphics, and interactive caption integrations"
      ],
      deliverables: ["Product Commercial Core Cut (30s)", "Vertical Social Reels (9:16 format, 3 variants)", "Custom Animated Overlay Templates", "Color-Corrected High-Res Product Stills", "Campaign Media Buying Assets Bundle"],
      timeline: "4 - 6 Weeks",
      bestFor: "E-commerce brands, software firms launching key features, and product-focused retailers.",
      software: ["DaVinci Resolve Studio", "Adobe After Effects", "Cinema 4D", "Figma"]
    },
    {
      id: "photography",
      category: "creative-film",
      name: "Product & Portrait Photography",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><circle cx="12" cy="13" r="4" stroke-width="1.5"/></svg>`,
      tagline: "Stunning Details. Perfect Color Calibration.",
      description: "Crisp studio product shots, lifestyle catalogs, and executive portraits. We shoot in RAW, calibrating lighting, color profiles, and textures to capture your work perfectly.",
      features: [
        "In-studio or on-location professional photo shoots",
        "High-end medium format digital sensor cameras (Hasselblad/Fujifilm GFX)",
        "Creative set direction, prop sourcing, and styling services",
        "Premium retouching (blemish removal, color grading, backdrop replacement)",
        "Unlimited commercial usage rights distribution",
        "High-resolution and web-optimized file exports"
      ],
      deliverables: ["100+ Retouched Hero Photos", "Full Digital Proof Sheet", "Layered Photoshop Master Files", "Social Media Aspect Ratio Crops", "Print-Ready TIFF Outputs"],
      timeline: "2 - 4 Weeks",
      bestFor: "Fashion brands, consumer goods manufacturers, and corporate teams looking for premium portraits.",
      software: ["Adobe Photoshop", "Capture One Pro", "Adobe Lightroom Classic"]
    },
    {
      id: "editing-post",
      category: "creative-film",
      name: "Editing & Post-Production",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`,
      tagline: "Assemble the Narrative. Refine the Motion.",
      description: "Send us your raw footage. We stitch together visual elements, edit the audio track, color grade, and apply visual effects to craft a polished final product.",
      features: [
        "Offline editing and assembly cuts matching story structure",
        "DaVinci Resolve color correction and cinema color grading",
        "Vocal balancing, sound design, and custom background noise cleanup",
        "Subtle visual effects (roto, logo removal, sky replacements)",
        "Subtitle overlay creation and localization rendering",
        "Output delivery in all codecs (ProRes, H.264, AV1)"
      ],
      deliverables: ["Polished Video Cuts (Multi-format)", "Color Correction XML/LUT Files", "Clean Mixed Audio File", "SRT/VTT Subtitle Files", "Project Archive Bundle"],
      timeline: "2 - 5 Weeks",
      bestFor: "Production houses, YouTube creators, and internal corporate film teams needing professional post-production.",
      software: ["DaVinci Resolve Studio", "Adobe Premiere Pro", "Avid Media Composer", "Adobe Audition"]
    },
    {
      id: "motion-graphics",
      category: "creative-film",
      name: "Motion Graphics & VFX",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 01.707.293L12 11.586l7.293-7.293A1 1 0 1120.707 5.707L13.414 13l7.293 7.293a1 1 0 01-1.414 1.414L12 14.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 13 3.293 5.707A1 1 0 014 5z"/></svg>`,
      tagline: "Dynamic Typography. Immersive Animations.",
      description: "We bring elements to life. From simple logo stings to 3D architectural showcases, we produce motion graphics that explain concepts quickly and make videos stand out.",
      features: [
        "2D Vector vector illustrations and character rigging animations",
        "3D product rendering, layout tracking, and surface texturing",
        "Interactive kinetic typography and logo reveal sequences",
        "High-fidelity UI prototype flow animation videos",
        "Custom video transitions, title cards, and lower thirds",
        "VFX compositing, screen tracking, and green-screen keys"
      ],
      deliverables: ["Final Rendered Animation (4K UHD)", "Lottie / JSON Web Animation Files", "Transparent Alpha Channel QuickTimes", "Vector Graphics Asset Pack", "Editable Source Project Archive"],
      timeline: "4 - 8 Weeks",
      bestFor: "Software companies showing complex user interfaces, product designers, and video editors seeking visual assets.",
      software: ["Adobe After Effects", "Cinema 4D", "Blender", "Adobe Illustrator"]
    },
    {
      id: "uiux-design",
      category: "digital-dev",
      name: "UI/UX & Product Design",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
      tagline: "Intuitive Paths. Premium Visual Interfaces.",
      description: "We design clean digital products. Mapping logical flows, user personas, and visual UI layouts, we ensure your mobile app or software dashboard feels premium and works intuitively.",
      features: [
        "Detailed wireframing and user experience journey maps",
        "Bespoke UI layouts utilizing custom auto-layout logic",
        "High-fidelity interactive prototypes (in Figma)",
        "Design systems creation (components, colors, buttons, styles)",
        "UX audit reviews with heatmaps and accessibility reports",
        "Developer handover documentation with full specification specs"
      ],
      deliverables: ["Interactive Figma Prototype", "UI Design System Library", "Complete App/Web Wireframes", "UX Research Audit PDF", "Asset Exports Package (SVG, PNG)"],
      timeline: "6 - 10 Weeks",
      bestFor: "Startups building software applications, tech brands upgrading web portals, and software platforms.",
      software: ["Figma", "Adobe Photoshop", "Zeplin", "Miro"]
    },
    {
      id: "web-development",
      category: "digital-dev",
      name: "Website Design & Development",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
      tagline: "Pixel-Perfect Development. Immersive Performance.",
      description: "We code high-performance, fast-loading, visually stunning frontends. Utilizing vanilla technologies or modern Jamstack, we create custom animations that leave an impression.",
      features: [
        "Semantic HTML5 structure and clean vanilla CSS / JS optimization",
        "Fully responsive layout architecture for mobile, tablet, 4K displays",
        "High-performance loading times (95+ Lighthouse Score targets)",
        "Interactive animations, mouse transitions, and scroll effects",
        "Complete search-engine optimized (SEO) metadata integration",
        "Secure cloud hosting setup and version-controlled GitHub handovers"
      ],
      deliverables: ["Production-Ready Source Code Archive", "Live Server URL Deployment", "SEO Setup Manifest File", "Interactive Content Editor Instructions", "Website Speed Optimization Audit"],
      timeline: "6 - 12 Weeks",
      bestFor: "Agencies, SaaS businesses, luxury brands, and ventures wanting a fast, customized web presence.",
      software: ["VS Code", "GitHub", "Figma", "Lighthouse"]
    },
    {
      id: "ai-solutions",
      category: "digital-dev",
      name: "AI Creative Solutions",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`,
      tagline: "Innovative Technologies. Hyper-Realistic Concepts.",
      description: "We harness AI generative platforms (Midjourney, Stable Diffusion, Luma, Runway) combined with professional editing tools to create concept art, assets, and prototype campaigns.",
      features: [
        "AI-generated visual concepts and brand mood boards",
        "Hyper-realistic custom textures, backdrops, and product renders",
        "AI video generation for social campaigns and concepts",
        "Custom style training models based on specific brand images",
        "Rapid production mockup testing for marketing campaigns",
        "Integration of AI generation tools into existing brand setups"
      ],
      deliverables: ["High-Res Conceptual Visual Assets", "AI Campaign Prompts Playbook", "Generative Video Snippets (4K)", "Custom Trained Model Files", "Workflow Integration Guide PDF"],
      timeline: "3 - 5 Weeks",
      bestFor: "Creative agencies, gaming studios, and early brands wanting quick, high-concept visual assets.",
      software: ["Midjourney v6", "Stable Diffusion SDXL", "Runway Gen-2", "Adobe Photoshop Generative Fill"]
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Elena Rostova",
      company: "Aura Motors",
      industry: "Automotive",
      project: "AURA EV Brand Strategy & Launch",
      rating: 5,
      review: "NX Studio redefined what our EV brand could look like. The cinematic film they created for the Aura Roadster launch generated over 2 million views within a week, but more importantly, established us as a premium competitor. Their attention to detail, from logo curves to custom UI typography, was world-class.",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=90&w=800&auto=format&fit=crop",
      date: "May 12, 2025"
    },
    {
      name: "Marcus Vance",
      company: "Vanguard Outfitters",
      industry: "Fashion & Retail",
      project: "Chasing Shadows - Autumn Campaign",
      rating: 5,
      review: "Working with the video production crew at NX Studio was an incredible experience. They brought Red Cinema rigs to remote mountain locations, capturing our gear in conditions that would break ordinary agencies. The post-production was extremely fast, and the color grading was breathtaking.",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=90&w=800&auto=format&fit=crop",
      date: "October 18, 2024"
    },
    {
      name: "Sarah Chen",
      company: "Zenith Smart Labs",
      industry: "Technology",
      project: "Zenith OS UI/UX Design System",
      rating: 5,
      review: "The design team at NX Studio understood our smart home product workflow immediately. They delivered a fully functional Figma library that our engineering team implemented without issues. The interfaces look beautiful, and usability metrics rose by 35% in early test groups.",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=90&w=800&auto=format&fit=crop",
      date: "December 05, 2024"
    },
    {
      name: "Alexander Mercer",
      company: "Aether Capital",
      industry: "Finance",
      project: "Aether Capital Brand Redesign",
      rating: 5,
      review: "As a division of IFX Group, NX Studio carries the commercial authority and engineering capability that finance startups look for. They created our brand mark, corporate slide deck, and designed our main website. Their execution was professional and clean throughout the process.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=90&w=800&auto=format&fit=crop",
      date: "February 22, 2025"
    }
  ],

  // Team Members
  team: [
    {
      name: "Viktor Ivanov",
      position: "Executive Creative Director",
      department: "Creative Leadership",
      experience: "12+ Years",
      skills: ["Creative Direction", "Brand Strategy", "Storytelling", "Film Production"],
      bio: "Viktor guides the artistic vision of NX Studio. He previously spent a decade directing international campaigns for luxury brands and tech startups in London and Tokyo.",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=90&w=800&auto=format&fit=crop",
      socialLinks: { linkedin: "#", twitter: "#", instagram: "#" }
    },
    {
      name: "Natalie Cross",
      position: "Lead Cinematographer",
      department: "Video & Film",
      experience: "9+ Years",
      skills: ["RED/ARRI Systems", "Lighting Design", "Color Grading", "Action Capture"],
      bio: "Natalie is responsible for NX Studio's signature cinematic look. A specialist in high-end camera setups and natural lighting, she makes every frame look premium.",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=90&w=800&auto=format&fit=crop",
      socialLinks: { linkedin: "#", instagram: "#" }
    },
    {
      name: "Dimitri Volk",
      position: "Head of Post-Production",
      department: "Video & Film",
      experience: "10+ Years",
      skills: ["DaVinci Resolve", "VFX Compositing", "Sound Design", "Dolby Atmos"],
      bio: "Dimitri manages the editing flow. He coordinates editing, visual effects, and color calibration to turn raw footage into cinematic masterworks.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=90&w=800&auto=format&fit=crop",
      socialLinks: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Kira Thorne",
      position: "Lead UI/UX Designer",
      department: "Digital Products",
      experience: "7+ Years",
      skills: ["Figma Design", "UX Architecture", "Prototyping", "Design Systems"],
      bio: "Kira builds clean, accessible, and interactive screen designs. She believes interfaces should be elegant to look at and intuitive to navigate.",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=90&w=800&auto=format&fit=crop",
      socialLinks: { linkedin: "#", instagram: "#" }
    },
    {
      name: "Marcus Aurelius",
      position: "Senior Frontend Engineer",
      department: "Digital Products",
      experience: "8+ Years",
      skills: ["Vanilla JS", "Performance Optimization", "Web Animations", "Jamstack"],
      bio: "Marcus codes the digital experiences. He focuses on fast-loading code, custom CSS transitions, and search-engine optimized web projects.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=90&w=800&auto=format&fit=crop",
      socialLinks: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Sophia Sterling",
      position: "Senior Brand Strategist",
      department: "Brand & Strategy",
      experience: "9+ Years",
      skills: ["Market Positioning", "Competitor Research", "Copywriting", "Launch Campaigns"],
      bio: "Sophia defines the marketing strategy and core message. She translates target audience data into strategic directions for our branding processes.",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=90&w=800&auto=format&fit=crop",
      socialLinks: { linkedin: "#", instagram: "#" }
    }
  ],

  // Careers & Opportunities
  careers: [
    {
      id: "motion-designer",
      title: "Senior Motion Graphics Designer",
      department: "Video & Film",
      location: "New York, NY (Hybrid)",
      type: "Full-Time",
      description: "We are seeking a creative Motion Designer to join our production team. You will create 2D/3D graphics, commercials, and digital interfaces for international brands.",
      requirements: [
        "5+ years of experience editing commercial motion graphics",
        "Expert knowledge of After Effects, Cinema 4D, or Blender",
        "Strong portfolio showing premium typographic animation and lighting layout",
        "Familiarity with web formats (Lottie, WebGL) is a strong plus",
        "Highly collaborative with active communication skills"
      ]
    },
    {
      id: "creative-copywriter",
      title: "Creative Scriptwriter & Copywriter",
      department: "Creative Leadership",
      location: "Remote (US/Europe)",
      type: "Full-Time",
      description: "We are looking for a Copywriter to write video scripts, commercial hooks, and brand narratives. You will collaborate directly with our Creative Director.",
      requirements: [
        "4+ years of professional copywriting experience at an agency",
        "Portfolio containing commercial scripts, concepts, and campaign hooks",
        "Ability to quickly pivot voice from luxury fashion to high-tech SaaS",
        "Excellent editing, proofreading, and conceptual storytelling skills"
      ]
    },
    {
      id: "internship-video",
      title: "Post-Production Intern (Summer 2026)",
      department: "Internships",
      location: "New York, NY (In-Studio)",
      type: "Internship (Paid)",
      description: "Learn post-production editing. Assist Dimitri in organizing footage catalog, proxy creation, raw grading steps, sound assembly, and basic cuts.",
      requirements: [
        "Basic training in DaVinci Resolve or Adobe Premiere Pro",
        "Strong interest in video editing, color theory, or audio design",
        "High organization capacity and enthusiasm for details",
        "Must be currently enrolled in or a recent graduate of a film program"
      ]
    }
  ],

  // Resources (Free Downloads / Whitepapers)
  resources: [
    {
      title: "Luxury Branding Blueprint 2026",
      type: "PDF Playbook",
      downloadSize: "14.2 MB",
      description: "Our comprehensive agency playbook detailing color strategy, typography principles, and positioning models for premium luxury brands.",
      link: "#"
    },
    {
      title: "Cinematography Preset Pack v1.0",
      type: "LUT Pack",
      downloadSize: "8.5 MB",
      description: "A set of five DaVinci Resolve & Premiere LUTs calibrated by Lead Cinematographer Natalie Cross for dark charcoal, cinematic grades.",
      link: "#"
    },
    {
      title: "Figma UI Grid Template",
      type: "Figma File",
      downloadSize: "2.1 MB",
      description: "The identical pixel-perfect grid and spacing blueprint NX Studio designers use to map high-fidelity web applications.",
      link: "#"
    }
  ],

  // Frequently Asked Questions (FAQs)
  faqs: [
    {
      question: "Is NX Studio an independent agency or part of IFX Group?",
      answer: "NX Studio is the dedicated, flagship Creative Studio division of IFX Group. We handle creative execution, films, branding, and interactive digital design, backed by the global corporate strength, network, and operational resources of IFX Group.",
      category: "agency"
    },
    {
      question: "What is your typical project timeline?",
      answer: "Depending on the complexity, brand design projects usually run 6 to 8 weeks, cinematic films run 8 to 12 weeks, and custom digital product frontends run 6 to 12 weeks. Urgent commercial projects can sometimes be fast-tracked through a dedicated team sprint.",
      category: "workflow"
    },
    {
      question: "Do you offer post-production services separately?",
      answer: "Yes, we have a specialized post-production department managed by Dimitri Volk. We accept raw footage from external production houses to handle offline editing, Dolby Atmos audio mix design, kinetic graphics overlays, and premium DaVinci color grading.",
      category: "services"
    },
    {
      question: "What hardware and camera rigs do you shoot on?",
      answer: "Our standard packages include the RED V-Raptor 8K VV Cinema System, ARRI Alexa Mini LF, and DJI Ronin 4D 8K cameras, combined with Cooke and ARRI Signature Prime anamorphic and spherical lens packages.",
      category: "equipment"
    },
    {
      question: "How do we get started on a project?",
      answer: "Simply navigate to our Contact page and use our interactive Project Starter Wizard. Choose your budget, services, timeline, and share details. Our team will review your application and respond with scheduling details within 24 business hours.",
      category: "workflow"
    }
  ],

  // Blog / Articles (Insights)
  blog: [
    {
      id: "future-of-luxury-branding",
      category: "Branding",
      readingTime: "5 Min Read",
      date: "June 28, 2026",
      author: "Sophia Sterling",
      tags: ["Branding", "Luxury", "Design Strategy"],
      title: "The Future of Luxury Branding: Minimalism vs. Expressive Typographies",
      description: "How high-end brands are pivoting away from generic geometric sans-serifs to bespoke, high-personality wordmarks that convey artistic authority.",
      coverImage: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=90&w=2400&auto=format&fit=crop",
      contentText: [
        "For the last decade, luxury brands globally engaged in what designers refer to as 'blanding'—replacing historical, detailed serif logos with minimal, geometric sans-serifs. The goal was simple: clean readability on mobile screens and a unified, digital-first presence. However, when every luxury brand uses the same font family, they strip away their heritage.",
        "In 2026, we are witnessing a massive pendulum swing back. Premium brands are realizing that luxury is defined by uniqueness, craftsmanship, and detail. We are seeing a surge in expressive, bespoke typographic systems—fonts created exclusively for a single brand, featuring unique ligatures and structural curves.",
        "Minimalism is not dead; rather, it is evolving. A brand's background canvas remains clean and minimal, but its typography and focal assets act as art pieces. This contrast creates a dramatic, luxury aesthetic.",
        "Key takeaways for modern brands looking to establish premium positions: First, invest in custom lettering rather than buying commercial licenses. Second, embrace structural contrast—combine sleek layout backdrops with dynamic, expressive headings. Finally, keep layout grids strict and consistent to allow expressive elements space to stand out."
      ]
    },
    {
      id: "grading-cinematic-shadows",
      category: "Filmmaking",
      readingTime: "7 Min Read",
      date: "May 15, 2026",
      author: "Natalie Cross",
      tags: ["Cinematography", "Color Grading", "DaVinci Resolve"],
      title: "Grading Cinematic Shadows: Achieving Rich Blacks Without Losing Fine Detail",
      description: "A technical walkthrough on managing high-contrast curves in DaVinci Resolve. Learn Natalie's methods for film-emulation grain and custom LUTs.",
      coverImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=90&w=2400&auto=format&fit=crop",
      contentText: [
        "In creative commercial films, black is not just the absence of light; it is a creative choice. The key to premium, luxury footage lies in deep shadow detail. The challenge editors face is compressing shadows to create contrast without clipping details into digital noise.",
        "Natalie's grading workflow starts on set. We protect the highlights and overexpose the shadows slightly, pushing the sensor's dynamic range. This gives us ample detail in the low-end data during post-production.",
        "Inside DaVinci Resolve, we utilize node structures with dedicated HDR curves. Instead of pulling down the global lift wheel—which compresses the entire shadow range blindly—we use custom curves to compress the lowest 5% of blacks (preserving dark charcoal shades) while leaving mid-tones untouched.",
        "Next, we apply film-emulation grain. Digital black can feel sterile and flat. Adding a fine, analog-style grain structure to the dark regions gives the footage a organic, theatrical texture. Finally, we output using a custom LUT designed for high-end HDR cinema displays, preserving the visual contrast."
      ]
    },
    {
      id: "ai-in-commercial-advertising",
      category: "AI & Innovation",
      readingTime: "6 Min Read",
      date: "April 02, 2026",
      author: "Viktor Ivanov",
      tags: ["AI Creativity", "Advertising", "Technology"],
      title: "Generative AI in Commercial Campaigns: Prototyping Ideas at Speed",
      description: "How NX Studio utilizes Midjourney and Stable Diffusion to test concepts, train brand styles, and cut pre-production timelines in half.",
      coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=90&w=2400&auto=format&fit=crop",
      contentText: [
        "AI is not replacing creators; it is accelerating them. In commercial advertising, the longest phase is often pre-production alignment. Creative teams spend weeks drafting scripts and mood boards, only for clients to struggle to visualize the final film.",
        "At NX Studio, we utilize Midjourney and Stable Diffusion as visual translation tools. Within hours of a discovery meeting, we can generate hyper-detailed style frames showing sets, props, lighting, and composition models.",
        "Additionally, we train custom LoRA models using a client's existing product photography. This allows us to generate concept assets showing their product in different, highly stylized environments—like floating in space or submerged in liquid—before we ever book a physical studio stage.",
        "This rapid prototyping means we enter physical production with absolute alignment. We save days on set, reduce costs, and focus our resources on executing the approved creative direction with cinema-grade cameras."
      ]
    },
    {
      id: "premium-web-design-principles",
      category: "UI/UX",
      readingTime: "8 Min Read",
      date: "March 10, 2026",
      author: "Kira Thorne",
      tags: ["UI/UX", "Web Design", "Aesthetics"],
      title: "Modern Premium Web Experiences: The Role of Micro-Interactions",
      description: "Explore the details of premium web interfaces. Learn how custom cursors, layout loaders, and scroll-triggered animations improve user engagement.",
      coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=90&w=2400&auto=format&fit=crop",
      contentText: [
        "A premium website should do more than present information; it should create an interactive experience. A visitor should feel the responsive, cinematic quality of the agency through the screen interface itself.",
        "The difference between a basic template and a world-class design lies in micro-interactions. These include smooth page transitions, custom cursors that react to hover states, scroll progress indicators, and subtle layout parallax.",
        "Custom cursors are particularly effective. By tracking mouse movements and using dual-circle layouts, the cursor can change when hovering over links, highlighting click calls-to-action.",
        "However, animations must be performant. Heavy JS libraries can slow load times, leading to user drops. We prioritize raw vanilla CSS transforms, hardware-accelerated transitions, and lightweight Intersection Observers. This keeps the DOM light and animations running smoothly at 60fps."
      ]
    }
  ],

  // Portfolio Case Studies
  portfolio: [
    {
      id: "aura-roadster",
      title: "AURA - Luxury Electric Vehicles Branding",
      client: "Aura Motors",
      industry: "Automotive",
      year: 2025,
      category: "branding",
      summary: "A complete global brand redesign and launch campaign for Aura's next-generation electric luxury roadster.",
      tags: ["Branding", "Art Direction", "Logo Design", "3D Rendering"],
      technologies: ["Figma", "Adobe Illustrator", "Cinema 4D", "DaVinci Resolve"],
      featuredImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=95&w=3840&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=95&w=3840&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=95&w=3840&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=95&w=3840&auto=format&fit=crop"
      ],
      videoUrl: "https://player.vimeo.com/video/347119253?h=dd3d4f107f&color=ff1e27&title=0&byline=0&portrait=0",
      overview: "Aura Motors wanted to position their flagship Roadster as a luxury electric vehicle. NX Studio took on the challenge, crafting a visual identity and a cinematic launch film that established Aura as an industry innovator.",
      problem: "Aura was perceived as a utility-focused electric car company. Their visual brand felt dry, failing to appeal to luxury car buyers who value design, performance, and heritage.",
      research: "We analyzed heritage luxury sports car brands and electric car models. Our research revealed a gap: electric car branding was overly clinical, missing the emotional appeal, sensory styling, and cinematic heritage of performance vehicles.",
      strategy: "We built a brand direction centered on 'Electrified Elegance'. This direction combined raw performance metrics with clean luxury styling, using a deep charcoal and red color palette and high-end typography.",
      process: "We spent three weeks refining a custom geometric wordmark. Simultaneously, Natalie Cross's camera crew shot in the Nevada desert with RED cinema cameras, capturing the car's movement against barren environments, creating contrast with the vehicle's tech systems.",
      deliverables: ["Custom Typographic Logo System", "Global Brand Book & Specifications Guidelines", "3-Minute Cinematic Launch Film", "Product Launch Web Portal UI/UX", "Social Launch Asset Package"],
      finalResult: "The Aura Roadster campaign launched globally in June 2025. The launch film generated over 3.5 million organic views, helping secure 12,000 vehicle pre-orders in the first month and raising Aura's market valuation.",
      metrics: [
        { label: "Video Views", value: "3.5M+" },
        { label: "Pre-Orders", value: "12,000" },
        { label: "Media Impressions", value: "45M" },
        { label: "Sales Pipeline Generated", value: "$1.8B" }
      ],
      testimonial: {
        name: "Elena Rostova",
        role: "Chief Marketing Officer",
        company: "Aura Motors",
        text: "NX Studio transformed our brand identity. The launch campaign set a new standard for luxury automotive marketing."
      },
      team: [
        { name: "Viktor Ivanov", role: "Creative Director" },
        { name: "Natalie Cross", role: "Director of Photography" },
        { name: "Dimitri Volk", role: "Lead Editor & Colorist" }
      ]
    },
    {
      id: "vanguard-chasing-shadows",
      title: "Chasing Shadows - Cinematic Brand Film",
      client: "Vanguard Outfitters",
      industry: "Fashion & Retail",
      year: 2024,
      category: "films",
      summary: "A high-end cinematic campaign shot in harsh environments to launch Vanguard's extreme winter collection.",
      tags: ["Cinematography", "Film Production", "Post-Production", "Color Grading"],
      technologies: ["ARRI Alexa Mini LF", "DaVinci Resolve Studio", "Astera Lights", "Premier Pro"],
      featuredImage: "https://images.unsplash.com/photo-1486916856992-e4db22c8df33?q=95&w=3840&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551698618-1ffdfe1963fc?q=95&w=3840&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=95&w=3840&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=95&w=3840&auto=format&fit=crop"
      ],
      videoUrl: "https://player.vimeo.com/video/224392349?color=ff1e27&title=0&byline=0&portrait=0",
      overview: "Vanguard Outfitters needed a campaign to launch their premium outerwear collection. NX Studio traveled to the Cascade Mountains to capture a narrative film about mountaineers testing their limits in winter storms.",
      problem: "Vanguard's competitors relied on clean, studio-lit lifestyle photography. Vanguard needed to prove the durability of their gear through real-world visual proof, presented with a high-end cinematic feel.",
      research: "We studied historical documentaries on arctic expeditions. We focused on high-contrast lighting, wide snow landscapes, and close-ups that captured the athletes' focus, creating an authentic narrative.",
      strategy: "The theme 'Chasing Shadows' represents the drive to explore. We wanted the gear to feel like part of the mountaineer's toolkit, shot in low-light, high-contrast conditions to showcase the reflective elements of the collection.",
      process: "We shot on location in winter conditions, using lightweight camera rigs and stabilization systems to capture action shots. Post-production focused on maintaining cool blue tones while preserving skin details.",
      deliverables: ["60-Second Commercial Film", "30-Second Social Media Cuts", "High-Resolution Catalog Still Package", "Digital Billboard Graphic Sets", "Custom Color LUT Package"],
      finalResult: "The campaign was featured on national networks and social media platforms, leading to a sell-out of Vanguard's winter line within three weeks of release.",
      metrics: [
        { label: "Collection Sell-out", value: "21 Days" },
        { label: "Social Video Views", value: "5.2M" },
        { label: "ROAS (Return on Ad Spend)", value: "6.8x" },
        { label: "Brand Index Growth", value: "+42%" }
      ],
      testimonial: {
        name: "Marcus Vance",
        role: "Brand Director",
        company: "Vanguard Outfitters",
        text: "The footage Natalie and her crew captured was stunning. They documented our gear in real-world conditions, delivering a highly successful campaign."
      },
      team: [
        { name: "Natalie Cross", role: "Lead Cinematographer" },
        { name: "Dimitri Volk", role: "Head Editor & Colorist" },
        { name: "Sophia Sterling", role: "Strategist" }
      ]
    },
    {
      id: "krypton-next-era",
      title: "The Next Era - Product Ads Campaign",
      client: "Krypton Tech",
      industry: "Technology",
      year: 2024,
      category: "ads",
      summary: "A series of high-impact product advertisements combining macro cinematography and 3D motion graphics.",
      tags: ["Commercial Ads", "Motion Graphics", "VFX", "Product Shoot"],
      technologies: ["RED V-Raptor 8K", "Cinema 4D", "After Effects", "DaVinci Resolve"],
      featuredImage: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=95&w=3840&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=95&w=3840&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=95&w=3840&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=95&w=3840&auto=format&fit=crop"
      ],
      videoUrl: "https://player.vimeo.com/video/115049386?color=ff1e27&title=0&byline=0&portrait=0",
      overview: "Krypton Tech wanted to launch their premium noise-canceling headphones, the Krypton Sound-One. NX Studio developed a visual campaign mixing macro camera shots of the audio drivers with 3D animations of sound waves.",
      problem: "The headphone market is highly saturated. Krypton needed to communicate the technical details of their audio engineering in a visually engaging way.",
      research: "We analyzed competitors' audio commercials. Many used generic lifestyle sequences. We decided to focus on the hardware engineering, using macro photography and clean animations to explain the technology.",
      strategy: "The theme 'Visualizing Sound' guided the project. We created animations showing sound waves interacting with the headphone's active noise-canceling features.",
      process: "We shot macro footage of the physical headphones on a turntable. Next, our motion graphics team added 3D visual effects to illustrate the noise-canceling technology.",
      deliverables: ["Product Promo Main Commercial (30s)", "Feature Explainer Videos (15s, 3 cuts)", "3D Render Asset Pack", "Ad Banner Graphics", "Foley Sound Design Pack"],
      finalResult: "The ads ran on digital networks, achieving high conversion rates and establishing the headphones as a premium product in tech reviews.",
      metrics: [
        { label: "Conversion Rate", value: "4.85%" },
        { label: "Click-Through Rate", value: "3.2%" },
        { label: "Sales Target Met", value: "150%" },
        { label: "Video Engagement", value: "84%" }
      ],
      testimonial: {
        name: "David Hsiung",
        role: "Director of Product",
        company: "Krypton Tech",
        text: "NX Studio combined hardware visuals with clear technical explanations, helping us hit our sales goals."
      },
      team: [
        { name: "Viktor Ivanov", role: "Creative Director" },
        { name: "Dimitri Volk", role: "VFX Compositor" },
        { name: "Natalie Cross", role: "Macro Cinematographer" }
      ]
    },
    {
      id: "zenith-app-design",
      title: "Zenith - Smart Home OS App Design",
      client: "Zenith Smart Labs",
      industry: "Technology",
      year: 2024,
      category: "uiux",
      summary: "Designing the interface and interactions for a smart home application controlling home systems.",
      tags: ["UI/UX", "Mobile App Design", "Design System", "Prototyping"],
      technologies: ["Figma", "Adobe Illustrator", "After Effects", "Miro"],
      featuredImage: "https://images.unsplash.com/photo-1558002038-1055907df827?q=95&w=3840&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=95&w=3840&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=95&w=3840&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=95&w=3840&auto=format&fit=crop"
      ],
      videoUrl: "https://player.vimeo.com/video/50604169?color=ff1e27&title=0&byline=0&portrait=0",
      overview: "Zenith Smart Labs commissioned NX Studio to design the mobile app interface for their smart home platform, focusing on simple layouts and smooth transitions.",
      problem: "Smart home apps can be complex, with fragmented menus that make controlling multiple devices difficult.",
      research: "We analyzed user interactions with home devices. We found that users prefer quick access to common controls, like lighting and temperature, rather than searching through submenus.",
      strategy: "We developed a 'Single Tap Control' layout. The main dashboard dynamically adapts based on user habits, displaying relevant controls at different times of the day.",
      process: "We created wireframes to test layout flows, then built high-fidelity visual layouts with custom animations to illustrate transitions between screens.",
      deliverables: ["Interactive Figma Prototype", "Design System Library (150+ components)", "UX Research & Testing Reports", "Animated Interface Demos", "Handover Documentation"],
      finalResult: "The new app design improved user satisfaction metrics and streamlined dev handover, helping the team release the update on schedule.",
      metrics: [
        { label: "Task Success Rate", value: "94%" },
        { label: "Usability Score", value: "88/100" },
        { label: "Dev Handover Time", value: "-40%" },
        { label: "User Satisfaction", value: "+38%" }
      ],
      testimonial: {
        name: "Sarah Chen",
        role: "Head of Product",
        company: "Zenith Smart Labs",
        text: "The interface Kira and her team designed is clean and user-friendly, helping us improve our app ratings."
      },
      team: [
        { name: "Kira Thorne", role: "Lead UX Designer" },
        { name: "Marcus Aurelius", role: "Prototyping Engineer" }
      ]
    },
    {
      id: "aether-capital-web",
      title: "Aether - Capital Web Experience",
      client: "Aether Capital",
      industry: "Corporate",
      year: 2025,
      category: "webdesign",
      summary: "A high-performance frontend web project for a venture firm, featuring clean layouts and scroll transitions.",
      tags: ["Web Design", "Frontend Development", "CSS Transitions", "SEO"],
      technologies: ["VS Code", "Figma", "HTML5", "CSS3", "Vanilla JS"],
      featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=95&w=3840&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=95&w=3840&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=95&w=3840&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=95&w=3840&auto=format&fit=crop"
      ],
      videoUrl: "https://player.vimeo.com/video/145452294?color=ff1e27&title=0&byline=0&portrait=0",
      overview: "Aether Capital commissioned NX Studio to design and develop their corporate web presence, aiming for a clean, minimalist aesthetic with fast loading times.",
      problem: "Aether's previous website was slow and felt outdated, failing to reflect their focus on technology investments.",
      research: "We analyzed websites in the venture capital sector, noting a trend toward slow animations and dense text blocks. We proposed a faster, clean design.",
      strategy: "We focused on speed and typography. We utilized lightweight CSS transitions and clean layout grids to keep the focus on Aether's portfolio and team.",
      process: "We designed layouts in Figma, then coded the frontend using clean HTML, CSS, and JS, optimizing assets to ensure quick loading times.",
      deliverables: ["Custom Web Designs", "Optimized Frontend Codebase", "Mobile-Responsive Layouts", "SEO Configuration", "Hosting Setup Guide"],
      finalResult: "The website launched on schedule, achieving high performance scores and providing a modern digital home for the investment firm.",
      metrics: [
        { label: "Lighthouse Performance", value: "98/100" },
        { label: "Page Load Time", value: "0.8s" },
        { label: "Mobile Bounce Rate", value: "-28%" },
        { label: "Inbound Leads Growth", value: "+54%" }
      ],
      testimonial: {
        name: "Alexander Mercer",
        role: "Managing Partner",
        company: "Aether Capital",
        text: "The website designed by NX Studio is fast, clean, and has helped improve our online inquiry flow."
      },
      team: [
        { name: "Kira Thorne", role: "Web Designer" },
        { name: "Marcus Aurelius", role: "Frontend Developer" },
        { name: "Sophia Sterling", role: "Content Strategist" }
      ]
    },
    {
      id: "elements-style-fashion",
      title: "Elements of Style - High Fashion Editorial",
      client: "Maison de L'Élégance",
      industry: "Fashion",
      year: 2024,
      category: "photography",
      summary: "A high-end editorial photography series and social campaign for a luxury fashion house.",
      tags: ["Fashion Photography", "Art Direction", "Image Retouching", "Social Media"],
      technologies: ["Hasselblad H6D", "Capture One Pro", "Photoshop", "Lightroom"],
      featuredImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=95&w=3840&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=95&w=3840&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=95&w=3840&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=95&w=3840&auto=format&fit=crop"
      ],
      videoUrl: "https://player.vimeo.com/video/442751522?color=ff1e27&title=0&byline=0&portrait=0",
      overview: "Maison de L'Élégance needed visual assets to launch their capsule collection. NX Studio directed a studio photo shoot focusing on high-contrast lighting and clean compositions.",
      problem: "Maison's previous campaigns struggled to stand out on social platforms. They needed a clean, editorial look that captured the textures of the fabrics.",
      research: "We studied classical studio lighting techniques, deciding on a high-contrast style that highlighted the garments' shapes and details.",
      strategy: "The concept focused on 'Sculptural Light'. We shot in a minimalist studio environment using stark shadows to emphasize the clothing designs.",
      process: "Our team styled the shoot, using medium format digital cameras. In editing, we adjusted color balance and contrast to achieve a polished final look.",
      deliverables: ["40 High-Res Editorial Stills", "80 Catalog Product Shots", "Social Media Image Sets", "Campaign Style Guide Document", "Digital Retouching Masters"],
      finalResult: "The editorial images were featured in major fashion publications and digital campaigns, supporting the collection's launch.",
      metrics: [
        { label: "Press Features", value: "15+" },
        { label: "Social Interactions", value: "1.2M" },
        { label: "Save Rate on IG", value: "+300%" },
        { label: "Direct Ad Conversion", value: "3.9%" }
      ],
      testimonial: {
        name: "Clara Dupont",
        role: "Creative Director",
        company: "Maison de L'Élégance",
        text: "The photography captured the focus of the collection perfectly. Retouching was clean and professional."
      },
      team: [
        { name: "Natalie Cross", role: "Lead Photographer" },
        { name: "Viktor Ivanov", role: "Set Stylist" }
      ]
    },
    {
      id: "metaverse-visuals",
      title: "Nebula - Brand Motion System",
      client: "Nebula VR",
      industry: "Technology",
      year: 2024,
      category: "motiongraphics",
      summary: "Developing an animated logo system and brand assets for a virtual reality platform.",
      tags: ["Motion Graphics", "Brand System", "Animation Guidelines", "Lottie"],
      technologies: ["After Effects", "Illustrator", "Lottie Web", "Figma"],
      featuredImage: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=95&w=3840&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=95&w=3840&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=95&w=3840&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=95&w=3840&auto=format&fit=crop"
      ],
      videoUrl: "https://player.vimeo.com/video/435676346?color=ff1e27&title=0&byline=0&portrait=0",
      overview: "Nebula VR commissioned NX Studio to create a brand motion system, animating their logo and UI elements for use across their web and VR applications.",
      problem: "Nebula's digital assets lacked animation guidelines, leading to inconsistent transitions across different platforms.",
      research: "We studied interface animations in VR environments, noting that elements need to load smoothly to avoid causing visual strain for users.",
      strategy: "We built an animation system based on organic movement. We animated interface panels to expand outward from a central point, establishing a consistent look.",
      process: "We animated logo assets in After Effects, exporting them to web-friendly Lottie files for integration into web page layouts.",
      deliverables: ["Animated Logo System Package", "Lottie JSON Web Files", "Video Title Template Packs", "Brand Animation Style Guide", "VFX Asset Library"],
      finalResult: "The animation system was implemented across Nebula's platforms, helping to unify their digital brand presentation.",
      metrics: [
        { label: "Implementation Time", value: "10 Days" },
        { label: "Web Animation Size", value: "85KB" },
        { label: "App Session Time", value: "+12%" },
        { label: "Logo Engagement Rate", value: "+22%" }
      ],
      testimonial: {
        name: "Elena Rostova",
        role: "Chief Marketing Officer",
        company: "Nebula VR",
        text: "The motion graphics team delivered clean, lightweight animations that integrated easily into our web application."
      },
      team: [
        { name: "Dimitri Volk", role: "Lead Motion Designer" },
        { name: "Marcus Aurelius", role: "Frontend Implementation Engineer" }
      ]
    }
  ]
};

// Expose variables globally for script access
window.NX_DATA = NX_DATA;
