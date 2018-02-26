var http = require('http'),
	data = '';

http.get('http://web:8000',function(res){
	console.log('go...');
	data = '';
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		data += chunk;
	});
	res.on('end',function(){
		console.log(data);
	});
});