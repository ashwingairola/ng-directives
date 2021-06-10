import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
	declarations: [AppComponent, BasicHighlightDirective, UnlessDirective],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
