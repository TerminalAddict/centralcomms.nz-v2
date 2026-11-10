# Websites and hosting content and search metadata

`src/pages/websites-and-hosting.astro` builds to the existing
`/websites-and-hosting.html` URL. It covers responsive business websites and
landing pages, WordPress/custom development, NZ hosting, domains, Microsoft 365
and Google Workspace email, HTTPS, maintenance, SEO foundations and 24/7
emergency support, with six use cases, four projects and 22 FAQs.

## Content ownership and evidence

- `src/data/websites-hosting.ts` holds the hosting-location statement, use cases,
  service options, project summaries, delivery steps and FAQs. Visible FAQ
  answers and `FAQPage` JSON-LD come from the same array. Hosting location copy
  is shared between the visible section, relevant FAQ, modal and service schema.
- Paul confirmed that the supplied Proxmox screenshot is from CCL's **current
  hosting platform**, located **in the heart of Waikato**, with **backups to the
  Western Bay of Plenty**. These are owner-confirmed operational facts, not an
  independently audited facility assessment. No exact address, facility name,
  provider contract or backup schedule was supplied.
- The existing page already offered responsive web design, landing pages,
  NZ-hosted packages, domains, Microsoft 365/Google Workspace, SSL, maintenance
  and SEO basics. The owner requested their expansion and 24/7 emergency support;
  the Support page also states that emergency availability.
- The About page supports Paul's approximately three decades in telecoms,
  systems administration, senior network engineering, network operations and
  general management. CCL was established in 1989 and Paul took over management
  in April 2022. Do not turn that into a claim of WordPress work since 1989.
- Programming depth is demonstrated with existing projects, not unsupported
  claims to be New Zealand's top-ranked developers, award winners, WordPress
  core contributors, or officially certified/endorsed by a vendor.
- The Ulysses Motorcycle Club update explicitly describes WordPress, ecommerce,
  a gallery, member access, branch news and hosting on CCL's servers. The Wanna
  Internet update describes bespoke customer-database/RADIUS integration, a
  customer control panel and signup/status functions. The Waikato Aquarium
  Society update supports a member marketplace; Freedomtax supports local
  business hosting. Only the Ulysses example is explicitly labelled WordPress.
- These are historical project examples, with images already published in the
  repository, not independent audits of the customers' current sites or proof
  of ongoing contracts. No sales uplift, traffic improvement or uptime figures
  are invented. The Wanna post's date is not repeated because its historical
  body also mentions later COVID-related content.
- `/updates/terminaladdict.html` supports sharing technical work and custom
  WordPress functions. `/updates/virtual-hosting.html` records the earlier
  Proxmox cluster work. Historical cluster capabilities do not establish the
  current package's topology, automatic failover or resource allocations.
- Jason Brand's unchanged quote is imported from
  `src/data/it-support-testimonials.ts`, also used by the home, IT support and
  broadband pages. It concerns Paul's technical systems work for Wanna Internet;
  it is not presented as a hosting benchmark or WordPress-specific endorsement.
- The use cases illustrate potential needs, not six additional claimed clients.

## Service and technical boundaries

- "Data-centre-level hosting" describes the requested service positioning and
  hands-on infrastructure work. No Tier classification, ISO certification,
  redundant power/feed/cooling design, SLA, uptime percentage or automatic
  failover promise has been inferred. These require separate confirmed evidence.
- Proxmox supports virtualisation and infrastructure management; its available
  capabilities are not a claim that every feature is configured on CCL's system.
  The supplied graphs are an operational snapshot, not a capacity guarantee,
  monitoring report, uptime history or resource allocation to a customer.
- Backup location is confirmed. Frequency, retention, recovery objectives,
  immutability, encryption design and recovery-test schedules were not supplied.
  Agree those per service rather than inventing them. Off-site backup is distinct
  from an always-running secondary service; a same-storage snapshot is not
  automatically an independent backup.
- Hosting, operating-system care, application maintenance and new development
  are separate responsibilities. No universal prices, fixed timelines, free
  migrations, unlimited resources or bundled premium licences are promised.
- WordPress guidance covers supported components, compatibility, access and
  workflow checks. A typical full recovery needs both files and the database.
  Updates, HTTPS and backups reduce different risks; none makes a site immune
  to compromise or outages. No blanket application-security certification is made.
- The site may use WordPress, static delivery or custom development depending
  on the requirement. It does not assert that all portfolio sites or the current
  Astro CCL site run WordPress.
