function saveDynamicDataToFile(){var userName=document.getElementById("name").value;var userEmail=document.getElementById("email").value;var userMessage=document.getElementById("message").value;var blob=new Blob(["Name :- ",userName,"\n"+"Email :- ",userEmail,"\n"+"Message :- ",userMessage],{type:"text/plain;charset=utf-8"});saveAs(blob,"Contact.txt");}
const signs=document.querySelectorAll('x-sign')
const randomIn=(min,max)=>(Math.floor(Math.random()*(max-min+1)+min))
const mixupInterval=el=>{const ms=randomIn(2000,4000)
el.style.setProperty('--interval',`${ms}ms`)}
signs.forEach(el=>{mixupInterval(el)
el.addEventListener('webkitAnimationIteration',()=>{mixupInterval(el)})})
function downloadJSAtOnload(){var element=document.createElement("script");element.src="Scripts/circletype.min.js";document.body.appendChild(element);}
if(window.addEventListener)
window.addEventListener("load",downloadJSAtOnload,false);else if(window.attachEvent)
window.attachEvent("onload",downloadJSAtOnload);else window.onload=downloadJSAtOnload;