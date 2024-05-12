StartupEvents.registry('item', event => {
    event.create('twilight_crystal')
        .tooltip(Text.translatable('tooltip.kubejs.twilight_crystal'))
        .rarity('uncommon')
})

StartupEvents.registry('block', event => {
    // 火卫二
    event.create('deimos_stone')
        .stoneSoundType()
        .hardness(2)
        .requiresTool()
        .tagBlock("mineable/pickaxe")
    event.create('deimos_surface')
        .stoneSoundType()
        .hardness(2)
        .requiresTool()
        .tagBlock("mineable/pickaxe")

    // 谷神星
    event.create('ceres_stone')
        .stoneSoundType()
        .hardness(2)
        .requiresTool()
        .tagBlock("mineable/pickaxe")
    event.create('ceres_surface')
        .stoneSoundType()
        .hardness(2)
        .requiresTool()
        .tagBlock("mineable/pickaxe")
})