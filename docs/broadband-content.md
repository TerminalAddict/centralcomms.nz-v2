# Business broadband content and search metadata

`src/pages/ultra-fast-broadband.astro` builds to the existing
`/ultra-fast-broadband.html` URL. It covers business UFB and Hyperfibre in
Hamilton/Waikato, six customer use cases, ISP experience, package selection,
managed equipment, phones/CCTV, static IPs, connection planning, local support,
resilience, two existing testimonials and 20 FAQs.

## Content ownership

- `src/data/broadband.ts` holds the owner-confirmed Net Enterprises relationship,
  customer test values, use cases, connection stages and FAQs. Native FAQ
  disclosures and `FAQPage` JSON-LD use the same answer array. Test figures in
  the visible metrics, description and relevant FAQ derive from the same data.
- Paul confirmed that he also owns **Net Enterprises Ltd**, and that it provides
  the internet backbone for CCL customer connections. This is an owner-supplied
  business fact, not an independently audited corporate or network record.
  Do not infer a parent/subsidiary relationship, ASN, transit supplier, network
  capacity, points of presence or company website from it.
- Paul's career history comes from the About page: approximately three decades
  of telecommunications work, spanning systems administration, senior network
  engineering, network operations management and general management. CCL's
  establishment in 1989 is separate from Paul's arrival in April 2022. The page
  does not claim CCL has operated as an ISP since 1989.
- The existing Wanna Internet update supports ISP systems work involving
  customer records, RADIUS, signup and network status. It does not establish
  ownership of Wanna Internet, a current contract or a measured broadband result.
  Its historical date is not repeated because the old body also mentions later
  COVID-related content.
- Business UFB, Hamilton support, router configuration, phone/CCTV integration,
  static IP options and 24/7 emergency support were requested by the owner and
  already appeared on the old broadband page. The Support page also states
  24/7 emergency availability. No new tariff or contract terms were supplied.
- Aaron's quote comes unchanged from `src/data/voip-testimonials.ts`; Jason's
  comes unchanged from `src/data/it-support-testimonials.ts`. Both remain shared
  with the home page. Aaron explicitly describes internet and managed networks;
  Jason describes ISP technical systems work. Neither quote is presented as a
  speed guarantee or a review of the pictured Hyperfibre connection.
- The six use cases are possible customer needs, not six claimed deployments.

## Customer Hyperfibre result

The owner supplied `public/assets/images/tmp/speedtest.png` and confirmed that
it was captured while testing a **customer Hyperfibre connection**. The screenshot
shows:

| Field | Supplied value |
| --- | --- |
| Download | 4,026.98 Mbps |
| Upload | 3,895.66 Mbps |
| Ping | 3 ms |
| Network | Net Enterprises Ltd |
| Selected test server | Lightwire Limited, Hamilton |

The result is a single measurement. The caption, hero footnote and FAQ explicitly
avoid promising this speed to all customers or describing it as typical. No test
date, customer identity, subscribed plan speed, device specification or test
methodology has been inferred. Lightwire is identified only as the selected test
server, not a backbone or transit supplier.

The original screenshot and lossless WebP retain their existing visible network
IP and result ID. No digits, UI, ratings or identifying text were altered. Do not
claim this screenshot is anonymised. Review publication permission and any
required redaction before substituting another customer's result; never invent
or retouch measurements to improve the marketing image.

The full result appears as an image with a text equivalent and three readable
metrics. Selecting it opens a native image dialog, following the data-cabling
video modal pattern. It supports Close, Escape, backdrop dismissal, contained
keyboard focus, background scroll locking and focus restoration to the image
link. A measured gutter adjustment prevents WebKit's scroll lock from shifting
the page; the temporary CSS property is removed on close. Modified clicks retain
normal browser behaviour; without JavaScript or
dialog support, the same link opens the original image directly. The dialog
uses the same cached local WebP and adds no dependency. The hero reuses the
same result as a decorative background; its empty alt avoids repeating the
accessible result later in the page.

## Service and technical boundaries

