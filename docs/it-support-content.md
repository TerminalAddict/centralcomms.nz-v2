# IT support content and search metadata

`src/pages/it-support.astro` builds to the existing `/it-support.html` URL.
It covers Hamilton/Waikato business IT support, six example customer needs,
practical benefits, Paul Willard's experience and qualifications, five support
options, hardware, servers/private cloud, existing customer feedback, two
project examples and 18 FAQs.

## Content ownership

- `src/data/it-support.ts` holds use cases, support options, qualifications and
  FAQ answers. The same FAQ array generates visible native disclosures and
  `FAQPage` JSON-LD. The same credential array generates the visible list and
  Paul's `Person.hasCredential` records. Change those sources, not the generated
  HTML in `dist/`.
- The four Legrand, MikroTik and Ubiquiti records are also consumed by
  `src/data/wireless.ts` for the Enterprise WiFi page's qualification list,
  qualification FAQ and Person schema. Check both pages after credential edits.
- Paul's career progression, approximately three decades of telecommunications
  experience and April 2022 management start come from the existing About page.
  The company was established in 1989; that is not Paul's start date.
- Qualification names, years and personal approval details were supplied by the
  business owner on 10 November 2026. Public course/provider links establish
  the nature of the training, not independent verification of Paul's attendance
  or certificate ownership. Retain evidence for procurement enquiries.
- Paul's personal PSPLA Certificate of Approval is `26-136741`, expiring
  **12 February 2031**. `paulApproval` is the single source for this page's
  qualification list, FAQs and metadata. It is separate from the company's
  `26-136711` licence on the CCTV page. Do not transfer company expiry dates,
  licence classes or powers to the personal record. PSPLA approval is not an
  IT/cybersecurity certification.
- Legrand Certified Network Installer is recorded as achieved in 2023.
  MikroTik MTCNA and Ubiquiti UEWA/UBWA are dated 2018 achievements, not a claim
  of current renewal. MikroTik's published three-year validity makes that
  distinction particularly important. Confirm current status before changing
  the wording for a tender or adding renewed dates.
- MBA (2010) and PgDipBus (2009) are owner-supplied. No awarding institution or
  exact award date has been inferred. IBM AIX System Administration AN12G is
  described as training, not an IBM professional certification. No year was
  supplied for AN12G and none is invented in the copy or metadata.
- The use cases are possible customer needs, not invented client deployments.
  Existing service copy supports hardware, repairs, servers, private cloud and
  remote hands. HelpWire is the current workflow on `/support.html`. Do not
  infer universal response-time guarantees, included monitoring/backups,
  unlimited support or free labour from these services.
- Ian McMichael and Jason Brand's existing quotes are shared unchanged with the
  home page through `src/data/it-support-testimonials.ts`. Aaron Keppler's quote
  comes from the existing `src/data/voip-testimonials.ts`. Do not add ratings,
  endorsements of a specific product or new customer outcomes to these quotes.
- The Wanna Internet and virtual-hosting examples link to the existing
  `/updates/wanna-internet.html` and `/updates/virtual-hosting.html` posts. The
  latter describes a Proxmox cluster in 2019, not a promise of today's hosting
  architecture, capacity or service-level agreement.

## Search and sharing

- The shared layout provides canonical, title, description, Open Graph and
  Twitter metadata. The page has its own local 1200 x 630 sharing image and
  descriptive image metadata.
- Page-specific JSON-LD includes `Service`, `Person`, `WebPage`,
  `BreadcrumbList` and `FAQPage`. Service provider, employer and publisher
  references reuse the layout's `https://www.centralcomms.nz/#business` entity.
- Paul's entity is `/it-support.html#paul-willard`, matching the visible
  profile section. Credentials belong to him, not to the business. Category,
  description, identifier, `recognizedBy` and approval expiry reflect the
  visible records. Degree issuers and unprovided award dates are omitted.
- All substantive content and FAQ answers are build-time HTML. Native FAQ
  disclosures work without JavaScript. Existing service navigation, related
  project links, sitemap and robots file provide discovery paths.
- External links use `target="_blank" rel="noopener noreferrer"`, without
  visible new-tab annotations. All page images are hosted locally.
- Useful content and structured metadata support discovery, not guaranteed
  rankings, AI recommendations or rich results. FAQ markup describes visible
  answers for consumers of Schema.org; Google retired FAQ rich results in May
  2026. No self-serving review-rating schema is added. Google's AI search
  guidance emphasises accessible text, internal links and accurate structured
  data, without requiring special AI markup or text files.

## Local media

