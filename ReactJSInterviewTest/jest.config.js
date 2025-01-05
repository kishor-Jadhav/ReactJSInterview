module.exports = {
  preset: 'ts-jest',                        // Use ts-jest for TypeScript support
  testEnvironment: 'jsdom',                 // Simulate browser environment for React
  transform: {
    '^.+\\.tsx?$': 'ts-jest',               // Transform TypeScript files using ts-jest
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',  // Mock CSS imports
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],  // Setup file for additional configurations
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],  // Ignore node_modules directory
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],     // Resolve both TS and JS modules
};