- Availability is checked by address. Hyperfibre is a multi-gigabit option where
  available, not a universal promise or a list of CCL speed tiers. Router,
  firewall, port, switch, cable, device, destination and workload limits matter.
- Business UFB is not automatically a dedicated leased line or a service-level
  agreement. Do not invent prices, unlimited-data inclusions, contract lengths,
  repair deadlines, free equipment or symmetric plan speeds.
- Router supply, configuration, firmware maintenance, configuration backups and
  monitoring are scoped in the proposal. Remote management alone is not a claim
  of continuous staffed monitoring or guaranteed incident resolution.
- Static IP availability and cost are checked for the proposed service. A stable
  address may help a VPN or allowlist, but is neither a speed improvement nor a
  security control. Remote access still requires appropriate authentication,
  supported equipment and firewall policy.
- Local CCTV recording does not necessarily upload all footage. Remote viewing,
  cloud recording and backups have different upload requirements. Phone/CCTV
  integration includes network planning, not an assumption that every related
  product or subscription is included in the broadband price.
- Fibre performance and Wi-Fi coverage are separate investigations. A faster
  access package cannot fix every local network problem.
- 24/7 emergency support is stated positively, with the existing service number
  `0800 848 0038` and corrected E.164 link `tel:+648008480038`. It is distinguished
  from instantaneous restoration, a fixed repair time and free attendance.
  Routine requests go to `/support.html#contact`; notices link to
  `/notifications.html`. Shared company office opening hours remain unchanged.
- Backup connectivity needs compatibility and failover testing. It may change
  the public IP or interrupt sessions and is not necessarily physically diverse.
  A UPS has finite runtime and does not guarantee upstream connectivity.
- Installation, consent and changeover guidance is general planning information,
  not a universal delivery time or property-specific legal advice. Confirm the
  current access-network process and any phone-number transfer before cancellation.

## Search and sharing

- The existing Layout handles titles, description, canonical, Open Graph and
  Twitter metadata. Broadband has a dedicated local 1200 x 630 sharing image and
  descriptive alt metadata. The existing sitemap and robots policy cover the
  unchanged `.html` route.
- Page-specific `Service`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`
  and `FAQPage` JSON-LD accompany the Layout's `ProfessionalService`, for seven
  blocks in total. The service provider remains `https://www.centralcomms.nz/#business`.
  Paul's identity remains `/it-support.html#paul-willard`; the backbone business
  is `/ultra-fast-broadband.html#net-enterprises`, with a matching visible anchor.
- Net Enterprises' structured description contains only the confirmed name and
  relationship. No unsupported ownership hierarchy properties are added.
- All substantive copy and FAQ answers are rendered at build time. Native
  `details` elements work without JavaScript. No client dependency, third-party
  speed-test embed, new tracking service or crawler-only content was added.
- All images are local. External references have `target="_blank"` and
  `rel="noopener noreferrer"` without visible new-tab annotations. Related
  service/project links help visitors and crawlers follow the context.
- Consistent, accessible content supports discovery; it cannot guarantee Google
  rankings or recommendations by ChatGPT/Claude. Google requires no special AI
  text file or additional schema for its AI search features. Google retired FAQ
  rich results in May 2026; the FAQ schema describes the visible answers without
  promising a Google enhancement. No fabricated ratings or review schema is used.

## Local media

The supplied PNG is 1373 x 596. Sharp's lossless WebP conversion produced
`public/assets/images/broadband/customer-hyperfibre-speedtest.webp` at the same
dimensions (37,822 bytes). Normalised RGBA buffers were compared: the pixels
are identical. The full-size file is smaller than a tested 960-pixel lossless
variant, so the page uses just one file for both hero and result instead of
making visitors download a larger responsive derivative. The temporary source
PNG was subsequently removed; the published page and sharing-image source use
the retained WebP and do not depend on that temporary upload path.

`scripts/broadband-social-image.html` uses that local WebP and the existing CCL
SVG logo to produce `public/assets/images/broadband/central-comms-business-broadband-og.png`.
Open the source at 1200 x 630, device scale factor 1, wait for image decoding and
capture the viewport. It uses a solid contrast overlay, not an edited measurement
or an AI-generated result. Regenerate the PNG after changes to the source.

