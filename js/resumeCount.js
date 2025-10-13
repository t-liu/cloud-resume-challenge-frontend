const apiUrl = 'https://srlk15hmgb.execute-api.us-east-1.amazonaws.com/Prod/visitor/';

function getVisitorCount() {
    fetch(apiUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            let visitorCount = data.count
            let previousLastViewedDate = new Date(data.previousLastViewed)

            document.getElementById('visitorCount').innerHTML = visitorCount;
            document.getElementById('lastViewedDate').innerHTML = previousLastViewedDate.toLocaleString([], { hour12: true});
        })
        .catch(error => console.warn(error))
}

getVisitorCount();
