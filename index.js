
var table = document.getElementById("output-table");
var titleInput = document.getElementById("title-input");
var authorInput = document.getElementById("author-input");
var yearInput = document.getElementById("year-input");
var btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    if(titleInput.value=="" && authorInput.value=="" && yearInput.value==""){
        alert("This field is required");
    }else{
       
        var tr = document.createElement("tr");
   
        var th = document.createElement("th");
        th.innerText = titleInput.value;
        tr.appendChild(th);

        var th = document.createElement("th");
        th.innerText = authorInput.value;
        tr.appendChild(th);

        var th = document.createElement("th");
        th.innerText = yearInput.value;
        tr.appendChild(th);

        table.appendChild(tr);
        
        titleInput.value = "";
        authorInput.value = "";
        yearInput.value = "";
    }
})
