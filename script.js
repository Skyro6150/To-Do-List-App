const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addtask(){
    if(inputBox.value.trim() === ""){
        alert("you must write something!")
        return;
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        inputBox.value="";
        SaveData();
    }
}

    

    listContainer.addEventListener("click",function(e){
        
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle("checked");
            SaveData();
        }
        else if(e.target.tagName === 'SPAN'){
             e.target.parentElement.remove();
             SaveData();
        }
    },false);  

    function SaveData(){
        localStorage.setItem("data",listContainer.innerHTML);
    }

    function ShowData(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    ShowData();