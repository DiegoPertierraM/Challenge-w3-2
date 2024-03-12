import { Component } from './component';

export class Counter extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  render(): void {
    super.render();
  }

  createTemplate() {
    return `
      <div>
        <h2>Counter</h2>
        <p></p>
        <div>
          <button data-value="-1">-</button>
          <span>0</span>
          <button data-value="1">+</button>
        </div>
      </div>
    `;
  }
}
