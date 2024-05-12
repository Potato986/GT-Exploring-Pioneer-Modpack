StartupEvents.registry('item', event => {
    event.create('twilight_crystal')
        .tooltip(Text.translatable('tooltip.kubejs.twilight_crystal'))
        .rarity('uncommon')
})

StartupEvents.registry('block', event => {
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
})