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
<div
  class="bg-gray-700 flex flex-col justify-center items-center w-full gap-6 text-center p-6"
>
  <h1 class="text-3xl">Yesteryear Games</h1>
  <p class="max-w-[80ch] mx-auto">
    Hey there! This is Yesteryear Games. We are a team of student
    developers from Rochester Institute of Technology's graduate Game
    Design and Development program.
  </p>
  <button
    id="team-info-toggle"
    class="btn flex flex-col sm:flex-row items-center gap-4"
  >
    More about Yesteryear Games
    <i class="fa-solid fa-angle-down fa-xl"></i>
  </button>

  <div
    id="team-info"
    class="mt-9 hidden grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-fit gap-6"
  >
    <section class="w-96 max-w-full">
      <img
        src="./images/Lucas.jpg"
        alt=""
        class="rounded-lg mx-auto max-w-[200px]"
      />
      <h1 class="text-xl my-4">Lucas Corey</h1>
      <p>
        Lucas is responsible for building this website and producing
        many of the pixel-art assets. His previous work includes
        technical architecture and gameplay programming.
      </p>
    </section>

    <section class="w-96 max-w-full">
      <img
        src="./images/Rob.png"
        alt=""
        class="rounded-lg mx-auto max-w-[200px]"
      />
      <h1 class="text-xl my-4">Robert Reddick</h1>
      <p>
        Rob is the AI Programmer and Producer for Bat Bots. He brings
        the Bat Bots to life and keeps the team's process in order.
      </p>
    </section>

    <section class="w-96 max-w-full">
      <img
        src="./images/Ed.png"
        alt=""
        class="rounded-lg mx-auto max-w-[200px]"
      />
      <h1 class="text-xl my-4">Eduardo Escudero</h1>
      <p>
        Ed's our tools and services wizard. He's been helping us 
        develop the input system for multiplayer, our data pipeline
        and our debug tools. On occasion he has contributed some 
        tunes as well.
      </p>
    </section>

    <section class="w-96 max-w-full">
      <img
        src="./images/Kevin.png"
        alt=""
        class="rounded-lg mx-auto max-w-[200px]"
      />
      <h1 class="text-xl my-4">Kevin Insinna</h1>
      <p>
        Kevin is the UI Designer and Programmer for Bat Bots. He's 
        responsible for tying together the entire game experience and 
        giving players all the information they need to play the game.
      </p>
    </section>

    <section class="w-96 max-w-full">
      <img
        src="./images/Quinn.png"
        alt=""
        class="rounded-lg mx-auto max-w-[200px]"
      />
      <h1 class="text-xl my-4">Quinn Poyneer</h1>
      <p>
        Quinn is our aesthetic coordinator: she made the animations
        for our beloved bats, as well as the in-game music. When 
        she's not working on assets, she also helps out with gameplay 
        design and QA testing.
      </p>
    </section>

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

const teamInfoToggle = document.getElementById("team-info-toggle");
const teamInfo = document.getElementById("team-info");
teamInfoToggle.addEventListener("click", () => {
  teamInfo.classList.toggle("hidden");
  teamInfo.classList.toggle("grid");
  teamInfo.classList.toggle("dropdown");

  teamInfo.scrollIntoView();
});
