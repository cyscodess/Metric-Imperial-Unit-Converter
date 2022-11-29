let lengthVal = document.getElementById("convert-length")
let volumeVal = document.getElementById("convert-vol")
let massVal = document.getElementById("convert-mass")

let valueField = document.getElementById("value-el")

let lengthFeet = ""
let lengthMeters = ""
let volumeLiters = ""
let volumeGallons = ""
let massKilos = ""
let massPounds = ""

const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
  inputValue = valueField.value
  //length
  lengthFeet = (inputValue * 3.281).toFixed(3)
  lengthMeters = (inputValue / 3.281).toFixed(3)
  //volume
  volumeGallons = (inputValue * 0.264).toFixed(3)
  volumeLiters = (inputValue / 0.264).toFixed(3)
  //mass
  massKilos =  (inputValue * 2.204).toFixed(3)
  massPounds =  (inputValue / 2.204).toFixed(3)
  render()
})

function render() {
  lengthVal.textContent = `${inputValue} meters = ${lengthFeet} feet | ${inputValue} feet = ${lengthMeters} meters`
  volumeVal.textContent = `${inputValue} liters = ${volumeGallons} gallons | ${inputValue} gallons = ${volumeLiters} liters`
  massVal.textContent = `${inputValue} kilos = ${massKilos} pounds | ${inputValue} pounds = ${massPounds} kilos`
}