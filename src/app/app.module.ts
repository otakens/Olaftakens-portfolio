import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { KeendeliveryComponent } from './portfolio/keendelivery/keendelivery.component';
import { PerflectieComponent } from './portfolio/perflectie/perflectie.component';
import { MinerslifeComponent } from './portfolio/minerslife/minerslife.component';
import { PangkalpinangComponent } from './portfolio/pangkalpinang/pangkalpinang.component';
import { NusantaraComponent } from './portfolio/nusantara/nusantara.component';
import { GamepiontComponent } from './portfolio/gamepiont/gamepiont.component';
import { NimbusComponent } from './portfolio/nimbus/nimbus.component';
import { FrozenchaosComponent } from './portfolio/frozenchaos/frozenchaos.component';
import { ThegreyComponent } from './portfolio/thegrey/thegrey.component';
import { FillwithskillComponent } from './portfolio/fillwithskill/fillwithskill.component';
import { EcckyComponent } from './portfolio/eccky/eccky.component';
import { LegionsofshadowComponent } from './portfolio/legionsofshadow/legionsofshadow.component';
import { VelocityballComponent } from './portfolio/velocityball/velocityball.component';
import { EnergymeterComponent } from './portfolio/energymeter/energymeter.component';
import { ImpressiveinteractiveComponent } from './portfolio/impressiveinteractive/impressiveinteractive.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    KeendeliveryComponent,
    PerflectieComponent,
    MinerslifeComponent,
    PangkalpinangComponent,
    NusantaraComponent,
    GamepiontComponent,
    NimbusComponent,
    FrozenchaosComponent,
    ThegreyComponent,
    FillwithskillComponent,
    EcckyComponent,
    LegionsofshadowComponent,
    VelocityballComponent,
    EnergymeterComponent,
    ImpressiveinteractiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
