var a = "Your Text Here";
    var s=0;
    var x=a.length;
    for(var i=0;i<=x;i++){
    if(a[i]===" "){
    s++;
    }
    }
    var out=x-s;
    console.log("Total Letters : ",out);