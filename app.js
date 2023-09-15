console.log("Welcome!")

function getRating () {
    let rating = prompt ('Rate my website between 1-5', '5');

    for (let i = 0; i < rating; i++) {
        document.write ("<img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.stickerscape.co.uk%2Fwp-content%2Fuploads%2F003305CP-W.jpg&tbnid=t9KtomVoLZlTgM&vet=12ahUKEwiDu8-Tq6yBAxXYsCcCHQsNCz8QMygAegQIARBv..i&imgrefurl=https%3A%2F%2Fwww.stickerscape.co.uk%2Fproduct%2Fpink-giant-star-wall-sticker%2F&docid=TfHCs3c0CejwnM&w=900&h=900&q=pink%20star&ved=2ahUKEwiDu8-Tq6yBAxXYsCcCHQsNCz8QMygAegQIARBv'/>")
    }
}