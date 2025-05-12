// Toggle Navigation Menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("small_menu");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Scroll to Top Button
    const scrollBtn = document.querySelector(".scroll a");
    scrollBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Placeholder for Watch Now buttons
    const watchButtons = document.querySelectorAll(".btn2 a, .btn1 a");
    watchButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            alert("This feature will be added soon!");
        });
    });

    // Subscription Button (Footer)
    const subscribeBtn = document.querySelector(".btn4 a");
    subscribeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Thank you for subscribing to FLIX6!");
    });

    // Card Buy Now buttons
    const buyButtons = document.querySelectorAll(".card button");
    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Redirecting to payment page...");
            // Redirect simulation
            window.location.href = "payment.html"; 
        });
    });

    // Card Watch Now buttons
    const watchNowButtons = document.querySelectorAll(".card a");
    watchNowButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Redirecting to watch page...");
            e.preventDefault();
            window.location.href = "wach.html"; 
        }
        );
    }
    );




