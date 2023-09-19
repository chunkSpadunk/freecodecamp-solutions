// get the sample quotes from testing

const quotes = [
    {
        text: 'this is the first quote that will be displayed on the screen',
        author: 'Author 1',
    },
    {
        text: 'this is the second quote that will be displayed on the screen',
        author: 'Author 2',
    },
    // add more quotes as needed
];

/* function to generate a random quote */
function getRandomQuotes() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// function to display a new quote
function displayNewQuote() {
    const { text, author } = getRandomQuotes();
    const quoteElement = document.querySelector('.quote');
    const authorElement = document.querySelector('.author');

    const lightColor = `rgb(${Math.random() * 128 + 128}, ${
        Math.random() * 128 + 128
    }, ${Math.random() * 128 + 128})`;

    // set the transition duration for the background color
    document.body.style.transition = 'background-color 0.9s ease';
    document.body.style.backgroundColor = lightColor;

    // update the quote and author text
    quoteElement.textContent = text;
    authorElement.textContent = `- ${author}`;
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#newquote').addEventListener('click', () => {
        displayNewQuote();
    });

    displayNewQuote();
});
