console.log("Hello, world!");
function bind(id)
{
    console.log(id);
   
    var ids = ["1", "2", "3","4","5","6","7","8","9"];
    for(var i = 0; i < ids.length; i++) {
        if(ids[i] == id)
        {
            document.getElementById(ids[i]).innerHTML = 'O';
        }
        else{
            document.getElementById(ids[i]).innerHTML = 'X';
        }
            
    }
   
}