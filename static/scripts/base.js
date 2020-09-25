const tweetEl = document.getElementById('tweets-container')
const tweetCreateForm = document.getElementById('tweet-create-form')


const getCookie = function (name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


tweetCreateForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const myForm = event.target
    const myFormData = new URLSearchParams(new FormData(myForm));
    const url = myForm.action
    const method = myForm.method
    const csrftoken = getCookie('csrftoken');
  
    fetch(url, {
            method: method,
            headers: {
                'X-CSRFToken': csrftoken,
            },
            body: myFormData
        });

    loadTweets(tweetEl)
})



const loadTweets = function (tweetElement) {
    const url = 'http://127.0.0.1:8000/tweets'
    let tweets = ''

    fetch(url)
        .then(response => response.json())
        .then((data) => {
            data.response.forEach(tweet => {
                tweets += formatTweetElement(tweet)
            });
            tweetElement.innerHTML = tweets
        })
        .catch(error => console.warn(error))

}

loadTweets(tweetEl)

function formatTweetElement(tweet) {
    return '<article class="tweet-container"><h3 class="tweet-container-item">' + tweet.id + '-> ' + tweet.content + '</h3>' + likeBtn(tweet) + '</article>'
}


function likeBtn(tweet) {
    return '<button class="prim-btn tweet-container-item" onclick=handleLike(' + tweet.id + ',' + tweet.likes + ')>' + tweet.likes + ' Likes</button>'
}


function handleLike(tweetId, currentCount) {
    currentCount++
    return
}