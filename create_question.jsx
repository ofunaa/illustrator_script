
function main(){
	add_docment();
	paste_image();
	get_content();
	split_content(main_text);
	set_content(one_page);
}

function add_docment(){
	documents.add(DocumentColorSpace.RGB, 2048, 1536);
}

function paste_image(){
	fileRef = new File ("/Users/takujifunao/Desktop/illustrator_Script/ruby/bg_solid.jpg");
	docObj = activeDocument;
	pItem = docObj.placedItems.add();
	pItem.file = fileRef;
	pItem.position = [0,1536];
	pItem.width = 2048;
	pItem.height = 1536;
	redraw();
}

function get_content(){
	filepath = "/Users/takujifunao/Desktop/illustrator_Script/text/question.txt";
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
	one_page = main_text.split("end");
}

function set_content(one_page){
	// for(i=0; i<one_page.length; i++){
		var main_content;
		main_content = one_page[0].split("\n");
		set_title(main_content[0]);
		set_question(main_content[1]);
		set_choices(main_content[2],main_content[3],main_content[4],main_content[5]);
	// }
}

function set_title(title){
	var ruby = activeDocument.textFrames.add();
	ruby.contents = title;
	ruby.paragraphs[0].size = 70;
	ruby.translate(1024, 1340);
	ruby.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
}

function set_question(question){
	var pathRef = activeDocument.pathItems.rectangle(1236, 274, 1500, 436);
	var textRef = activeDocument.textFrames.areaText(pathRef);
	textRef.paragraphs.add(question);
	textRef.textRange.characterAttributes.size = 48;
}

function set_choices(one,two,three,four){
	set_rect(700,274,600,150);
	set_rect(700,1174,600,150);
	set_rect(450,274,600,150);
	set_rect(450,1174,600,150);
	alert("one "+one);
}

function set_rect(x,y,w,h){
	whiteColor = setColor(255,255,255);
	blackColor = setColor(35,24,21);
	pObj = activeDocument.pathItems.rectangle(x,y,w,h);
	pObj.filled = true;
	pObj.stroked = true;
	pObj.strokeWidth = 1/4;
	pObj.fillColor = whiteColor;
	pObj.strokeColor = blackColor;
}

function setColor(r,g,b){
	var tmpColor = new RGBColor();
	tmpColor.red = r;
	tmpColor.green = g;
	tmpColor.blue = b;
	return tmpColor;
}

function create_new_layer(){

}

main();









