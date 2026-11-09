// Company licence from the displayed 2026 certificate, not the individual's licence.
export const cctvCredentials = { companyLicence: '26-136711', nzbn: '9429050077809' };

export const cctvUseCases = [
  {
    title: 'Retail and customer-facing businesses',
    need: 'An incident at the counter or a disputed collection needs more than a vague description.',
    approach: 'Plan views of entrances, service areas and stock movement, with appropriate privacy boundaries. Give authorised managers a practical way to find and export a relevant clip.',
    benefit: 'A clearer record for reviewing incidents and resolving questions.',
  },
  {
    title: 'Schools and multi-building campuses',
    need: 'Several buildings, different staff responsibilities and busy arrival times make coverage and access important.',
    approach: 'Design coverage around agreed security purposes, then organise cameras and permissions by responsibility. Consider retention, signage and how an authorised person will respond to a request for footage.',
    benefit: 'Useful oversight without giving every user access to every camera.',
  },
  {
    title: 'Industrial sites and cold storage',
    need: 'A camera that works in an office may be unsuitable for a freezer, dusty workshop or exposed process area.',
    approach: 'Specify cameras, cabling, mounts and enclosures for the actual environment. Test the view under working conditions, including lighting, temperature and the activity you need to observe.',
    benefit: 'Equipment selected for the job, not just the advertised resolution.',
  },
  {
    title: 'Warehouses, yards and logistics',
    need: 'Goods pass through gates, loading bays and storage areas, often across several camera views.',
    approach: 'Plan overlapping coverage of agreed movements and make timestamps, camera names and playback easy to follow. Assess night lighting and vehicle detail at the real distances involved.',
    benefit: 'Less guesswork when tracing a delivery or investigating damage.',
  },
  {
    title: 'Branches and multi-site organisations',
    need: 'Managers need visibility across locations without a collection of unrelated logins and undocumented recorders.',
    approach: 'Assess a VMS such as Nx Witness, with site-specific access, suitable connectivity and a recording plan for each location. Agree who maintains servers, backups and user accounts.',
    benefit: 'A more consistent viewing and support workflow as the organisation grows.',
  },
  {
    title: 'Homes, rural properties and small offices',
    need: 'You want a useful view of arrivals, entrances or outbuildings without an unnecessarily complicated system.',
    approach: 'Match a recorder or VMS to the property, with sensible camera placement and secure remote access. Check connectivity to detached buildings and where footage will be stored.',
    benefit: 'A system sized to your needs, with someone local to call for help.',
  },
];

export const nxFeatures = [
  { feature: 'Motion search, playback and bookmarks', benefit: 'Narrow an investigation to a time, camera or area of movement, and mark important moments for follow-up.', check: 'Motion and metadata must be available and configured. Demonstrate the search on your actual cameras.' },
  { feature: 'Supported cameras from different manufacturers', benefit: 'Keep suitable equipment and choose new cameras around the job instead of assuming every camera must be replaced.', check: 'Verify model, firmware, codecs, audio, events and PTZ support. An ONVIF label is not a promise of every feature.' },
  { feature: 'Desktop, mobile and browser access', benefit: 'Let authorised staff review video from an appropriate device rather than returning to a recorder screen.', check: 'Confirm client functions, permissions, network access and the security of remote connections.' },
  { feature: 'User permissions and video export', benefit: 'Give people the access they need and a defined route for sharing relevant footage.', check: 'Agree who may view, administer or export, and how exported footage will be handled.' },
  { feature: 'Multi-server design and camera failover', benefit: 'Plan for growth and allow another suitably configured server to take over camera recording after a server failure.', check: 'Failover needs another server, spare capacity and camera connectivity. It is not a backup of every recording or a zero-downtime guarantee.' },
  { feature: 'Recording and storage management', benefit: 'Match recording schedules and storage to the footage the business needs to retain.', check: 'Budget for real bitrates, usable disk capacity, retention and storage faults. Confirm results after commissioning.' },
  { feature: 'APIs, events and analytics integrations', benefit: 'Connect supported video events and business workflows instead of treating CCTV as an isolated screen.', check: 'Integration, analytics and licensing depend on the devices, software edition and additional products involved.' },
];

