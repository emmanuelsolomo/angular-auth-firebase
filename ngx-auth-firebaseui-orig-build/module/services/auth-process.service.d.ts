import { EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import '@firebase/auth';
import { User, UserInfo } from 'firebase/app';
import { Observable } from 'rxjs';
import { NgxAuthFirebaseUIConfig } from '../interfaces/config.interface';
import { ICredentials, ISignInProcess, ISignUpProcess } from '../interfaces/main.interface';
import { FirestoreSyncService } from './firestore-sync.service';
import UserCredential = firebase.auth.UserCredential;
export declare const facebookAuthProvider: import("@firebase/auth-types").FacebookAuthProvider;
export declare const googleAuthProvider: import("@firebase/auth-types").GoogleAuthProvider;
export declare const twitterAuthProvider: import("@firebase/auth-types").TwitterAuthProvider;
export declare const githubAuthProvider: import("@firebase/auth-types").GithubAuthProvider;
export declare const microsoftAuthProvider: import("@firebase/auth-types").OAuthProvider;
export declare const yahooAuthProvider: import("@firebase/auth-types").OAuthProvider;
export declare enum AuthProvider {
    ALL = "all",
    ANONYMOUS = "anonymous",
    EmailAndPassword = "firebase",
    Google = "google",
    Facebook = "facebook",
    Twitter = "twitter",
    Github = "github",
    Microsoft = "microsoft",
    Yahoo = "yahoo",
    PhoneNumber = "phoneNumber"
}
export declare type getErrorMessageType = (error: any) => string;
export declare type messageOnAuthErrorType = string | getErrorMessageType;
export declare class AuthProcessService implements ISignInProcess, ISignUpProcess {
    afa: AngularFireAuth;
    config: NgxAuthFirebaseUIConfig;
    private _snackBar;
    private _fireStoreService;
    private _matSnackBarConfig;
    router: Router;
    onSuccessEmitter: EventEmitter<any>;
    onErrorEmitter: EventEmitter<any>;
    user$: Observable<User>;
    user: User;
    messageOnAuthSuccess: string;
    messageOnAuthError: messageOnAuthErrorType;
    emailConfirmationSent: boolean;
    emailToConfirm: string;
    constructor(afa: AngularFireAuth, config: NgxAuthFirebaseUIConfig, _snackBar: MatSnackBar, _fireStoreService: FirestoreSyncService, _matSnackBarConfig: MatSnackBarConfig, router: Router);
    listenToUserEvents(): void;
    /**
     * Reset the password of the ngx-auth-firebaseui-user via email
     *
     * @param email - the email to reset
     * @returns
     */
    resetPassword(email: string): Promise<void>;
    /**
     * General sign in mechanism to authenticate the users with a firebase project
     * using a traditional way, via username and password or by using an authentication provider
     * like google, facebook, twitter and github
     *
     * @param provider - the provider to authenticate with (google, facebook, twitter, github)
     * @param credentials
     * @returns
     */
    signInWith(provider: AuthProvider, credentials?: ICredentials): Promise<void>;
    /**
     * Sign up new users via email and password.
     * After that the ngx-auth-firebaseui-user should verify and confirm an email sent via the firebase
     *
     * @param displayName - the displayName if the new ngx-auth-firebaseui-user
     * @param credentials
     * @returns
     */
    signUp(displayName: string, credentials: ICredentials): Promise<void>;
    sendNewVerificationEmail(): Promise<void>;
    signOut(): Promise<void>;
    /**
     * Update the profile (name + photo url) of the authenticated ngx-auth-firebaseui-user in the
     * firebase authentication feature (not in firestore)
     *
     * @param name - the new name of the authenticated ngx-auth-firebaseui-user
     * @param photoURL - the new photo url of the authenticated ngx-auth-firebaseui-user
     * @returns
     */
    updateProfile(name: string, photoURL: string): Promise<any>;
    deleteAccount(): Promise<any>;
    parseUserInfo(user: User): UserInfo;
    getUserPhotoUrl(): string;
    getPhotoPath(image: string): string;
    signInWithPhoneNumber(): void;
    handleSuccess(userCredential: UserCredential): Promise<void>;
    handleError(error: any): void;
    reloadUserInfo(): Promise<void>;
    getMessageOnAuthError(error: any): string;
    showToast(message: string): void;
    showErrorToast(error: any): void;
    notifyError(error: any): void;
}
