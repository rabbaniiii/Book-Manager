const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author_name");
const isbnInput = document.getElementById("isbn");
const genreInput = document.getElementById("genre");
const dateInput=document.getElementById("date");
const textareaInput=document.getElementById("textarea");

add_book_btn.addEventListener("click", addBook);

function addBook(){
    if (titleInput.value.trim() === "") {
    alert("Enter Title");
    return;
    }
    if (authorInput.value.trim()==""){
        alert("Enter Author Name");
        return;
    }
    if(isbnInput.value.trim()==""){
        alert("Enter ISBN");
        return;
    }
    if(genreInput.value==""){
        alert("Choose Genre");
        return;
    }
    if(dateInput.value==""){
        alert("choose published date");
        return;
    }
    if(textareaInput.value.trim()==""){
        alert("Enter description");
        return;
    }

    const book = {
    title: titleInput.value.trim(),
    author: authorInput.value.trim(),
    isbn: isbnInput.value.trim(),
    genre: genreInput.value,
    date: dateInput.value,
    description: textareaInput.value.trim(),
    };
    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));

    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";
    genreInput.selectedIndex = 0;
    dateInput.value="";
    textareaInput.value="";
}