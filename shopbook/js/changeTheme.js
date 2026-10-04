const body = document.body;

const lightBtn = document.querySelector('[data-id="light"]');
const darkBtn  = document.querySelector('[data-id="dark"]');

export function changeTheme() {
  lightBtn?.addEventListener("click", () => {
    body.classList.remove("dark");
    body.classList.add("light");
  });

  darkBtn?.addEventListener("click", () => {
    body.classList.remove("light");
    body.classList.add("dark");
  });
}