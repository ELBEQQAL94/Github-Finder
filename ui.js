const Profile = document.querySelector('#porofile');
class UI {
    constructor() {
        this.profile = Profile;
    }
    // Show Profile method
    showProfile(user) {
        this.profile.innerHTML = `
        
            <div class="card card-body mb-3">

              <div class="row">

                 <div class="col-md-3 ">

                   <img class="img-fluid mb-2" src="${user.avatar_url}">

                   <a hre="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">
                   View Profile
                   </a>

                 </div>

                 <div class="col-md-9 text-center">

                   <span class="badge badge-primary">
                       Public Repos: ${user.public_repos}
                   </span>

                   <span class="badge badge-secondary">
                       Public Gists: ${user.public_gists}
                   </span>

                   <span class="badge badge-success">
                       Followers: ${user.followers}
                   </span>

                   <hr>

                   <ul class="list-group">

                        <li class="list-group-item">
                           Company: ${user.company}
                        </li>

                        <li class="list-group-item">
                           Web/blog: ${user.blog}
                        </li>

                        <li class="list-group-item">
                           Location: ${user.loaction}
                        </li>

                        <li class="list-group-item">
                           Member Since: ${user.created_at}
                        </li>

                   </ul>
                 </div>

              </div>

            </div>
            
            <h3 class="heading mb-3">Latest Repos</h3>

            <div id="repos">

            </div>
        `;
    }

    // Show Repos method
    showRepos(repos) {
      let output = '';
      repos.forEach(repo => {
          output += `<div class="card card-body mb-2">
                       <div class="row">
                         <div class="col-md-6">
                           <a href="${repo.html_url}" target="_blank">
                              ${repo.name}
                           </a>
                         </div>
                         <div class="col-md-6">
                           <span class="badge badge-primary">
                              Stars: ${repo.stargazers_count}
                           </span>

                           <span class="badge badge-primary">
                              Watchers: ${repo.watchers_count}
                           </span>

                           <span class="badge badge-primary">
                              Forks: ${repo.forks_count}
                           </span>
                         </div>
                       </div>
                     </div>`;
      });
      // Output repos in HTML page
      document.querySelector('#repos').innerHTML = output;
    }

    // Clear Profile method
    clearProfile() {
        this.profile.innerHTML = '';
    }

    // Show alert method
    showAlert(message, className) {
       // Clear Alert
       this.clearAlert(); 
      // Create Div
      const div = document.createElement('div');
      // Add Classes
      div.className = className;
      // Add Text
      div.appendChild(document.createTextNode(message));
      // Get Parrent
      const container = document.querySelector('.searchConatiner');
      // Insert alert
      const Search = document.querySelector('.search');
      container.insertBefore(div, Search);
      // Clear after 3 seconds
      setTimeout(() => this.clearAlert(), 3000);
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }
}