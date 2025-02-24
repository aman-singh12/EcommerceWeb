 
 var MenuItems = document.getElementById("MenuItems");
 MenuItems.style.maxHeight = "0px";

 function menutoggle() {
     MenuItems.style.maxHeight = MenuItems.style.maxHeight == "0px" ? "200px" : "0px";
 }

 // Product hover effect
 document.querySelectorAll('.col-4').forEach(product => {
     product.addEventListener('mouseover', () => {
         product.style.transform = 'translateY(-5px)';
     });
     product.addEventListener('mouseout', () => {
         product.style.transform = 'translateY(0)';
     });
 });

 // Add smooth scroll
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Add current year
 document.querySelector('.copyright').innerHTML = `Copyright ${new Date().getFullYear()} - RedStore`;