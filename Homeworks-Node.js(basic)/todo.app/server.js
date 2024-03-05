import http from "http";
import fs from "fs"

const server = http.createServer((request, response)=>{
    const url = request.url
    const method = request.method
    if(url === "/finished" && method ==="GET"){
        response.setHeader("Content-Type", "text/html")
        response.write(fs.readFileSync("./finishedTasks.txt", {encoding: "utf-8"}))
        return response.end()
    }
    if(url === "/removed" && method === "GET"){
        response.setHeader("Content-Type", "text/html")
        response.write(fs.readFileSync("./removedTasks.txt", {encoding: "utf-8"}))
        return response.end()
    }
    
    response.statusMessage = "Not Found"
    response.statusCode = 404
    return response.end()
    
})

server.listen(3002, "localhost",()=>{
    console.log("server is running")
})