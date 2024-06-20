import { TestService } from './shared/services/test.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AboutUsComponent } from './public-components/about-us/components/about-us/about-us.component';
import { HowItWorksComponent } from './public-components/how-it-works/components/how-it-works/how-it-works.component';
import { HomeComponent } from './public-components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterService } from './shared/services/counter.service';
import { Counter2Service } from './shared/services/counter2.service';
import { counterFactory } from './shared/services/counter.factory';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule, // Import AppRoutingModule
    BrowserAnimationsModule,
  ],
  providers: [
    // {
    //   provide: CounterService, useFactory: (testService: TestService)=>
    //   testService.status ? new CounterService() : new Counter2Service(),
    //   deps: [TestService]
    // },
    counterFactory,
    TestService,
    {provide: 'appTitle', useValue: 'This is app Title'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
