function fetchProfile() {
    const username = document.getElementById("username").value;
    if (!username) {
        alert('Enter a GitHub username');
        return;
    }
    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response is not ok');
            }
            return response.json();
        })  
        .then(data => {  //const data = response.json();
            console.log(data);
            displayProfile(data);
        })
        .catch(err => {
            console.error('There was a fetch error', err);
        });
}

function displayProfile(profileData) {
    const profileElement = document.getElementById('profile');
    profileElement.innerHTML = `
       
        <img src="${profileData.avatar_url}" style="width:100px; height:100px; border-radius:50%;">
        <h2>${profileData.login}</h2>

    `;
}