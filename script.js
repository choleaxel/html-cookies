console.log('It is working!');

function doStuff() { 
    //go get that cta-button
    const cta = document.querySelector('.cta-button'); //new var cta, go to my html DOM, find cta-button
    //pointing the variable at our button
    cta.style.display = 'none'; //go to the display style of the cta and change it to 'none'
    //makes our button disappear
    let message = document.createElement('p'); //goes to our DOM and creates a paragraph 
    //and names it 'message'
    message.innerHTML = 'Your order has been placed!'; //go into that paragraph and put a message
    //that says your order has been placed
    document.querySelector('section').appendChild(message); //go into this 'section' and append
    //or add to the end a new child, message. document (goes to our DOM) apply querySelector at this
    //<section> tag and add a child to the end of it, it is not actually putting it in our
    //html file, its going into our DOM, the browser's rendition of this html file.
}
//on line 5 we find the location of that cta-button by using the browser inspector
//on line 7, we can also go after any part of the style of the button, cta.style.padding,
//cta.style.background-color   etc