The hero has explicit dimensions and high fetch priority. The full result,
Paul's existing local portrait and the existing Aaron/Jason testimonial portraits
load lazily. Portrait WebP sources reuse their existing 160/320-pixel variants.
Use a new filename or appropriate invalidation for future image revisions:
production images have a one-year cache lifetime.

## Sources

Primary references reviewed on 10 November 2026:

- [Tuatahi First Fibre: availability and getting connected](https://www.tuatahifibre.co.nz/where-to-start)
- [Tuatahi First Fibre: consents](https://www.tuatahifibre.co.nz/consents)
- [NCSC: network separation and segmentation](https://www.ncsc.govt.nz/protect-your-organisation/network-separation-and-segmentation/)
- [NCSC: security for edge devices](https://www.ncsc.govt.nz/protect-your-organisation/joint-guidance-security-for-edge-devices/)
- [2degrees: fibre and power cuts](https://www.2degrees.nz/help/broadband-help/troubleshooting/what-happens-in-a-power-cut)
  (background reference only, not a public competitor link or a CCL contract)
- [Google: AI features and websites](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQ rich-result retirement](https://developers.google.com/search/updates#may-2026)

Tuatahi references explain the access-network process, not an independently
verified CCL wholesale contract or exclusive coverage arrangement. Chorus
Hyperfibre pages did not return readable bodies during research; no CCL tier
prices, advertised speeds or guaranteed performance were derived from them.
Recheck current network guidance and the proposed service before changing claims.

## Verification and maintenance

1. Run `npm run build` and `git diff --check`. Validate the generated broadband
   HTML and social-image source with Nu HTML Checker.
2. Parse all seven JSON-LD blocks. Compare the 20 visible FAQ answers with their
   schema, and check the shared business and Person identities.
3. Check the canonical, sitemap, social image URL/dimensions, local image loading,
   internal links/anchors, external-link attributes, and the two unchanged quotes.
4. Compare the three text metrics with the source screenshot. Keep the single-test
   qualification with the result and do not add an unverified date or plan tier.
5. Test desktop, tablet and narrow mobile widths for overflow, readable metrics,
   a visible hint of following content beneath the hero and keyboard-accessible
   FAQs. Test the native disclosures with JavaScript disabled. Check the image
   dialog's close button, Escape, backdrop, focus restoration and mobile sizing;
   confirm that clicks inside do not close it and the no-JavaScript image link
   still works.
6. Review the ownership relationship, package scope and emergency-support
   arrangements when the service changes. Update source content, not `dist/`.

Verification completed on 10 November 2026: production build (43 pages), Nu
validation for the page and sharing source, all FAQ/schema comparisons, metadata,
entity identity, sitemap, links, benchmark text and unchanged testimonials.
Chromium checks passed at 1440 x 900, 1920 x 1080, 2560 x 720, 768 x 1024,
390 x 844 and 320 x 568 with no page/text overflow, broken or remote images,
or page-script errors. Axe WCAG A/AA checks passed for the main content on
desktop and mobile. Native FAQ keyboard behaviour passed without JavaScript in
Chromium, Firefox and WebKit. These are implementation checks, not evidence of
search indexing, ranking or AI recommendations.

Image-modal checks also passed in Chromium, Firefox and WebKit at 1440 x 900,
390 x 844, 320 x 568 and 844 x 390: opening, image decoding, viewport bounds,
focus containment/restoration, Close, Escape, backdrop dismissal, inside clicks,
pointer drags from dialog padding and background scroll locking/layout stability.
Open-dialog axe checks passed in Chromium. Direct-image fallback without
JavaScript passed in all three engines; modified clicks and the unsupported-dialog
fallback passed in Chromium. Touch opening/dismissal also passed on the public-IP
development preview. The focused modal suite stubs the unrelated external chat
script, whose API rejects the local preview origin; production chat is unchanged.

Deployment, commit and push remain separate operations after content review.
