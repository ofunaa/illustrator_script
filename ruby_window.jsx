#target illustrator
#targetengine main

function main(){
    kozmin = app.textFonts.getByName("KozMinPro-Regular");
	open_window();
}

function open_window(){
	var win = new Window("palette", "ルビを振る");
	var input = win.add("edittext",[0,0,200,30], "");
    var getBtn = win.add("button", undefined, "output to selected");
    var splitBtn = win.add("button", undefined, "split!!");
    splitBtn.onClick = function(){
        var bt2 = new BridgeTalk();
        bt2.target="illustrator";
        bt2.body = 'split_content()';
        bt2.send();
    };
    getBtn.onClick = function(){
    	var bt = new BridgeTalk();
        bt.target="illustrator";
        bt.body = 'set_position()';
        bt.send();
    };
    win.center();
    win.show();
}

function split_content(){
    sel = activeDocument.selection;
    x = 0;  //　文字の表示開始X座標
    y = 400;    //　文字の表示開始Y座標
    dx = 12;    //　１文字の横の移動量
    dy = 14;    //　１文字の縦の移動量
    for (i=0; i<sel.length; i++)
    {
    selObj = sel[i];
    n = selObj.contents.length;
    for (j=0; j<n; j++)
    {
    layObj = activeDocument.layers.add();
    txtObj = layObj.textFrames.add();
    txtObj.contents = selObj.contents.charAt(j);
    txtObj.translate(x+dx*j,y);
    }
    y = y - dy;
    }
}

function set_position(){
	x = app.activeDocument.selection[0].position[0];
    y = app.activeDocument.selection[0].position[1];
    return x, y;
}

function output(text, x, y){
    alert(text);
    var ruby = activeDocument.textFrames.add();
    ruby.contents = text;
    ruby.paragraphs[0].size = 16;
    ruby.translate(x, y);
    ruby.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
    ruby.textRange.characterAttributes.fillColor = setColor(35,24,21);
    ruby.textRange.characterAttributes.textFont = kozmin;
}

main();

