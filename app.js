// selecting and storing elements
var btnTranslate = document.querySelector("#btn-translate")
var inputTextarea = document.querySelector("#input-textarea")
var translationOutput = document.querySelector("#translation-output")

// minions translation api url
var url = "https://api.funtranslations.com/translate/minion.json"

// function to add the user input text to the URL
function appendURL(value){
    // var encodedValue = encodeURIComponent(value)
    //could not use encodeURI() as for long strings api throws an error
    var append = url + "?text=" + value
    return append
}

// chaining the click event listener on the translate button
btnTranslate.addEventListener("click", function clickEventHandler(){
    var inputText = inputTextarea.value //input

    //processing
    fetch(appendURL(inputText))
    .then(response => response.json())
    .then(json => {
        translationOutput.innerText = json.contents.translated //output
    })
    .catch(err => console.log(err)) //error handling
})