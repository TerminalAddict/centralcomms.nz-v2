// Business relationship and test provenance confirmed by Paul for this page.
export const backbone = {
  name: 'Net Enterprises Ltd',
  description: 'Paul Willard also owns Net Enterprises Ltd, which provides the internet backbone for CCL customer connections.',
};

export const customerSpeedtest = {
  downloadMbps: 4026.98,
  uploadMbps: 3895.66,
  pingMs: 3,
  network: backbone.name,
  server: 'Lightwire Limited, Hamilton',
  image: '/assets/images/broadband/customer-hyperfibre-speedtest.webp',
};

const speedFormat = new Intl.NumberFormat('en-NZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const speedtestMetrics = [
  { label: 'Download', value: speedFormat.format(customerSpeedtest.downloadMbps), unit: 'Mbps' },
  { label: 'Upload', value: speedFormat.format(customerSpeedtest.uploadMbps), unit: 'Mbps' },
  { label: 'Ping', value: String(customerSpeedtest.pingMs), unit: 'ms' },
];
export const speedtestSummary = `A customer Hyperfibre connection recorded ${speedtestMetrics[0].value} Mbps download, ${speedtestMetrics[1].value} Mbps upload and ${speedtestMetrics[2].value} ms ping in the supplied Speedtest result.`;

export const broadbandUseCases = [
  {
    title: 'An office that works in the cloud',
    need: 'Cloud accounting, shared documents, video meetings and backups all use the same connection. Busy periods can expose a plan or router that no longer fits the team.',
    approach: 'We review simultaneous use, upload demand and the local network, then match the fibre service and equipment to the workload.',
    benefit: 'Capacity planned around the working day, with one local team to investigate problems.',
  },
  {
    title: 'Retail and hospitality that need to keep trading',
    need: 'Payment terminals, online orders, booking systems, staff devices and guest Wi-Fi can compete for resources at the busiest time.',
    approach: 'Separate guest access from business systems and consider a tested backup connection for critical services, subject to terminal and application compatibility.',
    benefit: 'A clearer plan for everyday demand and for what happens when the primary connection is unavailable.',
  },
  {
    title: 'Large files moving in both directions',
    need: 'Design studios, engineering teams and media businesses may send large project files as often as they download them.',
    approach: 'Look at upload as well as download capacity. Where available, assess Hyperfibre alongside multi-gigabit routing, switching, cabling and capable workstations.',
    benefit: 'Fewer avoidable bottlenecks between your team, collaborators and cloud storage.',
  },
  {
    title: 'Phones and CCTV on the same connection',
    need: 'Business calls, remote camera viewing and normal internet activity need to coexist. Adding cameras or more extensions changes the demand.',
    approach: 'Coordinate the broadband, phone system, CCTV network and router settings. Allow for upload traffic and protect access to business and security devices.',
    benefit: 'Joined-up support for the services behind a symptom, instead of treating each system in isolation.',
  },
  {
    title: 'A move, a new site or a growing team',
    need: 'A new tenancy can involve a fibre installation, a different router location, extra data outlets and a phone-number transfer.',
    approach: 'Check address availability and premises access early, coordinate the connection and cabling, and agree the changeover sequence before the move.',
    benefit: 'Fewer last-minute surprises and a connection plan that fits the opening date.',
  },
  {
    title: 'Branches, remote staff and controlled access',
    need: 'Several sites or remote staff may need access to business systems, while a supplier may require a stable source address for an allowlist.',
    approach: 'Assess static IP options, secure remote access and the needs of each location. Keep identity checks and firewall permissions part of the design.',
    benefit: 'Connectivity planned around who needs access and which systems they should reach.',
  },
];

export const connectionSteps = [
  { name: 'Check the address and the work', detail: 'Tell us the premises address, whether fibre is already installed, staff numbers and the systems that matter. We check service availability and discuss capacity, equipment and support.' },
  { name: 'Agree the package and installation', detail: 'Confirm the monthly service, setup work, router, static IP or backup options, any term and the support scope. New installations may need landlord or shared-property permissions and access for the fibre installer.' },
  { name: 'Plan the changeover', detail: 'Coordinate dates, existing service details and any phone-number porting. Keep the old service in place until the transfer plan is agreed; a premature cancellation can complicate continuity.' },
  { name: 'Configure, test and hand over', detail: 'Configure the agreed equipment and test connectivity, business applications, calls and remote access as applicable. Document access and support arrangements, including any backup connection and its limitations.' },
];

