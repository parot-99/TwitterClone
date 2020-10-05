const tweetElement = document.getElementById('tweets-container')
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
    const url = myForm.action
    const method = myForm.method
    const myFormData = new URLSearchParams(new FormData(myForm))
    const request = {
        method: method,
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: myFormData
    }

    fetch(url, request)
        .then(response => {
            if(response.status === 201) {
                return response.json()
            }

            if(response.status === 400) {
                throw new Error('Try a shorter tweet')
            }

            if(response.status === 403) {
                throw new Error('Login first to perform this action')
            }        
        })
        .then(data => {
            const innerHtml = tweetElement.innerHTML
            tweetElement.innerHTML = formatTweetElement(data) + innerHtml
            myForm.reset()
        })
        .catch(error => alert(error))
})


const loadTweets = (tweetElement) => {
    let tweets = ''
    const url = 'http://127.0.0.1:8000/api/tweets/'
    const request = {
        method: 'get',
        headers: {
            'X-Requested-With': 'XMLHttpRequest', 
            'Content-Type': "application/json", 
            'Accept': "application/json",
        }
    }

    fetch(url, request)
        .then(response => response.json())
        .then((data) => {
            data.forEach(tweet => {
                tweets += formatTweetElement(tweet)
            })
            tweetElement.innerHTML = tweets
        })
        .catch(error => console.warn(error))

}
loadTweets(tweetElement)

function formatTweetElement(tweet) {
    let content = tweet.content

    if(tweet.is_retweet) {
        content = tweet.retweet.content
    }

    return '<article class="tweet-container"><h3 class="tweet-container-item">' + tweet.id + '-> ' + content + '</h3>' + likeBtn(tweet) + retweetBtn(tweet) +  '</article>'
}


function likeBtn(tweet) {
    return '<button class="prim-btn tweet-container-item" onclick=handleActionBtn(' + tweet.id + ',' +  '"like"' + ')>' + tweet.likes + ' Likes</button>'
}

function retweetBtn(tweet) {
    return '<button class="prim-btn tweet-container-item" onclick=handleActionBtn(' + tweet.id + ',' + '"retweet"' + ')>' + 'retweet</button>'
}


const handleActionBtn = (tweetId, actionType) => {
    let url = `http://127.0.0.1:8000/api/tweets/${tweetId}/like`

    if(actionType === 'retweet') {
        url = `http://127.0.0.1:8000/api/tweets/${tweetId}/retweet`
    }

    const method = 'POST'
    const request = {
        method: method,
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
            'X-Requested-With': 'XMLHttpRequest'
        },
    }
    
    fetch(url, request)
        .then(response => {
            if(response.status === 200) {
                return response.json()
            }

            if(response.status === 404) {
                throw new Error('Tweet not found')
            }
        })
        .then(data => loadTweets(tweetElement))
        .catch(error => alert(error))
}