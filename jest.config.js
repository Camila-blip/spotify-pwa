export default {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    testMatch: [
        "**/__tests__/**/*.(ts|tsx|js|jsx)",
        "**/?(*.)+(spec|test).(ts|tsx|js|jsx)"
    ],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
    coverageDirectory: "coverage",
    coverageReporters: ["json", "lcov", "text", "clover"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    moduleNameMapper: {
        "^assets/(.*)$": "<rootDir>/src/assets/$1",
        "^components/(.*)$": "<rootDir>/src/components/$1",
        "^styles/(.*)$": "<rootDir>/src/styles/$1",
        "^utils/(.*)$": "<rootDir>/src/utils/$1",
        "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
        "^context/(.*)$": "<rootDir>/src/context/$1",
        "^api/(.*)$": "<rootDir>/src/api/$1",
        "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js"
    }
};
