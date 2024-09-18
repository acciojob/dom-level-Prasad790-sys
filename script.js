//your JS code here. If required.
function getDOMLevel(element) {
    let level = 0;
    while (element) {
        level++;
        element = element.parentElement; // Move to the parent element
    }
    return level;
}

// Get the element with ID 'level'
const targetElement = document.getElementById('level');

// Calculate its DOM level
const domLevel = getDOMLevel(targetElement);

// Alert the result
alert(`The level of the element is: ${domLevel}`);