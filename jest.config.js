const base = require('./jest.config.base')

module.exports = {
  ...base,
  roots: ['<rootDir>'],
  projects: ['<rootDir>/packages/common', '<rootDir>/packages/time'],
}
