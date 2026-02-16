# Security Policy

## Supported Versions

Currently, only the latest version of Status Widget receives security updates.

## Reporting Security Vulnerabilities

If you discover a security vulnerability, please **do not** create a public issue.

Instead, send an email to: security@example.com

Include the following information:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if known)

### What to Expect

1. **Confirmation**: We'll acknowledge receipt within 48 hours
2. **Investigation**: We'll investigate and validate the issue
3. **Resolution**: We'll work on a fix
4. **Disclosure**: We'll coordinate public disclosure with you

## Security Best Practices for Deployment

### API Key Protection

- Never commit API keys or tokens to the repository
- Use environment variables for sensitive configuration
- Rotate keys periodically

### Cloudflare Workers Security

- Use Worker secrets for sensitive data (`wrangler secret put <NAME>`)
- Enable rate limiting on public endpoints
- Monitor for abuse using Cloudflare Analytics

### Widget Embedding

When embedding the widget on your site:
- Only monitor URLs you own or have permission to check
- Be aware of CORS restrictions
- Consider rate limiting to avoid abuse

## Dependency Updates

This project uses `npm` for dependency management. We recommend:

- Running `npm audit` regularly
- Keeping dependencies updated with `npm update`
- Reviewing security advisories for dependencies

## Disclosure Policy

We follow responsible disclosure practices:
- Security issues are fixed before public disclosure
- Credit is given to reporters (with permission)
- Security advisories are published with releases

---

Thank you for helping keep Status Widget secure! 🔒
