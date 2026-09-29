/* =========================================================
   XFERQEN — CONFIGURACIÓN
   ========================================================= */

// 1) TUS REDES SOCIALES
const SOCIAL_LINKS = [
  {
    id: "youtube",
    name: "YouTube",
    desc: "Mi canal de YouTube",
    url: "https://www.youtube.com/@Ferserk404",

    // LOGO YOUTUBE
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.8 3.9-6.8 3.9Z"
        />
      </svg>
    `
  },

  {
    id: "twitter",
    name: "X",
    desc: "Sígueme en X",
    url: "https://x.com/xferqen?s=11",

    // LOGO X
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.2 2h3.7l-8.1 9.3L23.3 22h-7.5l-5.9-7.4L3.5 22H0l8.7-10L.7 2h7.7l5.3 6.8L18.2 2Zm-1.3 17.3h2L6.9 4.6H4.8l12.1 14.7Z"
        />
      </svg>
    `
  },

  {
    id: "discord",
    name: "Discord",
    desc: "Únete a mi comunidad",
    url: "https://discord.gg/dsVDcBacf",

    // LOGO DISCORD
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M19.5 5.1A16.2 16.2 0 0 0 15.7 4l-.5 1a14.2 14.2 0 0 0-6.4 0l-.5-1A16.2 16.2 0 0 0 4.5 5.1C2.1 8.7 1.5 12.2 1.8 15.6a15.7 15.7 0 0 0 4.7 2.4l1.1-1.5a9.9 9.9 0 0 1-1.8-.9l.4-.3c3.5 1.6 7.3 1.6 10.8 0l.4.3a10 10 0 0 1-1.8.9l1.1 1.5a15.7 15.7 0 0 0 4.7-2.4c.4-4-.7-7.5-1.9-10.5ZM8.4 14.1c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm7.2 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z"
        />
      </svg>
    `
  },

  {
    id: "instagram",
    name: "Instagram",
    desc: "Sígueme en Instagram",
    url: "https://www.instagram.com/xferqen?stkn=aHg4cjJobDg1cnE5&utm_source=qr",

    // LOGO INSTAGRAM
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        />

        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        />

        <circle
          cx="17.4"
          cy="6.6"
          r="1.1"
          fill="currentColor"
        />
      </svg>
    `
  }
];


// 2) LINK DE TU SERVIDOR / PERFIL DE MINECRAFT
const MINECRAFT_URL = "AQUI_PONDRE_MI_LINK";


// 3) OTROS JUEGOS
const OTHER_GAMES = [
  // { name: "Valorant", image: "assets/valorant.png", url: "https://..." },
];


/* =========================================================
   NO ES NECESARIO EDITAR NADA DEBAJO DE ESTA LÍNEA
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderSocialLinks();

  wireMinecraftCard();

  renderOtherGames();

  wireModal();

  checkBackgroundImage();

  checkAvatarImage();

  wireBackgroundVideo();

});


/* =========================================================
   REDES SOCIALES
   ========================================================= */

function renderSocialLinks() {

  const list = document.getElementById("socialList");

  if (!list) return;

  const frag = document.createDocumentFragment();

  SOCIAL_LINKS.forEach(link => {

    const li = document.createElement("li");

    const a = document.createElement("a");

    a.className = "link-item";

    a.href =
      link.url &&
      link.url !== "AQUI_PONDRE_MI_LINK"
        ? link.url
        : "#";

    a.target = "_blank";

    a.rel = "noopener noreferrer";

    a.setAttribute(
      "aria-label",
      `${link.name}: ${link.desc}`
    );


    if (
      !link.url ||
      link.url === "AQUI_PONDRE_MI_LINK"
    ) {

      a.setAttribute(
        "aria-disabled",
        "true"
      );

      a.addEventListener(
        "click",
        (e) => e.preventDefault()
      );

    }


    a.innerHTML = `

      <span class="link-item__icon">
        ${link.icon}
      </span>

      <span class="link-item__text">

        <span class="link-item__name">
          ${link.name}
        </span>

        <span class="link-item__desc">
          ${link.desc}
        </span>

      </span>

      <span
        class="link-item__arrow"
        aria-hidden="true"
      >

        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >

          <path d="M9 6l6 6-6 6"/>

        </svg>

      </span>

    `;


    li.appendChild(a);

    frag.appendChild(li);

  });


  list.appendChild(frag);

}


/* =========================================================
   MINECRAFT
   ========================================================= */

