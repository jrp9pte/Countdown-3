import react, {useEffect, useState } from 'react'
import '../App.css' ; 
// import Button from '@mui/material-next/Button';
import Button from '@mui/material/Button';



function Weather(){



    
    const apiKey = process.env.REACT_APP_API_key;   
    const urlLocation = new URL("http://api.openweathermap.org/geo/1.0/direct");
    const [cityName, setCityName] = useState("Charlottesville");
    const [stateCode, setStateCode] = useState('VA')
    const [countryCode, setCountryCode] = useState('USA')
    let place = cityName + "," + stateCode + "," + countryCode
    urlLocation.searchParams.append("q", place )
    urlLocation.searchParams.append("appid", apiKey)

    const [locationData, setLocationData] = useState([])
    console.log("%s urlLocation" , urlLocation)
    let locationFetched = false;
    useEffect(() => {
        fetch( urlLocation )
        .then( (response) => response.json() )
        .then( (data) => { setLocationData(data)} )
        .catch((error) => console.log("There is an Error: ", error))

    }, [cityName])

    const urlWeather = new URL("https://api.openweathermap.org/data/2.5/onecall");
    const[ weatherData, setWeatherData] = useState([])

    let fetched = false;
    // if(locationFetched === true)
    useEffect( ()=> {
        if( locationData.length !== 0){

            // console.log(locationData)
            // console.log(locationData[0].lat)
            // console.log(locationData[0].lon)
            urlWeather.searchParams.append("lat",locationData[0].lat )
            urlWeather.searchParams.append("lon", locationData[0].lon )
            urlWeather.searchParams.append("appid", apiKey)
            console.log("%s",urlWeather)
            fetch( urlWeather )
            .then( (response) => response.json() )
            .then( (data) => { fetched = true; setWeatherData(data)} )
            .catch((error) => console.log("There is an Error: ", error))
        }

    },[locationData])
    // console.log("%s is url weather" , urlWeather)
    // console.log(  )
    

    // useEffect(() => {
    //     if( locationData.length !== 0){
    //         fetch( urlWeather )
    //         .then( (response) => response.json() )
    //         .then( (data) => { setWeatherData(data)} )
    //         .catch((error) => console.log("There is an Error: ", error))
    //     }
    // }, [urlWeather])
    
    if ( weatherData.length !== 0){
        console.log(weatherData)
       
    }
    
    // let weatherData2 = new Set() ;
    // for (let i = 0 ; i < 10; i++){
    //     weatherData2.add(i)
    // }
    let weatherData3 = [
        { id: 1, name: "Div 1", color: "red" },
        { id: 2, name: "Div 2", color: "blue" },
        { id: 3, name: "Div 3", color: "green" }
      ];
    // weatherData2.forEach( () => console.log("hello") )

    // console.log("%s", url )
    // console.log(String(url))
    // console.log(locationData[0].lat)
    const [cityValue, setCityValue] = useState();
    const [stateValue, setStateValue] = useState();
    
    const urlIcon = ("https://openweathermap.org/img/wn/XX@2x.png")
    let icon = "10d"

    let day = {0:"Today", 1:"Tomorrow", 2:"Day after Tomorrow", 3:"3 Days from now", 4:"4 Days from now", 5 : "5 Days from now", 6:"6 Days from now", 7:"7 Days from now", 8:"8 Days from now"}
    let date = new Date()
    // console.log("weather data" )
    // console.log( weatherData)
    if (weatherData.length !== 0)
    return <>
        <div>
            Crude Weather Page
            {/* {locationData.l} */}
        </div>
        {/* <title>
            {cityName} dhd
        </title> */}
        <div >
            <div className= "weatherInfo">  City Name :  <input type="text" value={cityValue} onChange={(e) => setCityValue(e.target.value)} /> </div>
            <div className= "weatherInfo"> State (Abbreviation)  : <input type="text" value={stateValue} onChange={(e) => setStateValue(e.target.value)} /></div>
            <div id= "saveButton">  
                <Button variant="contained" onClick={ () => {setCityName(cityValue); setStateCode(stateValue)    }  } > Save </Button>
            </div>
            <div>Curent Selection: {cityName}, {stateCode} </div>
            {/* <button onClick={handleButtonClick}>Set String</button> */}
            {/* <div>Output: {outputValue}</div> */}
            {/* <input type="text" value={inputValue} onChange={handleInputChange} >  Name of City </input> */}
            {/* Current temp is {Math.round( weatherData.current.temp - 270)} C */}
        </div>
        <div> Hourly Weather</div>
            {weatherData.hourly.map( (x, index) => 
                ( 
                <div>
                    {/* {date} */}
                    The temp  at +{index  }hrs is {Math.round(x.temp - 270)} C
                    < img  src = {urlIcon.replace("XX", x.weather[0].icon )}  /> 
                </div>  
                )
            )}
            <div> Daily Weather</div>
            {weatherData.daily.map( (x, index) => 
                ( 
                        <div>
                            The temp for {day[index] } is {Math.round(x.temp.day - 270)} C
                            < img   src = {urlIcon.replace("XX", x.weather[0].icon )}  /> 
                        </div>  
                 )
            )}
    </> 


}
export default Weather




