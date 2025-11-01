const apiUrl = 'https://srlk15hmgb.execute-api.us-east-1.amazonaws.com/Prod/visitor/';

function getVisitorCount() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('API Response:', data);
            
            // New API format
            if (data.success && data.visitorCount) {
                const visitorCount = data.visitorCount;
                const previousLastViewedDate = data.previousLastViewedDate;
                
                // Update visitor count
                document.getElementById('visitorCount').innerHTML = visitorCount;
                
                // Update last viewed date
                if (previousLastViewedDate) {
                    const dateObj = new Date(previousLastViewedDate);
                    document.getElementById('lastViewedDate').innerHTML = dateObj.toLocaleString([], { 
                        hour12: true,
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                } else {
                    // First visitor!
                    document.getElementById('lastViewedDate').innerHTML = 'You are the first visitor!';
                }
            }
            else {
                console.error('Unexpected API response format:', data);
                document.getElementById('visitorCount').innerHTML = '---';
                document.getElementById('lastViewedDate').innerHTML = 'Unable to load';
            }
        })
        .catch(error => {
            console.error('Error fetching visitor count:', error);
            document.getElementById('visitorCount').innerHTML = '---';
            document.getElementById('lastViewedDate').innerHTML = 'Error loading data';
        });
}

getVisitorCount();