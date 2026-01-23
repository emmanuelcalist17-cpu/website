// B2B Engineering Services - Products Database
// Categorized into 5 main professional groups: tools, electrical-ict, building-materials, industrial-equipment, safety-equipment
// Images sourced from: /images/Products/

const productsDB = [
    // TOOLS & HARDWARE (30 Products)
    { id: 1, name: "Professional Hand Tool Set", category: "tools", subcategory: "Hand Tools", description: "Complete professional-grade 150-piece set including wrenches, pliers, and screwdrivers", image: "images/Products/HAND TOOLS.jpg", industries: ["construction", "manufacturing"] },
    { id: 2, name: "Cordless Power Drill Kit", category: "tools", subcategory: "Power Tools", description: "18V heavy-duty cordless drill with 2 batteries and fast charger", image: "images/Products/CORDLESS DRILL SET.webp", industries: ["construction", "manufacturing"] },
    { id: 3, name: "9-Inch Angle Grinder", category: "tools", subcategory: "Power Tools", description: "High-power industrial angle grinder for metal and concrete cutting", image: "images/Products/9-Inch Angle Grinder.jpg", industries: ["manufacturing", "construction"] },
    { id: 4, name: "Digital Multimeter Pro", category: "tools", subcategory: "Testing", description: "True-RMS digital multimeter for precise electrical diagnostics", image: "images/Products/Digital Multimeter Pro.jpg", industries: ["energy", "manufacturing"] },
    { id: 5, name: "Pneumatic Impact Wrench", category: "tools", subcategory: "Air Tools", description: "High-torque air impact wrench for industrial automotive assembly", image: "images/Products/Pneumatic Impact Wrench.png", industries: ["automotive", "manufacturing"] },
    { id: 6, name: "Laser Level 360", category: "tools", subcategory: "Measuring", description: "Self-leveling green cross-line laser level for construction", image: "images/Products/Laser Level 360.avif", industries: ["construction"] },
    { id: 7, name: "Adjustable Pipe Wrench", category: "tools", subcategory: "Hand Tools", description: "Heavy-duty 24-inch cast iron pipe wrench for plumbing", image: "images/Products/Adjustable Pipe Wrench.jpg", industries: ["construction"] },
    { id: 8, name: "Professional Bench Vise", category: "tools", subcategory: "Hardware", description: "6-inch heavy-duty table vise with swivel base", image: "images/Products/Professional Bench Vise.jpg", industries: ["manufacturing"] },
    { id: 9, name: "Hydraulic Bolt Cutter", category: "tools", subcategory: "Hand Tools", description: "Industrial hydraulic bolt cutter for reinforced steel bars", image: "images/Products/Hydraulic Bolt Cutter.jpg", industries: ["construction"] },
    { id: 10, name: "Industrial Heat Gun", category: "tools", subcategory: "Power Tools", description: "Variable temperature heat gun for industrial applications", image: "images/Products/Industrial Heat Gun.webp", industries: ["manufacturing"] },
    { id: 11, name: "Drill Bit Master Set", category: "tools", subcategory: "Accessories", description: "100-piece HSS cobalt drill bit set for metal and stone", image: "images/Products/Drill Bit Master Set.jpg", industries: ["manufacturing", "construction"] },
    { id: 12, name: "Heavy Duty Toolbox", category: "tools", subcategory: "Storage", description: "Steel rolling toolbox with 7 drawers and locking system", image: "images/Products/Heavy Duty Toolbox.jpg", industries: ["automotive", "manufacturing"] },
    { id: 13, name: "Soldering Station Digital", category: "tools", subcategory: "Electrical", description: "ESD-safe digital soldering station for electronics repair", image: "images/Products/Soldering Station Digital.jpg", industries: ["energy"] },
    { id: 14, name: "Industrial Staple Gun", category: "tools", subcategory: "Hand Tools", description: "Professional manual staple gun for upholstery and construction", image: "images/Products/Industrial Staple Gun.jpg", industries: ["construction"] },
    { id: 15, name: "Torque Wrench Set", category: "tools", subcategory: "Measuring", description: "Click-type torque wrench set for precision automotive work", image: "images/Products/Torque Wrench Set.jpg", industries: ["automotive"] },
    { id: 16, name: "Circular Saw 7.25-Inch", category: "tools", subcategory: "Power Tools", description: "High-torque circular saw for wood and composite cutting", image: "images/Products/Circular Saw 7.25-Inch.jpg", industries: ["construction"] },
    { id: 17, name: "Metal File Set", category: "tools", subcategory: "Hand Tools", description: "10-piece industrial metal file set with ergonomic grips", image: "images/Products/Metal File Set.jpg", industries: ["manufacturing"] },
    { id: 18, name: "Precision Screwdriver Set", category: "tools", subcategory: "Hand Tools", description: "25-piece toolkit for small electronics and instruments", image: "images/Products/Precision Screwdriver Set.webp", industries: ["energy"] },
    { id: 19, name: "Step Ladder 8ft", category: "tools", subcategory: "Hardware", description: "Fiberglass non-conductive step ladder for electrical work", image: "images/Products/Step Ladder 8ft.jpg", industries: ["construction", "energy"] },
    { id: 20, name: "Bolt Extractor Set", category: "tools", subcategory: "Hand Tools", description: "Impact-grade bolt extractor set for damaged fasteners", image: "images/Products/Bolt Extractor Set.webp", industries: ["automotive"] },
    { id: 21, name: "Wet/Dry Shop Vac", category: "tools", subcategory: "Cleaning", description: "12-gallon industrial vacuum for debris and liquid cleanup", image: "images/Products/Wet Dry Shop Vac.webp", industries: ["manufacturing", "construction"] },
    { id: 22, name: "Hammer Drill 1/2-Inch", category: "tools", subcategory: "Power Tools", description: "High-power corded hammer drill for concrete and masonry", image: "images/Products/Hammer Drill 12-Inch.jpg", industries: ["construction"] },
    { id: 23, name: "Leveling Rod 5m", category: "tools", subcategory: "Measuring", description: "Telescopic aluminum leveling rod for surveying", image: "images/Products/Leveling Rod 5m.png", industries: ["construction"] },
    { id: 24, name: "Wire Stripper/Crimper", category: "tools", subcategory: "Electrical", description: "Professional 9-in-1 wire stripping and crimping tool", image: "images/Products/Wire StripperCrimper.jpg", industries: ["energy"] },
    { id: 25, name: "Heavy Duty C-Clamps", category: "tools", subcategory: "Hardware", description: "Industrial steel C-clamp set for welding and fabrication", image: "images/Products/Heavy Duty C-Clamps.webp", industries: ["manufacturing"] },
    { id: 26, name: "Sheet Metal Snips", category: "tools", subcategory: "Hand Tools", description: "Aviation-style snips for straight and curved metal cutting", image: "images/Products/Sheet Metal Snips.webp", industries: ["manufacturing"] },
    { id: 27, name: "Utility Knife Bulk Pack", category: "tools", subcategory: "Hand Tools", description: "Retractable industrial utility knives with 100 spare blades", image: "images/Products/Utility Knife Bulk Pack.jpg", industries: ["construction"] },
    { id: 28, name: "Magnetic Parts Tray", category: "tools", subcategory: "Accessories", description: "Stainless steel magnetic tray for holding small fasteners", image: "images/Products/Magnetic Parts Tray.jpg", industries: ["automotive"] },
    { id: 29, name: "Spirit Level Set", category: "tools", subcategory: "Measuring", description: "3-piece magnetic spirit level set (24, 48, 72-inch)", image: "images/Products/Spirit Level Set.jpg", industries: ["construction"] },
    { id: 30, name: "Air Compressor Portable", category: "tools", subcategory: "Air Tools", description: "6-gallon pancake air compressor for jobsite pneumatic tools", image: "images/Products/Air Compressor Portable.webp", industries: ["construction"] },

    // ELECTRICAL & ICT (30 Products)
    { id: 31, name: "Armored Power Cable", category: "electrical-ict", subcategory: "Power", description: "SWA armored cable for underground power distribution", image: "images/Products/Armored Power Cable.jpg", industries: ["energy", "construction"] },
    { id: 32, name: "Main Distribution Board", category: "electrical-ict", subcategory: "Power", description: "Industrial 3-phase distribution board with MCCB protection", image: "images/Products/Main Distribution Board.webp", industries: ["manufacturing", "energy"] },
    { id: 33, name: "Managed Network Switch", category: "electrical-ict", subcategory: "ICT", description: "48-port Gigabit PoE+ managed switch for enterprise", image: "images/Products/Managed Network Switch.webp", industries: ["education", "government"] },
    { id: 34, name: "10kVA Online UPS", category: "electrical-ict", subcategory: "Power", description: "Double-conversion online UPS for critical data centers", image: "images/Products/10kVA Online UPS.webp", industries: ["healthcare", "education"] },
    { id: 35, name: "IP Security Camera 4K", category: "electrical-ict", subcategory: "ICT", description: "Outdoor vandal-proof dome camera with night vision", image: "images/Products/IP Security Camera 4K.jpg", industries: ["government", "healthcare"] },
    { id: 36, name: "Solar Inverter 5kW", category: "electrical-ict", subcategory: "Solar", description: "High-efficiency grid-tied solar inverter with monitoring", image: "images/Products/Solar Inverter 5kW.webp", industries: ["energy", "agriculture"] },
    { id: 37, name: "Workstation PC Pro", category: "electrical-ict", subcategory: "ICT", description: "High-performance workstation with 64GB RAM and Xeon CPU", image: "images/Products/Workstation PC Pro.jpg", industries: ["education", "government"] },
    { id: 38, name: "Circuit Breaker 100A", category: "electrical-ict", subcategory: "Components", description: "Molded case circuit breaker (MCCB) for industrial use", image: "images/Products/Circuit Breaker 100A.webp", industries: ["energy", "manufacturing"] },
    { id: 39, name: "LED Panel 60x60", category: "electrical-ict", subcategory: "Lighting", description: "Ultra-slim LED ceiling panel for office lighting", image: "images/Products/LED Panel 60x60.webp", industries: ["healthcare", "education"] },
    { id: 40, name: "Fiber Optic Patch Panel", category: "electrical-ict", subcategory: "ICT", description: "24-port LC duplex fiber optic patch panel with cable management", image: "images/Products/Fiber Optic Patch Panel.jpg", industries: ["education", "government"] },
    { id: 41, name: "Variable Frequency Drive", category: "electrical-ict", subcategory: "Power", description: "Industrial VFD motor controller for speed regulation", image: "images/Products/Variable Frequency Drive.webp", industries: ["manufacturing"] },
    { id: 42, name: "Automatic Transfer Switch", category: "electrical-ict", subcategory: "Power", description: "ATS for seamless switching between grid and generator", image: "images/Products/Automatic Transfer Switch.jpg", industries: ["healthcare", "energy"] },
    { id: 43, name: "Wireless Access Point", category: "electrical-ict", subcategory: "ICT", description: "Enterprise-grade WiFi 6 access point dual-band", image: "images/Products/Wireless Access Point.webp", industries: ["education", "government"] },
    { id: 44, name: "Electrical PVC Conduit", category: "electrical-ict", subcategory: "Installation", description: "25mm heavy-duty electrical PVC conduit (3m length)", image: "images/Products/Electrical PVC Conduit.webp", industries: ["construction", "energy"] },
    { id: 45, name: "Industrial LED High Bay", category: "electrical-ict", subcategory: "Lighting", description: "200W high bay LED light for warehouse application", image: "images/Products/Industrial LED High Bay.webp", industries: ["manufacturing", "construction"] },
    { id: 46, name: "Data Server Cabinet 42U", category: "electrical-ict", subcategory: "ICT", description: "Standard 19-inch server rack with cooling fans", image: "images/Products/Data Server Cabinet 42U.jpg", industries: ["education", "government"] },
    { id: 47, name: "Control Cable Multi-Core", category: "electrical-ict", subcategory: "Power", description: "Shielded multi-core control cable for industrial sensors", image: "images/Products/Control Cable Multi-Core.webp", industries: ["manufacturing"] },
    { id: 48, name: "Voltage Stabilizer 5kVA", category: "electrical-ict", subcategory: "Power", description: "Servo-controlled voltage stabilizer for electronic equipment", image: "images/Products/Voltage Stabilizer 5kVA.webp", industries: ["healthcare", "energy"] },
    { id: 49, name: "Network Rackmount UPS", category: "electrical-ict", subcategory: "ICT", description: "2U rackmount UPS with network management card", image: "images/Products/Network Rackmount UPS.jpg", industries: ["education", "government"] },
    { id: 50, name: "Wall-Mount Data Rack 6U", category: "electrical-ict", subcategory: "ICT", description: "Compact wall-mount network enclosure with glass door", image: "images/Products/Wall-Mount Data Rack 6U.webp", industries: ["education", "healthcare"] },
    { id: 51, name: "CAT6 Network Cable Roll", category: "electrical-ict", subcategory: "ICT", description: "305m box of pure copper CAT6 UTP network cable", image: "images/Products/CAT6 Network Cable Roll.jpg", industries: ["education", "government"] },
    { id: 52, name: "Smart IP Phone", category: "electrical-ict", subcategory: "ICT", description: "Business VoIP phone with color display and HD audio", image: "images/Products/Smart IP Phone.webp", industries: ["education", "government"] },
    { id: 53, name: "Street Light LED 150W", category: "electrical-ict", subcategory: "Lighting", description: "IP66 outdoor LED street light with aluminum housing", image: "images/Products/Street Light LED 150W.jpg", industries: ["government", "construction"] },
    { id: 54, name: "Flexible Electrical Wire", category: "electrical-ict", subcategory: "Installation", description: "Roll of 2.5mm flexible copper wire (all colors)", image: "images/Products/Flexible Electrical Wire.webp", industries: ["energy", "construction"] },
    { id: 55, name: "Industrial Socket & Plug", category: "electrical-ict", subcategory: "Installation", description: "Heavy-duty 32A 3-phase industrial power connectors", image: "images/Products/Industrial Socket & Plug.webp", industries: ["manufacturing", "construction"] },
    { id: 56, name: "Earth Rod Copper", category: "electrical-ict", subcategory: "Grounding", description: "Solid copper earth rod for electrical system grounding", image: "images/Products/Earth Rod Copper.webp", industries: ["energy", "construction"] },
    { id: 57, name: "Heat Shrink Tubing Kit", category: "electrical-ict", subcategory: "Installation", description: "Assorted sizes of fire-retardant heat shrink tubes", image: "images/Products/Heat Shrink Tubing Kit.jpg", industries: ["energy", "manufacturing"] },
    { id: 58, name: "Contactors & Overloads", category: "electrical-ict", subcategory: "Control", description: "Magnetic contactors for industrial motor starters", image: "images/Products/Contactors & Overloads.jpg", industries: ["manufacturing"] },
    { id: 59, name: "Digital Timer Switch", category: "electrical-ict", subcategory: "Control", description: "Programmable digital timer for automated electrical systems", image: "images/Products/Digital Timer Switch.jpg", industries: ["energy", "manufacturing"] },
    { id: 60, name: "Isolator Switch 63A", category: "electrical-ict", subcategory: "Power", description: "Weatherproof industrial isolator switch IP66", image: "images/Products/Isolator Switch 63A.jpg", industries: ["energy", "construction"] },

    // BUILDING MATERIALS (30 Products)
    { id: 61, name: "Portland Cement 50kg", category: "building-materials", subcategory: "Cement", description: "Grade 42.5N general purpose Portland cement", image: "images/Products/Portland Cement 50kg.avif", industries: ["construction"] },
    { id: 62, name: "Steel Reinforcement 12mm", category: "building-materials", subcategory: "Steel", description: "High tensile deformed rebar for concrete reinforcement", image: "images/Products/Steel Reinforcement 12mm.webp", industries: ["construction"] },
    { id: 63, name: "Corrugated Roof Sheets", category: "building-materials", subcategory: "Roofing", description: "Zinc-aluminum coated corrugated roofing sheets", image: "images/Products/Corrugated Roof Sheets.avif", industries: ["construction"] },
    { id: 64, name: "PPR Internal Pipe", category: "building-materials", subcategory: "Plumbing", description: "20mm PPR pipe for hot and cold water plumbing", image: "images/Products/PPR Internal Pipe.webp", industries: ["construction"] },
    { id: 65, name: "Premium Emulsion Paint", category: "building-materials", subcategory: "Finishing", description: "Silk finish interior emulsion paint (20L bucket)", image: "images/Products/Premium Emulsion Paint.webp", industries: ["construction", "hospitality"] },
    { id: 66, name: "Concrete Blocks 6-inch", category: "building-materials", subcategory: "Masonry", description: "Standard load-bearing hollow concrete blocks", image: "images/Products/Concrete Blocks 6-inch.webp", industries: ["construction"] },
    { id: 67, name: "Clay Bricks (Face Bricks)", category: "building-materials", subcategory: "Masonry", description: "High-quality red clay bricks for decorative walling", image: "images/Products/Clay Bricks (Face Bricks).jpg", industries: ["construction"] },
    { id: 68, name: "Ceramic Floor Tiles", category: "building-materials", subcategory: "Finishing", description: "60x60cm high-gloss ceramic tiles for commercial flooring", image: "images/Products/Ceramic Floor Tiles.webp", industries: ["construction", "hospitality"] },
    { id: 69, name: "PVC Drain Pipe 110mm", category: "building-materials", subcategory: "Plumbing", description: "Standard underground drainage PVC pipe", image: "images/Products/PVC Drain Pipe 110mm.jpg", industries: ["construction"] },
    { id: 70, name: "Gypsum Board 9mm", category: "building-materials", subcategory: "Masonry", description: "Standard gypsum wallboard for ceilings and partitions", image: "images/Products/Gypsum Board 9mm.webp", industries: ["construction"] },
    { id: 71, name: "Timber Joists 4x2", category: "building-materials", subcategory: "Timber", description: "Treated structural timber for roofing and framing", image: "images/Products/Timber Joists 4x2.webp", industries: ["construction"] },
    { id: 72, name: "Aluminum Window Frames", category: "building-materials", subcategory: "Fixtures", description: "Powder-coated aluminum sliding window sections", image: "images/Products/Aluminum Window Frames.png", industries: ["construction"] },
    { id: 73, name: "Tile Adhesive 20kg", category: "building-materials", subcategory: "Finishing", description: "Heavy-duty tile cement for vertical and horizontal tiles", image: "images/Products/Tile Adhesive 20kg.webp", industries: ["construction"] },
    { id: 74, name: "Water Tank 1000L", category: "building-materials", subcategory: "Storage", description: "Polyethylene vertical water storage tank", image: "images/Products/Water Tank 1000L.webp", industries: ["construction", "agriculture"] },
    { id: 75, name: "Steel Mesh Sheet", category: "building-materials", subcategory: "Steel", description: "Welded steel mesh for driveway reinforcement", image: "images/Products/Steel Mesh Sheet.jpg", industries: ["construction"] },
    { id: 76, name: "External Gloss Paint", category: "building-materials", subcategory: "Finishing", description: "Weather-resistant gloss paint for outdoor metal/wood", image: "images/Products/External Gloss Paint.webp", industries: ["construction"] },
    { id: 77, name: "Brass Ball Valve 1-Inch", category: "building-materials", subcategory: "Plumbing", description: "Full-port brass ball valve for water control", image: "images/Products/Brass Ball Valve 1-Inch.jpg", industries: ["construction"] },
    { id: 78, name: "Fiber Glass Insulation", category: "building-materials", subcategory: "Masonry", description: "Thermal and acoustic fiberglass insulation roll", image: "images/Products/Fiber Glass Insulation.webp", industries: ["construction"] },
    { id: 79, name: "Heavy Duty Door Frame", category: "building-materials", subcategory: "Fixtures", description: "Pre-formed steel door frame for security doors", image: "images/Products/Heavy Duty Door Frame.jpg", industries: ["construction"] },
    { id: 80, name: "Window Glass Sheet", category: "building-materials", subcategory: "Fixtures", description: "4mm clear float glass for building windows", image: "images/Products/Window Glass Sheet.webp", industries: ["construction"] },
    { id: 81, name: "Bitumen Sealant", category: "building-materials", subcategory: "Roofing", description: "Waterproofing bitumen sealant for roof joints", image: "images/Products/Bitumen Sealant.webp", industries: ["construction"] },
    { id: 82, name: "Galvanized Nails 3-inch", category: "building-materials", subcategory: "Hardware", description: "Bulk box (50kg) of galvanized wire nails", image: "images/Products/Galvanized Nails 3-inch.avif", industries: ["construction"] },
    { id: 83, name: "Expansion Joint Filler", category: "building-materials", subcategory: "Cement", description: "Pre-molded joint filler for concrete slabs", image: "images/Products/Expansion Joint Filler.jpg", industries: ["construction"] },
    { id: 84, name: "Aggregate stone (Grade 1)", category: "building-materials", subcategory: "Cement", description: "Crushed aggregate for high-strength concrete", image: "images/Products/Aggregate stone (Grade 1).jpg", industries: ["construction"] },
    { id: 85, name: "Building Sand (Tone)", category: "building-materials", subcategory: "Cement", description: "Washed river sand for plastering and mortar", image: "images/Products/Building Sand (Tone).jpg", industries: ["construction"] },
    { id: 86, name: "Manhole Cover Cast Iron", category: "building-materials", subcategory: "Masonry", description: "Heavy-duty cast iron manhole cover for roads", image: "images/Products/Manhole Cover Cast Iron.avif", industries: ["construction"] },
    { id: 87, name: "Plywood Marine Grade", category: "building-materials", subcategory: "Timber", description: "18mm marine plywood for moisture resistance", image: "images/Products/Plywood Marine Grade.webp", industries: ["construction"] },
    { id: 88, name: "Concrete Vibrator Rod", category: "building-materials", subcategory: "Accessories", description: "Flexible shaft for concrete vibrating machine", image: "images/Products/Concrete Vibrator Rod.jpg", industries: ["construction"] },
    { id: 89, name: "Scaffolding Connector", category: "building-materials", subcategory: "Accessories", description: "Standard drop-forged scaffolding coupler", image: "images/Products/Scaffolding Connector.webp", industries: ["construction"] },
    { id: 90, name: "Screws Bulk Master Pack", category: "building-materials", subcategory: "Hardware", description: "Assorted tech screws for metal and wood", image: "images/Products/Screws Bulk Master Pack.jpg", industries: ["construction"] },

    // INDUSTRIAL EQUIPMENT (30 Products)
    { id: 91, name: "Industrial Air Compressor", category: "industrial-equipment", subcategory: "Compressors", description: "10HP reciprocal air compressor with 500L tank", image: "images/Products/Industrial Air Compressor.webp", industries: ["manufacturing", "automotive"] },
    { id: 92, name: "Semi-Auto Forklift", category: "industrial-equipment", subcategory: "Material Handling", description: "2-ton battery-operated pallet stacker", image: "images/Products/Semi-Auto Forklift.webp", industries: ["manufacturing", "other"] },
    { id: 93, name: "Diesel Engine 15HP", category: "industrial-equipment", subcategory: "Engines", description: "Single-cylinder diesel engine for pumps and mills", image: "images/Products/Diesel Engine 15HP.webp", industries: ["agriculture", "manufacturing"] },
    { id: 94, name: "High Pressure Washer", category: "industrial-equipment", subcategory: "Cleaning", description: "Diesel-powered high pressure washer (3000 PSI)", image: "images/Products/High Pressure Washer.webp", industries: ["automotive", "hospitality"] },
    { id: 95, name: "Centrifugal Pump 3-inch", category: "industrial-equipment", subcategory: "Pumps", description: "High-volume water pump for industrial irrigation", image: "images/Products/Centrifugal Pump 3-inch.webp", industries: ["agriculture", "manufacturing"] },
    { id: 96, name: "Industrial Lathe Machine", category: "industrial-equipment", subcategory: "Machining", description: "High-precision manual gap-bed lathe machine", image: "images/Products/Industrial Lathe Machine.avif", industries: ["manufacturing"] },
    { id: 97, name: "Welding Inverter 300A", category: "industrial-equipment", subcategory: "Welding", description: "Professional IGBT inverter stick welding machine", image: "images/Products/Welding Inverter 300A.avif", industries: ["manufacturing", "construction"] },
    { id: 98, name: "Electric Motor 3-Phase", category: "industrial-equipment", subcategory: "Engines", description: "5.5kW high-efficiency electric induction motor", image: "images/Products/Electric Motor 3-Phase.webp", industries: ["manufacturing", "energy"] },
    { id: 99, name: "Steel Belt Conveyor", category: "industrial-equipment", subcategory: "Material Handling", description: "10-meter modular belt conveyor for assembly lines", image: "images/Products/Steel Belt Conveyor.webp", industries: ["manufacturing"] },
    { id: 100, name: "Industrial Drying Oven", category: "industrial-equipment", subcategory: "Thermal", description: "Large-capacity drying oven for industrial parts", image: "images/Products/Industrial Drying Oven.webp", industries: ["manufacturing"] },
    { id: 101, name: "Hydraulic Press 50T", category: "industrial-equipment", subcategory: "Machining", description: "Heavy-duty hydraulic shop press for industrial use", image: "images/Products/Hydraulic Press 50T.webp", industries: ["manufacturing", "automotive"] },
    { id: 102, name: "Vacuum Pump System", category: "industrial-equipment", subcategory: "Pumps", description: "Rotary vane vacuum pump for labs and industrial use", image: "images/Products/Vacuum Pump System.webp", industries: ["manufacturing", "other"] },
    { id: 103, name: "Gearboxes & Speed Reducers", category: "industrial-equipment", subcategory: "Components", description: "Worm gear reduction units for conveyor drives", image: "images/Products/Gearboxes & Speed Reducers.webp", industries: ["manufacturing"] },
    { id: 104, name: "Platform Scale 1000kg", category: "industrial-equipment", subcategory: "Measuring", description: "Digital platform scale with stainless steel top", image: "images/Products/Platform Scale 1000kg.webp", industries: ["manufacturing", "other"] },
    { id: 105, name: "Chain Block 3 Ton", category: "industrial-equipment", subcategory: "Lifting", description: "High-strength manual chain hoist lifter", image: "images/Products/Chain Block 3 Ton.webp", industries: ["construction", "manufacturing"] },
    { id: 106, name: "Pneumatic Cylinder Module", category: "industrial-equipment", subcategory: "Components", description: "Double-acting air cylinder for automation", image: "images/Products/Pneumatic Cylinder Module.webp", industries: ["manufacturing"] },
    { id: 107, name: "Steam Generator Unit", category: "industrial-equipment", subcategory: "Thermal", description: "Compact electric steam generator for industrial processes", image: "images/Products/Steam Generator Unit.webp", industries: ["manufacturing", "hospitality"] },
    { id: 108, name: "Heat Exchanger Plate", category: "industrial-equipment", subcategory: "Thermal", description: "Stainless steel plate heat exchanger for cooling", image: "images/Products/Heat Exchanger Plate.webp", industries: ["manufacturing", "energy"] },
    { id: 109, name: "Vibratory Feeder System", category: "industrial-equipment", subcategory: "Material Handling", description: "Automatic feeder for small components assembly", image: "images/Products/Vibratory Feeder System.webp", industries: ["manufacturing"] },
    { id: 110, name: "Industrial Fan Blower", category: "industrial-equipment", subcategory: "Cooling", description: "Heavy-duty centrifugal blower for ventilation", image: "images/Products/Industrial Fan Blower.webp", industries: ["manufacturing", "construction"] },
    { id: 111, name: "Plasma Cutter Pro", category: "industrial-equipment", subcategory: "Welding", description: "Inverter plasma cutting machine (60A) for clean cuts", image: "images/Products/Plasma Cutter Pro.webp", industries: ["manufacturing", "construction"] },
    { id: 112, name: "Platform Hand Truck", category: "industrial-equipment", subcategory: "Material Handling", description: "Folding steel heavy-duty hand trolley (300kg)", image: "images/Products/Platform Hand Truck.webp", industries: ["other", "manufacturing"] },
    { id: 113, name: "Chemical Dosing Pump", category: "industrial-equipment", subcategory: "Pumps", description: "Precision diaphragm pump for chemical treatment", image: "images/Products/Chemical Dosing Pump.webp", industries: ["manufacturing", "healthcare"] },
    { id: 114, name: "Pneumatic Valve 5-way", category: "industrial-equipment", subcategory: "Components", description: "Solenoid-operated pneumatic directional control valve", image: "images/Products/Pneumatic Valve 5-way.webp", industries: ["manufacturing"] },
    { id: 115, name: "Lubricating Grease Pump", category: "industrial-equipment", subcategory: "Lubrication", description: "Manual high-pressure grease dispenser system", image: "images/Products/Lubricating Grease Pump.webp", industries: ["manufacturing", "automotive"] },
    { id: 116, name: "Air Handling Unit (Small)", category: "industrial-equipment", subcategory: "Cooling", description: "Modular AHU for commercial ventilation systems", image: "images/Products/Air Handling Unit (Small).webp", industries: ["hospitality", "healthcare"] },
    { id: 117, name: "Storage Tank Liner", category: "industrial-equipment", subcategory: "Thermal", description: "Protective epoxy liner for industrial liquid tanks", image: "images/Products/Storage Tank Liner.webp", industries: ["manufacturing"] },
    { id: 118, name: "Vertical Milling Machine", category: "industrial-equipment", subcategory: "Machining", description: "Universal vertical milling machine with DRO", image: "images/Products/Vertical Milling Machine.avif", industries: ["manufacturing"] },
    { id: 119, name: "Cooling Tower Fan", category: "industrial-equipment", subcategory: "Cooling", description: "Variable pitch axial fan for industrial cooling towers", image: "images/Products/Cooling Tower Fan.webp", industries: ["energy", "manufacturing"] },
    { id: 120, name: "Automatic Strapping Machine", category: "industrial-equipment", subcategory: "Machining", description: "Box strapping and bundling machine for logistics", image: "images/Products/Automatic Strapping Machine.webp", industries: ["manufacturing", "other"] },

    // SAFETY EQUIPMENT (30 Products)
    { id: 121, name: "Safety Helmet Hard Hat", category: "safety-equipment", subcategory: "Head Protection", description: "Vented safety helmet with adjustable suspension", image: "images/Products/Safety Helmet Hard Hat.jpg", industries: ["construction", "manufacturing"] },
    { id: 122, name: "Nitrile Safety Gloves", category: "safety-equipment", subcategory: "Hand Protection", description: "Cut-resistant nitrile coated work gloves (12 pack)", image: "images/Products/Nitrile Safety Gloves.webp", industries: ["manufacturing", "construction"] },
    { id: 123, name: "Steel Toe Boot Pro", category: "safety-equipment", subcategory: "Foot Protection", description: "S3 grade puncture-resistant safety boots", image: "images/Products/Steel Toe Boot Pro.webp", industries: ["construction", "manufacturing"] },
    { id: 124, name: "High Vis Safety Vest", category: "safety-equipment", subcategory: "Visibility", description: "Standard reflective safety vest class 2", image: "images/Products/High Vis Safety Vest.webp", industries: ["construction", "other"] },
    { id: 125, name: "Fire Extinguisher ABC 6kg", category: "safety-equipment", subcategory: "Fire Safety", description: "Multi-purpose dry powder fire extinguisher", image: "images/Products/Fire Extinguisher ABC 6kg.webp", industries: ["hospitality", "government"] },
    { id: 126, name: "Full Body Fall Harness", category: "safety-equipment", subcategory: "Height Safety", description: "Universal size adjustable safety harness for roofs", image: "images/Products/Full Body Fall Harness.avif", industries: ["construction", "energy"] },
    { id: 127, name: "Noise Cancelling Ear Muffs", category: "safety-equipment", subcategory: "Hearing Protection", description: "Over-the-head ear muffs with 30dB NRR", image: "images/Products/Noise Cancelling Ear Muffs.webp", industries: ["manufacturing", "construction"] },
    { id: 128, name: "Anti-Fog Safety Goggles", category: "safety-equipment", subcategory: "Eye Protection", description: "Wide-vision goggles with anti-fog coating", image: "images/Products/Anti-Fog Safety Goggles.webp", industries: ["manufacturing", "healthcare"] },
    { id: 129, name: "N95 Particulate Respirator", category: "safety-equipment", subcategory: "Respiratory", description: "Valved mask for dust and mist protection (Box 20)", image: "images/Products/N95 Particulate Respirator.webp", industries: ["healthcare", "construction"] },
    { id: 130, name: "First Aid Kit Industrial XL", category: "safety-equipment", subcategory: "Medical", description: "Wall-mounted comprehensive 100-person first aid kit", image: "images/Products/First Aid Kit Industrial XL.webp", industries: ["government", "education"] },
    { id: 131, name: "Eye Wash Station Portable", category: "safety-equipment", subcategory: "Medical", description: "Self-contained Gravity-fed emergency eye wash unit", image: "images/Products/Eye Wash Station Portable.webp", industries: ["manufacturing", "healthcare"] },
    { id: 132, name: "Chemical Spill Kit 50L", category: "safety-equipment", subcategory: "Spill Containment", description: "Universal spill kit for industrial oil and chemicals", image: "images/Products/Chemical Spill Kit 50L.webp", industries: ["manufacturing", "energy"] },
    { id: 133, name: "Safety Signage Set Master", category: "safety-equipment", subcategory: "Signage", description: "Common site signs (Entry, PPE required, Danger)", image: "images/Products/Safety Signage Set Master.webp", industries: ["construction", "manufacturing"] },
    { id: 134, name: "Lockout Tagout Kit Pro", category: "safety-equipment", subcategory: "Electrical Safety", description: "Electrical isolation kit with padlocks and tags", image: "images/Products/Lockout Tagout Kit Pro.webp", industries: ["energy", "manufacturing"] },
    { id: 135, name: "Flame Retardant Overall", category: "safety-equipment", subcategory: "Body Protection", description: "100% cotton flame retardant work suit (Orange)", image: "images/Products/Flame Retardant Overall.webp", industries: ["energy", "manufacturing"] },
    { id: 136, name: "Safety Barrier Tape 500m", category: "safety-equipment", subcategory: "Visibility", description: "Yellow/Black hazard warning barrier tape", image: "images/Products/Safety Barrier Tape 500m.webp", industries: ["construction", "government"] },
    { id: 137, name: "Welding Face Shield", category: "safety-equipment", subcategory: "Eye Protection", description: "Auto-darkening welding helmet with shade adjust", image: "images/Products/Welding Face Shield.webp", industries: ["manufacturing", "construction"] },
    { id: 138, name: "Safety Cone 28-inch", category: "safety-equipment", subcategory: "Visibility", description: "PVC traffic cone with reflective collars", image: "images/Products/Safety Cone 28-inch.webp", industries: ["government", "construction"] },
    { id: 139, name: "Acid-Resistant Apron", category: "safety-equipment", subcategory: "Body Protection", description: "PVC/Nitrile heavy-duty chemical resistant apron", image: "images/Products/Acid-Resistant Apron.webp", industries: ["manufacturing", "healthcare"] },
    { id: 140, name: "Shock Absorbing Lanyard", category: "safety-equipment", subcategory: "Height Safety", description: "Twin tail lanyard with large scaffold hooks", image: "images/Products/Shock Absorbing Lanyard.webp", industries: ["construction", "energy"] },
    { id: 141, name: "Gas Detector 4-Gas Pro", category: "safety-equipment", subcategory: "Detection", description: "Portable multi-gas detector (O2, LEL, CO, H2S)", image: "images/Products/Gas Detector 4-Gas Pro.jpeg", industries: ["energy", "manufacturing"] },
    { id: 142, name: "Insulated Rubber Matting", category: "safety-equipment", subcategory: "Electrical Safety", description: "Class 0 industrial VDE insulated safety floor mat", image: "images/Products/Insulated Rubber Matting.webp", industries: ["energy"] },
    { id: 143, name: "High Vis Waterproof Jacket", category: "safety-equipment", subcategory: "Visibility", description: "Breathable fluorescent yellow winter work jacket", image: "images/Products/High Vis Waterproof Jacket.webp", industries: ["other", "construction"] },
    { id: 144, name: "Knee Protection Pads", category: "safety-equipment", subcategory: "Body Protection", description: "Gel-padded heavy-duty protective knee pads", image: "images/Products/Knee Protection Pads.webp", industries: ["construction"] },
    { id: 145, name: "Fire Blanket Large", category: "safety-equipment", subcategory: "Fire Safety", description: "1.2m x 1.8m fire blanket for industrial kitchens", image: "images/Products/Fire Blanket Large.webp", industries: ["hospitality", "manufacturing"] },
    { id: 146, name: "Industrial Arc Flash Suit", category: "safety-equipment", subcategory: "Electrical Safety", description: "40 cal/cm2 complete arc flash protection kit", image: "images/Products/Industrial Arc Flash Suit.webp", industries: ["energy"] },
    { id: 147, name: "Disposable Coveralls Pro", category: "safety-equipment", subcategory: "Body Protection", description: "Microporous Type 5/6 disposable protection suit (Pack 25)", image: "images/Products/Disposable Coveralls Pro.webp", industries: ["manufacturing", "healthcare"] },
    { id: 148, name: "Life Jacket Automatic", category: "safety-equipment", subcategory: "Water Safety", description: "Inflatable high-buoyancy life jacket for marine work", image: "images/Products/Life Jacket Automatic.webp", industries: ["other"] },
    { id: 149, name: "Anti-Static Lab Coat", category: "safety-equipment", subcategory: "Body Protection", description: "ESD-safe lab coat for electronic cleanrooms", image: "images/Products/Anti-Static Lab Coat.webp", industries: ["energy", "healthcare"] },
    { id: 150, name: "Intrinsically Safe Torch", category: "safety-equipment", subcategory: "Detection", description: "ATEX explosion-proof high-power LED flashlight", image: "images/Products/Intrinsically Safe Torch.webp", industries: ["energy", "manufacturing"] }
];

// Helper to filter products
function filterProducts(filters) {
    let filtered = [...productsDB];

    if (filters.category && filters.category !== 'all') {
        filtered = filtered.filter(p => p.category.toLowerCase() === filters.category.toLowerCase());
    }

    if (filters.search) {
        const query = filters.search.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.subcategory.toLowerCase().includes(query)
        );
    }

    if (filters.sort) {
        switch (filters.sort) {
            case 'name-asc':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }
    }

    return filtered;
}

// Helper to get unique categories (if needed dynamically)
function getCategories() {
    return [...new Set(productsDB.map(p => p.category))];
}

// Export for window use
if (typeof window !== 'undefined') {
    window.ProductsDB = {
        products: productsDB,
        filterProducts,
        getCategories
    };
}
