const dataCartProduct = JSON.parse(cartProduct);

const contentBox = document.querySelector('.section3__box2');

dataCartProduct.forEach(element => {
    const title = document.createElement('div');
    const image = document.createElement('img');   
    const productText = document.createElement('div');
    const price = document.createElement('div');
    const imageBasket = document.createElement('img');
    const divBasketImage = document.createElement('div');
    const boxDivBasketImage = document.createElement('div');
    const boxDivBasketText = document.createElement('div');
    const aDivBasketImage = document.createElement('a');
    const contentBoxEl = document.createElement('div');

    divBasketImage.classList.add('section3__box2__basket__img');
    boxDivBasketImage.classList.add('section3__box2__basket');
    boxDivBasketText.classList.add('section3__box2__basket__text');
    contentBoxEl.classList.add('section3__box2__cart');
    image.classList.add('section3__img');
    title.classList.add('section3__box2__text1');
    productText.classList.add('section3__box2__text2');
    price.classList.add('section3__box2__price');
    image.setAttribute('alt', 'photoProduct');
    boxDivBasketText.textContent = 'Add to Cart';
    aDivBasketImage.src = '#'; 
    
    title.textContent = element.title;
    image.src = element.image;
    productText.textContent = element.productText;
    price.textContent = element.price;
    imageBasket.src = element.imageBasket;

    contentBox.appendChild(contentBoxEl);
    contentBoxEl.appendChild(image);
    contentBoxEl.appendChild(title);
    contentBoxEl.appendChild(productText);
    contentBoxEl.appendChild(price);
    contentBoxEl.appendChild(boxDivBasketImage);
    boxDivBasketImage.appendChild(aDivBasketImage);
    aDivBasketImage.appendChild(divBasketImage);
    aDivBasketImage.appendChild(boxDivBasketText);
    divBasketImage.appendChild(imageBasket);
});