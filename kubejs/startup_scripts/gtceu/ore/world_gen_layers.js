GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('all')
        .targets(
            '#minecraft:stone_ore_replaceables',
            '#minecraft:deepslate_ore_replaceables',
            '#minecraft:nether_carver_replaceables',
            '#forge:end_stone_ore_replaceables',
            'ad_astra:moon_stone', 
            'ad_astra:venus_stone', 
            'ad_astra:mars_stone', 
            'ad_astra:mercury_stone', 
            'ad_astra:glacio_stone',
            'aether:holystone',
            'kubejs:deimos_stone',
            'kubejs:ceres_stone',
            'kubejs:ganymede_stone',
            'kubejs:io_stone'
        )
        .dimensions(
            'minecraft:overworld',
            'minecraft:the_nether',
            'minecraft:the_end',
            'twilightforest:twilight_forest',
            'ad_astra:moon',
            'ad_astra:venus',
            'ad_astra:mars',
            'ad_astra:mercury',
            'ad_astra:glacio',
            'aether:the_aether',
            'kubejs:deimos',
            'kubejs:ceres',
            'kubejs:ganymede',
            'kubejs:io',
            'kubejs:rose_128b'
        )
})