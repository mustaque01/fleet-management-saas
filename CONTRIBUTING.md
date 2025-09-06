# Contributing to FleetFlow

First off, thank you for considering contributing to FleetFlow! 🎉

The following is a set of guidelines for contributing to FleetFlow. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots and animated GIFs**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### Your First Code Contribution

Unsure where to begin contributing? You can start by looking through these `beginner` and `help-wanted` issues:

- **Beginner issues** - issues which should only require a few lines of code, and a test or two
- **Help wanted issues** - issues which should be a bit more involved than `beginner` issues

## Development Setup

1. **Fork and clone the repo**
   ```bash
   git clone https://github.com/your-username/fleet-management-saas.git
   cd fleet-management-saas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Pull Request Process

1. **Ensure any install or build dependencies are removed** before the end of the layer when doing a build
2. **Update the README.md** with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters
3. **Increase the version numbers** in any examples files and the README.md to the new version that this Pull Request would represent
4. **You may merge the Pull Request** in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you

### Before Submitting

- [ ] **Test your changes** - Run `npm run build` to ensure your changes don't break the build
- [ ] **Check for linting errors** - Run `npm run lint` to check for any linting issues
- [ ] **Update documentation** - If you've added new features, update the README or add documentation
- [ ] **Add tests** - If applicable, add tests for your changes
- [ ] **Follow the style guide** - Ensure your code follows our coding standards

## Style Guidelines

### TypeScript Style Guide

- **Use TypeScript** for all new code
- **Define interfaces** for component props and data structures
- **Use proper typing** - avoid `any` type when possible
- **Follow naming conventions**:
  - Components: PascalCase (`UserProfile`)
  - Functions: camelCase (`getUserData`)
  - Constants: UPPER_SNAKE_CASE (`API_BASE_URL`)
  - Interfaces: PascalCase with `I` prefix (`IUserData`)

### React Component Guidelines

- **Use functional components** with hooks
- **Extract custom hooks** for reusable logic
- **Keep components small** and focused on a single responsibility
- **Use proper prop types** with TypeScript interfaces
- **Handle loading and error states** appropriately

```typescript
// ✅ Good
interface UserProfileProps {
  userId: string
  onUpdate?: (user: User) => void
}

export function UserProfile({ userId, onUpdate }: UserProfileProps) {
  // Component implementation
}

// ❌ Avoid
export function UserProfile(props: any) {
  // Component implementation
}
```

### CSS/Styling Guidelines

- **Use Tailwind CSS** utility classes
- **Create custom components** in `@/components/ui` for reusable UI elements
- **Follow the design system** color palette and spacing
- **Use CSS variables** for theme-able properties
- **Implement responsive design** mobile-first

```tsx
// ✅ Good
<div className="bg-gradient-to-r from-accent to-purple-600 hover:shadow-lg transition-all duration-300">
  <h1 className="text-2xl font-bold text-foreground">Title</h1>
</div>

// ❌ Avoid inline styles
<div style={{ background: 'linear-gradient(to right, #8B5CF6, #A855F7)' }}>
  <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Title</h1>
</div>
```

### File Organization

- **Components** go in `@/components/[category]/`
- **Pages** go in `@/app/`
- **Hooks** go in `@/hooks/`
- **Utilities** go in `@/lib/`
- **Types** can be defined inline or in separate `.types.ts` files

### Accessibility Guidelines

- **Use semantic HTML** elements
- **Provide proper ARIA labels** and roles
- **Ensure keyboard navigation** works properly
- **Maintain color contrast** ratios
- **Test with screen readers** when possible

```tsx
// ✅ Good
<button
  className="btn-primary"
  aria-label="Save user profile"
  onClick={handleSave}
>
  Save
</button>

// ❌ Avoid
<div className="btn-primary" onClick={handleSave}>
  Save
</div>
```

## Commit Message Guidelines

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

### Examples

```
feat(dashboard): add real-time vehicle tracking

fix(auth): resolve login form validation issue

docs(readme): update installation instructions

style(components): improve button hover animations

refactor(api): simplify user data fetching logic
```

## Questions?

Don't hesitate to reach out if you have questions:

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For general questions and discussions
- **Email**: support@fleetflow.com

Thank you for contributing to FleetFlow! 🚛✨
