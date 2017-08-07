function camelcase(mn){
var num = 1;
	for(var i = 0; i <mn.length; i++){
		//document.write(i);
		if(mn[i]>='A' && mn[i]<='Z'){
			//document.write(i);
			num++;
		}
	}document.write(num);
}
camelcase("myNameIsKaneshAs");
