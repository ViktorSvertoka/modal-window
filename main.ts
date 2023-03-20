interface Refs {
  overlay: HTMLElement | null;
  modalWindow: HTMLElement | null;
  closeBtn: HTMLElement | null;
  openBtn: HTMLElement | null;
}

const refs: Refs = {
  overlay: document.getElementById("overlay"),
  modalWindow: document.getElementById("modalWindow"),
  closeBtn: document.getElementById("closeBtn"),
  openBtn: document.getElementById("openBtn"),
};

interface Classes {
  openModal: string;
}

const classes: Classes = {
  openModal: "open-modal",
};

refs.openBtn?.addEventListener("click", handleModal);
refs.closeBtn?.addEventListener("click", handleModal);
refs.overlay?.addEventListener("click", handleModal);

document.addEventListener("keydown", handleModalClose);

function handleModal() {
  document.body.classList.toggle(classes.openModal);
}

function handleModalClose({ code }: KeyboardEvent) {
  if (code === "Escape") {
    document.body.classList.remove(classes.openModal);
  }
}
