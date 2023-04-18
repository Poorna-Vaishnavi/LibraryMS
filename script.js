let products = {
  data: [
    {
      productName: "Black Moon",
      category: "science",
      author:"kenneth",
      price: "99",
      year:"2018",
      image: "1.jpg",
    },
    {
      productName: "Heritage",
      category: "adventure",
      author:"boyce",
      price: "49",
      year:"1988",
      image: "2.jpg",
    },
    {
      productName: "A visit from the Goon squad",
      category: "novel",
      author:"jennifer",
      price: "69",
      year:"2001",
      image: "3.jpg",
    },
    {
      productName: "Number the stars",
      category: "adventure",
      author:"lois",
      price: "59",
      year:"1980",
      image: "4.jpg",
    },
    {
      productName: "Planetarium",
      category: "science",
      author:"chris",
      price: "149",
      year:"1997",
      image: "5.jpg",
    },
    {
      productName: "Breathless",
      category: "science",
      author:"david",
      price: "79",
      year:"2011",
      image: "6.jpg",
    },
    {
      productName: "Journey to the center of the earth",
      category: "adventure",
      author:"jules",
      price: "149",
      year:"1726",
      image: "7.jpg",
    },
    {
      productName: "A Game Of Thrones",
      category: "novel",
      author:"george",
      price: "119",
      year:"1996",
      image: "8.jpg",
    },
    {
      productName: "To kill a mockingbird",
      category: "novel",
      author:"harper",
      price: "99",
      year:"1894",
      image: "9.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  card.classList.add("card", i.year, "hide");
  card.classList.add("card", i.author, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//Initially display all products
window.onload = () => {
  filterProduct("all");
};
