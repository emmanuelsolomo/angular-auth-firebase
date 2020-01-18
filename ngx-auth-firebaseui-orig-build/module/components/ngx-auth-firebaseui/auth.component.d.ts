import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AbstractControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MatFormFieldAppearance, MatTabChangeEvent, MatTabGroup, ThemePalette } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { LegalityDialogComponent } from '../../components/legality-dialog/legality-dialog.component';
import { NgxAuthFirebaseUIConfig } from '../../ngx-auth-firebase-u-i.module';
import { AuthProcessService, AuthProvider, messageOnAuthErrorType } from '../../services/auth-process.service';
import { Theme } from '../providers/auth.providers.component';
import { MatPasswordStrengthComponent } from '@angular-material-extensions/password-strength';
export declare const EMAIL_REGEX: RegExp;
export declare const PHONE_NUMBER_REGEX: RegExp;
export declare class AuthComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    private platformId;
    auth: AngularFireAuth;
    authProcess: AuthProcessService;
    dialog: MatDialog;
    config: NgxAuthFirebaseUIConfig;
    private _activatedRoute;
    private _cdr;
    matTabGroup: MatTabGroup;
    passwordStrength: MatPasswordStrengthComponent;
    isLoading: boolean;
    providers: AuthProvider[] | AuthProvider;
    providersTheme: Theme;
    appearance: MatFormFieldAppearance;
    tabIndex: number | null;
    registrationEnabled: boolean;
    resetPasswordEnabled: boolean;
    guestEnabled: boolean;
    tosUrl: string;
    privacyPolicyUrl: string;
    goBackURL: string;
    messageOnAuthSuccess: string;
    messageOnAuthError: messageOnAuthErrorType;
    messageOnEmailConfirmationSuccess: string;
    onSuccess: any;
    onError: any;
    selectedTabChange: EventEmitter<MatTabChangeEvent>;
    enableLengthRule: boolean;
    enableLowerCaseLetterRule: boolean;
    enableUpperCaseLetterRule: boolean;
    enableDigitRule: boolean;
    enableSpecialCharRule: boolean;
    min: number;
    max: number;
    customValidator: RegExp;
    onStrengthChanged: EventEmitter<number>;
    verifyEmailTemplate: TemplateRef<any>;
    verifyEmailTitleText: string;
    verifyEmailConfirmationText: string;
    verifyEmailGoBackText: string;
    sendNewVerificationEmailText: string;
    signOutText: string;
    resetPasswordTabText: string;
    resetPasswordInputText: string;
    resetPasswordErrorRequiredText: string;
    resetPasswordErrorPatternText: string;
    resetPasswordActionButtonText: string;
    resetPasswordInstructionsText: string;
    signInTabText: string;
    signInCardTitleText: string;
    loginButtonText: string;
    forgotPasswordButtonText: string;
    nameText: string;
    nameErrorRequiredText: string;
    nameErrorMinLengthText: string;
    nameErrorMaxLengthText: string;
    emailText: string;
    emailErrorRequiredText: string;
    emailErrorPatternText: string;
    passwordText: string;
    passwordErrorRequiredText: string;
    passwordErrorMinLengthText: string;
    passwordErrorMaxLengthText: string;
    registerTabText: string;
    registerCardTitleText: string;
    registerButtonText: string;
    guestButtonText: string;
    emailConfirmationTitle: string;
    emailConfirmationText: string;
    authProvider: typeof AuthProvider;
    passwordResetWished: boolean;
    signInFormGroup: FormGroup;
    signUpFormGroup: FormGroup;
    resetPasswordFormGroup: FormGroup;
    onErrorSubscription: Subscription;
    authenticationError: boolean;
    passReset: boolean;
    dialogRef: MatDialogRef<LegalityDialogComponent>;
    authProviders: typeof AuthProvider;
    signInEmailFormControl: AbstractControl;
    sigInPasswordFormControl: AbstractControl;
    sigUpNameFormControl: AbstractControl;
    sigUpEmailFormControl: AbstractControl;
    sigUpPasswordFormControl: AbstractControl;
    sigUpPasswordConfirmationFormControl: AbstractControl;
    resetPasswordEmailFormControl: AbstractControl;
    constructor(platformId: Object, auth: AngularFireAuth, authProcess: AuthProcessService, dialog: MatDialog, config: NgxAuthFirebaseUIConfig, _activatedRoute: ActivatedRoute, _cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onTabChange(event: MatTabChangeEvent): void;
    signOut(): Promise<void>;
    signIn(): Promise<void>;
    readonly color: string | ThemePalette;
    updateAuthSnackbarMessages(): void;
    createForgotPasswordTab(): void;
    processLegalSignUP(authProvider?: AuthProvider): void;
    signUp(): Promise<void>;
    signUpAnonymously(): Promise<void>;
    resetPassword(): void;
    private chooseBackUrl;
    private _initSignInFormGroupBuilder;
    private _initSignUpFormGroupBuilder;
    private _initResetPasswordFormGroupBuilder;
    private _afterSignUpMiddleware;
}
