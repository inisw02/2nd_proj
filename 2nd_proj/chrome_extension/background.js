function filter(e){
    chrome.tabs.executeScript(null, {
        code: "document.querySelector('#개새끼').textContent = '***';"
    });
}

document.addEventListener('DOMContentLoaded', function(){
    var btn01 = document.querySelector('#btn');
    btn01.addEventListener("click", filter)
})






// import requests

// API_URL = "https://api-inference.huggingface.co/models/JminJ/kcElectra_base_Bad_Sentence_Classifier"
// API_TOKEN = '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'
// headers = {"Authorization": f"Bearer {API_TOKEN}"}

// function query(payload) {
//     var response;
//     response = requests.post(API_URL, {
//       "headers": headers,
//       "json": payload
//     });
//     return response.json();
//   }
	
// output = query({
// 	"inputs": "I like you. I love you",
// })