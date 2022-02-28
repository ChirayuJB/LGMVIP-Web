var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

function readFormData() {
    var formData = {};
    formData["Student_Name"] = document.getElementById("Student_Name").value;
    formData["university"] = document.getElementById("university").value;
    formData["rollno"] = document.getElementById("rollno").value;
    formData["PRN"] = document.getElementById("PRN").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.Student_Name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.university;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.rollno;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.PRN;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Student_Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("university").value = selectedRow.cells[1].innerHTML;
    document.getElementById("rollno").value = selectedRow.cells[2].innerHTML;
    document.getElementById("PRN").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Student_Name;
    selectedRow.cells[1].innerHTML = formData.university;
    selectedRow.cells[2].innerHTML = formData.rollno;
    selectedRow.cells[3].innerHTML = formData.PRN;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("Student_Name").value = '';
    document.getElementById("university").value = '';
    document.getElementById("rollno").value = '';
    document.getElementById("PRN").value = '';
    selectedRow = null;
}