window.onload=function(){
	let first=document.querySelector('#first')
	let second=document.querySelector('#second')
	
	let start1=document.querySelector('.start1')
	let stop1=document.querySelector('.stop1')
	let reset1=document.querySelector('.reset1')
	let timer;
	
	let f=0
	let s=0

	start1.onclick=()=>{
		clearInterval(timer)
		timer=setInterval(starttimer,10)
	}
	function starttimer(){
		f++
		if(f<=9){first.innerHTML="0"+f}
		if(f>9){first.innerHTML=f}
		if(f==99){
			f=0
			s++
			if(s<=9){second.innerHTML="0"+s}
			if(s>9){second.innerHTML=s}
		}
	}

	stop1.onclick=()=>{
		clearInterval(timer)
	}

	reset1.onclick=()=>{
		clearInterval(timer)
		s=0
		f=0
		first.innerHTML="0"+f
		second.innerHTML="0"+s
	}

}
