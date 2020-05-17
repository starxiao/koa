module.exports = {
    app: [{
        name: 'koa',
        script: 'node server.js',
        instances: 1,
        autorestart: true,
        watch: true,
        ignore_watch: [
            'node_modules',
            'logs'
        ],
        max_memory_restart: '1G',
        env_pro: {
            'NODE_NEV': 'prod',
            'REMOTE_ADDR': ''
        },
        env_test: {
            'NODE_ENV': 'test',
            'REMOTE_ADDR': ''
        },
        env_dev: {
            'NODE_ENV': 'dev',
            'REMOTE_ADDR': ''
        }
    }]
}