import { EventEmitter, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
export interface LinkMenuItem {
    text: string;
    icon?: string;
    callback?: Function;
}
export declare class NgxAuthFirebaseuiAvatarComponent implements OnInit {
    afa: AngularFireAuth;
    dialog: MatDialog;
    canLogout: boolean;
    links: LinkMenuItem[];
    onSignOut: EventEmitter<void>;
    user: User;
    user$: Observable<User | null>;
    displayNameInitials: string;
    constructor(afa: AngularFireAuth, dialog: MatDialog);
    ngOnInit(): void;
    getDisplayNameInitials(displayName: string): string;
    openProfile(): void;
    signOut(): Promise<void>;
}
