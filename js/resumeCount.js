const apiUrl = 'https://api.thomasliu.click/visitor/';

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
