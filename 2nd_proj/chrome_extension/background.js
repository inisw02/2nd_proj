function filter(e){
    chrome.tabs.executeScript(null, {
        code: "document.querySelector('#개새끼').textContent = '***';"
    });
}

document.addEventListener('DOMContentLoaded', function(){
    var btn01 = document.querySelector('#btn');
    btn01.addEventListener("click", filter)
})

// https://ko.wikipedia.org/wiki/%EC%9A%95%EC%84%A4 에서 "개새끼"란 id값을 찾아서 *로 바꿔줌


// async function query(data) {
// 	const response = await fetch(
// 		"https://api-inference.huggingface.co/models/JminJ/kcElectra_base_Bad_Sentence_Classifier",
// 		{
// 			headers: { Authorization: "Bearer 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" },
// 			method: "POST",
// 			body: JSON.stringify(data),
// 		}
// 	);
// 	const result = await response.json();
// 	return result;
// }

// query({"inputs": "I like you. I love you"}).then((response) => {
// 	console.log(JSON.stringify(response));
// });