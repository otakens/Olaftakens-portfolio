import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'KeenDelivery', component: KeendeliveryComponent },
  { path: 'Perflectie', component: PerflectieComponent },
  { path: 'MinersLife', component: MinerslifeComponent },
  { path: 'Pangkalpinang', component: PangkalpinangComponent },
  { path: 'Nusantara', component: NusantaraComponent },
  { path: 'Gamepoint', component: GamepiontComponent },
  { path: 'Nimbus', component: NimbusComponent },
  { path: 'FrozenChaos', component: FrozenchaosComponent },
  { path: 'TheGrey', component: ThegreyComponent },
  { path: 'FillwithSkill', component: FillwithskillComponent },
  { path: 'Eccky', component: EcckyComponent },
  { path: 'LegionsofShadow', component: LegionsofshadowComponent },
  { path: 'Velocityball', component: VelocityballComponent },
  { path: 'Energymeter', component: EnergymeterComponent },
  { path: 'ImpressiveInteractive', component: ImpressiveinteractiveComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
