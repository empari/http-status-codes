module.exports = {
  roots: ['<rootDir>/test'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/test/**/*.ts'],
  bail: 1,
  verbose: true,
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/']
}
