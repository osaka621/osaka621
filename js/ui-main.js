$(function()
{
    $(window)
        .load(function()
        {
			//category("DRAH5P-A9007J01P");
            var strTimeStamp = parseInt((new Date().getTime())/60000) ; // change per minute
            $.ajax(
            {
                 url:'http://ecapi.pchome.com.tw/ecshop/adapi/v5/ad&q=onsale&sign=h24%252F3c&d=now&_callback=json_onsale_3c&'+ strTimeStamp
                ,dataType : 'jsonp'
                ,jsonp : false
                ,jsonpCallback : 'json_onsale_3c'
                ,cache : true
            })
            .done(function(data)
            {
                $.each(data, function(idx, _data)
                {

                    $.each(_data.Nodes, function(idx, _node)
                    {
						
						$("#BOX_A .titlebody")
                            .append('<div id="box'+idx+'" class="box">'+
                                        '<div id="head"><sup>&nbsp;</sup><sub>&nbsp;</sub></div><a href="'+_node.Link.Url+'" target="_blank"><div class="imgs"><img src="'+_node.Img2.Src+'" alt=""></div></a><div id="foot"><sup>&nbsp;</sup><sub>&nbsp;</sub></div>'+
                                	 '</div>');	
							
					});
					
                });
            });
			
			
			 $.ajax(
            {
                 url:'http://ecapi.pchome.com.tw/ecshop/adapi/v5/ad&q=onsale&sign=h24%252Fce&d=now&_callback=json_onsale_ce&'+ strTimeStamp
                ,dataType : 'jsonp'
                ,jsonp : false
                ,jsonpCallback : 'json_onsale_ce'
                ,cache : true
            })
            .done(function(data)
            {
                $.each(data, function(idx, _data)
                {

                    $.each(_data.Nodes, function(idx, _node)
                    {
						
						$("#BOX_B .titlebody")
                            .append('<div class="box">'+
                                        '<div id="head"><sup>&nbsp;</sup><sub>&nbsp;</sub></div><a href="'+_node.Link.Url+'" target="_blank"><div class="imgs"><img src="'+_node.Img2.Src+'" alt=""></div></a><div id="foot"><sup>&nbsp;</sup><sub>&nbsp;</sub></div>'+ 
                                	 '</div>') ;
							
					});
					
                });
            });
			
			
			 $.ajax(
            {
                 url:'http://ecapi.pchome.com.tw/ecshop/adapi/v5/ad&q=onsale&sign=h24%252Ffood&d=now&_callback=json_onsale_food&'+ strTimeStamp
                ,dataType : 'jsonp'
                ,jsonp : false
                ,jsonpCallback : 'json_onsale_food'
                ,cache : true
            })
            .done(function(data)
            {
                $.each(data, function(idx, _data)
                {

                    $.each(_data.Nodes, function(idx, _node)
                    {
						
						 $("#BOX_C .titlebody")
                            .append('<div class="box">'+
                                        '<div id="head"><sup>&nbsp;</sup><sub>&nbsp;</sub></div><a href="'+_node.Link.Url+'" target="_blank"><div class="imgs"><img src="'+_node.Img2.Src+'" alt=""></div></a><div id="foot"><sup>&nbsp;</sup><sub>&nbsp;</sub></div>'+
                                	 '</div>');
									
							
					});
					
                });
            });
			
			$.ajax(
            {
                 url:'http://ecapi.pchome.com.tw/ecshop/adapi/v5/ad&q=welcome&d=now&_callback=json_welcome&'+ strTimeStamp
                ,dataType : 'jsonp'
                ,jsonp : false
                ,jsonpCallback : 'json_welcome'
                ,cache : true
            })
            .done(function(data)
            {
                $.each(data, function(idx, _data)
                {
                    if (!_data.Nodes[0])
                    {
                        return ;
                    }

                    $.each(_data.Nodes, function(idx, _node)
                    {

                        $("#BOX_D #titlebodya")
                            .append('<div class="boxa">'+
										'<a href="'+_node.Link.Url+'" target="_blank"><div class="imga"><img src="'+_node.Img.Src+'" alt=""></div></a>'+
										'<div id="txtBox"><div class="txt0">'+_node.Link.Text+'</div><a href="'+_node.Link.Url+'" target="_blank"><div class="txt1">'+_node.Link.Text1+'</div></a><a href="'+_node.Link.Url+'" target="_blank"><div class="txt2"><span class="txt3">$</span><span class="txt4">'+_node.Link.Text2+'</span><span class="txt5">搶></span></div></a></div>'+
                                	'</div>') ;

                    }) ;
                }) ;
            });
			
        }) ;
});