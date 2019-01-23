//Book Constructor - this creates the book object

function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//Ui Constructer - handles UI events

function UI(){}


UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  //Create tr element
  const row = document.createElement('tr');
  //Insert calls
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;

  //Append element

  list.appendChild(row);
  console.log(row);
}
//Clear fileds
  UI.prototype.clearFields = function(){
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('isbn').value = ''
}

//Delete book 
UI.prototype.deleteBook = function(target){
  if(target.className = 'delete'){
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.showAlert = function(message, className){
  if(!document.querySelector(`.alert.${className}`)){
  //Create div
  const div = document.createElement('div');
  //Add classes
  div.className = `alert ${className}`
  //Add text
  div.appendChild(document.createTextNode(message))
  //Get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  //Insert alert
  container.insertBefore(div, form);

  //Dissappear after 3 seconds

  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000)
}
}
//EventListener

document.getElementById('book-form').addEventListener('submit', 

  function(e){
    //Get form values
    const title = document.getElementById('title').value, 
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

      //Instantiate a book
      const book = new Book(title, author, isbn);

      //Instantiate a UI object

      const ui = new UI();

      //Validate

      if(title == '' || author == '' || isbn == ''){
        //Error alert
        ui.showAlert('Please fill in all fields', 'error');
     

      }else{
          //Add book to list 

          ui.addBookToList(book)

          //Show success

          ui.showAlert('Book added', 'success');

          //Clear fields

          ui.clearFields()
      }

      
  e.preventDefault();
});


//Event Listener for Delete 

document.getElementById('book-list').addEventListener('click', function(e) {

  //Instantiate a UI object

  const ui = new UI();

  ui.deleteBook(e.target);

  //Show Alert

  ui.showAlert('Book removed!', 'success');

  e.preventDefault();
}) 

 