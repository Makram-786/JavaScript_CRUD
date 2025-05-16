const form = document.getElementById("lms_form");
const name = document.getElementById("book");
const author = document.getElementById("author");
const description = document.getElementById("desc");
const tbody = document.querySelector('tbody');
const btn = document.querySelector('.btn-add-book');
let books=[]
var isEdit = false;
var editID = ""
// Form Submit

form.addEventListener('submit', addBook)
function addBook(e){
    e.preventDefault();
    if(!isEdit){
        const newBook = {
            id: Math.random(new Date()),
            name:name.value,
            author:author.value,
            desc:description.value
        }
        books.push(newBook)
        name.value=""
        author.value=""
        desc.value=""
    }else{
        const updatedBook={
            name:name.value,
            author:author.value,
            desc:desc.value
        }
        let bookIndexPlace = books.findIndex((book)=> book.id === editID)
        books[bookIndexPlace] = updatedBook;
        name.value=""
        author.value=""
        desc.value=""
        isEdit=false
        editID=""
        btn.textContent='Add Book'
        console.log(books)
    }

    renderBooksUI(books)
}

function renderBooksUI(books){
    tbody.innerHTML= ''
    books.forEach((book)=>{
        tbody.innerHTML +=`
            <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.desc}</td>
            <td>
                <button onclick=editBook(${book.id})>Edit</button>
            </td>
            <td>
            <button onclick=deleteBook(${book.id})>Delete</button>
            </td>
            </tr>
        `
    })
}

function deleteBook(id){
    console.log(id,"==================================")
   books= books.filter((book)=> book.id !== id)
   renderBooksUI(books)
}

function editBook(id){
    isEdit=true
    if(isEdit){
        btn.textContent = 'Update Book'
    }
    let book = books.find((book)=>book.id === id)
    console.log(book)
    name.value= book.name;
    author.value = book.author;
    desc.value=book.desc;
    editID=id
}