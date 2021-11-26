module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptioons: {
                publish: [{
                    provider: "github",
                    owner: "MagmaRat-Studios",
                    repo: "Lava-Client"
                }]
            },
        },
    },
};