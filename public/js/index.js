function onEnter() {
	$(this).find(".sub-wrap").css("display", "flex");
}
function onLeave() {
	$(this).find(".sub-wrap").css("display", "none");
}
function onColorClick(){
	$(this) .addClass("active").siblings().removeClass("active");
	$(this).sibling
	var $imgCase =$(this).parent().prev().find(".img-case");
	$imgCase.stop().fadeOut(100);
		$imgCase.eq($(this).index()).stop().delay(100).fadeIn(100);
	}
	var suvNow=0;
	var suvLast=3;
	function onSubPrevClick(){
		/* subNow = subNow == 0 ? = subLast : subNow - 1; */
		if(subNow == 0){
			subNow = 2;
			$(".sub-slide.wrap").css("left", -subLast = 100 + "%");
		}
		else subNow--;
			subAni();
		}
function onSubNextClick(){
	subNow = subNow == 3 ? 1 : subNow + 1;
	subAni();
}

function subAni(){
$(".sub-slide.wrap").stop().animate({"left":-100 * subNow +"%"}, 500, function(){
	if(subNow == subLast) {
		subNow = 0;
		$(".sub-slide .wrap").css("left", 0);
	}
});
}

/** Main Navi 생성 **********************/
$.get('../json/navi.json', onNaviLoad);
function onNaviLoad(r) {
	console.log(r.navs);
	var html = '';
	for(var i in r.navs) {
		html  = '<div class="navi '+r.navs[i].class+'">';
		html += '<div class="title">'+r.navs[i].title+' <i class="fa fa-angle-down"></i>';
		if(r.navs[i].icon != '') {
			html += '<div class="icon '+r.navs[i].color+'">'+r.navs[i].icon;
			html += '<i class="fas fa-caret-right"></i>';
			html += '</div>';
		} 
		html += '</div>';
		html += '<div class="sub-wrap">';
		if(i == 0) {
			for(var j in r.navs[i].subs) {
				html += '<div class="sub">';
				html += '<div class="title">'+r.navs[i].subs[j].title+'</div>';
				html += '<div class="cont-img"><img src="'+r.navs[i].subs[j].src+'" class="w-100"></div>';
				html += '</div>';
			}
		}
		else if(i == 1) {
			html += '<div class="wrapper">';
			html += '	<div class="lt">';
			html += '		<div class="subs">';
			for(var j in r.navs[i].subs) {
				html += '			<div class="sub">';
				html += '				<div class="title">'+r.navs[i].subs[j].title+'</div>';
				for(var k in r.navs[i].subs[j].subs) {
					html += '			<div class="name rel">'+r.navs[i].subs[j].subs[k].title;
					if(r.navs[i].subs[j].subs[k].icon != ''){
						html += '<div class="icon '+r.navs[i].subs[j].subs[k].color+'">'+r.navs[i].subs[j].subs[k].icon;
						html += '<i class="fas fa-caret-right"></i>';
						html += '</div>';
					}
					html +='</div>';
				}
				html += '			</div>';
			}
			html += '		</div>';
			html += '		<div class="infos">';
			for(var k in r.navs[i].infos) {
				html += '<div class="info">';
				html += '	<div class="title">';
				html += '		<i class="'+r.navs[i].infos[k].icon+'"></i> ';
				html += 		r.navs[i].infos[k].title;
				html += '	</div>';
				html += '	<div class="content">'+r.navs[i].infos[k].content+'</div>';
				html += '</div>';
			}
			html += '		</div>';
			html += '	</div>';
			html += '	<div class="rt">';
			html += '	</div>';
			html += '<div>';
		}
		html += '</div>';	// .sub-wrap
		html += '</div>'; // .navi
		console.log(html);
		$(".navi-wrap").append(html);
	}
	$(".navi-wrap > .navi").mouseenter(onEnter);
	$(".navi-wrap > .navi").mouseleave(onLeave);
	$(".navi-wrap > .navi").find(".color").click(onColorClick)
}
/*
<div class="navi">
	<span class="title">HOME <i class="fa fa-angle-down"></i></span>
	<div class="sub-wrap">
		<div class="sub">
			<div class="title">1. HOME DEFAULT</div>
			<div class="cont-img"><img src="../img/default.jpg" alt="그림" class="w-100"></div>
		</div>
	</div>
</div>
*/