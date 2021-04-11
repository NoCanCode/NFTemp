const NFTemp = artifacts.require('Temp')
const fs = require('fs')

const metadataTemple = {
    "name": "",
    "description": "",
    "image": "",
    "attributes": [
        {
            "trait_type": "Wind",
            "value": 0
        },
        {
            "trait_type": "Pressure",
            "value": 0
        },
        {
            "trait_type": "Pollen",
            "value": 0
        },
        {
            "trait_type": "UV",
            "value": 0
        },
        {
            "trait_type": "Heat",
            "value": 0
        },
        {
            "trait_type": "Cold",
            "value": 0
        },
        {
            "trait_type": "Experience",
            "value": 0
        }
    ]
}
module.exports = async callback => {
    const nfty = await NFTemp.deployed()
    length = await nfty.getNumberOfCharacters()
    index = 0
    while (index < length) {
        console.log('Let\'s get the overview of your character ' + index + ' of ' + length)
        let characterMetadata = metadataTemple
        let characterOverview = await nfty.characters(index)
        index++
        characterMetadata['name'] = characterOverview['name']
        if (fs.existsSync('metadata/' + characterMetadata['name'].toLowerCase().replace(/\s/g, '-') + '.json')) {
            console.log('test')
            continue
        }
        console.log(characterMetadata['name'])
        characterMetadata['attributes'][0]['value'] = characterOverview['wind']['words'][0]
        characterMetadata['attributes'][1]['value'] = characterOverview['pressure']['words'][0]
        characterMetadata['attributes'][2]['value'] = characterOverview['pollen']['words'][0]
        characterMetadata['attributes'][3]['value'] = characterOverview['uv']['words'][0]
        characterMetadata['attributes'][4]['value'] = characterOverview['heat']['words'][0]
        characterMetadata['attributes'][5]['value'] = characterOverview['cold']['words'][0]
        filename = 'metadata/' + characterMetadata['name'].toLowerCase().replace(/\s/g, '-')
        let data = JSON.stringify(characterMetadata)
        fs.writeFileSync(filename + '.json', data)
    }
    callback(nfty)
}
