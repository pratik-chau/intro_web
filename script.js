// Initialize Feather icons
document.addEventListener('DOMContentLoaded', () => {
    feather.replace();
  });


//Gallery View for Projects
// document.addEventListener('DOMContentLoaded', function() {
//     const cards = document.querySelectorAll('.work .card');
//     const workSection = document.querySelector('.work');
    
//     cards.forEach(card => {
//       card.addEventListener('click', function() {
//         const isActive = this.classList.contains('active');
        
//         cards.forEach(c => {
//           c.classList.remove('active');
//           c.style.filter = '';
//           c.style.transform = '';
//           c.style.zIndex = '';
//         });
        
//         if (!isActive) {
//           // Add blur to all other cards
//           cards.forEach(c => {
//             if (c !== this) {
//               c.style.filter = 'blur(10px)';
//               c.style.zIndex = '1';
//             }
//           });
          
//           // Make clicked card active
//           this.classList.add('active');
//           this.style.position = 'absolute';
//           this.style.zIndex = '10';
//           this.style.transform = 'scale(2)';
          
//           // Center the card
//           const workRect = workSection.getBoundingClientRect();
//           const cardRect = this.getBoundingClientRect();
          
//           const leftPos = (workRect.width / 2) - (cardRect.width / 2);
//           const topPos = (workRect.height/2) - (cardRect.height / 2) + window.scrollY;
          
//           this.style.left = leftPos + 'px';
//           this.style.top = topPos + 'px';
          
//           // Add overlay
//           if (!document.querySelector('.overlay')) {
//             const overlay = document.createElement('div');
//             overlay.className = 'overlay';
//             workSection.appendChild(overlay);
//           }
//         } else {
//           // Remove overlay when closing
//           const overlay = document.querySelector('.overlay');
//           if (overlay) {
//             overlay.remove();
//           }
          
//           // Reset the clicked card's position
//           this.style.position = '';
//           this.style.left = '';
//           this.style.top = '';
//         }
//       });
//     });
    
//     // Close active card when clicking overlay
//     workSection.addEventListener('click', function(e) {
//       if (e.target.classList.contains('overlay')) {
//         const activeCard = document.querySelector('.work .card.active');
//         if (activeCard) {
//           activeCard.click();
//         }
//       }
//     });
//   });


  //Goto Top Button
   let mybutton = document.getElementById("myBtn");
        
            window.onscroll = function() { 
                scrollFunction();
            };
        
            function scrollFunction() {
                if (document.documentElement.scrollTop > 500) {
                    mybutton.style.display = "block";
                } else {
                    mybutton.style.display = "none";
                }
            }
        
            mybutton.addEventListener("click", function() {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });

            //Gallery Carousel Feature
            // document.addEventListener('DOMContentLoaded', () => {
            //   const cards = document.querySelectorAll('.carousel-items .card');
            //   const leftArrow = document.querySelector('.left-arrow');
            //   const rightArrow = document.querySelector('.right-arrow');
            //   const currentIndicator = document.querySelector('.gallery-indicator .current');
            //   const totalIndicator = document.querySelector('.gallery-indicator .total');
            //   const carouselItems = document.querySelector('.carousel-items');
            
            //   console.log('Cards:', cards);
            //   console.log('Left Arrow:', leftArrow);
            //   console.log('Right Arrow:', rightArrow);
            //   console.log('Current Indicator:', currentIndicator);
            //   console.log('Total Indicator:', totalIndicator);
            //   console.log('Carousel Items Container:', carouselItems);
            
            //   if (!cards.length || !leftArrow || !rightArrow || !currentIndicator || !totalIndicator || !carouselItems) {
            //       console.error('One or more DOM elements not found. Check selectors and HTML structure.');
            //       return;
            //   }
            
            //   let currentIndex = 0;
            //   const totalImages = cards.length;
            
            //   totalIndicator.textContent = totalImages;
            //   console.log('Total Images:', totalImages);
            
            //   const updateCarousel = () => {
            //       cards.forEach((card) => {
            //           card.classList.remove('active');
            //           console.log('Removed active class from card:', card);
            //       });
            
            //       cards[currentIndex].classList.add('active');
            //       console.log(`Added active class to card ${currentIndex}`);
            
            //       currentIndicator.textContent = currentIndex + 1;
            //       console.log('Current Index:', currentIndex);
            //   };
            
            //   const goToPrevious = () => {
            //       currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            //       console.log('Navigating to previous, new index:', currentIndex);
            //       updateCarousel();
            //   };
            
            //   const goToNext = () => {
            //       currentIndex = (currentIndex + 1) % totalImages;
            //       console.log('Navigating to next, new index:', currentIndex);
            //       updateCarousel();
            //   };
            
            //   leftArrow.addEventListener('click', goToPrevious);
            //   rightArrow.addEventListener('click', goToNext);
            
            //   carouselItems.addEventListener('click', (e) => {
            //       e.preventDefault();
            //       console.log('Click on carousel item prevented');
            //   });
            
            //   updateCarousel();
            // });
            