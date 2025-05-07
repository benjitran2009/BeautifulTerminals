module.exports = ((type)=>{
    return type = null ? function(title,description){
        console.log(`
            ******************
            * ${title||""}
            * ${description||""}
            ******************
            `)
    } : type = "async" ? async function(title,description){
        console.log(`
            ******************
            * ${title||""}
            * ${description||""}
            ******************
            `)
    } : null
})