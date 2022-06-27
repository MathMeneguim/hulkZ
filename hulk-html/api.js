function main() {
  //var
  const timestamp = Date.now().toString();
  const public = "f4b237434fd279effac6b2401acf7647";
  const private = "515f7d92eac9738641b32fd2a96617604b1c24e6";
  const hash = md5(timestamp + private + public);
  const url = `http://gateway.marvel.com/v1/public/characters?limit=1&offset=${2}&ts=${timestamp}&apikey=${public}&hash=${hash}`;
  //request
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText);
      createHero(data.data.results);
      console.log(data);
    }
  };
  request.open("GET", url, false);
  request.send();
}
main();

function createHero(heros) {
  heros.forEach((hero) => {
    //id
    const teste = document.querySelector("#principal");
    //create
    const section = document.createElement("section");
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const img = document.createElement("img");
    const div2 = document.createElement("div");
    const h3 = document.createElement("h3");
    //class
    section.classList.add("container");
    section.classList.add("d-flex");
    div.classList.add("content");
    div2.classList.add("list");
    div2.classList.add("color-white");
    h3.classList.add("title-list");
    //img.src = imgSrc;
    
    
   
    //textContent
    h4.textContent = "Personagem Marvel";
    h3.textContent = "Lista de Aparições (comics)";
    h1.textContent = hero.name;
    p.textContent = hero.description;
    //append
    div.append(h4);
    div.append(h1);
    section.append(div);
    teste.appendChild(section);

    // const path = hero.thumbnail.path;
    // const extension = hero.thumbnail.extension;
    // const imgSrc = path + "." + extension;


  });
}
