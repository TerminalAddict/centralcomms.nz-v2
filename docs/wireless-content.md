# Enterprise WiFi content and search metadata

`src/pages/wireless.astro` builds to the existing `/wireless.html` URL. It
covers enterprise WiFi for Hamilton/Waikato businesses, six example customer
needs, benefits, surveys, design/installation, coverage diagnosis, links between
buildings, Paul Willard's experience, monitoring/management, NZ radio requirements,
remote server/cloud services, Aaron Keppler's existing testimonial and 20 FAQs.

## Content ownership

- `src/data/wireless.ts` holds use cases, survey stages, diagnostic examples,
  connection options and FAQs. The same FAQ array builds native disclosures
  and `FAQPage` JSON-LD; do not maintain a second copy of the answers.
- Four networking credentials are selected from `paulCredentials` in
  `src/data/it-support.ts` by their Legrand, MikroTik and Ubiquiti provider
  records. This preserves the existing single source for names, years and
  descriptions. The qualification list, qualification FAQ and Person metadata
  derive from that selection. Check the expected four entries after edits.
- Legrand Certified Network Installer (2023), MTCNA (2018), UEWA (2018) and
  UBWA (2018) were supplied by the owner. The About page supports Paul's career
  across systems administration, senior network engineering, network operations
  and general management, with approximately three decades of telecoms work.
- Dates describe achievements, not a claim that all vendor certificates are
  currently renewed. MikroTik's stated three-year certificate validity is why
  the 2018 MTCNA is explicitly historical. No new certificate IDs, current
  renewals or RSM engineer/certifier approval have been inferred. Provider
  links explain the courses; they do not independently verify attendance.
- The original wireless page already offered the eight service areas expanded
  here, remote server/cloud help and UniFi, MikroTik and Grandstream equipment.
  The examples are potential customer needs, not invented deployments or
  promises that every service is included in one installation price.
- Aaron's quote is imported unchanged from `src/data/voip-testimonials.ts`,
  also used by the home, VoIP, cabling and IT support pages. It explicitly
  mentions managed WiFi. No vendor endorsement, performance measurement,
  review rating or universal after-hours commitment is inferred from it.
- The owner's supplied rooftop photo is an installation photograph, not an
  identified customer's case study, a claim about link performance or a photo
  identified as Paul. Do not invent the site, technician's identity or radio model.

## Technical and regulatory boundaries

- Coverage, simultaneous use and the wired/uplink path are distinct concerns.
  More access points, more transmit power or a faster internet plan is not a
  universal fix. Avoid fixed access-point-per-area rules and untested speeds.
- Survey scope is agreed: an initial design, existing-network investigation and
  post-installation validation are different activities. A predictive floor plan
  is not an on-site measurement. No particular survey tool, heatmap package or
  measurement method has been claimed as owned or included on every job.
- Roaming depends on client decisions, coverage and authentication. Test actual
  devices; do not promise seamless roaming for all hardware. Separate SSIDs do
  not by themselves enforce network isolation: switching/routing/firewall policy
  and access tests matter.
- Mesh uses a wireless uplink and has capacity/environment trade-offs. A
  point-to-point bridge connects locations; local access points may still be
  needed inside the destination. Path clearance, obstructions, power, mounting,
  interference and the required service determine suitability. No universal
  distance, throughput, availability or weather-resilience promise is made.
- Monitoring is scoped by equipment, alert handling and response arrangements.
  Remote visibility is not a 24/7 staffed response promise. Server/cloud support,
  subscription costs and backup responsibilities are separately agreed.
- NZ installations must use the applicable RSM rules and licence conditions.
  General User Radio Licences are conditional authorisations, not unrestricted
  "unlicensed" spectrum. Requirements differ by band, device and installation.
  Some designs need individual licensing and the appropriate ARE/ARC process.
  None of Paul's listed vendor qualifications is an RSM approval.
- RSM's SRD, fixed-link GURL and paid fixed-link guidance were checked. The
  linked Gazette notice blocked automated access; no fixed channel/power table
  or legal sign-off has been reproduced. Check the current notice, equipment
  compliance and project-specific conditions before installation or any future
  expansion of the technical copy.

## Search and sharing

- The existing Layout handles title, description, canonical, Open Graph and
  Twitter metadata. Wireless now has a local 1200 x 630 social image with
  descriptive alt metadata. The existing `.html` sitemap and permissive
  `robots.txt` already cover the route.
- Page-specific `Service`, `Person`, `WebPage`, `BreadcrumbList` and `FAQPage`
  JSON-LD reuse the layout's `https://www.centralcomms.nz/#business` entity.
  Paul's ID remains `/it-support.html#paul-willard`, rather than creating a
  second person for this page. The visible profile links to that full record.
- All substantive content, credentials and FAQ answers are static build output.
  FAQs expand with native `details` elements and need no JavaScript. There is
  no new browser dependency, tracking service or crawler-only content.
- All images are local. External links have `target="_blank"` and
  `rel="noopener noreferrer"`, without visible new-tab annotations. Related
  service links, navigation and the unchanged canonical preserve discovery.
- Useful content and consistent metadata support discovery, not guaranteed
  rankings or recommendations from ChatGPT/Claude. Google's AI search guidance
  does not require special AI text files or markup. Google retired FAQ rich
  results in 2026; the FAQ schema describes visible answers for other consumers
  without promising an enhanced search listing. No review stars are added.

## Local media

