GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('steel_leaf')
        .wood()
        .color(0x518539)
        .toolStats(ToolProperty.Builder.of(12, 6, 614400, 3, GTToolType.SOFT_MALLET).build())

    event.create('alumina')
        .dust().color(0xAAB9B9)
        .components('2x aluminium', '3x oxygen')

    event.create('vermiculite')
        .ore().dust().color(0xE7E088)
        .components('3x iron', '10x alumina', '4x silicon', '4x water', '6x oxygen', '2x hydrogen')
})