// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  setupFiles: ['./jest.setup.js'],
  coverageDirectory: 'coverage',
  testMatch: ['**/?(*.)+(unit|integration).[jt]s?(x)'],
  testEnvironment: 'node',
}
