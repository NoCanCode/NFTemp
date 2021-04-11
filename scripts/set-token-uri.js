const NFTemp = artifacts.require('Temp')
const TOKENID = 0
module.exports = async callback => {
    const nfty = await NFTemp.deployed()
    console.log('Let\'s set the tokenURI of your characters')
    const tx = await nfty.setTokenURI(0, "https://ipfs.io/ipfs/QmcohUJYifDYi3v9PtjuYV5qVUs13bpBPRQjnHoFUxF7Di?filename=Hot-Day.json")
    const tx1 = await nfty.setTokenURI(1, "https://ipfs.io/ipfs/QmPBrWqJVXftyDxR4bUAbMqdaFmbhMiPdssWCRRinq6mL7?filename=Rainy-Day.json")
    const tx2 = await nfty.setTokenURI(2, "https://ipfs.io/ipfs/QmSVD8tWkYmsLyS6f55dVgmMVp57sV9xje1gSShk3oZ4HV?filename=Snowy-Day.json")
    console.log(tx)
    callback(tx.tx)
}
