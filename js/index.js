(function() {
	setTimeout(too, 500);
})()

function too() {
	console.log('初始化...');
	setTimeout("console.log('初始化完成')",1000);
}