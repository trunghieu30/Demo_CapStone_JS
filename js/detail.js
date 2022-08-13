function getProductDetails() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=1',
        method: 'GET',
        ResponseType: JSON,
    })
    promise.then(function (result) {
        console.log(result.data);
        loadProductDetails(result.data.content)
    })
    promise.catch(function (error) {

    })
}

function loadProductDetails(product) {
    var htmlStrImg = '';
    var htmlStrDetails = '';

    document.querySelector('#productImg').innerHTML = htmlStrImg;
    document.querySelector('#productContent').innerHTML = htmlStrDetails;

    htmlStrImg += `
                <div class="product-img-content">
                    <img src="${product.image}" alt="">
                </div>
            `;

    htmlStrDetails += `
            <p class="item-title">${product.name}</p>
            <p class="item-content">${product.description}</p>
            <p class="item-available">Available Sizes</p>
            <div class="item-size">
                <span class="size-box">38</span>
                <span class="size-box">39</span>
                <span class="size-box">40</span>
                <span class="size-box">41</span>
                <span class="size-box">42</span>
            </div>
            <p class="item-price">$${product.price}</p>
            <button class="btn">Add to Cart</button>
            `;

    document.querySelector('#productImg').innerHTML = htmlStrImg;
    document.querySelector('#productContent').innerHTML = htmlStrDetails;
};

getProductDetails();
const getElement = (id) => document.getElementById(id)
const url = 'https://shop.cyberlearn.vn/api/Product'
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const products = data.content
        const productRender = products.reduce((value, product) => {
            return value += `<div class="col">
                                <div class="card">
                                    <img src="${product.image}"  alt="">
                                    <h3>${product.name}</h3>
                                    <p>${product.shortDescription}</p>
                                        <a href="./detail.html?producid=${product.id}">Buy now</a>
                                        <span>${product.price}$</span>
                                </div>
                            </div>`
        }, '')
        getElement('details').innerHTML = productRender
    })
    .catch((err) => alert(err))