export const cctvFaqs = [
  {
    question: 'Are you PSPLA licensed CCTV installers in Hamilton?',
    answer: `Yes. Central Communications Ltd holds PSPLA company licence ${cctvCredentials.companyLicence}, covering Security Consultant and Security Technician work. Our NZBN is ${cctvCredentials.nzbn}. We supply, install and maintain CCTV systems in Hamilton and across the Waikato. The company licence certificate is available on this page.`,
  },
  {
    question: 'Do you install CCTV for homes as well as businesses?',
    answer: 'Yes. We work with homes, shops, offices, schools, warehouses, industrial sites and multi-site organisations. The design starts with what you need to see, the environment and who should have access. A small property may need a straightforward recorder; a larger site may benefit from a video management system such as Nx Witness.',
  },
  {
    question: 'How much does a CCTV installation cost?',
    answer: 'The price depends on camera positions and types, cable routes, network work, recording capacity, software licensing, access requirements and ongoing support. We scope those items together rather than quoting on camera count alone. Tell us about your site, any existing equipment and what you need the footage to help you understand.',
  },
  {
    question: 'What is the difference between an NVR and a VMS?',
    answer: 'An NVR is a network video recorder, commonly supplied as a dedicated appliance. A VMS is video management software that manages cameras, recording, playback and users on suitable server hardware. Their functions overlap. We choose between them based on your camera requirements, investigation workflow, integrations, growth and support needs.',
  },
  {
    question: 'Why do you recommend Nx Witness?',
    answer: 'Nx Witness is worth considering when you need supported cameras from different manufacturers, practical search and playback, remote access and room to expand. We assess it around the people who will use the footage, not just its feature list. A simpler recorder may still be the right choice for a small installation.',
  },
  {
    question: 'Can Nx Witness use our existing cameras?',
    answer: 'Often, but we check each model and firmware version before recommending reuse. Video streaming, motion events, audio and PTZ control may have different levels of support. We test the required functions and assess whether the camera still produces useful images at the distance and lighting conditions of your site.',
  },
  {
    question: 'Is Nx Witness free or open source?',
    answer: 'Nx Witness is a commercially licensed video management system, not a free open-source NVR. Its desktop client is open source, and the platform offers APIs and development tools. Licensing options and included features vary by edition and region. We confirm the applicable recording licences or subscription services in your quote.',
  },
  {
    question: 'Can I view CCTV on my phone or from another site?',
    answer: 'Yes, with a compatible system, suitable connectivity and authorised access. Nx Witness offers mobile, desktop and browser clients. We configure access around your users and responsibilities, and test the connection from the locations that matter. Remote viewing still depends on the relevant internet connection, server availability and permissions.',
  },
  {
    question: 'How long will my CCTV recordings be kept?',
    answer: 'Retention depends on usable storage, camera bitrates, recording schedules and system settings. We plan a retention period around your purpose and requirements, then check actual performance after installation. More megapixels do not automatically mean more useful evidence, and a disk size on its own does not establish a reliable number of recording days.',
  },
  {
    question: 'Will CCTV keep recording if the internet goes down?',
    answer: 'A locally recording system can continue while its cameras, local network, power and recorder remain available. Remote viewing may stop until connectivity returns. Cloud-dependent services have different requirements. We identify those dependencies and discuss backup power, connectivity and recording arrangements during the design.',
  },
  {
    question: 'Does Nx Witness failover protect all of my footage?',
    answer: 'No. Camera failover can move recording to another configured server when the original server becomes unavailable, provided the second server has capacity and can reach the cameras. It does not automatically duplicate the entire existing archive or protect against every network, power or storage failure. Archive backup and recovery need a separate plan.',
  },
  {
    question: 'What is SADPTools and how does it help with CCTV?',
    answer: 'SADPTools is a free, independent desktop toolkit created by Paul Willard for CCTV discovery, supported device configuration and site documentation. It helps a technician identify equipment, investigate connectivity and keep installation records together. It is not an official Hikvision application, and discovery, configuration and diagnostic support vary by device, firmware and network access.',
  },
  {
    question: 'What does NX Camera Info do?',
    answer: 'NX Camera Info reads saved camera and system information from a supported Nx Witness database or backup. Free mode lets you browse a local camera inventory. Pro adds supported stored camera credential recovery, exports and wider system reports, plus authorised server and Nx Cloud backup connections. It describes a saved snapshot, not live camera health.',
  },
  {
    question: 'Can these tools recover a lost camera password or missing video?',
    answer: 'NX Camera Info Pro can reveal supported camera credentials that are present in an authorised backup, but saved passwords may be old or missing. It does not recover Nx user account passwords or recorded video. SADPTools offers supported, authorised recovery workflows for compatible devices. Neither tool bypasses permissions or guarantees access to every camera.',
  },
  {
    question: 'Can you maintain or upgrade an existing CCTV installation?',
    answer: 'Yes. We can assess camera views, cabling, network connectivity, recording, storage, permissions and the available documentation. We identify what can be retained and what needs attention before proposing an upgrade. Where a supported Nx backup is available, NX Camera Info can assist with inventory and handover, alongside checks on the actual system.',
  },
  {
    question: 'What should a business consider about CCTV privacy?',
    answer: 'Define a clear purpose, choose appropriate views, tell people about recording and restrict who can access footage. Retention and any audio recording need particular care; audio should not be enabled simply because a camera supports it. We can help with technical settings, while your organisation remains responsible for its privacy obligations and policies.',
  },
];
