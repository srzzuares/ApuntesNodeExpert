
/**
 * 
 * @returns {Object} quote information
 */
const fetchQuote = async () => {
    const urlBreakbad = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    if (!urlBreakbad.ok) throw new Error(`HTTP error! status: ${urlBreakbad.status}`);
    const data = await urlBreakbad.json();
    console.log(data[0]);

    return data[0];
}


/**
 * 
 * @param {HTMLElement} elementHtml 
*/
export const BreakingBad = (elementHtml) => {
    document.querySelector('#app-tittle').innerHTML = 'Breaking App SrZzuares';
    elementHtml.innerHTML = 'Loading...';

    const quoteLabel = document.createElement('blockquote');
    const autoLabel = document.createElement('h3');
    const nextQuoteBtn = document.createElement('button');
    nextQuoteBtn.innerHTML = 'Next Quote!';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        autoLabel.innerHTML = data.author;
        elementHtml.replaceChildren(quoteLabel, autoLabel, nextQuoteBtn);

    }

    nextQuoteBtn.addEventListener('click', async () => {
        elementHtml.innerHTML = 'Loading...';
        await fetchQuote()
            .then(renderQuote);
    })

    fetchQuote()
        .then(renderQuote);
}