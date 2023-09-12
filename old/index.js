// const faqs = document.querySelectorAll(".accordion");

// faqs.forEach(accordion=>{
//     accordion.addEventListener("click",()=>{
//             accordion.classList.toggle("active");
//     })
// })

document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".accordion-item");
  
    faqs.forEach((accordion) => {
      accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
      });
    });
  });
  