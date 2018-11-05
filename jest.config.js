// Module value in tsconfig is like `esnext` and erroneously triggers a diagnostic warning
// https://github.com/kulshekhar/ts-jest/issues/748
const tsJestIgnore = {
  'ts-jest': {
    diagnostics: {
      ignoreCodes: [151001],
    },
  },
}

module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)test)\\.ts?$',
  moduleFileExtensions: ['ts', 'js'],
  globals: {
    ...tsJestIgnore,
  },
}