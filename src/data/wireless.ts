import { paulCredentials } from './it-support';

const networkingProviders = new Set(['Legrand', 'MikroTik', 'Ubiquiti']);
export const wirelessCredentials = paulCredentials.filter(({ recognizedBy }) => networkingProviders.has(recognizedBy?.name ?? ''));
const trainingSummary = wirelessCredentials.map(({ name, record }) => `${name}: ${record}`).join(' ');

export const wirelessUseCases = [
  {
    title: 'Busy offices and meeting rooms',
    need: 'Video meetings stall when a room fills up. Staff move between desks with laptops and softphones, and the connection needs to keep up with the working day.',
    approach: 'Plan for simultaneous users, application needs and movement between access points. Check the wired network and internet connection as well as the wireless coverage.',
    benefit: 'A network designed around people and their applications, not just a signal at an empty desk.',
  },
  {
    title: 'Retail, hospitality and showrooms',
    need: 'Customers want guest Wi-Fi while staff rely on stock systems, tablets and payment services. These groups should not all have the same access to business systems.',
    approach: 'Design appropriate staff, guest and device networks, with firewall rules and testing of the required applications. Confirm payment-terminal requirements with the payment provider.',
    benefit: 'Useful guest connectivity with clearer separation from the systems running the business.',
  },
  {
    title: 'Warehouses and workshops',
    need: 'Scanners lose their connection between aisles, or coverage changes when shelves fill up. Metal racks, machinery and building materials make an office-style layout a poor starting point.',
    approach: 'Survey the actual working environment, check mounting options and test the devices along their normal routes. Account for stock, doors and planned changes to the floor layout.',
    benefit: 'Coverage planning that reflects where people work and how their equipment moves.',
  },
  {
    title: 'Another building across the property',
    need: 'An office, workshop or farm building needs connectivity, but a cable route is expensive, disruptive or difficult to obtain.',
    approach: 'Assess a directional point-to-point link against fibre or another connection. Check the path, mounting, power and required capacity, then provide suitable networking inside the destination building.',
    benefit: 'A practical way to connect a separate building where the site and radio conditions support it.',
  },
  {
    title: 'Accommodation and shared premises',
    need: 'Guests expect coverage beyond reception, while the operator needs to keep office systems separate. Building layouts and busy periods make a single router inadequate.',
    approach: 'Plan the rooms, common areas and backhaul together. Agree access policies, guest isolation where appropriate and a support process for connection problems.',
    benefit: 'A more manageable service for visitors, with less dependence on improvised extenders.',
  },
  {
    title: 'Growing and multi-site organisations',
    need: 'Each branch has accumulated different equipment, passwords and settings. It is hard to tell what is installed or who is responsible when something fails.',
    approach: 'Develop consistent network policies, documentation and management access while allowing for each site\'s layout, devices and connectivity. Coordinate with the internal IT team.',
    benefit: 'Clearer ownership, repeatable changes and a network that is easier to support as the organisation grows.',
  },
];

export const surveySteps = [
  { name: 'Understand the work', detail: 'Discuss users, devices, applications, busy periods and the places where a connection matters. Collect floor plans, existing network details and the symptoms people are seeing.' },
  { name: 'Assess the site', detail: 'Inspect layout, construction, mounting positions, cable routes and power. Review the radio environment and measure coverage in the agreed areas, with attention to the devices that will actually use the network.' },
  { name: 'Develop the design', detail: 'Recommend access-point locations, backhaul, switching, power requirements and network policies. Agree coverage and capacity objectives, exclusions and the evidence needed to assess the finished installation.' },
  { name: 'Validate and hand over', detail: 'After installation, check the agreed areas, application behaviour and movement between access points. Document the configuration, remaining limitations and how support or future changes will be handled.' },
];

