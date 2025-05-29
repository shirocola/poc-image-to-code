# copilot-instructions.md

## Project Context

You are assisting with a **React** frontend project using **TypeScript**.  
The codebase follows best practices for React and TypeScript, including functional components, hooks, and type safety.

## Coding Guidelines

- Use **TypeScript** for all components and files.
- Use **functional components** and React hooks (`useState`, `useEffect`, etc.).
- Prefer **arrow functions** for component definitions and handlers.
- Always provide **type annotations** for props, state, and function parameters.
- Use **ES6+ syntax** (destructuring, spread, etc.).
- Organize reusable UI in the `components/` folder.
- Place shared types in the `types/` folder.
- Use `interface` or `type` for defining prop and data types.
- Use `export default` for components unless multiple exports are needed.
- Use `import React from "react"` only if required by your tooling.
- Use **CSS Modules** or styled-components for styling (if applicable).

## Code Style

- Use 2 spaces for indentation.
- Use single quotes for strings.
- Use semicolons.
- Prefer explicit return types for functions.
- Use PascalCase for component names and camelCase for variables/functions.

## Documentation

- Add JSDoc comments for complex functions or components.
- Add inline comments for non-obvious logic.

## Testing

- Write unit tests for components and utilities using Jest and React Testing Library (if applicable).

## Example Component

```typescript
// filepath: src/components/ExampleComponent.tsx
import React from 'react';

interface ExampleProps {
  title: string;
  count?: number;
}

const ExampleComponent: React.FC<ExampleProps> = ({ title, count = 0 }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
    </div>
  );
};

export default ExampleComponent;
```

## When in Doubt

- Ask for clarification if requirements are ambiguous.
- Suggest improvements if you see potential issues or better patterns.
