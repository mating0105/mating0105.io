//页面加载完成以后执行js文件
$(function(){
	//左侧菜单滑动效果
	$(".menu li").hover(function(){
		//当前菜单添加高亮显示
		$(this).find(".main_menu").addClass("menu_current");
		//显示当前对应子菜单
		$(this).find(".son_menu").show();
	},function(){
		//移除菜单高亮显示
		$(this).find(".main_menu").removeClass("menu_current")
		//隐藏当前子菜单
		$(this).find(".son_menu").hide();
	})
	//配置轮播banner1的参数
	$("#boxAnimate").tyslide({
			boxh:432,//盒子的高度
			w:1000,//盒子的宽度
			h:406,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:20,//控制按钮宽度
			controlsH:20,//控制按钮高度
			radius:10,//控制按钮圆角度数
			controlsColor:"#dcdcdc",//普通控制按钮的颜色
			controlsCurrentColor:"#FC6701",//当前控制按钮的颜色
			isNumber:true //是否需要数字
	});
	//配置电子书轮播banner2-1的参数
	$("#ebookpptbox1").tyslide({
			boxh:220,//盒子的高度
			w:330,//盒子的宽度
			h:218,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:2,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:16,//控制按钮宽度
			controlsH:5,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	//配置电子书轮播banner2-2的参数
	$("#ebookpptbox2").tyslide({
			boxh:220,//盒子的高度
			w:330,//盒子的宽度
			h:218,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:2,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:16,//控制按钮宽度
			controlsH:5,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	//配置电子书轮播banner2-3的参数
	$("#ebookpptbox3").tyslide({
			boxh:220,//盒子的高度
			w:330,//盒子的宽度
			h:218,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:2,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:16,//控制按钮宽度
			controlsH:5,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	//电子书菜单滑动效果
	//绑定事件
	$("#tabTitle li").mouseover(function(){
		//移入时，当前菜单添加样式，其他兄弟移除样式
		$(this).addClass("ebook_current").siblings().removeClass("ebook_current");
		var index1=$(this).index();
		//隐藏所有内容部分
		$("#all_ebookCon .ebookCon").hide();
		//显示对应索引的内容
		$("#all_ebookCon .ebookCon").eq(index1).show();
	})
	//新书畅销榜 滑动效果
	//绑定事件
	$("#hot_sale li").mouseover(function(){
		//隐藏所有畅销榜的内容
		$("#hot_sale li").find(".listCon").hide();
		//显示所有畅销榜的标题
		$("#hot_sale li").find(".list").show();
		//隐藏当前列表的标题
		$(this).find(".list").hide();
		//显示当前列表的内容
		$(this).find(".listCon").show();
	})
	//服装 户外运动 童装公共轮播
	//配置服装轮播banner3-1的参数
	$("#common_cloth_pptbox1").tyslide({
			boxh:340,//盒子的高度
			w:430,//盒子的宽度
			h:340,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:16,//控制按钮宽度
			controlsH:5,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	//配置服装轮播banner3-2的参数
	$("#common_cloth_pptbox2").tyslide({
			boxh:340,//盒子的高度
			w:430,//盒子的宽度
			h:340,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:16,//控制按钮宽度
			controlsH:5,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	//配置服装轮播banner3-3的参数
	$("#common_cloth_pptbox3").tyslide({
			boxh:340,//盒子的高度
			w:430,//盒子的宽度
			h:340,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:16,//控制按钮宽度
			controlsH:5,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	//户外运动菜单滑动效果
	$(".cloth .common_menu li").mouseover(function(){
		//当前菜单添加高亮样式   其他菜单移除高亮样式
		$(this).addClass("common_current").siblings().removeClass("common_current");
		var index2=$(this).index();
		//隐藏所有内容部分
		$(".cloth .all_common_con .common_con").hide();
		//显示对应索引的内容
		$(".cloth .all_common_con .common_con").eq(index2).show();
	})
	//配置户外运动轮播banner3-1的参数
	$("#common_sport_pptbox1").tyslide({
			boxh:340,//盒子的高度
			w:430,//盒子的宽度
			h:340,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:16,//控制按钮宽度
			controlsH:5,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	//配置户外运动轮播banner3-2的参数
	$("#common_sport_pptbox2").tyslide({
			boxh:340,//盒子的高度
			w:430,//盒子的宽度
			h:340,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:16,//控制按钮宽度
			controlsH:5,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	//配置户外运动轮播banner3-3的参数
	$("#common_sport_pptbox3").tyslide({
			boxh:340,//盒子的高度
			w:430,//盒子的宽度
			h:340,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:16,//控制按钮宽度
			controlsH:5,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	//户外运动菜单滑动效果
	$(".outdoor_sport .common_menu li").mouseover(function(){
		//当前菜单添加高亮样式   其他菜单移除高亮样式
		$(this).addClass("common_current").siblings().removeClass("common_current");
		var index2=$(this).index();
		//隐藏所有内容部分
		$(".outdoor_sport .all_common_con .common_con").hide();
		//显示对应索引的内容
		$(".outdoor_sport .all_common_con .common_con").eq(index2).show();
	})
	//配置童装轮播banner3-1的参数
	$("#common_child_pptbox1").tyslide({
			boxh:340,//盒子的高度
			w:430,//盒子的宽度
			h:340,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:16,//控制按钮宽度
			controlsH:5,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	//配置童装轮播banner3-2的参数
	$("#common_child_pptbox2").tyslide({
			boxh:340,//盒子的高度
			w:430,//盒子的宽度
			h:340,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:16,//控制按钮宽度
			controlsH:5,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	//配置童装轮播banner3-3的参数
	$("#common_child_pptbox3").tyslide({
			boxh:340,//盒子的高度
			w:430,//盒子的宽度
			h:340,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:16,//控制按钮宽度
			controlsH:5,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	//童装菜单滑动效果
	$(".child .common_menu li").mouseover(function(){
		//当前菜单添加高亮样式   其他菜单移除高亮样式
		$(this).addClass("common_current").siblings().removeClass("common_current");
		var index2=$(this).index();
		//隐藏所有内容部分
		$(".child .all_common_con .common_con").hide();
		//显示对应索引的内容
		$(".child .all_common_con .common_con").eq(index2).show();
	})
	
	//推广商品tab滑动效果
	$(".extend .common_title ul li").mousemove(function(){
		//移入时 添加高亮样式
		$(this).addClass("common_current").siblings().removeClass("common_current");
        //获取索引值
        var index3=$(this).index();
        //显示对应所以得商品内容
        $(".extend .all_extend_con .extend_con").hide();
        $(".extend .all_extend_con .extend_con").eq(index3).show();
	})
	
	//推广商品滑入高亮效果
	$(".extend .extend_con li").mouseover(function(){
		//移入时  隐藏所有列表样式
		$(".extend .extend_con li").removeClass("extend_con_current");
		//给当前列表添加高亮显示
		$(this).addClass("extend_con_current");
	})
	
	//滚动到1000px时,出现楼梯滚动效果
    //绑定滚动条滚动事件  显示搜素狂和滚动到各个楼层按钮
	$(document).scroll(function(){
		//获取滚动条的高度
		var scroll_top1=$("html,body").scrollTop();
		//判断是否显示楼层滚动
		if(scroll_top1>=200){
			//出现滚动到各个楼层按钮
//			$(".floor").css("display","block");
			$(".floor").fadeIn();
			//显示搜素狂
			$("#fixed_box").append($("#search_form")).show();
//			$("#fixed_box").
		}else{
			//隐藏滚动到各个楼层按钮
//			$(".floor").css("display","none");
			$(".floor").fadeOut();
			//隐藏搜素狂
			$("#fixed_box").hide();
			$(".shopcar_order").after($("#search_form"));
		}
	})
	
	//楼层滚动效果
	var data_color=["#93d46f","#f65727","#bb9dee","#ff7394","#c2ec51","#00f6ff","#ffda0d"];
	$(".floor li").hover(function(){
		//改变字体颜色
		$(this).css("color","#fff");
		//改变当前li的宽度
		$(this).animate({"width":"40px"},100);
		//改变背景定位的left值
		$(this).css("background-position-x","-40px");
		//获取索引值
		var index4=$(this).index();
		//设置背景颜色
		$(this).css("background-color",data_color[index4]);
	},function(){
		//恢复字体颜色
		$(this).css("color","#000");
		//恢复当前li的宽度
		$(this).animate({"width":"0"},100);
		//恢复背景定位的left值
		$(this).css("background-position-x","0");
		//恢复背景颜色
		$(this).css("background-color","");
	})
    //楼层滚动的点击事件
	$(".floor li:not(:last)").click(function(){
        //获取每部分内容在浏览器中的高度(偏移量)
		var scroll_top2=$(".level").eq($(this).index()).offset().top;
		//设置滚动条到顶部的高度
		$("html,body").animate({"scrollTop":scroll_top2},1000);
		
	})
    //回到顶部的点击事件
    $(".floor li:last").click(function(){
		//设置滚动条到顶部的高度
		$("html,body").animate({"scrollTop":0},1000);
		
	})
	//领券中心
	$(".voucher_center_core").hover(function(){
		//滑入时 改变二维码的position的left值
		$(".qr_code").stop(true,true).delay(100).animate({"left":"-100px"},300);
	},function(){
		//滑出时 恢复二维码的position的left值
		$(".qr_code").stop(true,true).delay(100).animate({"left":"39px"},300);
	})
	
	//搜索框固定到顶部
	
	
	
	
})
