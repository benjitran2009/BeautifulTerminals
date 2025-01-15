module.exports = ((type)=>{
    return type = null ? function(title,description){
        console.log(`
            ******************
            * ${title||""}
            * ${description||""}
            ******************
            `)
    } : null
})