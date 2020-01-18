import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, EventEmitter, Inject, forwardRef, Component, ViewEncapsulation, PLATFORM_ID, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, InjectionToken, NgModule } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FirebaseOptionsToken, FirebaseNameOrConfigToken } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar as MatSnackBar$1, MAT_SNACK_BAR_DEFAULT_OPTIONS as MAT_SNACK_BAR_DEFAULT_OPTIONS$1, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPasswordStrengthComponent, MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { MatSnackBar, MatSnackBarConfig, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatTabGroup } from '@angular/material';
import { firebase } from '@firebase/app';
import '@firebase/auth';
import { isFunction } from 'lodash';
import { tap, map } from 'rxjs/operators';
import { animation, style, animate, trigger, transition, useAnimation, state, query, stagger, animateChild } from '@angular/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const Accounts = {
    NONE: 'account',
    CHECK: 'account-check',
    EDIT: 'account-edit',
    OFF: 'account-off',
    REMOVE: 'account-remove',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const collections = {
    users: 'users',
};
class FirestoreSyncService {
    /**
     * @param {?} afs
     */
    constructor(afs) {
        this.afs = afs;
        // this.afs.firestore.settings({timestampsInSnapshots: true});
    }
    // get timestamp() {
    //     return firebase.firestore.FieldValue.serverTimestamp();
    // }
    /**
     * @param {?} uid
     * @return {?}
     */
    getUserDocRefByUID(uid) {
        return this.afs.doc(`${collections.users}/${uid}`);
    }
    /**
     * @param {?} uid
     * @return {?}
     */
    deleteUserData(uid) {
        /** @type {?} */
        const userRef = this.getUserDocRefByUID(uid);
        return userRef.delete();
    }
    /**
     * @param {?} user
     * @return {?}
     */
    updateUserData(user) {
        // Sets user$ data to firestore on login
        /** @type {?} */
        const userRef = this.getUserDocRefByUID(user.uid);
        /** @type {?} */
        const data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
            providerId: user.providerId
        };
        return userRef.set(data, { merge: true });
    }
}
FirestoreSyncService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
FirestoreSyncService.ctorParameters = () => [
    { type: AngularFirestore }
];
/** @nocollapse */ FirestoreSyncService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FirestoreSyncService_Factory() { return new FirestoreSyncService(ɵɵinject(AngularFirestore)); }, token: FirestoreSyncService, providedIn: "root" });

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @type {?} */
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
/** @type {?} */
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
/** @type {?} */
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
/** @type {?} */
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
/** @type {?} */
const microsoftAuthProvider = new firebase.auth.OAuthProvider('microsoft.com');
/** @type {?} */
const yahooAuthProvider = new firebase.auth.OAuthProvider('yahoo.com');
/** @enum {string} */
const AuthProvider = {
    ALL: 'all',
    ANONYMOUS: 'anonymous',
    EmailAndPassword: 'firebase',
    Google: 'google',
    Facebook: 'facebook',
    Twitter: 'twitter',
    Github: 'github',
    Microsoft: 'microsoft',
    Yahoo: 'yahoo',
    PhoneNumber: 'phoneNumber',
};
class AuthProcessService {
    /**
     * @param {?} afa
     * @param {?} config
     * @param {?} _snackBar
     * @param {?} _fireStoreService
     * @param {?} _matSnackBarConfig
     * @param {?} router
     */
    constructor(afa, config, _snackBar, _fireStoreService, _matSnackBarConfig, router) {
        this.afa = afa;
        this.config = config;
        this._snackBar = _snackBar;
        this._fireStoreService = _fireStoreService;
        this._matSnackBarConfig = _matSnackBarConfig;
        this.router = router;
        this.onSuccessEmitter = new EventEmitter();
        this.onErrorEmitter = new EventEmitter();
        

    }
    /**
     * @return {?}
     */
    listenToUserEvents() {
        this.user$ = this.afa.user.pipe(tap((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            this.user = user;
        })));
    }
    /**
     * Reset the password of the ngx-auth-firebaseui-user via email
     *
     * @param {?} email - the email to reset
     * @return {?}
     */
    resetPassword(email) {
        return this.afa.auth.sendPasswordResetEmail(email)
            .then((/**
         * @return {?}
         */
        () => console.log('Password reset email sent')))
            .catch((/**
         * @param {?} error
         * @return {?}
         */
        (error) => this.notifyError(error)));
    }
    /**
     * General sign in mechanism to authenticate the users with a firebase project
     * using a traditional way, via username and password or by using an authentication provider
     * like google, facebook, twitter and github
     *
     * @param {?} provider - the provider to authenticate with (google, facebook, twitter, github)
     * @param {?=} credentials
     * @return {?}
     */
    signInWith(provider, credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let signInResult;
                switch (provider) {
                    case AuthProvider.ANONYMOUS:
                        signInResult = (/** @type {?} */ (yield this.afa.auth.signInAnonymously()));
                        break;
                    case AuthProvider.EmailAndPassword:
                        signInResult = (/** @type {?} */ (yield this.afa.auth.signInWithEmailAndPassword(credentials.email, credentials.password)));
                        break;
                    case AuthProvider.Google:
                        signInResult = (/** @type {?} */ (yield this.afa.auth.signInWithPopup(googleAuthProvider)));
                        break;
                    case AuthProvider.Facebook:
                        signInResult = (/** @type {?} */ (yield this.afa.auth.signInWithPopup(facebookAuthProvider)));
                        break;
                    case AuthProvider.Twitter:
                        signInResult = (/** @type {?} */ (yield this.afa.auth.signInWithPopup(twitterAuthProvider)));
                        break;
                    case AuthProvider.Github:
                        signInResult = (/** @type {?} */ (yield this.afa.auth.signInWithPopup(githubAuthProvider)));
                        break;
                    case AuthProvider.Microsoft:
                        signInResult = (/** @type {?} */ (yield this.afa.auth.signInWithPopup(microsoftAuthProvider)));
                        break;
                    case AuthProvider.Yahoo:
                        signInResult = (/** @type {?} */ (yield this.afa.auth.signInWithPopup(yahooAuthProvider)));
                        break;
                    case AuthProvider.PhoneNumber:
                        // coming soon - see feature/sms branch
                        break;
                    default:
                        throw new Error(`${AuthProvider[provider]} is not available as auth provider`);
                }
                yield this.handleSuccess(signInResult);
            }
            catch (err) {
                this.handleError(err);
            }
        });
    }
    /**
     * Sign up new users via email and password.
     * After that the ngx-auth-firebaseui-user should verify and confirm an email sent via the firebase
     *
     * @param {?} displayName - the displayName if the new ngx-auth-firebaseui-user
     * @param {?} credentials
     * @return {?}
     */
    signUp(displayName, credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const userCredential = yield this.afa.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
                /** @type {?} */
                const user = userCredential.user;
                yield this.updateProfile(displayName, user.photoURL);
                if (this.config.enableFirestoreSync) {
                    yield this._fireStoreService
                        .getUserDocRefByUID(user.uid)
                        .set((/** @type {?} */ ({
                        uid: user.uid,
                        displayName: displayName,
                        email: user.email,
                        photoURL: user.photoURL
                    })));
                }
                yield user.sendEmailVerification();
                // Legacy fields
                this.emailConfirmationSent = true;
                this.emailToConfirm = credentials.email;
                yield this.handleSuccess(userCredential);
            }
            catch (err) {
                this.handleError(err);
            }
        });
    }
    /**
     * @return {?}
     */
    sendNewVerificationEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.user) {
                return Promise.reject(new Error('No signed in user'));
            }
            return this.user.sendEmailVerification();
        });
    }
    /**
     * @return {?}
     */
    signOut() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.afa.auth.signOut();
            }
            catch (error) {
                this.notifyError(error);
            }
        });
    }
    /**
     * Update the profile (name + photo url) of the authenticated ngx-auth-firebaseui-user in the
     * firebase authentication feature (not in firestore)
     *
     * @param {?} name - the new name of the authenticated ngx-auth-firebaseui-user
     * @param {?} photoURL - the new photo url of the authenticated ngx-auth-firebaseui-user
     * @return {?}
     */
    updateProfile(name, photoURL) {
        return this.afa.auth.currentUser.updateProfile({ displayName: name, photoURL: photoURL });
    }
    /**
     * @return {?}
     */
    deleteAccount() {
        return this.afa.auth.currentUser.delete();
    }
    /**
     * @param {?} user
     * @return {?}
     */
    parseUserInfo(user) {
        return {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            providerId: user.providerData.length > 0 ? user.providerData[0].providerId : null
        };
    }
    /**
     * @return {?}
     */
    getUserPhotoUrl() {
        /** @type {?} */
        const user = this.afa.auth.currentUser;
        if (!user) {
            return;
        }
        else if (user.photoURL) {
            return user.photoURL;
        }
        else if (user.emailVerified) {
            return this.getPhotoPath(Accounts.CHECK);
        }
        else if (user.isAnonymous) {
            return this.getPhotoPath(Accounts.OFF);
        }
        else {
            return this.getPhotoPath(Accounts.NONE);
        }
    }
    /**
     * @param {?} image
     * @return {?}
     */
    getPhotoPath(image) {
        return `assets/user/${image}.svg`;
    }
    /**
     * @return {?}
     */
    signInWithPhoneNumber() {
        // todo: 3.1.18
    }
    /**
     * @param {?} userCredential
     * @return {?}
     */
    handleSuccess(userCredential) {
        return __awaiter(this, void 0, void 0, function* () {
            this.onSuccessEmitter.next(userCredential.user);
            if (this.config.enableFirestoreSync) {
                try {
                    console.log(this.parseUserInfo(userCredential.user));
                    yield this._fireStoreService.updateUserData(this.parseUserInfo(userCredential.user));
                }
                catch (e) {
                    console.error(`Error occurred while updating user data with firestore: ${e}`);
                }
            }
            if (this.config.toastMessageOnAuthSuccess) {
                /** @type {?} */
                const fallbackMessage = `Hello ${userCredential.user.displayName ? userCredential.user.displayName : ''}!`;
                this.showToast(this.messageOnAuthSuccess || fallbackMessage);
                console.log("Success In loggin in");
                console.log(this.afa.auth.currentUser.uid);
                console.log(this.router);
                this.router.navigate(['dashboard']);
            }
        });
    }
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        this.notifyError(error);
        console.error(error);
    }
    // Refresh user info. Can be useful for instance to get latest status regarding email verification.
    /**
     * @return {?}
     */
    reloadUserInfo() {
        return this.user.reload();
    }
    // Search for an error message.
    // Consumers of this library are given the possibility to provide a function in case they want to instrument message based on error properties.
    /**
     * @param {?} error
     * @return {?}
     */
    getMessageOnAuthError(error) {
        /** @type {?} */
        let message;
        /** @type {?} */
        const fallbackMessage = 'Sorry, something went wrong. Please retry later.';
        if (isFunction(this.messageOnAuthError)) {
            message = this.messageOnAuthError(error);
        }
        else {
            message = this.messageOnAuthError || fallbackMessage;
        }
        return message;
    }
    // Show a toast using current snackbar config. If message is empty, no toast is displayed allowing to opt-out when needed.
    // Default MatSnackBarConfig has no duration, meaning it stays visible forever.
    // If that's the case, an action button is added to allow the end-user to dismiss the toast.
    /**
     * @param {?} message
     * @return {?}
     */
    showToast(message) {
        if (message) {
            this._snackBar.open(message, this._matSnackBarConfig.duration ? null : 'OK');
        }
    }
    /**
     * @param {?} error
     * @return {?}
     */
    showErrorToast(error) {
        if (this.config.toastMessageOnAuthError) {
            this.showToast(this.getMessageOnAuthError(error));
        }
    }
    /**
     * @param {?} error
     * @return {?}
     */
    notifyError(error) {
        this.onErrorEmitter.emit(error);
        this.showErrorToast(error);
    }
}
AuthProcessService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
AuthProcessService.ctorParameters = () => [
    { type: AngularFireAuth },
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
        * @return {?}
        */
       () => NgxAuthFirebaseUIConfigToken)),] }] },
    { type: MatSnackBar },
    { type: FirestoreSyncService },
    { type: MatSnackBarConfig, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DEFAULT_OPTIONS,] }] },
    { type: Router },
];
/** @nocollapse */ AuthProcessService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthProcessService_Factory() { return new AuthProcessService(ɵɵinject(AngularFireAuth), ɵɵinject(NgxAuthFirebaseUIConfigToken), ɵɵinject(MatSnackBar$1), ɵɵinject(FirestoreSyncService), ɵɵinject(MAT_SNACK_BAR_DEFAULT_OPTIONS$1), ɵɵinject(Router) ); }, token: AuthProcessService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const customAnimation = animation([
    style({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
/** @type {?} */
const NgxAuthFirebaseuiAnimations = [
    trigger('animate', [transition('void => *', [useAnimation(customAnimation)])]),
    trigger('animateStagger', [
        state('50', style('*')),
        state('100', style('*')),
        state('200', style('*')),
        transition('void => 50', query('@*', [stagger('50ms', [animateChild()])], { optional: true })),
        transition('void => 100', query('@*', [stagger('100ms', [animateChild()])], { optional: true })),
        transition('void => 200', query('@*', [stagger('200ms', [animateChild()])], { optional: true }))
    ]),
];

var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class NgxAuthFirebaseuiLoginComponent {
    /**
     * @param {?} platformId
     * @param {?} authProcess
     * @param {?} _formBuilder
     * @param {?} _router
     * @param {?} _afa
     */
    constructor(platformId, authProcess, _formBuilder, _router, _afa) {
        this.platformId = platformId;
        this.authProcess = authProcess;
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._afa = _afa;
        this.providers = AuthProvider.ALL; //  google, facebook, twitter, github as array or all as one single string
        this.registrationEnabled = false;
        this.resetPasswordEnabled = false;
        // i18n
        this.titleText = 'LOGIN TO YOUR ACCOUNT';
        this.rememberMeText = 'Remember Me';
        this.loginButtonText = 'LOGIN';
        this.orLabelText = 'OR';
        this.forgotPasswordText = 'Forgot Password?';
        this.dontHaveAnAccountText = 'Don\'t have an account?';
        this.createAccountButtonText = 'Create an account';
        // i18n email
        this.emailText = 'Email';
        this.emailErrorRequiredText = 'Email is required';
        this.emailErrorPatternText = 'Please enter a valid email address';
        // i18n password
        this.passwordText = 'Password';
        this.passwordErrorRequiredText = 'Password is required';
        this.onCreateAccountRequested = new EventEmitter();
        this.onResetPasswordRequested = new EventEmitter();
        this.authProviders = AuthProvider;
        this.authenticationError = false;
        this.onSuccess = authProcess.onSuccessEmitter;
        this.onError = authProcess.onErrorEmitter;
    }
    /**
     * @return {?}
     */
    get color() {
        return this.authenticationError ? 'warn' : 'primary';
    }
    /**
     * @return {?}
     */
    get colorAccent() {
        return this.authenticationError ? 'warn' : 'accent';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //console.log(this._afa.auth.currentUser);
        if (isPlatformBrowser(this.platformId)) {
            this.onErrorSubscription = this.onError.subscribe((/**
             * @return {?}
             */
            () => this.authenticationError = true));
        }
        this.updateAuthSnackbarMessages();
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
    /**
     * @return {?}
     */
    updateAuthSnackbarMessages() {
        this.authProcess.messageOnAuthSuccess = this.messageOnAuthSuccess;
        this.authProcess.messageOnAuthError = this.messageOnAuthError;
    }
    /**
     * @return {?}
     */
    login() {
        return __awaiter$1(this, void 0, void 0, function* () {
            return yield this.authProcess.signInWith(this.authProviders.EmailAndPassword, {
                email: this.loginForm.get('email').value,
                password: this.loginForm.get('password').value
            });
        });
    }
}
NgxAuthFirebaseuiLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-auth-firebaseui-login',
                template: `
    <div id="login" fxLayout="column">

      <div id="login-form-wrapper" fxLayout="column" fxLayoutAlign="center center">

        <div id="login-form" [@animateStagger]="{ value: '50' }">

          <div *ngIf="logoUrl" class="logo">
            <img [src]="logoUrl" alt="logo" [@animate]="{ value: '*', params: { x: '50px' } }">
          </div>

          <ngx-auth-firebaseui-providers layout="column"
                                         fxLayoutAlign="center center"
                                         theme="raised"
                                         [providers]="providers"></ngx-auth-firebaseui-providers>

          <div *ngIf="registrationEnabled"
               [@animateStagger]="{ value: '100' }"
               class="register"
               fxLayout="column" fxLayoutAlign="center center">
            <span class="text" [@animate]="{ value: '*', params: { x: '100px' } }">
              {{dontHaveAnAccountText}}
            </span>
            <button [@animate]="{ value: '*', params: { x: '-100px' } }"
                    mat-button
                    id="createAccountButton"
                    [color]="color"
                    type="button"
                    (click)="onCreateAccountRequested.emit()">{{createAccountButtonText}}</button>
          </div>
        </div>
      </div>
    </div>
  `,
                styles: [`
    ngx-auth-firebaseui-login #login-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper{padding:16px}}ngx-auth-firebaseui-login #login-form-wrapper #login-form{width:384px;max-width:384px;padding:32px;text-align:center}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form{padding:24px;width:100%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .logo{width:150px;height:150px;margin:32px auto}ngx-auth-firebaseui-login #login-form-wrapper #login-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form{width:100%;text-align:left}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-form-field{width:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-checkbox{margin:0}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password{font-size:13px;margin-top:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .remember-me{margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password{font-size:13px;font-weight:500;margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{width:220px;margin:16px auto;display:block}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{width:90%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register{margin:32px auto 24px;font-weight:500}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register .text{margin-right:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator{font-size:15px;font-weight:600;margin:24px auto;position:relative;overflow:hidden;width:100px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text{display:inline-flex;position:relative;padding:0 8px;z-index:9999}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after,ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before{content:"";display:block;width:30px;position:absolute;top:10px;border-top:1px solid}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before{right:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after{left:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form button.facebook-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.github-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.google-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.microsoft-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.twitter-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.yahoo-raised{width:192px;text-transform:none;color:#fff;font-size:13px;margin-bottom:8px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form button{width:80%}}
  `],
                encapsulation: ViewEncapsulation.None,
                animations: NgxAuthFirebaseuiAnimations
            },] },
];
/** @nocollapse */
NgxAuthFirebaseuiLoginComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: AuthProcessService },
    { type: FormBuilder },
    { type: Router },
    { type: AngularFireAuth },
];
NgxAuthFirebaseuiLoginComponent.propDecorators = {
    logoUrl: [{ type: Input }],
    providers: [{ type: Input }],
    appearance: [{ type: Input }],
    registrationEnabled: [{ type: Input }],
    resetPasswordEnabled: [{ type: Input }],
    messageOnAuthSuccess: [{ type: Input }],
    messageOnAuthError: [{ type: Input }],
    titleText: [{ type: Input }],
    rememberMeText: [{ type: Input }],
    loginButtonText: [{ type: Input }],
    orLabelText: [{ type: Input }],
    forgotPasswordText: [{ type: Input }],
    dontHaveAnAccountText: [{ type: Input }],
    createAccountButtonText: [{ type: Input }],
    emailText: [{ type: Input }],
    emailErrorRequiredText: [{ type: Input }],
    emailErrorPatternText: [{ type: Input }],
    passwordText: [{ type: Input }],
    passwordErrorRequiredText: [{ type: Input }],
    onSuccess: [{ type: Output }],
    onError: [{ type: Output }],
    onCreateAccountRequested: [{ type: Output }],
    onResetPasswordRequested: [{ type: Output }]
};

