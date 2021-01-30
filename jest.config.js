module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  // coverageThreshold: {
  //   global: {
  //     branches: 8,
  //     functions: 7,
  //     lines: 16,
  //     statements: 16,
  //   },
  // },
  testMatch: ['**/?(*.)test.+(ts|tsx|js)'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>', 'node_modules'],
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    'src/routes/**/*.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    // 'interfaces',
    // '.stories.tsx',
    // 'style',
    // '.index.ts',
  ],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
};
