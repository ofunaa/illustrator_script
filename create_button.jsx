
function main(){
	kozmin = app.textFonts.getByName("KozMinPro-Regular");
	add_docment();
	get_content();
	split_content(main_text);
	set_content(one_page);
}

function add_docment(){
	documents.add(DocumentColorSpace.RGB);
}

function add_artboards(x,y,w,h){
	artboards.add(x,y,w,h);
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
	filepath = "/Users/takujifunao/Desktop/illustrator_Script/text/btn.txt";
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
		set_choices(main_content[0],main_content[1],main_content[2],main_content[3]);
	}
}


function set_choices(one,two,three,four){
	set_rect(-10,0,600,150);
	set_text(-60,0,600,100, one);

	set_rect(-10,610,600,150);
	set_text(-60,610,600,100, two);

	set_rect(-10,1220,600,150);
	set_text(-60,1220,600,100, three);

	set_rect(-10,1830,600,150);
	set_text(-60,1830,600,100, four);
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









