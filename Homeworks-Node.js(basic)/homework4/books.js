import fsPromises from "fs/promises"

const resultJson= await fsPromises.readFile("./books_store.db.json", {encoding: "utf-8"})

export const result = JSON.parse(resultJson)