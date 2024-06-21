// Injects a navbar into an existing header element
const header = document.querySelector("header");
const navbar = `
<nav>
  <div
    class="hidden fixed top-0 right-0 left-0 z-30 md:flex justify-between items-center p-4 bg-gray-800"
  >
    <a href="./index.html">
      <img src="./images/title_white_2x.png" alt="" class="max-h-[25px]" />
    </a>

    <!-- Desktop navbar - Opens at md breakpoint -->
    <ul class="flex gap-4">
      <li>
        <a href="./index.html" class="nav-link">Home</a>
      </li>
      <li>
        <a href="./changelog.html" class="nav-link">Changelog</a>
      </li>
      <li>
        <a href="./presskit.html" class="nav-link">Press Kit</a>
      </li>
    </ul>
  </div>
  <div class="md:hidden fixed top-0 right-0 left-0 z-30">
    <div
      class="relative flex justify-between items-center z-20 p-4 bg-gray-800"
    >
      <a href="./index.html">
        <img src="./images/title_white_2x.png" alt="" class="max-h-[35px]" />
      </a>
      <button id="burger" class="bg-gray-900 p-1 rounded-lg">
        <img src="./images/burger-menu.png" alt="" class="max-w-[35px]" />
      </button>
    </div>
    <!-- Hidden mobile nav -->
    <ul
      id="mobile-nav"
      class="relative hidden flex-col z-10 bg-gray-800 text-xl"
    >
      <li class="border-t-[1px] border-gray-400">
        <a href="./index.html" class="nav-link">Home</a>
      </li>
      <li class="border-t-[1px] border-gray-400">
        <a href="./changelog.html" class="nav-link">Changelog</a>
      </li>
      <li class="border-t-[1px] border-gray-400">
        <a href="./presskit.html" class="nav-link">Press Kit</a>
      </li>
    </ul>
  </div>
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
  mobileNavMenu.classList.toggle("dropdown");
});
