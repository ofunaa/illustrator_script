
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
	file1 = new File ("~/Desktop/illustrator_Script/ruby/bg_solid.jpg");
	set_image(file1);
	file2 = new File ("~/Desktop/illustrator_Script/ruby/logo.png");
	set_image(file2);
}
function set_image(fileRef){
	docObj = activeDocument;
	pItem = docObj.placedItems.add();
	pItem.file = fileRef;
	pItem.position = [0,1536];
	pItem.width = 2048;
	pItem.height = 1536;
	redraw();
}

function get_content(){
	filepath = "~/Desktop/illustrator_Script/ruby/text/answer.txt";
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
		layObj.name = "0" + (i + 1) + "_quiz_answer_OK_karamon";
		var main_content;
		main_content = one_page[i].split("\n");
		set_title(main_content[0]);
		set_title_ruby(main_content[1]);
		set_answer(main_content[2]);
		set_seikai();
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

function set_seikai(){
	var ruby = activeDocument.textFrames.add();
	ruby.contents = "正解";
	ruby.paragraphs[0].size = 70;
	ruby.translate(1024, 744);
	ruby.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
	ruby.textRange.characterAttributes.fillColor = setColor(35,24,21);
	ruby.textRange.characterAttributes.textFont = kozmin;

	var ruby2 = activeDocument.textFrames.add();
	ruby2.contents = "せいかい";
	ruby2.paragraphs[0].size = 16;
	ruby2.translate(1024, 814);
	ruby2.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
	ruby2.textRange.characterAttributes.fillColor = setColor(35,24,21);
	ruby2.textRange.characterAttributes.textFont = kozmin;
	ruby2.textRange.characterAttributes.tracking = 400;
}

function set_answer(question){
	var pathRef = activeDocument.pathItems.rectangle(673, 274, 1500, 436);
	var textRef = activeDocument.textFrames.areaText(pathRef);
	textRef.paragraphs.add(question);
	textRef.textRange.characterAttributes.size = 48;
	textRef.textRange.characterAttributes.fillColor = setColor(35,24,21);
	textRef.textRange.characterAttributes.textFont = kozmin;
}


function setColor(r,g,b){
	var tmpColor = new RGBColor();
	tmpColor.red = r;
	tmpColor.green = g;
	tmpColor.blue = b;
	return tmpColor;
}


main();