var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @type {?} */
const confirmPasswordValidator = (/**
 * @param {?} control
 * @return {?}
 */
(control) => {
    if (!control.parent || !control) {
        return null;
    }
    /** @type {?} */
    const password = control.parent.get('password');
    /** @type {?} */
    const passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return null;
    }
    if (passwordConfirm.value === '') {
        return null;
    }
    if (password.value === passwordConfirm.value) {
        return null;
    }
    return { passwordsNotMatching: true };
});
class NgxAuthFirebaseuiRegisterComponent {
    /**
     * @param {?} platformId
     * @param {?} _formBuilder
     * @param {?} authProcess
     */
    constructor(platformId, _formBuilder, authProcess) {
        // Configure the layout
        this.platformId = platformId;
        this._formBuilder = _formBuilder;
        this.authProcess = authProcess;
        // i18n common
        this.titleText = 'CREATE AN ACCOUNT';
        this.readAncAcceptText = 'I read and accept';
        this.termsAndConditionsText = 'terms and conditions';
        this.createAccountButtonText = 'CREATE AN ACCOUNT';
        this.alreadyHaveAccountText = 'Already have an account?';
        this.loginButtonText = 'LOGIN';
        // i18n emnameail
        this.nameText = 'Name';
        this.nameErrorRequiredText = 'Name is required';
        // i18n email
        this.emailText = 'Email';
        this.emailErrorRequiredText = 'Email is required';
        this.emailErrorPatternText = 'Please enter a valid email address';
        // i18n password
        this.passwordText = 'Password';
        this.passwordErrorRequiredText = 'Password is required';
        this.passwordConfirmationText = 'Password Confirmation';
        this.passwordConfirmationErrorRequiredText = 'Password confirmation is required';
        this.passwordErrorMatchText = 'Password must match';
        this.onLoginRequested = new EventEmitter();
        this.authenticationError = false;
        // Set the private defaults
        this._unsubscribeAll = new Subject();
        this.onSuccess = authProcess.onSuccessEmitter;
        this.onError = authProcess.onErrorEmitter;
    }
    /**
     * @return {?}
     */
    get color() {
        return this.authenticationError ? 'warn' : 'primary';
    }
    /**
     * @return {?}
     */
    get colorAccent() {
        return this.authenticationError ? 'warn' : 'accent';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.onErrorSubscription = this.onError.subscribe((/**
             * @return {?}
             */
            () => this.authenticationError = true));
        }
        this.registerForm = this._formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
        });
        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.registerForm
            .get('password')
            .valueChanges.pipe(takeUntil(this._unsubscribeAll))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.registerForm.get('passwordConfirm').updateValueAndValidity();
        }));
    }
    /**
     * On destroy
     * @return {?}
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    /**
     * @return {?}
     */
    createAccount() {
        return __awaiter$2(this, void 0, void 0, function* () {
            return yield this.authProcess.signUp(this.registerForm.get('name').value, {
                email: this.registerForm.get('email').value,
                password: this.registerForm.get('password').value
            });
        });
    }
}
NgxAuthFirebaseuiRegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-auth-firebaseui-register',
                template: `
    <div id="register" fxLayout="column">

      <div id="register-form-wrapper" fxLayout="column" fxLayoutAlign="center center">

        <div id="register-form" [@animateStagger]="{ value: '50' }">

          <div *ngIf="logoUrl" class="logo">
            <img [src]="logoUrl" alt="logo" [@animate]="{ value: '*', params: { x: '50px' } }">
          </div>

          <div class="title" [@animate]="{ value: '*', params: { x: '-50px' } }">{{titleText}}</div>

          <form [formGroup]="registerForm" name="registerForm" novalidate
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}">

            <mat-form-field [appearance]="appearance" [@animate]="{ value: '*', params: { x: '50px' } }">
              <input formControlName="name" matInput [placeholder]="nameText"/>
              <mat-icon matSuffix [color]="color">person</mat-icon>
              <mat-error>
                {{nameErrorRequiredText}}
              </mat-error>
            </mat-form-field>

            <mat-form-field [appearance]="appearance" [@animate]="{ value: '*', params: { x: '50px' } }">
              <input formControlName="email" matInput [placeholder]="emailText"/>
              <mat-icon matSuffix [color]="color">email</mat-icon>
              <mat-error *ngIf="registerForm.get('email').hasError('required')">
                {{emailErrorRequiredText}}
              </mat-error>
              <mat-error *ngIf="registerForm.get('email').hasError('email')">
                {{emailErrorPatternText}}
              </mat-error>
            </mat-form-field>

            <mat-form-field [appearance]="appearance" [@animate]="{ value: '*', params: { x: '50px' } }">
              <input formControlName="password" matInput [placeholder]="passwordText" type="password"/>
              <mat-icon matSuffix [color]="color">lock</mat-icon>
              <mat-error>
                {{passwordErrorRequiredText}}
              </mat-error>
            </mat-form-field>

            <mat-form-field [appearance]="appearance" [@animate]="{ value: '*', params: { x: '50px' } }">
              <input formControlName="passwordConfirm" matInput [placeholder]="passwordConfirmationText" type="password"/>
              <mat-icon matSuffix [color]="color">lock</mat-icon>
              <mat-error *ngIf="registerForm.get('passwordConfirm').hasError('required')">
                {{passwordConfirmationErrorRequiredText}}
              </mat-error>
              <mat-error
                *ngIf="
                  !registerForm.get('passwordConfirm').hasError('required') &&
                  registerForm.get('passwordConfirm').hasError('passwordsNotMatching')
                ">
                {{passwordErrorMatchText}}
              </mat-error>
            </mat-form-field>

            <!--        <div *ngIf="this.tosUrl || this.privacyPolicyUrl"-->
            <!--        <div-->
            <!--          class="terms"-->
            <!--          fxLayout="row" fxLayoutAlign="center center"-->
            <!--          [@animate]="{value:'*',params:{duration:'250ms',y:'100px'}}">-->
            <!--          <mat-checkbox aria-label="I read and accept" name="terms" required>-->
            <!--            <span>{{readAncAcceptText}}</span>-->
            <!--            <span>&nbsp;</span>-->
            <!--            <a target="_blank"-->
            <!--               [href]="this.tosUrl">-->
            <!--              Terms of Service and Conditions-->
            <!--            </a>-->
            <!--          </mat-checkbox>-->
            <!--        </div>-->

            <button mat-raised-button
                    id="createAccountButton"
                    class="submit-button"
                    aria-label="CREATE AN ACCOUNT"
                    [color]="colorAccent"
                    [disabled]="registerForm.invalid"
                    (click)="createAccount()">
              {{createAccountButtonText}}
            </button>
          </form>

          <div class="register" fxLayout="column" fxLayoutAlign="center center"
               [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}">
            <span class="text" [@animate]="{ value: '*', params: { x: '100px' } }">
              {{alreadyHaveAccountText}}
            </span>
            <button mat-button
                    id="loginButton"
                    type="button"
                    [color]="colorAccent"
                    (click)="onLoginRequested.emit()"
                    [@animate]="{ value: '*', params: { x: '-100px' } }">
              {{loginButtonText}}
            </button>
          </div>

        </div>
      </div>
    </div>
  `,
                styles: [`
    ngx-auth-firebaseui-register #register{width:100%;background-size:cover}ngx-auth-firebaseui-register #register #register-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper{padding:16px}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{width:384px;max-width:384px;padding:32px;text-align:center}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{padding:24px;width:100%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .logo{width:128px;margin:32px auto}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form{width:100%;text-align:left}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-form-field{width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-checkbox{margin:0}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms{margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms a{font-size:16px;margin-left:4px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{width:220px;margin:16px auto;display:block}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{width:90%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register{margin:32px auto 24px;font-weight:500}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register .text{margin-right:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator{font-size:15px;font-weight:600;margin:24px auto;position:relative;overflow:hidden;width:100px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text{display:inline-flex;position:relative;padding:0 8px;z-index:9999}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before{content:"";display:block;width:30px;position:absolute;top:10px;border-top:1px solid}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before{right:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after{left:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google{width:192px;text-transform:none;color:#fff;font-size:13px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button{width:80%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google{background-color:#d73d32;margin-bottom:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook{background-color:#3f5c9a}ngx-auth-firebaseui-register ::ng-deep .mat-checkbox-label{display:flex;flex-wrap:wrap}
  `],
                encapsulation: ViewEncapsulation.None,
                animations: NgxAuthFirebaseuiAnimations
            },] },
];
/** @nocollapse */
NgxAuthFirebaseuiRegisterComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: FormBuilder },
    { type: AuthProcessService }
];
NgxAuthFirebaseuiRegisterComponent.propDecorators = {
    logoUrl: [{ type: Input }],
    appearance: [{ type: Input }],
    tosUrl: [{ type: Input }],
    privacyPolicyUrl: [{ type: Input }],
    titleText: [{ type: Input }],
    readAncAcceptText: [{ type: Input }],
    termsAndConditionsText: [{ type: Input }],
    createAccountButtonText: [{ type: Input }],
    alreadyHaveAccountText: [{ type: Input }],
    loginButtonText: [{ type: Input }],
    nameText: [{ type: Input }],
    nameErrorRequiredText: [{ type: Input }],
    emailText: [{ type: Input }],
    emailErrorRequiredText: [{ type: Input }],
    emailErrorPatternText: [{ type: Input }],
    passwordText: [{ type: Input }],
    passwordErrorRequiredText: [{ type: Input }],
    passwordConfirmationText: [{ type: Input }],
    passwordConfirmationErrorRequiredText: [{ type: Input }],
    passwordErrorMatchText: [{ type: Input }],
    onSuccess: [{ type: Output }],
    onError: [{ type: Output }],
    onLoginRequested: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LegalityDialogComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._disableConfirmActionButton = false;
    }
    /**
     * @return {?}
     */
    get disableConfirmActionButton() {
        if (this.data.tosUrl && this.data.privacyPolicyUrl) {
            this._disableConfirmActionButton = !(this.checkTOS && this.checkPrivacyPolicy);
        }
        else if (this.data.tosUrl && !this.data.privacyPolicyUrl) {
            this._disableConfirmActionButton = !this.checkTOS;
        }
        else if (!this.data.tosUrl && this.data.privacyPolicyUrl) {
            this._disableConfirmActionButton = !this.checkPrivacyPolicy;
        }
        return this._disableConfirmActionButton;
    }
    /**
     * @return {?}
     */
    closeDialog() {
        /** @type {?} */
        const result = {
            checked: !this.disableConfirmActionButton,
            authProvider: this.data.authProvider
        };
        this.dialogRef.close(result);
    }
}
LegalityDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-auth-firebaseui-legality-dialog',
                template: `
    <h1 matDialogTitle>Legal requirements</h1>

    <mat-dialog-content>
      <div fxLayout="column" fxLayoutAlign="start">
        <mat-checkbox *ngIf="this.data.tosUrl" [(ngModel)]="checkTOS">
          I agree to the
          <span>&nbsp;</span>
          <a target="_blank"
             [href]="this.data.tosUrl">
            Terms of Service and Conditions
          </a>
        </mat-checkbox>

        <mat-checkbox *ngIf="this.data.privacyPolicyUrl"
                      [(ngModel)]="checkPrivacyPolicy">
          I have read and agree to the
          <span>&nbsp;</span>
          <a target="_blank"
             [href]="this.data.privacyPolicyUrl">
            Privacy
          </a>
        </mat-checkbox>
      </div>
    </mat-dialog-content>

    <mat-dialog-actions>
      <button id="decline-action"
              mat-raised-button
              matDialogClose
              color="warn">Decline</button>
      <button id="confirm-action"
              mat-raised-button
              color="primary"
              [disabled]="disableConfirmActionButton"
              (click)="closeDialog()">Confirm
      </button>
    </mat-dialog-actions>
  `,
                styles: [`
    ::ng-deep .mat-checkbox-label{display:flex;flex-wrap:wrap}mat-dialog-content div{margin-top:1.5rem}mat-dialog-actions{margin-top:1rem}
  `]
            },] },
];
/** @nocollapse */
LegalityDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const Theme = {
    DEFAULT: 'default',
    CLASSIC: 'classic',
    STROKED: 'stroked',
    FAB: 'fab',
    MINI_FAB: 'mini-fab',
    RAISED: 'raised',
};
/** @enum {string} */
const Layout = {
    ROW: 'row',
    COLUMN: 'column',
};
class AuthProvidersComponent {
    /**
     * @param {?} authProcess
     */
    constructor(authProcess) {
        this.authProcess = authProcess;
        // theme: string = Theme.DEFAULT;
        this.layout = Layout.ROW;
        this.providers = AuthProvider.ALL; //  google, facebook, twitter, github, microsoft, yahoo
        this.themes = Theme;
        this.authProvider = AuthProvider;
        this.onSuccess = authProcess.onSuccessEmitter;
        this.onError = authProcess.onErrorEmitter;
    }
}
AuthProvidersComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-auth-firebaseui-providers',
                template: `
    <div [ngSwitch]="theme" [@animateStagger]="{ value: '50' }">

      <!--default icon buttons-->
      <div *ngSwitchDefault
           [fxLayout]="layout"
           fxLayout.xs="column"
           [fxLayoutAlign]="layout == 'row' ? 'space-around center' : 'stretch'">
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Google)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-button
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Google)">
          <mat-icon svgIcon="google-colored"></mat-icon>
          Google
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Facebook)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-button
                class="facebook-filled"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Facebook)">
          <mat-icon svgIcon="facebook"></mat-icon>
          Facebook
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Twitter)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-button
                class="twitter-filled"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Twitter)">
          <mat-icon svgIcon="twitter"></mat-icon>
          Twitter
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Github)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-button
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Github)">
          <mat-icon svgIcon="github"></mat-icon>
          GitHub
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Microsoft)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-button
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Microsoft)">
          <mat-icon svgIcon="microsoft"></mat-icon>
          Microsoft
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Yahoo)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-button
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Yahoo)">
          <mat-icon svgIcon="yahoo"></mat-icon>
          Yahoo
        </button>
      </div>

      <!--classic-->
      <div *ngSwitchCase="themes.CLASSIC"
           class="buttons-classic"
           [fxLayout]="layout"
           fxLayout.xs="column"
           [fxLayoutAlign]="layout == 'row' ? 'space-around center' : 'stretch'">
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Google)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-button
                class="google-classic"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Google)">
          Google
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Facebook)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-button
                class="facebook-classic"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Facebook)">
          Facebook
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Twitter)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-button
                class="twitter-classic"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Twitter)">
          Twitter
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Github)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-button
                class="github-classic"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Github)">
          GitHub
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Microsoft)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-button
                class="microsoft-classic"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Microsoft)">
          Microsoft
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Yahoo)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-button
                class="yahoo-classic"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Yahoo)">
          Yahoo
        </button>
      </div>

      <!--stroked-->
      <div *ngSwitchCase="themes.STROKED"
           class="buttons-classic"
           [fxLayout]="layout"
           fxLayout.xs="column"
           [fxLayoutAlign]="layout == 'row' ? 'space-around center' : 'stretch'">
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Google)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-stroked-button
                class="google-classic"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Google)">
          Google
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Facebook)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-stroked-button
                class="facebook-classic"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Facebook)">
          Facebook
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Twitter)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-stroked-button
                class="twitter-classic"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Twitter)">
          Twitter
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Github)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-stroked-button
                class="github-classic"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Github)">
          GitHub
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Microsoft)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-stroked-button
                class="microsoft-classic"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Microsoft)">
          Microsoft
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Yahoo)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-stroked-button
                class="yahoo-classic"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Yahoo)">
          Yahoo
        </button>
      </div>

      <!--raised-->
      <div *ngSwitchCase="themes.RAISED"
           class="buttons-raised"
           [fxLayout]="layout"
           fxLayout.xs="column"
           [fxLayoutAlign]="layout == 'row' ? 'space-around center' : 'stretch'">
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Google)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-raised-button
                class="google-raised"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Google)">
          Google
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Facebook)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-raised-button
                class="facebook-raised"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Facebook)">
          Facebook
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Twitter)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-raised-button
                class="twitter-raised"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Twitter)">
          Twitter
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Github)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-raised-button
                class="github-raised"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Github)">
          GitHub
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Microsoft)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-raised-button
                class="microsoft-raised"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Microsoft)">
          Microsoft
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Yahoo)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-raised-button
                class="yahoo-raised"
                [ngClass.xs]="{'space-full-xs':true}"
                (click)="authProcess.signInWith(authProvider.Yahoo)">
          Yahoo
        </button>
      </div>

      <!--fab-->
      <div *ngSwitchCase="themes.FAB"
           class="buttons-raised"
           [fxLayout]="layout"
           [fxLayoutAlign]="layout == 'row' ? 'space-around center' : 'stretch'">
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Google)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-fab
                class="google-raised"
                (click)="authProcess.signInWith(authProvider.Google)">
          <mat-icon svgIcon="google"></mat-icon>
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Facebook)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-fab
                class="facebook-raised"
                (click)="authProcess.signInWith(authProvider.Facebook)">
          <mat-icon svgIcon="facebook"></mat-icon>
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Twitter)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-fab
                class="twitter-raised"
                (click)="authProcess.signInWith(authProvider.Twitter)">
          <mat-icon svgIcon="twitter"></mat-icon>
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Github)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-fab
                class="github-raised"
                (click)="authProcess.signInWith(authProvider.Github)">
          <mat-icon svgIcon="github"></mat-icon>
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Microsoft)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-fab
                class="microsoft"
                (click)="authProcess.signInWith(authProvider.Microsoft)">
          <mat-icon svgIcon="microsoft"></mat-icon>
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Yahoo)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-fab
                class="yahoo-raised"
                (click)="authProcess.signInWith(authProvider.Yahoo)">
          <mat-icon svgIcon="yahoo"></mat-icon>
        </button>
      </div>

      <!--mini-fab-->
      <div *ngSwitchCase="themes.MINI_FAB"
           class="buttons-raised"
           [fxLayout]="layout"
           fxLayoutAlign.xs="center center"
           [fxLayoutAlign]="layout == 'row' ? 'space-around center' : 'stretch'">
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Google)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-mini-fab
                class="google-raised"
                fxFlexAlign="center"
                (click)="authProcess.signInWith(authProvider.Google)">
          <mat-icon svgIcon="google"></mat-icon>
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Facebook)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-mini-fab
                class="facebook-raised"
                (click)="authProcess.signInWith(authProvider.Facebook)">
          <mat-icon svgIcon="facebook"></mat-icon>
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Twitter)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-mini-fab
                class="twitter-raised"
                (click)="authProcess.signInWith(authProvider.Twitter)">
          <mat-icon svgIcon="twitter" class="icon-white"></mat-icon>
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Github)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-mini-fab
                class="github-raised"
                (click)="authProcess.signInWith(authProvider.Github)">
          <mat-icon svgIcon="github"></mat-icon>
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Microsoft)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-mini-fab
                class="microsoft"
                (click)="authProcess.signInWith(authProvider.Microsoft)">
          <mat-icon svgIcon="microsoft"></mat-icon>
        </button>
        <button *ngIf="providers === authProvider.ALL || providers.includes(authProvider.Yahoo)"
                [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                mat-mini-fab
                class="yahoo-raised"
                (click)="authProcess.signInWith(authProvider.Yahoo)">
          <mat-icon svgIcon="yahoo"></mat-icon>
        </button>
      </div>
    </div>
  `,
                styles: [`
    :host{display:block}:host .mat-icon{vertical-align:inherit}.space-full-xs{width:100%;margin:.4rem}.facebook-filled mat-icon{fill:#385899}.twitter-filled mat-icon{fill:#1da1f2}.buttons-raised button{color:#fff!important}.buttons-raised .google-raised{background-color:#db4437}.buttons-raised .facebook-raised{background-color:#385899}.buttons-raised .twitter-raised{background-color:#1da1f2}.buttons-raised .github-raised{background-color:#000}.buttons-raised .microsoft-raised{background-color:#0078d4}.buttons-raised .yahoo-raised{background-color:#720e9e}.buttons-raised .phone-raised{background-color:#02bd7e}.buttons-classic button.google-classic{color:#db4437!important}.buttons-classic .facebook-classic{color:#385899!important}.buttons-classic .twitter-classic{color:#1da1f2!important}.buttons-classic .github-classic{color:#000!important}.buttons-classic .microsoft-classic{color:#0078d4!important}.buttons-classic .yahoo-classic{color:#720e9e!important}.buttons-classic .phone-classic{color:#02bd7e}.icon-white{color:#fff}.icon-white mat-icon{fill:#fff}button.microsoft{background:#f8f9fa}
  `],
                animations: NgxAuthFirebaseuiAnimations
            },] },
];
/** @nocollapse */
AuthProvidersComponent.ctorParameters = () => [
    { type: AuthProcessService }
];
AuthProvidersComponent.propDecorators = {
    theme: [{ type: Input }],
    layout: [{ type: Input }],
    providers: [{ type: Input }],
    onSuccess: [{ type: Output }],
    onError: [{ type: Output }]
};

