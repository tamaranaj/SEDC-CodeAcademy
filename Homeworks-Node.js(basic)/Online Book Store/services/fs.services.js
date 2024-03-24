import fsPromises from "fs/promises"


export const writeFile = async (place, data)=>{

    await fsPromises.writeFile(place, JSON.stringify(data, null, 2))
}

export const readFile = async(place)=>{
    const content = await fsPromises.readFile(place, {encoding: "utf-8"})

    return JSON.parse(content)
}

