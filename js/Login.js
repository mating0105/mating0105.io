$(function(){
	//移入二维码时，二维码左移效果
	$(".loginBox .login_sweep").hover(function(){
        //移入时  二维码左移
		$("#two_cold").stop(true,true).animate({"left":"0px"},200);
		//手机图片出现
		$(".loginBox .sweep").stop(true,true).delay(100).slideDown();
	},function(){
		//手机图片隐藏
	    $(".loginBox .sweep").stop(true,true).delay(100).slideUp();
		//移除时  二维码恢复
		$("#two_cold").stop(true,true).animate({"left":"84px"},200);
	})
	
	$("#login_menu li").click(function(){
		//添加当前样式
		$(this).addClass("current").siblings().removeClass("current");
		//显示对应id的内容
		var index=$(this).index();
		if(index==0){
			$(".login_account_box").hide();
			$(".login_sweep_box").show();
		}else{
			$(".login_sweep_box").hide();
			$(".login_account_box").show();
		}
	})
	
	
})
