#!/usr/bin/env node
const https = require('https');
const http = require('http');

const API_DNA = 'https://api-dna.com';
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(`
🧬 API-DNA Checker v1.0.0
Free API verification engine - the DNA test for API providers

Usage:
  api-dna <endpoint>           Quick scan an API endpoint
  api-dna check <api-key>      Check an API key
  api-dna --help               Show help

Examples:
  api-dna api.openai.com       Scan OpenAI endpoint
  api-dna check sk-...         Verify an API key

Visit ${API_DNA} for full analysis with detailed reports.
`);
  process.exit(0);
}

const endpoint = args[0];

if (endpoint === '--help' || endpoint === '-h') {
  console.log(`
🧬 API-DNA - API Truth Search Engine

Commands:
  api-dna <endpoint>    Quick scan - checks relay, IP, and infrastructure
  api-dna check <key>   Deep scan - verifies model authenticity and token counts

What API-DNA detects:
  • Fake model substitution (e.g., GPT-3.5 sold as GPT-4)
  • Token count inflation (being charged for tokens you didn't use)
  • Relay/proxy servers intercepting your API calls
  • Hidden system prompts injected by providers

Supported: 80+ models across 16+ families
Free: No account required for basic scans

Web: ${API_DNA}
  `);
  process.exit(0);
}

// Quick scan via API-DNA
const url = `${API_DNA}/api/quick?endpoint=${encodeURIComponent(endpoint)}`;
console.log(`🧬 Scanning ${endpoint}...`);
console.log(`   Full report: ${API_DNA}/?endpoint=${encodeURIComponent(endpoint)}`);

const protocol = url.startsWith('https') ? https : http;
protocol.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const result = JSON.parse(data);
      if (result.relay) console.log(`   ⚠️  Relay detected: ${result.relay}`);
      if (result.provider) console.log(`   📍 Provider: ${result.provider}`);
      if (result.risk) console.log(`   🔴 Risk level: ${result.risk}`);
      console.log(`\n   View full report: ${API_DNA}/?endpoint=${encodeURIComponent(endpoint)}`);
    } catch(e) {
      console.log(`   Scan initiated. View results at: ${API_DNA}/?endpoint=${encodeURIComponent(endpoint)}`);
    }
  });
}).on('error', (e) => {
  console.log(`   ⚠️  Network error: ${e.message}`);
  console.log(`   Visit ${API_DNA} to scan manually.`);
});
