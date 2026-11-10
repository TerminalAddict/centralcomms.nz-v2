// The platform and backup locations were confirmed by Paul for this page.
export const hostingPlatform = {
  description: 'Our current hosting platform is based in the heart of Waikato, with backups to the Western Bay of Plenty.',
  location: 'Waikato, New Zealand',
  backupLocation: 'Western Bay of Plenty, New Zealand',
  image: '/assets/images/websites-hosting/proxmox-hosting-platform.webp',
  imageAlt: 'CCL Proxmox hosting platform showing CPU usage, server load and memory monitoring graphs',
};

export const websiteUseCases = [
  {
    title: 'A business that needs a credible first impression',
    need: 'You have a good business, but the website is dated, difficult to use on a phone or missing the information customers ask for.',
    approach: 'Build a responsive business website around your services, service area, useful project evidence and a straightforward way to enquire.',
    benefit: 'Customers can understand what you do and take the next step, whether they arrive on a phone or a desktop.',
  },
  {
    title: 'A campaign that needs its own destination',
    need: 'An advert, new service or event needs a focused landing page instead of sending every visitor to a general home page.',
    approach: 'Match the page to the campaign, explain the offer clearly and provide a relevant enquiry or booking path. Agree how results will be measured.',
    benefit: 'A clearer journey from the original message to the action you want a customer to take.',
  },
  {
    title: 'A WordPress site nobody wants to touch',
    need: 'Updates have accumulated, a form has stopped delivering or a former developer is no longer available. It is unclear what is safe to change.',
    approach: 'Review access, plugins, themes, hosting and backups, then agree a maintenance or repair plan. Test important workflows after changes.',
    benefit: 'An accountable person looking after the application, with a plan for changes and recovery.',
  },
  {
    title: 'Hosting that no longer fits the workload',
    need: 'A growing site, customer portal or custom application needs more control than the existing hosting arrangement provides.',
    approach: 'Assess the application, database, traffic patterns and management needs. Consider an appropriate NZ-hosted service or virtual-server environment.',
    benefit: 'A hosting decision based on the work being done, rather than an unexplained upgrade to a larger plan.',
  },
  {
    title: 'Members, bookings or customer self-service',
    need: 'A club needs member access, a service business needs bookings, or customers need to work with information from an existing business system.',
    approach: 'Map the workflow, user permissions and integration requirements. Choose suitable existing components or develop the missing functionality.',
    benefit: 'A website that can support an actual business process, with responsibilities and access controls considered from the start.',
  },
  {
    title: 'A provider move without losing control',
    need: 'Your website, domain and email are spread across several accounts, or you want local hosting without changing your email platform.',
    approach: 'Identify the domain holder, DNS, website files, databases and email records. Plan and test the transfer before cancelling old services.',
    benefit: 'A coordinated changeover that protects the parts of the business that depend on your domain.',
  },
];

export const hostingOptions = [
  { name: 'Business website or landing page', fit: 'A local service business, new venture or focused campaign.', scope: 'Content, responsive design, enquiry handling, appropriate hosting, HTTPS and the essentials for search discovery.', decision: 'How much content changes, who will edit it and what a successful enquiry looks like.' },
  { name: 'Managed WordPress', fit: 'A site with regularly edited content, member features or suitable WordPress extensions.', scope: 'Hosting and an agreed application-care plan: core, themes, plugins, backups, access and important workflow checks.', decision: 'Plugin quality, licence costs, update compatibility and what maintenance is actually included.' },
  { name: 'Virtual server or custom application', fit: 'A customer portal, integration or application with specific runtime and resource needs.', scope: 'A scoped hosting environment with clear responsibility for the operating system, application, security, backups and recovery.', decision: 'Supported software, capacity, access, availability requirements and who administers each layer.' },
];

