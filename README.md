# API-DNA 🔍

> The First API Fingerprint Verification Engine — Detect fake LLM models, token inflation, speed throttling, and relay chains.

[![Website](https://img.shields.io/badge/Website-api--dna.com-blue)](https://api-dna.com)
[![npm](https://img.shields.io/npm/v/api-dna)](https://www.npmjs.com/package/api-dna)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌐 Live

Visit **[api-dna.com](https://api-dna.com)** for free API verification — no signup required.

## 🔑 Features

- **Deep Scan** — 30+ automated checks with L0-L7 trust scoring
- **Provider Fingerprinting** — Identify 30+ LLM providers
- **Evidence Timeline** — See every anomaly detected
- **Token Inflation Detection** — Catch inflated token counts
- **Model Family Detection** — Verify the actual model being served
- **Relay Chain Detection** — Find middlemen in your API pipeline
- **Chrome Extension** — Verify APIs directly in your browser
- **CLI Tool** — `npx api-dna scan` for command-line verification

## 🚀 Quick Start

### Web (Free)

Visit [api-dna.com](https://api-dna.com) and enter your API endpoint.

### CLI

```bash
npx api-dna scan --url https://api.example.com/v1 --key sk-xxx
```

### Chrome Extension

Install from [GitHub](https://github.com/tehdarklea/api-dna-chrome-extension).

## 📊 Trust Levels

| Level | Confidence | Meaning |
|-------|-----------|---------|
| L0 | None | Completely untrusted |
| L1-L3 | Low | Basic checks passed |
| L4-L5 | Medium | Pattern matching confirmed |
| L6-L7 | High | Full verification passed |

## 📝 Blog

- [Best API Checker Tools in 2026](https://api-dna.com/blog/best-api-checker-tools)
- [How to Detect Fake API Providers](https://api-dna.com/blog/how-to-detect-fake-api)
- [OpenAI API Key Checker](https://api-dna.com/blog/openai-api-key-checker)
- [API Token Inflation Detector](https://api-dna.com/blog/api-token-inflation-detector)

## 🔗 Related Projects

- **[TokenC2C](https://tokenc2c.xyz)** — P2P marketplace for API computing power
- **[SKILL.COFFEE](https://skill.coffee)** — 4800+ AI agent skills marketplace
- **[API Provider Fingerprint Database](https://github.com/tehdarklea/api-provider-fingerprint-database)** — Open fingerprint reference

## 📄 License

MIT
