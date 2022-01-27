const apiUrl = 'https://xzjdnhuz11.execute-api.us-east-1.amazonaws.com/Prod/visitor/';

function getVisitorCount() {
    fetch(apiUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            let visitorCount = data.count.N
            let lastViewedDate = new Date(data.lastViewed.S)

            document.getElementById('visitorCount').innerHTML = visitorCount;
            document.getElementById('lastViewedDate').innerHTML = lastViewedDate.toLocaleString([], { hour12: true});
        })
        .catch(error => console.warn(error))
}

getVisitorCount();
