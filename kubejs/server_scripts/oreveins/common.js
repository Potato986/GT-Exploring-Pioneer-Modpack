// priority 80
const OVERWORLD = 'minecraft:overworld'
const NETHER = 'minecraft:the_nether'
const END = 'minecraft:the_end'

const AETHER = 'aether:the_aether'
const TWILIGHT_FOREST = "twilightforest:twilight_forest"

const MOON = 'ad_astra:moon'
const VENUS = 'ad_astra:venus'
const MARS = 'ad_astra:mars'
const MERCURY = 'ad_astra:mercury'
const GLACION = 'ad_astra:glacio'

const DEIMOS = 'kubejs:deimos'
const CERES = 'kubejs:ceres'
const GANYMEDE = 'kubejs:ganymede'
const IO = 'kubejs:io'
const ROSE_128b = 'kubejs:rose_128b'

GTCEuServerEvents.oreVeins(event => {
    event.removeAll()
    event.add('kubejs:diamond', vein => {
        vein.weight(50)
        vein.clusterSize(35)
        vein.density(0.25)
        vein.layer('all')
        vein.dimensions(OVERWORLD, TWILIGHT_FOREST, GANYMEDE, MERCURY)
        vein.heightRangeUniform(-60, 10)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Graphite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Coal).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Diamond).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Diamond)
            .placement('above')
            .density(0.1)
            .radius(2)
        )
    })
    event.add('kubejs:lapis', vein => {
        vein.weight(50)
        vein.clusterSize(45)
        vein.density(0.25)

        vein.layer('all')
        vein.dimensions(OVERWORLD, TWILIGHT_FOREST, DEIMOS, CERES)
        vein.heightRangeUniform(-20, 50)

        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Lazurite, 3, 20, 50)
            .withBlock(GTMaterials.Sodalite, 2, -5, 40)
            .withBlock(GTMaterials.Lapis, 2, -20, 20)
            .withBlock(GTMaterials.Calcite, 1, -20, 50)
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Lapis)
            .placement('above')
            .density(0.15)
            .radius(3)
        )
    })
    event.add('kubejs:iron', vein => {
        vein.weight(120)
        vein.clusterSize(50)
        vein.density(1)
        vein.layer('all')
        vein.dimensions(OVERWORLD, TWILIGHT_FOREST, MARS, CERES, GANYMEDE, MERCURY)
        vein.heightRangeUniform(-40, 60)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Goethite, 3)
            .oreBlock(GTMaterials.YellowLimonite, 2)
            .oreBlock(GTMaterials.Hematite, 2)
            .rareBlock(GTMaterials.Malachite, 1)
            .rareBlockChance(0.075)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.175)
            .minRichness(0.4)
            .maxRichness(0.7)
            .edgeRoundoffBegin(3)
            .maxEdgeRoundoff(0.1)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Goethite)
            .placement("above")
        )
    })
    // event.add('kubejs:overworld/iron', global.iron('stone', 'minecraft:overworld', 120, 10, 50))
})