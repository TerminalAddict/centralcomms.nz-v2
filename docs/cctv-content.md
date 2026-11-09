# CCTV content and search metadata

The service page is `src/pages/cctv.astro`, built to `/cctv.html`. It covers
Hamilton/Waikato CCTV design, installation and maintenance; six example use
cases; Nx Witness features and comparisons; SADPTools and NX Camera Info;
installation, licensing and privacy considerations; customer testimonials;
and 16 FAQs. It follows the established VoIP page layout without numbered cards.

## Content ownership and schema

- `src/data/cctv.ts` contains use cases, feature analysis, licence identifiers
  and FAQ answers. One FAQ array generates both visible native `<details>` and
  `FAQPage` JSON-LD. Change answers there, not in a second schema copy.
- `src/data/cctv-testimonials.ts` holds the existing TeTauru Pihama, Jordon
  Elliott and Peter Billingham testimonials, shared with the home page. Their
  original wording is preserved, including spelling. Jordon and Peter discuss
  CCTV; TeTauru discusses the wider support relationship. None is presented as
  an endorsement of Nx Witness or the apps. Do not add fabricated review stars.
- The six use cases are explicitly examples, not invented customer projects.
  The freezer project is drawn from the existing `/updates/freezer-cctv.html`
  article: a local meat works, analogue-to-IP upgrade, a freezer reaching
  -40 C, cameras rated to -40 C and cable to -50 C. Do not infer a client name,
  VMS brand, measurable outcome or current service contract from that post.
- Page schemas include `Service`, `WebPage`, `BreadcrumbList` and `FAQPage`.
  The service provider and company credentials refer to the layout's existing
  `https://www.centralcomms.nz/#business` entity. This replaces the previous
  separate `#security-business` entity. Credential `recognizedBy` identifies
  the PSPLA; do not restore the unsupported `issuingBody` property.
- The WebPage mentions the three software applications using their official
  URLs. This is descriptive schema, not an offer or a claim of software rich
  result eligibility. No invented app ratings or prices are supplied.
- The existing Layout props provide the canonical URL, description, Open Graph
  and Twitter metadata, with the local 1200 x 630 image and descriptive alt text.
  No shared layout or global styling change is needed.
- All content and FAQ answers are rendered at build time. FAQs work without
  JavaScript. External anchors use `target="_blank" rel="noopener noreferrer"`.
  Public competitor comparisons intentionally have no outbound competitor links;
  the source links below are for internal maintenance.
- The existing `.html` sitemap and permissive `robots.txt` cover this page.
  There is no crawler-only text, hidden keyword block or special AI markup.

Good content, internal links, accessible HTML and consistent metadata support
discovery, not a guarantee of indexing, ranking or ChatGPT/Claude recommendations.
FAQ schema describes the visible answers. Google discontinued FAQ rich results
in 2026; retaining this semantic markup is not a promise of an enhanced search
listing. Review Google's current guidance before making search performance claims.

## Licence correction

`public/assets/images/pspla-license-2026.png` shows Central Communications Ltd's
**company licence 26-136711**, with Security Consultant and Security Technician
classes and an expiry of 19 February 2031. The new local WebP is derived from
that certificate at its full 1042 x 724 resolution. The old CCTV text and schema
used `26-136741`; the page now uses the certificate's company number consistently.

The About page lists **26-136741 against Paul Willard**, which is a separate
individual-licence claim and is intentionally unchanged. Do not globally replace
one number with the other. NZBN `9429050077809` is retained from the business's
existing supplied details. Recheck the certificate and identifiers on renewal.

## Claim boundaries

### Nx Witness

- It is a commercially licensed VMS, not a free open-source recording system.
  The desktop client is open source; APIs and development tools are available.
- Licensing and feature availability depend on edition and region. Do not
  promise universal perpetual licences, free lifetime upgrades or fixed prices.
