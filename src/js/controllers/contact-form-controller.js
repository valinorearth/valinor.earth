import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["form", "successMessage", "failureMessage", "submit"];

  send(e) {
    e.preventDefault();
    if (!this.submitUrl) return;

    this.disableForm();
    const data = new FormData(this.formTarget);

    fetch(this.submitUrl, {
      method: "POST",
      mode: "no-cors",
      body: data,
    })
      .then(() => {
        this.successMessageTarget.classList.remove("hidden");
        this.formTarget.reset();
        this.enableForm();
      })
      .catch(() => {
        this.enableForm();
        this.failureMessageTarget.classList.remove("hidden");
      });
  }

  disableForm() {
    this.submitTarget.disabled = true;
  }

  enableForm() {
    this.submitTarget.disabled = false;
  }

  get submitUrl() {
    return this.data.get("url");
  }
}
