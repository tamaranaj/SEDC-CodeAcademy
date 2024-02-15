//first page is already displayed when the app is loaded, because of the css
//we need to show app title and greating

let header = document.getElementById("header");
header.innerText = "Weather App"

let greetingDiv = document.getElementById("greetingResult")
greetingDiv.innerText = "Welcome to the best weather app";



// NAVIGATION MENU
let navigationMenuService = {
    navigationLinks : document.getElementsByClassName("nav-link"),
    pages : document.getElementsByClassName("page"),
    citySearchInput : document.getElementById("citySearchInput"),
    citySearchBtn : document.getElementById("citySearchBtn"),
    displayPage : function(index){
        //we hide all the pages, because we dont know which one is active
        for(let page of this.pages){
            page.style.display = "none"
        }
        //to show the page with index [i]    
        this.pages[index].style.display = "block"
        
    },
    activateMenuItem: function(linkElement){
        for(let navLink of this.navigationLinks){
           
            navLink.parentElement.classList.remove("active")
        }
        linkElement.parentElement.classList.add("active")
    },
    registerClickEventListeners : function(){
        for(let i = 0; i < this.navigationLinks.length; i++){
            //navigationLinks contains <a> element
            this.navigationLinks[i].addEventListener("click", function(){
                
                navigationMenuService.displayPage(i)

                navigationMenuService.activateMenuItem(this) 
            })
            
        }
        this.citySearchBtn.addEventListener("click", function(){
            console.log(`Search input: ${navigationMenuService.citySearchInput.value}`)
            navigationMenuService.citySearchInput.value
            if(!navigationMenuService.citySearchInput.value){
                return alert("Enter name of city to get info")
            
            }

            weatherApiService.getWetherData(navigationMenuService.citySearchInput.value)
            navigationMenuService.citySearchInput.value = ""         
            
            
        })

    }

}

let statisticsService = {
    calculateStatistics: function(data){
        
        //REDUCE
        let initialValues = {
            tempSum: 0,
            humiditySum: 0,
            minTemperature: data.list[0].main.temp,
            maxTemperature: data.list[0].main.temp,
            minHumidity: data.list[0].main.humidity,
            maxHumidity: data.list[0].main.humidity
        }
        let res = data.list.reduce(function(result, item){

            result.tempSum +=item.main.temp
            result.humiditySum += item.main.humidity

            if(item.main.temp < result.minTemperature){
                result.minTemperature = item.main.temp
            }
            if(item.main.temp > result.maxTemperature){
                result.maxTemperature = item.main.temp
            }
            if(item.main.humidity < result.minHumidity){
                result.minHumidity = item.main.humidity
            }
            if(item.main.humidity > result.maxHumidity){
                result.maxHumidity = item.main.humidity
            }
            return result
        }, initialValues)

        console.log(initialValues)

        let result = {
            averageTemperature: initialValues.tempSum / data.list.length,
            averageHumidity: initialValues.humiditySum / data.list.length,
            minTemperature: initialValues.minTemperature,
            maxTemperature: initialValues.maxTemperature,
            minHumidity: initialValues.minHumidity,
            maxHumidity: initialValues.maxHumidity
        }
        return result
    }
}

let uiService = {
    divStatistic: document.getElementById("statisticsResult"),
    displayStatistics: function(statisticsResult,city){
        this.divStatistic.innerHTML = ""
        this.divStatistic.innerHTML = `

            <h4>Here are information for your search ${city.toUpperCase()}</h4>
            <div class="container">
            <div class="row">
                <h2 class="col-sm-6">AVG TEMP: ${statisticsResult.averageTemperature} C</h2>
                <h2 class="col-sm-6">AVG HUMIDITY: ${statisticsResult.averageHumidity} %</h2>
            </div>
            <div class="row">
                <h2 class="col-sm-6">MIN TEMP: ${statisticsResult.minTemperature} C</h2>
                <h2 class="col-sm-6">MIN HUMIDITY: ${statisticsResult.minHumidity} %</h2>
            </div>
            <div class="row">
                <h2 class="col-sm-6">MAX TEMP: ${statisticsResult.maxTemperature} C</h2>
                <h2 class="col-sm-6">MAX HUMIDITY: ${statisticsResult.maxHumidity} %</h2>
            </div>
        </div>           
        `
    }
}



