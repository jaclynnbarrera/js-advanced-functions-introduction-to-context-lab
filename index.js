function createEmployeeRecord(arr) {
    let obj = {
        "firstName": arr[0],
        "familyName": arr[1],
        "title": arr[2],
        "payPerHour": arr[3],
        "timeInEvents": [],
        "timeOutEvents": []
    }
    return obj
}

function createEmployeeRecords(arr) {
    let final = arr.map(a => createEmployeeRecord(a))
    return final
}

function createTimeInEvent(obj,stamp) {
    let hour = stamp.split(" ")[1]
    let parsedHour = parseInt(hour)
    let date = stamp.split(" ")[0]

    obj.timeInEvents.push({type: "TimeIn", hour: parsedHour , date: date })
    return obj
}

function createTimeOutEvent(obj,stamp) {
    let hour = stamp.split(" ")[1]
    let parsedHour = parseInt(hour)
    let date = stamp.split(" ")[0]

    obj.timeOutEvents.push({type: "TimeOut", hour: parsedHour , date: date })
    return obj
}

function hoursWorkedOnDate(employee, inputDate) {
    // "YYYY-MM-DD"
   let inDay = employee.timeInEvents.find(function(e){
       return e.date === inputDate
   })

   let outDay = employee.timeOutEvents.find(function (e) {
       return e.date === inputDate
   })

   return (outDay.hour - inDay.hour) / 100
}



// let hoursWorkedOnDate = function(employee, soughtDate){
//     let inEvent = employee.timeInEvents.find(function(e){
//         return e.date === soughtDate
//     })

//     let outEvent = employee.timeOutEvents.find(function(e){
//         return e.date === soughtDate
//     })

//     return (outEvent.hour - inEvent.hour) / 100
// }