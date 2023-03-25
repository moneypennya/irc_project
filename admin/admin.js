window.onload = setup;
editing = "";
authtoken={};

function setup(){
    req = new XMLHttpRequest();
    del = new XMLHttpRequest();
    ed = new XMLHttpRequest();
}

function makeRequest(){
    req.open("POST","https://clubmoneypenny.eastus.cloudapp.azure.com:5002/Data");
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener("load",handleResponse);
    req.send(JSON.stringify(authtoken));
}

function handleResponse(){
    if(req.status=="200"){
        const loginContainer = document.getElementById('login-container');
        let res = JSON.parse(req.response);
        loginContainer.style.display = 'none';
        let tab = document.getElementById("tableadd");
        tab.innerHTML="<tr><th>Full Name</th><th>Email</th><th>Phone</th><th>Address</th><th>Driver's License</th><th>Date of Arrival</th><th>Requested Boats</th><th>Edit</th><th>Del</th></tr>";
        for(let i=0; i < res.length;i++){
            let temp = res[i]._id;
            let but = '<button id='+temp+' onclick=editEntry()>Edit</button></td><td>' + '<button id='+temp+"a"+' onclick="delEntry()">Delete</button></td>';
            tab.innerHTML+="<tr id="+temp+"e"+"><td>"+res[i].fullname+"</td><td>"+res[i].email+"</td><td>"+res[i].phone+"</td><td>"+res[i].address+"</td><td>"+res[i].driverslicense+"</td><td>"+res[i].movein+"</td><td>"+res[i].boats+"</td><td>"+but+"</tr>";
        }
    }else{
        wrong();
    }
    
}

function wrong(){
    $("#wrong").style="display:inline;";
    $("#wrong").fadeIn(1000);
    $("#wrong").fadeOut(4000);
}

function editEntry(){
    let id=event.target.id;
    if(editing==""){
        let row = $("#"+id+"e");
        row.find("td").each(function() {
            let cellText = $(this).text();
            if(!(cellText=="Edit" || cellText=="Delete")){
                cellText = cellText.replace(new RegExp("'", "g"), "");
                $(this).html("<input type='text' value='" + cellText + "' style='width:94%'/>");
            } else if(cellText=="Edit"){
                let edit = document.getElementById(id);
                edit.textContent = "Submit";
            } else if(cellText=="Delete"){
                let del = document.getElementById(id+"a");
                del.style = "display:none";
            }
        });
        editing = id;
    }else if(editing==id){
        let row = $("#"+id+"e");
        let counter = 0;
        let temp = [];
        row.find("td").each(function() {
            let cellText = $(this).find("input").val();
            let cellText2 = $(this).text();
            if(!(cellText2=="Submit" || cellText2=="Delete")){
                temp[counter] = cellText;
                counter++;
            } else if(cellText2=="Submit"){
                let edit = document.getElementById(id);
                edit.textContent = "Edit";
            } else if(cellText2=="Delete"){
                let del = document.getElementById(id+"a");
                del.style = "display:inline";
            }
            
        });
        let edited={fullname:temp[0],email:temp[1],phone:temp[2],address:temp[3],driverslicense:temp[4],movein:temp[5],boats:temp[6],username:authtoken.username,password:authtoken.password,_id:id};
        editing="";
        ed.open("POST","https://clubmoneypenny.eastus.cloudapp.azure.com:5002/Data/edit");
        ed.setRequestHeader("Content-Type", "application/json");
        ed.addEventListener("load",handleResponseEd);
        ed.send(JSON.stringify(edited));
    }else{
        console.log("editing box already");
    }
        
}

function handleResponseEd(){
    if(ed.status=="200"){
        makeRequest();
    }else{
        console.log("something went wrong");
    }
}

function delEntry(){
    let id = event.target.id.slice(0,-1);
    if(editing==""){
        let sendObject={username:authtoken.username,password:authtoken.password,_id:id};
        del.open("DELETE","https://clubmoneypenny.eastus.cloudapp.azure.com:5002/Data");
        del.setRequestHeader("Content-Type", "application/json");
        del.addEventListener("load",handleResponseDel);
        del.send(JSON.stringify(sendObject));
    }
}   

function handleResponseDel(){
    if(del.status=="200"){
        makeRequest();
    }else{
        console.log("something went wrong");
    }
    
}

function login(form){
    const data = form.password.value;
    const hash = CryptoJS.SHA256(data).toString();
    authtoken.username=form.username.value;
    authtoken.password=hash;
    makeRequest();
}