let weatherApiService = {
    getWetherData: async function(city){
        //call
        
        try{
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=f369d0b7d1652d9e091fe8121aa44ede`
            let response = await fetch(url);
            let data = await response.json();
            //1. find statictics
            let statisticsResult= statisticsService.calculateStatistics(data)
            //2.display the statistics
            uiService.displayStatistics(statisticsResult, city)
            //3.display table
            hourlyWeatherService.createTableHead()
            hourlyWeatherService.createTableBody(data.list)
           
            hourlyWeatherService.eventListenersOnButtons(hourlyWeatherService.divSortingButtons.children[0], data)
            

        }
        catch{
            //alert("Enter name of city in search to get information")
            console.log("An error occurred")
        }
        
    }
    
}



let hourlyWeatherService = {
    tableDiv: document.getElementById("hourlyTableResult"),
    divSortingButtons: document.getElementById("sortingButtons"),
    
    createTableHead: function(){
        let tableHead = document.createElement("thead")
        this.tableDiv.innerHTML= ""
        this.tableDiv.appendChild(tableHead)
        tableHead.innerHTML = `
        <tr>
            <th>Icon of weather</th>
            <th>Description of weather</th>
            <th>Date and Time</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Wind Speed</th>        
        </tr>
        `
    },
    

    createTableBody: function(data){
        let tBody = document.createElement("tbody")
        this.tableDiv.appendChild(tBody)
        for(let item of data){
            
            tBody.innerHTML +=`
            <tr>
                <td><img src="https://openweathermap.org/img/w/${item.weather[0].icon}.png" ></td>
                <td>${item.weather[0].description}</td>
                <td>${item.dt_txt}</td>
                <td>${item.main.temp}</td>
                <td>${item.main.humidity}</td>
                <td>${item.wind.speed}</td>
            </tr>
            `
        }
        this.creatingSortingButtons()

    },
    creatingSortingButtons: function(){
        let buttonTemperature = document.createElement("button")
        let buttonTemperatureText = document.createTextNode("Sort data by temperature")
        buttonTemperature.appendChild(buttonTemperatureText)
        let buttonHumidity = document.createElement("button")  
        let buttonHumidityText = document.createTextNode("Sort data by humidity")    
        buttonHumidity.appendChild(buttonHumidityText)  
        this.divSortingButtons.appendChild(buttonTemperature)
        this.divSortingButtons.appendChild(buttonHumidity)
    },
    sortingInfoByTemperature: function(data){
        let copyied = copyData(data);
        let sorted = copyied.sort((item1,item2)=>{item2.main.temp - item1.main.temp})
        console.log(sorted)
        return sorted
    },
    eventListenersOnButtons: function(button,data){
        button.addEventListener("click", function(event){
            event.preventDefault()
            let copiedData = hourlyWeatherService.sortingInfoByTemperature(data)
            hourlyWeatherService.createTableBody(copiedData)

        })
    }
}

let aboutService = {
    divAbout: document.getElementById("aboutResult"),
    displayInfoAbout: function(){
        this.divAbout.innerHTML =`
        <div>
        <p>This application is made in 2024, from students from Qinshift Academy. It is diplaying information taken from an open api from <a href="https://openweathermap.org/api">WeatherAPI.</a></p>
        <ol>Feel free to contact us:
            <li style="list-style: inside;">By e-mail : mail@com</li>
            <li style="list-style: inside;">By phone : 12345</li>
            <li style="list-style: inside;"><a href="https://www.sedc.mk/">Qinshift Academy</a></li>
        </ol>
        </div>
        `
        
        
    }
}

navigationMenuService.registerClickEventListeners()
//4.About page
aboutService.displayInfoAbout()


function copyData(originalArray){
    let copiedData = []
    for(let items of originalArray.list){
        copiedData.push(items)
    }
    

    return copiedData
}

