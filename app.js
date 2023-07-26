//const { error } = require("console")

//const { json } = require("stream/consumers")
//const  url="https://api.weatherapi.com/v1/current.json?key=31ef3e98492c4021b6a214905231907&q=egypt"
//request({url},(error,Response)=>{
    //console.log(Response.body)

 //   const data1=JSON.parse(Response.body)
 //   console.log(data1.location.name)
//})

////////////////////////////////////////////

const request= require("request")
const forecast = require ("./data1.js/forecast")

 forecast(29.871903452398 , 26.4941838299718 , (error , data) => {
     console.log("ERROR : " , error)
     console.log("DATA  : " , data)
} )
