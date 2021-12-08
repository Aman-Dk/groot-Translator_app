const testApi = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
const grootApi = "https://api.funtranslations.com/translate/groot.json"

var input = document.querySelector("#inputText");

var output = document.querySelector("#outputText");

var translate = document.querySelector("#translateText");

function getRequest(text) {
    return grootApi + "?text=" + text;
}

function errorHandler(err){
    console.log("something went wrong, try again after sometime" ,err)
}

function translateToGroot(text) {
    fetch(getRequest(text))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            output.innerText = translatedText
        })
        .catch(errorHandler)
};

translate.addEventListener('click', function show() {
    translateToGroot(input.value);
})