const apiUrl = 'https://j8nbni6pph.execute-api.us-east-1.amazonaws.com/Prod/visitor/';

function getVisitorCount() {
    fetch(apiUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            let visitorCount = data.count.N
            let lastViewedDate = data.lastViewed.S

            document.getElementById('visitorCount').innerHTML = visitorCount;
            document.getElementById('lastViewedDate').innerHTML = lastViewedDate;
        })
        .catch(error => console.warn(error))
}

getVisitorCount();