export const wirelessFaults = [
  { symptom: 'Good signal, poor performance', investigation: 'Check busy radio channels, competing traffic and the number of active users, then compare the wired uplink, internet and application performance. Signal bars alone cannot identify the bottleneck.' },
  { symptom: 'Calls drop when people move', investigation: 'Check access-point placement, overlapping coverage, authentication and the actual handset or laptop. Roaming is a client decision; supported network features can assist it, but must be tested with your devices.' },
  { symptom: 'Only one area or device struggles', investigation: 'Compare affected and unaffected devices, obstacles, drivers and connection history. Establish whether the issue follows a device, a location, an access point or an application.' },
  { symptom: 'The whole site disconnects', investigation: 'Investigate power, switching, addressing, authentication and upstream connectivity. A Wi-Fi symptom can originate elsewhere in the network.' },
];

export const connectionOptions = [
  { name: 'Wired access points', fit: 'Usually the preferred foundation when cabling is practical.', detail: 'Ethernet connects each access point back to the network, keeping its uplink off the shared wireless path. Check switch capacity, PoE requirements and the cable route.' },
  { name: 'Wireless mesh', fit: 'An option where running a cable to an access point is impractical.', detail: 'The access point needs a usable wireless uplink, not just a location inside a dead spot. Extra hops and competing radio traffic can reduce available capacity.' },
  { name: 'Point-to-point bridge', fit: 'A directional connection between two fixed locations.', detail: 'Dedicated radios carry traffic between buildings. The destination still needs appropriate switches, cabling or access points for its users; the bridge is not automatically indoor Wi-Fi coverage.' },
];