var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @type {?} */
const EMAIL_REGEX = new RegExp(['^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]+)*)',
    '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
    '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+',
    '[a-zA-Z]{2,}))$'].join(''));
/** @type {?} */
const PHONE_NUMBER_REGEX = new RegExp(/^\+(?:[0-9] ?){6,14}[0-9]$/);
class AuthComponent {
    /**
     * @param {?} platformId
     * @param {?} auth
     * @param {?} authProcess
     * @param {?} dialog
     * @param {?} config
     * @param {?} _activatedRoute
     * @param {?} _cdr
     */
    constructor(platformId, auth, authProcess, dialog, config, _activatedRoute, _cdr) {
        this.platformId = platformId;
        this.auth = auth;
        this.authProcess = authProcess;
        this.dialog = dialog;
        this.config = config;
        this._activatedRoute = _activatedRoute;
        this._cdr = _cdr;
        this.providers = AuthProvider.ALL; //  google, facebook, twitter, github as array or all as one single string
        this.registrationEnabled = true;
        this.resetPasswordEnabled = true;
        this.guestEnabled = true;
        this.selectedTabChange = new EventEmitter();
        // Password strength api
        this.enableLengthRule = true;
        this.enableLowerCaseLetterRule = true;
        this.enableUpperCaseLetterRule = true;
        this.enableDigitRule = true;
        this.enableSpecialCharRule = true;
        this.onStrengthChanged = new EventEmitter();
        // Customize the text
        // Reset Password Tab
        this.resetPasswordTabText = 'Reset e-mail address to password';
        this.resetPasswordInputText = 'Reset e-mail address to password';
        this.resetPasswordErrorRequiredText = 'E-mail is required to reset the password!';
        this.resetPasswordErrorPatternText = 'Please enter a valid e-mail address';
        this.resetPasswordActionButtonText = 'Reset';
        this.resetPasswordInstructionsText = 'Reset requested. Check your e-mail instructions.';
        // SignIn Tab
        this.signInTabText = 'Sign in';
        this.signInCardTitleText = 'Signing in';
        this.loginButtonText = 'Log In';
        this.forgotPasswordButtonText = 'Forgot Password ?';
        // Common
        this.nameText = 'Name';
        this.nameErrorRequiredText = 'Name is required';
        this.nameErrorMinLengthText = 'The name is too short!';
        this.nameErrorMaxLengthText = 'The name is too long!';
        this.emailText = 'E-mail';
        this.emailErrorRequiredText = 'E-mail is required';
        this.emailErrorPatternText = 'Please enter a valid e-mail address';
        this.passwordText = 'Password';
        this.passwordErrorRequiredText = 'Password is required';
        this.passwordErrorMinLengthText = 'The password is too short!';
        this.passwordErrorMaxLengthText = 'The password is too long!';
        // Register Tab
        this.registerTabText = 'Register';
        this.registerCardTitleText = 'Registration';
        this.registerButtonText = 'Register';
        this.guestButtonText = 'continue as guest';
        // email confirmation component
        this.emailConfirmationTitle = 'Confirm your e-mail address!';
        this.emailConfirmationText = `A confirmation e-mail has been sent to you. Check your inbox and click on the link "Confirm my e-mail" to confirm your e-mail address.`;
        this.authProvider = AuthProvider;
        this.authenticationError = false;
        this.passReset = false;
        this.authProviders = AuthProvider;
        this.onSuccess = authProcess.onSuccessEmitter;
        this.onError = authProcess.onErrorEmitter;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.onErrorSubscription = this.onError.subscribe((/**
             * @return {?}
             */
            () => this.authenticationError = true));
        }
        this.min = this.min != null ? Math.max(this.min, this.config.passwordMinLength) : this.config.passwordMinLength;
        this.max = this.max != null ? Math.min(this.max, this.config.passwordMaxLength) : this.config.passwordMaxLength;
        this.goBackURL = this.chooseBackUrl();
        this.updateAuthSnackbarMessages();
        // auth form's initialization
        this._initSignInFormGroupBuilder();
        this._initSignUpFormGroupBuilder();
        this._initResetPasswordFormGroupBuilder();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.passwordStrength) {
            this.passwordStrength.onStrengthChanged.subscribe((/**
             * @param {?} strength
             * @return {?}
             */
            (strength) => {
                this.onStrengthChanged.emit(strength);
            }));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.messageOnAuthSuccess || changes.messageOnAuthError) {
            this.updateAuthSnackbarMessages();
        }
        if (changes.min) {
            this.min = this.min != null ? Math.max(this.min, this.config.passwordMinLength) : this.config.passwordMinLength;
        }
        if (changes.max) {
            this.max = this.max != null ? Math.min(this.max, this.config.passwordMaxLength) : this.config.passwordMaxLength;
        }
        if (changes.goBackURL) {
            this.goBackURL = this.chooseBackUrl();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.onErrorSubscription) {
            this.onErrorSubscription.unsubscribe();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTabChange(event) {
        this.selectedTabChange.emit(event);
        this.tabIndex = event.index;
    }
    /**
     * @return {?}
     */
    signOut() {
        return __awaiter$3(this, void 0, void 0, function* () {
            try {
                this.isLoading = true;
                this._cdr.markForCheck();
                yield this.authProcess.signOut();
            }
            finally {
                this.isLoading = false;
                this._cdr.markForCheck();
            }
        });
    }
    /**
     * @return {?}
     */
    signIn() {
        return __awaiter$3(this, void 0, void 0, function* () {
            if (!this.signInFormGroup.valid) {
                return;
            }
            try {
                this.isLoading = true;
                this._cdr.markForCheck();
                yield this.authProcess.signInWith(this.authProviders.EmailAndPassword, {
                    email: this.signInFormGroup.value.email,
                    password: this.signInFormGroup.value.password
                });
            }
            finally {
                this.isLoading = false;
                this._cdr.markForCheck();
            }
        });
    }
    /**
     * @return {?}
     */
    get color() {
        return this.authenticationError ? 'warn' : 'primary';
    }
    /**
     * @return {?}
     */
    updateAuthSnackbarMessages() {
        this.authProcess.messageOnAuthSuccess = this.messageOnAuthSuccess;
        this.authProcess.messageOnAuthError = this.messageOnAuthError;
    }
    /**
     * @return {?}
     */
    createForgotPasswordTab() {
        this.passwordResetWished = true;
        this.tabIndex = 2;
        this._cdr.markForCheck();
    }
    /**
     * @param {?=} authProvider
     * @return {?}
     */
    processLegalSignUP(authProvider) {
        if (this.tosUrl || this.privacyPolicyUrl) {
            /** @type {?} */
            const params = {
                tosUrl: this.tosUrl,
                privacyPolicyUrl: this.privacyPolicyUrl,
                authProvider: authProvider
            };
            this.dialogRef = this.dialog.open(LegalityDialogComponent, { data: params });
            this.dialogRef.afterClosed().subscribe((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                if (result && result.checked) {
                    this._afterSignUpMiddleware(result.authProvider).then((/**
                     * @return {?}
                     */
                    () => this.signUpFormGroup.reset()));
                }
                this.dialogRef = null;
            }));
        }
        else {
            this._afterSignUpMiddleware(authProvider).then((/**
             * @return {?}
             */
            () => this.signUpFormGroup.reset()));
        }
    }
    /**
     * @return {?}
     */
    signUp() {
        return __awaiter$3(this, void 0, void 0, function* () {
            try {
                this.isLoading = true;
                this._cdr.markForCheck();
                return yield this.authProcess.signUp(this.signUpFormGroup.value.name, {
                    email: this.signUpFormGroup.value.email,
                    password: this.signUpFormGroup.value.password
                });
            }
            finally {
                this.isLoading = false;
                this._cdr.markForCheck();
            }
        });
    }
    /**
     * @return {?}
     */
    signUpAnonymously() {
        return __awaiter$3(this, void 0, void 0, function* () {
            try {
                this.isLoading = true;
                this._cdr.markForCheck();
                yield this.authProcess.signInWith(this.authProvider.ANONYMOUS);
            }
            finally {
                this.isLoading = false;
                this._cdr.markForCheck();
            }
        });
    }
    /**
     * @return {?}
     */
    resetPassword() {
        this.authProcess.resetPassword(this.resetPasswordEmailFormControl.value)
            .then((/**
         * @return {?}
         */
        () => {
            this.passReset = true;
            // this.tabIndex = 2;
            this._cdr.markForCheck();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    chooseBackUrl() {
        return this._activatedRoute.snapshot.queryParams['redirectUrl'] || this.goBackURL || '/';
    }
    /**
     * @private
     * @return {?}
     */
    _initSignInFormGroupBuilder() {
        this.signInFormGroup = new FormGroup({});
        this.signInFormGroup.registerControl('email', this.signInEmailFormControl = new FormControl('', [
            Validators.required,
            Validators.pattern(EMAIL_REGEX)
        ]));
        this.signInFormGroup.registerControl('password', this.sigInPasswordFormControl = new FormControl('', [
            Validators.required,
            Validators.minLength(this.min),
            Validators.maxLength(this.max)
        ]));
    }
    /**
     * @private
     * @return {?}
     */
    _initSignUpFormGroupBuilder() {
        this.signUpFormGroup = new FormGroup({
            name: this.sigUpNameFormControl = new FormControl('', [
                Validators.required,
                Validators.minLength(this.config.nameMinLength),
                Validators.maxLength(this.config.nameMaxLength)
            ]),
            email: this.sigUpEmailFormControl = new FormControl('', [
                Validators.required,
                Validators.pattern(EMAIL_REGEX)
            ]),
            password: this.sigUpPasswordFormControl = new FormControl('', [
                Validators.required,
                Validators.minLength(this.min),
                Validators.maxLength(this.max),
            ])
        });
    }
    /**
     * @private
     * @return {?}
     */
    _initResetPasswordFormGroupBuilder() {
        this.resetPasswordFormGroup = new FormGroup({
            email: this.resetPasswordEmailFormControl = new FormControl('', [
                Validators.required,
                Validators.pattern(EMAIL_REGEX)
            ])
        });
    }
    /**
     * @private
     * @param {?=} authProvider
     * @return {?}
     */
    _afterSignUpMiddleware(authProvider) {
        if (authProvider === this.authProvider.ANONYMOUS) {
            return this.signUpAnonymously();
        }
        return this.signUp();
    }
}
AuthComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-auth-firebaseui',
                template: `
    <ng-container *ngIf="authProcess.user$ | async as user; else showForm">

      <!-- This component will be shown when:
        - we just sent a verification mail (notably after sign up)
        - we arrived from the guard after trying to access a protected route even though we are connected
      -->
      <div *ngIf="(config.guardProtectedRoutesUntilEmailIsVerified && !user.emailVerified) || (authProcess.emailConfirmationSent && !user.emailVerified); else signedInUser"
           fxLayout="row" fxLayoutAlign="center center">
          <ngx-auth-firebaseui-email-confirmation
            [template]="verifyEmailTemplate"
            [email]="user.email"
            [goBackURL]="goBackURL"
            [verifyEmailTitleText]="verifyEmailTitleText"
            [verifyEmailConfirmationText]="verifyEmailConfirmationText"
            [verifyEmailGoBackText]="verifyEmailGoBackText"
            [sendNewVerificationEmailText]="sendNewVerificationEmailText"
            [signOutText]="signOutText"
            [messageOnEmailConfirmationSuccess]="messageOnEmailConfirmationSuccess"
            (signOut)="signOut()">
        </ngx-auth-firebaseui-email-confirmation>
      </div>

      <ng-template #signedInUser>
          <div class="signed-in-container" fxLayout="column" fxLayoutAlign="center center">
            <img class="account-circle" *ngIf="user.photoURL; else noPhoto" [src]="user.photoURL">
            <ng-template #noPhoto><mat-icon class="account-circle">account_circle</mat-icon></ng-template>
            <div class="user-display-name mat-title">{{ user.displayName }}</div>
            <div class="user-email mat-body-2">{{ user.email }}</div>
            <div class="actions">
              <mat-progress-bar *ngIf="isLoading" mode="indeterminate"></mat-progress-bar>
              <a mat-stroked-button class="go-back-button action-button" color="primary" [routerLink]="goBackURL">{{ verifyEmailGoBackText }}</a>
              <button mat-stroked-button class="sign-out-button action-button" color="warn" (click)="signOut()">{{ signOutText }}</button>
            </div>
          </div>
      </ng-template>

    </ng-container>

    <ng-template #showForm>
      <mat-tab-group [color]="color" [selectedIndex]="tabIndex" (selectedTabChange)="onTabChange($event)">
        <!--Sign in tab-->
        <mat-tab [label]="signInTabText">
          <mat-card>
            <mat-card-title>{{signInCardTitleText}}</mat-card-title>
            <mat-card-content>
              <form  [@animateStagger]="{ value: '50' }"
                     [formGroup]="signInFormGroup"
                    (ngSubmit)="signIn()">
                <div fxLayout="column" fxLayoutAlign="center">
                  <mat-form-field [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                                  [appearance]="appearance">
                    <mat-label>{{emailText}}</mat-label>
                    <input matInput
                          formControlName="email"
                          required>
                    <mat-icon matSuffix [color]="color">email</mat-icon>
                    <mat-error *ngIf="signInEmailFormControl.hasError('required')">
                      {{emailErrorRequiredText}}
                    </mat-error>
                    <mat-error *ngIf="signInEmailFormControl.hasError('pattern')">
                      {{emailErrorPatternText}}
                    </mat-error>
                  </mat-form-field>

                  <mat-form-field [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}"
                                [appearance]="appearance">
                    <mat-label>{{passwordText}}</mat-label>
                    <input matInput [type]="togglePass.type" [minlength]="min" [maxlength]="max" formControlName="password"
                          required/>
                    <mat-pass-toggle-visibility #togglePass matSuffix></mat-pass-toggle-visibility>
                    <mat-icon matSuffix [color]="color">lock</mat-icon>
                    <mat-hint align="end" aria-live="polite"> {{ signInFormGroup.value.password.length }}
                      / {{ max }} </mat-hint>
                    <mat-error *ngIf="sigInPasswordFormControl.hasError('required')">
                      {{passwordErrorRequiredText}}
                    </mat-error>
                    <mat-error *ngIf="sigInPasswordFormControl.hasError('minlength')">
                      {{ passwordErrorMinLengthText }}
                    </mat-error>
                    <mat-error *ngIf="sigInPasswordFormControl.hasError('maxlength')">
                      {{ passwordErrorMaxLengthText }}
                    </mat-error>
                  </mat-form-field>

                  <button [@animate]="{ value: '*', params: { x: '50px' } }"
                        mat-raised-button
                          style="margin-top: 20px"
                          type="submit"
                          class="space-top"
                          [color]="color"
                          [disabled]="signInFormGroup.invalid">
                    {{loginButtonText}}
                  </button>

                </div>
              </form>

              <div fxLayoutAlign="center">
                <button *ngIf="resetPasswordEnabled"
                        [@animate]="{ value: '*', params: { x: '-50px' } }"
                      mat-button
                      class="space-top"
                      [color]="color"
                      (click)="createForgotPasswordTab()">
                {{forgotPasswordButtonText}}
              </button>
            </div>

            </mat-card-content>
            <mat-card-footer *ngIf="isLoading">
              <mat-progress-bar [@animate]="{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }"
                              mode="indeterminate"></mat-progress-bar>
            </mat-card-footer>
          </mat-card>
        </mat-tab>

        <!--tab register-->
        <mat-tab [label]="registerTabText" *ngIf="registrationEnabled">
          <mat-card>
            <mat-card-title>{{registerCardTitleText}}</mat-card-title>
              <mat-card-content fxLayout="column" fxLayoutAlign="center">
                <form [@animateStagger]="{ value: '50' }"
                    [formGroup]="signUpFormGroup" (ngSubmit)="signUpFormGroup.valid &&
                processLegalSignUP(authProvider.EmailAndPassword)">
                  <div fxLayout="column" fxLayoutAlign="center">
                    <!--name-->
                    <mat-form-field [@animate]="{ value: '*', params: { x: '50px' } }"
                                  [appearance]="appearance">
                      <!--labels will work only with @angular/material@6.2.0 -->
                      <mat-label>{{nameText}}</mat-label>
                      <input
                        matInput
                        [minlength]="config.nameMinLength"
                        [maxlength]="config.nameMaxLength"
                        [formControl]="sigUpNameFormControl"
                        required
                      />
                      <mat-icon matSuffix [color]="color">person</mat-icon>
                      <mat-hint align="end" aria-live="polite"> {{ signUpFormGroup.value.name?.length }}
                        / {{ config.nameMaxLength }} </mat-hint>
                      <mat-error *ngIf="sigUpNameFormControl.hasError('required')">
                        {{nameErrorRequiredText}}
                      </mat-error>
                      <mat-error *ngIf="sigUpNameFormControl.hasError('minlength')">
                        {{nameErrorMinLengthText}}
                      </mat-error>
                      <mat-error *ngIf="sigUpNameFormControl.hasError('maxlength')">
                        {{nameErrorMaxLengthText}}
                      </mat-error>
                    </mat-form-field>

                    <!--email-->
                    <mat-form-field [@animate]="{ value: '*', params: { x: '50px' } }"
                                  [appearance]="appearance">
                      <mat-label>{{emailText}}</mat-label>
                      <input matInput
                            type="email"
                            [formControl]="sigUpEmailFormControl"
                            required>
                      <mat-icon matSuffix [color]="color">email</mat-icon>
                      <mat-error *ngIf="sigUpEmailFormControl.hasError('required')">
                        {{emailErrorRequiredText}}
                      </mat-error>
                      <mat-error *ngIf="sigUpEmailFormControl.hasError('pattern')">
                        {{emailErrorPatternText}}
                      </mat-error>
                    </mat-form-field>

                    <!--password-->
                    <div fxLayout="column">
                      <mat-form-field [@animate]="{ value: '*', params: { x: '50px' } }"
                                    [appearance]="appearance">
                        <mat-label>{{passwordText}}</mat-label>
                        <input
                          matInput
                          [type]="toggle.type"
                          name="password"
                          [formControl]="sigUpPasswordFormControl"
                          required
                          [minlength]="min"
                          [maxlength]="max"
                        />
                        <mat-pass-toggle-visibility #toggle matSuffix></mat-pass-toggle-visibility>

                        <mat-icon matSuffix [color]="color">lock</mat-icon>

                        <mat-hint align="end" aria-live="polite">
                          {{signUpFormGroup.value.password?.length}} / {{ max }}
                        </mat-hint>

                        <mat-error *ngIf="sigUpPasswordFormControl.hasError('required')" class="cut-text">
                          {{passwordErrorRequiredText}}
                        </mat-error>

                        <mat-error *ngIf="sigUpPasswordFormControl.hasError('minlength')" class="cut-text">
                          {{ passwordErrorMinLengthText }}
                        </mat-error>
                        <mat-error *ngIf="sigUpPasswordFormControl.hasError('maxlength')" class="cut-text">
                          {{ passwordErrorMaxLengthText }}
                        </mat-error>

                      </mat-form-field>

                      <mat-password-strength #passwordStrength
                                            [min]="min"
                                            [max]="max"
                                            [customValidator]="customValidator"
                                            [enableLengthRule]="enableLengthRule"
                                            [enableLowerCaseLetterRule]="enableLowerCaseLetterRule"
                                            [enableUpperCaseLetterRule]="enableUpperCaseLetterRule"
                                            [enableDigitRule]="enableDigitRule"
                                            [enableSpecialCharRule]="enableSpecialCharRule"
                                            [password]="signUpFormGroup.value.password"
                                            [externalError]="sigUpPasswordFormControl.dirty">
                      </mat-password-strength>

                    </div>

                    <button [@animate]="{ value: '*', params: { x: '100px' } }"
                          mat-raised-button
                            style="margin-top: 20px"
                            type="submit"
                            [disabled]="signUpFormGroup.invalid"
                            [color]="color">
                      {{registerButtonText}}
                    </button>

                  </div>
                </form>

                <button *ngIf="guestEnabled"
                        [@animate]="{ value: '*', params: { x: '-100px' } }"
                      mat-button
                      style="margin-top: 20px"
                      [color]="color"
                      (click)="processLegalSignUP(authProvider.ANONYMOUS)">
                <mat-icon>fingerprint</mat-icon>
                {{guestButtonText}}
              </button>

              </mat-card-content>

              <mat-card-footer *ngIf="isLoading">
                <mat-progress-bar [@animate]="{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }"
                                mode="indeterminate"></mat-progress-bar>
              </mat-card-footer>

          </mat-card>
        </mat-tab>

        <!--Reset password tab-->
        <mat-tab *ngIf="passwordResetWished" class="reset-password-tab">
          <ng-template mat-tab-label>
            <button mat-icon-button class="reset-password-tab__close-button" (click)="passwordResetWished = false">
              {{ resetPasswordTabText }}
              <mat-icon>close</mat-icon>
            </button>
          </ng-template>
          <form [@animateStagger]="{ value: '50' }"
                [formGroup]="resetPasswordFormGroup"
                (ngSubmit)="resetPasswordFormGroup.valid && resetPassword()">
            <mat-card class="reset-password-card">
              <mat-card-content>
                <mat-form-field [@animate]="{value:'*',params:{duration:'300ms',y:'100px'}}" class="full-width"
                                [appearance]="appearance">
                  <mat-label> {{ resetPasswordTabText }} </mat-label>
                  <input matInput
                        [title]="resetPasswordInputText"
                        formControlName="email"
                        required>
                  <mat-icon matSuffix [color]="color">email</mat-icon>
                  <mat-error *ngIf="resetPasswordEmailFormControl.hasError('required')">
                    {{resetPasswordErrorRequiredText}}
                  </mat-error>
                  <mat-error *ngIf="resetPasswordEmailFormControl.hasError('pattern')">
                    {{resetPasswordErrorPatternText}}
                  </mat-error>
                </mat-form-field>
                <p *ngIf="passReset">{{resetPasswordInstructionsText}}</p>
              </mat-card-content>
              <mat-card-actions fxLayoutAlign="center">
                <mat-progress-bar *ngIf="isLoading" mode="indeterminate"></mat-progress-bar>
                <button [@animate]="{ value: '*', params: { x: '50px' } }"
                        mat-raised-button
                        type="submit"
                        [color]="color">
                  {{resetPasswordActionButtonText}}
                </button>
              </mat-card-actions>
            </mat-card>
          </form>
        </mat-tab>

      </mat-tab-group>
      <mat-divider></mat-divider>
      <ngx-auth-firebaseui-providers *ngIf="tabIndex !== 2"
                                     [providers]="providers"
                                     [theme]="providersTheme">
      </ngx-auth-firebaseui-providers>
    </ng-template>
  `,
                styles: [`
    .mat-card{margin:2rem}.space-top{margin-top:.5rem}.full-width{width:100%}.cut-text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.signed-in-container .account-circle{font-size:12rem;width:12rem;height:12rem}.signed-in-container img.account-circle{-o-object-fit:cover;object-fit:cover;border-radius:50%}.signed-in-container .sign-out-button{margin-top:2rem}.signed-in-container .user-display-name{margin-top:1rem}.signed-in-container .user-email{margin-top:-1rem}.signed-in-container .actions{margin-top:2rem}.signed-in-container .actions .action-button,.signed-in-container .actions mat-progress-bar{width:100%}.signed-in-container .actions .action-button{margin-top:1rem}.reset-password-tab mat-progress-bar{margin-bottom:1rem}.reset-password-tab__close-button{width:100%;display:flex;justify-content:space-between;align-items:center}.reset-password-tab__close-button mat-icon{font-size:18px;position:relative;top:-1px}
  `],
                animations: NgxAuthFirebaseuiAnimations,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
AuthComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: AngularFireAuth },
    { type: AuthProcessService },
    { type: MatDialog },
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => NgxAuthFirebaseUIConfigToken)),] }] },
    { type: ActivatedRoute },
    { type: ChangeDetectorRef }
];
AuthComponent.propDecorators = {
    matTabGroup: [{ type: ViewChild, args: [MatTabGroup, { static: false },] }],
    passwordStrength: [{ type: ViewChild, args: [MatPasswordStrengthComponent, { static: false },] }],
    providers: [{ type: Input }],
    providersTheme: [{ type: Input }],
    appearance: [{ type: Input }],
    tabIndex: [{ type: Input }],
    registrationEnabled: [{ type: Input }],
    resetPasswordEnabled: [{ type: Input }],
    guestEnabled: [{ type: Input }],
    tosUrl: [{ type: Input }],
    privacyPolicyUrl: [{ type: Input }],
    goBackURL: [{ type: Input }],
    messageOnAuthSuccess: [{ type: Input }],
    messageOnAuthError: [{ type: Input }],
    messageOnEmailConfirmationSuccess: [{ type: Input }],
    onSuccess: [{ type: Output }],
    onError: [{ type: Output }],
    selectedTabChange: [{ type: Output }],
    enableLengthRule: [{ type: Input }],
    enableLowerCaseLetterRule: [{ type: Input }],
    enableUpperCaseLetterRule: [{ type: Input }],
    enableDigitRule: [{ type: Input }],
    enableSpecialCharRule: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    customValidator: [{ type: Input }],
    onStrengthChanged: [{ type: Output }],
    verifyEmailTemplate: [{ type: Input }],
    verifyEmailTitleText: [{ type: Input }],
    verifyEmailConfirmationText: [{ type: Input }],
    verifyEmailGoBackText: [{ type: Input }],
    sendNewVerificationEmailText: [{ type: Input }],
    signOutText: [{ type: Input }],
    resetPasswordTabText: [{ type: Input }],
    resetPasswordInputText: [{ type: Input }],
    resetPasswordErrorRequiredText: [{ type: Input }],
    resetPasswordErrorPatternText: [{ type: Input }],
    resetPasswordActionButtonText: [{ type: Input }],
    resetPasswordInstructionsText: [{ type: Input }],
    signInTabText: [{ type: Input }],
    signInCardTitleText: [{ type: Input }],
    loginButtonText: [{ type: Input }],
    forgotPasswordButtonText: [{ type: Input }],
    nameText: [{ type: Input }],
    nameErrorRequiredText: [{ type: Input }],
    nameErrorMinLengthText: [{ type: Input }],
    nameErrorMaxLengthText: [{ type: Input }],
    emailText: [{ type: Input }],
    emailErrorRequiredText: [{ type: Input }],
    emailErrorPatternText: [{ type: Input }],
    passwordText: [{ type: Input }],
    passwordErrorRequiredText: [{ type: Input }],
    passwordErrorMinLengthText: [{ type: Input }],
    passwordErrorMaxLengthText: [{ type: Input }],
    registerTabText: [{ type: Input }],
    registerCardTitleText: [{ type: Input }],
    registerButtonText: [{ type: Input }],
    guestButtonText: [{ type: Input }],
    emailConfirmationTitle: [{ type: Input }],
    emailConfirmationText: [{ type: Input }]
};

