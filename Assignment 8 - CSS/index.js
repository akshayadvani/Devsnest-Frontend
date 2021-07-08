let square=document.querySelector(".square")

console.log(square)

for(let i=1;i<=900;i++){
	square.innerHTML+="<div class='box'></div>"
}

let boxs=document.querySelectorAll(".box")

console.log(boxs)
boxs.forEach((box,index)=>{
	box.addEventListener("click",()=>{
		
	  box.classList.toggle('changeColor');
	})
	
	if(index==46 || index==47|| index==48||index==49||index==50||index==74||index==75||index==80||index==81||index==104||index==110||index==111||index==133||index==138||index==139||index==140||index==141||index==142||index==162||index==163||index==166||index==167||index==168||index==169||index==170||index==171||index==172||index==173||index==174||index==192||index==195||index==196||index==201||index==202||index==221||index==222 || index==223 || index==224|| index==225||index==230||index==231||index==251||index==254||index==255||index==258||index==260||index==261||index==262||index==281||index==285||index==293||index==311||index==317||index==323||index==342||index==346||index==347||index==348||index==349||index==352||index==353||index==354||index==373||index==374||index==378||index==379||index==380||index==381||index==382||index==402||index==403||index==404 || index==405 || index==410|| index==431||index==435||index==436||index==437||index==438||index==439||index==461||index==465||index==466||index==470||index==472||index==491||index==494||index==497||index==501||index==503||index==520||index==523||index==528||index==531||index==533||index==550||index==553||index==558||index==560||index==562||index==580||index==581||index==584||index==587||index==590||index==592||index==611||index==612 || index==613||index==614||index==615||index==616||index==617||index==618||index==619||index==620||index==621||index==622||index==671||index==672||index==673||index==674||index==675||index==676||index==677||index==678||index==679||index==680||index==681||index==682||index==702||index==703||index==704||index==705||index==706||index==707||index==708||index==709||index==710||index==711||index==712 || index==715 || index==716|| index==731||index==733||index==734||index==735||index==736||index==737||index==738||index==739||index==740||index==741||index==742||index==744||index==747||index==761||index==763||index==764||index==765||index==766||index==767||index==769||index==770||index==771||index==772||index==773||index==776||index==791||index==794||index==795||index==796||index==801||index==802||index==806||index==822||index==827||index==831 || index==835 || index==853|| index==854||index==855||index==856||index==857||index==862||index==863||index==864){
		box.classList.add('changeColor');
	}
})
