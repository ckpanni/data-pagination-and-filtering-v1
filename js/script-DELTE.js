// ELEMENT SELECTORS
const authorContainer = document.querySelector("#authorContainer");
const paginationList = document.querySelector("#paginationList");

// console.log(authors);
const authorsPerPage = 3;


/* This function will handle calculating how many buttons are
needed and dynamically add them to the page */

function handlePagination(array) {
  const numOfButtons = Math.ceil(array.length / authorsPerPage);

  for (let i = 1; i <= numOfButtons; i++) {
    const html = `<li>
                      <button>${i}</button>
                  </li>`;
    paginationList.insertAdjacentHTML("beforeend", html);
  }

  paginationList.querySelector("button").classList.add("active");
}

/* This function will handle calculating how many and which
authors to show on the current page and dynamically add them */

function showPage(array, page) {
  // 4. Create a variable to represent which author to start with on the page.
  //    The math should be (the page multiplied by the authorsPerPage) minus the authorsPerPage
  const firstAuthor = (page * authorsPerPage) - authorsPerPage;
  // 5. Create a variable to represent which author to end with on the page.
  //    The math should be (the page multiplied by the authorsPerPage) minus one
  const lastAuthor = (page * authorsPerPage) - 1;
  // 6. Reset the authorContainer's content to nothing to prevent previous cards staying on the page
  authorContainer.textContent = '';

  // 7-a. Start a loop to the length of the array's length
  // 7-b. Inside, create a conditional checking if `i` is...
  //      - greater than or equal to the start variable
  //      - less than or equal to the end variable
  // 7-c. If true, create a variable storing a template literal of the HTML markup of an author card.
  //      (see example in index.html lines 17 - 28).
  //      Hint: You'll need to dynamically add each author's information
  // 7-d. Then add this variable to the authorContainer element
  //      Hint: insertAdjacentHTML()
  
  for (let i = 0; i <= array.length; i++) {
     if (i >= firstAuthor && i <= lastAuthor) {
       
      const html = `<div class="author-card">
          <div class="card-header">
            <img src="${array[i].image}" alt="photo of ${array[i].name}" />
          </div>
          <div class="card-content">
            <h2 class="title">${array[i].name}</h2>
            <p>
              ${array[i].text}
            </p>
          </div>
        </div>`;
       
       authorContainer.insertAdjacentHTML("beforeend", html);
       
     }
  }
}

/* This event listener will handle calling our function
above to change the page & add the `active` class  */

paginationList.addEventListener("click", (e) => {
  // 8. Create a variable to store the button which currently has the `active` class
  let activeButton = document.querySelector('.active');
  // 9-a. Make sure the user has clicked a `button`
  //      Hint: e.target
  if (e.target) {
    activeButton.classList.remove('active');
    e.target.classList.add('active');
    showPage(authors, e.target.textContent)
  }
  // 9-b. If true...
  //      - Remove the `active` class from the currently active button
  //      - Add the `active` class to the button just clicked
  //      - Call showPage() passing it `authors` and the content of the button just clicked.
});

/* These function calls are needed to initialize the page */

handlePagination(authors);
showPage(authors, 1);
