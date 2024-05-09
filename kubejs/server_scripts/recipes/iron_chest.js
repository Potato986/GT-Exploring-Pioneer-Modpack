ServerEvents.recipes(evnet => {
    evnet.remove({ mod: 'ironchest', id: /ironchest:chests\/(?!trapped_)\w+_chest/ })
    evnet.remove({ mod: 'ironchest', id: /ironchest:upgrades\/\w+/ })

    // 泥土箱子9000
    evnet.recipes.minecraft.crafting_shaped('ironchest:dirt_chest', [
        'BBB',
        'BCB',
        'BBB'
    ], {
        'B': '#forge:dirt',
        'C': '#forge:chests/wooden'
    })

    evnet.recipes.gtceu.assembler('dirt_chest')
        .itemInputs('8x #forge:dirt', '#forge:chests/wooden')
        .itemOutputs('ironchest:dirt_chest')
        .EUt(1)
        .duration(4 * 20)

    // 铁箱子
    evnet.recipes.minecraft.crafting_shaped('ironchest:iron_chest', [
        'ABA',
        'BCB',
        'DBE'
    ], {
        'A': '#forge:screws/iron',
        'B': '#forge:double_plates/iron',
        'C': '#forge:chests/wooden',
        'D': '#forge:tools/hammers',
        'E': '#forge:tools/screwdrivers'
    })

    evnet.recipes.gtceu.assembler('iron_chest_from_vanilla')
        .itemInputs('3x #forge:double_plates/iron', '#forge:chests/wooden')
        .itemOutputs('ironchest:iron_chest')
        .EUt(16)
        .duration(7.5 * 20)

    evnet.recipes.gtceu.assembler('iron_chest_from_copper')
        .itemInputs('3x #forge:double_plates/iron', 'ironchest:copper_chest')
        .itemOutputs('ironchest:iron_chest')
        .EUt(16)
        .duration(7.5 * 20)
        .circuit(2)

    // 金箱子
    evnet.recipes.minecraft.crafting_shaped('ironchest:gold_chest', [
        'ABA',
        'BCB',
        'DBE'
    ], {
        'A': '#forge:screws/gold',
        'B': '#forge:double_plates/gold',
        'C': '#forge:chests/wooden',
        'D': '#forge:tools/hammers',
        'E': '#forge:tools/screwdrivers'
    })

    evnet.recipes.gtceu.assembler('gold_chest_from_vanilla')
        .itemInputs('3x #forge:double_plates/gold', '#forge:chests/wooden')
        .itemOutputs('ironchest:gold_chest')
        .EUt(64)
        .duration(12.5 * 20)

    evnet.recipes.gtceu.assembler('gold_chest_from_iron')
        .itemInputs('3x #forge:double_plates/gold', 'ironchest:iron_chest')
        .itemOutputs('ironchest:gold_chest')
        .EUt(64)
        .duration(25 * 20)
        .circuit(2)
    
    // 钻石箱子
    evnet.recipes.minecraft.crafting_shaped('ironchest:diamond_chest', [
        'ABA',
        'BCB',
        'DBE'
    ], {
        'A': '#forge:screws/diamond',
        'B': '#forge:plates/diamond',
        'C': '#forge:chests/wooden',
        'D': '#forge:tools/hammers',
        'E': '#forge:tools/screwdrivers'
    })

    evnet.recipes.gtceu.assembler('diamond_chest_from_vanilla')
        .itemInputs('4x #forge:plates/diamond', '#forge:chests/wooden')
        .itemOutputs('ironchest:diamond_chest')
        .EUt(120)
        .duration(15 * 20)

    evnet.recipes.gtceu.assembler('diamond_chest_from_gold')
        .itemInputs('2x #forge:plates/diamond', 'ironchest:gold_chest')
        .itemOutputs('ironchest:diamond_chest')
        .EUt(120)
        .duration(30 * 20)
        .circuit(2)
    
    // 铜箱子
    evnet.recipes.minecraft.crafting_shaped('ironchest:copper_chest', [
        'ABA',
        'BCB',
        'DBE'
    ], {
        'A': '#forge:screws/copper',
        'B': '#forge:double_plates/copper',
        'C': '#forge:chests/wooden',
        'D': '#forge:tools/hammers',
        'E': '#forge:tools/screwdrivers'
    })

    evnet.recipes.gtceu.assembler('copper_chest_from_vanilla')
        .itemInputs('3x #forge:double_plates/copper', '#forge:chests/wooden')
        .itemOutputs('ironchest:copper_chest')
        .EUt(7)
        .duration(5 * 20)
    
    // 水晶箱子
    evnet.recipes.minecraft.crafting_shaped('ironchest:crystal_chest', [
        'ABA',
        'BCB',
        'DBE'
    ], {
        'A': '#forge:screws/glass',
        'B': '#forge:plates/glass',
        'C': '#forge:chests/wooden',
        'D': '#forge:tools/hammers',
        'E': '#forge:tools/screwdrivers'
    })

    evnet.recipes.gtceu.assembler('crystal_chest_from_diamond')
        .itemInputs('4x #forge:plates/diamond', 'ironchest:diamond_chest')
        .itemOutputs('ironchest:crystal_chest')
        .EUt(256)
        .duration(17.5 * 20)
    
    // 黑曜石箱子
    evnet.recipes.minecraft.crafting_shaped('ironchest:obsidian_chest', [
        'ABA',
        'BCB',
        'DBE'
    ], {
        'A': '#forge:screws/diamond',
        'B': '#forge:dense_plates/obsidian',
        'C': '#forge:chests/wooden',
        'D': '#forge:tools/hammers',
        'E': '#forge:tools/screwdrivers'
    })

    evnet.recipes.gtceu.assembler('copper_chest_from_diamond')
        .itemInputs('3x #forge:dense_plates/obsidian', 'ironchest:diamond_chest')
        .itemOutputs('ironchest:obsidian_chest')
        .EUt(256)
        .duration(20 * 20)

    // 木 -> 铁
    evnet.recipes.minecraft.crafting_shaped('ironchest:wood_to_iron_chest_upgrade', [
        'ABA',
        'BCB',
        'DBE'
    ], {
        'A': '#forge:screws/iron',
        'B': '#forge:double_plates/iron',
        'C': '#minecraft:planks',
        'D': '#forge:tools/hammers',
        'E': '#forge:tools/screwdrivers'
    })

    evnet.recipes.gtceu.assembler('wood_to_iron_chest_upgrade')
        .itemInputs('3x #forge:double_plates/iron', '#minecraft:planks')
        .itemOutputs('ironchest:wood_to_iron_chest_upgrade')
        .EUt(30)
        .duration(15 * 20)
        .circuit(2)
    
    // 木 -> 铜
    evnet.recipes.minecraft.crafting_shaped('ironchest:wood_to_copper_chest_upgrade', [
        'ABA',
        'BCB',
        'DBE'
    ], {
        'A': '#forge:screws/copper',
        'B': '#forge:double_plates/copper',
        'C': '#minecraft:planks',
        'D': '#forge:tools/hammers',
        'E': '#forge:tools/screwdrivers'
    })

    evnet.recipes.gtceu.assembler('wood_to_copper_chest_upgrade')
        .itemInputs('3x #forge:double_plates/copper', '#minecraft:planks')
        .itemOutputs('ironchest:wood_to_copper_chest_upgrade')
        .EUt(16)
        .duration(10 * 20)
        .circuit(2)
    
    // 铜 -> 铁
    evnet.recipes.minecraft.crafting_shaped('ironchest:copper_to_iron_chest_upgrade', [
        'ABA',
        'BCB',
        'DBE'
    ], {
        'A': '#forge:screws/iron',
        'B': '#forge:plates/iron',
        'C': '#forge:plates/copper',
        'D': '#forge:tools/hammers',
        'E': '#forge:tools/screwdrivers'
    })

    evnet.recipes.gtceu.assembler('copper_to_iron_chest_upgrade')
        .itemInputs('#forge:double_plates/iron', '#forge:plates/copper')
        .itemOutputs('ironchest:copper_to_iron_chest_upgrade')
        .EUt(16)
        .duration(10 * 20)
        .circuit(2)
    
    // 铁 -> 金
    evnet.recipes.minecraft.crafting_shaped('ironchest:iron_to_gold_chest_upgrade', [
        'ABA',
        'BCB',
        'DBE'
    ], {
        'A': '#forge:screws/gold',
        'B': '#forge:plates/gold',
        'C': '#forge:plates/iron',
        'D': '#forge:tools/hammers',
        'E': '#forge:tools/screwdrivers'
    })

    evnet.recipes.gtceu.assembler('iron_to_gold_chest_upgrade')
        .itemInputs('#forge:double_plates/gold', '#forge:plates/iron')
        .itemOutputs('ironchest:iron_to_gold_chest_upgrade')
        .EUt(64)
        .duration(25 * 20)
        .circuit(2)
    
    // 金 -> 钻石
    evnet.recipes.minecraft.crafting_shaped('ironchest:gold_to_diamond_chest_upgrade', [
        'ABA',
        ' C ',
        'DBE'
    ], {
        'A': '#forge:screws/diamond',
        'B': '#forge:plates/diamond',
        'C': '#forge:plates/gold',
        'D': '#forge:tools/hammers',
        'E': '#forge:tools/screwdrivers'
    })

    evnet.recipes.gtceu.assembler('gold_to_diamond_chest_upgrade')
        .itemInputs('2x #forge:plates/diamond', '#forge:plates/gold')
        .itemOutputs('ironchest:gold_to_diamond_chest_upgrade')
        .EUt(120)
        .duration(30 * 20)
        .circuit(2)
    
    // 钻石 -> 水晶
    evnet.recipes.minecraft.crafting_shaped('ironchest:diamond_to_crystal_chest_upgrade', [
        'ABA',
        'BCB',
        'DBE'
    ], {
        'A': '#forge:screws/glass',
        'B': '#forge:plates/glass',
        'C': '#forge:plates/diamond',
        'D': '#forge:tools/hammers',
        'E': '#forge:tools/screwdrivers'
    })

    evnet.recipes.gtceu.assembler('diamond_to_crystal_chest_upgrade')
        .itemInputs('2x #forge:plates/glass', '#forge:plates/diamond')
        .itemOutputs('ironchest:diamond_to_crystal_chest_upgrade')
        .EUt(256)
        .duration(35 * 20)
        .circuit(2)
    
    // 钻石 -> 黑曜石
    evnet.recipes.minecraft.crafting_shaped('ironchest:diamond_to_obsidian_chest_upgrade', [
        'ABA',
        'BCB',
        'DBE'
    ], {
        'A': '#forge:screws/diamond',
        'B': '#forge:dense_plates/obsidian',
        'C': '#forge:plates/diamond',
        'D': '#forge:tools/hammers',
        'E': '#forge:tools/screwdrivers'
    })

    evnet.recipes.gtceu.assembler('diamond_to_obsidian_chest_upgrade')
        .itemInputs('2x #forge:dense_plates/obsidian', '#forge:plates/diamond')
        .itemOutputs('ironchest:diamond_to_obsidian_chest_upgrade')
        .EUt(256)
        .duration(60 * 20)
        .circuit(2)
})