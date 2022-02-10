const button = document.createElement("button");
const buttonDiv = document.createElement("div");
button.innerText = "Add Square";
buttonDiv.appendChild(button)
document.body.appendChild(buttonDiv);

button.addEventListener('click', addSquare);

let squareCount = 0;

function addSquare() {
    const newDiv = document.createElement("div");
    newDiv.className = 'square';
    squareCount++
    newDiv.id = squareCount;
    document.body.appendChild(newDiv);
    
    newDiv.onmouseenter = function(event) {
        let hoverId = event.target.id;
        event.target.innerText = hoverId;
    }
    
    newDiv.onmouseleave = function() {
        newDiv.innerText = "";
    }

    newDiv.addEventListener('click', function(event) {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        event.target.style.background = `rgb(${r}, ${g}, ${b})`;
    })

    newDiv.addEventListener('dblclick', function(event) {
        let doubleClickId = event.target.id;
        if (doubleClickId == 1) {
            alert('This is the first square!');
        } else if (doubleClickId == squareCount) {
            alert('This is the last square');
        } else if (doubleClickId % 2 == 0) {
            let plusOne = parseInt(event.target.id) + 1;
            let element = document.getElementById(plusOne);
            element.parentNode.removeChild(element);
        } else {
            let minusOne = parseInt(event.target.id) - 1;
            let element = document.getElementById(minusOne);
            element.parentNode.removeChild(element);
        }
    })
}