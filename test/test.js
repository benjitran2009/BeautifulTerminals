// test everything

const BeautifulTerminals = require("../src/index.js")

async function firstTest() {
    try {
        return await BeautifulTerminals.prompt("Test")
    } catch (error) {
        throw new Error(e);
    }
}

async function secondTest() {
    try {
        return await BeautifulTerminals.promptAsync("Test")
    } catch (error) {
        throw new Error(e);
    }
}

async function doTheThing() {

    BeautifulTerminals.card("Test", "Thing")
    secondTest()
    firstTest()


}

doTheThing();