// The visible questions and FAQPage metadata use the same answers.
export const wirelessFaqs = [
  {
    question: 'What is enterprise Wi-Fi, and how is it different from a basic router?',
    answer: 'Enterprise Wi-Fi is a planned, manageable wireless network for the people, devices and applications in a business. It can include multiple access points, coordinated configuration, separate access policies and ongoing management. The difference is the design and support around the equipment, not simply a faster router or the word enterprise on a product box.',
  },
  {
    question: 'Is enterprise Wi-Fi only for large organisations?',
    answer: 'No. A small office, shop or workshop may need managed Wi-Fi if coverage, guest access or reliable working connections matter. We size the design around the site and its requirements. A modest business does not need a large campus system just to get useful management and properly planned coverage.',
  },
  {
    question: 'Do you install and manage business Wi-Fi in Hamilton and Waikato?',
    answer: 'Yes. Central Communications Ltd provides enterprise Wi-Fi surveys, design, installation, troubleshooting and management for Hamilton and Waikato businesses. We also assess point-to-point links and coverage for separate buildings. Site access, survey scope and any ongoing support arrangements are agreed for the job.',
  },
  {
    question: 'What does a full wireless site survey involve?',
    answer: 'We agree the areas, applications and devices to assess, then review the building, current network, radio environment, coverage and installation options. The findings inform access-point placement, capacity, cabling and configuration. Agree whether the job includes pre-installation design, investigation of an existing network, post-installation validation or a combination. A floor-plan prediction alone is not an on-site measurement.',
  },
  {
    question: 'Why is my Wi-Fi slow when the signal bars look good?',
    answer: 'Signal strength is only part of the connection. Channel congestion, interference, client limitations, a busy access point, a wired uplink or the internet service can all affect performance. We compare where and when the problem happens and test the network path before recommending extra access points or a faster broadband plan.',
  },
  {
    question: 'How many access points do we need?',
    answer: 'There is no reliable answer based only on floor area. Walls, floors, metal shelving, mounting positions, device capabilities and the number of simultaneous users all matter. A survey and capacity plan help determine placement and quantity. Adding too many access points without a channel and power plan can create more contention.',
  },
  {
    question: 'Can staff move around while using Wi-Fi calls or a softphone?',
    answer: 'We can design and test for mobile use, including compatible voice applications. The device ultimately chooses when to roam between access points. Coverage overlap, authentication and supported roaming features affect the result, so we test with the actual phones or laptops and agree requirements rather than promise that every device will roam without interruption.',
  },
  {
    question: 'Can you separate guest Wi-Fi from staff, cameras and business devices?',
    answer: 'Yes. We can design separate networks and access policies for the groups that need them. This normally involves the access points, switching, router or firewall together. A different Wi-Fi name alone is not isolation: we check which systems each group can reach and allow required services, such as approved printers, deliberately.',
  },
  {
    question: 'Should we upgrade to Wi-Fi 6, 6E or 7?',
    answer: 'Choose around your devices, workload and expected equipment life, not just the newest label. Newer features need compatible clients and suitable network infrastructure. Wi-Fi 6E and supported Wi-Fi 7 equipment can use 6 GHz, subject to New Zealand operating conditions. A new access point does not remove physical obstructions, poor placement or an undersized uplink.',
  },
  {
    question: 'Is wireless mesh as good as cabling each access point?',
    answer: 'A wired uplink is generally preferable where a suitable cable route is available. Mesh is useful where cabling is impractical, but its wireless uplink needs good conditions and shares radio resources. Multiple hops can reduce capacity. We assess the trade-off instead of assuming an extender placed in a dead spot will fix it.',
  },
  {
    question: 'Can you extend connectivity to a shed, workshop or separate office?',
    answer: 'Often. We compare a cable or fibre route with a suitable wireless link and the requirements at the other building. A radio link needs an appropriate path, mounting, power and capacity. The receiving building then needs its own local network equipment to distribute that connection to users and devices.',
  },
  {
    question: 'How far can a point-to-point wireless link reach?',
    answer: 'Distance alone does not establish whether a link will work. Terrain, obstructions, clearance around the radio path, frequency, antenna choice, interference and required throughput all matter. We assess the actual path and design margin before quoting a solution; there is no single distance or speed we can promise for every property.',
  },
  {
    question: 'Will a wireless link work through trees or without line of sight?',
    answer: 'Trees and buildings can obstruct a link, and clearance around the direct path also matters. Seeing the other antenna is a useful start, not a complete link assessment. We consider foliage, seasonal growth and mounting options, and may recommend another route or a wired alternative when the path is unsuitable.',
  },
  {
    question: 'Can you work with our existing equipment or IT provider?',
    answer: 'Yes. We assess the installed equipment, support status, management access and requirements before proposing reuse or replacement. Our wireless work includes UniFi, MikroTik and Grandstream equipment. Where another IT team manages the network, we agree configuration ownership, access and change approval with them.',
  },
  {
    question: 'What wireless and networking qualifications does Paul have?',
    answer: `Paul's training record includes ${trainingSummary} His career spans systems administration, network engineering, ISP operations and general management. The dates record his achievements; vendor renewal status should be confirmed separately where a procurement requirement calls for current certification.`,
  },
  {
    question: 'Do business Wi-Fi and outdoor radio links need a New Zealand radio licence?',
    answer: 'Many installations can operate under an applicable General User Radio Licence without a licence in the customer\'s name, provided the equipment and operation meet all its conditions. Other designs may need separate licensing. We check the proposed installation against current Radio Spectrum Management requirements. Vendor training is not an RSM radio-engineer approval or permission to exceed frequency and power limits.',
  },
  {
    question: 'What does ongoing Wi-Fi monitoring and management include?',
    answer: 'An agreed service can cover equipment availability, supported alerts, capacity trends, configuration backups, firmware planning and authorised changes. We confirm the systems covered, access, alert handling, reporting and response arrangements. Remote visibility does not itself mean a person is watching continuously or that a 24-hour response service is included.',
  },
  {
    question: 'Can you also manage servers and cloud services?',
    answer: 'Yes. Our broader IT work includes remote server management, cloud email services, private-cloud projects and backup planning. We agree the systems, permissions, maintenance and recovery responsibilities for each service. A Wi-Fi management agreement does not automatically include server hosting, software subscriptions or backup storage.',
  },
  {
    question: 'How much does a business Wi-Fi installation cost?',
    answer: 'The scope depends on the site, user and device numbers, access-point locations, cable routes, switching, power, any outdoor link and the management required. A survey helps establish those needs. Ask for the survey, equipment, installation, configuration, validation and ongoing service charges to be identified in the proposal.',
  },
  {
    question: 'What should we send when asking for a survey or help with coverage?',
    answer: 'Send the site address, a floor plan if available, affected areas, approximate user and device numbers, key applications and the times problems occur. Let us know about other buildings, existing equipment, your IT provider and access restrictions. Do not include passwords or other secrets in the enquiry; we arrange any necessary access separately.',
  },
];
