let container = document.querySelector(".container");
let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
async function Quote (params) {
  let response =  await fetch("https://dummyjson.com/quotes/random",{

 
   })
   let data = await response.json()
   
   
    container.innerHTML = `<div class="content">${data.quote}</div>
                            <h6>${data.author}</h6>`
}
  Quote()
})
