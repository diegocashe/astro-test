

document.addEventListener("astro:page-load", (_) => {
  const $hamburguer = document.querySelector(".hamburguer");
  const $sideMenu = document.querySelector(".side-menu");

  if (
    $hamburguer &&
    $hamburguer instanceof HTMLDivElement &&
    $sideMenu &&
    $sideMenu instanceof HTMLDivElement
  ) {

    const onClassChange: MutationCallback = (mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          if ($sideMenu.classList.contains("open")) {
            $sideMenu.style.display = 'block';
            setTimeout(() => {
              $sideMenu.style.opacity = '1';
              $sideMenu.style.transform = 'scale(1)';
            }, 50)
          } else {
            $sideMenu.style.opacity = '0';
            $sideMenu.style.transform = 'scale(0)';
            setTimeout(() => {
              $sideMenu.style.display = 'none';
            }, 200)
          }
        }
      });
    };

    const observer = new MutationObserver(onClassChange);

    observer.observe($sideMenu, { attributes: true, childList: false, subtree: false });

    $hamburguer.addEventListener("mousedown", (event) => {
      $hamburguer.classList.toggle("open");
      $sideMenu.classList.toggle("open");
    })
  }
})