export const websiteProjects = [
  { title: 'Ulysses Motorcycle Club', category: 'WordPress and member services', image: '/assets/images/websites-hosting/ulysses-project.webp', alt: 'Historical Ulysses Motorcycle Club website with club news, member access and shop navigation', width: 720, height: 538, href: '/updates/ulysses-motorcycle-club.html', description: 'We rebuilt the club website in WordPress, bringing together an online store, gallery, members-only area and branch news on our own hosting. Members could manage parts of the content themselves.', relevance: 'A practical example of WordPress supporting different audiences and editing responsibilities.' },
  { title: 'Wanna Internet', category: 'Custom development and integration', image: '/assets/images/websites-hosting/wanna-project.webp', alt: 'Historical Wanna Internet website with customer account, signup and network-status navigation', width: 720, height: 496, href: '/updates/wanna-internet.html', description: 'A bespoke website connected to customer records and a RADIUS user server, with a customer control panel, signup workflow and network-status information.', relevance: 'Relevant when a website needs to work with the systems behind the business, not just describe them.' },
  { title: 'Waikato Aquarium Society', category: 'Community and member marketplace', image: '/assets/images/websites-hosting/waikatoaquariumsociety-project.webp', alt: 'Historical Waikato Aquarium Society website with aquarium photography and membership information', width: 720, height: 597, href: '/updates/waikato-aquarium-society.html', description: 'A club website with a system for members to register and list fish and other items for sale.', relevance: 'An example of turning a community requirement into a useful online workflow.' },
  { title: 'Freedomtax', category: 'Local business hosting', image: '/assets/images/websites-hosting/freedomtax-project.webp', alt: 'Historical Freedom Taxation business website', width: 720, height: 545, href: '/updates/freedomtax.html', description: 'Our hosting project for a local small-business tax specialist centred on a local provider with people available by email and phone.', relevance: 'A hosting relationship with an accessible support contact, rather than just an anonymous account.' },
];

export const websiteDelivery = [
  { name: 'Define the job', detail: 'Agree the audience, services, key actions, content responsibilities and existing accounts. Identify integrations and what needs to stay working during a change.' },
  { name: 'Build and test', detail: 'Develop the site and test representative devices, keyboard access, forms and any agreed member or ordering workflows. Review content, image sizes and important redirects.' },
  { name: 'Plan the launch', detail: 'Coordinate domain and DNS access, hosting, email records, HTTPS and the cutover. Keep a recovery route and verify the public site before retiring the old service.' },
  { name: 'Keep it maintained', detail: 'Document access, licences, renewals, backups and support responsibilities. Agree the update plan and how future content or functionality changes will be handled.' },
];

