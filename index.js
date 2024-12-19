const fs = require('fs')
const readline = require('readline')
const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function readfile(question) {try {
    
    const filenamewithext = "Question"+question+".txt"
    const filecontent = fs.readFileSync(filenamewithext)
    return console.log(`THE CONTENT FROM FILE ${filenamewithext}:\n ${filecontent}`)
} catch (error) {
    console.log(`Question${filename}.txt Not Found(404)`);
    
}
}
function filenameinput() {
    rl.question(`Please Tell Question No.(Upto Question 1 to 7):` , (file)=>{
        const readfilecontent = readfile(file)
        rl.close()
    })
}
filenameinput()