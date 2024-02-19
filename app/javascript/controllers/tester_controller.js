import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tester"
export default class extends Controller {
  static values = {
    frame: String
  };

  connect() {
    console.log("Connected", this.element);
  }

  open(e) {
    e.preventDefault();

    const a = e.currentTarget;
    if (!a.href) return;
    const frame = document.getElementById(this.frameValue);
    console.log("YOO HOO", frame, e.currentTarget);
    if (!frame) return;

    if (frame.src == a.href) {
      frame.reload();
    } else {
      frame.src = a.href;
    }
  }
}
