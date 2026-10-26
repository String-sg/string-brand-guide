---
name: string-footer
description: Adopt or update the shared String product footer across String websites, including Astro, React and static HTML products. Use for String footer consistency and migrations.
---

# String footer

The source of truth is [String-sg/string-brand-guide/components/string-footer](https://github.com/String-sg/string-brand-guide/tree/main/components/string-footer). Read its README and inspect the target repository's instructions before editing.

The component uses String's mint logo, charcoal background, Montserrat body and Space Grotesk labels. Keep shared product, community, Code of Conduct, privacy, terms and repository source links consistent. Code of Conduct points to the public `https://id.string.sg/conduct` page; signing and access controls belong to String ID.

For the four supported products, run the reviewed branding checkout's script:

```sh
node components/string-footer/sync.mjs <landing|id|skills|bingo> /path/to/product
node components/string-footer/sync.mjs <landing|id|skills|bingo> /path/to/product --check
```

This vendors framework-native markup, shared CSS, the approved SVG and a version/digest manifest. It does not wire up a new React or Astro layout. Import `src/components/string-footer/StringFooter` once in the outer layout, after the main content. The landing site's existing `Footer.astro` delegates to the generated component. Static HTML pages use marked regions managed by the script.

Change shared markup and styles in the branding source, regenerate affected consumers, and review each diff. Avoid patching generated copies independently. When adding a new product, extend the explicit product map and preserve the product's source URL. Keep assets local; do not load a footer script from GitHub or add a publishing dependency solely for this component.

Keep game controls, authentication, attributions and product-specific integration links outside the shared footer. In Bingo, `.footer` is the game controls area used by authentication code; do not reuse it for the String footer. In String ID, preserve the conduct-signing gate and public conduct route.

Check mobile and desktop rendering, logo loading, one footer per page, no horizontal overflow, keyboard focus and link destinations. Exercise relevant routes and Bingo's creation page as well as home pages. Run the target repository's required checks. Open PRs when requested; adoption does not authorize merging or deployment.