- Domain registration, DNS, web hosting and email are different services. CCL
  offers help with registration and management, but no claim to be a .nz-authorised
  registrar is added. Transfer guidance is general, not a guaranteed timeline
  or advice to cancel existing service before the migration is verified.
- Microsoft 365/Google Workspace are provider services. Their data locations,
  licence inclusions, history migration and recovery arrangements are not implied
  by CCL's NZ website-hosting location. An MX change routes incoming mail; it
  does not copy historical mail. Do not publish a provider-wide NZ residency claim.
- SPF, DKIM and DMARC require an inventory of legitimate senders and suitable
  policies. They help address impersonation but do not guarantee inbox placement.
- 24/7 emergency support uses `0800 848 0038`, with corrected E.164 links
  `tel:+648008480038`. Emergency availability is distinct from instant repair,
  free recovery or an unquoted SLA. Routine requests link to `/support.html#contact`.
  Shared company office-opening hours remain unchanged.

## Search and sharing

- The Layout supplies the title, description, canonical, Open Graph and Twitter
  tags, with a dedicated local 1200 x 630 social image and descriptive alt text.
  The existing sitemap and robots policy cover the unchanged route.
- `Service`, `Person`, `WebPage`, `BreadcrumbList` and `FAQPage` JSON-LD accompany
  the Layout's `ProfessionalService`: six blocks in total. The provider remains
  `https://www.centralcomms.nz/#business`; Paul's identity remains
  `/it-support.html#paul-willard`, with a link to the existing full profile.
- All substantive content and answers are built into the HTML. FAQ disclosures
  are native `details` elements that work without JavaScript. The image dialog
  is progressive enhancement, not a condition for reading hosting information.
- All page images are local. External links open in a new tab with
  `rel="noopener noreferrer"`, without visible new-tab annotations. Internal
  project/service links preserve crawlable context. No paid review stars,
  fabricated ratings or machine-only content is added.
- Helpful content and sound technical delivery support discovery, not guaranteed
  search positions, traffic, leads or recommendations by ChatGPT/Claude. Google
  requires no additional AI text file or special schema for its AI search
  features. Google retired FAQ rich results in May 2026; FAQ schema describes
  the visible answers without promising an enhanced Google listing.

## Local assets and modal

The owner supplied `public/assets/images/tmp/proxmox.png` (1398 x 1089).
Sharp lossless WebP conversion produces the durable
`public/assets/images/websites-hosting/proxmox-hosting-platform.webp`
(37,600 bytes). Normalised RGBA buffers match exactly. No chart values, labels
or interface details were redrawn; embedded source-image metadata was dropped
by the conversion. The source PNG was not modified.

The same WebP is used for the hero, hosting figure, modal and sharing composition,
all referring to the same platform. It has explicit dimensions and the hero has
high fetch priority. Other images are lazy-loaded. The hero's empty alt avoids
duplicating the descriptive image and text in the hosting section.

The following historical project images were proportionally resized from
`public/assets/images/posts/` to 720 pixels wide and encoded as WebP quality 84:

| File under `public/assets/images/websites-hosting/` | Source | Dimensions |
| --- | --- | --- |
| `ulysses-project.webp` | `ulysses.jpg` | 720 x 538 |
| `wanna-project.webp` | `wanna.jpg` | 720 x 496 |
| `waikatoaquariumsociety-project.webp` | `waikatoaquariumsociety.jpg` | 720 x 597 |
| `freedomtax-project.webp` | `freedomtax.jpg` | 720 x 545 |

The grid uses a stable 3:2 visual crop aligned to the top, while the stored files
retain their original proportions. Existing local images of Paul and Jason are
reused for the same people. No remote image hotlinks or AI-generated visuals are
used.

`scripts/websites-hosting-social-image.html` is the reproducible sharing
composition, using the local Proxmox WebP and CCL logo. Render it at 1200 x 630,
device scale factor 1, wait for image decoding and capture the viewport to
`public/assets/images/websites-hosting/central-comms-websites-hosting-og.png`.
Use a new filename or appropriate invalidation for later changes, since
production images have a one-year cache lifetime.

The platform image opens in a native dialog using the existing broadband modal
pattern: Close, Escape, backdrop dismissal, focus return, scroll locking and
WebKit gutter compensation. Pointer presses starting inside must not cause
backdrop dismissal. Modified clicks preserve normal browser behaviour, and
the direct-image link remains functional without JavaScript/dialog support.
There is no new client dependency or framework-wide modal refactor.