The owner's original `public/assets/images/tmp/20260417_141322.jpg` is a
4000 x 1848 workstation photograph. It is unchanged. Published derivatives
live in `public/assets/images/it-support/`, not in the temporary upload folder:

| File | Dimensions | Source / purpose |
| --- | --- | --- |
| `it-support-workstation-hero.webp` | 2048 x 946 | Owner's workstation photo, desktop hero |
| `it-support-workstation-hero-960.webp` | 960 x 444 | Same photo, responsive hero source |
| `paul-willard.webp` | 640 x 640 | Existing `people/PaulWillard-May2022.jpg` portrait |
| `central-comms-it-support-og.png` | 1200 x 630 | Dedicated branded social/share image |

WebP derivatives use Sharp auto-orientation, proportional resize without
enlargement and quality 86. The responsive hero declares its dimensions and
high fetch priority; the portrait and existing local testimonial images load
lazily. No AI edits or remote image URLs are used.

The social composition is `scripts/it-support-social-image.html`. It references
only the local hero derivative and existing brand SVG. To regenerate, open that
file in a browser at 1200 x 630 with device scale factor 1, wait for all images
to decode, then capture the viewport as
`public/assets/images/it-support/central-comms-it-support-og.png`.
If changing a published asset later, use a new filename or handle cache
invalidation: production image responses are cached for one year.

## Research references

Primary references checked on 10 November 2026:

- [PSPLA: who needs a licence or certificate](https://www.justice.govt.nz/tribunals/licences-certificates/pspla/apply-or-renew/who-needs-a-licence-or-certificate/)
- [Legrand New Zealand](https://www.legrand.co.nz/) (owner-provided provider link;
  the site blocked automated access, so no additional qualification claims were
  taken from it)
- [MikroTik training and certification](https://mikrotik.com/training/about)
- [Ubiquiti UEWA training guide](https://dl.ui.com/guides/training/courses/UEWA_Training_Guide_V2.1.pdf)
- [Ubiquiti UBWA training guide](https://dl.ui.com/guides/training/courses/UBWA_Training_Guide.pdf)
- [IBM AN12G course overview](https://www.ibm.com/training/badge/mastering-ibm-aix-implementation-and-administration)
- [NCSC: implement and test backups](https://www.ncsc.govt.nz/protect-your-organisation/implement-and-test-backups/)
- [NCSC: multi-factor authentication](https://www.ncsc.govt.nz/protect-your-organisation/multi-factor-authentication-and-verification/)
- [Schema.org: EducationalOccupationalCredential](https://schema.org/EducationalOccupationalCredential)
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQ rich-result retirement](https://developers.google.com/search/updates#may-2026)

Recheck course names, validity rules and official links when updating this
section. Keep the published historical names where those match the credential
actually earned.

## Verification and maintenance

After changes:

1. Run `npm run build` and `git diff --check`. Review any CMS normalisation
   changes rather than silently overwriting live content.
2. Validate built `dist/it-support.html` and `dist/index.html` with Nu HTML
   Checker, including heading order.
3. Parse every JSON-LD script. Compare all 18 FAQ answers and eight qualification
   records with the visible HTML; check the personal approval number/expiry and
   references to the existing business entity.
4. Check canonical, sitemap entry, Open Graph/Twitter image and 1200 x 630
   dimensions. Verify internal links and anchors, local image loading and
   external-link security attributes.
5. Test desktop, tablet and narrow mobile widths for overflow, image crops,
   readable content and keyboard access. Open/close native FAQs with JavaScript
   disabled; check automated accessibility. Qualification entries should stack
   on small screens, with every credential, record and benefit visible without
   horizontal scrolling.
6. Ensure shared testimonials still match the homepage. Reconfirm approval
   status before expiry, vendor renewals, service scope and customer permission
   when those records change.

Build output is generated, not the editing source. Deployment, commit and push
remain separate operations requiring the owner's instruction.

Verification completed on 10 November 2026: production build (43 pages), Nu
HTML validation for the IT support and home pages, FAQ/credential JSON-LD parity,
canonical/social metadata and local image checks, all internal links/anchors,
external-link attributes and unchanged shared testimonials. Chromium layout
checks passed at 1440 x 900, 1920 x 1080, 2560 x 720, 768 x 1024, 390 x 844 and
320 x 568, with no page overflow or page-script errors. Axe WCAG A/AA checks of
the main content passed on desktop and mobile. Native FAQ keyboard interaction
also passed with JavaScript disabled in Chromium, Firefox and WebKit. These
checks do not establish Google indexing or recommendations by an AI service.
