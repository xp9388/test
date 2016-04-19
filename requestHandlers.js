var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");

function start(response) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    //'</head>'+
    // '<body>'+
    // '<form action="/camera" enctype="multipart/form-data" '+
    // 'method="post">'+
	// '<input type="file" name="camera" multiple="multiple">'+
    // '<input type="submit" value="camera file" />'+
    // '</form>'+
    // '</body>'+
	//
	'<body>'+   
	'<div id="Layer1" style="position:absolute; width:100%; height:100%; z-index:-1">'+
	'<img src="/bg" height="100%" width="100%"/>'+  
	'</div>'+
	'<form action="/camera" enctype="multipart/form-data" '+
    'method="post">'+
   // '<input type="file" name="camera" multiple="multiple">'+
    '<div style="text-align: center;vertical-align: middle;">'+
	'<input type="submit" value="camera" />'+
	'</div>'+
	'</form>'+
	'</body> '+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

// 响应camera
var camera = function(response, request) {
    console.log('Request handler "camera" was called.');
    var form=new formidable.IncomingForm();
    console.log('about to parse');

    // 写一个临时路径
    form.uploadDir='tmp';
    form.parse(request,function(err,fields,files){
        console.log('parsing done');
        console.log(files.camera);

        // 同步操作文件，需要try catch
       // try{
            //fs.renameSync(files.upload.path,'tmp/'+files.upload.name);
		//	fs.renameSync(files.camera.path,'tmp/test.png');
        //}catch(e){
        //    console.log(e);
       // }
	var body = '<body>'+   
		'<div id="Layer1" style="position:absolute; width:100%; height:100%; z-index:-1">'+
		'<img src="/bg" height="100%" width="100%"/>'+  
		'</div>';
	//	response.write(body);
        response.writeHead(200,{'Content-Type':'text/html'});
		response.write(body);
		response.write('<div align="center">	<span style="font-size:32px;font-family:KaiTi_GB2312;"><strong>2016/04/07 </strong></span><br /></div>');
		//response.write('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 04&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 06<br />');
        response.write('<div style="text-align: center;">');
		response.write('01&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03<br>');
		response.write('</div><br>');
		response.write('<div style="text-align: center;">');
		response.write('<a href="/show"><img src="/show"  width="200" /></a> &nbsp;');
		response.write('<a href="/show1"><img src="/show1" width="200" /></a> &nbsp;');
		response.write('<a href="/show2"><img src="/show2"  width="200" /></a> &nbsp;');
		response.write('</div><br><br>');
        response.write('<div style="text-align: center;">');
		response.write('<a href="/show3"><img src="/show3"  width="200" /></a> &nbsp;');
		response.write('<a href="/show4"><img src="/show4" width="200" /></a> &nbsp;');
		response.write('<a href="/show5"><img src="/show5"  width="200" /></a> &nbsp;');
		response.write('</div><br>');
		//response.write('<a href="/show"><img src="/show6"  width="200" /></a> &nbsp;');
		response.write('</body> ')
		
		
		
        response.end();
    });
};
// 显示文件
var show=function(response){
    console.log('request handler "show" was called');
    fs.readFile('./tmp/test.png','binary',function(err,file){
        if(err){
            response.writeHead(500,{'Content-Type':'text/plain'});
            response.write(err+'\n');
            response.end();
        }else{
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(file,'binary');
            response.end();
        }
    });
};

var show1=function(response){
    console.log('request handler "show1" was called');
    fs.readFile('./tmp/test1.png','binary',function(err,file){
        if(err){
            response.writeHead(500,{'Content-Type':'text/plain'});
            response.write(err+'\n');
            response.end();
        }else{
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(file,'binary');
            response.end();
        }
    });
};

var show2=function(response){
    console.log('request handler "show2" was called');
    fs.readFile('./tmp/test2.png','binary',function(err,file){
        if(err){
            response.writeHead(500,{'Content-Type':'text/plain'});
            response.write(err+'\n');
            response.end();
        }else{
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(file,'binary');
            response.end();
        }
    });
};

var show3=function(response){
    console.log('request handler "show3" was called');
    fs.readFile('./tmp/test3.png','binary',function(err,file){
        if(err){
            response.writeHead(500,{'Content-Type':'text/plain'});
            response.write(err+'\n');
            response.end();
        }else{
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(file,'binary');
            response.end();
        }
    });
};

var show4=function(response){
    console.log('request handler "show4" was called');
    fs.readFile('./tmp/test4.png','binary',function(err,file){
        if(err){
            response.writeHead(500,{'Content-Type':'text/plain'});
            response.write(err+'\n');
            response.end();
        }else{
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(file,'binary');
            response.end();
        }
    });
};

