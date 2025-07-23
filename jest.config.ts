import { createDefaultPreset } from "ts-jest";
import type { Config } from "jest"

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  // testEnvironment: "jsdom",
  // "testEnvironmentOptions": {
  //   "browsers": [
  //     "chrome",
  //     "firefox",
  //   ],
  // },
  transform: {
    ...tsJestTransformCfg,
  },
} as Config;

