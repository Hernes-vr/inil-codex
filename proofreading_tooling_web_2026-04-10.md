# Web Proofreading Tooling

Static HTML reader pages use `textlint` with the HTML plugin.

## Commands

```bash
npm install
npm run lint:prose
npm run lint:prose:changed
```

Install repo-local git hooks:

```bash
npm run hooks:install
npm run hooks:doctor
```

## Scope

- `index.html`
- `novel/index.html`

The rules are intentionally light.

- duplicated conjunctions
- Unicode normalization
- zero-width and invalid control characters

The goal is to catch obvious prose regressions in landing copy, not to force fiction-style rewrites of UI copy.
