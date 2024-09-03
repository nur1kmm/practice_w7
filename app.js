//Practce 1
let arr = ['Saule', 'Bibigul', 'Erkezhan', 'Madina', 'Nurassyl', 'Nurgazy'];

for(i in arr){
    console.log(i);
}

for(el of arr){
    console.log(el);
}

//Practice 2
let arr2 = ['Saule', 'Bibigul', 'Erkezhan', 'Madina', 'Nurassyl', 'Nurgazy'];

function deleteStudent (arr2, student){
    const index = arr2.indexOf(student);
    if(index !== -1){
        studentArray.splice(index, 1);
    }
    return arr2;
}

//Practice 3
let arr3 = ['Saule','Bibigul','Erkezhan', 'Madina', 'Nurassyl', 'Nurgazy'];
console.log(arr3);
let deleteBtn = document.querySelector(".delete");
let deleteInput = document.querySelector(".delete-value");
function deleteStudent(){
    let student = deleteInput.value;
}

