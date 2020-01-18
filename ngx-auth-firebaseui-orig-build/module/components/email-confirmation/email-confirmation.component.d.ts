import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProcessService } from './../../services/auth-process.service';
interface VerifyEmailContext {
    email: string;
    goBackURL: string;
    verifyEmailTitleText: string;
    verifyEmailConfirmationText: string;
    verifyEmailGoBackText: string;
    messageOnEmailConfirmationSuccess: string;
    messageOnError: string;
}
export declare class EmailConfirmationComponent implements OnInit, OnChanges {
    authProcess: AuthProcessService;
    private _router;
    private _cdr;
    email: string;
    goBackURL: string;
    verifyEmailTitleText: string;
    verifyEmailConfirmationText: string;
    verifyEmailGoBackText: string;
    sendNewVerificationEmailText: string;
    signOutText: string;
    messageOnEmailConfirmationSuccess: string;
    template: TemplateRef<any>;
    signOut: EventEmitter<{}>;
    verifyEmailTemplate: TemplateRef<any>;
    verifyEmailContext: VerifyEmailContext;
    isLoading: boolean;
    defaultTemplate: TemplateRef<any>;
    constructor(authProcess: AuthProcessService, _router: Router, _cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    continue(): Promise<void>;
    sendNewVerificationEmail(): Promise<void>;
    private createTemplateContext;
}
export {};
