function seatBeltscheck(callback){
    console.log("1.Secured and in good condition.")
    setTimeout(callback,1000)

}
function flightControl(callback){
    console.log("2.Flight Controls: Checked for full and free movement.")
    setTimeout(callback,1000)
}

function instrumentCheck(callback){
    console.log("3.Instrument Check: Altimeter, gyros, and avionics (radio, navigation, transponder) set and verified.")
    setTimeout(callback,1000)
}

function fuelSystem(callback){
    console.log("4.Fuel System: Quantity verified and fuel selector set to the correct tank.")
    setTimeout(callback,1000)

}

function engineStartup(callback){
    console.log("5.Engine Start & Run-up: Magnetos checked, oil pressure/temperature monitored, and engines tested.")
    setTimeout(callback,1000)

}

function emergencyEquipments(){
    console.log("6.Emergency Equipment: Verification of fire extinguishers, first aid kits, and emergency oxygen")

}
console.log("**flight takeoff precheck**")
seatBeltscheck(function (){
    flightControl(function (){
        instrumentCheck(function(){
            fuelSystem(function () {
                engineStartup(function () {
                    emergencyEquipments()
                })
            })
        })
    })
})


