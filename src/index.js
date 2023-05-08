// write your code here
const ramanMenu = document.querySelector("#ramen-menu");
const ramanImage = document.querySelector(".detail-image")
const ramanName = document.querySelector(".name")
const ramanRest = document.querySelector(".restaurant")
const ramanRating = document.querySelector("#rating-display")
const ramanComment = document.querySelector('#comment-display')



const form = document.querySelector("#new-ramen");


form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission
  const formData = new FormData(form);
  const comment3 = formData.get('new-comment')
  const rating3  = formData.get('rating');
  const res3 = formData.get('restaurant');
  const image3  = formData.get('image');
  const name = formData.get('name');
  const name1 = document.createElement("p")
  name1.innerText = name;
  
  const image5 = document.createElement("img")
  image5.innerText = image3
  const rest5 = document.createElement('h2')
  rest5.innerText = res3;
  const rating5 = document.createElement('h2')
  rating5.innerText = rating3
  const comment5 = document.createElement("h1")
  comment5.innerText = comment3
 
  ramanMenu.append(rest5,image5,rating5,comment5,name1)

  fetch('http://localhost:3000/ramens',{
      method : "POST",
        headers:  {'Content-Type': 'application/json'},
       body: JSON.stringify({   image:image3,name:name,restaurant:res3,comment:comment3  
         })})
    

})

//
//    const Name = document.querySelector("#new-name")
//    let name1 = document.createElement("p")
//      name1.innerText = e.target.name
//      let rest2 = document.createElement("p1")
//      rest2.innerText = e.target.restaurant
//     const image2 = document.createElement("img")
//     image2.src = e.target.image
//     const rating2 = document.createElement("h1")
//     rating2.innerText = e.target.rating
//     const comment2 = document.createElement("h1")
//      comment2.innerText = e.target.comment
//     const restaurant = document.querySelector("#new-restaurant")
//     const Image1 = document.querySelector("#new-image")
//     const Rating = document.querySelector("#new-rating")
//     const Comment2 = document.querySelector("#new-comment")
//     ramanMenu.append(comment2,rating2,image2,rest2,name1)
//     console.log(name1.innerText)


    



fetch("http://localhost:3000/ramens").then(res =>res.json()).then(data=>
  data.forEach((element) => {
    const image = document.createElement("img");
    image.src = element.image;
    ramanMenu.append(image);
    image.addEventListener("click",()=>{

        fetch(`http://localhost:3000/ramens/${element.id}`).then(res=>res.json()).then(data=>{
            ramanImage.src = data.image
            ramanName.textContent = data.name
            ramanRest.textContent = data.restaurant
            ramanRating.textContent = data.rating
            ramanComment.textContent = data.comment
        });
    })
  })
);
