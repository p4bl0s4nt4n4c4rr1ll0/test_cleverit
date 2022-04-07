import {Config} from '@jest/types'

const config:Config.InitialOptions = {
    coveragePathIgnorePatterns: ["/node_modules/"],
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    verbose: true
}

export default config