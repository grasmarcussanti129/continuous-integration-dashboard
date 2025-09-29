document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard loaded');
    fetchData();
});

function fetchData() {
    // Function to fetch data from the server
    console.log('Fetching data...');
    fetch('/api/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched successfully:', data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}