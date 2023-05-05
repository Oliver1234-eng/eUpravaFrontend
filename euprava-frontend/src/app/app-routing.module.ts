import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { KatastarHomeComponent } from './katastar-home/katastar-home.component';
import { GradjaninHomeComponent } from './gradjanin-home/gradjanin-home.component';
import { KatastarNewsComponent } from './katastar-news/katastar-news.component';
import { KatastarProfileComponent } from './katastar-profile/katastar-profile.component';
import { KatastarLogoutComponent } from './katastar-logout/katastar-logout.component';
import { NewsOneComponent } from './katastar-news-folder/news-one/news-one.component';
import { NewsTwoComponent } from './katastar-news-folder/news-two/news-two.component';
import { NewsThreeComponent } from './katastar-news-folder/news-three/news-three.component';
import { NewsFourComponent } from './katastar-news-folder/news-four/news-four.component';
import { NewsFiveComponent } from './katastar-news-folder/news-five/news-five.component';
import { NewsSixComponent } from './katastar-news-folder/news-six/news-six.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GradjaninKatastarComponent } from './gradjanin-katastar/gradjanin-katastar.component';
import { GradjaninProfileComponent } from './gradjanin-profile/gradjanin-profile.component';
import { GradjaninMaticarComponent } from './gradjanin-maticar/gradjanin-maticar.component';
import { GradjaninNotarComponent } from './gradjanin-notar/gradjanin-notar.component';
import { MaticarHomeComponent } from './maticar-home/maticar-home.component';
import { NotarHomeComponent } from './notar-home/notar-home.component';
import { PronalazenjeBrojaParceleComponent } from './pronalazenje-broja-parcele/pronalazenje-broja-parcele.component';
import { NewsOneGradjaninComponent } from './katastar-news-folder/news-one-gradjanin/news-one-gradjanin.component';
import { NewsTwoGradjaninComponent } from './katastar-news-folder/news-two-gradjanin/news-two-gradjanin.component';
import { NewsThreeGradjaninComponent } from './katastar-news-folder/news-three-gradjanin/news-three-gradjanin.component';
import { NewsFourGradjaninComponent } from './katastar-news-folder/news-four-gradjanin/news-four-gradjanin.component';
import { NewsFiveGradjaninComponent } from './katastar-news-folder/news-five-gradjanin/news-five-gradjanin.component';
import { NewsSixGradjaninComponent } from './katastar-news-folder/news-six-gradjanin/news-six-gradjanin.component';
import { PronalazenjeBrojaParceleGradjaninComponent } from './pronalazenje-broja-parcele-gradjanin/pronalazenje-broja-parcele-gradjanin.component';
import { PrikazGodisnjihStatistikaKatastraComponent } from './prikaz-godisnjih-statistika-katastra/prikaz-godisnjih-statistika-katastra.component';
import { PrikazGodisnjihStatistikaKatastraGradjaninComponent } from './prikaz-godisnjih-statistika-katastra-gradjanin/prikaz-godisnjih-statistika-katastra-gradjanin.component';
import { PrikazGodisnjihStatistikaInfoCentraComponent } from './prikaz-godisnjih-statistika-info-centra/prikaz-godisnjih-statistika-info-centra.component';
import { PrikazGodisnjihStatistikaInfoCentraGradjaninComponent } from './prikaz-godisnjih-statistika-info-centra-gradjanin/prikaz-godisnjih-statistika-info-centra-gradjanin.component';
import { PrikazIstorijePromenaPodatakaONekomZemljistuComponent } from './prikaz-istorije-promena-podataka-o-nekom-zemljistu/prikaz-istorije-promena-podataka-o-nekom-zemljistu.component';
import { PretragaBazePodatakaKatastraNepokretnostiComponent } from './pretraga-baze-podataka-katastra-nepokretnosti/pretraga-baze-podataka-katastra-nepokretnosti.component';
import { PretragaBazePodatakaKatastraNepokretnostiGradjaninComponent } from './pretraga-baze-podataka-katastra-nepokretnosti-gradjanin/pretraga-baze-podataka-katastra-nepokretnosti-gradjanin.component';
import { NotarProfileComponent } from './notar-profile/notar-profile.component';
import { PrikazUgovoraNotarComponent } from './prikaz-ugovora-notar/prikaz-ugovora-notar.component';
import { PrikazTerminaNotarComponent } from './prikaz-termina-notar/prikaz-termina-notar.component';
import { MaticarProfileComponent } from './maticar-profile/maticar-profile.component';
import { PregledMaticneKnjigeRodjenihComponent } from './pregled-maticne-knjige-rodjenih/pregled-maticne-knjige-rodjenih.component';