- Supported cameras and functions must be checked by model, firmware, codec and
  integration. ONVIF does not guarantee identical audio, events, PTZ or analytics.
- Failover needs another configured server, capacity and camera connectivity.
  It is not archive backup or a zero-downtime guarantee. Remote cloud connectivity
  does not establish that recorded footage is stored in the cloud.
- Comparisons are conditional recommendations. XProtect also has an open
  platform, scalable architecture and failover options; UniFi Protect supports
  third-party ONVIF cameras with varying feature availability. Do not claim
  exclusivity for those features or unsupported performance/cost advantages.

### SADPTools and NX Camera Info

Paul Willard is the author of both independent applications. Product descriptions
were checked against their public sites and their local project documentation.
They are not official Hikvision or Network Optix applications.

- SADPTools is free and provides supported discovery, configuration, diagnostics
  and site documentation. Network segment, device, firmware and permissions
  matter. Supported probes and Live View are not universal health guarantees.
  Windows, Linux and macOS packages exist; do not infer equivalent field testing
  on every platform from package availability.
- SADPTools supports saved site information, protected credentials, encrypted
  transfer and compatible NX Camera Info JSON imports. It is not a VMS replacement
  or an unrestricted recovery tool.
- NX Camera Info Free browses local supported database/backup inventories.
  Pro adds supported stored camera credential recovery, exports, wider reports
  and authorised server/Nx Cloud backup connections. Do not move paid capabilities
  into the free tier in the copy. Link to current pricing rather than hardcoding it.
- NX Camera Info reads a saved snapshot; local inspection is read-only. It does
  not report live camera health, recover recorded video or Nx user passwords,
  reset cameras, restore a server or bypass access controls. Saved camera
  credentials may be stale or absent.
- The combined handover workflow is an example, not a guarantee. Compare saved
  information with actual equipment and protect databases, credentials and
  reports. Screenshots use demonstration data, never customer backups or secrets.

## Sources

Reviewed 10 November 2026. Recheck current documentation when editing features,
licensing, platforms or comparisons. Product descriptions support the underlying
capabilities; the suitability assessments are Central Communications' conditional
recommendations, not measured competitor benchmarks.

