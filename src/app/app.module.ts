import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VisualizzaModelliComponent } from './visualizza-modelli/visualizza-modelli.component';
import { ConfrontoComponent } from './confronto/confronto.component';
import { ElencoModelliService } from './common/elenco-modelli.service';

import { StatoService } from './common/stato.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, VisualizzaModelliComponent, ConfrontoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ElencoModelliService, StatoService]
})
export class AppModule { }
