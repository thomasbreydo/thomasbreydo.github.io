# AGENTS.md

## Purpose
Operational guidance for AI agents and contributors working on this repository.

## Stack and Build Basics
- Static site generator: Jekyll (`jekyll` ~3.9).
- Runtime: Ruby `2.7.2` (see `.ruby-version`).
- Output directory: `docs/` (configured via `_config.yml` with `destination: ./docs`).

## Where to Edit
- Primary source files:
  - Content: `_pages/`, `_posts/`
  - Templates: `_layouts/`, `_includes/`
  - Data/config: `_data/`, `_config.yml`, `index.html`
- Generated artifacts:
  - `docs/` is generated site output and committed.
  - Prefer editing source files first, then rebuild.
  - Direct `docs/` edits are acceptable for small, objective hotfixes when needed.

## Common Commands
- Install deps:
  - `bundle install`
- Local serve:
  - `./_serve.sh`
- Incremental build:
  - `./_build.sh`
- Full rebuild (preferred before finalizing):
  - `./_build_from_scratch.sh`

## Environment Notes
- `_build.sh` and `_build_from_scratch.sh` use `rbenv`.
- `_serve.sh` uses `chruby`.
- If one manager is unavailable, run equivalent raw commands:
  - `bundle install`
  - `bundle exec jekyll build` or `bundle exec jekyll serve`

## Validation Checklist
1. Run `./_build_from_scratch.sh`.
2. Confirm build completes without errors.
3. Verify changed pages in `docs/` reflect source updates.
4. Re-check links/redirects touched by the change.

## Change Policy for Content
- Apply objective fixes directly (broken links, outdated factual metadata, insecure URL upgrades to HTTPS when valid).
- Do not do broad stylistic copy rewrites unless explicitly requested.
