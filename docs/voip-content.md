# VoIP content and search metadata

The service page is authored in `src/pages/voip.astro` and built to `/voip.html`.
It focuses on Hamilton/Waikato Cloud PBX subscriptions and support, six example business use
cases, Yeastar P-Series capabilities, Linkus, product comparisons, deployment,
migration and 14 FAQs. Example configurations are not presented as customer case
studies. The separate J Swap business case uses customer facts supplied by
the business owner: 180 extensions across multiple sites, with two redundant
dedicated PBX appliances configured for failover. J Swap chose hardware appliances
to keep phone-system hosting separate from corporate IT and hypervisor hosting.
The case contrasts that choice with a Software PBX hosted on an organisation's
own server infrastructure. Do not infer an appliance model, vendor, detailed
failover topology, uptime guarantee or customer quotation from those details.
Hosting separation does not establish that network or power infrastructure is
also independent.

Cloud subscriptions are the main offering. Onsite PBX is positioned for very
large organisations with more than 200 extensions or specific multi-site and
redundancy needs; this is a target audience, not a technical minimum. Software
PBX is aimed at organisations with their own system administration team and
extensive onsite server infrastructure.

The business owner confirmed that Linkus is free to use with a CCL Cloud PBX
subscription, with no extra app charge from CCL. Keep that statement explicit in
the Linkus section and FAQ, without implying the subscription, phone calls or
mobile data are free, or extending the offer to other providers' services.

## Editing and structured data

- `src/data/voip.ts` holds use cases, feature analysis and FAQ content. The same
  FAQ array produces the visible native `<details>` elements and `FAQPage`
  JSON-LD. Edit answers there, not in a second schema copy.
- `src/data/voip-testimonials.ts` contains the existing Sophia Donnelly, Aaron
  Keppler and Ross Brewer quotes. The home and VoIP pages share those objects,
  keeping their wording in sync. At the business owner's request, the CST Group
  quote now begins "We have been using Paul from Central Communications".
  These are testimonials about Central Communications,
  not claims that the customers use or endorse a particular Yeastar product.
- Page-specific `Service`, `WebPage`, `BreadcrumbList` and `FAQPage` schemas are
  supplied through the existing layout's `extraSchema` prop. The service refers
  to the existing `/#business` entity rather than inventing another business.
- Canonical, Open Graph and Twitter URLs use the production origin from
  `astro.config.mjs`. The VoIP image is 1200 x 630 with dedicated alt text. The
  shared layout's optional `imageAlt` prop falls back to the page title elsewhere.
- Content is rendered at build time, including collapsed FAQ answers. No client
  JavaScript is needed to read the page or expand FAQs. External links in the
  page open in a new tab using `target="_blank" rel="noopener noreferrer"`.
  The 3CX and Teams comparisons intentionally use plain text, without outbound
  competitor links. Their source links below are for internal maintenance only.
- `public/robots.txt` allows crawling and advertises the generated sitemap.
  Sitemap URLs are serialised to the `.html` canonicals used by this file-format
  build (with the origin retained for the home page), rather than extensionless aliases.
  Robots rules are not access control; server-only files remain protected by
  server configuration. This change does not add any crawler-specific training
  policy.

Useful content, internal links and accessible HTML support discovery. They do
not guarantee Google rankings, indexing, FAQ rich results, or recommendations
from ChatGPT or Claude. No special AI schema or `llms.txt` is required for
Google's AI search features. Do not add invented review ratings or self-serving
review-star markup to the testimonials.

## Product sources

Reviewed 10 November 2026. Recheck these before changing product claims or
quoting plans/prices. Comparisons are our conditional assessment, not a claim
that one vendor wins for every business.

- [Yeastar P-Series editions and feature matrix](https://www.yeastar.com/p-series-pbx-system/)
- [Linkus client overview](https://www.yeastar.com/unified-communications/linkus-softphone/)
- [Linkus mobile](https://www.yeastar.com/linkus-softphone/mobile/)
- [Linkus desktop](https://www.yeastar.com/linkus-softphone/desktop)
- [P-Series Cloud Call Flip requirements](https://help.yeastar.com/en/p-series-cloud-edition/administrator-guide/call-flip-overview.html)
- [Supported SIP phone provisioning](https://www.yeastar.com/voip-phone-system-feature/auto-provisioning/)
- [CRM integrations](https://www.yeastar.com/solution/crm-integration/)
- [3CX pricing model](https://www.3cx.com/ordering/pricing/)
- [Microsoft Teams Phone licensing and PSTN connectivity](https://learn.microsoft.com/en-us/microsoftteams/teams-phone-licensing)
- [Google guidance for AI features and website owners](https://developers.google.com/search/docs/appearance/ai-features)

Keep plan/edition caveats. In particular, do not imply every CRM connector,
advanced queue feature or remote access capability is included in every plan;
that a Linkus download is the entire paid service; or that 3CX pricing is simply
per user. Connectivity and backup paths must be assessed, not guaranteed.

## Local assets

The hero uses the supplied `public/assets/images/paul on the phone.webp`
(3392 x 1908), with a right-aligned crop to keep Paul visible on narrow screens.
The photo is used as supplied, without modification. Product illustrations and
the social image are hosted under `public/assets/images/voip/`, with no remote
image URLs in the rendered page. Supplier illustrations were downloaded from
Yeastar and converted to WebP with Sharp (quality 84, no enlargement):

| Local file | Dimensions | Supplier source |
| --- | --- | --- |
| `linkus.webp` | 1100 x 387 | [Linkus clients illustration](https://www.yeastar.com/wp-content/uploads/2023/10/linkus-uc-clients-img.png) |
| `p-series.webp` | 923 x 922 | [P-Series overview](https://www.yeastar.com/wp-content/uploads/2024/04/p-series-features-img-2.png) |
| `central-comms-voip-og.png` | 1200 x 630 | Local composition using the existing CCL logo and the Linkus illustration above |

Supplier graphics remain Yeastar's material, not photographs of Central
Communications installations. Brand logos and customer portraits reuse existing
local assets. The page includes supplier links adjacent to the product material.

The social-image source is `scripts/voip-social-image.html`; it is not a public
page and is not included in the sitemap. To regenerate with Playwright installed:

```bash
npx playwright screenshot --viewport-size="1200,630" --wait-for-timeout=1000 \
  "file://$PWD/scripts/voip-social-image.html" \
  public/assets/images/voip/central-comms-voip-og.png
```

Keep asset changes in `public/`, not generated `dist/`. If replacing an image
after deployment, change its filename and references because production sends
long-lived immutable image cache headers.

## Verification checklist

1. Run `npm run build`; inspect `dist/voip.html` and confirm the copy and all 14
   FAQ answers exist without running scripts.
2. Parse each JSON-LD block. Confirm visible questions/answers match `FAQPage`,
   and that the service provider resolves to the layout's business `@id`.
3. Confirm the canonical is `https://www.centralcomms.nz/voip.html`, both social
   image tags use the local PNG, and `dist/sitemap-0.xml` contains the page. Check
   all sitemap entries against the corresponding built page canonicals after
   changing the Astro sitemap configuration.
4. Check all images load locally, the OG image is 1200 x 630, external links have
   the new-tab attributes, and internal links/section anchors resolve.
5. Check desktop and 320/390px mobile layouts for page overflow. The feature
   table is intentionally independently scrollable on narrow screens. Test FAQ
   expansion with both the keyboard and JavaScript disabled.
6. After a separate deployment, confirm the live page, image, sitemap and
   `robots.txt` return successfully. Production crawler access and search
   indexing cannot be proven from a local build; monitor Search Console.
