import type {JestConfigWithTsJest} from 'ts-jest';

const JestConfigWithTsJest: JestConfigWithTsJest = {
    preset: 'ts-jest',
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
};

export default JestConfigWithTsJest;
