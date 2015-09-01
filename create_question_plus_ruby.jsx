
function main(){
	kozmin = app.textFonts.getByName("KozMinPro-Regular");
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
	fileRef = new File ("~/Desktop/illustrator_Script/ruby/bg_solid.jpg");
	docObj = activeDocument;
	pItem = docObj.placedItems.add();
	pItem.file = fileRef;
	pItem.position = [0,1536];
	pItem.width = 2048;
	pItem.height = 1536;
	redraw();
}

function get_content(){
	filepath = "~/Desktop/illustrator_Script/ruby/text/question.txt";
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
	for(i=0; i<one_page.length; i++){
		layObj = activeDocument.layers.add();
		layObj.name = "0" + (i + 1) + "_quiz_karamon";
		var main_content;
		main_content = one_page[i].split("\n");
		set_title(main_content[0]);
		set_title_ruby(main_content[1]);
		set_question(main_content[2]);
		set_choices(main_content[3],main_content[5],main_content[7],main_content[9]);
		set_ruby(main_content[4],main_content[6],main_content[8],main_content[10]);
	}
}

function set_title(title){
	var ruby = activeDocument.textFrames.add();
	ruby.contents = title;
	ruby.paragraphs[0].size = 70;
	ruby.translate(1024, 1340);
	ruby.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
	ruby.textRange.characterAttributes.fillColor = setColor(35,24,21);
	ruby.textRange.characterAttributes.textFont = kozmin;

}
function set_title_ruby(title_ruby){
	var ruby = activeDocument.textFrames.add();
	ruby.contents = title_ruby;
	ruby.paragraphs[0].size = 16;
	ruby.translate(1024, 1410);
	ruby.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
	ruby.textRange.characterAttributes.fillColor = setColor(35,24,21);
	ruby.textRange.characterAttributes.textFont = kozmin;
	ruby.textRange.characterAttributes.tracking = 400;
}

function set_question(question){
	var pathRef = activeDocument.pathItems.rectangle(1236, 274, 1500, 436);
	var textRef = activeDocument.textFrames.areaText(pathRef);
	textRef.paragraphs.add(question);
	textRef.textRange.characterAttributes.size = 48;
	textRef.textRange.characterAttributes.fillColor = setColor(35,24,21);
	textRef.textRange.characterAttributes.textFont = kozmin;
}

function set_choices(one,two,three,four){
	set_rect(700,274,600,150);
	set_text(645,274,600,100, one);

	set_rect(700,1175,600,150);
	set_text(645,1175,600,100, two);

	set_rect(450,274,600,150);
	set_text(395,274,600,100, three);

	set_rect(450,1175,600,150);
	set_text(395,1175,600,100, four);

	set_rect(225,874,300,125);
	set_text(185,874,300,100, "回答");
}
function set_ruby(one,two,three,four){
	set_ruby_text(665,274,600,100, one);
	set_ruby_text(665,1175,600,100, two);
	set_ruby_text(415,274,600,100, three);
	set_ruby_text(415,1175,600,100, four);
	set_ruby_text(205,874,300,100, "かいとう");
}

function set_text(x,y,w,h,choice){
	var pathRef = activeDocument.pathItems.rectangle(x,y,w,h);
	var textRef = activeDocument.textFrames.areaText(pathRef);
	textRef.paragraphs.add(choice);
	textRef.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
	textRef.textRange.characterAttributes.size = 48;
	textRef.textRange.characterAttributes.fillColor = setColor(35,24,21);
	textRef.textRange.characterAttributes.textFont = kozmin;
}
function set_ruby_text(x,y,w,h,choice){
	var pathRef = activeDocument.pathItems.rectangle(x,y,w,h);
	var textRef = activeDocument.textFrames.areaText(pathRef);
	textRef.paragraphs.add(choice);
	textRef.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
	textRef.textRange.characterAttributes.size = 16;
	textRef.textRange.characterAttributes.fillColor = setColor(35,24,21);
	textRef.textRange.characterAttributes.textFont = kozmin;
	textRef.textRange.characterAttributes.tracking = 400;
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

main();









