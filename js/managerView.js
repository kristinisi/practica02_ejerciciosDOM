class ManagerView {
  constructor() {
    this.main = document.getElementsByTagName("main")[0];
    this.categories = document.getElementById("categories");
    this.menu = document.querySelector(".barra__style");
  }

  //Creamos el bind para los enlaces de inicio
  bindInit(handler) {
    document.getElementById("init").addEventListener("click", (event) => {
      handler();
    });
  }

  showCategories() {
    this.categories.replaceChildren();
    this.categories.insertAdjacentHTML(
      "beforeend",
      `<div>
        <a class='categories__enlace' href="#category-list" data-category="Moluscos">
        <img src="./img/_calamar.png" alt="Categoría Moluscos y Cefalopodos">
          <h4>Moluscos y Cefalópodos</h4>
        </a>
      </div>
      <div>
          <a class='categories__enlace' href="#category-list" data-category="Crustaceos">
              <img src="./img/_langosta.png" alt="Categoría Crustaceos">
              <h4>Crustáceos</h4>
          </a>
      </div>
      <div>
          <a class='categories__enlace' href="#category-list" data-category="Pescados">
              <img src="./img/_pez.png" alt="Categoría Pescados">
              <h4>Pescados</h4>
          </a>
      </div>`
    );
  }

  showCategoriesInMenu(categories) {
    const li = document.createElement("li");
    li.classList.add("nav-item", "dropdown");
    li.insertAdjacentHTML(
      "beforeend",
      `<a class="nav-link dropdown-toggle" href="#" id="navCats" role="button"     data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>`
    );
    const container = document.createElement("ul");
    container.classList.add("dropdown-menu");
    for (const category of categories) {
      container.insertAdjacentHTML(
        "beforeend",
        `<li><a data-category="${category.category.name}" class="dropdown-item" href="#productlist">${category.category.name}</a></li>`
      );
    }
    li.append(container);
    this.menu.append(li);
  }

  listDishes(dishes, name) {
    this.main.replaceChildren();
    this.main.classList.add("cambiar--fondo");

    const container = document.createElement("div");
    container.id = "category-list";
    container.insertAdjacentHTML(
      "beforeend",
      '<section class="row seccion__plato"></section>'
    );

    for (const dish of dishes) {
      const div = document.createElement("div");
      div.insertAdjacentHTML(
        "beforeend",
        `
        <div class="miniSeparador"></div>
        <div class="plato"><img src="${dish.image}">
              <h4>${dish.name}</h4>
              <p>${dish.description}</p>
          </div>`
      );
      container.children[0].append(div);
    }
    container.insertAdjacentHTML("afterbegin", `<h1>${name}</h1>`);
    this.main.append(container);
  }

  //Dos métodos que enlazan el manejador con los elementos de la pagina
  bindDishesCategoryList(handler) {
    const categoryList = document.getElementById("categories");
    console.log(categoryList);
    const links = categoryList.querySelectorAll("a");
    console.log(links);
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }

  bindDishesCategoryListInMenu(handler) {
    const navCats = document.getElementById("navCats");
    const links = navCats.nextSibling.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }

  showRandomDishes(dishes) {
    const container = document.createElement("section");
    container.id = "random-dishes";
    container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="miniSeparador"></div>
        <h3 class="tit">Algunos de nuestros platos...</h3>
      `
    );

    for (const dish of dishes) {
      const div = document.createElement("div");
      div.insertAdjacentHTML(
        "beforeend",
        `
        <div class="plato plato2">
              <img src="${dish.image}">
        </div>`
      );
      container.append(div);
    }
    this.main.appendChild(container);
  }
}
export default ManagerView;
