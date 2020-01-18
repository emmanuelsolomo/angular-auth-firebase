import { EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldAppearance, MatSnackBar } from '@angular/material';
import { NgxAuthFirebaseUIConfig } from '../../ngx-auth-firebase-u-i.module';
import { AuthProcessService } from '../../services/auth-process.service';
import { FirestoreSyncService } from '../../services/firestore-sync.service';
export declare class UserComponent {
    auth: AngularFireAuth;
    authProcess: AuthProcessService;
    private _fireStoreService;
    private snackBar;
    config: NgxAuthFirebaseUIConfig;
    editMode: boolean;
    canLogout: boolean;
    canEditAccount: boolean;
    canDeleteAccount: boolean;
    appearance: MatFormFieldAppearance;
    onSignOut: EventEmitter<void>;
    onAccountEdited: EventEmitter<void>;
    onAccountDeleted: EventEmitter<void>;
    updateFormGroup: FormGroup;
    updateNameFormControl: FormControl;
    updateEmailFormControl: FormControl;
    updatePhoneNumberFormControl: FormControl;
    updatePasswordFormControl: FormControl;
    constructor(auth: AngularFireAuth, authProcess: AuthProcessService, _fireStoreService: FirestoreSyncService, snackBar: MatSnackBar, config: NgxAuthFirebaseUIConfig);
    protected initUpdateFormGroup(): void;
    changeEditMode(): void;
    reset(): void;
    save(): Promise<void>;
    signOut(): void;
    /**
     * Delete the account of the current firebase ngx-auth-firebaseui-user
     *
     * On Success, emit the <onAccountDeleted> event and toast a msg!#
     * Otherwise, log the and toast and error msg!
     *
     */
    deleteAccount(): Promise<void>;
}
