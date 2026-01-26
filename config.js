module.exports = {
	platform: 'forgejo',
	endpoint: 'http://forgejo.local:3000/api/v1/',
	gitAuthor: 'Renovate Bot <git+renovate@chameth.com>',
	username: 'renovate-bot',
	autodiscover: true,
	onboardingConfig: {
		$schema: 'https://docs.renovatebot.com/renovate-schema.json',
		extends: ['local>meta/renovate'],
	},
	optimizeForDisabled: true,
	persistRepoData: true,
};