var show5=function(response){
    console.log('request handler "show5" was called');
    fs.readFile('./tmp/test5.png','binary',function(err,file){
        if(err){
            response.writeHead(500,{'Content-Type':'text/plain'});
            response.write(err+'\n');
            response.end();
        }else{
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(file,'binary');
            response.end();
        }
    });
};

var shownow=function(response){
    console.log('request handler "show5" was called');
    fs.readFile('./pictures/now.png','binary',function(err,file){
        if(err){
            response.writeHead(500,{'Content-Type':'text/plain'});
            response.write(err+'\n');
            response.end();
        }else{
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(file,'binary');
            response.end();
        }
    });
};

var bg=function(response){
    console.log('request handler "background" was called');
    fs.readFile('./pictures/bg.jpg','binary',function(err,file){
        if(err){
            response.writeHead(500,{'Content-Type':'text/plain'});
            response.write(err+'\n');
            response.end();
        }else{
            response.writeHead(200,{'Content-Type':'image/jpg'});
            response.write(file,'binary');
            response.end();
        }
    });
};

var manual=function(response){
    console.log('request handler "manual" was called');
	var body='<html>'+
	//'<html xmlns="http://www.w3.org/1999/xhtml">'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+
	'<title>纯CSS实现的幻灯片效果mobanwang.com</title>'+
	'<style type="text/css">'+
	'#gallery { width:640px;height:auto;margin:0 auto; position:relative; }'+
	'ul#thumbnails { padding:0 0 0 10px; margin:0; list-style:none; }'+
	'ul#thumbnails li { float:left; position:relative; top:670px; }'+
	'ul#thumbnails li a { height:50px; width:50px; padding:3px; display:block; text-decoration:none; background:#fff; }'+
	'ul#thumbnails li a img { width:50px; height:50px; border:0; }'+
	'ul#thumbnails li a:hover { background:#fc0; }'+
	'ul#thumbnails li.close a:hover { background:#fff; }'+
	'#gallery #fullsize { position:absolute; left:0; top:0; height:640px; width:640px; overflow:hidden; }'+
	'#gallery #fullsize div { width:640px; height:840px; padding-top:25px; }'+
	'#gallery #fullsize div img { display:block; margin:0 auto; border:0; }'+
	'</style>'+
	'</head>'+
	'<body>'+
	'<div id="gallery">'+
	'<ul id="thumbnails">'+
    '<li><a href="/show"><img src="/show" alt="pic1" /></a></li>'+
    '<li><a href="/show2"><img src="/show2" alt="pic2" /></a></li>'+
    '<li><a href="/show3"><img src="/show3" alt="pic3" /></a></li>'+
    '<li><a href="/show4"><img src="/show4" alt="pic4" /></a></li>'+
    '<li><a href="/show5"><img src="/show5" alt="pic5" /></a></li>'+
    //'<li class="close"><a href="#close"><img src="click/close.gif" alt="Close image" /></a></li>'+
	'</ul>'+
	'<div id="fullsize">'+
    '<div id="pic1"><img src="/show1" alt="pic1" /></div>'+
    '<div id="pic2"><img src="/show2" alt="pic2" /></div>'+
    '<div id="pic3"><img src="/show3" alt="pic3" /></div>'+
	'<div id="pic4"><img src="/show4" alt="pic4" /></div>'+
    '<div id="pic5"><img src="/show5" alt="pic5" /></div>'+
    '<div id="pic6"><img src="/show6" alt="pic5" /></div>'+
	'<div id="close"></div>'+
	'</div>'+
	'</div>'+
	'<div style="width:550px;margin:20px auto; clear:both;">'+
	'</div>'+
	'</body>'+
	'</html>';+
	response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
};

var takephoto=function(response){
	console.log('request handler "take photo" was called');
	var exec = require('child_process').exec,
	last = exec('raspistill -o pictures/now.png -rot 180');

	last.stdout.on('data', function (data) {
	console.log('OUTPUT:' + data);
	});

	last.on('exit', function (code) {
	console.log('CODE:' + code);
	}); 
	
	var body='<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
	'<body>'+   
	'<div id="Layer1" style="position:absolute; width:100%; height:100%; z-index:-1">'+
	'<img src="/bg" height="100%" width="100%"/>'+  
	'</div>'+
	'<form action="/takephoto" enctype="multipart/form-data" '+
    'method="post">'+
    '<div style="text-align: center;vertical-align: middle;">'+
	'<div id="nowpic"><img src="/shownow" width="300" /></div>'+
	'<input type="submit" value="take photo" />'+
	'</div>'+
	'</form>'+
	'</body> '+
    '</html>';
	response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}



exports.start = start;
exports.camera = camera;
exports.show = show;
exports.show1 =show1;
exports.show2 =show2;
exports.show3 =show3;
exports.show4 =show4;
exports.show5 =show5;
exports.shownow =shownow;
exports.bg =bg;
exports.takephoto =takephoto;
exports.manual =manual;
//exports.show6 =show6;