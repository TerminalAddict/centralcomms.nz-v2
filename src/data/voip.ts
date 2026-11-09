export const voipFaqs = [
  {
    question: 'What is VoIP, and what does a PBX do?',
    answer: 'VoIP carries phone calls over an internet or IP network. A PBX is the phone system that manages extensions, transfers, opening hours, queues and voicemail. A SIP trunk connects that system to ordinary phone numbers. Central Communications supplies and supports cloud and onsite business phone systems in Hamilton and the Waikato.',
  },
  {
    question: 'Can we keep our existing business phone number?',
    answer: 'In many cases, yes, through number porting. We need to check your numbers, current provider and any services bundled with the line before confirming a move. Keep your existing service active until the port is completed; cancelling it early can put your number at risk.',
  },
  {
    question: 'Is a cloud PBX better than an onsite phone system?',
    answer: 'A Cloud PBX subscription is our starting point for most businesses: it connects staff across locations without an onsite PBX appliance to maintain. We consider onsite systems for very large organisations, particularly those with more than 200 extensions, or specific multi-site and redundancy requirements. The right choice depends on your infrastructure, connectivity and recovery plan, not extension count alone.',
  },
  {
    question: 'What makes Yeastar a good choice for a small business?',
    answer: 'A Yeastar Cloud PBX subscription brings desk phones and mobile staff onto one phone system without an onsite PBX appliance to maintain. With Central Communications, Linkus is included at no extra app charge. We match the subscription, call capacity and call handling to your team, with local setup, training and support.',
  },
  {
    question: 'Can Linkus use our business number on a mobile phone?',
    answer: 'Yes. Linkus connects your mobile to your Yeastar extension, so calls placed through the app can use your configured business caller ID instead of your personal mobile number. That depends on the PBX configuration and what the SIP provider permits. Calls made through the normal mobile dialler are separate.',
  },
  {
    question: 'Does Linkus work on computers as well as phones?',
    answer: 'Linkus has mobile clients for iOS and Android, desktop clients for Windows and macOS, and a browser client for P-Series. You need an account on a compatible Yeastar PBX, a suitable connection and microphone permissions. Available functions depend on the PBX series, client version and subscription.',
  },
  {
    question: 'Is the Linkus app free to use?',
    answer: 'Yes. With a Central Communications (CCL) Cloud PBX subscription, Linkus is free to use, with no extra app charges from CCL. You can use it as your business extension on compatible mobiles and computers. Your usual Cloud PBX subscription, calling plan and any internet or mobile data charges still apply.',
  },
  {
    question: 'Can we keep our existing desk phones?',
    answer: 'Possibly. We check the exact make, model, firmware and provisioning support. Supported SIP phones from brands such as Yealink and Fanvil may be reusable. Older proprietary handsets are not automatically compatible, and analogue devices may need a suitable gateway or replacement.',
  },
  {
    question: 'How much does a business VoIP system cost?',
    answer: 'The total depends on extensions, simultaneous calls, deployment, handsets or headsets, number porting, integrations, installation and ongoing support. Compare the setup cost and recurring total, including calling charges and subscriptions. Send us your current bill, staff count and busiest calling periods so we can scope a useful comparison.',
  },
  {
    question: 'Will VoIP work with our rural broadband or WiFi?',
    answer: 'It may, but speed alone does not establish call quality. Latency, jitter, packet loss, coverage and competing traffic all matter. We assess the connection and local network, including busy periods. Wired desk phones and well-designed WiFi can help; mobile coverage and a backup connection also need checking.',
  },
  {
    question: 'What happens if the internet or power fails?',
    answer: 'Office phones need working power and connectivity to reach a hosted PBX. A configured cloud service may still route calls to another site or to Linkus over mobile data, provided those paths are available. An onsite PBX has its own power and connectivity dependencies. We discuss backup power, alternative internet and provider-level diversion before migration.',
  },
  {
    question: 'Can Yeastar connect to our CRM?',
    answer: 'Yeastar offers integrations for platforms including HubSpot, Salesforce and Zoho. Depending on the connector, features can include caller lookup, click-to-call and call logging. We check your CRM edition, the Yeastar plan, permissions and supported functions before including an integration in the scope.',
  },
  {
    question: 'Can you support several branches and people working from home?',
    answer: 'Yes. Central Communications can design a phone system around desk-based staff, remote workers and multiple offices. We map which numbers should ring which teams, how transfers work and what happens after hours. A shared phone system still needs suitable connectivity and permissions at each location.',
  },
  {
    question: 'Who installs and supports the phone system in Hamilton?',
    answer: 'Central Communications Ltd supplies, installs and supports VoIP and PBX systems from Hamilton, serving Waikato businesses. We can also address the cabling, WiFi and broadband that your phones depend on. Contact us through the support page to discuss a new system, an upgrade or support for an existing installation.',
  },
];

