
function insert_element(item, list) {
    const li = document.createElement("li");
    var a = document.createElement("a");
    a.href = (document.URL + "/" + item._id);
    const article = document.createElement("article");
    var name = document.createElement("h2");
    const name_text = document.createTextNode(item.name);
    name.appendChild(name_text);
    name.classList.add("article_text");
    var price = document.createElement("p");
    const price_text = document.createTextNode(item.price + "\u20AC");
    price.appendChild(price_text);
    price.classList.add("article_text");
    var image = document.createElement("img");
    image.src = ("https://api.kedufront.juniortaker.com/item/picture/" + (item.image));
    article.appendChild(image, name, price);
    article.appendChild(name);
    article.appendChild(price);
    a.appendChild(article);
    li.appendChild(a);
    list.appendChild(li);
}

function get_elements() {
    axios.get("https://api.kedufront.juniortaker.com/item/")
        .then(response => {
            const items = response.data;
            const list = document.getElementById("product_list");
            for (let i = 0; i < items.length; i++) {
                insert_element(items[i], list);
            }
        }, error => {
            console.log(error);
        })
}
