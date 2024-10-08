/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


const studentsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const showPage = (list, page) => {
 const startIndex = (page * studentsPerPage) - studentsPerPage;
 const endIndex = page * studentsPerPage;

 const studentList = document.querySelector('.student-list');
 studentList.innerHTML = '';


 for (let i = 0; i < list.length; i++) {

   if (i >= startIndex && i < endIndex) {
     const html = `<li class="student-item cf">
                     <div class="student-details">
                        <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                        <h3>${i.name.first} ${list[i].name.last}</h3>
                        <span class="email">${list[i].email}}</span>
                     </div>
                     <div class="joined-details">
                        <span class="date">${list[i].registered.date}</span>
                     </div>
                     </li>`;
      
      studentList.insertAdjacentHTML("beforeend", html);
   }
 }

}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/


// Call functions