var __awaiter$4 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserComponent {
    /**
     * @param {?} auth
     * @param {?} authProcess
     * @param {?} _fireStoreService
     * @param {?} snackBar
     * @param {?} config
     */
    constructor(auth, authProcess, _fireStoreService, snackBar, config) {
        this.auth = auth;
        this.authProcess = authProcess;
        this._fireStoreService = _fireStoreService;
        this.snackBar = snackBar;
        this.config = config;
        this.canLogout = true;
        this.canEditAccount = true;
        this.canDeleteAccount = true;
        this.onSignOut = new EventEmitter();
        this.onAccountEdited = new EventEmitter();
        this.onAccountDeleted = new EventEmitter();
    }
    /**
     * @protected
     * @return {?}
     */
    initUpdateFormGroup() {
        /** @type {?} */
        const currentUser = this.auth.auth.currentUser;
        this.updateFormGroup = new FormGroup({
            name: this.updateNameFormControl = new FormControl({ value: currentUser.displayName, disabled: this.editMode }, [
                Validators.required,
                Validators.minLength(this.config.nameMinLength),
                Validators.maxLength(this.config.nameMaxLength)
            ]),
            email: this.updateEmailFormControl = new FormControl({ value: currentUser.email, disabled: this.editMode }, [
                Validators.required,
                Validators.pattern(EMAIL_REGEX)
            ]),
            phoneNumber: this.updatePhoneNumberFormControl = new FormControl({ value: currentUser.phoneNumber, disabled: this.editMode }, [Validators.pattern(PHONE_NUMBER_REGEX)])
        });
        this.updateFormGroup.enable();
    }
    /**
     * @return {?}
     */
    changeEditMode() {
        this.editMode = !this.editMode;
        this.editMode ? this.initUpdateFormGroup() : this.reset();
    }
    /**
     * @return {?}
     */
    reset() {
        this.updateFormGroup.reset();
        this.updateFormGroup.disable();
        this.updateFormGroup = null;
    }
    /**
     * @return {?}
     */
    save() {
        return __awaiter$4(this, void 0, void 0, function* () {
            if (this.updateFormGroup.dirty) {
                /** @type {?} */
                const user = this.auth.auth.currentUser;
                // ngx-auth-firebaseui-user.updateProfile()
                // ngx-auth-firebaseui-user.updateEmail()
                // console.log('form = ', this.updateFormGroup);
                /** @type {?} */
                const snackBarMsg = [];
                try {
                    if (this.updateNameFormControl.dirty) {
                        yield user.updateProfile({ displayName: this.updateNameFormControl.value, photoURL: null });
                        snackBarMsg.push(`your name has been updated to ${user.displayName}`);
                    }
                    if (this.updateEmailFormControl.dirty) {
                        yield user.updateEmail(this.updateEmailFormControl.value);
                        snackBarMsg.push(`your email has been updated to ${user.email}`);
                    }
                    if (this.updatePhoneNumberFormControl.dirty) {
                        yield user.updatePhoneNumber(this.updatePhoneNumberFormControl.value);
                        console.log('phone number = ', this.updatePhoneNumberFormControl.value);
                        snackBarMsg.push(`your phone number has been updated to ${user.phoneNumber}`);
                    }
                    if (this.config.enableFirestoreSync) {
                        yield this._fireStoreService.updateUserData(this.authProcess.parseUserInfo(user));
                    }
                }
                catch (error) {
                    this.authProcess.showToast(error && error.message ? error.message : error);
                    console.error(error);
                }
                if (snackBarMsg.length > 0) {
                    this.authProcess.showToast(snackBarMsg.join('\\n'));
                }
                // this.updateFormGroup.reset();
            }
            this.editMode = false;
        });
    }
    /**
     * @return {?}
     */
    signOut() {
        this.auth.auth.signOut()
            .then((/**
         * @return {?}
         */
        () => this.onSignOut.emit()))
            .catch((/**
         * @param {?} e
         * @return {?}
         */
        e => console.error('An error happened while signing out!', e)));
    }
    /**
     * Delete the account of the current firebase ngx-auth-firebaseui-user
     *
     * On Success, emit the <onAccountDeleted> event and toast a msg!#
     * Otherwise, log the and toast and error msg!
     *
     * @return {?}
     */
    deleteAccount() {
        return __awaiter$4(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const user = this.auth.auth.currentUser;
                // await this.authProcess.deleteAccount();
                yield this.auth.auth.currentUser.delete();
                // if (this.config.enableFirestoreSync) {
                yield this._fireStoreService.deleteUserData(user.uid);
                // }
                this.onAccountDeleted.emit();
                this.editMode = false;
                console.log('Your account has been successfully deleted!');
                this.authProcess.showToast('Your account has been successfully deleted!');
            }
            catch (error) {
                console.log('Error while delete user account', error);
                this.authProcess.showToast(`Error occurred while deleting your account: ${error.message}`);
            }
        });
    }
}
UserComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-auth-firebaseui-user',
                template: `
    <div *ngIf="auth.authState| async as user; then authenticated else none">

    </div>

    <ng-template #authenticated>
      <mat-card *ngIf="auth.user | async as user">
        <!--<form [formGroup]="updateFormGroup" >-->
        <!--card header-->
        <mat-card-header fxLayout="column" fxLayoutAlign="center center">

          <img mat-card-avatar [src]="authProcess?.getUserPhotoUrl()">

          <div *ngIf="user.emailVerified; then emailVerified else emailNotVerified"></div>
          <ng-template #emailVerified>
            <mat-icon color="primary"
                      matTooltip="email is verified"
                      matTooltipPosition="after">
              verified_user
            </mat-icon>
          </ng-template>
          <ng-template #emailNotVerified>
            <mat-icon color="warn"
                      matTooltip="email is not verified"
                      matTooltipPosition="after">
              warning
            </mat-icon>
          </ng-template>

        </mat-card-header>

        <!--card content-->
        <mat-card-content *ngIf="editMode; then edit else readonly">
        </mat-card-content>

        <ng-template #edit>
          <form [formGroup]="updateFormGroup" (submit)="save()">

            <mat-card-content fxLayout="column" fxLayoutAlign="center center">
              <div fxLayoutAlign="center">
                <button mat-raised-button color="warn" class="edit-button"
                        (click)="changeEditMode()">
                  cancel
                </button>
              </div>

              <!--name-->
              <mat-form-field class="full-width" [appearance]="appearance">
                <mat-label>Name</mat-label>
                <input matInput
                       placeholder="Name"
                       [formControl]="updateNameFormControl">
                <mat-icon matSuffix>person</mat-icon>
                <mat-hint align="end" aria-live="polite"> {{ updateNameFormControl.value?.length }} / {{ config.nameMaxLength }} </mat-hint>
                <mat-error *ngIf="updateNameFormControl.hasError('required')">
                  Name is required
                </mat-error>
              </mat-form-field>

              <!--email-->
              <mat-form-field class="full-width" [appearance]="appearance">
                <mat-label>E-mail</mat-label>
                <input matInput
                       placeholder="E-mail"
                       [formControl]="updateEmailFormControl">
                <mat-icon matSuffix>email</mat-icon>
                <mat-error *ngIf="updateEmailFormControl.hasError('required')">
                  E-mail is required {{updateEmailFormControl.value}}
                </mat-error>
                <mat-error *ngIf="updateEmailFormControl.hasError('pattern')">
                  Please enter a valid e-mail address {{updateEmailFormControl.value}}
                </mat-error>
              </mat-form-field>

              <!--phone number-->
              <mat-form-field class="full-width" [appearance]="appearance">
                <mat-label>Phone number</mat-label>
                <input matInput
                       type="number"
                       placeholder="Phone number"
                       [formControl]="updatePhoneNumberFormControl">
                <mat-icon matSuffix>phone</mat-icon>
                <mat-hint align="end" aria-live="polite">
                  The phone number is international. Therefore, it should start with a + sign or 00,
                  followed by the country code, - and national number e.g: +49-12345678 or 0041-1234567890

                  NOTE : the phone number must be a valid phone credential !!
                </mat-hint>
                <mat-error *ngIf="updatePhoneNumberFormControl.hasError('pattern')">
                  Please enter a valid phone number
                </mat-error>
              </mat-form-field>

            </mat-card-content>

            <mat-card-actions fxLayout="column">
              <button mat-button
                      color="primary"
                      type="submit">
                Save changes
              </button>
            </mat-card-actions>
          </form>
        </ng-template>

        <ng-template #readonly>
          <div fxLayoutAlign="center">
            <button mat-raised-button color="primary" class="edit-button"
                    (click)="changeEditMode()">
              edit
            </button>
          </div>

          <!--name-->
          <mat-form-field class="full-width" [appearance]="appearance">
            <mat-label>Name</mat-label>
            <input matInput
                   placeholder="Name"
                   [value]="user.displayName"
                   [disabled]="!editMode">
            <mat-icon matSuffix color="primary">person</mat-icon>
          </mat-form-field>

          <!--email-->
          <mat-form-field class="full-width" [appearance]="appearance">
            <mat-label>E-mail</mat-label>
            <input matInput
                   placeholder="E-mail" [value]="user.email"
                   [disabled]="!editMode">
            <mat-icon matSuffix color="primary">email</mat-icon>
          </mat-form-field>

          <!--phone number-->
          <mat-form-field class="full-width" [appearance]="appearance">
            <mat-label>Phone number</mat-label>
            <input matInput
                   placeholder="Phone number"
                   [value]="user.phoneNumber"
                   [disabled]="!editMode">
            <mat-icon matSuffix color="primary">phone</mat-icon>
          </mat-form-field>

          <mat-card-actions fxLayout="column">
            <button *ngIf="canLogout" mat-button color="primary" (click)="signOut()">Sign out</button>
            <button *ngIf="canDeleteAccount" mat-button color="warn" (click)="deleteAccount()">Delete account</button>
          </mat-card-actions>

        </ng-template>

      </mat-card>

    </ng-template>


    <ng-template #none>
      <mat-card class="none-card" fxLayout="row" fxLayoutAlign="center center">
        <mat-card-content fxLayout="row" fxLayoutAlign="center center">
          <mat-icon color="accent">warning</mat-icon>
          <span>You are not logged in!</span>
        </mat-card-content>
      </mat-card>
    </ng-template>
  `,
                styles: [`
    .edit-button{margin:1rem}.full-width{width:100%}.cut-text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.none-card{min-height:430px}.none-card span{font-size:24px;text-align:center;color:rgba(0,0,0,.54)}
  `]
            },] },
];
/** @nocollapse */
UserComponent.ctorParameters = () => [
    { type: AngularFireAuth },
    { type: AuthProcessService },
    { type: FirestoreSyncService },
    { type: MatSnackBar },
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => NgxAuthFirebaseUIConfigToken)),] }] }
];
UserComponent.propDecorators = {
    editMode: [{ type: Input }],
    canLogout: [{ type: Input }],
    canEditAccount: [{ type: Input }],
    canDeleteAccount: [{ type: Input }],
    appearance: [{ type: Input }],
    onSignOut: [{ type: Output }],
    onAccountEdited: [{ type: Output }],
    onAccountDeleted: [{ type: Output }]
};

