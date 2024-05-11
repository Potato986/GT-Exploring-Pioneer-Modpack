ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('twilight_crystal')
        .itemInputs('minecraft:diamond', '4x #gtceu:circuits/lv')
        .itemOutputs('kubejs:twilight_crystal')
        .EUt(16)
        .duration(30 * 20)
})