$(function(){
    //서브페이지 LNB 작동
    var mainNum = $("body").attr("class").slice(2,3);
    var subNum = $("body").attr("class").slice(4,5);
    console.log(mainNum+","+subNum);
    $(".sub-depth1 li:nth-child(" + mainNum + ")").addClass("on");
    $(".depth2-" + mainNum).show();
    $(".depth2-" + mainNum + "> li:nth-child(" + subNum + ")").addClass("on");
     
    var lnb_btn = $(".lnb-btn .on");
    lnb_btn.click(function(){
        $(this).parent().toggleClass("h-auto");
        $(this).parent().siblings().filter("ol");
        return false;
    });
    //바닥 클릭하면 lnb접기
    $(document).click(function(e){
        if(!$(e.target).hasClass("lnb_btn")) {
            $(".lnb-btn").removeClass("h-auto");
        }
    });
});
