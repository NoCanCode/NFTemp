const NFTemp = artifacts.require('Temp')

module.exports = async callback => {
    const nfty = await NFTemp.deployed()
    console.log('Let\'s get the overview of your character')
    const overview = await nfty.characters(0)
    console.log(overview)
    callback(overview.tx)
}
