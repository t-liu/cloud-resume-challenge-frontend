const apiUrl = 'https://kohwbp8yt4.execute-api.us-east-1.amazonaws.com/dev/visitor';

function getVisitorCount() {
    fetch(apiUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            let visitorCount = data.body.count.N
            let lastViewedDate = data.body.lastViewed.S

            document.getElementById('visitorCount').innerHTML = visitorCount;
            document.getElementById('lastViewedDate').innerHTML = lastViewedDate;
        })
        .catch(error => console.warn(error))
}

getVisitorCount();