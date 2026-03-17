# CLAUDE.md

This file provides guidance for AI assistants (Claude and others) working on this codebase.

## Project Overview

**gemini_intranet** is a Gemini-powered intranet application bootstrapped via [Google AI Studio](https://aistudio.google.com/apps). The repository is in its initial state — no application code has been added yet beyond the placeholder README.

> When code is added, update this file to reflect the actual tech stack, structure, and conventions.

## Current State

- **Status**: Early initialization — only `README.md` exists
- **Origin**: Google AI Studio app template ("Built with AI Studio")
- **Branch model**: Feature branches prefixed `claude/` for AI-assisted work

## Repository Structure

```
gemini_intranet/
├── README.md        # Project banner and intro (AI Studio template)
└── CLAUDE.md        # This file
```

When the project grows, expected additions include:

```
gemini_intranet/
├── src/             # Application source code
├── tests/           # Test files
├── docs/            # Additional documentation
├── .env.example     # Environment variable template
├── package.json     # (if Node/JS) or pyproject.toml / requirements.txt (if Python)
└── ...
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

> This section should be updated once the tech stack is finalized.

Until then, the general steps will be:

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in required values
3. Install dependencies (e.g., `npm install` or `pip install -r requirements.txt`)
4. Run the development server

## Environment Variables

No environment variables are defined yet. When integrating with Gemini APIs, expect:

| Variable | Description |
|---|---|
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

> Update this section once a test framework is chosen.

Run tests with the appropriate command for your stack:

- **JavaScript/TypeScript**: `npm test` or `npx jest`
- **Python**: `pytest` or `python -m pytest`

All tests must pass before merging to `main`.

## Code Style

> Enforce with a linter/formatter once the stack is finalized.

General guidelines until then:

- Keep functions small and single-purpose
- Use descriptive variable and function names
- Avoid committing debug/console output
- Handle errors explicitly — avoid silent failures

## AI Assistant Notes

- This is a greenfield project; prefer simple, minimal solutions over complex abstractions
- When adding the first real code, also update this CLAUDE.md to reflect the actual stack
- Do not commit `.env`, credentials, or API keys under any circumstances
- When uncertain about project direction, check open issues or ask the maintainer before proceeding
