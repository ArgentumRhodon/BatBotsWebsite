// Resource Link
const fontAwesomeLink = `
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
  integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
`;
document.head.innerHTML += fontAwesomeLink;

// Footer Content
const footer = document.querySelector("footer");
const footerContent = `
<div class="bg-gray-800 p-6 text-center">
  <div class="container flex flex-col justify-center mx-auto">
    <h1 class="pb-6 text-3xl">Team Throwback</h1>
    <p class="max-w-[80ch] mx-auto">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
      placeat repellat culpa deserunt dignissimos natus nostrum quo
      sequi ad nesciunt ipsum molestiae ipsam eveniet esse, cumque
      veniam labore officia totam porro similique laudantium aliquam
      provident nulla enim! Explicabo unde incidunt officia. Debitis
      commodi qui amet itaque impedit a veritatis similique?
    </p>
  </div>
  <p class="mt-6 text-3xl space-x-4">
    <a
      href="https://www.facebook.com/profile.php?id=61560147347488"
      target="_blank"
    >
      <i class="fa-brands fa-facebook" style="color: #ffffff"></i>
    </a>
    <a
      href="https://www.instagram.com/batbotsofficial/"
      target="_blank"
    >
      <i class="fa-brands fa-instagram" style="color: #ffffff"></i>
    </a>
    <a
      href="https://www.youtube.com/channel/UCISGDklDhmvr9vCYj7oItAg"
      target="_blank"
    >
      <i class="fa-brands fa-youtube" style="color: #ffffff"></i>
    </a>
  </p>
</div>
`;

if (footerContent) {
  footer.innerHTML += footerContent;
} else {
  console.error(
    "Attempted to add footer content to page without footer element"
  );
}
