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

        //console.log(initialValues)

        let result = {
            averageTemperature: initialValues.tempSum / data.list.length,
            averageHumidity: initialValues.humiditySum / data.list.length,
            minTemperature: initialValues.minTemperature,
            maxTemperature: initialValues.maxTemperature,
            minHumidity: initialValues.minHumidity,
            maxHumidity: initialValues.maxHumidity,
            dataTime: data.list[0].dt_txt,
            dataIcon: data.list[0].weather[0].icon
        }
        return result
    }
}

let uiService = {
    divStatistic: document.getElementById("statisticsResult"),
    loadingSpinner: document.getElementsByClassName("lds-ring"),
    displayStatistics: function(statisticsResult,city){
        
        
        this.divStatistic.innerHTML = ""
        this.divStatistic.innerHTML = `
            
            <h4>Here are information for your search ${city.toUpperCase()}</h4>
            <br>
            <h4>Weather on ${statisticsResult.dataTime} is <img src="https://openweathermap.org/img/w/${statisticsResult.dataIcon}.png" width="100"> </h4>
            
            <br>
            <div class="container">
            <div class="row">
                <h2 class="col-sm-6">Average Temperature: ${Math.round(statisticsResult.averageTemperature)} C</h2>
                <h2 class="col-sm-6">Average Humidity: ${Math.round(statisticsResult.averageHumidity)} %</h2>
            </div>
            <div class="row">
                <h2 class="col-sm-6">Minimum Temperature: ${Math.round(statisticsResult.minTemperature)} C</h2>
                <h2 class="col-sm-6">Minimum Humidity: ${Math.round(statisticsResult.minHumidity)} %</h2>
            </div>
            <div class="row">
                <h2 class="col-sm-6">Maximum Temperature: ${Math.round(statisticsResult.maxTemperature)} C</h2>
                <h2 class="col-sm-6">Maximum Humidity: ${Math.round(statisticsResult.maxHumidity)} %</h2>
            </div>
        </div>           
        `
    },
    load: function(element){
        element.style.display="inline-block"
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(element.style.display="none")

            },1000) 

        })
        
    }
    
}



let weatherApiService = {
    getWetherData: async function(city){
        //call
        
        try{
            
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=f369d0b7d1652d9e091fe8121aa44ede`
            let response = await fetch(url);
            let data = await response.json();
            await uiService.load(uiService.loadingSpinner[0])
            //1. find statictics
            let statisticsResult= statisticsService.calculateStatistics(data)
            //2.display the statistics
            uiService.displayStatistics(statisticsResult, city)
            //3.display table
            await uiService.load(uiService.loadingSpinner[1])
            hourlyWeatherService.createTableHead()
            hourlyWeatherService.createTableBody(data.list)
            
           

        }
        catch{
            
            console.log("An error occurred")
        }
        
    }
    
}



let hourlyWeatherService = {
    tableDiv: document.getElementById("hourlyTableResult"),

    createTableHead: function(){
        let tableHead = document.createElement("thead")
        this.tableDiv.innerHTML= ""
        this.tableDiv.appendChild(tableHead)
        tableHead.innerHTML = `
        <div class="row">
            <div class='col-sm-2'>Icon of weather</div>
            <div class='col-sm-2'>Description of weather</div>
            <div class='col-sm-2'>Date and Time</div>
            <div class='col-sm-2'>Temperature<button id="sortTempAsc" class="btn">Asc</button><button id="sortTempDesc" class="btn">Desc</button></div>
            <div class='col-sm-2'>Humidity<button id="sortHumiAsc" class="btn">Asc</button><button id="sortHumiDesc" class="btn">Desc</button></div>
            <div class='col-sm-2'>Wind Speed</div>        
        </div>
        `
    },
    

    createTableBody: function(data){
        let tBody = document.createElement("tbody")
        this.tableDiv.appendChild(tBody)
        for(let item of data){
            
            tBody.innerHTML +=`
            <div class="row">
                <div class='col-sm-2'><img src="https://openweathermap.org/img/w/${item.weather[0].icon}.png" ></div>
                <div class='col-sm-2'>${item.weather[0].description}</div>
                <div class='col-sm-2'>${item.dt_txt}</div>
                <div class='col-sm-2'>${item.main.temp}</div>
                <div class='col-sm-2'>${item.main.humidity}</div>
                <div class='col-sm-2'>${item.wind.speed}</div>
            </div>
            `
        }
        eventsTableService.listenerTempAsc(data)
        eventsTableService.listenerTempDesc(data)
        eventsTableService.listenerHumidityAsc(data)
        eventsTableService.listenerHumidityDesc(data)
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

let sortingDataService = {

    copyData: function(originalArray){
        let copiedData = []
        for(let items of originalArray){
            copiedData.push(items)
        }
        return copiedData
        
    },
    sortByAscTemp: function(array){
        let arrayToSort = this.copyData(array)
        
        return arrayToSort.sort((item1,item2)=>item1.main.temp-item2.main.temp)
        
    },
    sortByDescTemp: function(array){
        let arrayToSort = this.copyData(array)
        
        return arrayToSort.sort((item1,item2)=>item2.main.temp-item1.main.temp )
        
    },
    sortByAscHumi: function(array){
        let arrayToSort = this.copyData(array)
        
        return arrayToSort.sort((item1,item2)=>item1.main.humidity-item2.main.humidity )
        
    },
    sortByDescHumi: function(array){
        let arrayToSort = this.copyData(array)
        
        return arrayToSort.sort((item1,item2)=>item2.main.humidity-item1.main.humidity )
       
    }
    
}

let eventsTableService = {
    
    listenerTempAsc: function(data){
        document.getElementById("sortTempAsc").addEventListener("click", function(event){
            event.preventDefault()
            let array = sortingDataService.sortByAscTemp(data)
            hourlyWeatherService.tableDiv.innerHTML = ""
            hourlyWeatherService.createTableHead()
            hourlyWeatherService.createTableBody(array)
        })
    },
    listenerTempDesc: function(data){
        document.getElementById("sortTempDesc").addEventListener("click", function(event){
            event.preventDefault()
            let array = sortingDataService.sortByDescTemp(data)
            hourlyWeatherService.tableDiv.innerHTML = ""
            hourlyWeatherService.createTableHead()
            hourlyWeatherService.createTableBody(array)
        })
    },
    listenerHumidityAsc: function(data){
        document.getElementById("sortHumiAsc").addEventListener("click", function(event){
            event.preventDefault()
            let array = sortingDataService.sortByAscHumi(data)
            hourlyWeatherService.tableDiv.innerHTML = ""
            hourlyWeatherService.createTableHead()
            hourlyWeatherService.createTableBody(array)
        })
    },
    listenerHumidityDesc: function(data){
        document.getElementById("sortHumiDesc").addEventListener("click", function(event){
            event.preventDefault()
            let array = sortingDataService.sortByDescHumi(data)
            hourlyWeatherService.tableDiv.innerHTML = ""
            hourlyWeatherService.createTableHead()
            hourlyWeatherService.createTableBody(array)
        })
    }

}

navigationMenuService.registerClickEventListeners()
aboutService.displayInfoAbout()


