// Injects a navbar into an existing header element
const header = document.querySelector("header");
const navbar = `
<nav>
  <div class="flex justify-between items-center p-4 bg-black">
    <a href="./index.html" class="nav-link">Bat Bots</a>
    <!-- Desktop navbar - Opens at md breakpoint -->
    <ul class="hidden md:flex gap-4">
      <li>
        <a href="./devlog.html" class="nav-link">Devlog</a>
      </li>
      <li>
        <a href="./presskit.html" class="nav-link">Press Kit</a>
      </li>
    </ul>
    <button id="burger" class="md:hidden">
      <img src="./images/burger-menu.png" alt="" class="max-w-[35px]" />
    </button>
  </div>
  <!-- Hidden mobile nav -->
  <ul id="mobile-nav" class="hidden flex-col bg-black md:hidden">
    <li>
      <a href="./devlog.html" class="nav-link">Devlog</a>
    </li>
    <li>
      <a href="./presskit.html" class="nav-link">Press Kit</a>
    </li>
  </ul>
</nav>
`;
if (header) {
  header.innerHTML += navbar;
} else {
  console.error("Attempted to add navbar to page without header");
}

// Mobile navbar toggle logic
const burgerButton = document.getElementById("burger");
const mobileNavMenu = document.getElementById("mobile-nav");
burgerButton.addEventListener("click", () => {
  mobileNavMenu.classList.toggle("hidden");
  mobileNavMenu.classList.toggle("flex");
});
