let html = ``;

/*
 *Function that creates petArray Html 
 */
function createPetsHtml(petArray){
  return `
          <div class="wrapper">
            <h2>${petArray.name}</h2>
            <h3>${petArray.type} | ${petArray.breed}</h3>
            <p>Age: ${petArray.age}</p>   
            <img src=${petArray.image} alt=${petArray.breed}>
          </div>

         `
}

/*
 *Looping through the pets arrays 
 */
for(i=0; i < pets.length; i++){
  let petArray = pets[i];
  console.log(petArray);
  //Adds html from the creatPetsHtml function
  //requires an petArray argument 
  html += createPetsHtml(petArray);
}



console.log(html);
document.querySelector('main').insertAdjacentHTML("beforeend",html);