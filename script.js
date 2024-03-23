// Function to show/hide content based on the clicked navigation link
document.addEventListener('DOMContentLoaded', function() {
    // Your code that interacts with the DOM goes here
    // For example, accessing elements or adding event listeners
    // This code will run after the DOM is fully loaded
    showContent('home');
});


function showContent(contentId) {
    const contents = document.getElementsByClassName('content');
    for (let i = 0; i < contents.length; i++) {
        if (contents[i].id === contentId) {
            contents[i].style.display = 'block';
        } else {
            contents[i].style.display = 'none';
        }
    }

    const navLinks = document.querySelectorAll('.topnav a');
    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i].classList.contains('active')) {
            navLinks[i].classList.remove('active');
        }
        if (navLinks[i].getAttribute('onclick') === `showContent('${contentId}')`) {
            navLinks[i].classList.add('active');
        }
    }
}

  // Default to show the home page when the page loads
  window.onload = function() {
    showContent('home');
  };
  




const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {

    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


const cardResult=document.querySelector(".cardwrapper");
async function getProfile() {
    try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        const results = data.users;
        console.log(results);
        
        results.map((result) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('card');
            
            const image = document.createElement('img');
            image.src = result.image;
            
            const nameItem = document.createElement('h4');
            nameItem.textContent = result.firstName + ' ' + result.lastName;
            
            const ageItem = document.createElement('p');
            ageItem.classList.add('age');
            ageItem.textContent = 'Age: ' + result.age;
            
            const emailItem = document.createElement('a');
            emailItem.href = result.email;
            emailItem.target = "_blank";
            emailItem.textContent = result.email;
            
            cartItem.appendChild(image);
            cartItem.appendChild(nameItem);
            cartItem.appendChild(ageItem);
            cartItem.appendChild(emailItem);
            
            // Assuming there's a div with id 'cardResult' to append cartItem to
            // document.getElementById('cardResult').appendChild(cartItem);
            cardResult.appendChild(cartItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
getProfile();




