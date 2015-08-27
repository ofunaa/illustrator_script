function main(){
	select_file();
	get_content(file);
	split_content(main_text);
	output_ruby(ruby_ruby);
}
function select_file(){
	file = new Window("dialog", "txtのファイル名を入力", [200,100,580,245]);
	file.okBtn 		= file.add("button",[180,80,250,80+25], "OK", { name:"ok"});
	file.cancelBtn 	= file.add("button", [90,80,160,80+25], "Cancel", {name: "cancel"});
	file.eText 		= file.add("edittext",[100,10,275,10+25], "");
	file.show();
}

function get_content(file){
	filepath = "/Users/takujifunao/Desktop/illustrator_Script/text/" + file.eText.text;
	fileObj = new File(filepath);
	flag = fileObj.open("r");
	if (flag == true){
		main_text = fileObj.read();
		fileObj.close();
	}else{
		alert("ファイルが開けませんでした");
	}
}

function split_content(main_text){
	ruby_ruby = main_text.split("\n");
}

function output_ruby(ruby_ruby){
	for(i=0; i<ruby_ruby.length; i++){
		var ruby = activeDocument.textFrames.add();
			ruby.contents = ruby_ruby[i];
			ruby.paragraphs[0].size = 16;
			ruby.translate(50 + 100 * i, 500);
	}
}

main();