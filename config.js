module.exports = {
	platform: 'forgejo',
	endpoint: 'http://forgejo.local:3000/api/v1/',
	gitAuthor: 'Renovate Bot <git+renovate@chameth.com>',
	username: 'renovate-bot',
	autodiscover: true,
	onboardingConfig: {
		$schema: 'https://docs.renovatebot.com/renovate-schema.json',
		extends: ['config:recommended'],
		minimumReleaseAge: "28 days",
		internalChecksFilter: "strict",
	},
	optimizeForDisabled: true,
	persistRepoData: true,
};