var __awaiter$5 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @type {?} */
const defaultTranslations = {
    verifyEmailTitleText: 'Confirm your e-mail address!',
    verifyEmailConfirmationText: 'A confirmation e-mail has been sent. Check your inbox and click on the link "Confirm my e-mail" to confirm your e-mail address.',
    verifyEmailGoBackText: 'Go back',
    sendNewVerificationEmailText: 'Send new confirmation e-mail',
    signOutText: 'Sign out',
    messageOnEmailConfirmationSuccess: 'A new confirmation e-mail has been sent. Please check your inbox.',
};
class EmailConfirmationComponent {
    /**
     * @param {?} authProcess
     * @param {?} _router
     * @param {?} _cdr
     */
    constructor(authProcess, _router, _cdr) {
        this.authProcess = authProcess;
        this._router = _router;
        this._cdr = _cdr;
        this.signOut = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.verifyEmailTemplate && changes.verifyEmailTemplate.currentValue == null) {
            this.verifyEmailTemplate = this.defaultTemplate;
            console.log('ngOnChanges - defaultTemplate:', this.verifyEmailTemplate);
        }
        this.verifyEmailContext = this.createTemplateContext();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.verifyEmailTemplate) {
            console.log('ngOnInit - defaultTemplate');
            this.verifyEmailTemplate = this.defaultTemplate;
        }
        this.verifyEmailContext = this.createTemplateContext();
        console.log('verifyEmailTemplate:', this.verifyEmailTemplate);
        console.log('verifyEmailContext:', this.verifyEmailContext);
    }
    /**
     * @return {?}
     */
    continue() {
        return __awaiter$5(this, void 0, void 0, function* () {
            try {
                yield this.authProcess.reloadUserInfo();
                yield this._router.navigate([this.goBackURL]);
            }
            catch (error) {
                this.authProcess.notifyError(error);
            }
        });
    }
    /**
     * @return {?}
     */
    sendNewVerificationEmail() {
        return __awaiter$5(this, void 0, void 0, function* () {
            try {
                this.isLoading = true;
                this._cdr.markForCheck();
                yield this.authProcess.sendNewVerificationEmail();
                this.authProcess.showToast(this.verifyEmailContext.messageOnEmailConfirmationSuccess);
            }
            catch (error) {
                this.authProcess.notifyError(error);
            }
            finally {
                this.isLoading = false;
                this._cdr.markForCheck();
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    createTemplateContext() {
        /** @type {?} */
        const context = {
            email: this.email,
            goBackURL: this.goBackURL,
            verifyEmailTitleText: this.verifyEmailTitleText || defaultTranslations.verifyEmailTitleText,
            verifyEmailConfirmationText: this.verifyEmailConfirmationText || defaultTranslations.verifyEmailConfirmationText,
            verifyEmailGoBackText: this.verifyEmailGoBackText || defaultTranslations.verifyEmailGoBackText,
            sendNewVerificationEmailText: this.sendNewVerificationEmailText || defaultTranslations.sendNewVerificationEmailText,
            signOutText: this.signOutText || defaultTranslations.signOutText,
            messageOnEmailConfirmationSuccess: this.messageOnEmailConfirmationSuccess || defaultTranslations.messageOnEmailConfirmationSuccess
        };
        return context;
    }
}
EmailConfirmationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-auth-firebaseui-email-confirmation',
                template: `
    <ng-container *ngTemplateOutlet="verifyEmailTemplate; context: verifyEmailContext"></ng-container>
    <ng-template #defaultVerifyEmail let-email="email" let-goBackURL="goBackURL" let-verifyEmailTitleText="verifyEmailTitleText" let-verifyEmailConfirmationText="verifyEmailConfirmationText" let-verifyEmailGoBackText="verifyEmailGoBackText" let-signOutText="signOutText" let-sendNewVerificationEmailText="sendNewVerificationEmailText">
      <mat-card class="verify-email">
        <mat-card-content fxLayout="column" fxLayoutAlign="center center">
          <mat-icon>email</mat-icon>
          <p class="title" fxLayout="column" fxLayoutAlign="center center">
              <span class="mat-subheading-2">{{ verifyEmailTitleText }}</span>
              <span class="mat-body-2">{{ email }}</span>
            </p>
            <p class="subtitle">{{ verifyEmailConfirmationText }}</p>
            <mat-progress-bar *ngIf="isLoading" mode="indeterminate"></mat-progress-bar>
        </mat-card-content>
        <mat-card-actions fxLayout="column" fxLayoutAlign="center center">
          <button *ngIf="goBackURL" mat-stroked-button (click)="continue()" class="go-back-button action-button">
            {{ verifyEmailGoBackText }}
          </button>
          <button mat-stroked-button (click)="sendNewVerificationEmail()" class="send-new-mail-button action-button">{{ sendNewVerificationEmailText }}</button>
          <button mat-stroked-button color="warn" (click)="this.signOut.emit()" class="sign-out-button action-button">{{ signOutText }}</button>
        </mat-card-actions>
      </mat-card>
    </ng-template>
  `,
                styles: [`
    .material-icons{font-size:4rem}.verify-email{width:360px}.verify-email .mat-icon{height:4rem;width:4rem;color:#444}.verify-email .title{margin-top:16px}.verify-email .title .mat-subheading-2{margin-bottom:0}.verify-email .subtitle{margin:16px auto;text-align:justify}.verify-email p{display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0}.verify-email mat-card-actions{text-align:center;margin-top:1rem}.verify-email mat-card-actions .action-button{width:100%}.verify-email mat-card-actions .action-button+.action-button{margin-top:1rem}
  `],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
EmailConfirmationComponent.ctorParameters = () => [
    { type: AuthProcessService },
    { type: Router },
    { type: ChangeDetectorRef }
];
EmailConfirmationComponent.propDecorators = {
    email: [{ type: Input }],
    goBackURL: [{ type: Input }],
    verifyEmailTitleText: [{ type: Input }],
    verifyEmailConfirmationText: [{ type: Input }],
    verifyEmailGoBackText: [{ type: Input }],
    sendNewVerificationEmailText: [{ type: Input }],
    signOutText: [{ type: Input }],
    messageOnEmailConfirmationSuccess: [{ type: Input }],
    template: [{ type: Input }],
    signOut: [{ type: Output }],
    defaultTemplate: [{ type: ViewChild, args: ['defaultVerifyEmail', { static: true },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultAuthFirebaseUIConfig = {
    // authMethod: 'redirect',
    // authProviders: [new GoogleAuthProvider(), new FacebookAuthProvider(), new TwitterAuthProvider(), new GithubAuthProvider()],
    enableFirestoreSync: true,
    toastMessageOnAuthSuccess: true,
    toastMessageOnAuthError: true,
    authGuardFallbackURL: '/',
    authGuardLoggedInURL: '/',
    // Password length min/max in forms independently of each componenet min/max.
    // `min/max` input parameters in components should be within this range.
    passwordMaxLength: 60,
    passwordMinLength: 8,
    // Same as password but for the name
    nameMaxLength: 50,
    nameMinLength: 2,
    // If set, sign-in/up form is not available until email has been verified.
    // Plus protected routes are still protected even though user is connected.
    guardProtectedRoutesUntilEmailIsVerified: true
};
// Merge default config with user provided config.
/**
 * @param {?} userProvidedConfig
 * @return {?}
 */
function ngxAuthFirebaseUIConfigFactory(userProvidedConfig) {
    return Object.assign({}, defaultAuthFirebaseUIConfig, userProvidedConfig);
}

var __awaiter$6 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class NgxAuthFirebaseuiAvatarComponent {
    /**
     * @param {?} afa
     * @param {?} dialog
     */
    constructor(afa, dialog) {
        this.afa = afa;
        this.dialog = dialog;
        this.canLogout = true;
        this.onSignOut = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.user$ = this.afa.user;
        this.user$.subscribe((/**
         * @param {?} user
         * @return {?}
         */
        (user) => {
            this.user = user;
            this.displayNameInitials = user ? this.getDisplayNameInitials(user.displayName) : null;
        }));
    }
    /**
     * @param {?} displayName
     * @return {?}
     */
    getDisplayNameInitials(displayName) {
        if (!displayName) {
            return null;
        }
        /** @type {?} */
        const initialsRegExp = displayName.match(/\b\w/g) || [];
        /** @type {?} */
        const initials = ((initialsRegExp.shift() || '') + (initialsRegExp.pop() || '')).toUpperCase();
        return initials;
    }
    /**
     * @return {?}
     */
    openProfile() {
        this.dialog.open(UserComponent);
    }
    /**
     * @return {?}
     */
    signOut() {
        return __awaiter$6(this, void 0, void 0, function* () {
            try {
                yield this.afa.auth.signOut();
                // Sign-out successful.
                this.onSignOut.emit();
            }
            catch (e) {
                // An error happened.
                console.error('An error happened while signing out!', e);
            }
        });
    }
}
NgxAuthFirebaseuiAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-auth-firebaseui-avatar',
                template: `
    <button *ngIf="user"
            mat-mini-fab
            [matMenuTriggerFor]="posXMenu"
            aria-label="Open x-positioned menu"
            [style.background-image]="'url(' + user?.photoURL + ')'"
            style="background-size: cover"
            [matTooltip]="user?.displayName">
      <span *ngIf="user?.photoURL">{{displayNameInitials}}</span>
    </button>

    <mat-menu xPosition="before" #posXMenu="matMenu" class="before">
      <div fxLayout="row" fxLayout.xs="column" style="padding-left: 10px; padding-right: 10px">
        <button mat-fab
                [style.background-image]="'url(' + user?.photoURL + ')'"
                style="background-size: cover">
          <span *ngIf="user?.photoURL">{{displayNameInitials}}</span>
        </button>
        <div fxLayout="column" style="padding-left: 10px; padding-right: 10px">
          <strong mat-card-title>{{user?.displayName}}</strong>
          <em mat-card-subtitle style="font-style: italic">{{user?.email}}</em>
        </div>
      </div>

      <div fxLayout="column" fxFlex="100">
        <div class="links-menu" *ngFor="let menuItem of links">
          <button mat-menu-item (click)="menuItem?.callback()">
            <mat-icon>{{menuItem?.icon}}</mat-icon>{{menuItem?.text}}</button>
        </div>
        <button mat-raised-button fxLayoutAlign="center" color="primary" (click)="openProfile()">Profile
        </button>
        <button *ngIf="canLogout" mat-raised-button fxLayoutAlign="center" color="warn" (click)="signOut()">Sign Out
        </button>
      </div>
    </mat-menu>
  `,
                styles: [`
    .mat-raised-button{margin:.2rem 1rem}.links-menu{text-align:center}
  `]
            },] },
];
/** @nocollapse */
NgxAuthFirebaseuiAvatarComponent.ctorParameters = () => [
    { type: AngularFireAuth },
    { type: MatDialog }
];
NgxAuthFirebaseuiAvatarComponent.propDecorators = {
    canLogout: [{ type: Input }],
    links: [{ type: Input }],
    onSignOut: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class LoggedInGuard {
    /**
     * @param {?} config
     * @param {?} router
     * @param {?} authProcess
     */
    constructor(config, router, authProcess) {
        this.config = config;
        this.router = router;
        this.authProcess = authProcess;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        return this.authProcess.afa.user.pipe(map((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            if (user) {
                if (this.config.guardProtectedRoutesUntilEmailIsVerified && !user.emailVerified && !user.isAnonymous) {
                    if (this.config.authGuardFallbackURL) {
                        this.router.navigate([`${this.config.authGuardFallbackURL}`], { queryParams: { redirectUrl: state.url } });
                    }
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                if (this.config.authGuardFallbackURL) {
                    this.router.navigate([`/${this.config.authGuardFallbackURL}`], { queryParams: { redirectUrl: state.url } });
                }
                return false;
            }
        })));
    }

}
LoggedInGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LoggedInGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NgxAuthFirebaseUIConfigToken,] }] },
    { type: Router },
    { type: AuthProcessService }
];
/** @nocollapse */ LoggedInGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function LoggedInGuard_Factory() { return new LoggedInGuard(ɵɵinject(NgxAuthFirebaseUIConfigToken), ɵɵinject(Router), ɵɵinject(AuthProcessService)); }, token: LoggedInGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// This token is the official token containing the final configuration; ie. the merge between default and user provided configurations
/** @type {?} */
const NgxAuthFirebaseUIConfigToken = new InjectionToken('NgxAuthFirebaseUIConfigToken');
// This is an intermediate token containing only user-provided configuration
/** @type {?} */
const UserProvidedConfigToken = new InjectionToken('UserProvidedConfigToken');
class NgxAuthFirebaseUIModule {
    /**
     * @param {?} _iconRegistry
     * @param {?} _sanitizer
     * @param {?} _auth
     */
    constructor(_iconRegistry, _sanitizer, _auth) {
        this._iconRegistry = _iconRegistry;
        this._sanitizer = _sanitizer;
        _auth.listenToUserEvents();
        this.registerProviderIcons();
    }
    /**
     * @param {?} configFactory
     * @param {?=} appNameFactory
     * @param {?=} config
     * @return {?}
     */
    static forRoot(configFactory, appNameFactory, config = {}) {
        return {
            ngModule: NgxAuthFirebaseUIModule,
            providers: [
                {
                    provide: FirebaseOptionsToken,
                    useValue: configFactory
                },
                {
                    provide: FirebaseNameOrConfigToken,
                    useFactory: appNameFactory
                },
                { provide: UserProvidedConfigToken, useValue: config },
                {
                    provide: NgxAuthFirebaseUIConfigToken,
                    useFactory: ngxAuthFirebaseUIConfigFactory,
                    deps: [UserProvidedConfigToken]
                },
                AuthProcessService,
                FirestoreSyncService,
                LoggedInGuard
            ]
        };
    }
    /**
     * @return {?}
     */
    registerProviderIcons() {
        this._iconRegistry
            .addSvgIcon('google', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/google.svg'))
            .addSvgIcon('google-colored', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/google.svg'))
            .addSvgIcon('facebook', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/facebook.svg'))
            .addSvgIcon('twitter', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/twitter.svg'))
            .addSvgIcon('github', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/github-circle.svg'))
            .addSvgIcon('microsoft', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/microsoft.svg'))
            .addSvgIcon('yahoo', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/yahoo.svg'))
            .addSvgIcon('phone', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/phone.svg'));
    }
}
NgxAuthFirebaseUIModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    // HTTP
                    RouterModule,
                    HttpClientModule,
                    // FLEX_LAYOUT
                    FlexLayoutModule,
                    // FORMS
                    FormsModule,
                    ReactiveFormsModule,
                    // MATERIAL2
                    MatTabsModule,
                    MatCardModule,
                    MatInputModule,
                    MatButtonModule,
                    MatIconModule,
                    MatSnackBarModule,
                    MatDividerModule,
                    MatChipsModule,
                    MatTooltipModule,
                    MatDialogModule,
                    MatCheckboxModule,
                    MatProgressSpinnerModule,
                    MatProgressBarModule,
                    MatDialogModule,
                    MatMenuModule,
                    // ANGULAR MATERIAL EXTENSIONS
                    MatPasswordStrengthModule,
                    // ANGULARFIRE2
                    AngularFireAuthModule,
                    AngularFirestoreModule,
                ],
                exports: [
                    AuthComponent,
                    UserComponent,
                    NgxAuthFirebaseuiAvatarComponent,
                    AuthProvidersComponent,
                    EmailConfirmationComponent,
                    // LoggedInGuard,
                    AngularFireAuthModule,
                    AngularFirestoreModule,
                    NgxAuthFirebaseuiLoginComponent,
                    NgxAuthFirebaseuiRegisterComponent
                ],
                declarations: [
                    AuthComponent,
                    UserComponent,
                    NgxAuthFirebaseuiAvatarComponent,
                    AuthProvidersComponent,
                    EmailConfirmationComponent,
                    LegalityDialogComponent,
                    NgxAuthFirebaseuiLoginComponent,
                    NgxAuthFirebaseuiRegisterComponent
                ],
                entryComponents: [
                    UserComponent,
                    LegalityDialogComponent
                ]
            },] },
];
/** @nocollapse */
NgxAuthFirebaseUIModule.ctorParameters = () => [
    { type: MatIconRegistry },
    { type: DomSanitizer },
    { type: AuthProcessService }
];

export { AuthComponent, AuthProcessService, AuthProvider, AuthProvidersComponent, FirestoreSyncService, Layout, LegalityDialogComponent, LoggedInGuard, NgxAuthFirebaseUIConfigToken, NgxAuthFirebaseUIModule, NgxAuthFirebaseuiAvatarComponent, NgxAuthFirebaseuiLoginComponent, NgxAuthFirebaseuiRegisterComponent, Theme, UserComponent, UserProvidedConfigToken, defaultAuthFirebaseUIConfig as ɵa, ngxAuthFirebaseUIConfigFactory as ɵb, NgxAuthFirebaseuiAnimations as ɵc, EmailConfirmationComponent as ɵd };
//# sourceMappingURL=ngx-auth-firebaseui.js.map
