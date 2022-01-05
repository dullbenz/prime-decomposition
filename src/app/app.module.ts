import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { AnswerBlockComponent } from './components/answer-block/answer-block.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    InputNumberComponent,
    AnswerBlockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
