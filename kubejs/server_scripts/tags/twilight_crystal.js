ServerEvents.tags('item', event => {
    event.removeAll('twilightforest:portal/activator')
    event.add('twilightforest:portal/activator', 'kubejs:twilight_crystal')
})