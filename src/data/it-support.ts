export const paulApproval = { number: '26-136741', expires: '2031-02-12' };
const approvalExpiry = new Intl.DateTimeFormat('en-NZ', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(paulApproval.expires));

interface Credential {
  name: string;
  category: string;
  record: string;
  benefit: string;
  identifier?: { '@type': 'PropertyValue'; name: string; value: string };
  expires?: string;
  recognizedBy?: { '@type': 'Organization' | 'GovernmentOrganization'; name: string };
}

export const paulCredentials: Credential[] = [
  {
    name: 'PSPLA Certificate of Approval',
    category: 'Certificate of Approval',
    record: `Certificate ${paulApproval.number}. Expires ${approvalExpiry}.`,
    benefit: 'Personal approval from the Private Security Personnel Licensing Authority, relevant when technology work overlaps with regulated private-security work. Separate from the company licence; not a cybersecurity certification.',
    identifier: { '@type': 'PropertyValue', name: 'Certificate of Approval number', value: paulApproval.number },
    expires: paulApproval.expires,
    recognizedBy: { '@type': 'GovernmentOrganization', name: 'Private Security Personnel Licensing Authority' },
  },
  {
    name: 'Legrand Certified Network Installer',
    category: 'Certification',
    record: 'Achieved 2023.',
    benefit: 'Structured network installation knowledge that connects the physical cabling to the switches, servers and devices depending on it.',
    recognizedBy: { '@type': 'Organization', name: 'Legrand' },
  },
  {
    name: 'MikroTik Certified Network Associate (MTCNA)',
    category: 'Certification',
    record: 'Achieved 2018; listed as a historical certification.',
    benefit: 'A foundation in MikroTik networking, useful alongside hands-on experience diagnosing connectivity and configuring business network infrastructure.',
    recognizedBy: { '@type': 'Organization', name: 'MikroTik' },
  },
  {
    name: 'Ubiquiti Enterprise Wireless Admin (UEWA)',
    category: 'Certification',
    record: 'Achieved 2018.',
    benefit: 'Enterprise wireless training covering the planning, deployment and administration of wireless networks, rather than treating Wi-Fi as simply adding another access point.',
    recognizedBy: { '@type': 'Organization', name: 'Ubiquiti' },
  },
  {
    name: 'Ubiquiti Broadband Wireless Admin (UBWA)',
    category: 'Certification',
    record: 'Achieved 2018.',
    benefit: 'Broadband wireless knowledge relevant to outdoor connectivity, links between locations and the wider network serving a business.',
    recognizedBy: { '@type': 'Organization', name: 'Ubiquiti' },
  },
  {
    name: 'Master of Business Administration (MBA)',
    category: "Master's degree",
    record: 'Awarded 2010.',
    benefit: 'Business and management education that helps frame technical choices around cost, operational priorities, people and long-term value.',
  },
  {
    name: 'Postgraduate Diploma in Business (PgDipBus)',
    category: 'Postgraduate diploma',
    record: 'Awarded 2009.',
    benefit: 'Postgraduate business study supporting the connection between technology decisions and the organisation that has to live with them.',
  },
  {
    name: 'IBM AIX System Administration (AN12G)',
    category: 'Training',
    record: 'System administration training. Course AN12G.',
    benefit: 'Enterprise UNIX administration training, adding depth to a background in servers, users, storage, networking and system operations.',
    identifier: { '@type': 'PropertyValue', name: 'IBM course code', value: 'AN12G' },
    recognizedBy: { '@type': 'Organization', name: 'IBM' },
  },
];

