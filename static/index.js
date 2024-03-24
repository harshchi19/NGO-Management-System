document.addEventListener("DOMContentLoaded", function() {
    var aboutText = document.getElementById("aboutText");
    if (aboutText) {
        aboutText.addEventListener("click", function () {
            var anchor = document.querySelector("[data-scroll-to='aBOUTUS']");
            if (anchor) {
                anchor.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        });
    }

    var aboutText = document.getElementById("ourText");
    if (aboutText) {
        aboutText.addEventListener("click", function () {
            var anchor = document.querySelector("[data-scroll-to='tEST']");
            if (anchor) {
                anchor.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        });
    }
    
    var newsText = document.getElementById("newsText");
    if (newsText) {
        newsText.addEventListener("click", function () {
            var anchor = document.querySelector("[data-scroll-to='nEWS']");
            if (anchor) {
                anchor.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        });
    }

    var getText = document.getElementById("getText");
    if (getText) {
        getText.addEventListener("click", function () {
            var anchor = document.querySelector("[data-scroll-to='jOIN-US']");
            if (anchor) {
                anchor.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        });
    }

    var contactText = document.getElementById("contactText");
    if (contactText) {
        contactText.addEventListener("click", function () {
            var anchor = document.querySelector("[data-scroll-to='cONTACT']");
            if (anchor) {
                anchor.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        });
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach(function(square) {
        square.addEventListener("click", function() {
            // Change background color and remove border
            square.style.backgroundColor = "var(--color-floralwhite)";
            square.style.border = "none";
            square.style.boxShadow = "var(--small-0310-15)";
            
            // Update text in the 'we-believe-bible' and 'every-nation-tribe' classes
            const newText = square.dataset.text;
            document.querySelector('.we-believe-bible').textContent = newText;
            
            // Hide all square contents
            document.querySelectorAll(".square-content").forEach(function(content) {
                content.style.display = "none";
            });
            // Show the content corresponding to the clicked square
            const squareContentId = this.dataset.contentId;
            const squareContent = document.getElementById(squareContentId);
            if (squareContent) {
                squareContent.style.display = "block";
            }
        });
    });
});
