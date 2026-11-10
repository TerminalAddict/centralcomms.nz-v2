export const cablingUseCases = [
  {
    title: 'Moving office or fitting out a new building',
    need: 'The floor plan is changing, trades are on site and opening day is getting closer. Desks are only part of the cabling brief: meeting rooms, printers, reception, Wi-Fi and security all need a place on the plan.',
    approach: 'Plan outlets, cabinet locations, cable routes and spare capacity before walls and ceilings close. Coordinate the network with your builder, electrician and IT provider.',
    benefit: 'A workspace ready for people and equipment, with fewer last-minute surface runs and less disruption after the move.',
  },
  {
    title: 'Warehouses, workshops and production spaces',
    need: 'High roofs, long distances and busy work areas make a commercial installation different from adding a socket beside a desk. Scanners, dispatch stations, access points and cameras may be spread across the building.',
    approach: 'Choose suitable pathways and cable protection, plan access at height and coordinate work around stock movements and production. Consider fibre between cabinets where distance or the environment calls for it.',
    benefit: 'Connections where the work actually happens, with an installation plan that accounts for your operating environment.',
  },
  {
    title: 'Adding cameras, Wi-Fi or business phones',
    need: 'A new camera position or wireless access point often needs a new cable, not another extender. IP phones, cameras and access points may also need power delivered over the network.',
    approach: 'Plan the outlet location, network capacity and Power over Ethernet requirements together. Check the switch power budget and allow for maintenance access to the finished device.',
    benefit: 'Better equipment placement and a shared, maintainable network foundation for communications and security.',
  },
  {
    title: 'Connecting buildings or expanding a campus',
    need: 'A school, workshop or commercial site is adding another block, office or storage building. The new area needs access to the same business systems without relying on an improvised long cable run.',
    approach: 'Assess fibre routes, ducts, distances, termination points and compatible optics. Where a physical route is impractical, we can also assess a purpose-designed wireless link.',
    benefit: 'A planned connection between buildings, with capacity and access arrangements considered before installation.',
  },
  {
    title: 'Large files, shared storage and busy servers',
    need: 'Design files, video, backups or many users accessing a NAS can expose a slow connection between switches and storage. Upgrading every desk is not always the best first investment.',
    approach: 'Find the bottleneck, then assess faster server and switch uplinks, suitable fibre or Cat6A, and the equipment at both ends. Keep ordinary devices at a sensible speed for their workload.',
    benefit: 'Upgrade spending focused on the links that matter, instead of paying for speed that the rest of the system cannot use.',
  },
  {
    title: 'Taking over a messy or unreliable network',
    need: 'Nobody knows which socket goes where, the cabinet is full, or a connection drops whenever a desk moves. Inherited cabling can make even a small change difficult to diagnose.',
    approach: 'Trace and label links, inspect terminations, test the affected runs and plan cabinet improvements. Agree any outage before repatching or removing an unidentified connection.',
    benefit: 'A network your team can understand and maintain, with faults investigated before wholesale replacement is proposed.',
  },
];

export const cablingOptions = [
  {
    name: 'Cat6 copper',
    use: 'General office outlets, phones, printers and many camera or access-point connections.',
    check: 'A practical option for gigabit networking. Do not assume every existing Cat6 run will support 10GbE; length, installation quality and interference between cables matter.',
  },
  {
    name: 'Cat6A copper',
    use: 'New cabling where 10GbE capability and longer-term capacity are part of the brief.',
    check: 'Designed for 10GBASE-T over a compliant 100-metre channel, including patch leads. Cable, outlets, patch panels and installation must form a suitable end-to-end system.',
  },
  {
    name: 'Fibre optic cabling',
    use: 'Backbone connections between cabinets, longer runs and links between buildings.',
    check: 'Select fibre type, connectors and optics together for the distance and speed. Fibre does not supply PoE to a camera or access point; powered equipment is still needed at the far end.',
  },
  {
    name: 'Existing Cat5e or Cat6',
    use: 'Keeping serviceable infrastructure when its tested performance meets the requirement.',
    check: 'Inspect and test before deciding to replace it. A cable label alone does not establish the condition or performance of the complete installed link.',
  },
];

export const cablingVideo = {
  name: 'Commercial data cabling during a building fit-out',
  description: 'A short, silent installation clip supplied by Central Communications. The camera pans from overhead blue data cables down to loose cable ends inside a building with exposed steel framing. The cabling is in progress, before final termination and cabinet fit-out.',
  src: '/assets/videos/commercial-data-cabling.mp4',
  poster: '/assets/images/data-cabling/commercial-cabling-video-poster.webp',
  duration: 'PT6.333S',
  uploadDate: '2022-09-14',
};

