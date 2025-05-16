//getElementsByClassName - Live

// const fruits = document.getElementsByClassName('fruit-name')
// const fruits_selector = document.querySelectorAll('.fruit-name')

// let fruits_array = Array.from(fruits).map(f=> f.innerText)
// let fruits_arrays = Array.from(fruits_selector).map(f=> f.innerText)
// console.log(fruits_array)
// fruits_array.push('cherry')
// fruits_arrays.push('Mango')
// console.log(fruits_array)
// console.log(fruits_array,"Live List")
// console.log(fruits_arrays,"Static List")


// const p = document.getElementById('demo')
// p.innerText= '<h2>New text</h2>'
// p.innerHTML= '<h2>New text</h2>'

// Traversing
// Get P Parent Node

// console.log(p.parentNode,"--------------------Parent Node")

// Parent Element
// const parentElement = document.querySelector('.parent')



// Get Child

// console.log(parentElement.firstChild)
// console.log(parentElement.firstElementChild)

// console.log(p.nextElementSibling,"Next Sibling")
// console.log(p.previousElementSibling,"Next Sibling")

// const cardList = document.querySelector('.card-list')

// createElement
// const card = document.createElement('div')

// Add class or classes
// card.className = 'card'

// Set Attribute
// card.setAttribute('aria-label', 'product card')

// cardList.appendChild(card)

// console.log(cardList)

// function getPosts(){
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res=> res.json())
//     .then(function(posts){
//         posts.map((post)=>{
//             cardList.innerHTML += `
//             <div class='card'>
                
//             <li>${post.title}</li>
//             <li>${post.body}</li>
//             </div>
//             `
//         })
//     })
// }

// getPosts()

// const list = document.querySelector('ul')

// const listItem = document.querySelectorAll('li')
// const liveItems = document.getElementsByClassName('fruit-name')

// console.log("Before new Li", listItem.length)
// console.log("Before new Li", liveItems.length)

// let newLi = document.createElement('li')

// newLi.className = 'fruit-name'

// newLi.textContent = 'Mango'

// list.appendChild(newLi)

// console.log(list)

// console.log("After new Li", listItem.length)
// console.log("After new Li", liveItems.length)

// Document Fragment
// Like in React has a Virtual DOM.




// const list = document.querySelector('ul')
// without Document Fragment
// for(i=0;i<=100;i++){
//     const li = document.createElement('li')
//     li.className='list-no'
//     li.textContent = `item ${i}`
//     list.append(li)
// }

// with Document Fragment
// const fragment = document.createDocumentFragment()

// for(i=0;i<=100;i++){
//     const li = document.createElement('li')
//     li.className='list-no'
//     li.textContent = `item ${i}`
//     fragment.append(li)
// }
// list.append(fragment)

// after | before

// const p = document.querySelector('p')

// const h1 = document.createElement('h1')

// h1.textContent = "Big Heading"

// const h2 = document.createElement('h2')

// h2.textContent = "Sub Heading"


// p.after(h1)

// p.append(h1,h2)
// p.prepend(h1,h2)

// Event Bubbling
// Event Capturing
// Event Propogation