// {"lat":38.0293,"lon":-78.4767,"timezone":"America/New_York","timezone_offset":-14400,"current":{"dt":1684261128,"sunrise":1684231376,"sunset":1684282668,"temp":297.47,"feels_like":297.92,"pressure":1008,"humidity":75,"dew_point":292.76,"uvi":5.1,"clouds":20,"visibility":10000,"wind_speed":3.09,"wind_deg":210,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}]},"minutely":[{"dt":1684261140,"precipitation":0},{"dt":1684261200,"precipitation":0},{"dt":1684261260,"precipitation":0},{"dt":1684261320,"precipitation":0},{"dt":1684261380,"precipitation":0},{"dt":1684261440,"precipitation":0},{"dt":1684261500,"precipitation":0},{"dt":1684261560,"precipitation":0},{"dt":1684261620,"precipitation":0},{"dt":1684261680,"precipitation":0},{"dt":1684261740,"precipitation":0},{"dt":1684261800,"precipitation":0},{"dt":1684261860,"precipitation":0},{"dt":1684261920,"precipitation":0},{"dt":1684261980,"precipitation":0},{"dt":1684262040,"precipitation":0},{"dt":1684262100,"precipitation":0},{"dt":1684262160,"precipitation":0},{"dt":1684262220,"precipitation":0},{"dt":1684262280,"precipitation":0},{"dt":1684262340,"precipitation":0},{"dt":1684262400,"precipitation":0},{"dt":1684262460,"precipitation":0},{"dt":1684262520,"precipitation":0},{"dt":1684262580,"precipitation":0},{"dt":1684262640,"precipitation":0},{"dt":1684262700,"precipitation":0},{"dt":1684262760,"precipitation":0},{"dt":1684262820,"precipitation":0},{"dt":1684262880,"precipitation":0},{"dt":1684262940,"precipitation":0},{"dt":1684263000,"precipitation":0},{"dt":1684263060,"precipitation":0},{"dt":1684263120,"precipitation":0},{"dt":1684263180,"precipitation":0},{"dt":1684263240,"precipitation":0},{"dt":1684263300,"precipitation":0},{"dt":1684263360,"precipitation":0},{"dt":1684263420,"precipitation":0},{"dt":1684263480,"precipitation":0},{"dt":1684263540,"precipitation":0},{"dt":1684263600,"precipitation":0},{"dt":1684263660,"precipitation":0},{"dt":1684263720,"precipitation":0},{"dt":1684263780,"precipitation":0},{"dt":1684263840,"precipitation":0},{"dt":1684263900,"precipitation":0},{"dt":1684263960,"precipitation":0},{"dt":1684264020,"precipitation":0},{"dt":1684264080,"precipitation":0},{"dt":1684264140,"precipitation":0},{"dt":1684264200,"precipitation":0},{"dt":1684264260,"precipitation":0},{"dt":1684264320,"precipitation":0},{"dt":1684264380,"precipitation":0},{"dt":1684264440,"precipitation":0},{"dt":1684264500,"precipitation":0},{"dt":1684264560,"precipitation":0},{"dt":1684264620,"precipitation":0},{"dt":1684264680,"precipitation":0},{"dt":1684264740,"precipitation":0}],"hourly":[{"dt":1684260000,"temp":297.47,"feels_like":297.92,"pressure":1008,"humidity":75,"dew_point":292.76,"uvi":5.1,"clouds":20,"visibility":10000,"wind_speed":3.44,"wind_deg":261,"wind_gust":5.82,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0},{"dt":1684263600,"temp":297.99,"feels_like":298.36,"pressure":1008,"humidity":70,"dew_point":292.15,"uvi":1.16,"clouds":36,"visibility":10000,"wind_speed":4.3,"wind_deg":266,"wind_gust":7.54,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"pop":0.31},{"dt":1684267200,"temp":298.21,"feels_like":298.52,"pressure":1007,"humidity":67,"dew_point":291.66,"uvi":0.83,"clouds":52,"visibility":10000,"wind_speed":4.01,"wind_deg":271,"wind_gust":7.54,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0.46},{"dt":1684270800,"temp":296.11,"feels_like":296.55,"pressure":1007,"humidity":80,"dew_point":292.48,"uvi":0.49,"clouds":68,"visibility":7481,"wind_speed":3.34,"wind_deg":286,"wind_gust":7.31,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"pop":0.72,"rain":{"1h":0.64}},{"dt":1684274400,"temp":295,"feels_like":295.56,"pressure":1006,"humidity":89,"dew_point":293.11,"uvi":0.23,"clouds":84,"visibility":10000,"wind_speed":2.17,"wind_deg":307,"wind_gust":5.24,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"pop":0.89,"rain":{"1h":1.08}},{"dt":1684278000,"temp":293.56,"feels_like":294.11,"pressure":1005,"humidity":94,"dew_point":292.25,"uvi":0.07,"clouds":100,"visibility":10000,"wind_speed":2.04,"wind_deg":358,"wind_gust":3.89,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"pop":1,"rain":{"1h":0.86}},{"dt":1684281600,"temp":291.71,"feels_like":292.15,"pressure":1005,"humidity":97,"dew_point":290.95,"uvi":0,"clouds":100,"visibility":8812,"wind_speed":2.16,"wind_deg":13,"wind_gust":4.33,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"pop":1,"rain":{"1h":1.14}},{"dt":1684285200,"temp":290.81,"feels_like":291.22,"pressure":1006,"humidity":99,"dew_point":290.34,"uvi":0,"clouds":100,"visibility":5450,"wind_speed":1.7,"wind_deg":8,"wind_gust":4.47,"weather":[{"id":502,"main":"Rain","description":"heavy intensity rain","icon":"10n"}],"pop":0.99,"rain":{"1h":4.24}},{"dt":1684288800,"temp":290.46,"feels_like":290.83,"pressure":1006,"humidity":99,"dew_point":290.01,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":0.39,"wind_deg":128,"wind_gust":0.56,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10n"}],"pop":0.99,"rain":{"1h":3.44}},{"dt":1684292400,"temp":290.15,"feels_like":290.49,"pressure":1006,"humidity":99,"dew_point":289.81,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":0.12,"wind_deg":44,"wind_gust":0.36,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.78},{"dt":1684296000,"temp":290.07,"feels_like":290.4,"pressure":1006,"humidity":99,"dew_point":289.59,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":0.96,"wind_deg":355,"wind_gust":1.04,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.74},{"dt":1684299600,"temp":289.9,"feels_like":290.19,"pressure":1006,"humidity":98,"dew_point":289.37,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":0.77,"wind_deg":316,"wind_gust":0.87,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.74},{"dt":1684303200,"temp":289.71,"feels_like":289.98,"pressure":1006,"humidity":98,"dew_point":289.05,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":0.9,"wind_deg":303,"wind_gust":0.89,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.74},{"dt":1684306800,"temp":289.28,"feels_like":289.48,"pressure":1006,"humidity":97,"dew_point":288.61,"uvi":0,"clouds":83,"visibility":10000,"wind_speed":1.2,"wind_deg":303,"wind_gust":1.12,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"pop":0},{"dt":1684310400,"temp":289.24,"feels_like":289.44,"pressure":1006,"humidity":97,"dew_point":288.46,"uvi":0,"clouds":91,"visibility":10000,"wind_speed":1.1,"wind_deg":301,"wind_gust":1.08,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1684314000,"temp":288.97,"feels_like":289.11,"pressure":1006,"humidity":96,"dew_point":288.11,"uvi":0,"clouds":94,"visibility":10000,"wind_speed":1.39,"wind_deg":308,"wind_gust":1.32,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1684317600,"temp":288.48,"feels_like":288.55,"pressure":1007,"humidity":95,"dew_point":287.44,"uvi":0,"clouds":96,"visibility":10000,"wind_speed":1.53,"wind_deg":304,"wind_gust":1.45,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1684321200,"temp":287.75,"feels_like":287.75,"pressure":1008,"humidity":95,"dew_point":286.66,"uvi":0.21,"clouds":96,"visibility":10000,"wind_speed":1.61,"wind_deg":292,"wind_gust":1.61,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1684324800,"temp":289.42,"feels_like":289.48,"pressure":1008,"humidity":91,"dew_point":287.58,"uvi":0.86,"clouds":96,"visibility":10000,"wind_speed":1.35,"wind_deg":294,"wind_gust":3.13,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1684328400,"temp":291.4,"feels_like":291.24,"pressure":1009,"humidity":75,"dew_point":286.57,"uvi":1.45,"clouds":37,"visibility":10000,"wind_speed":1.81,"wind_deg":336,"wind_gust":4.38,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"pop":0},{"dt":1684332000,"temp":293.93,"feels_like":293.53,"pressure":1010,"humidity":56,"dew_point":284.64,"uvi":2.72,"clouds":23,"visibility":10000,"wind_speed":2.71,"wind_deg":3,"wind_gust":5.02,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0},{"dt":1684335600,"temp":295.01,"feels_like":294.64,"pressure":1010,"humidity":53,"dew_point":284.83,"uvi":4.14,"clouds":39,"visibility":10000,"wind_speed":2.81,"wind_deg":4,"wind_gust":4.55,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"pop":0.01},{"dt":1684339200,"temp":293.42,"feels_like":293.12,"pressure":1010,"humidity":62,"dew_point":285.62,"uvi":5.28,"clouds":54,"visibility":10000,"wind_speed":3.88,"wind_deg":37,"wind_gust":4.89,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"pop":0.2,"rain":{"1h":0.12}},{"dt":1684342800,"temp":291.05,"feels_like":290.7,"pressure":1011,"humidity":69,"dew_point":284.9,"uvi":5.83,"clouds":62,"visibility":10000,"wind_speed":3.98,"wind_deg":67,"wind_gust":6.13,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1684346400,"temp":293.82,"feels_like":293.38,"pressure":1011,"humidity":55,"dew_point":284.23,"uvi":5.63,"clouds":65,"visibility":10000,"wind_speed":3,"wind_deg":68,"wind_gust":5.06,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1684350000,"temp":295.62,"feels_like":295.15,"pressure":1011,"humidity":47,"dew_point":283.41,"uvi":6.92,"clouds":80,"visibility":10000,"wind_speed":1.26,"wind_deg":53,"wind_gust":4.39,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1684353600,"temp":296.15,"feels_like":295.55,"pressure":1011,"humidity":40,"dew_point":281.76,"uvi":4.96,"clouds":82,"visibility":10000,"wind_speed":1.67,"wind_deg":346,"wind_gust":3.99,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1684357200,"temp":296.37,"feels_like":295.77,"pressure":1011,"humidity":39,"dew_point":281.26,"uvi":2.93,"clouds":84,"visibility":10000,"wind_speed":1.84,"wind_deg":352,"wind_gust":3.69,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1684360800,"temp":295.65,"feels_like":295.05,"pressure":1011,"humidity":42,"dew_point":281.89,"uvi":1.35,"clouds":73,"visibility":10000,"wind_speed":2.38,"wind_deg":56,"wind_gust":3.35,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1684364400,"temp":291.59,"feels_like":290.85,"pressure":1013,"humidity":52,"dew_point":281.47,"uvi":0.42,"clouds":66,"visibility":10000,"wind_speed":4.24,"wind_deg":70,"wind_gust":7.45,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1684368000,"temp":288.22,"feels_like":287.35,"pressure":1014,"humidity":60,"dew_point":280.32,"uvi":0,"clouds":56,"visibility":10000,"wind_speed":2.37,"wind_deg":58,"wind_gust":5.55,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1684371600,"temp":285.36,"feels_like":284.31,"pressure":1016,"humidity":64,"dew_point":278.42,"uvi":0,"clouds":11,"visibility":10000,"wind_speed":1.25,"wind_deg":35,"wind_gust":1.48,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"pop":0},{"dt":1684375200,"temp":284.35,"feels_like":283.25,"pressure":1017,"humidity":66,"dew_point":277.85,"uvi":0,"clouds":18,"visibility":10000,"wind_speed":1.48,"wind_deg":4,"wind_gust":1.39,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"pop":0},{"dt":1684378800,"temp":283.36,"feels_like":282.24,"pressure":1018,"humidity":69,"dew_point":277.65,"uvi":0,"clouds":12,"visibility":10000,"wind_speed":1.78,"wind_deg":8,"wind_gust":1.74,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"pop":0},{"dt":1684382400,"temp":282.31,"feels_like":281.38,"pressure":1019,"humidity":73,"dew_point":277.56,"uvi":0,"clouds":9,"visibility":10000,"wind_speed":1.98,"wind_deg":30,"wind_gust":2.57,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1684386000,"temp":281.47,"feels_like":280.51,"pressure":1020,"humidity":77,"dew_point":277.43,"uvi":0,"clouds":7,"visibility":10000,"wind_speed":1.86,"wind_deg":16,"wind_gust":1.97,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1684389600,"temp":280.88,"feels_like":279.97,"pressure":1020,"humidity":79,"dew_point":277.27,"uvi":0,"clouds":6,"visibility":10000,"wind_speed":1.72,"wind_deg":1,"wind_gust":1.69,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1684393200,"temp":280.48,"feels_like":279.75,"pressure":1021,"humidity":80,"dew_point":276.92,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":1.5,"wind_deg":357,"wind_gust":1.45,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1684396800,"temp":279.91,"feels_like":278.95,"pressure":1021,"humidity":79,"dew_point":276.28,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":1.63,"wind_deg":16,"wind_gust":1.89,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1684400400,"temp":279.36,"feels_like":278.33,"pressure":1022,"humidity":78,"dew_point":275.47,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":1.62,"wind_deg":16,"wind_gust":1.81,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1684404000,"temp":278.85,"feels_like":277.62,"pressure":1023,"humidity":76,"dew_point":274.67,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":1.73,"wind_deg":15,"wind_gust":1.97,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1684407600,"temp":280.02,"feels_like":279.15,"pressure":1023,"humidity":71,"dew_point":274.85,"uvi":0.21,"clouds":0,"visibility":10000,"wind_speed":1.57,"wind_deg":13,"wind_gust":4.83,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1684411200,"temp":283.18,"feels_like":281.67,"pressure":1024,"humidity":55,"dew_point":274.3,"uvi":0.84,"clouds":0,"visibility":10000,"wind_speed":1.9,"wind_deg":38,"wind_gust":3.9,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1684414800,"temp":285.72,"feels_like":284.23,"pressure":1024,"humidity":46,"dew_point":274.25,"uvi":2.14,"clouds":0,"visibility":10000,"wind_speed":2.09,"wind_deg":51,"wind_gust":3.25,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1684418400,"temp":287.96,"feels_like":286.54,"pressure":1024,"humidity":40,"dew_point":274.2,"uvi":4.01,"clouds":0,"visibility":10000,"wind_speed":2.28,"wind_deg":61,"wind_gust":2.98,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1684422000,"temp":289.93,"feels_like":288.58,"pressure":1024,"humidity":35,"dew_point":274.25,"uvi":6.08,"clouds":0,"visibility":10000,"wind_speed":2.39,"wind_deg":79,"wind_gust":2.9,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1684425600,"temp":291.54,"feels_like":290.3,"pressure":1023,"humidity":33,"dew_point":274.76,"uvi":7.84,"clouds":0,"visibility":10000,"wind_speed":2.66,"wind_deg":84,"wind_gust":3.07,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1684429200,"temp":292.85,"feels_like":291.71,"pressure":1023,"humidity":32,"dew_point":275.72,"uvi":8.67,"clouds":0,"visibility":10000,"wind_speed":2.64,"wind_deg":93,"wind_gust":3.07,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0}],"daily":[{"dt":1684256400,"sunrise":1684231376,"sunset":1684282668,"moonrise":1684225260,"moonset":1684272000,"moon_phase":0.9,"temp":{"day":297.82,"min":287.19,"max":298.21,"night":290.15,"eve":293.56,"morn":289.07},"feels_like":{"day":298.17,"night":290.49,"eve":294.11,"morn":288.83},"pressure":1008,"humidity":70,"dew_point":291.98,"wind_speed":4.3,"wind_deg":266,"wind_gust":7.54,"weather":[{"id":502,"main":"Rain","description":"heavy intensity rain","icon":"10d"}],"clouds":36,"pop":1,"rain":11.4,"uvi":5.69},{"dt":1684342800,"sunrise":1684317728,"sunset":1684369121,"moonrise":1684313220,"moonset":1684362480,"moon_phase":0.93,"temp":{"day":291.05,"min":283.36,"max":296.37,"night":283.36,"eve":291.59,"morn":287.75},"feels_like":{"day":290.7,"night":282.24,"eve":290.85,"morn":287.75},"pressure":1011,"humidity":69,"dew_point":284.9,"wind_speed":4.24,"wind_deg":70,"wind_gust":7.45,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":62,"pop":0.74,"rain":0.12,"uvi":6.92},{"dt":1684429200,"sunrise":1684404081,"sunset":1684455573,"moonrise":1684401360,"moonset":1684453020,"moon_phase":0.97,"temp":{"day":292.85,"min":278.85,"max":294.97,"night":282.99,"eve":291.1,"morn":280.02},"feels_like":{"day":291.71,"night":282.99,"eve":290.49,"morn":279.15},"pressure":1023,"humidity":32,"dew_point":275.72,"wind_speed":2.98,"wind_deg":128,"wind_gust":7.59,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"pop":0,"uvi":8.67},{"dt":1684515600,"sunrise":1684490435,"sunset":1684542025,"moonrise":1684489620,"moonset":1684543500,"moon_phase":0,"temp":{"day":295.35,"min":279.97,"max":295.35,"night":286.74,"eve":290.99,"morn":281.68},"feels_like":{"day":294.98,"night":286.66,"eve":290.92,"morn":281.68},"pressure":1021,"humidity":52,"dew_point":284.91,"wind_speed":1.85,"wind_deg":170,"wind_gust":3.32,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":80,"pop":0,"uvi":7.77},{"dt":1684602000,"sunrise":1684576792,"sunset":1684628476,"moonrise":1684578240,"moonset":1684633800,"moon_phase":0.03,"temp":{"day":296.67,"min":285.47,"max":296.67,"night":286.41,"eve":290.28,"morn":289.52},"feels_like":{"day":296.75,"night":285.88,"eve":290.14,"morn":289.43},"pressure":1013,"humidity":64,"dew_point":289.32,"wind_speed":2.02,"wind_deg":38,"wind_gust":3.6,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":95,"pop":0.9,"rain":4.18,"uvi":7.73},{"dt":1684688400,"sunrise":1684663149,"sunset":1684714927,"moonrise":1684667220,"moonset":1684723860,"moon_phase":0.07,"temp":{"day":297.18,"min":280.78,"max":297.38,"night":285.88,"eve":289.66,"morn":285.73},"feels_like":{"day":296.32,"night":285.09,"eve":289.09,"morn":284.82},"pressure":1016,"humidity":26,"dew_point":276.18,"wind_speed":3.19,"wind_deg":80,"wind_gust":3.57,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"pop":0,"uvi":0.86},{"dt":1684774800,"sunrise":1684749509,"sunset":1684801377,"moonrise":1684756620,"moonset":1684813440,"moon_phase":0.1,"temp":{"day":298.4,"min":283.68,"max":298.96,"night":289.56,"eve":292.94,"morn":288.21},"feels_like":{"day":297.89,"night":289.29,"eve":292.52,"morn":287.52},"pressure":1020,"humidity":35,"dew_point":281.78,"wind_speed":3.24,"wind_deg":56,"wind_gust":9.36,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":83,"pop":0,"uvi":1},{"dt":1684861200,"sunrise":1684835870,"sunset":1684887826,"moonrise":1684846380,"moonset":0,"moon_phase":0.13,"temp":{"day":295.54,"min":283.44,"max":296.61,"night":285.63,"eve":291.88,"morn":286.06},"feels_like":{"day":294.96,"night":285.28,"eve":291.53,"morn":285.6},"pressure":1025,"humidity":43,"dew_point":282.2,"wind_speed":3.48,"wind_deg":75,"wind_gust":5.26,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":6,"pop":0,"uvi":1}]}