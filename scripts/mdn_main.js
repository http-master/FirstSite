var myImage = document.querySelector('img')

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src')
    if(mySrc === 'img/Cat1.jpg') {
        myImage.setAttribute ('src', 'img/Cat2.1.jpg')
    } else {
        myImage.setAttribute ('src', 'img/Cat1.jpg')
    }
}

//
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h2')

function setUserName() {
    let myName = prompt('Please enter your name')
    if(!myName) {
        setUserName()
    } else {
    localStorage.setItem('name', myName)
    myHeading.innerHTML = 'Все любят котиков и даже ' + myName
    }
}

if (!localStorage.getItem('name')) {
    setUserName()
} else {
let storedName = localStorage.getItem('name')
myHeading.innerHTML = 'Все любят котиков и даже ' + storedName
}

myButton.onclick = function() {
    setUserName()
}

