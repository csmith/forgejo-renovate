module.exports = {
	platform: 'gitea',
	endpoint: 'http://forgejo.local:3000/api/v1/',
	gitAuthor: 'Renovate Bot <git+renovate@chameth.com>',
	username: 'renovate-bot',
	autodiscover: true,
	onboardingConfig: {
		$schema: 'https://docs.renovatebot.com/renovate-schema.json',
		extends: ['config:recommended'],
	},
	optimizeForDisabled: true,
	persistRepoData: true,
};