export const itUseCases = [
  {
    title: 'A small business without an IT department',
    need: 'The owner has become the unofficial helpdesk. A printer problem, a new laptop or a missing account can interrupt the person who should be looking after customers.',
    approach: 'Bring the devices, network, support contacts and immediate priorities into a practical support plan. Start with the problems costing staff time, then work through the improvements that can wait.',
    benefit: 'A local technical contact and a clearer plan, without expecting the business owner to become a systems administrator.',
  },
  {
    title: 'Slow computers and recurring faults',
    need: 'A workstation takes too long to start, a shared application keeps disconnecting, or a repair seems to help for only a few days. Buying a new computer may not address the underlying fault.',
    approach: 'Investigate the device, software, storage and connections involved. Consider repair, an appropriate upgrade or replacement against the age of the equipment and the work it needs to do.',
    benefit: 'A reasoned fix and an explanation of the options, instead of replacing equipment on a guess.',
  },
  {
    title: 'More staff, a new office or another location',
    need: 'Growth introduces new devices, accounts, desk locations and access requirements. A move can expose gaps in cabling, Wi-Fi, internet capacity or the way files are shared.',
    approach: 'Plan equipment, permissions, connectivity and the cutover together. Coordinate with the builder, cabling team and application suppliers before the move-in date.',
    benefit: 'People can start with a workable setup, and the business has a clearer view of what needs to be ready before opening day.',
  },
  {
    title: 'Phones, Wi-Fi and applications failing together',
    need: 'Calls break up, a camera goes offline and staff blame the internet. Several symptoms can share a network cause, but they can also be separate faults that need careful isolation.',
    approach: 'Follow the path from the endpoint through the cabling, switching, wireless, router and service provider. Use the evidence to identify which system or supplier needs attention.',
    benefit: 'Support that can see beyond a single product and help coordinate the people responsible for each part.',
  },
  {
    title: 'An ageing server or an uncertain backup',
    need: 'A server is nearing replacement, shared storage is filling up, or nobody is confident that the last backup can actually be restored. A cloud move is being discussed without a clear recovery plan.',
    approach: 'Map the applications, data and dependencies. Compare an upgrade, replacement or suitable private-cloud deployment, including licensing, connectivity, backup and a tested way back if the change does not go to plan.',
    benefit: 'A decision based on the workload and recovery needs, not just the age of a box or the appeal of a cloud label.',
  },
  {
    title: 'An IT team that needs experienced local hands',
    need: 'Your own administrators or an overseas provider need someone at a Waikato site to inspect equipment, replace a component or help complete a controlled change.',
    approach: 'Agree the runbook, authorisation, access, communication and escalation process before the visit. Carry out the defined on-site work and report the outcome to the team managing the system.',
    benefit: 'Practical local assistance while your existing IT team retains control of its design and change process.',
  },
];

export const itSupportOptions = [
  { name: 'Remote support', fit: 'A reachable computer, configuration question or software issue that can be investigated remotely.', plan: 'We arrange the session with you and confirm permission before access. A failed internet connection or physical hardware fault may still need a visit.' },
  { name: 'On-site support and repairs', fit: 'Hands-on diagnosis, equipment replacement, network checks or a problem that needs someone in the building.', plan: 'Agree site access, affected equipment, disruption and any parts or follow-up work required.' },
  { name: 'Planned IT improvements', fit: 'New hardware, onboarding, a relocation, server work or a private-cloud migration.', plan: 'Define the scope, dependencies, testing, cutover, rollback and responsibilities before making the change.' },
  { name: 'Ongoing support', fit: 'A business that wants an agreed approach to maintenance, recurring issues and future upgrades.', plan: 'Confirm the systems covered, included work, response arrangements and costs. Monitoring, backups and after-hours work are not assumed to be included.' },
  { name: 'Remote hands for IT providers', fit: 'An internal administrator, MSP or international provider that needs authorised local assistance.', plan: 'Work to an agreed runbook and escalation process, with clear limits on access and changes.' },
];

