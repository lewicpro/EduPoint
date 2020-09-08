import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProgramsComponent } from './programs/programs.component';
import { NgProgressModule } from 'ngx-progressbar';
import { DownloadsComponent } from './downloads/downloads.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import {MatButtonModule, MatCheckboxModule,
  MatInputModule,
   MatCardModule,
   MatGridListModule,
   MatFormFieldModule,
   MatTabsModule,
   MatIconModule,
   MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    MatProgressBarModule,
    MatRadioModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule,


} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';


import {AuthGuard} from './auth/auth.guard';
import { FooterComponent } from './footer/footer.component';
import { MajorsComponent } from './majors/majors.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { ImagesComponent } from './images/images.component';
import { ApplicationComponent } from './application/application.component';
import { VisaComponent } from './visa/visa.component';
import { AirportComponent } from './airport/airport.component';
import { TicketComponent } from './ticket/ticket.component';
import { ApproachComponent } from './approach/approach.component';
import { AboutComponent } from './about/about.component';
import { WhyComponent } from './why/why.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FaqComponent } from './faq/faq.component';
import { UserService } from './shared/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplyComponent } from './apply/apply.component';
import { AvailableComponent } from './available/available.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { InfoComponent } from './info/info.component';
import { EmailComponent } from './email/email.component';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceComponent } from './service/service.component';
import { ZhejiangComponent } from './zhejiang/zhejiang.component';
import { NanjingComponent } from './nanjing/nanjing.component';
import { ZhejiangtechComponent } from './zhejiangtech/zhejiangtech.component';
import { HohaiComponent } from './hohai/hohai.component';
import { NottighamComponent } from './nottigham/nottigham.component';
import { FeedComponent } from './feed/feed.component';
import { PartnerDashboardComponent } from './partner-dashboard/partner-dashboard.component';
import { PartnerStudentsComponent } from './partner-students/partner-students.component';
import { PartnerScholarshipComponent } from './partner-scholarship/partner-scholarship.component';



@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavigationComponent,
    ProgramsComponent,
    DownloadsComponent,
    HomeComponent,
    OtherComponent,
    LoginComponent,
    FooterComponent,
    MajorsComponent,
    RequirementsComponent,
    ImagesComponent,
    ApplicationComponent,
    VisaComponent,
    AirportComponent,
    TicketComponent,
    ApproachComponent,
    AboutComponent,
    WhyComponent,
    ContactComponent,
    EventsComponent,
    AboutusComponent,
    FaqComponent,
    DashboardComponent,
    ApplyComponent,
    AvailableComponent,
    ScholarshipComponent,
    InfoComponent,
    EmailComponent,
    HomeDashComponent,
    UploadComponent,
    ServiceComponent,
    ZhejiangComponent,
    NanjingComponent,
    ZhejiangtechComponent,
    HohaiComponent,
    NottighamComponent,
    FeedComponent,
    PartnerDashboardComponent,
    PartnerStudentsComponent,
    PartnerScholarshipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
      ScrollDispatchModule,
      MatSnackBarModule,
      NgProgressModule,
      HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSelectModule,
    MatStepperModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    MatTabsModule,
    MatPaginatorModule,
      ScrollDispatchModule,
    MatListModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'Programs',
        component: ProgramsComponent
    },
    {
      path: 'Programs',
      component: ProgramsComponent, children: [
        { path: 'majors', component: MajorsComponent},
        { path: 'Requirements', component: RequirementsComponent},
        { path: 'Application', component: ApplicationComponent},
        { path: 'Images', component: ImagesComponent},
        { path: 'Images/Nanjing', component: NanjingComponent},
        { path: 'Images/Zhejiang', component: ZhejiangComponent},
        { path: 'Images/Zhejiangtech', component: ZhejiangtechComponent},
        { path: 'Images/Hohai', component: HohaiComponent},
        { path: 'Images/Nottigham', component: NottighamComponent},
        // { path: 'Images/:Nanjing', component: NanjingComponent},

      ]
    },
    {
      path: '',
      component: HomeComponent
    },

    {
      path: 'why',
      component: WhyComponent
    },
    {
      path: 'About',
      component: AboutComponent, children: [
        { path: 'Us', component: AboutusComponent},
        { path: 'Contact', component: ContactComponent},
        { path: 'Events', component: EventsComponent},
        { path: 'FAQ', component: FaqComponent}

      ]
    },
    {
      path: 'Other-Services',
      component: OtherComponent, children: [
        { path: 'visa', component: VisaComponent},
        { path: 'Pickup', component: AirportComponent},
        { path: 'ticket', component: TicketComponent},
        { path: 'Downloads', component: ApproachComponent}

      ]
    },
    {
      path: 'Login',
      component: LoginComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent, canActivate: [AuthGuard], children: [
        { path: 'dashHome', component: HomeDashComponent},
        { path: 'available', component: AvailableComponent},
        { path: 'Upload', component: UploadComponent},
        { path: 'Email', component: EmailComponent},
        { path: 'Scholarship', component: ScholarshipComponent},
        { path: 'Visa', component: VisaComponent},
        { path: 'services', component: ServiceComponent},
        { path: 'Info', component: InfoComponent},
        { path: 'Apply', component: ApplyComponent}


      ]
    },
    {
      path: 'Partner',
      component: PartnerDashboardComponent, canActivate: [AuthGuard],  children: [
        { path: 'Partnera', component: PartnerDashboardComponent},
        { path: 'Partner-lists', component: PartnerStudentsComponent},
        { path: 'Partner-apply', component: ApplyComponent},
        { path: 'Partner-scholarship', component: ScholarshipComponent},
        { path: 'Partner-services', component: ServiceComponent},
        { path: 'Partner-Email', component: EmailComponent},


      ]
    },
    {path: '**', redirectTo: 'Login', pathMatch: 'full'},
    ])
  ],
  providers: [
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
