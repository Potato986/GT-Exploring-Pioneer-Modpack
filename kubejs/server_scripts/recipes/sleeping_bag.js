ServerEvents.recipes(event => {
    event.forEachRecipe({output: /travelersbackpack:\w+_sleeping_bag/}, r => {
        let recipeId = r.getId()
        const color = recipeId.match(/travelersbackpack:(\w+)_sleeping_bag/)[1]
        if (color.includes('dye_')) {
            return
        }
        r.remove()

        event.recipes.minecraft.crafting_shaped(`travelersbackpack:${color}_sleeping_bag`, [
            'AAA',
            'BBB',
            'CCC'
        ], {
            'A': `minecraft:${color}_carpet`,
            'B': `minecraft:${color}_wool`,
            'C': '#forge:leather'
        })
    })
})