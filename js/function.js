var books_read=document.getElementById("booklist_read");
var books_unread=document.getElementById("booklist_unread");
var selections=document.getElementById("book_selection");
selections.style.display="none";

function changeBookStatus(id,ele){
    var targetBlock = document.getElementById(id);
    if(ele.checked){
        books_read.appendChild(targetBlock);
    }
    else{
        books_unread.appendChild(targetBlock);
    }
}

document.getElementById("display_selection").addEventListener("click", function(){
    if (selections.style.display==="none"){
        selections.style.display="block";
        this.value="Hide Selections";
    }
    else{
        selections.style.display="none";
        this.value="Customize Your Booklist!";
    }
});

var book_notes = document.querySelectorAll('.book_description');
book_notes.forEach(function(note){
    note.style.display="none";
});

function changeNoteStatus(ele) {
    if (ele.checked) {
        book_notes.forEach(function(note) {
            note.style.display = 'none';
        });
    } else {
        book_notes.forEach(function(note) {
            note.style.display = 'block';
        });
    }
}

var books_covers = document.querySelectorAll('.book_cover');
books_covers.forEach(function(cover){
    cover.style.display="block";
});

function changeCoverStatus(ele) {
    if (ele.checked) {
        books_covers.forEach(function(cover) {
            cover.style.display = 'none';
        });
    } else {
        books_covers.forEach(function(cover) {
            cover.style.display = 'block';
        });
    }
}
