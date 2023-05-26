let ampm=document.getElementById("ampm")
let ampm1=document.getElementById("ampm1")
let ampm2=document.getElementById("ampm2")
let ampm3=document.getElementById("ampm3")

function displaytime(){
	let datetime=new Date()
	let hr=datetime.getHours()
	let min=addzero(datetime.getMinutes())
	let sec=addzero(datetime.getSeconds())
	if (hr>12) {
		hr=hr-12
    ampm.innerHTML="PM"
    ampm1.innerHTML="PM"
    ampm2.innerHTML="PM"
    ampm3.innerHTML="PM"

	}
	document.getElementById("hours").innerHTML=addzero(hr)
	document.getElementById("mins").innerHTML=min
	document.getElementById("seconds").innerHTML=sec
	document.getElementById("hours1").innerHTML=addzero(hr)
	document.getElementById("mins1").innerHTML=min
	document.getElementById("seconds1").innerHTML=sec
	document.getElementById("hours2").innerHTML=addzero(hr)
	document.getElementById("mins2").innerHTML=min
	document.getElementById("seconds2").innerHTML=sec
	document.getElementById("hours3").innerHTML=addzero(hr)
	document.getElementById("mins3").innerHTML=min
	document.getElementById("seconds3").innerHTML=sec

}
function addzero(num)
{
	return num<10?"0"+num:num
}
setInterval(displaytime,500)