import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { RouterModule } from '@angular/router';
//import { ToastrModule } from 'ngx-toastr/toastr/toastr.module';
import { LoginComponent } from './login/login.component';
import { KatastarHomeComponent } from './katastar-home/katastar-home.component';
import { GradjaninHomeComponent } from './gradjanin-home/gradjanin-home.component';
import { KatastarNewsComponent } from './katastar-news/katastar-news.component';
import { KatastarProfileComponent } from './katastar-profile/katastar-profile.component';
import { KatastarLogoutComponent } from './katastar-logout/katastar-logout.component';
import { NewsService } from './service/NewsService';
import { NewsOneComponent } from './katastar-news-folder/news-one/news-one.component';
import { NewsTwoComponent } from './katastar-news-folder/news-two/news-two.component';
import { NewsThreeComponent } from './katastar-news-folder/news-three/news-three.component';
import { NewsFourComponent } from './katastar-news-folder/news-four/news-four.component';
import { NewsFiveComponent } from './katastar-news-folder/news-five/news-five.component';
import { NewsSixComponent } from './katastar-news-folder/news-six/news-six.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GradjaninProfileComponent } from './gradjanin-profile/gradjanin-profile.component';
import { GradjaninMaticarComponent } from './gradjanin-maticar/gradjanin-maticar.component';
import { GradjaninNotarComponent } from './gradjanin-notar/gradjanin-notar.component';
import { GradjaninKatastarComponent } from './gradjanin-katastar/gradjanin-katastar.component';
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
import { OrderByPipe } from './prikaz-godisnjih-statistika-katastra/OrderByPipe';
import { FormsModule } from '@angular/forms';
import { PrikazGodisnjihStatistikaKatastraGradjaninComponent } from './prikaz-godisnjih-statistika-katastra-gradjanin/prikaz-godisnjih-statistika-katastra-gradjanin.component';
import { PrikazGodisnjihStatistikaInfoCentraComponent } from './prikaz-godisnjih-statistika-info-centra/prikaz-godisnjih-statistika-info-centra.component';
import { PrikazGodisnjihStatistikaInfoCentraGradjaninComponent } from './prikaz-godisnjih-statistika-info-centra-gradjanin/prikaz-godisnjih-statistika-info-centra-gradjanin.component';
import { PrikazIstorijePromenaPodatakaONekomZemljistuComponent } from './prikaz-istorije-promena-podataka-o-nekom-zemljistu/prikaz-istorije-promena-podataka-o-nekom-zemljistu.component';
import { HttpClientModule } from '@angular/common/http';
import { PretragaBazePodatakaKatastraNepokretnostiComponent } from './pretraga-baze-podataka-katastra-nepokretnosti/pretraga-baze-podataka-katastra-nepokretnosti.component';
import { PretragaBazePodatakaKatastraNepokretnostiGradjaninComponent } from './pretraga-baze-podataka-katastra-nepokretnosti-gradjanin/pretraga-baze-podataka-katastra-nepokretnosti-gradjanin.component';
import { NotarProfileComponent } from './notar-profile/notar-profile.component';
import { PrikazUgovoraNotarComponent } from './prikaz-ugovora-notar/prikaz-ugovora-notar.component';
import { PrikazTerminaNotarComponent } from './prikaz-termina-notar/prikaz-termina-notar.component';
import { MaticarProfileComponent } from './maticar-profile/maticar-profile.component';
import { PregledMaticneKnjigeRodjenihComponent } from './pregled-maticne-knjige-rodjenih/pregled-maticne-knjige-rodjenih.component';
import { DodavanjeNoveNepokretnostiComponent } from './dodavanje-nove-nepokretnosti/dodavanje-nove-nepokretnosti.component';
import { DodavanjeIstorijePromenaComponent } from './dodavanje-istorije-promena/dodavanje-istorije-promena.component';
import { AzuriranjePodatakaONepokretnostiComponent } from './azuriranje-podataka-o-nepokretnosti/azuriranje-podataka-o-nepokretnosti.component';
import { PregledMaticneKnjigeVencanihComponent } from './pregled-maticne-knjige-vencanih/pregled-maticne-knjige-vencanih.component';
import { PregledMaticneKnjigeUmrlihComponent } from './pregled-maticne-knjige-umrlih/pregled-maticne-knjige-umrlih.component';
import { PrikazTerminaGradjaninComponent } from './prikaz-termina-gradjanin/prikaz-termina-gradjanin.component';
import { RezervacijaTerminaGradjaninComponent } from './rezervacija-termina-gradjanin/rezervacija-termina-gradjanin.component';
import { DodavanjeUgovoraNotarComponent } from './dodavanje-ugovora-notar/dodavanje-ugovora-notar.component';
import { PretragaBazePodatakaKatastraNepokretnostiNotarComponent } from './pretraga-baze-podataka-katastra-nepokretnosti-notar/pretraga-baze-podataka-katastra-nepokretnosti-notar.component';
import { PrikazMaticneKnjigeRodjenihNotarComponent } from './prikaz-maticne-knjige-rodjenih-notar/prikaz-maticne-knjige-rodjenih-notar.component';
import { PrikazMaticneKnjigeVencanihNotarComponent } from './prikaz-maticne-knjige-vencanih-notar/prikaz-maticne-knjige-vencanih-notar.component';
import { PrikazMaticneKnjigeUmrlihNotarComponent } from './prikaz-maticne-knjige-umrlih-notar/prikaz-maticne-knjige-umrlih-notar.component';
import { ProveraGradjaninaNotarComponent } from './provera-gradjanina-notar/provera-gradjanina-notar.component';
import { PotvrdjivanjeUgovoraNotarComponent } from './potvrdjivanje-ugovora-notar/potvrdjivanje-ugovora-notar.component';
import { SlanjePodatakaUKatastarComponent } from './slanje-podataka-u-katastar/slanje-podataka-u-katastar.component';
import { PorukaKatastruComponent } from './poruka-katastru/poruka-katastru.component';
import { PorukaNotaruComponent } from './poruka-notaru/poruka-notaru.component';
import { DodavanjePorukeKatastruComponent } from './dodavanje-poruke-katastru/dodavanje-poruke-katastru.component';
import { DodavanjePorukeNotaruComponent } from './dodavanje-poruke-notaru/dodavanje-poruke-notaru.component';
import { DodavanjeTerminaNotarComponent } from './dodavanje-termina-notar/dodavanje-termina-notar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    LoginComponent,
    KatastarHomeComponent,
    GradjaninHomeComponent,
    KatastarNewsComponent,
    KatastarProfileComponent,
    KatastarLogoutComponent,
    NewsOneComponent,
    NewsTwoComponent,
    NewsThreeComponent,
    NewsFourComponent,
    NewsFiveComponent,
    NewsSixComponent,
    NotFoundComponent,
    GradjaninProfileComponent,
    GradjaninMaticarComponent,
    GradjaninNotarComponent,
    GradjaninKatastarComponent,
    MaticarHomeComponent,
    NotarHomeComponent,
    PronalazenjeBrojaParceleComponent,
    NewsOneGradjaninComponent,
    NewsTwoGradjaninComponent,
    NewsThreeGradjaninComponent,
    NewsFourGradjaninComponent,
    NewsFiveGradjaninComponent,
    NewsSixGradjaninComponent,
    PronalazenjeBrojaParceleGradjaninComponent,
    PrikazGodisnjihStatistikaKatastraComponent,
    OrderByPipe,
    PrikazGodisnjihStatistikaKatastraGradjaninComponent,
    PrikazGodisnjihStatistikaInfoCentraComponent,
    PrikazGodisnjihStatistikaInfoCentraGradjaninComponent,
    PrikazIstorijePromenaPodatakaONekomZemljistuComponent,
    PretragaBazePodatakaKatastraNepokretnostiComponent,
    PretragaBazePodatakaKatastraNepokretnostiGradjaninComponent,
    NotarProfileComponent,
    PrikazUgovoraNotarComponent,
    PrikazTerminaNotarComponent,
    MaticarProfileComponent,
    PregledMaticneKnjigeRodjenihComponent,
    DodavanjeNoveNepokretnostiComponent,
    DodavanjeIstorijePromenaComponent,
    AzuriranjePodatakaONepokretnostiComponent,
    PregledMaticneKnjigeVencanihComponent,
    PregledMaticneKnjigeUmrlihComponent,
    PrikazTerminaGradjaninComponent,
    RezervacijaTerminaGradjaninComponent,
    DodavanjeUgovoraNotarComponent,
    PretragaBazePodatakaKatastraNepokretnostiNotarComponent,
    PrikazMaticneKnjigeRodjenihNotarComponent,
    PrikazMaticneKnjigeVencanihNotarComponent,
    PrikazMaticneKnjigeUmrlihNotarComponent,
    ProveraGradjaninaNotarComponent,
    PotvrdjivanjeUgovoraNotarComponent,
    SlanjePodatakaUKatastarComponent,
    PorukaKatastruComponent,
    PorukaNotaruComponent,
    DodavanjePorukeKatastruComponent,
    DodavanjePorukeNotaruComponent,
    DodavanjeTerminaNotarComponent,
    // FormsModule,
    // CommonModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatInputModule, 
    MatDialogModule, 
    MatButtonModule, 
    MatButtonToggleModule, 
    BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  MatSelectModule,
  MatFormFieldModule,
    RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
    BrowserAnimationsModule,

    // ToastrModule.forRoot({
    //   positionClass :'toast-bottom-right'
    // })
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
