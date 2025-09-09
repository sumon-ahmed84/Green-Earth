// Fetch and render categories dynamically in the left sidebar

const categorylist=()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    
    .then (res => res.json())
    .then(data=>displyscatagory(data.categories))
};
categorylist();

// Fetch and render plant details in the modal
const carddetail=async (id)=>{
  const url=`https://openapi.programming-hero.com/api/plant/${id}`;
  const res=await fetch(url);
  const data=await res.json();
  displymodaldetails(data.plants);
};

const displymodaldetails=(modalDetails)=>{
  // console.log(modalDetails);
  const modalbox=document.getElementById("modal-body");
  modalbox.innerHTML=`
      <h1 class="text-lg font-bold">${modalDetails.name}</h1>
      <img class="w-[100%] h-48 object-cover rounded-md" src="${modalDetails.image}" alt="">
      <p class="text-sm text-gray-500"><span class="font-semibold text-black">Category:</span> ${modalDetails.category}</p>
      <p class="text-sm text-gray-500"><span class="font-semibold text-black">Price:</span> ${modalDetails.price}</p>
      <p class="text-sm text-gray-500"><span class="font-semibold text-black">Description:</span> ${modalDetails.description}</p>
  `;
  document.getElementById("card_modal").showModal();
};

// All plants by default
const alltree=()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
    .then (res => res.json())
    .then(data=>defultcard(data.plants))
};
alltree();
const defultcard=(cards)=>{
    const carddiv=document.getElementById("allcatagory-card");
    carddiv.innerHTML="";
    cards.forEach(cards=>{
      const div=document.createElement("div");
      div.innerHTML=`
      <div class="bg-white p-6 rounded-lg shadow-md mb-6 h-[100%]">
            <figure>
              <img class="w-[100%] h-48 object-cover rounded-md" src="${cards.image}" alt="">
            </figure>
            <h2 class="font-bold my-4" onclick="carddetail(${cards.id})">${cards.name}</h2>
            <p class="text-[#1F2937] space-y-0">${cards.description}</p>
            <div class="flex justify-between items-center my-4">
              <div class="font-semibold rounded-full text-[#15803D] text-center badge p-2 bg-[#DCFCE7]">${cards.category}</div>
              <div class="font-semibold ">৳<span>${cards.price}</span></div>
            </div>
            <button class="btn btn-soft btn-primary w-full rounded-full bg-[#15803D] text-white border-none">Add to Cart</button>
          </div>`;
      carddiv.append(div);
    });
};


// remove active class

const removeactive=()=>{
  const cardbtn=document.querySelectorAll(".card-btn");
  console.log(removeactive);
  cardbtn.forEach(btn=>{
    btn.classList.remove("active");
  });
};

// plants by categories

const filterCategory=(id)=>{
    const url=`https://openapi.programming-hero.com/api/category/${id}`;
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      removeactive();
      const clickbtn=document.getElementById(`card-btn-${id}`);
      // console.log(clickbtn)
      clickbtn.classList.add("active");
      displyshowcatagory(data.plants)
    });
};

const displyshowcatagory=(card)=>{
    const carddiv=document.getElementById("allcatagory-card");
    carddiv.innerHTML="";
    card.forEach(cards=>{
        
        const div=document.createElement("div");
        div.innerHTML=`
        <div class="bg-white p-6 rounded-lg shadow-md mb-6 h-[100%]">
              <figure>
                <img class="w-[100%] h-48 object-cover rounded-md" src="${cards.image}" alt="">
              </figure>
              <h2 class="font-bold my-4" onclick="carddetail(${cards.id})">${cards.name}</h2>
              <p class="text-[#1F2937] space-y-0">${cards.description}</p>
              <div class="flex justify-between items-center my-4">
                <div class="font-semibold rounded-full text-[#15803D] text-center badge p-2 bg-[#DCFCE7]">${cards.category}</div>
                <div class="font-semibold ">৳<span>${cards.price}</span></div>
              </div>
              <button class="btn btn-soft btn-primary w-full rounded-full bg-[#15803D] text-white border-none">Add to Cart</button>
            </div>`;
        carddiv.append(div);

    });
};

// Display categories in the sidebar

const displyscatagory=(catagory)=>{
    const categoryAside=document.getElementById("catagory-list");
    categoryAside.innerHTML="";
    for(let categories of catagory){
        const btnDiv=document.createElement("div");
        btnDiv.innerHTML=`
        <button id="card-btn-${categories.id}" onclick="filterCategory('${categories.id}')" class="btn bg-[#F0FDF4] border-none hover:bg-[#15803D] w-full card-btn">${categories.category_name}</button>
        `;
        categoryAside.append(btnDiv);
    }
};



