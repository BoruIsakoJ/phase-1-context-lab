/* Your Code Here */
function createEmployeeRecord(emply){
    return{
        firstName:emply[0],
        familyName: emply[1],
        title: emply[2],
        payPerHour: emply[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}
function createEmployeeRecords(emplyArr){
    return emplyArr.map(emply => createEmployeeRecord(emply))
}
function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: Number(hour),
        date: date
    })
    return this
}
function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: Number(hour),
        date: date
    }) 
    return this
}
function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date);
    let timeOut = this.timeOutEvents.find(event => event.date === date);
    
    return (timeOut.hour - timeIn.hour) / 100;
}
function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, employee) => total + allWagesFor.call(employee), 0);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

