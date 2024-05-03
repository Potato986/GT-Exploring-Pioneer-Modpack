const modifyStackSize = [
    /(minecraft|undergarden|betterendforge|atmospheric|upgrade_aquatic|tconstruct|environmental):\w+_sign/,

    'minecraft:ender_pearl',
    'minecraft:bucket',
    'minecraft:snowball',
    'minecraft:honey_bottle',
    'minecraft:egg',

    'resourcefulbees:bee_jar',
    /resourcefulbees:\w+_honey_bottle/,
]

ItemEvents.modification(event => {
    event.modify(modifyStackSize, item => {
        item.maxStackSize = 64
    })
})