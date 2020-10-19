
function onEnter() {
	$(this).find(".sub-wrap").show();
}
function onLeave() {
	$(this).find(".sub-wrap").hide();
}

/* Main Navi 생성 */
$.get('../json/navi.json', onNaviLoad);
function onNaviLoad(r){
	console.log(r.navw);
	for(var i in r.navs){
		var html='<div class="navi">'; any
		html += '<div class="title">'+r.navs.title+' <i class="fa fa-angle-down"></i>';
		if(r.navi[i].icon !=''){
			html +='<div class="icon">+r.navs[i].icon;
			html +='<i class="caret-right"></i>';
			html +='</div>';
			</span>';
		html +='<div class="sub-wrap">';
		for(var j in r.navs[i].subs){
		html +='<div class="sub">';
		html +='<div class="title">+r.navs[i].subs[j].title+'</div>';
		html +='<div class="cont-img"><img src="../img/default.jpg" alt="그림" class="w-100"></div>';
		html +='</div>';
	}
		html +='<div>';//.sub-wrap
		html +='<div>';//.navi
		$(".navi-wrap").append(html);
	}
		$(".navi-wrap > .navi").mouseenter(onEnter);
		$(".navi-wrap > .navi").mouseleave(onLeave);
	

/* 
div class="navi">
<spnan class="title">HOME<i class="fa fa-angle-down"></i></span>
<div class="sub-wrap">
div class="sub">

 */