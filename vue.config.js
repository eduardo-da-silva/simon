module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            nodeModulesPath: ['./node_modules'],
            builderOptions: {
                productName: "e-Simon",
                appId: "com.example.eSimon",
                artifactName: "${name}_${os}_${arch}-setup.${ext}",
                publish: [
                    {
                        "provider": "github",
                        "owner": "eduardo-da-silva",
                        "repo": "simon",
                    }
                ],
                "win": {
                    "icon": "build/icons/icon.ico",
                    "publish": ["github"],
                    "target": [
                        {
                            "target": "nsis",
                            "arch": ["x64"]
                        }
                    ]
                },
                "linux": {
                    "category": "Utility",
                    "icon": "build/icons",
                    "publish": [
                        "github"
                    ],
                    "target": [
                        {
                            "target": "deb",
                            "arch": [
                                "x64"
                            ]
                        },
                        {
                            "target": "pacman",
                            "arch": [
                                "x64"
                            ]
                        }
                    ]
                }
            }
        }
    },

}