## Primary references

Reviewed on 10 November 2026:

- [WordPress updates](https://wordpress.org/documentation/article/updating-wordpress/)
- [WordPress backups](https://developer.wordpress.org/advanced-administration/security/backup/)
- [WordPress hardening](https://developer.wordpress.org/advanced-administration/security/hardening/)
- [Proxmox VE features](https://www.proxmox.com/en/products/proxmox-virtual-environment/features)
- [Let's Encrypt: getting started](https://letsencrypt.org/getting-started/)
- [Domain Name Commission: domain transfers](https://dnc.org.nz/tools-and-services/how-do-i-2/transfer-my-domain-name/)
- [Microsoft 365: connecting a domain](https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider?view=o365-worldwide)
- [Google Workspace: mail routing](https://knowledge.workspace.google.com/admin/domains/set-up-mx-records-for-google-workspace)
- [NCSC / Own Your Online: email spoofing](https://www.ownyouronline.govt.nz/business/get-protected/guides/preventing-your-email-from-being-spoofed/)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google AI features and websites](https://developers.google.com/search/docs/appearance/ai-features)
- [Google FAQ rich-result retirement](https://developers.google.com/search/updates#may-2026)

The detailed Proxmox backup chapter returned HTTP 403 during research; no
version-specific commands, installation configuration or backup implementation
claims were derived from that inaccessible page. Recheck current documentation
before changing vendor-specific or domain-transfer guidance.

## Verification and maintenance

1. Run `npm run build` and `git diff --check`. Validate the built service page and
   social-image source with Nu HTML Checker.
2. Parse the six JSON-LD blocks; compare all 22 visible FAQs with their schema and
   confirm the shared business and Person identities. Check the owner-confirmed
   Waikato/Western Bay of Plenty statement remains consistent.
3. Verify canonical, sitemap, metadata, social-image dimensions, local asset
   decoding, internal links/anchors and external-link attributes. Check the
   four project image dimensions and Jason's unchanged shared quote.
4. Test desktop, tablet, narrow mobile and landscape layouts for overflow,
   stable project images and visible following content beneath the hero.
5. Test no-JavaScript FAQs and image fallback, keyboard access, the open dialog,
   all dismissal methods, focus restoration and background scroll locking.
   Isolate the existing chat widget during focused tests if it rejects a local
   preview origin; do not change production chat to accommodate the test.
6. Review hosting/backup locations, maintenance scope and support commitments
   when services change. Edit source files and durable assets, not `dist/`.

Verified on 10 November 2026:

- Production build passed for all 43 pages. Nu HTML Checker reported no errors
  for the built service page or sharing-image source; `git diff --check` passed.
- Static HTML checks passed for all six schema blocks, 22 FAQ/schema matches,
  consistent hosting locations, shared entity identities, metadata, sitemap,
  headings, unique IDs, local images, links, phone numbers and Jason's quote.
- Chromium layout/media checks passed at 1440x900, 1920x1080, 2560x720,
  768x1024, 390x844 and 320x568, without horizontal/text overflow or broken
  images. Following content remained visible below the hero. Desktop/mobile
  screenshots and the 1200x630 sharing image were visually reviewed.
- Axe WCAG A/AA checks found no violations in `main` at 1440x900 and 390x844,
  or the open image dialog at desktop, mobile and landscape test sizes.
- Chromium, Firefox and WebKit passed modal checks at 1440x900, 390x844,
  320x568 and 844x390: opening, focus, sizing, scroll locking, Close, Escape,
  backdrop/inside/drag handling, focus return and modified-link behaviour.
  Direct image navigation worked without JavaScript and without dialog support.
  Native no-JavaScript FAQ keyboard checks also passed in all three engines.
- The production-only chat widget was stubbed in focused JavaScript checks;
  these results do not certify that third-party service. Firefox no-JavaScript
  image checks use loaded-image dimensions rather than an unsettled `decode()`
  promise. Modal cleanup checks wait for the native queued `close` event.
- The lossless Proxmox WebP matched the supplied PNG's normalised RGBA pixels.
  The updated development preview returned HTTP 200 through
  `http://103.123.164.24:4321/websites-and-hosting.html`.

Deployment, commit and push are separate operations after content review.
