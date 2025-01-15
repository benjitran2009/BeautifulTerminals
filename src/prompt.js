module.exports = ((type)=>{
    return type = null ? function(string){
        process.stdout.write(`${string||""} ? `)
        process.stdin.on('data', (data) => {
            process.stdin.pause();
            return data
        });
    } : type = "async" ? async function(string){
        process.stdout.write(`${string||""} ? `)
        process.stdin.on('data', (data) => {
            process.stdin.pause();
            return data
        });
    } : null
})