function renderBook(index) {
    return `<div id="book${index}" class="book_card">
    <div class="title">
        <h2 id="bookTitle${index}"></h2>
    </div>
    <div class="divider"></div>
    <div class="cover_section">
        <img id="book_cover${index}" src="./img/cover.png" alt="Buch Cover" />
    </div>
    <div class="divider"></div>
    <div class="book_infos_section_all">
        <div class="price_like_row">
            <span class="price" id="price${index}"></span>
            <div id="likes_box">
                <span id="likes${index}"></span>
                <img onclick="toggleLike(${index})" id="likeHeart${index}" class="icon" src="./img/icon/png/heartWhite.png" alt="Like Herz" />
            </div>
        </div>
        <div class="book_info_section">
            <div class="headlines">
                <p>Autor</p>
                <p>Erscheinungsjahr</p>
                <p>Genre</p>
            </div>
            <div id="book_infos${index}" class="infos">
                <p id="author${index}">:</p>
                <p id="publishedYearTitle${index}"></p>
                <p id="genreTitle${index}"></p>
            </div>
        </div>
    </div>
    <div class="divider"></div>
    <div class="comment_section">
        <h3>Komentare:</h3>
        <div id="commentFull${index}" class="comment_box"></div>
        <div class="input_section">
            <input placeholder="Schreibe deinen Komentar" type="text" name="" id="input${index}" />
            <button onclick="addComment(${index})"><img class="icon" src="./img/icon/png/send.png" alt=""></button>
        </div>
    </div>
</div>`;
}

function renderComment(comment) {
    return `
<div class="comment">
    <span id="name">${comment.name}</span><span>:</span>
    <span id="comment">${comment.comment}</span>
</div>
`;
}