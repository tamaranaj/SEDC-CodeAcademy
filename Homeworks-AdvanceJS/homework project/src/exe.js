let fetchDataService = {
    makeAjaxCall: async function(url){
        try{
            let response = await fetch(url)
            let data = await response.json()
            console.log(data)
            eventService.eventTableDisplay(data)
            
            
        }
        catch(error){
            console.log(error)
        }
    }
}



let inputsLocationService = {
    typeSelect: document.getElementById("typeSelect"),
    brandSelect: document.getElementById("brandSelect"),
    gasTypeSelect: document.getElementById("gasTypeSelect"),
    colorSelect : document.getElementById("colorSelect"),
    inputByModel: document.getElementById("inputByModel"),
    inputByDoors: document.getElementById("filterByDoors"),
    radioBtnNew: document.getElementById("radioBTnNew"),
    radioBtnOld: document.getElementById("radioBTnOld"), 
    inputPower: document.getElementById("inputHorsePower"),
    checkRadio: function(){
        if(this.radioBtnNew.checked){
            return true
        }else if( this.radioBtnOld.checked){
            return false
        }
    },
    
    getInputValues: function (){

        let radioValue = this.checkRadio()
        
        let values = [
            this.typeSelect.value,
            this.brandSelect.value,
            this.gasTypeSelect.value,
            this.colorSelect.value,
            this.inputByModel.value,
            parseInt(this.inputByDoors.value),
            radioValue, 
            parseInt(this.inputPower.value)
        ]
        return values
    }

}


let filteringTableService = {
    
    validatingInputs: function(){
        
        let values = inputsLocationService.getInputValues()
            console.log(values)
        let filterValues = values.filter(Boolean).filter(item=> item!="default")
            //console.log(filterValues)

        return filterValues
    },
    filteringTable: function(data){
        let values = this.validatingInputs()
        console.log(values)
        let test = data.map(item=> Object.values(item))
            console.log(test)
        
        let found = [];
        for(let items of test){
            let intersectionEvery = values.every( value => items.includes(value) );
            
            if (intersectionEvery) {
                found.push(items)
            }
            
        }
        return found   
    }
}


let creatingTableService = {
    tableContainer: document.getElementById("tableContainer"),
    tbody: document.getElementsByTagName("tbody")[0],
    tableHead: document.getElementById("tableHead"),
    displayNoVehicle: document.getElementById("noVehicle"),

    createTableHead: function(array){
        this.tableHead.innerHTML = "" //deleting previous
        let tableRowInThead = document.createElement("tr")
        let firstColEmpty = document.createElement("th")
        firstColEmpty.setAttribute("scope", "3")
        tableRowInThead.appendChild(firstColEmpty)
        this.tableHead.appendChild(tableRowInThead)
        //getting properties and print in table head
        let firstObject = Object.keys(array[0])
        console.log(firstObject)
        firstObject.forEach((property) =>{
        tableRowInThead.innerHTML += `<th scope="col">${property.toUpperCase()}</th>`
        tableRowInThead.style.textAlign="center"
        })
        
    },

    createTableBody: function(array){
        this.tbody.innerHTML = "" //deleting previous
        let y = 0
        
        for(let i=0; i<array.length;i++){
            y++// for numbers in first col
            let row = document.createElement("tr")
            let numsTd = document.createElement("td")
            let numsText = document.createTextNode(`${y}`)
            numsTd.appendChild(numsText)
            row.appendChild(numsTd)
            array[i].forEach(item=> row.innerHTML += `<td>${item}</td>`)
            
            this.tbody.appendChild(row)            
        }
        
    }
}
let eventService = {
    submitBtn: document.getElementById("submit"),
    resetBtn: document.getElementById("reset"),
    eventTableDisplay: function(data){
        this.submitBtn.addEventListener("click",function(event){
            event.preventDefault()
            let print = filteringTableService.filteringTable(data)
            console.log(print)
            if(print.length == 0){
                creatingTableService.tableHead.innerHTML = ""
                creatingTableService.tbody.innerHTML = ""
                creatingTableService.displayNoVehicle.innerText = "There is no that kind of vehicle"
                console.log("not found")
            }else{
                creatingTableService.displayNoVehicle.innerText = ""
                creatingTableService.createTableHead(data)
                creatingTableService.createTableBody(print)
            }
            
        })
    
        
    },
    resetEvent: function (){
        this.resetBtn.addEventListener("click", function(event){
            event.preventDefault()
            creatingTableService.tableHead.innerHTML = ""
            creatingTableService.tbody.innerHTML = ""
            creatingTableService.displayNoVehicle.innerText = ""
            inputsLocationService.typeSelect.value ="default"
            inputsLocationService.brandSelect.value="default"
            inputsLocationService.gasTypeSelect.value="default"
            inputsLocationService.colorSelect.value="default"
            inputsLocationService.inputByModel.value=""
            inputsLocationService.inputByDoors.value=""
            inputsLocationService.radioBtnNew.checked = false
            inputsLocationService.radioBtnOld.checked = false
            inputsLocationService.inputPower.value = ""
            
    
        })
    }
}


fetchDataService.makeAjaxCall("https://raw.githubusercontent.com/tamaranaj/SEDC-CodeAcademy/main/Homeworks-AdvanceJS/20240209/src/cars.json")
eventService.resetEvent()