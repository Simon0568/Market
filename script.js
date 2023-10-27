let allTotal = 0;

function addToCart(element) {
    let main_element = element.closest('.single-item');
    let price = main_element.querySelector('.price').innerText;
    let name = main_element.querySelector('h3').innerText;
    let quantity = main_element.querySelector('input').value; // za input je uvek value, ovo ostalo innerText
    let cartItems = document.querySelector('.cart-items');

    if(parseInt(quantity) > 0) {
        
        price = price.substring(1);
        price = parseInt(price);
        quantity = parseInt(quantity);

        let total = price * quantity;
        allTotal += total;

        cartItems.innerHTML += `<div class="item-total">
                                    <h3>${name}</h3>
                                    <p>$${price} X ${quantity} = $<span>${total}</span></p>
                                    <button onclick="removeFromCart(this)" class="remove-item">Remove</button>
                                </div>`;

        document.querySelector('.total').innerText = `Total: $${allTotal}`;

        element.innerText = 'Added'; // menjamo tekst dugmeta na 'dodato'
        element.setAttribute('disabled', 'true'); // onemogucavamo dugme tako da ne moze da se pritiska nakon sto je dodato vec

    } else {
        alert('Odaberite kolicinu');
    }

    console.log(quantity);
    
} 

function removeFromCart(element) {
    let mainEl = element.closest('.item-total');
    let cena = mainEl.querySelector('p span').innerText; // span se nalazi u p tako da spominjemo oba
    let ime = mainEl.querySelector('h3').innerText;
    let povrce = document.querySelectorAll('.single-item');

    cena = parseInt(cena);

    allTotal -= cena;

    document.querySelector('.total').innerText = `Total: $${allTotal}`;

    mainEl.remove();

    povrce.forEach(function (povrc) {
        let imePredmeta = povrc.querySelector('.si-content h3').innerText;
        if(imePredmeta === ime) {
            povrc.querySelector('.actions input').value = 0;
            povrc.querySelector('.actions button').removeAttribute('disabled');
            povrc.querySelector('.actions button').innerText = "Dodaj";
        }
    });

}