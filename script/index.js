// Fetch and render categories dynamically in the left sidebar

const categorylist=()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    
    .then (res => res.json())
    .then(data=>displyscatagory(data.categories))
};
categorylist();
const filterCategory=(id)=>{
    const url=`https://openapi.programming-hero.com/api/category/${id}`;
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displyshowcatagory(data.plants))
};
const displyshowcatagory=(card)=>{
    const carddiv=document.getElementById("allcatagory-card");
    carddiv.innerHTML="";
    card.forEach(cards=>{
        
        const div=document.createElement("div");
        div.innerHTML=`
        <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <figure>
                <img class="w-full h-48 object-cover rounded-md" src="${cards.image}" alt="">
              </figure>
              <h2 class="font-bold">${cards.name}</h2>
              <p class="text-[#1F2937] space-y-0">${cards.description}</p>
              <div class="flex justify-between items-center my-4">
                <div class="font-semibold rounded-full text-[#15803D] text-center badge p-2 bg-[#DCFCE7]">${cards.category}</div>
                <div>৳<span>${cards.price}</span></div>
              </div>
              <button class="btn btn-soft btn-primary w-full rounded-full bg-[#15803D] text-white border-none">Add to Cart</button>
            </div>`;
        carddiv.append(div);

    });
};

const displyscatagory=(catagory)=>{
    const categoryAside=document.getElementById("catagory-list");
    categoryAside.innerHTML="";
    for(let categories of catagory){
        const btnDiv=document.createElement("div");
        btnDiv.innerHTML=`
        <button onclick="filterCategory('${categories.id}')" class="btn btn-soft btn-primary w-full">${categories.category_name}</button>
        `;
        categoryAside.append(btnDiv);
    }

};

