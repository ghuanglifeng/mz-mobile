(function(factory){
	window["Bimwinner"]=factory();
})(function(){
	var getJSON=function(url,callback,errback){
		var xhr=new XMLHttpRequest();
		xhr.open("GET",url);
		xhr.setRequestHeader("Accept","application/json, text/*;q=0.6");
		xhr.onload=function(){
			try{
				var rt= xhr.responseText;
				var rtJson=JSON.parse(rt);
				callback(rtJson);
			}catch(e){
				errback(e);
			}
		};
		xhr.onerror=function(){
			errback(xhr.statusText);
		};
		xhr.send();
	};
	//var vizcadInterface=null;
	
	/*getJSON("http://192.168.1.125:8081/demo/conf.json",function(response){
		vizcadInterface=response.vizcadApi;
	},function(){
		console.error("Failed to load vizcadInterface");
	});*/
	function Bimwinner(){}
	var vizcad={
		url:null,
		open:function(){
			var docOpenUrl="http://192.168.1.125:8081/BWview/show.html?d="+ encodeURIComponent(this.url);
			var _name=this.url.replace(/[^\w$]/g,"_");
			//var width=Math.min(screen.availWidth, 21/2.54*96+30);
			//var height=Math.min(screen.availHeight-100, 29.7/2.54*96);
			//window.open(docOpenUrl,_name,"width="+width+",height="+height);
			window.location.href=docOpenUrl;
			//window.open(docOpenUrl,_name);
		}
	};
	Bimwinner.prototype.getVizcad=function(){
		return vizcad;
	}
	Bimwinner.prototype.version="1.0.0";
	return Bimwinner;
})