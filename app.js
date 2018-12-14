// Get Elements From DOM
const Search = document.querySelector('#search');
// Initiate Github class
const github = new Github();
// Initiate UI class
const ui = new UI();
// Add Event Listeners
Search.addEventListener('input',searchUser );

// Building Functions
function searchUser(e) {
    if(Search.value !== '') {
      // Make an http call
      github.getUser(Search.value)
               .then(data => {
                 if(data.profileData.message === 'Not Found') {
                    // Show alert 
                   ui.showAlert('User Not Found', 'alert alert-danger');
                 } else {
                    // Show Profile
                    ui.showProfile(data.profileData);
                    ui.showRepos(data.reposData);
                 }
               })
                .catch(err => console.log(err));
    } else {
        // Clear Profile
        ui.clearProfile();
    }
    e.preventDefault();
}