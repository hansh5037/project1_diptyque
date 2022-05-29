$(function(){
    $("#dip-gnb").on("mouseover focusin", function(){
        $(".bg-wh").stop().slideDown(300);
        $("#dip-gnb .depth2").stop().slideDown(300);
    });
    $("#dip-gnb").on("mouseout focusout", function(){
        $(".bg-wh").stop().slideUp(300);
        $("#dip-gnb .depth2").stop().slideUp(300);
    });
    //모바일 gnb구현
    $("#m-gnb .depth1 > a").click(function(){
        //선택한 메뉴 활성화
        $(this).parent().siblings().removeClass("active");
        $(this).parent().toggleClass("active");
        //서브메뉴 화면에 펼치기(보이기)
        $(this).next().stop().slideToggle(400);
        //다른 서브메뉴 숨기기
        $(this).parent().siblings().find(".depth2").stop().slideUp(400);
        return false;
    });
    $(".m-gnb-label").click(function(){
        $(".mobile").fadeToggle(400);
        $("#m-gnb .depth1").removeClass("active");
        $(".depth2").stop().slideUp(400);
    });

    fitImg();
    function fitImg(){
		$(".fit-img").each(function(){
			let tgImg = $(this);
			let parentBox = $(this).parent();
			let imgRatio = tgImg.height() / tgImg.width();
			let boxRatio = parentBox.innerHeight() / parentBox.innerWidth();
			console.log(imgRatio, boxRatio);
			if(imgRatio > boxRatio){ //이미지 비율이 박스 비율보다 크다면(높이가 크다면)
				tgImg.css({"width": "100%", "height": "auto"});
			}else {
				tgImg.css({"width": "auto", "height": "100%"});
			}
		});
	};
});