- [Network Optix Nx Witness](https://www.networkoptix.com/nx-witness)
- [Nx Witness architecture, clients and open-source desktop client](https://www.networkoptix.com/nx-witness/how-it-works)
- [Nx Witness editions and licensing FAQ](https://www.networkoptix.com/nx-witness/faq)
- [Nx motion search](https://resources.vmsproxy.com/nx_vms_help/motion_tab.html)
- [Nx failover configuration and capacity requirements](https://resources.vmsproxy.com/nx_vms_help/configuring_failover.html)
- [Nx automatic camera failover](https://support.networkoptix.com/hc/en-us/articles/216113287-Automatic-Camera-Failover)
- [Nx storage management](https://support.networkoptix.com/hc/en-us/articles/205501378-How-does-Nx-Witness-manage-storage)
- [Milestone XProtect architecture](https://doc.milestonesys.com/xprotect/xprotect-system-architecture-guide/2026r1/en/overall-system-architecture)
- [UniFi Protect third-party cameras](https://help.ui.com/hc/en-us/articles/26301104828439-Third-Party-Cameras-in-UniFi-Protect)
- [SADPTools features](https://sadptools.com/features.html)
- [NX Camera Info features](https://nx-camera-info.com/features)
- [NX Camera Info editions and pricing](https://nx-camera-info.com/pricing)
- [Ministry of Justice: work covered by security licensing](https://www.justice.govt.nz/tribunals/licences-certificates/pspla/apply-or-renew/who-needs-a-licence-or-certificate/work-you-need-a-licence-or-certificate-for/)
- [Privacy Commissioner: CCTV guidance](https://www.privacy.org.nz/resources-and-learning/a-z-topics/privacy-and-cctv/)
- [Google: AI features and website owners](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQ rich result retirement](https://developers.google.com/search/updates#june-2026)

## Local images

New assets live in `public/assets/images/cctv/`. All rendered images, including
brand logos and existing customer portraits, are local. Downloaded product
material was converted to WebP with Sharp at quality 86, without enlargement;
the certificate uses quality 90.

| File | Dimensions | Origin |
| --- | --- | --- |
| `cctv-installations-hero.webp` | 2022 x 778 | AI-assisted montage based on the owner's `tmp/20220616_144056.jpg` and `tmp/20260911_160245.jpg` |
| `nx-witness.webp` | 1160 x 1120 | [Network Optix product illustration](https://www.networkoptix.com/hubfs/nxw-how-clean.png) |
| `sadptools.webp` | 1400 x 856 | [SADPTools public demonstration screenshot](https://sadptools.com/assets/app-light.png) |
| `nx-camera-info.webp` | 1240 x 800 | [NX Camera Info public Pro demonstration screenshot](https://nx-camera-info.com/images/camera-inventory.png) |
| `pspla-company-licence.webp` | 1042 x 724 | Existing `public/assets/images/pspla-license-2026.png` |
| `central-comms-cctv-installations-og.png` | 1200 x 630 | Local composition using the installation montage and existing CCL logo |

The hero now uses the owner's photographs: the work vehicle outside a school
on the left, and a technician beneath a CCTV camera on the right. The built-in
image-generation tool composed them into a wide montage, converted to WebP
with Sharp at quality 86. This is an AI-assisted composition, not an unaltered
documentary photograph or evidence that both jobs took place together. The
prompt requested faithful people, equipment and branding; generative processing
can still change fine details. Use the originals for evidentiary or technical
purposes. The full prompt is stored in `scripts/cctv-hero-prompt.txt`.

Original files in `public/assets/images/tmp/` are unchanged. The page's
`object-position: 86% top` keeps the installation on screen when the image is
cropped on mobile. Check both the technician and camera at each breakpoint.
The earlier stock `cctv-hero.webp` and `central-comms-cctv-og.png` are retained
but no longer referenced. The stock source was
[Ibrahim Rifath on Unsplash](https://unsplash.com/photos/white-security-camera-on-white-wall-sICgZpL1os0).
Supplier artwork remains its owner's material. App captions identify
demonstration data; they must not be relabelled as customer sites.

The sharing-image source is `scripts/cctv-social-image.html`. It is not deployed
as a public page or included in the sitemap. Regenerate with Playwright installed:

```bash
npx playwright screenshot --viewport-size="1200,630" --wait-for-timeout=1000 \
  "file://$PWD/scripts/cctv-social-image.html" \
  public/assets/images/cctv/central-comms-cctv-installations-og.png
```

Edit assets in `public/`, never generated `dist/`. After an image has been
deployed, use a new filename when replacing it because production images have
long-lived immutable cache headers.

## Verification

1. Run `npm run build`. Validate `dist/cctv.html` and confirm all 16 answers are
   present without JavaScript, match `FAQPage`, and expand with the keyboard.
2. Parse every JSON-LD block. Check the service, publisher and credentials use
   the existing business `@id`; check the company number against the certificate.
3. Check the production canonical, description, local sharing image and its
   1200 x 630 dimensions. Confirm the sitemap includes `/cctv.html` and robots
   allows it. Software mentions do not require invented offers or ratings.
4. Check all internal routes and fragment links, local image loading, new-tab
   attributes on external anchors, and unchanged shared home-page testimonials.
5. Inspect desktop, tablet and 320/390px mobile layouts. Only the feature table
   should scroll horizontally; the page itself must not overflow. Check heading
   order, readable contrast, focus indicators and image sizing.
6. Deployment is separate. After deploying, verify the live page, images, sitemap
   and crawler access, and monitor Search Console. A local build cannot prove
   production indexing or AI recommendations.