function wireMinecraftCard() {

  const card =
    document.getElementById("minecraftCard");

  if (!card) return;


  if (
    MINECRAFT_URL &&
    MINECRAFT_URL !== "AQUI_PONDRE_MI_LINK"
  ) {

    card.href = MINECRAFT_URL;

  } else {

    card.href = "#";

    card.setAttribute(
      "aria-disabled",
      "true"
    );

    card.addEventListener(
      "click",
      (e) => e.preventDefault()
    );

  }


  const icon =
    document.getElementById("minecraftIcon");


  if (icon) {

    icon.addEventListener(
      "error",
      () => {

        icon.hidden = true;

      },
      { once: true }
    );

  }

}


/* =========================================================
   OTROS JUEGOS
   ========================================================= */

function renderOtherGames() {

  const body =
    document.getElementById("modalBody");

  if (!body) return;


  if (!OTHER_GAMES.length) {

    body.innerHTML =
      `<p class="modal__empty">Próximamente</p>`;

    return;

  }


  const frag =
    document.createDocumentFragment();


  OTHER_GAMES.forEach(game => {

    const a =
      document.createElement("a");

    a.className =
      "game-list-item";

    a.href =
      game.url || "#";

    a.target = "_blank";

    a.rel =
      "noopener noreferrer";


    a.innerHTML = `

      <img
        src="${game.image}"
        alt=""
        onerror="this.style.display='none'"
      >

      <span class="game-list-item__name">
        ${game.name}
      </span>

    `;


    frag.appendChild(a);

  });


  body.appendChild(frag);

}


/* =========================================================
   MODAL
   ========================================================= */

function wireModal() {

  const openBtn =
    document.getElementById("otherGamesBtn");

  const modal =
    document.getElementById("gamesModal");

  const closeBtn =
    document.getElementById("modalClose");

  const backdrop =
    document.getElementById("modalBackdrop");


  if (!openBtn || !modal) return;


  let lastFocused = null;


  const open = () => {

    lastFocused =
      document.activeElement;

    modal.hidden = false;

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    if (closeBtn) {
      closeBtn.focus();
    }

    document.body.style.overflow =
      "hidden";

  };


  const close = () => {

    modal.hidden = true;

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.style.overflow =
      "";

    if (lastFocused) {
      lastFocused.focus();
    }

  };


  openBtn.addEventListener(
    "click",
    open
  );


  if (closeBtn) {

    closeBtn.addEventListener(
      "click",
      close
    );

  }


  if (backdrop) {

    backdrop.addEventListener(
      "click",
      close
    );

  }


  document.addEventListener(
    "keydown",
    (e) => {

      if (
        e.key === "Escape" &&
        !modal.hidden
      ) {

        close();

      }

    }
  );

}


/* =========================================================
   COMPROBAR FONDO
   ========================================================= */

function checkBackgroundImage() {

  const img =
    new Image();


  img.onload = () => {

    document.body.classList.remove(
      "no-bg"
    );

  };


  img.onerror = () => {

    document.body.classList.add(
      "no-bg"
    );

  };


  img.src =
    "assets/background.png";

}


/* =========================================================
   COMPROBAR FOTO DE PERFIL
   ========================================================= */

function checkAvatarImage() {

  const img =
    document.getElementById("avatarImg");

  if (!img) return;


  img.addEventListener(
    "error",
    () => {

      img.style.display =
        "none";

    },
    { once: true }
  );

}


/* =========================================================
   VIDEO DE FONDO
   ========================================================= */

function wireBackgroundVideo() {

  const video =
    document.getElementById(
      "backgroundVideo"
    );

  if (!video) return;


  const showVideo = () => {

    video.classList.add(
      "is-ready"
    );

  };


  video.addEventListener(
    "loadeddata",
    showVideo,
    { once: true }
  );


  video.addEventListener(
    "canplay",
    showVideo,
    { once: true }
  );


  video.addEventListener(
    "error",
    () => {

      video.classList.remove(
        "is-ready"
      );

    },
    { once: true }
  );


  /*
     Intentamos reproducirlo.
     muted + playsinline permite
     reproducción automática en móviles.
  */

  const playPromise =
    video.play();


  if (
    playPromise &&
    typeof playPromise.catch === "function"
  ) {

    playPromise.catch(() => {

      /*
         Si el navegador bloquea
         el autoplay, la imagen
         background.png seguirá
         funcionando como respaldo.
      */

    });

  }

}