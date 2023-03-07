
function start(){
	const d=new Date()
	let h=d.getHours()
	let m=d.getMinutes()
	let s=d.getSeconds()
	let session="AM"
	if(h>12){
		h=h-12
		session="PM"
	}
	h=h<=9?("0"+h):h
	m=m<=9?("0"+m):m
	s=s<=9?("0"+s):s
	let c=document.querySelector("#clock")
	c.innerHTML=`${h}:${m}:${s} ${session}`
	setInterval(start,1000)
}