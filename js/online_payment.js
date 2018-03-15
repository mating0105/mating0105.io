$(function(){
	
//	绑定事件
   $(".bank_card .add_card").click(function(){
// 	定义新增元素及内容
   	  var newtr= "<tr><td><button class='bankCard current'>银行卡<span class='selected'>√</span></button></td><td><input type='text' id='bandName' value='中国招商银行卡     网银     最近使用' /></td><td><button class='remove_card'>删除</button></td></tr>";
// 	  将元素添加到table中
   	  $(this).closest("table").append(newtr);
   	
   })
   //后增元素利用事件委派来进行删除
   //$("父选择器").delegate("新增元素","事件类型",事件处理函数 function(){})
    $(".bank_card table").delegate(".remove_card","click",function(){
//   这里的this指新增元素    移除tr
     $(this).parent().parent().remove();
   	})
	
	
	
	
	
	
	
	
	
	
	
})
