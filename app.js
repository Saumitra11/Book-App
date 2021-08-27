//var deleteButton = document.querySelectorAll(".delete");
//deleteButton.forEach(function(item){
//   item.addEventListener('click', function(e){
//       const li = e.target.parentElement;
//       li.parentElement.removeChild(li);
//   });
//});

//delete books
const list = document.querySelector("#book-list ul");
list.addEventListener("click", function(e){
    if(e.target.className == "delete"){
       const li = e.target.parentElement;
       list.removeChild(li);        
    }
});

//add book list
const addForm = document.forms['add-book'];
addForm.addEventListener("submit", function(e){
   e.preventDefault();
   const value = addForm.querySelector('input[type="text"]').value;
   //create element
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");
    
    //add content
    deleteBtn.textContent = "Delete";
    bookName.textContent = value;
    
    //add classes
    deleteBtn.classList.add('delete');
    bookName.classList.add('name');
    
    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    
    list.appendChild(li);
});


//hide books
const hideBooks = document.querySelector("#hide");
hideBooks.addEventListener("click", function(e){
    if(hideBooks.checked){
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
});

//search books
const searchBar = document.forms['search-books'].querySelector("input");
searchBar.addEventListener("keyup", function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");
    Array.from(books).forEach(function(item){
       const title = item.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
});
