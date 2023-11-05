import { defineConfig } from 'checkly';
import { Frequency } from 'checkly/constructs';

export default defineConfig({
  projectName: 'Personal Website Monitoring',
  logicalId: 'personal-website-monitoring-1',
  repoUrl: 'https://github.com/hgkim999/next-personal',
  checks: {
    activated: true,
    muted: false,
    runtimeId: '2023.09',
    frequency: Frequency.EVERY_5M,
    locations: ['us-west-1', 'eu-west-1'],
    tags: ['website', 'api'],
    checkMatch: '**/__checks__/**/*.check.ts',
    ignoreDirectoriesMatch: [],
    browserChecks: {
      frequency: Frequency.EVERY_10M,
      testMatch: '**/__checks__/**/*.spec.ts',
    },
  },
  cli: {
    runLocation: 'us-west-1',
  },
});
