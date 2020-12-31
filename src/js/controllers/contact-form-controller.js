import { Controller } from "stimulus";
import { getSearchValue } from "../utils/url";

export default class extends Controller {
  static targets = [
    "form",
    "subject",
    "successMessage",
    "failureMessage",
    "submit",
  ];

  connect() {
    const subject = getSearchValue("subject");
    if (subject) {
      this.subjectTarget.value = subject;
    }
  }

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
