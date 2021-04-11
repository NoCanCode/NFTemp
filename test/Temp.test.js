
const { expectRevert, expectEvent } = require('@openzeppelin/test-helpers')

const RANDOM_SEED = 100
const CHARACTER_NAME = "Shrek"

contract('Temp', accounts => {
    const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')
    const Temp = artifacts.require('Temp.sol')
    const defaultAccount = accounts[0]

    let link, nfty

    beforeEach(async () => {
        link = await LinkToken.new({ from: defaultAccount })
        nfty = await Temp.new({ from: defaultAccount })
    })

    describe('#requestNewRandomCharacter', () => {
        context('without LINK', () => {
            it('reverts', async () => {
                const newCharacter = await expectRevert.unspecified(nfty.requestNewRandomCharacter(RANDOM_SEED, CHARACTER_NAME))
            })
        })
    })
})  