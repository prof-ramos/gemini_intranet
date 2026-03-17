# CLAUDE.md

This file provides guidance for AI assistants (Claude and others) working on this codebase.

## Project Overview

**gemini_intranet** is a Gemini-powered intranet application bootstrapped via [Google AI Studio](https://aistudio.google.com/apps).

## Current State

- **Status**: Active development
- **Stack**: Node.js + Express (backend), plain HTML/CSS (frontend)
- **E2E tests**: Playwright (Chromium + Firefox)
- **Origin**: Google AI Studio app template ("Built with AI Studio")
- **Branch model**: Feature branches prefixed `claude/` for AI-assisted work

## Repository Structure

```
gemini_intranet/
├── src/
│   ├── server.js        # Express server (entry point)
│   └── public/
│       └── index.html   # Intranet home page
├── tests/
│   └── e2e/
│       └── home.spec.js # Playwright E2E tests
├── .env.example         # Environment variable template
├── .gitignore
├── package.json
├── playwright.config.js # Playwright configuration
├── README.md
└── CLAUDE.md            # This file
```

## Git Conventions

### Branch Naming

- AI-assisted branches: `claude/<description>-<session-id>`
- Feature branches: `feature/<description>`
- Fix branches: `fix/<description>`

### Commit Messages

Use clear, imperative commit messages:

```
Add user authentication module
Fix broken API endpoint for /intranet/search
Update README with setup instructions
```

### Push Policy

- Never push directly to `main`/`master`
- Always push to feature branches and open a PR
- Use `git push -u origin <branch-name>` when setting upstream

## Development Setup

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in required values
3. `npm install`
4. `npm run dev` — starts server with `--watch` at http://localhost:3000

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | HTTP port (default: `3000`) |
| `GEMINI_API_KEY` | Google Gemini API key from AI Studio |
| `PROJECT_ID` | Google Cloud project ID (if using Vertex AI) |

Store secrets in `.env` (never commit this file). Provide `.env.example` with placeholder values.

## Working with Gemini / AI Studio

This project was bootstrapped via AI Studio. Key points:

- Gemini API calls typically use `@google/generative-ai` (JS) or `google-generativeai` (Python)
- AI Studio apps may use streaming responses — handle them appropriately
- Rate limits apply; implement retry logic with exponential backoff for production use
- Keep API keys server-side; never expose them to the client/browser

## Testing

E2E tests use **Playwright** against the live Express server.

```bash
npm run test:e2e          # run all tests (headless)
npm run test:e2e:ui       # interactive UI mode
npm run test:e2e:report   # open last HTML report
```

Playwright auto-starts the server via `webServer` in `playwright.config.js`.
All tests must pass before merging to `main`.

## Code Style

General guidelines:

- Keep functions small and single-purpose
- Use descriptive variable and function names
- Avoid committing debug/console output
- Handle errors explicitly — avoid silent failures

## AI Assistant Notes

- This is a greenfield project; prefer simple, minimal solutions over complex abstractions
- When adding the first real code, also update this CLAUDE.md to reflect the actual stack
- Do not commit `.env`, credentials, or API keys under any circumstances
- When uncertain about project direction, check open issues or ask the maintainer before proceeding
