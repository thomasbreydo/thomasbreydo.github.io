# Settle-In Backlog

This document tracks follow-up work discovered during the settle-in pass.

## Completed In This Pass
- Built site successfully with `./_build_from_scratch.sh`.
- Added `AGENTS.md` for repo-specific agent/contributor guidance.
- Fixed broken internal About link pointing to `/_backup_projects/projects/`.
- Replaced dead `/tgen` external redirect (`pythonanywhere`) with `/`.
- Updated hidden link on `happy-bday-max-2023` to `/tgen` (no dead external target).

## Ranked Priorities

### P0 - Build Reliability / Toolchain Drift
1. Upgrade Bundler to match lockfile creator version (`2.2.15`) or refresh lockfile with current standard.
2. Plan Ruby upgrade path from `2.7.2` (EOL) to a supported version compatible with GitHub Pages/Jekyll constraints.
3. Resolve legacy Sass stack (`sass`/Ruby Sass EOL warning) with a modern supported alternative.

### P1 - Content Accuracy (Objective, likely stale)
4. Confirm and update profile metadata that currently says "CS student at Stanford" in:
   - `_data/settings.yml`
   - `index.html`
   - `_pages/about.md`

### P2 - Link / Redirect Health Monitoring
5. Keep `/tgen` redirect destination under review and replace `/` fallback with a project-specific destination if available.
6. Re-verify third-party redirect targets quarterly:
   - `/bomb` -> external GitHub Pages site
   - `/xam`, `/rosamenu` -> Google Drive files
   - `/in` (LinkedIn may return anti-bot status codes to scripted checks)

### P3 - Low Impact Maintenance
7. Triage internal todo from `_README.md` ("resume shouldn't have accent marks").
8. Normalize local script tooling (`chruby` vs `rbenv`) across `_serve.sh` and `_build*.sh`.
9. Clean low-value ignore/config leftovers (for example `/node_modules` in `.gitignore` if intentionally unused).

## Optional Tightening Ideas (Documented Only - Not Applied)
- Make bio wording consistent ("software engineer" vs "software developer").
- Review whether Medium icon/link should remain if not actively used.
- Decide whether non-professional/joke pages should be hidden from crawl/navigation.
- Replace repetitive About wording with a shorter modern profile summary.
- Add a short maintenance cadence note (for example, quarterly link check).
