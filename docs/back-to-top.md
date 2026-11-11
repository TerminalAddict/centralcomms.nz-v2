# Back-to-top control

`src/components/BackToTop.astro` is rendered once by the shared footer. Every
Astro page using `Layout.astro` receives it, including service pages, legal
pages, notifications, updates, individual posts and 404. Standalone files under
`public/assets/`, such as email-signature templates, are not website pages and
do not receive site navigation.

## Behaviour

- The labelled control is fixed at the lower left, with a stable 152 x 48 pixel
  footprint at the default root font size, a visible focus outline and mobile
  safe-area spacing. Hover/focus do not change its size or move the layout.
  Footer padding reserves space below the legal links so neither the control
  nor an open staff toolbar covers them.
- With JavaScript, it appears after 300 pixels of scrolling, or halfway through
  the available scroll range on a shorter page. It hides near the top, except
  while it still has keyboard focus, and stays hidden on non-scrolling pages.
- Activation moves focus to the `page-top` body target, then scrolls to the top
  without changing the URL or adding a history entry. The next Tab can resume
  at the main navigation rather than returning to the footer.
- Scrolling is smooth unless the visitor requests reduced motion. The shared
  reduced-motion CSS also makes ordinary in-page anchor navigation immediate.
- Without JavaScript, the same visible link works natively through `#page-top`.
  Modified clicks retain the browser's normal link behaviour.
- Native dialogs, the Updates login/editor overlays and the mobile menu hide
  the control while open. The control remains below navigation/overlay layers.
- On update posts, the control moves above the fixed staff toolbar when it is
  shown. The Notifications toolbar is in normal flow and does not add an offset.

Visibility uses a passive scroll listener. Mutation observers watch only the
existing menu/dialog/toolbar elements, and a resize observer tracks toolbar
height. `pageshow` restores the correct state on history navigation. There are
no timers, network requests, external dependencies or inline event handlers.

## Maintenance and checks

Keep the `page-top` ID and `tabindex="-1"` on the shared layout's body. Keep the
button in the shared footer rather than copying it into individual pages.
New static dialogs should use native `dialog` or `role="dialog"` together with
`aria-modal="true"` so the control observes their visibility automatically.

After building:

```sh
npm run build
node scripts/check-back-to-top.mjs
node scripts/check-content-heroes.mjs
git diff --check
```

The regression check parses every built website page, excluding assets, and
checks one labelled link, one focusable top target, the decorative icon and
the working no-JavaScript markup. Future generated pages are included without
maintaining a fixed route list.

Browser checks should cover desktop, narrow mobile, landscape, short pages,
keyboard activation/focus, reduced motion, no-JavaScript navigation, scroll
restoration, hover stability, mobile menus, native dialogs and staff overlays.
Use mocked PHP responses for staff checks; never create real updates or send
support requests during verification. Third-party chat should remain unchanged.

## Verification

Verified on 12 November 2026:

- Production build and markup regression passed for all 43 generated pages;
  the existing content-hero regression passed for its 31 pages.
- Chromium passed scroll-to-top, focus and footer-clearance checks on every
  page at 1440 x 900 and 390 x 844. Firefox and WebKit passed representative
  pages at both sizes. All three also passed 320-pixel and landscape checks.
- Keyboard activation, focus retention, reduced-motion changes, stable sizing,
  mobile menus, native dialogs, CMS overlay visibility and fixed/inline staff
  toolbars passed in all three engines. The new control had no axe WCAG A/AA
  violations, and the native link worked with JavaScript disabled.
- PHP responses, chat, reCAPTCHA and embedded YouTube requests were mocked;
  no production content was changed. Live third-party widget placement was not
  part of these checks.

Nu HTML validation found no new errors. Existing errors remain: the 404 page
skips from its `h1` to a footer `h3`, and two body images in
`updates/is-10gb-networking-worth-it-for-your-business.html` lack `alt` text.