The owner supplied `public/assets/images/tmp/20261009_124237.jpg` (4000 x 1848).
Sharp auto-orientation and proportional resize with WebP quality 86 produced
the durable published assets below. The owner later removed the temporary
upload while supplying the broadband screenshot; the wireless page and social
image source use only the retained assets in `public/assets/images/wireless/`.

| File under `public/assets/images/wireless/` | Dimensions | Use |
| --- | --- | --- |
| `enterprise-wifi-installation-hero.webp` | 2048 x 946 | Desktop hero |
| `enterprise-wifi-installation-hero-960.webp` | 960 x 444 | Responsive hero |
| `central-comms-enterprise-wifi-og.png` | 1200 x 630 | Branded sharing image |

The photo is not AI-edited. The full-width hero uses responsive sources, explicit
dimensions and high fetch priority. The mobile position keeps the technician and
directional antenna in view; check both after changing the crop or hero height.
Paul's existing local `it-support/paul-willard.webp`, Aaron's existing local
testimonial portraits and the existing vendor logos are reused for the same
people/brands. Secondary images load lazily.

`scripts/wireless-social-image.html` is the reproducible social composition. It
uses only the local hero and CCL logo. Open it at 1200 x 630 with device scale
factor 1, wait for image decoding, and capture the viewport to the PNG above.
Use a new asset filename or appropriate invalidation for later image changes,
because production image responses have a one-year cache lifetime.

## Sources

Primary references reviewed on 10 November 2026; recheck before changing radio
requirements, device features or certification claims:

- [RSM: Short Range Devices GURL](https://www.rsm.govt.nz/licensing/frequencies-for-anyone/short-range-devices-gurl)
- [RSM: Fixed Radio Link Devices GURL](https://www.rsm.govt.nz/licensing/frequencies-for-anyone/fixed-radio-link-devices-gurl)
- [RSM: licensing in New Zealand](https://www.rsm.govt.nz/licensing/licensing-in-new-zealand)
- [RSM: licensed fixed links](https://www.rsm.govt.nz/licensing/licences-you-must-pay-for/fixed-location-licences/fixed-link-licence)
- [RSM: WLAN use in the 6 GHz band](https://www.rsm.govt.nz/projects-and-auctions/completed-projects/wlan-use-in-the-6-ghz-band)
- [Ubiquiti: WiFi troubleshooting](https://help.ui.com/hc/en-us/articles/32064585817495-WiFi-Troubleshooting-Guide)
- [Ubiquiti: SSID and AP settings](https://help.ui.com/hc/en-us/articles/32065480092951-UniFi-WiFi-SSID-and-AP-Settings-Overview)
- [Ubiquiti: WiFi performance considerations](https://help.ui.com/hc/en-us/articles/360012947634-Maximizing-Wireless-Speeds)
- [Ubiquiti: wireless mesh considerations](https://help.ui.com/hc/en-us/articles/115002262328-Considerations-for-Optimal-Wireless-Mesh-Networks)
- [Ubiquiti: outdoor antenna alignment](https://help.uisp.com/hc/en-us/articles/22590760854935-ISP-Wireless-Antenna-Alignment-for-Outdoor-Wireless-Links)
- [Apple: Wi-Fi roaming support](https://support.apple.com/en-gb/guide/deployment/dep98f116c0f/web)
- [MikroTik: training and certificate validity](https://mikrotik.com/training/about)
- [Ubiquiti UEWA training guide](https://dl.ui.com/guides/training/courses/UEWA_Training_Guide_V2.1.pdf)
- [Ubiquiti UBWA training guide](https://dl.ui.com/guides/training/courses/UBWA_Training_Guide.pdf)
- [Legrand New Zealand](https://www.legrand.co.nz/) (owner-provided training provider;
  no additional claims were derived from its automated-access-restricted site)
- [Google: AI features and websites](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQ rich-result retirement](https://developers.google.com/search/updates#may-2026)

## Verification and maintenance

1. Run `npm run build` and `git diff --check`. Validate `dist/wireless.html`
   and the social-image source with Nu HTML Checker.
2. Parse the six JSON-LD blocks (including the shared business). Compare all
   20 visible FAQ answers and four credential entries with their schema, and
   compare Paul's identity/credentials with the IT support page.
3. Check the canonical, sitemap, social image URL/dimensions, local image loading,
   external link attributes, internal anchors and related service URLs.
4. Test desktop, tablet and narrow mobile layouts for text overflow, hero crop,
   a visible hint of following content and stacked qualification entries. Check
   keyboard access, no-JavaScript FAQs and automated accessibility.
5. Confirm Aaron's shared quote is unchanged. Recheck certification dates,
   service scope and RSM references as information changes.

Edit source files in `src/` and durable assets in `public/`; `dist/` is generated.
Deployment, commit and push are separate operations, not part of content review.

Verification completed on 10 November 2026: production build (43 pages), Nu
HTML validation for the wireless page and sharing-image source, all 20 FAQ and
four credential schema comparisons, shared Person identity, metadata, sitemap,
local image loading, internal links/anchors, external-link attributes and Aaron's
unchanged quote. Chromium checks passed at 1440 x 900, 1920 x 1080, 2560 x 720,
768 x 1024, 390 x 844 and 320 x 568 without page/text overflow or page-script
errors, with the following content visible below the hero. Axe WCAG A/AA checks
of the main content passed on desktop and mobile. Native FAQ keyboard behaviour
also passed with JavaScript disabled in Chromium, Firefox and WebKit. These are
implementation checks, not evidence of search indexing or AI recommendations.
