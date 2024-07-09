let testUser = "Dein Name";

function init() {
    let booksContainer = document.getElementById("booksContainer");

    for (let index = 0; index < books.length; index++) {
        booksContainer.innerHTML += renderBook(index);
        displayBook(index);
    };
}

function displayBook(index) {
    getBook(index);
    getTitleName(index);
    getLike(index);
    getPrice(index);
    getBookInfos(index);
    getComments(index);
}

function getBook(index) {
    let bookRef = document.getElementById("book" + index);
}

function getTitleName(index) {
    let bookTitleRef = document.getElementById("bookTitle" + index);
    bookTitleRef.innerHTML = books[index].name;
}

function getLike(index) {
    let likeRef = document.getElementById("likes" + index);
    let likeHeart = document.getElementById("likeHeart" + index);

    if (books[index].liked) {
        likeHeart.src = "./img/icon/png/heartRed.png";
        likeRef.innerHTML = books[index].likes;
    } else {
        likeHeart.src = "./img/icon/png/heartWhite.png";
        likeRef.innerHTML = books[index].likes;
    }
}


function toggleLike(index) {
    let likeRef = document.getElementById("likes" + index);
    let likeHeart = document.getElementById("likeHeart" + index);

    if (!books[index].liked) {
        likeHeart.src = "./img/icon/png/heartRed.png";
        books[index].liked = true;
        books[index].likes += 1;
        likeRef.innerHTML = books[index].likes;
    } else {
        likeHeart.src = "./img/icon/png/heartWhite.png";
        books[index].liked = false;
        books[index].likes -= 1;
        likeRef.innerHTML = books[index].likes;
    }
}

function getPrice(index) {
    let priceRef = document.getElementById("price" + index);
    let price = books[index].price

    priceRef.innerHTML = price.toFixed(2).replace(".", ",") + " €";
};


function getBookInfos(index) {
    let authorTitleRef = document.getElementById("author" + index);
    authorTitleRef.innerHTML = ": " + books[index].author;

    let publishedYearTitleRef = document.getElementById("publishedYearTitle" + index);
    publishedYearTitleRef.innerHTML = ": " + books[index].publishedYear;

    let genreTitleRef = document.getElementById("genreTitle" + index);
    genreTitleRef.innerHTML = ": " + books[index].genre;
}

function getComments(index) {
    let commentFullRef = document.getElementById("commentFull" + index);
    commentFullRef.innerHTML = "";

    for (let commentIndex = 0; commentIndex < books[index].comments.length; commentIndex++) {
        let comment = books[index].comments[commentIndex];
        commentFullRef.innerHTML += renderComment(comment);
    }
}

function addComment(index) {
    let inputRef = document.getElementById("input" + index);
    let newComment = {
        name: testUser,
        comment: inputRef.value
    };

    if (inputRef.value.length > 0) {
        books[index].comments.push(newComment);
        inputRef.value = '';
        getComments(index);
    } else {
        alert("Bitte schreibe einen Kommentar");
    }
}