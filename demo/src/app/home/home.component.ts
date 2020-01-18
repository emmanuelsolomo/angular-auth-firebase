import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthProvider, Theme} from 'ngx-auth-firebaseui';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatTabChangeEvent} from '@angular/material/tabs';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'app';
  error: boolean;
  userComponent = `<ngx-auth-firebaseui-user></ngx-auth-firebaseui-user>`;
  registerComponent = `<ngx-auth-firebaseui-register></ngx-auth-firebaseui-register>`;
  loginComponent = `<ngx-auth-firebaseui-login></ngx-auth-firebaseui-login>`;
  element = `<ngx-auth-firebaseui></ngx-auth-firebaseui>`;
  providersRow = `<ngx-auth-firebaseui-providers></ngx-auth-firebaseui-providers>`;
  providersColumn = `<ngx-auth-firebaseui-providers layout="column"></ngx-auth-firebaseui-providers>`;
  providersThemes = `
              <ngx-auth-firebaseui-providers [theme]="themes.CLASSIC"></ngx-auth-firebaseui-providers>
              <ngx-auth-firebaseui-providers [theme]="themes.STROKED"></ngx-auth-firebaseui-providers>
              <ngx-auth-firebaseui-providers [theme]="themes.RAISED"></ngx-auth-firebaseui-providers>
              <ngx-auth-firebaseui-providers [theme]="themes.FAB"></ngx-auth-firebaseui-providers>
              <ngx-auth-firebaseui-providers [theme]="themes.MINI_FAB"></ngx-auth-firebaseui-providers>`;
  code = `
  import {Component} from '@angular/core';

  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
  export class AppComponent {

   printUser(event) {
     console.log(event);
   }

   printError(event) {
    console.error(event);
   }
  }`;

  appComponentTS = `
  import {Component} from '@angular/core';
  import {AuthProvider, Theme} from 'ngx-auth-firebaseui';

  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
  export class AppComponent {

  themes = Theme;
  }`;

  html = `<ngx-auth-firebaseui
             (onSuccess)="printUser($event)"
             (onError)="printError($event)">
        </ngx-auth-firebaseui>`;

  viewSourceOfNgxAuthFirebaseuiComponent: boolean;
  viewSourceOfNgxAuthFirebaseuiLoginComponent: boolean;
  viewSourceOfNgxAuthFirebaseuiRegisterComponent: boolean;
  viewSourceOfTheUserComponent: boolean;
  viewSourceOfTheProvidersComponentRow: boolean;
  viewSourceOfTheProvidersComponentColumn: boolean;
  viewSourceOfTheProvidersComponentThemes: boolean;

  snackbarSubscription: Subscription;

  public index: number;
  private _color: string;

  providers = [AuthProvider.Facebook];
  themes = Theme;

  constructor(private titleService: Title,
              public auth: AngularFireAuth,
              public router: Router,
              public snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-auth-firebaseui');
  }

  get color(): string {
    return this.error ? 'warn' : 'primary';
  }

  printUser(event) {
    console.log('onSuccess event ->', event);
    this.error = false;
    this.index = 2;
  }

  printError(event) {
    console.error('onError event --> ', event);
    this.error = true;

    // this.snackbar.open(event.message, 'OK', {duration: 5000});
  }

  onTabChange(event: MatTabChangeEvent) {
    console.log('on tab change: ', event);
  }

  showMessage() {
    console.log('on show message');
    const snackbarReference = this.snackbar.open('onConfirmActionButtonClicked\'s event has been emitted', 'See more examples', {
      duration: 3000
    });

    this.snackbarSubscription = snackbarReference
      .onAction().subscribe(() => this.router.navigate(['/examples']));
  }

  ngOnDestroy(): void {
    if (this.snackbarSubscription) {
      this.snackbarSubscription.unsubscribe();
    }
  }

  onSignOut() {
    console.log('Sign-out successful!');
  }

  onAccountDeleted() {
    console.log('Account Delete successful!');
  }

  createAccount() {
    console.log('create account has beeen requested');
  }
}
