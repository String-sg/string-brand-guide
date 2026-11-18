# String UI

Framework-neutral shared String components. React 18/19 are peer dependencies; scoped CSS
works alongside Tailwind 3/4. Import @string-sg/ui/styles.css once in each app. Import static
components from @string-sg/ui and interactive Select/Tabs from @string-sg/ui/client.
Apps own links, account actions, font loading and metric definitions. Header children are
rendered directly, allowing existing accessible mobile navigation to remain in the host.
Report dark surfaces use the explicit dark theme; light apps retain their existing theme.

Build with npm ci && npm run build. Pack with npm pack. Initial consumer changes vendor the
same immutable 0.1.0 tarball for review before the first upstream release. Future releases
must replace the vendored tarball and lockfile together; never load mutable runtime code.
