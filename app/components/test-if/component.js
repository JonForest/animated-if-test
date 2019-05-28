import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import resize from 'ember-animated/motions/resize';


export default class TestIf extends Component {
    @tracked
    showContent = false

  constructor() {
    super(...arguments)
    this.resize = resize
  }

  @action
  toggleContent() {
      this.showContent = !this.showContent
  }
}