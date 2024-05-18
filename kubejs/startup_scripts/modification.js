ItemEvents.modification(event => {
    event.modify('minecraft:diamond', item => {
        item.burnTime = 102400
    })
    event.modify('minecraft:diamond_block', item => {
        item.burnTime = 1024000
    })
})