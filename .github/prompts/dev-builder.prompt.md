Create a new React component called [COMPONENT_NAME] in the src/components directory with the following structure:

1. Create a directory called [COMPONENT_NAME] in src/components
2. Inside this directory, create three files:
   - [COMPONENT_NAME].tsx (main component file)
   - [COMPONENT_NAME].module.css (styles module)
   - index.ts (export file)

The component should:
- Be a functional component using React hooks
- Accept props via a TypeScript interface
- Include responsive styling
- Have default values for all props
- Export the component as default

After creating the component, register it in src/builder-registry.ts by:
1. Importing the component at the top of the file
2. Adding a Builder.registerComponent call with appropriate input configurations
3. Providing default values and helper text for all configurable properties

Make sure the Builder configuration includes proper type definitions for all inputs, and structure complex data with appropriate nested subFields.

Please implement this following React best practices and maintain the existing code style of the project.