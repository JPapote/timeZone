const getTime = async(req, res) => {
    res.send("Hello Word!!")
}

const postTime = async(req, res) => {
     const {dato1, dato2} = req.body

     const part = dato1.split(":");

     let d = new Date()

     const n =  Number(dato2)

     let utc_zone = n + 58;
     
     d.setMinutes(d.getMinutes() + utc_zone);
     
     d.setUTCHours(`${part[0], part[1], part[2]}`)

     const hora = new Date(d).getHours();
     const min = new Date(d).getMinutes();
     const seg = new Date(d).getSeconds();
     
     const dataTime = {
         "response": {
             "time":  `${hora}:${min}:${seg}`,
             "zoneTime": "utc"
         }
     }
     res.send(dataTime)
}

module.exports = {
    getTime,
    postTime
}