// Visible FAQ answers and FAQPage JSON-LD share this source.
export const itFaqs = [
  {
    question: 'Do you provide business IT support in Hamilton and Waikato?',
    answer: 'Yes. Central Communications Ltd is based in Hamilton and provides IT support for businesses across Waikato. We help with computers, hardware, networks, servers, private-cloud planning and local on-site work. Remote support can also be suitable where access and the nature of the problem allow it.',
  },
  {
    question: 'Can you support a small business without its own IT staff?',
    answer: 'Yes. We can help a small business work through day-to-day faults, new equipment and planned improvements without expecting the owner to manage every technical detail. We start with the systems you rely on and agree the support scope, priorities and costs.',
  },
  {
    question: 'What makes Paul Willard experienced enough to handle complex IT?',
    answer: 'Paul has around three decades of telecommunications experience spanning systems administration, senior network engineering, network operations management and general management. His qualifications include an MBA, a postgraduate business diploma and technical training in networking, wireless and IBM AIX. He took over management of Central Communications in April 2022.',
  },
  {
    question: 'What qualifications does Paul hold?',
    answer: `Paul's record includes an MBA (2010), PgDipBus (2009), Legrand Certified Network Installer (2023), MTCNA (2018), UEWA (2018), UBWA (2018) and IBM AIX System Administration training (AN12G). His personal PSPLA Certificate of Approval is ${paulApproval.number}, expiring ${approvalExpiry}. Vendor achievements are dated records, not a blanket claim of current certification; AN12G is training, not a separate IBM professional certification.`,
  },
  {
    question: 'Is the PSPLA approval an IT or cybersecurity qualification?',
    answer: `No. PSPLA regulates specified private-security work. Paul's personal Certificate of Approval ${paulApproval.number} is separate from Central Communications' company licence and from his IT qualifications. Its relevance is where technology and security work overlap; it is not evidence of a cybersecurity certification or permission for every category of security work.`,
  },
  {
    question: 'Can you fix problems remotely?',
    answer: 'Often, if the device and internet connection are working well enough to connect. We use HelpWire for arranged remote support and explain the connection process. Only grant access for a session you have agreed with us. Some faults, including failed hardware or lost site connectivity, need on-site attention.',
  },
  {
    question: 'Do you repair computers and supply new hardware?',
    answer: 'Yes. We provide hardware advice, supply, custom builds and repairs for business computers and servers. We consider the workload, age, warranty and cost before recommending repair or replacement. Parts, software licences, data transfer and any specialist recovery work should be confirmed in the quote.',
  },
  {
    question: 'Can you work with our existing IT team or provider?',
    answer: 'Yes. We can provide local remote hands or help with a defined project while your internal administrators or existing provider retain responsibility for the wider system. We agree access, the work to be done, change approval and escalation before starting.',
  },
  {
    question: 'What does remote hands mean?',
    answer: 'Remote hands means a technician is physically at your site while the main IT team directs or coordinates the work from elsewhere. It can include equipment checks, cabling checks or an agreed component replacement. It is not unattended remote access, and it does not authorise unrestricted changes to your systems.',
  },
  {
    question: 'Do you offer ongoing or managed IT support?',
    answer: 'We can discuss an ongoing support arrangement around your business and the systems you want covered. Agree the inclusions, maintenance responsibilities, response arrangements and charges in writing. A support relationship does not automatically include every device, continuous monitoring, backups or unlimited after-hours work.',
  },
  {
    question: 'Can you help with servers, virtualisation and private cloud?',
    answer: 'Yes. Server infrastructure and private-cloud migration are part of our IT work. We assess the applications, storage, connectivity, licensing and recovery needs before recommending a design. Private cloud is an option, not a requirement, and it is not automatically cheaper or more secure than a well-managed alternative.',
  },
  {
    question: 'How do we decide whether to move a server to the cloud?',
    answer: 'Start with what the server does, who uses it, application support and the consequences of an outage. Compare hosting, internet dependence, performance, licensing, backup, recovery and ongoing administration costs. We can help scope those questions and plan a staged change with testing and a rollback option.',
  },
  {
    question: 'Can you help review backups and account security?',
    answer: 'We can help scope a review of backups, recovery, access permissions, updates and multi-factor authentication for supported systems. A successful backup job is not the same as a tested restore, and file synchronisation alone is not a complete recovery plan. Monitoring, retention and restore testing need named responsibilities and agreed coverage.',
  },
  {
    question: 'Can you diagnose slow Wi-Fi, dropped calls and network faults?',
    answer: 'Yes. Our work spans network engineering, wireless, cabling and phone systems, so we can investigate the connections between them. We establish which users and services are affected and follow the evidence through the device, local network and upstream services. A faster internet plan is not automatically the answer.',
  },
  {
    question: 'Can you help with an office move or new staff?',
    answer: 'Yes. We can plan the devices, accounts, permissions and network connections around a move or change in staff. Let us know the dates and application requirements early. We coordinate any required cabling, connectivity and supplier work, and agree what must be tested before people start using the new setup.',
  },
  {
    question: 'What should I do when an IT problem is urgent?',
    answer: 'Call Central Communications on 0800 848 0038 and explain what has stopped working, how many people are affected and whether there is a business-critical deadline. Our support page lists emergency contact arrangements. Response, on-site attendance and resolution depend on the issue and your support agreement; no universal fix time is promised.',
  },
  {
    question: 'How much does IT support cost?',
    answer: 'It depends on the investigation, equipment, access, travel and scope of work. We can discuss a specific repair, a planned project or an ongoing arrangement. Ask what is included and whether parts, licences, migration, after-hours work or third-party services will be charged separately.',
  },
  {
    question: 'What information should I send with a support request?',
    answer: 'Tell us what changed, when the problem started, the exact error message and which people or devices are affected. Include a callback number and suitable access times. A screenshot can help, but remove confidential information first. Do not send passwords, recovery codes or other secrets through the contact form.',
  },
];
