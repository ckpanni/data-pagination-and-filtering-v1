/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const showPage = (list, page) => {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;

   const studentList = document.querySelector('.student-list');
   const html = '';
   studentList.innerHTML = '';

   list.forEach((student, i) => {
      if (i >= startIndex && i < endIndex ) {
         html += `<li class="student-item cf">
                        <div class="student-details">
                           <img class="avatar" src="${student.picture.medium}" alt="Profile Picture">
                           <h3>${student.name.first + student.name.last}</h3>
                           <span class="email">${student.email}</span>
                        </div>
                        <div class="joined-details">
                           <span class="date">Joined ${student.registered.date}</span>
                        </div>
                     </li>`;
      }
   })

   return studentList.insertAdjacentHTML("beforeend", html)
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
const addPagination = (list) => {
  const numOfButtons = list.length / 9;
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';

  for (let i = 0; i < numOfButtons; i++) {
   ` <li>
   <button type="button">1</button>
 </li>`
  }
}


// Call functions