export const broadbandFaqs = [
  {
    question: 'Do you provide business fibre broadband in Hamilton and Waikato?',
    answer: 'Yes. Central Communications Ltd provides business-grade UFB fibre packages with a local Hamilton support team, router configuration and ongoing support. We check availability at your exact address before recommending a package. Hyperfibre and other options depend on the location, network and equipment.',
  },
  {
    question: 'What is CCL\'s background in the ISP industry?',
    answer: `Paul Willard has around three decades of telecommunications experience, including systems administration, senior network engineering, network operations management and general management. ${backbone.description} That brings ISP operations experience alongside CCL's work on business networks, phones, CCTV and IT.`,
  },
  {
    question: 'Why does the customer Speedtest show Net Enterprises Ltd?',
    answer: `${backbone.description} The screenshot is from a customer Hyperfibre connection, so that network name is consistent with the service behind the connection. Lightwire Limited in Hamilton is the selected test server shown in the result, not a statement about CCL's backbone supplier.`,
  },
  {
    question: 'What is the difference between UFB and Hyperfibre?',
    answer: 'UFB is fibre broadband delivered over the local fibre access network. Hyperfibre offers multi-gigabit service options at eligible addresses. It is worth assessing for heavy shared demand or large transfers, but it also needs suitable routing, switching and end devices. Many businesses are well served by a lower-speed fibre package with a properly configured network.',
  },
  {
    question: 'Will my connection achieve the speed in your screenshot?',
    answer: `${speedtestSummary} It is one measurement, not a typical-speed claim or a guarantee for another customer. Results depend on the subscribed service, router, local network, device, destination, other traffic and test conditions. We assess the package and hardware for your site rather than promise that result.`,
  },
  {
    question: 'How do you choose the right broadband package?',
    answer: 'We consider the number of simultaneous users, cloud services, video meetings, phone calls, large uploads, backups and remote CCTV viewing. We also check the local network and plans for growth. A quote should distinguish the connection price from equipment, installation, static IP, backup connectivity and any additional management or support work.',
  },
  {
    question: 'Does business-grade broadband mean a dedicated connection or guaranteed repair time?',
    answer: 'Not automatically. A business UFB package is not the same thing as a dedicated leased line, and the business label alone does not specify a service-level agreement. Tell us about any required availability, response time or restoration commitment so we can check suitable services and agree those terms explicitly.',
  },
  {
    question: 'Can you supply and manage the router?',
    answer: 'Yes. We can supply, configure and manage suitable routers and associated network equipment. The agreed scope can cover secure administrative access, firmware maintenance, configuration backups and troubleshooting. Equipment, monitoring, maintenance and support inclusions are confirmed in your quote; they should not be assumed to be identical for every package.',
  },
  {
    question: 'Can I use my existing router?',
    answer: 'Possibly. We check compatibility, support status, routing and firewall performance, port speeds and management requirements. A router that works on one fibre package may become a bottleneck on a faster service. Reuse makes sense when the equipment is suitable and responsibility for its configuration and support is clear.',
  },
  {
    question: 'Do I need a static IP address?',
    answer: 'Not every business does. A static public IP can be useful for certain VPN designs, supplier allowlists and services that require a stable address. Many cloud applications work without one. Tell us the application and we can assess the requirement, availability and cost. A static IP does not itself make a connection faster or more secure.',
  },
  {
    question: 'Can you combine broadband with a business phone system?',
    answer: 'Yes. We can coordinate broadband with CCL business phone systems, including Cloud PBX and Linkus. We consider concurrent calls, the router and other traffic on the connection. Phone subscriptions, calling charges and any number porting are agreed as part of the proposal. Keep existing services active until the changeover plan is confirmed.',
  },
  {
    question: 'How does CCTV affect my internet connection?',
    answer: 'Remote viewing and cloud-based recording or backups can use upload capacity. Cameras recording to a local recorder do not necessarily send every recording over the internet, but remote access still needs planning. We assess the camera system and viewing patterns, separate access appropriately and avoid treating exposed camera or recorder administration as the default remote-access method.',
  },
  {
    question: 'Will faster fibre fix poor Wi-Fi?',
    answer: 'Not necessarily. Coverage, interference, access-point capacity, cabling and device limitations can restrict performance even when the fibre connection is healthy. We can check the wired connection and the wireless network separately, then recommend the change that addresses the actual bottleneck.',
  },
  {
    question: 'Do you provide 24/7 emergency broadband support?',
    answer: 'Yes. CCL provides 24/7 emergency support. Call 0800 848 0038 for an urgent service problem; use our support form for routine requests. Emergency support availability is not a promise of instant restoration, a particular repair deadline or free on-site attendance. Response arrangements, charges and any service-level commitments are agreed for your service.',
  },
  {
    question: 'Can you help move our broadband to new premises?',
    answer: 'Yes. Give us the new address and intended move date as early as possible. We check fibre availability, the existing fibre box, equipment location, cabling and access arrangements. A new installation or permissions process can take longer than a change to an already-connected site. We coordinate broadband and any related phone changes around an agreed plan.',
  },
  {
    question: 'How long does a new fibre installation take?',
    answer: 'It depends on address availability, existing infrastructure, installer scheduling, site access and any required permissions or construction. We confirm the expected process for your property rather than publish a universal completion time. Do not rely on a proposed installation date as a guarantee until the relevant arrangements are confirmed.',
  },
  {
    question: 'Can we have a backup connection if fibre goes down?',
    answer: 'We can assess a secondary connection and a router capable of failover. Suitability depends on coverage, capacity, data allowances, costs and the applications that must keep working. We test the agreed services on the backup path; a changed public IP or interrupted session can affect calls, VPNs and remote access. Two services are not necessarily physically independent.',
  },
  {
    question: 'Will fibre broadband keep working in a power cut?',
    answer: 'The fibre box, router and relevant switches, access points and devices need power. A correctly sized UPS can keep selected equipment running for a limited period, but it cannot guarantee the upstream network or every service will remain available. Plan power protection, backup connectivity and an independent way to make emergency calls around the business\'s needs.',
  },
  {
    question: 'Can you connect several sites or support remote staff?',
    answer: 'Yes. We can plan connectivity for multiple locations and secure access for remote staff. The design depends on the applications, identity controls, permissions and availability requirements. A static IP is useful for some designs, but it is not a substitute for authentication, supported equipment or a carefully configured firewall.',
  },
  {
    question: 'What do you need to quote for business broadband?',
    answer: 'Send your premises address, approximate staff numbers, current service details, required start date and the applications you depend on. Mention phone systems, CCTV, large uploads, static IP requirements and any backup or after-hours needs. We can then check availability and explain the connection, setup, equipment and support costs together.',
  },
];
