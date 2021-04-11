const NFTemp = artifacts.require('Temp')

module.exports = async callback => {
  const nfty = await NFTemp.deployed()
  console.log('Creating requests on contract:', nfty.address)
  const tx = await nfty.requestNewRandomCharacter(77, "A Hot Day")
  const tx2 = await nfty.requestNewRandomCharacter(7777777, "A Rainy Day")
  const tx3 = await nfty.requestNewRandomCharacter(7, "A Snowy Day")
  callback(tx.tx)
}
