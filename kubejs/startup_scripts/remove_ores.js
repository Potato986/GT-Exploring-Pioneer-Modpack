WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            'occultism:silver_ore',
            'occultism:silver_ore_deepslate'
        ]
    })

    event.removeFeatureById(
        'underground_ores',
        [
            'mekanism:ore_fluorite_buried', 'mekanism:ore_fluorite_buried_retrogen', 'mekanism:ore_fluorite_normal', 'mekanism:ore_fluorite_normal_retrogen',
            'mekanism:ore_lead_normal', 'mekanism:ore_lead_normal_retrogen',
            'mekanism:ore_osmium_middle', 'mekanism:ore_osmium_middle_retrogen', 'mekanism:ore_osmium_small', 'mekanism:ore_osmium_small_retrogen', 'mekanism:ore_osmium_upper', 'mekanism:ore_osmium_upper_retrogen',
            'mekanism:ore_tin_large', 'mekanism:ore_tin_large_retrogen', 'mekanism:ore_tin_small', 'mekanism:ore_tin_small_retrogen',
            'mekanism:ore_uranium_buried', 'mekanism:ore_uranium_buried_retrogen', 'mekanism:ore_uranium_small', 'mekanism:ore_uranium_small_retrogen',
            'mekanism:salt', 'mekanism:salt_retrogen',

            'ad_astra:moon_cheese_ore', 'ad_astra:moon_desh_ore', 'ad_astra:moon_iron_ore', 'ad_astra:moon_ice_shard_ore',
            'ad_astra:mars_iron_ore', 'ad_astra:mars_diamond_ore', 'ad_astra:mars_ostrum_ore', 'ad_astra:mars_ice_shard_ore',
            'ad_astra:venus_coal_ore', 'ad_astra:venus_gold_ore', 'ad_astra:venus_diamond_ore', 'ad_astra:venus_calorite_ore',
            'ad_astra:glacio_ice_shard_ore', 'ad_astra:glacio_coal_ore', 'ad_astra:glacio_copper_ore', 'ad_astra:glacio_iron_ore',
            'ad_astra:mercury_iron_ore', 'ad_astra:glacio_deepslate_lapis_ore', 'ad_astra:glacio_deepslate_iron_ore',
            'ad_astra:glacio_lapis_ore', 'ad_astra:glacio_deepslate_copper_ore', 'ad_astra:glacio_deepslate_coal_ore',

            'twilightforest:legacy_coal_ore', 'twilightforest:legacy_copper_ore', 'twilightforest:legacy_diamond_ore', 
            'twilightforest:legacy_gold_ore', 'twilightforest:legacy_iron_ore', 'twilightforest:legacy_lapis_ore', 
            'twilightforest:legacy_redstone_ore'
        ]
    )
})