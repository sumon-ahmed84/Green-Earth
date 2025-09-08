// Fetch and render categories dynamically in the left sidebar

const categorylist=()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    
    .then (res => res.json())
    .then(data=>displycatagory(data.categories))
};
categorylist();
const displycatagory=catagory=>{
    const categoryAside = document.getElementById('catagory-list');
    categoryAside.innerHTML=""
    for(let categories of catagory){
        const btnDiv=document.createElement("div");
        btnDiv.innerHTML=`
        <button class="btn btn-soft btn-primary w-full ">${categories.category_name}</button>
        `;
        categoryAside.append(btnDiv);
    }

};
