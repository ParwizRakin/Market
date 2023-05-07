const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML =`
    <div class="footer-content">
    <img src="img/Logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">T-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
     
        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">T-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
    </div>
    
</div>
<p class="footer-title">about company</p>
<p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi voluptates porro adipisci sapiente, laboriosam ut. Aperiam nesciunt ipsa eveniet adipisci, aliquam assumenda nisi amet ad laudantium. Sunt, praesentium! Eum a provident esse odit dolorum aliquam libero consequuntur error voluptate nostrum, nobis vero asperiores enim soluta qui ex porro laborum praesentium saepe et pariatur? Aliquid molestias exercitationem temporibus quasi excepturi assumenda voluptatum, error dolorem minima, asperiores sit consectetur repellat omnis consequatur iure. Maiores, eum, beatae, quidem alias a doloribus corporis dolores repellat quo doloremque nam tenetur temporibus? Eum eligendi, temporibus beatae hic cupiditate soluta praesentium architecto, tempora nostrum, ducimus numquam.</p>
<p class="info">support emails - help@nasaj.com, customersupport@nasaj.com</p>
<p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
</div>
<p class="footer-credit">Clothing, Best apparels online Store</p>
    
    `;
}

createFooter();