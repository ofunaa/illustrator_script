#target illustrator
#targetengine main

function main(){
	open_window();
}

function open_window(){
	var win = new Window("palette", "ルビを振る");
	var input = win.add("edittext",[0,0,200,30], "");
    var getBtn = win.add("button", undefined, "output to selected");
    getBtn.onClick = function(){
    	var bt = new BridgeTalk();
        bt.target="illustrator";
        bt.body = "app.activeDocument.selection.parent;"
        bt.onResult = function(res){
            alert(res.body);
        }
        bt.send();
    };
    win.center();
    win.show();
}

function output_ruby(ruby){
	alert("きてる？　3");
}

main();

