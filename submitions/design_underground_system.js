
var UndergroundSystem = function() {
    
    this.arrivals = {}
    this.averageTime ={}

};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    
    this.arrivals[`${id}`] = {
        "id": id ,
        "station_name": stationName,
        "time": t ,
    }
    
    
    // console.log(` MAP NOW: ${JSON.stringify(this.arrivals)}`)

};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    
    var olderArrival = this.arrivals[`${id}`]
    var trackLocalAverage = (t - olderArrival['time'] ) 
    
    // check if there's already these two distances traveled
    if(this.averageTime[`${this.arrivals[`${id}`]['station_name']}_${stationName}`] !== undefined){
        console.log("Here 1")
        this.averageTime[`${this.arrivals[`${id}`]['station_name']}_${stationName}`] = {
            'avg_now': this.averageTime[`${this.arrivals[`${id}`]['station_name']}_${stationName}`]['avg_now']  + trackLocalAverage,
            'rounds': this.averageTime[`${this.arrivals[`${id}`]['station_name']}_${stationName}`]['rounds'] +1,
        }         
    }else{
      
        // This is a new time travelled
        this.averageTime[`${this.arrivals[`${id}`]['station_name']}_${stationName}`] = {
            'avg_now': trackLocalAverage,
            'rounds': 1,
        }   
          console.log("Here 2")
    }            
    
    // console.log(`AVG TIME ${JSON.stringify(this.averageTime)}`)
    
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    // return 67.0
    
   return (this.averageTime[`${startStation}_${endStation}`]['avg_now'] / this.averageTime[`${startStation}_${endStation}`]['rounds'])
    
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

 var obj = new UndergroundSystem()
 obj.checkIn(0,"stationName",23)

