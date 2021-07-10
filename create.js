import fs from "fs"

/**
 * @returns {object}
 * @param {string} data 
 */
function types2object(data) {
    let re = {}
    data = data.substring(data.indexOf("{")+1,data.lastIndexOf("}"))
    data.split(";\r\n").forEach(key => {
        key = key.trim()
        let types = key.substring(0,key.indexOf(" "))
        key = key.substring(key.indexOf(" ")).trim()
        key.split(" ").forEach(key => {
            re[key] = types
        })
    })
    return re
}


fs.writeFileSync(
    "./mime.json",
    JSON.stringify(types2object(fs.readFileSync("./mime.types").toString()))
);