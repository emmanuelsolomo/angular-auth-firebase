import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { MatFormFieldAppearance, ThemePalette } from '@angular/material';
import { Subscription } from 'rxjs';
import { AuthProcessService } from '../../services/auth-process.service';
export declare const confirmPasswordValidator: ValidatorFn;
export declare class NgxAuthFirebaseuiRegisterComponent implements OnInit, OnDestroy {
    private platformId;
    private _formBuilder;
    authProcess: AuthProcessService;
    logoUrl: string;
    appearance: MatFormFieldAppearance;
    tosUrl: string;
    privacyPolicyUrl: string;
    titleText: string;
    readAncAcceptText: string;
    termsAndConditionsText: string;
    createAccountButtonText: string;
    alreadyHaveAccountText: string;
    loginButtonText: string;
    nameText: string;
    nameErrorRequiredText: string;
    emailText: string;
    emailErrorRequiredText: string;
    emailErrorPatternText: string;
    passwordText: string;
    passwordErrorRequiredText: string;
    passwordConfirmationText: string;
    passwordConfirmationErrorRequiredText: string;
    passwordErrorMatchText: string;
    onSuccess: any;
    onError: any;
    onLoginRequested: EventEmitter<void>;
    registerForm: FormGroup;
    onErrorSubscription: Subscription;
    authenticationError: boolean;
    private _unsubscribeAll;
    constructor(platformId: Object, _formBuilder: FormBuilder, authProcess: AuthProcessService);
    readonly color: string | ThemePalette;
    readonly colorAccent: string | ThemePalette;
    ngOnInit(): void;
    /**
     * On destroy
     */
    ngOnDestroy(): void;
    createAccount(): Promise<void>;
}
