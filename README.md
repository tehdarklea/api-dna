# 🧬 API-DNA CLI

Free CLI tool to verify API providers — detect fake models, token inflation, and relay servers.

[![npm version](https://img.shields.io/npm/v/api-dna-checker.svg)](https://www.npmjs.com/package/api-dna-checker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## What It Does

API-DNA is the **DNA test for API providers**. It detects:

- 🔄 **Fake model substitution** — GPT-3.5 sold as GPT-4? We'll catch it.
- 💸 **Token count inflation** — Being charged for tokens you didn't use? We'll prove it.
- 🔀 **Relay/proxy servers** — Someone intercepting your API calls? We'll find them.
- 📝 **Hidden system prompts** — Provider injecting instructions? We'll expose them.

## Install

```bash
npm install -g api-dna-checker
```

## Usage

```bash
# Quick scan an API endpoint (no API key needed)
api-dna api.openai.com

# Check a specific API key
api-dna check sk-your-api-key-here

# Help
api-dna --help
```

## How It Works

1. **Infrastructure Scan** — Checks IP ownership, server headers, TLS certificates
2. **Behavioral Fingerprinting** — Sends targeted prompts to identify the real model
3. **Token Audit** — Independently estimates token counts and compares vs. reported
4. **Relay Detection** — Looks for proxy headers, extra latency, and certificate mismatches

## Supported Models

80+ models across 16+ families including:
- OpenAI (GPT-4o, GPT-4-turbo, GPT-3.5-turbo, etc.)
- Anthropic (Claude 3.5, Claude 3, etc.)
- Google (Gemini Pro, etc.)
- Meta (Llama 3, etc.)
- And many more

## Free & Open

- ✅ No account required for basic scans
- ✅ Supports 80+ models
- ✅ 16+ model families
- ✅ Quick scan without API key

## Links

- 🌐 **Website**: [api-dna.com](https://api-dna.com)
- 📊 **Rankings**: [api-dna.com/ranking](https://api-dna.com/ranking)
- 📖 **How It Works**: [api-dna.com/how-it-works](https://api-dna.com/how-it-works)
- 📝 **Blog**: [api-dna.com/blog](https://api-dna.com/blog)

## License

MIT