// These answers also generate the page's FAQPage JSON-LD.
export const cablingFaqs = [
  {
    question: 'What is structured data cabling?',
    answer: 'Structured cabling is an organised system of cables, outlets, patch panels and cabinets that connects equipment around a building. Instead of separate ad hoc runs for each new device, it provides a planned foundation for computers, business phones, Wi-Fi access points, CCTV and other compatible network equipment.',
  },
  {
    question: 'Do you install data cabling in Hamilton and across Waikato?',
    answer: 'Yes. Central Communications Ltd is based in Hamilton and provides structured copper cabling, fibre installation and splicing, cabinet work and network upgrades across Waikato. We work on new commercial builds, existing premises and site expansions. Tell us the location, access requirements and intended use so we can scope the work.',
  },
  {
    question: 'Are all your staff certified for working at height?',
    answer: "Yes. All Central Communications staff are certified for working at height through Safety 'n Action. We plan the access method, site hazards and work area for each job. Training is part of that preparation, not a replacement for a site-specific assessment or the appropriate equipment.",
  },
  {
    question: 'Are you qualified Legrand data cablers?',
    answer: 'Yes. We are qualified Legrand data cablers. We can discuss a Legrand cabling system and the appropriate components, installation and testing for your project. Any manufacturer-backed system warranty must be confirmed for the quoted installation; it is not automatic simply because an individual cable or outlet is Legrand.',
  },
  {
    question: 'Should I choose Cat6 or Cat6A?',
    answer: 'Choose around the required speed, cable routes, expected building use and budget. Cat6 can be suitable for general gigabit connections. Cat6A is designed for 10GBASE-T across a compliant channel up to 100 metres, including patch leads. If 10GbE is part of the brief, assess the complete system rather than choosing on cable price alone.',
  },
  {
    question: 'Can my existing Cat6 cabling run at 10GbE?',
    answer: 'Possibly, on suitable shorter links, but not as a blanket promise for every Cat6 installation. Distance, terminations, patch leads and interference between cables affect suitability. We assess the installed cabling and the equipment at both ends before recommending reuse or replacement for a 10GbE upgrade.',
  },
  {
    question: 'When should a business use fibre instead of copper?',
    answer: 'Fibre is worth considering for links between buildings or cabinets, longer distances and high-capacity backbones. The optical signal is not affected by electromagnetic interference. The design still needs suitable cable protection, fibre type, connectors, optics and equipment, plus power at the far end. Copper remains useful for many end-device connections and PoE.',
  },
  {
    question: 'Do you install and splice fibre optic cable?',
    answer: 'Yes. We provide fibre optic installation and splicing as part of business network projects. We plan the route, fibre and termination requirements around the site, then agree the testing and handover information. Connecting two buildings also needs consideration of access, ducts, any civil works and the equipment at each end.',
  },
  {
    question: 'Do I still need data cabling if we mainly use Wi-Fi?',
    answer: 'Usually, yes. Wireless access points commonly use a wired connection back to the network, often with PoE supplying their power. Properly placed wired access points can avoid relying on wireless hops for every connection. Coverage, radio design, switch capacity and cabling all need to work together.',
  },
  {
    question: 'Can the same cabling support CCTV, phones and computers?',
    answer: 'A structured Ethernet network can serve compatible cameras, IP phones, access points and computers through suitable outlets and switches. That does not mean every device should share the same unrestricted network. We consider bandwidth, PoE and logical separation such as VLANs with the person responsible for your network configuration.',
  },
  {
    question: 'What is Power over Ethernet, and what needs checking?',
    answer: 'Power over Ethernet, or PoE, lets compatible equipment receive data and electrical power over the same copper network connection. The switch or injector, device power requirement, cable installation and total switch power budget must be suitable. A spare Ethernet port is not necessarily a spare powered port.',
  },
  {
    question: 'Will new cabling make our internet faster?',
    answer: 'Only if the existing internal network is a limiting factor. New cabling does not increase the speed purchased from your internet provider. The router, switches, Wi-Fi, devices and service plan also affect performance. A faster local network can still help shared storage and internal transfers without changing the internet connection.',
  },
  {
    question: 'Can you work in an occupied office or warehouse?',
    answer: 'Yes, subject to a suitable work and access plan. Let us know about operating hours, production areas, tenants and systems that cannot be interrupted. We can discuss staged installation and cutover windows. Any required outage and access arrangements should be agreed before work starts; a disruption-free change cannot always be promised.',
  },
  {
    question: 'Can you tidy our cabinet and trace unlabelled cables?',
    answer: 'Yes. We can investigate existing connections, label outlets and patch panels, and plan a cabinet tidy-up or replacement. We identify what is connected before moving or disconnecting it. Clear patching, sensible cable management and useful records make future fault-finding and changes easier.',
  },
  {
    question: 'What is the difference between testing and cable certification?',
    answer: 'Basic verification checks things such as wiremap and continuity. Qualification assesses support for a particular application or speed. Certification tests an installed link against the relevant cabling standard and produces recorded results. We agree the required test level and reports in the project scope; a working internet speed test is not cable certification.',
  },
  {
    question: 'How much does commercial data cabling cost?',
    answer: 'Cost depends on outlet count, run lengths, cable type, access, cabinet work, testing and any fibre or civil works. A clear new-build route differs from a high-roof warehouse or a finished office. Send your floor plan, equipment locations and deadline so we can quote the actual scope rather than an unrealistic universal price per point.',
  },
  {
    question: 'What should I prepare before asking for a cabling quote?',
    answer: 'A floor plan or photos, the site address, proposed desk and equipment locations, existing cabinet details and your move-in or completion date are useful. Mention cameras, access points, phones, server speeds and likely expansion. Also tell us about access restrictions and whether your IT provider or builder has a cabling specification.',
  },
  {
    question: 'Do you work with our IT team, electrician or builder?',
    answer: 'Yes. We can coordinate cabling routes, outlet schedules, cabinet requirements and cutover plans with the other people working on your site. Clear responsibilities matter: structured cabling, electrical power, switching, firewall configuration and internet service are related jobs, but they are not interchangeable or automatically included in one quote.',
  },
];
