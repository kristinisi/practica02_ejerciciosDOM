class ManagerView {
  constructor() {
    this.main = document.getElementsByTagName("main")[0];
    this.categories = document.getElementById("categories");
    this.menu = document.querySelector(".barra__style");
  }

  //Creamo el bind para los enlaces de inicio
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
        <a class='categories__enlace' href="#category-list" data-type="Moluscos">
        <img src="./img/_calamar.png" alt="Categoría Moluscos y Cefalopodos">
          <h4>Moluscos y Cefalópodos</h4>
        </a>
      </div>
      <div>
          <a class='categories__enlace' href="#category-list" data-type="Crustaceos">
              <img src="./img/_langosta.png" alt="Categoría Crustaceos">
              <h4>Crustáceos</h4>
          </a>
      </div>
      <div>
          <a class='categories__enlace' href="#category-list" data-type="Pescados">
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
        `<li><a datacategory="${category.category.name}" class="dropdown-item" href="#productlist">${category.category.name}</a></li>`
      );
    }
    li.append(container);
    this.menu.append(li);
  }

  listDishes(dishes, name) {
    this.main.replaceChildren();
    if (this.categories.children.length > 1)
      this.categories.children[1].remove();
    const container = document.createElement("div");
    container.id = "category-list";
    // container.classList.add("container");
    container.insertAdjacentHTML("beforeend", '<div class="row"> </div>');

    for (const dish of dishes) {
      const div = document.createElement("div");
      div.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card" style="width: 18rem;">
          <img src="${dish.image}" class="card-img-top">
          <div class="card-body">
            <h3 class="card-text">${dish.name}</h3>
            <p class="card-text">${dish.description}</p>
          </div>
        </div>`
      );
      container.children[0].append(div);
    }
    container.insertAdjacentHTML("afterbegin", `<h1>${name}</h1>`);
    this.categories.append(container);
  }

  //Dos métodos que enlazan el manejador con los elementos de la pagina
  bindProductsCategoryList(handler) {
    const categoryList = document.getElementById("category-list");
    console.log(categoryList);
    // const links = categoryList.querySelectorAll("card");
    // for (const link of links) {
    //   link.addEventListener("click", (event) => {
    //     handler(event.currentTarget.dataset.category);
    //   });
    // }
  }

  bindProductsCategoryListInMenu(handler) {
    const navCats = document.getElementById("navCats");
    const links = navCats.nextSibling.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }
}
export default ManagerView;
