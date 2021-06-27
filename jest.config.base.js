const path = require('path')

module.exports = {
  preset: 'ts-jest', // ts需要
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true, // 收集测试时的覆盖率信息
  coverageDirectory: '<rootDir>/coverage/', // 指定输出覆盖信息文件的目录
  collectCoverageFrom: [
    // 指定收集覆盖率的目录文件，只收集每个包的src目录，不收集打包后的dist目录
    '**/src/**',
    '!**/dist/**',
  ],
  testURL: 'https://www.shuidichou.com/jd', // 设置jsdom环境的URL
  testMatch: [
    // 测试文件匹配规则
    '**/__tests__/**/*.test.ts',
  ],
  testPathIgnorePatterns: [
    // 忽略测试路径
    '/node_modules/',
  ],
  coverageThreshold: {
    // 配置测试最低阈值
    // global: {
    //   branches: 100,
    //   functions: 100,
    //   lines: 100,
    //   statements: 100,
    // },
  },
}