export const voipUseCases = [
  { title: 'Veterinary practices and rural teams', problem: 'Reception is busy while staff move between rooms or work away from the clinic.', solution: 'Plan reception queues, extension transfers and a clear after-hours destination. Linkus can keep mobile staff connected when suitable coverage is available.', benefit: 'A clearer route from the caller to the right person.' },
  { title: 'Vehicle dealerships and workshops', problem: 'Sales, parts and servicing share a number, but customers need different teams.', solution: 'Give each department an appropriate call route, let reception see availability, and provide a queue or voicemail destination when the team is busy.', benefit: 'Less time transferring customers between departments.' },
  { title: 'Trades and field service businesses', problem: 'The owner is on a job while enquiries arrive at the office.', solution: 'Use the business extension through Linkus and agree who covers unanswered calls. Keep a defined business-hours policy as the team grows.', benefit: 'Business calls stay connected to the business, including when staff are offsite.' },
  { title: 'Professional offices and hybrid teams', problem: 'Staff alternate between home and the office, making a desk-only extension restrictive.', solution: 'Combine computer or mobile calling with presence and attended transfers. Reception can check availability before introducing a caller.', benefit: 'A more consistent customer experience across working locations.' },
  { title: 'Retail, warehouses and branches', problem: 'A customer calls one location, but the colleague who can help is at another.', solution: 'Plan shared extension dialling, branch-specific opening hours and group coverage. Check handsets, headsets and WiFi against the working environment.', benefit: 'Branches can cooperate without asking customers to redial another number.' },
  { title: 'Busy service desks', problem: 'Several calls arrive together and the team cannot see where callers are waiting.', solution: 'Use queues and, where the selected plan supports them, supervisor views, reports and callback options. Agree what counts as an unanswered enquiry.', benefit: 'Better evidence for staffing decisions and customer follow-up.' },
];

export const yeastarFeatures = [
  { feature: 'Menus, ring groups and opening hours', benefit: 'Route sales, service and after-hours calls deliberately, instead of relying on whoever hears a phone first.', check: 'Map the call flow, holiday schedule and unanswered-call destination.' },
  { feature: 'Queues and call reporting', benefit: 'Manage busy periods and identify when customers are waiting or giving up.', check: 'Basic queues and advanced reporting are different requirements. Confirm the plan for callback, wallboards and supervisor tools.' },
  { feature: 'Linkus and presence', benefit: 'Give staff a business extension on compatible devices and a way to show availability.', check: 'Check client support, remote access, notification permissions and mobile coverage.' },
  { feature: 'Supported SIP phones and provisioning', benefit: 'Choose appropriate desk phones and centrally manage supported devices as people join or move.', check: 'Confirm models and firmware. Existing proprietary phones may need replacing.' },
  { feature: 'CRM connections', benefit: 'Supported connectors can bring caller details and call activity into the tools your team already uses.', check: 'Functions differ by CRM and licence. Test your actual workflow, not just the connector name.' },
  { feature: 'Administration and access controls', benefit: 'Centralise extension changes, permissions and system maintenance.', check: 'Agree responsibility for updates, backups, access and recovery with your provider.' },
];
