/**
 * BeautifulTerminals v1.0.0
 * Copyright (C) Ben3Coder Software (https://ben3coder.dev)
 * 
 * Licensed under MIT LIcense.
 **/

module.exports = {
    prompt: require("./prompt.js")(),
    promptAsync: require("./prompt.js")("async"),
    card: require("./card.js")(),
}