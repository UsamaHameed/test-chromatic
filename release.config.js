module.exports = {
    branches: [
        'main',
        'next',
        {
            name: 'beta',
            prerelease: true,
        },
    ],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
                releaseRules: [
                    { type: 'refactor', release: 'patch' },
                    { type: 'style', release: 'patch' },
                    { type: 'chore', release: 'patch' },
                    { type: 'docs', release: false },
                    { type: 'test', release: false },
                    { scope: 'no-release', release: false },
                ],
            },
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'conventionalcommits',
                writerOpts: {
                    commitsSort: ['subject', 'scope'],
                },
                presetConfig: {
                    types: [
                        { type: 'feat', section: '🚀 Features' },
                        { type: 'fix', section: '🐛 Bug Fixes' },
                        { type: 'chore', section: '🧰 Maintenance' },
                        { type: 'docs', section: '🧰 Maintenance' },
                        { type: 'style', section: '🧰 Maintenance' },
                        { type: 'refactor', section: '🧰 Maintenance' },
                        { type: 'test', section: '🧰 Maintenance' },
                    ],
                },
            },
        ],
        '@semantic-release/changelog',
        [
            '@semantic-release/npm',
            {
                npmPublish: true,
            },
        ],
        '@semantic-release/github',
    ],
};
