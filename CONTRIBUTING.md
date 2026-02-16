# Contributing to Status Widget

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the Status Widget project.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)

## Code of Conduct

This project adheres to a simple code of conduct:
- Be respectful and inclusive
- Focus on what is best for the community
- Show empathy towards other community members

## How to Contribute

### Reporting Bugs

1. Check existing issues to avoid duplicates
2. Use the bug report template
3. Include steps to reproduce, expected vs actual behavior
4. Provide environment details (Node version, deployment type, etc.)

### Suggesting Features

1. Check existing feature requests
2. Use the feature request template
3. Explain the problem your feature would solve
4. Consider if it fits the project's scope

### Submitting Code Changes

1. Fork the repository
2. Create a branch for your changes (`git checkout -b feature/your-feature`)
3. Make your changes with clear commit messages
4. Test your changes thoroughly
5. Submit a pull request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/status-widget.git
cd status-widget

# Install dependencies
npm install

# Start development server
npm start
```

The development server runs on http://localhost:3001

## Pull Request Process

1. Ensure your code follows the project's coding standards
2. Update documentation if needed
3. Add tests for new features (when applicable)
4. Ensure all tests pass
5. Use the PR template and fill out all relevant sections
6. Keep PRs focused on a single change

### PR Review Criteria

- Code quality and clarity
- Alignment with project goals
- Documentation completeness
- Test coverage
- Performance implications

## Coding Standards

### JavaScript Style

- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and small
- Use async/await for asynchronous code

### Commit Messages

Follow conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
- `feat(widget): add custom color scheme support`
- `fix(monitor): handle timeout errors gracefully`
- `docs: update deployment instructions`

## Questions?

Feel free to open an issue with the "Question" label if you need help or clarification.

---

**Thank you for contributing to Status Widget!** 🚀
