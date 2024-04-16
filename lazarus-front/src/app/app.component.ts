import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabSelecionada = 'perfis';

  selecionarTab(tab: string) {
    this.tabSelecionada = tab;
  }
}
