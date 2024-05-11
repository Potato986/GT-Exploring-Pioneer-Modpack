GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('steel_leaf')
        .wood()
        .color(0x518539)
        .toolStats(ToolProperty.Builder.of(12, 6, 614400, 3, GTToolType.SOFT_MALLET).build())
})