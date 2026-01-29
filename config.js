module.exports = {
	platform: 'forgejo',
	endpoint: 'https://git.yak-wall.ts.net/api/v1/',
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
