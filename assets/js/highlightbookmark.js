$(document).ready ( function () { //Work as soon as the DOM is ready for parsing
    var id  = location.hash.substr(1); //Get the word after the hash from the url
    if (id) $('#'+id).addClass('highlightbookmark'); // add class highlight to element whose id is the word after the hash
});