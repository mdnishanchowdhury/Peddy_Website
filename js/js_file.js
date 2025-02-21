// console.log("welcome to js_file")
const buttonLoad = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then(res => res.json())
        .then((data) => buttonDisplayLoad(data.categories))
        .catch((error) => console.log(error))
}
//create button html
const buttonDisplayLoad = (buttonCategory) => {
    const buttonIdBy = document.getElementById("button-load");
    // buttonIdBy.innerHTML = ""; // Clear previous buttons
    buttonCategory.forEach(element => {
        const button = document.createElement("button");
        // button.classList = "btn ";
        button.innerHTML = `
        
        <button id="btn ${element.category}" class = "btn  category-btn" > <img src="${element.category_icon}" class="w-[36px] h-[36px]"/> ${element.category}</button>
        `;
        button.onclick = () => load(element.category);
        buttonIdBy.appendChild(button);
    });
}

// change display categories
const removeActiveClass =()=>{
    const buttons =document.getElementsByClassName("category-btn");
    for(let btn of buttons){
        btn.classList.remove("active");
    }
}
const load = (id) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then(res => res.json())
    .then((data) => {
        // active class remove 
        removeActiveClass();
        const activeBtn =document.getElementById(`btn ${id}`);
        activeBtn.classList.add("active")
        allPetsDisplay(data.data)
    })
    .catch((error)=> console.log(error))
    console.log(id);
}
// console.log("welcome to js_file")
const allPetsLoad = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(res => res.json())
        .then((data) => allPetsDisplay(data.pets))
        .catch((error) => console.log(error))
}
// all display show
const allPetsDisplay = (all) => {
    const allPetsIdBy = document.getElementById("all-pets");
    allPetsIdBy.innerHTML = "";
    all.forEach(all => {
        const allPets = document.createElement("div");
        allPets.classList = "card card-compact";
        allPets.innerHTML = `
     <figure>
    <img
      src="${all.image}"
      alt="Shoes" class="w-[277px] h-[160px] rounded-2xl" />
    </figure>
    <div class="card-body">
    <h2 class="card-title">${all.pet_name}</h2>
    <p>Breed: ${all.breed}</p>
    <p>Birth: ${all.date_of_birth}</p>
    <p>Gender: ${all.gender}</p>
    <p>Price: ${all.price}</p>
    <div class=" flex gap-4 ">
      <button onclick ="img(${all.petId})" class="btn "><img src="https://img.icons8.com/?size=48&id=u8MTpAq972MG&format=png"class="w-[20px] h-[20px] " /></button>
      <button class="btn">Adopt</button>
      <button onclick ="details(${all.petId})" class="btn">Details</button>
    </div>
  </div>
    `;
        allPetsIdBy.appendChild(allPets);
    })
}
// details load link
const details = (idNm) =>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${idNm}`)
    .then(res=> res.json())
    .then((data)=>  loadDetails(data.petData)
    .catch((error)=> console.log(error))
)};
// display details
const loadDetails= (details) =>{
    const detailContainer = document.getElementById("modal-content");
    detailContainer.innerHTML =`
    <img src=${details.image} class="rounded-2xl" />
    <p>Breed: ${details.breed}</p>
    <p>Category: ${details.category}</p>
    <p>Birth: ${details.date_of_birth}</p>
    <p>Price: ${details.price}</p>
    <p>Gender: ${details.gender}</p>
    <p>Details: ${details.pet_details} </P>
    `;
    document.getElementById("showModalData").click();
}

// image showing load link
const img = (img) =>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${img}`)
    .then(res=> res.json())
    .then((data)=>  imageShowing(data.petData)
    .catch((error)=> console.log(error))
)};
// const imageShowing= (image) =>{
//     const  imgContainer = document.getElementById("pets-img-show");
//     imgContainer.innerHTML =`
//     <img class="w-[124px] h-[124px] object-cover rounded-2xl"  src=${image.image} class="rounded-2xl" />
//     `;
//     detailContainer.appendChild(imgContainer)
// }

// Fetch and display multiple images in pets-img-show

// Display multiple pet images
const imageShowing = (image) => {
    const imgContainer = document.getElementById("pets-img-show");

    // Create an image element for each pet
    const petImage = document.createElement("img");
    petImage.src = image.image;
    petImage.className = "w-[124px] h-[124px] object-cover rounded-2xl m-2"; // Added margin for spacing

    // Append the image instead of replacing previous ones
    imgContainer.appendChild(petImage);
};


// call function 
allPetsLoad();
buttonLoad();
buttonDisplayLoad();