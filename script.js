console.log("Hello, world!");

var a = "O";
var ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let msg = "";


function Reset() {
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
    document.getElementById("7").innerHTML = "";
    document.getElementById("8").innerHTML = "";
    document.getElementById("9").innerHTML = "";
    document.getElementById("msg").innerHTML = "";
    msg= "";
}


function bind(id) {
    console.log(id);



    if (document.getElementById(id).innerHTML != "") {
        return;
    }
    if (msg === "Winner") {
        return;
    }
    document.getElementById(id).innerHTML = a;
    if (a == "O") {

        a = "X";
    }
    else {

        a = "O";
    }

    let a1 = document.getElementById('1').innerText;
    let a2 = document.getElementById('2').innerText;
    let a3 = document.getElementById('3').innerText;
    let b1 = document.getElementById('4').innerText;
    let b2 = document.getElementById('5').innerText;
    let b3 = document.getElementById('6').innerText;
    let c1 = document.getElementById('7').innerText;
    let c2 = document.getElementById('8').innerText;
    let c3 = document.getElementById('9').innerText;

    if ((a1 != '' && a2 != '' && a3 != '') && (a1 == b2) && (b2 == c3)) {
        console.log("Winner");
        document.getElementById('msg').innerHTML = "Winner";
        msg = "Winner";

    }
    else if ((a3 != '' && b2 != '' && c1 != '') && (a3 == b2) && (b2 == c1)) {
        console.log("Winner");
        document.getElementById('msg').innerHTML = "Winner";
        msg = "Winner";
    }
    else if ((a1 != '' && a2 != '' && a3 != '') && (a1 == a2) && (a2 == a3)) {
        console.log("Winner");
        document.getElementById('msg').innerHTML = "Winner";
        msg = "Winner";
    }
    else if ((b1 != '' && b2 != '' && b3 != '') && (b1 == b2) && (b2 == b3)) {
        console.log("Winner");
        document.getElementById('msg').innerHTML = "Winner";
        msg = "Winner";
    }
    else if ((c1 != '' && c2 != '' && c3 != '') && (c1 == c2) && (c2 == c3)) {
        console.log("Winner");
        document.getElementById('msg').innerHTML = "Winner";
        msg = "Winner";
    }
    else if ((a1 != '' && b1 != '' && c1 != '') && (a1 == b1) && (b1 == c1)) {
        console.log("Winner");
        document.getElementById('msg').innerHTML = "Winner";
        msg = "Winner";
    }
    else if ((a2 != '' && b2 != '' && c2 != '') && (a2 == b2) && (b2 == c2)) {
        console.log("Winner");
        document.getElementById('msg').innerHTML = "Winner";
        msg = "Winner";
    }
    else if ((a3 != '' && b3 != '' && c3 != '') && (a3 == b3) && (b3 == c3)) {
        console.log("Winner");
        document.getElementById('msg').innerHTML = "Winner";
        msg = "Winner";

    }

    //// for(var i = 0; i < ids.length; i++) {
    //  if(ids[i] == id)
    // {
    //     document.getElementById(ids[i]).innerHTML = 'O';
    // }
    //// else{
    // document.getElementById(ids[i]).innerHTML = 'X';
    // }

    //  }





}