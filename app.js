//const submit = document.getElementById("submit");
//submit.addEventListener('click', displayDetails);

let btnShw = document.querySelector("submit")
btnShw.addEventListener("onclick", displayDetails)
var row = 1;

function displayDetails(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var Gender = document.getElementById('Gender').value;
    var checkBox = check.addEventListener('check', getCheckboxStatus);
        function getCheckboxStatus(){
            var status = document.getElementById("checkBoxStatus").checked;
            if (status) {
            display("Yes");
             } else {
           display("No");
            }
         }
   if(!firstName || !lastName || !email || !Gender || !checkBox){
        alert("Please fill all the boxes");
        return;
        }   
    }
    var displayDetails = getElementById(display);
        var newRow = displayDetails.insertRow(row);
            var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
            var cel4 = NewRow.insertCell(3);
            var cel5 = NewRow.insertCell(4);
            var cel6 = NewRow.insertCell(5);
        row++;  
        