export const websiteFaqs = [
  { question: 'Do you design and host business websites in Hamilton and Waikato?', answer: 'Yes. Central Communications Ltd provides responsive business website design, landing pages, WordPress work, custom development and NZ-hosted web hosting, with a local Hamilton support team. We can also coordinate domains, business email, SSL certificates and ongoing maintenance.' },
  { question: 'What experience does CCL have with WordPress and programming?', answer: 'Our published projects include a WordPress membership and ecommerce website for the Ulysses Motorcycle Club, a member marketplace for the Waikato Aquarium Society, and a bespoke Wanna Internet website integrated with customer records and a RADIUS user server. Our TerminalAddict project also shares technical work, including custom WordPress functions. These are examples of application development alongside hosting and systems administration.' },
  { question: 'Can you maintain or repair an existing WordPress site?', answer: 'Yes. We start by reviewing access, the theme and plugins, supported software, backups and the problem you want solved. We then agree the work, test important functions and plan changes. An unsupported plugin or heavily customised site may need replacement work rather than a routine update.' },
  { question: 'Does every website need WordPress?', answer: 'No. WordPress can be a good fit when people regularly edit content or need suitable CMS features. A simpler static site or a custom application may fit a different requirement. We choose around editing needs, functionality, maintenance and budget rather than force every project onto one platform.' },
  { question: 'Can you build a landing page for one service or campaign?', answer: 'Yes. A focused landing page can explain one service, launch, event or offer and provide a clear enquiry or booking route. We agree the content, audience and intended action, and any measurement requirements. A landing page does not by itself guarantee leads or advertising results.' },
  { question: 'Where is your web hosting located?', answer: `${hostingPlatform.description} We combine NZ hosting with a local Hamilton support team. Third-party email, analytics, payment or other services may have separate hosting and data-location arrangements.` },
  { question: 'Where are backups kept, and what can be restored?', answer: 'CCL has backups to the Western Bay of Plenty, separate from the hosting platform in Waikato. We agree what is covered for your service, the backup schedule, retention and restoration process. A WordPress recovery needs the relevant site files and database, and other services such as Microsoft 365 or Google Workspace need their own clearly defined recovery arrangements.' },
  { question: 'Does Proxmox hosting guarantee that my website can never go down?', answer: 'No platform makes a website immune to outages. Proxmox provides virtualisation and infrastructure-management capabilities, while the actual design, application and operational arrangements determine the service. Hosting, backup and any availability or recovery commitments should be agreed explicitly. A backup is not the same as an always-running failover copy.' },
  { question: 'Can you move my website from another hosting provider?', answer: 'Yes, subject to checking access, software compatibility and the current service. We plan the files, database, DNS, HTTPS, forms and any application-specific changes, then test the new environment. Keep the old hosting active until the changeover and relevant checks are complete; do not assume a domain transfer also moves the website or email.' },
  { question: 'Can you register and manage our domain name?', answer: 'Yes. We can help with registration, renewals, DNS management and authorised transfers. The business should be correctly recorded as the domain holder, with current contact details and clear access responsibilities. Domain registration, website hosting and email are related services, but they are not the same subscription.' },
  { question: 'Can we keep our current domain or email when changing web hosting?', answer: 'Usually, yes. The domain can point the website to new hosting while email continues with its existing provider. We check DNS records, verification records, mail routing and other dependent services before changing anything. The migration plan should say which services are moving and which are staying where they are.' },
  { question: 'Can you set up Microsoft 365 or Google Workspace email?', answer: 'Yes. We can help choose and configure an appropriate business email service, connect your domain, plan a mailbox migration and set up users and supported devices. Mailboxes, licences, historical email, shared addresses and any additional backup requirements are scoped in the proposal. Changing an MX record redirects new incoming mail; it does not migrate the old mailbox contents.' },
  { question: 'Does NZ website hosting mean our Microsoft or Google email is hosted in NZ too?', answer: 'Not automatically. Website hosting and Microsoft 365 or Google Workspace are separate services. Email data-location, retention and recovery arrangements depend on the chosen provider, product and configuration. Tell us any specific data-location requirement so it can be checked before choosing a service.' },
  { question: 'Do you arrange SSL certificates and HTTPS?', answer: 'Yes. We can configure HTTPS and certificate renewal as part of the agreed hosting setup. Often called SSL certificates, modern certificates support TLS-encrypted connections. They help protect information in transit, but do not replace application updates, access controls, backups or safe handling of information.' },
  { question: 'What is included in website maintenance?', answer: 'It depends on the agreed plan. Work can include WordPress core, plugin and theme updates, compatibility checks, backups, certificate checks and testing forms or other important workflows. Content changes, redesigns, new features, premium licences and incident recovery should be distinguished from routine maintenance so the scope and costs are clear.' },
  { question: 'Is a server snapshot the same as a website backup?', answer: 'Not necessarily. A snapshot may depend on the same storage as the running system and may not cover every component needed for recovery. We consider recoverable copies of the files, database and configuration, their location and retention, and how they will be restored. Off-site backup and recovery planning serve a different purpose from a short-term rollback point.' },
  { question: 'Can you help with SEO basics?', answer: 'Yes. We can organise clear service content, page titles and descriptions, headings, internal links, canonical URLs, a sitemap and relevant structured data. Mobile usability, efficient images and working pages matter too. Search Console can help identify indexing issues. These foundations support discovery; they are not a guarantee of a particular position in search results.' },
  { question: 'Can you make ChatGPT, Claude or Google recommend my business?', answer: 'No developer can guarantee another service will recommend a business. We can make useful, accurate information available in crawlable text, support it with real experience and consistent business details, and keep structured data aligned with the visible content. Clear service explanations, credible project examples and helpful answers give people and discovery systems better information to work with.' },
  { question: 'Can you build member areas, bookings or custom integrations?', answer: 'Yes. Our published work includes member access, an online store, a marketplace, bookings and customer-system integration. We scope the workflow, user roles, data handling, supported third-party services and ongoing maintenance. A suitable existing component may be preferable to custom code; bespoke development makes sense where it solves a genuine requirement.' },
  { question: 'How much does a website or hosting package cost?', answer: 'The quote depends on the site, content, functionality, migration and service requirements. We separate the initial design or development work from ongoing hosting, domain renewal, email subscriptions, licences and maintenance. Send your current website address, goals and required features so we can recommend a suitable scope rather than an unexplained bundle.' },
  { question: 'How long does a new website or hosting move take?', answer: 'It depends on the content, design approvals, integrations, access to existing accounts and the amount of migration work. We agree milestones and a launch or changeover plan after reviewing the requirements. Providing content, account access and a clear decision-maker early helps avoid preventable delays.' },
  { question: 'Do you provide 24/7 emergency website and hosting support?', answer: 'Yes. CCL provides 24/7 emergency support. Call 0800 848 0038 for an urgent problem with the services we support; use our support form for routine requests. Emergency availability is not a promise of instant restoration or that all recovery work is free. Response arrangements, charges and any service-level commitments are agreed for your service.' },
];
