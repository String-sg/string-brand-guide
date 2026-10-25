# String UI Consumers

Reports, ghostleek/string-id and String-sg/str-skills pin the identical 0.1.0 release
candidate under vendor/ with lockfile integrity. Static components support React18/19;
interactive components have a client entrypoint. No auth/data code is shared.

The initial tarball is reviewable without an npm registry or a coordinated deployment.
After the package changes merge, tag ui-vX.Y.Z matching packages/ui/package.json to build
an immutable release. Do not overwrite an existing tag or archive.

Release and consumer-update workflows are prepared, not activated in this task. Cross-repo
updates require the existing UI_CONSUMER_TOKEN credential with access to these three repos.
No credential was created, read or configured here. The update script can run locally with
existing gh authentication instead: omit --open-prs to prepare a local diff only.

Update PRs pin the archive plus lockfile and rely on consumer CI/review before merging.
No automatic production merge or force-upgrade is configured. A missing credential fails
explicitly; it is not treated as a successful update. Each deployed app remains independent.
