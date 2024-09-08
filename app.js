// Practice 1: Array iteration
let arr = ['Saule', 'Bibigul', 'Erkezhan', 'Madina', 'Nurassyl', 'Nurgazy'];

// Using for...in loop to display indices
console.log("Practice 1: Array iteration with for...in");
for(let i in arr){
    console.log("Index:", i);
}

// Using for...of loop to display elements
console.log("Practice 1: Array iteration with for...of");
for(let el of arr){
    console.log("Element:", el);
}

// Practice 2: Delete student function
let arr2 = ['Saule', 'Bibigul', 'Erkezhan', 'Madina', 'Nurassyl', 'Nurgazy'];

/**
 * Deletes a student from the array
 * @param {Array} array - The array of students
 * @param {String} student - The name of the student to delete
 * @returns {Array} The updated array
 */
function deleteStudentFromArray(array, student){
    const index = array.indexOf(student);
    if(index !== -1){
        array.splice(index, 1);
    }
    return array;
}

// Practice 3: DOM interaction for deleting students
let arr3 = ['Saule','Bibigul','Erkezhan', 'Madina', 'Nurassyl', 'Nurgazy'];
console.log("Initial student list:", arr3);

// Display initial student list in the console
console.log("Students in the list:");
arr3.forEach((student, index) => {
    console.log(`${index + 1}. ${student}`);
});

let deleteBtn = document.querySelector(".delete");
let deleteInput = document.querySelector(".delete-value");

/**
 * Handles the deletion of a student based on user input
 */
function deleteStudentFromDOM(){
    let student = deleteInput.value.trim();
    if(student === "") {
        alert("Please enter a student name");
        return;
    }
    
    // Check if student exists before attempting deletion
    if(arr3.includes(student)) {
        arr3 = deleteStudentFromArray(arr3, student);
        console.log(`Deleted student: ${student}`);
        console.log("Updated student list:", arr3);
        alert(`Successfully deleted ${student}`);
    } else {
        alert(`Student "${student}" not found in the list`);
    }
    
    // Clear the input field
    deleteInput.value = "";
}

// Add event listener to button for better practice
if(deleteBtn) {
    deleteBtn.addEventListener("click", deleteStudentFromDOM);
}

// Also allow deletion by pressing Enter key
if(deleteInput) {
    deleteInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            deleteStudentFromDOM();
        }
    });
}