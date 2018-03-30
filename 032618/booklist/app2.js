// Book Constructor

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){}

// Add book to List
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);

}

// Show Alert

UI.prototype.showAlert = function(message, className){
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Get the container, and put in what you wanna insert and what you wanna insert in before
    // Insert alert
    container.insertBefore(div,form);

    // Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 1000);
}

// Delete book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();

    }
}

// Clear books
UI.prototype.clearBook = function(){

    // check for book
    const book = document.getElementById('book-list');
    book.innerText = '';






}


// Clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';


}



// Event listeners for add book
document.getElementById('book-form').addEventListener('submit',
    function(e){
        // Get form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

        // Instantiate book
        const book = new Book(title, author, isbn);

        // Instantiate UI
        const ui = new UI();

        // Validate
        if(title === '' || author === '' || isbn === ''){
            // Error alert
            ui.showAlert('please fill in all fields ', 'error');

        } else {

            // Add book to list
            ui.addBookToList(book);

            // Show success
            ui.showAlert('Book Added!', 'success');


            // Clear fields
            ui.clearFields();

        }


        e.preventDefault();

    }
);

// Event listener for delete
document.getElementById('book-list').addEventListener('click',
    function(e){

        // Instantiate UI
        const ui = new UI();

        // Delete book
        ui.deleteBook(e.target);

        // Show message
        ui.showAlert('Book Removed', 'success');


        e.preventDefault();
    }
);

// Event listener for clear
document.querySelector('.clear').addEventListener('click',
    function(e){

        // Instantiate UI
        const ui = new UI();

        // check for book
        const book = document.getElementById('book-list').children;


        if(book.length === 0){
            // Show alert
            ui.showAlert('There are no books on the list', 'error')

        } else {

            //clear books
            ui.clearBook(e);
            ui.showAlert('Books have been removed', 'success')

        }



    });