const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'katastar-home', component: KatastarHomeComponent},
  {path: 'maticar-home', component: MaticarHomeComponent},
  {path: 'notar-home', component: NotarHomeComponent},
  {path: 'gradjanin-home', component: GradjaninHomeComponent},
  {path: 'katastar-news/:id', component: KatastarNewsComponent},
  {path: 'katastar-profile', component: KatastarProfileComponent},
  {path: 'katastar-logout', component: KatastarLogoutComponent},
  {path: 'katastar-news-one', component: NewsOneComponent},
  {path: 'katastar-news-two', component: NewsTwoComponent},
  {path: 'katastar-news-three', component: NewsThreeComponent},
  {path: 'katastar-news-four', component: NewsFourComponent},
  {path: 'katastar-news-five', component: NewsFiveComponent},
  {path: 'katastar-news-six', component: NewsSixComponent},
  {path: 'katastar-news-one-gradjanin', component: NewsOneGradjaninComponent},
  {path: 'katastar-news-two-gradjanin', component: NewsTwoGradjaninComponent},
  {path: 'katastar-news-three-gradjanin', component: NewsThreeGradjaninComponent},
  {path: 'katastar-news-four-gradjanin', component: NewsFourGradjaninComponent},
  {path: 'katastar-news-five-gradjanin', component: NewsFiveGradjaninComponent},
  {path: 'katastar-news-six-gradjanin', component: NewsSixGradjaninComponent},
  {path: 'gradjanin-katastar', component: GradjaninKatastarComponent},
  {path: 'gradjanin-profile', component: GradjaninProfileComponent},
  {path: 'gradjanin-maticar', component: GradjaninMaticarComponent},
  {path: 'gradjanin-notar', component: GradjaninNotarComponent},
  {path: 'katastar-utvrdjivanje-broja-parcele', component: PronalazenjeBrojaParceleComponent},
  {path: 'katastar-utvrdjivanje-broja-parcele-gradjanin', component: PronalazenjeBrojaParceleGradjaninComponent},
  {path: 'prikaz-godisnjih-statistika-katastra', component: PrikazGodisnjihStatistikaKatastraComponent},
  {path: 'prikaz-godisnjih-statistika-katastra-gradjanin', component: PrikazGodisnjihStatistikaKatastraGradjaninComponent},
  {path: 'prikaz-godisnjih-statistika-info-centra', component: PrikazGodisnjihStatistikaInfoCentraComponent},
  {path: 'prikaz-godisnjih-statistika-info-centra-gradjanin', component: PrikazGodisnjihStatistikaInfoCentraGradjaninComponent},
  {path: 'prikaz-istorije-promena-podataka-o-nekom-zemljistu', component: PrikazIstorijePromenaPodatakaONekomZemljistuComponent},
  {path: 'pretraga-baze-podataka-katastra-nepokretnosti', component: PretragaBazePodatakaKatastraNepokretnostiComponent},
  {path: 'pretraga-baze-podataka-katastra-nepokretnosti-gradjanin', component: PretragaBazePodatakaKatastraNepokretnostiGradjaninComponent},
  {path: 'notar-profile', component: NotarProfileComponent},
  {path: 'prikaz-ugovora-notar', component: PrikazUgovoraNotarComponent},
  {path: 'prikaz-termina-notar', component: PrikazTerminaNotarComponent},
  {path: 'maticar-profile', component: MaticarProfileComponent},
  {path: 'pregled-maticne-knjige-rodjenih', component: PregledMaticneKnjigeRodjenihComponent},


  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
