import React, { useState, useEffect } from 'react'

export const App = () => {

  const [weather, setWeather] = useState()
  const [day2, setDay2] = useState()
  const [day3, setDay3] = useState()


    useEffect(() => {
      fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.07/lat/59.3269/data.json`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            console.log(data.timeSeries[10].parameters[1])
            setWeather(data.timeSeries[0].parameters[10].values[0])
            setDay2(data.timeSeries[10].parameters[1].values[0])
            setDay3(data.timeSeries[24].parameters[1].values[0])
          })
      }, [])

  return (
    <div>
      Find me in src/app.js!
     <p>{weather} C</p>
     <p>{day2} C</p>
     <p>{day3} C</p>
    </div>
  )
}
