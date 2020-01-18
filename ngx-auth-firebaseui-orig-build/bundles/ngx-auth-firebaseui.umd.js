(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/common/http'), require('@angular/router'), require('@angular/flex-layout'), require('@angular/fire'), require('@angular/fire/auth'), require('@angular/fire/firestore'), require('@angular/material/button'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/menu'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/snack-bar'), require('@angular/material/tabs'), require('@angular/material/tooltip'), require('@angular-material-extensions/password-strength'), require('@angular/material'), require('@firebase/app'), require('@firebase/auth'), require('lodash'), require('rxjs/operators'), require('@angular/animations'), require('rxjs'), require('rxjs/internal/operators'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/common/http', '@angular/router', '@angular/flex-layout', '@angular/fire', '@angular/fire/auth', '@angular/fire/firestore', '@angular/material/button', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/dialog', '@angular/material/divider', '@angular/material/icon', '@angular/material/input', '@angular/material/menu', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/snack-bar', '@angular/material/tabs', '@angular/material/tooltip', '@angular-material-extensions/password-strength', '@angular/material', '@firebase/app', '@firebase/auth', 'lodash', 'rxjs/operators', '@angular/animations', 'rxjs', 'rxjs/internal/operators', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global.ngxAuthFirebaseui = {}, global.ng.common, global.ng.core, global.ng.forms, global.ng['common,http'], global.ng.router, global.ng.flexLayout, global.ng.fire, global.ng.fire.auth, global.ng.fire.firestore, global.ng.material.button, global.ng.material.card, global.ng.material.checkbox, global.ng.material.chips, global.ng.material.dialog, global.ng.material.divider, global.ng.material.icon, global.ng.material.input, global.ng.material.menu, global.ng.material['progress-bar'], global.ng.material['progress-spinner'], global.ng.material['snack-bar'], global.ng.material.tabs, global.ng.material.tooltip, global.passwordStrength, global.ng.material, global.firebaseApp, null, global.lodash, global.rxjsOperators, global.ng.animations, global.rxjs, global.operators$1, global.ng.platformBrowser));
}(this, function (exports, common, i0, forms, http, i2, flexLayout, fire, i2$1, i2$2, button, card, checkbox, chips, dialog, divider, icon, input, menu, progressBar, progressSpinner, i3, tabs, tooltip, passwordStrength, material, app, auth, lodash, operators, animations, rxjs, operators$1, platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var Accounts = {
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
    var collections = {
        users: 'users',
    };
    var FirestoreSyncService = /** @class */ (function () {
        function FirestoreSyncService$1(afs) {
            this.afs = afs;
            // this.afs.firestore.settings({timestampsInSnapshots: true});
        }
        // get timestamp() {
        //     return firebase.firestore.FieldValue.serverTimestamp();
        // }
        // get timestamp() {
        //     return firebase.firestore.FieldValue.serverTimestamp();
        // }
        /**
         * @param {?} uid
         * @return {?}
         */
        FirestoreSyncService$1.prototype.getUserDocRefByUID = 
        // get timestamp() {
        //     return firebase.firestore.FieldValue.serverTimestamp();
        // }
        /**
         * @param {?} uid
         * @return {?}
         */
        function (uid) {
            return this.afs.doc(collections.users + "/" + uid);
        };
        /**
         * @param {?} uid
         * @return {?}
         */
        FirestoreSyncService$1.prototype.deleteUserData = /**
         * @param {?} uid
         * @return {?}
         */
        function (uid) {
            /** @type {?} */
            var userRef = this.getUserDocRefByUID(uid);
            return userRef.delete();
        };
        /**
         * @param {?} user
         * @return {?}
         */
        FirestoreSyncService$1.prototype.updateUserData = /**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            // Sets user$ data to firestore on login
            /** @type {?} */
            var userRef = this.getUserDocRefByUID(user.uid);
            /** @type {?} */
            var data = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                phoneNumber: user.phoneNumber,
                providerId: user.providerId
            };
            return userRef.set(data, { merge: true });
        };
        FirestoreSyncService$1.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        FirestoreSyncService$1.ctorParameters = function () { return [
            { type: i2$2.AngularFirestore }
        ]; };
        /** @nocollapse */ FirestoreSyncService$1.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FirestoreSyncService_Factory() { return new FirestoreSyncService(i0.ɵɵinject(i2$2.AngularFirestore)); }, token: FirestoreSyncService, providedIn: "root" });
        return FirestoreSyncService$1;
    }());

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    /** @type {?} */
    var facebookAuthProvider = new app.firebase.auth.FacebookAuthProvider();
    /** @type {?} */
    var googleAuthProvider = new app.firebase.auth.GoogleAuthProvider();
    /** @type {?} */
    var twitterAuthProvider = new app.firebase.auth.TwitterAuthProvider();
    /** @type {?} */
    var githubAuthProvider = new app.firebase.auth.GithubAuthProvider();
    /** @type {?} */
    var microsoftAuthProvider = new app.firebase.auth.OAuthProvider('microsoft.com');
    /** @type {?} */
    var yahooAuthProvider = new app.firebase.auth.OAuthProvider('yahoo.com');
    /** @enum {string} */
    var AuthProvider = {
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
    var AuthProcessService = /** @class */ (function () {
        function AuthProcessService$1(afa, config, _snackBar, _fireStoreService, _matSnackBarConfig) {
            this.afa = afa;
            this.config = config;
            this._snackBar = _snackBar;
            this._fireStoreService = _fireStoreService;
            this._matSnackBarConfig = _matSnackBarConfig;
            this.onSuccessEmitter = new i0.EventEmitter();
            this.onErrorEmitter = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        AuthProcessService$1.prototype.listenToUserEvents = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.user$ = this.afa.user.pipe(operators.tap((/**
             * @param {?} user
             * @return {?}
             */
            function (user) {
                _this.user = user;
            })));
        };
        /**
         * Reset the password of the ngx-auth-firebaseui-user via email
         *
         * @param email - the email to reset
         * @returns
         */
        /**
         * Reset the password of the ngx-auth-firebaseui-user via email
         *
         * @param {?} email - the email to reset
         * @return {?}
         */
        AuthProcessService$1.prototype.resetPassword = /**
         * Reset the password of the ngx-auth-firebaseui-user via email
         *
         * @param {?} email - the email to reset
         * @return {?}
         */
        function (email) {
            var _this = this;
            return this.afa.auth.sendPasswordResetEmail(email)
                .then((/**
             * @return {?}
             */
            function () { return console.log('Password reset email sent'); }))
                .catch((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return _this.notifyError(error); }));
        };
        /**
         * General sign in mechanism to authenticate the users with a firebase project
         * using a traditional way, via username and password or by using an authentication provider
         * like google, facebook, twitter and github
         *
         * @param provider - the provider to authenticate with (google, facebook, twitter, github)
         * @param credentials
         * @returns
         */
        /**
         * General sign in mechanism to authenticate the users with a firebase project
         * using a traditional way, via username and password or by using an authentication provider
         * like google, facebook, twitter and github
         *
         * @param {?} provider - the provider to authenticate with (google, facebook, twitter, github)
         * @param {?=} credentials
         * @return {?}
         */
        AuthProcessService$1.prototype.signInWith = /**
         * General sign in mechanism to authenticate the users with a firebase project
         * using a traditional way, via username and password or by using an authentication provider
         * like google, facebook, twitter and github
         *
         * @param {?} provider - the provider to authenticate with (google, facebook, twitter, github)
         * @param {?=} credentials
         * @return {?}
         */
        function (provider, credentials) {
            return __awaiter(this, void 0, void 0, function () {
                var signInResult, _a, err_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 21, , 22]);
                            signInResult = void 0;
                            _a = provider;
                            switch (_a) {
                                case AuthProvider.ANONYMOUS: return [3 /*break*/, 1];
                                case AuthProvider.EmailAndPassword: return [3 /*break*/, 3];
                                case AuthProvider.Google: return [3 /*break*/, 5];
                                case AuthProvider.Facebook: return [3 /*break*/, 7];
                                case AuthProvider.Twitter: return [3 /*break*/, 9];
                                case AuthProvider.Github: return [3 /*break*/, 11];
                                case AuthProvider.Microsoft: return [3 /*break*/, 13];
                                case AuthProvider.Yahoo: return [3 /*break*/, 15];
                                case AuthProvider.PhoneNumber: return [3 /*break*/, 17];
                            }
                            return [3 /*break*/, 18];
                        case 1: return [4 /*yield*/, this.afa.auth.signInAnonymously()];
                        case 2:
                            signInResult = (/** @type {?} */ (_b.sent()));
                            return [3 /*break*/, 19];
                        case 3: return [4 /*yield*/, this.afa.auth.signInWithEmailAndPassword(credentials.email, credentials.password)];
                        case 4:
                            signInResult = (/** @type {?} */ (_b.sent()));
                            return [3 /*break*/, 19];
                        case 5: return [4 /*yield*/, this.afa.auth.signInWithPopup(googleAuthProvider)];
                        case 6:
                            signInResult = (/** @type {?} */ (_b.sent()));
                            return [3 /*break*/, 19];
                        case 7: return [4 /*yield*/, this.afa.auth.signInWithPopup(facebookAuthProvider)];
                        case 8:
                            signInResult = (/** @type {?} */ (_b.sent()));
                            return [3 /*break*/, 19];
                        case 9: return [4 /*yield*/, this.afa.auth.signInWithPopup(twitterAuthProvider)];
                        case 10:
                            signInResult = (/** @type {?} */ (_b.sent()));
                            return [3 /*break*/, 19];
                        case 11: return [4 /*yield*/, this.afa.auth.signInWithPopup(githubAuthProvider)];
                        case 12:
                            signInResult = (/** @type {?} */ (_b.sent()));
                            return [3 /*break*/, 19];
                        case 13: return [4 /*yield*/, this.afa.auth.signInWithPopup(microsoftAuthProvider)];
                        case 14:
                            signInResult = (/** @type {?} */ (_b.sent()));
                            return [3 /*break*/, 19];
                        case 15: return [4 /*yield*/, this.afa.auth.signInWithPopup(yahooAuthProvider)];
                        case 16:
                            signInResult = (/** @type {?} */ (_b.sent()));
                            return [3 /*break*/, 19];
                        case 17: 
                        // coming soon - see feature/sms branch
                        return [3 /*break*/, 19];
                        case 18: throw new Error(AuthProvider[provider] + " is not available as auth provider");
                        case 19: return [4 /*yield*/, this.handleSuccess(signInResult)];
                        case 20:
                            _b.sent();
                            return [3 /*break*/, 22];
                        case 21:
                            err_1 = _b.sent();
                            this.handleError(err_1);
                            return [3 /*break*/, 22];
                        case 22: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Sign up new users via email and password.
         * After that the ngx-auth-firebaseui-user should verify and confirm an email sent via the firebase
         *
         * @param displayName - the displayName if the new ngx-auth-firebaseui-user
         * @param credentials
         * @returns
         */
        /**
         * Sign up new users via email and password.
         * After that the ngx-auth-firebaseui-user should verify and confirm an email sent via the firebase
         *
         * @param {?} displayName - the displayName if the new ngx-auth-firebaseui-user
         * @param {?} credentials
         * @return {?}
         */
        AuthProcessService$1.prototype.signUp = /**
         * Sign up new users via email and password.
         * After that the ngx-auth-firebaseui-user should verify and confirm an email sent via the firebase
         *
         * @param {?} displayName - the displayName if the new ngx-auth-firebaseui-user
         * @param {?} credentials
         * @return {?}
         */
        function (displayName, credentials) {
            return __awaiter(this, void 0, void 0, function () {
                var userCredential, user, err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 7, , 8]);
                            return [4 /*yield*/, this.afa.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)];
                        case 1:
                            userCredential = _a.sent();
                            user = userCredential.user;
                            return [4 /*yield*/, this.updateProfile(displayName, user.photoURL)];
                        case 2:
                            _a.sent();
                            if (!this.config.enableFirestoreSync) return [3 /*break*/, 4];
                            return [4 /*yield*/, this._fireStoreService
                                    .getUserDocRefByUID(user.uid)
                                    .set((/** @type {?} */ ({
                                    uid: user.uid,
                                    displayName: displayName,
                                    email: user.email,
                                    photoURL: user.photoURL
                                })))];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [4 /*yield*/, user.sendEmailVerification()];
                        case 5:
                            _a.sent();
                            // Legacy fields
                            this.emailConfirmationSent = true;
                            this.emailToConfirm = credentials.email;
                            return [4 /*yield*/, this.handleSuccess(userCredential)];
                        case 6:
                            _a.sent();
                            return [3 /*break*/, 8];
                        case 7:
                            err_2 = _a.sent();
                            this.handleError(err_2);
                            return [3 /*break*/, 8];
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        AuthProcessService$1.prototype.sendNewVerificationEmail = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!this.user) {
                        return [2 /*return*/, Promise.reject(new Error('No signed in user'))];
                    }
                    return [2 /*return*/, this.user.sendEmailVerification()];
                });
            });
        };
        /**
         * @return {?}
         */
        AuthProcessService$1.prototype.signOut = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.afa.auth.signOut()];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            this.notifyError(error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Update the profile (name + photo url) of the authenticated ngx-auth-firebaseui-user in the
         * firebase authentication feature (not in firestore)
         *
         * @param name - the new name of the authenticated ngx-auth-firebaseui-user
         * @param photoURL - the new photo url of the authenticated ngx-auth-firebaseui-user
         * @returns
         */
        /**
         * Update the profile (name + photo url) of the authenticated ngx-auth-firebaseui-user in the
         * firebase authentication feature (not in firestore)
         *
         * @param {?} name - the new name of the authenticated ngx-auth-firebaseui-user
         * @param {?} photoURL - the new photo url of the authenticated ngx-auth-firebaseui-user
         * @return {?}
         */
        AuthProcessService$1.prototype.updateProfile = /**
         * Update the profile (name + photo url) of the authenticated ngx-auth-firebaseui-user in the
         * firebase authentication feature (not in firestore)
         *
         * @param {?} name - the new name of the authenticated ngx-auth-firebaseui-user
         * @param {?} photoURL - the new photo url of the authenticated ngx-auth-firebaseui-user
         * @return {?}
         */
        function (name, photoURL) {
            return this.afa.auth.currentUser.updateProfile({ displayName: name, photoURL: photoURL });
        };
        /**
         * @return {?}
         */
        AuthProcessService$1.prototype.deleteAccount = /**
         * @return {?}
         */
        function () {
            return this.afa.auth.currentUser.delete();
        };
        /**
         * @param {?} user
         * @return {?}
         */
        AuthProcessService$1.prototype.parseUserInfo = /**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            return {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                photoURL: user.photoURL,
                providerId: user.providerData.length > 0 ? user.providerData[0].providerId : null
            };
        };
        /**
         * @return {?}
         */
        AuthProcessService$1.prototype.getUserPhotoUrl = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var user = this.afa.auth.currentUser;
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
        };
        /**
         * @param {?} image
         * @return {?}
         */
        AuthProcessService$1.prototype.getPhotoPath = /**
         * @param {?} image
         * @return {?}
         */
        function (image) {
            return "assets/user/" + image + ".svg";
        };
        /**
         * @return {?}
         */
        AuthProcessService$1.prototype.signInWithPhoneNumber = /**
         * @return {?}
         */
        function () {
            // todo: 3.1.18
        };
        /**
         * @param {?} userCredential
         * @return {?}
         */
        AuthProcessService$1.prototype.handleSuccess = /**
         * @param {?} userCredential
         * @return {?}
         */
        function (userCredential) {
            return __awaiter(this, void 0, void 0, function () {
                var e_1, fallbackMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.onSuccessEmitter.next(userCredential.user);
                            if (!this.config.enableFirestoreSync) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this._fireStoreService.updateUserData(this.parseUserInfo(userCredential.user))];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            console.error("Error occurred while updating user data with firestore: " + e_1);
                            return [3 /*break*/, 4];
                        case 4:
                            if (this.config.toastMessageOnAuthSuccess) {
                                fallbackMessage = "Hello " + (userCredential.user.displayName ? userCredential.user.displayName : '') + "!";
                                this.showToast(this.messageOnAuthSuccess || fallbackMessage);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} error
         * @return {?}
         */
        AuthProcessService$1.prototype.handleError = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            this.notifyError(error);
            console.error(error);
        };
        // Refresh user info. Can be useful for instance to get latest status regarding email verification.
        // Refresh user info. Can be useful for instance to get latest status regarding email verification.
        /**
         * @return {?}
         */
        AuthProcessService$1.prototype.reloadUserInfo = 
        // Refresh user info. Can be useful for instance to get latest status regarding email verification.
        /**
         * @return {?}
         */
        function () {
            return this.user.reload();
        };
        // Search for an error message.
        // Consumers of this library are given the possibility to provide a function in case they want to instrument message based on error properties.
        // Search for an error message.
        // Consumers of this library are given the possibility to provide a function in case they want to instrument message based on error properties.
        /**
         * @param {?} error
         * @return {?}
         */
        AuthProcessService$1.prototype.getMessageOnAuthError = 
        // Search for an error message.
        // Consumers of this library are given the possibility to provide a function in case they want to instrument message based on error properties.
        /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            /** @type {?} */
            var message;
            /** @type {?} */
            var fallbackMessage = 'Sorry, something went wrong. Please retry later.';
            if (lodash.isFunction(this.messageOnAuthError)) {
                message = this.messageOnAuthError(error);
            }
            else {
                message = this.messageOnAuthError || fallbackMessage;
            }
            return message;
        };
        // Show a toast using current snackbar config. If message is empty, no toast is displayed allowing to opt-out when needed.
        // Default MatSnackBarConfig has no duration, meaning it stays visible forever.
        // If that's the case, an action button is added to allow the end-user to dismiss the toast.
        // Show a toast using current snackbar config. If message is empty, no toast is displayed allowing to opt-out when needed.
        // Default MatSnackBarConfig has no duration, meaning it stays visible forever.
        // If that's the case, an action button is added to allow the end-user to dismiss the toast.
        /**
         * @param {?} message
         * @return {?}
         */
        AuthProcessService$1.prototype.showToast = 
        // Show a toast using current snackbar config. If message is empty, no toast is displayed allowing to opt-out when needed.
        // Default MatSnackBarConfig has no duration, meaning it stays visible forever.
        // If that's the case, an action button is added to allow the end-user to dismiss the toast.
        /**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            if (message) {
                this._snackBar.open(message, this._matSnackBarConfig.duration ? null : 'OK');
            }
        };
        /**
         * @param {?} error
         * @return {?}
         */
        AuthProcessService$1.prototype.showErrorToast = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            if (this.config.toastMessageOnAuthError) {
                this.showToast(this.getMessageOnAuthError(error));
            }
        };
        /**
         * @param {?} error
         * @return {?}
         */
        AuthProcessService$1.prototype.notifyError = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            this.onErrorEmitter.emit(error);
            this.showErrorToast(error);
        };
        AuthProcessService$1.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        AuthProcessService$1.ctorParameters = function () { return [
            { type: i2$1.AngularFireAuth },
            { type: undefined, decorators: [{ type: i0.Inject, args: [i0.forwardRef((/**
                             * @return {?}
                             */
                            function () { return NgxAuthFirebaseUIConfigToken; })),] }] },
            { type: material.MatSnackBar },
            { type: FirestoreSyncService },
            { type: material.MatSnackBarConfig, decorators: [{ type: i0.Inject, args: [material.MAT_SNACK_BAR_DEFAULT_OPTIONS,] }] }
        ]; };
        /** @nocollapse */ AuthProcessService$1.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthProcessService_Factory() { return new AuthProcessService(i0.ɵɵinject(i2$1.AngularFireAuth), i0.ɵɵinject(NgxAuthFirebaseUIConfigToken), i0.ɵɵinject(i3.MatSnackBar), i0.ɵɵinject(FirestoreSyncService), i0.ɵɵinject(i3.MAT_SNACK_BAR_DEFAULT_OPTIONS)); }, token: AuthProcessService, providedIn: "root" });
        return AuthProcessService$1;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var customAnimation = animations.animation([
        animations.style({
            opacity: '{{opacity}}',
            transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
        }),
        animations.animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', animations.style('*'))
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
    var NgxAuthFirebaseuiAnimations = [
        animations.trigger('animate', [animations.transition('void => *', [animations.useAnimation(customAnimation)])]),
        animations.trigger('animateStagger', [
            animations.state('50', animations.style('*')),
            animations.state('100', animations.style('*')),
            animations.state('200', animations.style('*')),
            animations.transition('void => 50', animations.query('@*', [animations.stagger('50ms', [animations.animateChild()])], { optional: true })),
            animations.transition('void => 100', animations.query('@*', [animations.stagger('100ms', [animations.animateChild()])], { optional: true })),
            animations.transition('void => 200', animations.query('@*', [animations.stagger('200ms', [animations.animateChild()])], { optional: true }))
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
    var __generator$1 = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var NgxAuthFirebaseuiLoginComponent = /** @class */ (function () {
        function NgxAuthFirebaseuiLoginComponent(platformId, authProcess, _formBuilder) {
            this.platformId = platformId;
            this.authProcess = authProcess;
            this._formBuilder = _formBuilder;
            this.providers = AuthProvider.ALL; //  google, facebook, twitter, github as array or all as one single string
            this.registrationEnabled = true;
            this.resetPasswordEnabled = true;
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
            this.onCreateAccountRequested = new i0.EventEmitter();
            this.onResetPasswordRequested = new i0.EventEmitter();
            this.authProviders = AuthProvider;
            this.authenticationError = false;
            this.onSuccess = authProcess.onSuccessEmitter;
            this.onError = authProcess.onErrorEmitter;
        }
        Object.defineProperty(NgxAuthFirebaseuiLoginComponent.prototype, "color", {
            get: /**
             * @return {?}
             */
            function () {
                return this.authenticationError ? 'warn' : 'primary';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxAuthFirebaseuiLoginComponent.prototype, "colorAccent", {
            get: /**
             * @return {?}
             */
            function () {
                return this.authenticationError ? 'warn' : 'accent';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxAuthFirebaseuiLoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                this.onErrorSubscription = this.onError.subscribe((/**
                 * @return {?}
                 */
                function () { return _this.authenticationError = true; }));
            }
            this.updateAuthSnackbarMessages();
            this.loginForm = this._formBuilder.group({
                email: ['', [forms.Validators.required, forms.Validators.email]],
                password: ['', forms.Validators.required]
            });
        };
        /**
         * @return {?}
         */
        NgxAuthFirebaseuiLoginComponent.prototype.updateAuthSnackbarMessages = /**
         * @return {?}
         */
        function () {
            this.authProcess.messageOnAuthSuccess = this.messageOnAuthSuccess;
            this.authProcess.messageOnAuthError = this.messageOnAuthError;
        };
        /**
         * @return {?}
         */
        NgxAuthFirebaseuiLoginComponent.prototype.login = /**
         * @return {?}
         */
        function () {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.authProcess.signInWith(this.authProviders.EmailAndPassword, {
                                email: this.loginForm.get('email').value,
                                password: this.loginForm.get('password').value
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        NgxAuthFirebaseuiLoginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-auth-firebaseui-login',
                        template: "\n    <div id=\"login\" fxLayout=\"column\">\n\n      <div id=\"login-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"login-form\" [@animateStagger]=\"{ value: '50' }\">\n\n          <div *ngIf=\"logoUrl\" class=\"logo\">\n            <img [src]=\"logoUrl\" alt=\"logo\" [@animate]=\"{ value: '*', params: { x: '50px' } }\">\n          </div>\n\n          <div class=\"title\" [@animate]=\"{ value: '*', params: { x: '-50px' } }\">{{titleText}}</div>\n\n          <form name=\"loginForm\" [formGroup]=\"loginForm\" novalidate\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <mat-form-field [appearance]=\"appearance\" [@animate]=\"{ value: '*', params: { x: '50px' } }\">\n              <input matInput [placeholder]=\"emailText\" formControlName=\"email\">\n              <mat-icon matSuffix [color]=\"color\">email</mat-icon>\n              <mat-error *ngIf=\"loginForm.get('email').hasError('required')\">\n                {{emailErrorRequiredText}}\n              </mat-error>\n              <mat-error\n                *ngIf=\"!loginForm.get('email').hasError('required') &&\n                                    loginForm.get('email').hasError('email')\">\n                {{emailErrorPatternText}}\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field [appearance]=\"appearance\" [@animate]=\"{ value: '*', params: { x: '50px' } }\">\n              <input matInput type=\"password\" [placeholder]=\"passwordText\" formControlName=\"password\">\n              <mat-icon matSuffix [color]=\"color\">lock</mat-icon>\n              <mat-error>\n                {{passwordErrorRequiredText}}\n              </mat-error>\n            </mat-form-field>\n\n            <div class=\"remember-forgot-password\"\n                 fxLayout=\"row\" fxLayout.xs=\"column\"\n                 fxLayoutAlign=\"space-between center\"\n                 [@animate]=\"{ value: '*', params: { x: '50px' } }\">\n    <!--          <mat-checkbox class=\"remember-me\" aria-label=\"Remember Me\">-->\n    <!--            {{rememberMeText}}-->\n    <!--          </mat-checkbox>-->\n\n              <button *ngIf=\"resetPasswordEnabled\"\n                      [@animate]=\"{ value: '*', params: { x: '-50px' } }\"\n                      mat-button\n                      class=\"forgot-password\"\n                      [color]=\"color\"\n                      type=\"button\"\n                      (click)=\"onResetPasswordRequested.emit()\">\n                {{forgotPasswordText}}\n              </button>\n            </div>\n\n            <button mat-raised-button\n                    id=\"loginButton\"\n                    [color]=\"colorAccent\"\n                    class=\"submit-button\"\n                    aria-label=\"LOG IN\"\n                    [disabled]=\"loginForm.invalid\"\n                    (click)=\"login()\">\n              {{loginButtonText}}\n            </button>\n\n          </form>\n\n          <div *ngIf=\"providers.length > 0\"\n               class=\"separator\"\n               [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\">\n            <span class=\"text\">{{orLabelText}}</span>\n          </div>\n\n          <ngx-auth-firebaseui-providers layout=\"column\"\n                                         fxLayoutAlign=\"center center\"\n                                         theme=\"raised\"\n                                         [providers]=\"providers\"></ngx-auth-firebaseui-providers>\n\n          <div *ngIf=\"registrationEnabled\"\n               [@animateStagger]=\"{ value: '100' }\"\n               class=\"register\"\n               fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <span class=\"text\" [@animate]=\"{ value: '*', params: { x: '100px' } }\">\n              {{dontHaveAnAccountText}}\n            </span>\n            <button [@animate]=\"{ value: '*', params: { x: '-100px' } }\"\n                    mat-button\n                    id=\"createAccountButton\"\n                    [color]=\"color\"\n                    type=\"button\"\n                    (click)=\"onCreateAccountRequested.emit()\">{{createAccountButtonText}}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                        styles: ["\n    ngx-auth-firebaseui-login #login-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper{padding:16px}}ngx-auth-firebaseui-login #login-form-wrapper #login-form{width:384px;max-width:384px;padding:32px;text-align:center}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form{padding:24px;width:100%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .logo{width:150px;height:150px;margin:32px auto}ngx-auth-firebaseui-login #login-form-wrapper #login-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form{width:100%;text-align:left}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-form-field{width:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-checkbox{margin:0}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password{font-size:13px;margin-top:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .remember-me{margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password{font-size:13px;font-weight:500;margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{width:220px;margin:16px auto;display:block}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{width:90%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register{margin:32px auto 24px;font-weight:500}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register .text{margin-right:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator{font-size:15px;font-weight:600;margin:24px auto;position:relative;overflow:hidden;width:100px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text{display:inline-flex;position:relative;padding:0 8px;z-index:9999}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after,ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before{content:\"\";display:block;width:30px;position:absolute;top:10px;border-top:1px solid}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before{right:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after{left:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form button.facebook-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.github-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.google-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.microsoft-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.twitter-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.yahoo-raised{width:192px;text-transform:none;color:#fff;font-size:13px;margin-bottom:8px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form button{width:80%}}\n  "],
                        encapsulation: i0.ViewEncapsulation.None,
                        animations: NgxAuthFirebaseuiAnimations
                    },] },
        ];
        /** @nocollapse */
        NgxAuthFirebaseuiLoginComponent.ctorParameters = function () { return [
            { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
            { type: AuthProcessService },
            { type: forms.FormBuilder }
        ]; };
        NgxAuthFirebaseuiLoginComponent.propDecorators = {
            logoUrl: [{ type: i0.Input }],
            providers: [{ type: i0.Input }],
            appearance: [{ type: i0.Input }],
            registrationEnabled: [{ type: i0.Input }],
            resetPasswordEnabled: [{ type: i0.Input }],
            messageOnAuthSuccess: [{ type: i0.Input }],
            messageOnAuthError: [{ type: i0.Input }],
            titleText: [{ type: i0.Input }],
            rememberMeText: [{ type: i0.Input }],
            loginButtonText: [{ type: i0.Input }],
            orLabelText: [{ type: i0.Input }],
            forgotPasswordText: [{ type: i0.Input }],
            dontHaveAnAccountText: [{ type: i0.Input }],
            createAccountButtonText: [{ type: i0.Input }],
            emailText: [{ type: i0.Input }],
            emailErrorRequiredText: [{ type: i0.Input }],
            emailErrorPatternText: [{ type: i0.Input }],
            passwordText: [{ type: i0.Input }],
            passwordErrorRequiredText: [{ type: i0.Input }],
            onSuccess: [{ type: i0.Output }],
            onError: [{ type: i0.Output }],
            onCreateAccountRequested: [{ type: i0.Output }],
            onResetPasswordRequested: [{ type: i0.Output }]
        };
        return NgxAuthFirebaseuiLoginComponent;
    }());

    var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$2 = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    /** @type {?} */
    var confirmPasswordValidator = (/**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (!control.parent || !control) {
            return null;
        }
        /** @type {?} */
        var password = control.parent.get('password');
        /** @type {?} */
        var passwordConfirm = control.parent.get('passwordConfirm');
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
    var NgxAuthFirebaseuiRegisterComponent = /** @class */ (function () {
        function NgxAuthFirebaseuiRegisterComponent(platformId, _formBuilder, authProcess) {
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
            this.onLoginRequested = new i0.EventEmitter();
            this.authenticationError = false;
            // Set the private defaults
            this._unsubscribeAll = new rxjs.Subject();
            this.onSuccess = authProcess.onSuccessEmitter;
            this.onError = authProcess.onErrorEmitter;
        }
        Object.defineProperty(NgxAuthFirebaseuiRegisterComponent.prototype, "color", {
            get: /**
             * @return {?}
             */
            function () {
                return this.authenticationError ? 'warn' : 'primary';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxAuthFirebaseuiRegisterComponent.prototype, "colorAccent", {
            get: /**
             * @return {?}
             */
            function () {
                return this.authenticationError ? 'warn' : 'accent';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxAuthFirebaseuiRegisterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                this.onErrorSubscription = this.onError.subscribe((/**
                 * @return {?}
                 */
                function () { return _this.authenticationError = true; }));
            }
            this.registerForm = this._formBuilder.group({
                name: ['', forms.Validators.required],
                email: ['', [forms.Validators.required, forms.Validators.email]],
                password: ['', forms.Validators.required],
                passwordConfirm: ['', [forms.Validators.required, confirmPasswordValidator]]
            });
            // Update the validity of the 'passwordConfirm' field
            // when the 'password' field changes
            this.registerForm
                .get('password')
                .valueChanges.pipe(operators$1.takeUntil(this._unsubscribeAll))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.registerForm.get('passwordConfirm').updateValueAndValidity();
            }));
        };
        /**
         * On destroy
         */
        /**
         * On destroy
         * @return {?}
         */
        NgxAuthFirebaseuiRegisterComponent.prototype.ngOnDestroy = /**
         * On destroy
         * @return {?}
         */
        function () {
            // Unsubscribe from all subscriptions
            this._unsubscribeAll.next();
            this._unsubscribeAll.complete();
        };
        /**
         * @return {?}
         */
        NgxAuthFirebaseuiRegisterComponent.prototype.createAccount = /**
         * @return {?}
         */
        function () {
            return __awaiter$2(this, void 0, void 0, function () {
                return __generator$2(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.authProcess.signUp(this.registerForm.get('name').value, {
                                email: this.registerForm.get('email').value,
                                password: this.registerForm.get('password').value
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        NgxAuthFirebaseuiRegisterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-auth-firebaseui-register',
                        template: "\n    <div id=\"register\" fxLayout=\"column\">\n\n      <div id=\"register-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"register-form\" [@animateStagger]=\"{ value: '50' }\">\n\n          <div *ngIf=\"logoUrl\" class=\"logo\">\n            <img [src]=\"logoUrl\" alt=\"logo\" [@animate]=\"{ value: '*', params: { x: '50px' } }\">\n          </div>\n\n          <div class=\"title\" [@animate]=\"{ value: '*', params: { x: '-50px' } }\">{{titleText}}</div>\n\n          <form [formGroup]=\"registerForm\" name=\"registerForm\" novalidate\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <mat-form-field [appearance]=\"appearance\" [@animate]=\"{ value: '*', params: { x: '50px' } }\">\n              <input formControlName=\"name\" matInput [placeholder]=\"nameText\"/>\n              <mat-icon matSuffix [color]=\"color\">person</mat-icon>\n              <mat-error>\n                {{nameErrorRequiredText}}\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field [appearance]=\"appearance\" [@animate]=\"{ value: '*', params: { x: '50px' } }\">\n              <input formControlName=\"email\" matInput [placeholder]=\"emailText\"/>\n              <mat-icon matSuffix [color]=\"color\">email</mat-icon>\n              <mat-error *ngIf=\"registerForm.get('email').hasError('required')\">\n                {{emailErrorRequiredText}}\n              </mat-error>\n              <mat-error *ngIf=\"registerForm.get('email').hasError('email')\">\n                {{emailErrorPatternText}}\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field [appearance]=\"appearance\" [@animate]=\"{ value: '*', params: { x: '50px' } }\">\n              <input formControlName=\"password\" matInput [placeholder]=\"passwordText\" type=\"password\"/>\n              <mat-icon matSuffix [color]=\"color\">lock</mat-icon>\n              <mat-error>\n                {{passwordErrorRequiredText}}\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field [appearance]=\"appearance\" [@animate]=\"{ value: '*', params: { x: '50px' } }\">\n              <input formControlName=\"passwordConfirm\" matInput [placeholder]=\"passwordConfirmationText\" type=\"password\"/>\n              <mat-icon matSuffix [color]=\"color\">lock</mat-icon>\n              <mat-error *ngIf=\"registerForm.get('passwordConfirm').hasError('required')\">\n                {{passwordConfirmationErrorRequiredText}}\n              </mat-error>\n              <mat-error\n                *ngIf=\"\n                  !registerForm.get('passwordConfirm').hasError('required') &&\n                  registerForm.get('passwordConfirm').hasError('passwordsNotMatching')\n                \">\n                {{passwordErrorMatchText}}\n              </mat-error>\n            </mat-form-field>\n\n            <!--        <div *ngIf=\"this.tosUrl || this.privacyPolicyUrl\"-->\n            <!--        <div-->\n            <!--          class=\"terms\"-->\n            <!--          fxLayout=\"row\" fxLayoutAlign=\"center center\"-->\n            <!--          [@animate]=\"{value:'*',params:{duration:'250ms',y:'100px'}}\">-->\n            <!--          <mat-checkbox aria-label=\"I read and accept\" name=\"terms\" required>-->\n            <!--            <span>{{readAncAcceptText}}</span>-->\n            <!--            <span>&nbsp;</span>-->\n            <!--            <a target=\"_blank\"-->\n            <!--               [href]=\"this.tosUrl\">-->\n            <!--              Terms of Service and Conditions-->\n            <!--            </a>-->\n            <!--          </mat-checkbox>-->\n            <!--        </div>-->\n\n            <button mat-raised-button\n                    id=\"createAccountButton\"\n                    class=\"submit-button\"\n                    aria-label=\"CREATE AN ACCOUNT\"\n                    [color]=\"colorAccent\"\n                    [disabled]=\"registerForm.invalid\"\n                    (click)=\"createAccount()\">\n              {{createAccountButtonText}}\n            </button>\n          </form>\n\n          <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n               [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n            <span class=\"text\" [@animate]=\"{ value: '*', params: { x: '100px' } }\">\n              {{alreadyHaveAccountText}}\n            </span>\n            <button mat-button\n                    id=\"loginButton\"\n                    type=\"button\"\n                    [color]=\"colorAccent\"\n                    (click)=\"onLoginRequested.emit()\"\n                    [@animate]=\"{ value: '*', params: { x: '-100px' } }\">\n              {{loginButtonText}}\n            </button>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  ",
                        styles: ["\n    ngx-auth-firebaseui-register #register{width:100%;background-size:cover}ngx-auth-firebaseui-register #register #register-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper{padding:16px}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{width:384px;max-width:384px;padding:32px;text-align:center}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{padding:24px;width:100%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .logo{width:128px;margin:32px auto}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form{width:100%;text-align:left}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-form-field{width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-checkbox{margin:0}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms{margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms a{font-size:16px;margin-left:4px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{width:220px;margin:16px auto;display:block}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{width:90%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register{margin:32px auto 24px;font-weight:500}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register .text{margin-right:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator{font-size:15px;font-weight:600;margin:24px auto;position:relative;overflow:hidden;width:100px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text{display:inline-flex;position:relative;padding:0 8px;z-index:9999}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before{content:\"\";display:block;width:30px;position:absolute;top:10px;border-top:1px solid}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before{right:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after{left:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google{width:192px;text-transform:none;color:#fff;font-size:13px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button{width:80%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google{background-color:#d73d32;margin-bottom:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook{background-color:#3f5c9a}ngx-auth-firebaseui-register ::ng-deep .mat-checkbox-label{display:flex;flex-wrap:wrap}\n  "],
                        encapsulation: i0.ViewEncapsulation.None,
                        animations: NgxAuthFirebaseuiAnimations
                    },] },
        ];
        /** @nocollapse */
        NgxAuthFirebaseuiRegisterComponent.ctorParameters = function () { return [
            { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
            { type: forms.FormBuilder },
            { type: AuthProcessService }
        ]; };
        NgxAuthFirebaseuiRegisterComponent.propDecorators = {
            logoUrl: [{ type: i0.Input }],
            appearance: [{ type: i0.Input }],
            tosUrl: [{ type: i0.Input }],
            privacyPolicyUrl: [{ type: i0.Input }],
            titleText: [{ type: i0.Input }],
            readAncAcceptText: [{ type: i0.Input }],
            termsAndConditionsText: [{ type: i0.Input }],
            createAccountButtonText: [{ type: i0.Input }],
            alreadyHaveAccountText: [{ type: i0.Input }],
            loginButtonText: [{ type: i0.Input }],
            nameText: [{ type: i0.Input }],
            nameErrorRequiredText: [{ type: i0.Input }],
            emailText: [{ type: i0.Input }],
            emailErrorRequiredText: [{ type: i0.Input }],
            emailErrorPatternText: [{ type: i0.Input }],
            passwordText: [{ type: i0.Input }],
            passwordErrorRequiredText: [{ type: i0.Input }],
            passwordConfirmationText: [{ type: i0.Input }],
            passwordConfirmationErrorRequiredText: [{ type: i0.Input }],
            passwordErrorMatchText: [{ type: i0.Input }],
            onSuccess: [{ type: i0.Output }],
            onError: [{ type: i0.Output }],
            onLoginRequested: [{ type: i0.Output }]
        };
        return NgxAuthFirebaseuiRegisterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LegalityDialogComponent = /** @class */ (function () {
        function LegalityDialogComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this._disableConfirmActionButton = false;
        }
        Object.defineProperty(LegalityDialogComponent.prototype, "disableConfirmActionButton", {
            get: /**
             * @return {?}
             */
            function () {
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
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LegalityDialogComponent.prototype.closeDialog = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = {
                checked: !this.disableConfirmActionButton,
                authProvider: this.data.authProvider
            };
            this.dialogRef.close(result);
        };
        LegalityDialogComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-auth-firebaseui-legality-dialog',
                        template: "\n    <h1 matDialogTitle>Legal requirements</h1>\n\n    <mat-dialog-content>\n      <div fxLayout=\"column\" fxLayoutAlign=\"start\">\n        <mat-checkbox *ngIf=\"this.data.tosUrl\" [(ngModel)]=\"checkTOS\">\n          I agree to the\n          <span>&nbsp;</span>\n          <a target=\"_blank\"\n             [href]=\"this.data.tosUrl\">\n            Terms of Service and Conditions\n          </a>\n        </mat-checkbox>\n\n        <mat-checkbox *ngIf=\"this.data.privacyPolicyUrl\"\n                      [(ngModel)]=\"checkPrivacyPolicy\">\n          I have read and agree to the\n          <span>&nbsp;</span>\n          <a target=\"_blank\"\n             [href]=\"this.data.privacyPolicyUrl\">\n            Privacy\n          </a>\n        </mat-checkbox>\n      </div>\n    </mat-dialog-content>\n\n    <mat-dialog-actions>\n      <button id=\"decline-action\"\n              mat-raised-button\n              matDialogClose\n              color=\"warn\">Decline</button>\n      <button id=\"confirm-action\"\n              mat-raised-button\n              color=\"primary\"\n              [disabled]=\"disableConfirmActionButton\"\n              (click)=\"closeDialog()\">Confirm\n      </button>\n    </mat-dialog-actions>\n  ",
                        styles: ["\n    ::ng-deep .mat-checkbox-label{display:flex;flex-wrap:wrap}mat-dialog-content div{margin-top:1.5rem}mat-dialog-actions{margin-top:1rem}\n  "]
                    },] },
        ];
        /** @nocollapse */
        LegalityDialogComponent.ctorParameters = function () { return [
            { type: material.MatDialogRef },
            { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
        ]; };
        return LegalityDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var Theme = {
        DEFAULT: 'default',
        CLASSIC: 'classic',
        STROKED: 'stroked',
        FAB: 'fab',
        MINI_FAB: 'mini-fab',
        RAISED: 'raised',
    };
    /** @enum {string} */
    var Layout = {
        ROW: 'row',
        COLUMN: 'column',
    };
    var AuthProvidersComponent = /** @class */ (function () {
        function AuthProvidersComponent(authProcess) {
            this.authProcess = authProcess;
            // theme: string = Theme.DEFAULT;
            this.layout = Layout.ROW;
            this.providers = AuthProvider.ALL; //  google, facebook, twitter, github, microsoft, yahoo
            this.themes = Theme;
            this.authProvider = AuthProvider;
            this.onSuccess = authProcess.onSuccessEmitter;
            this.onError = authProcess.onErrorEmitter;
        }
        AuthProvidersComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-auth-firebaseui-providers',
                        template: "\n    <div [ngSwitch]=\"theme\" [@animateStagger]=\"{ value: '50' }\">\n\n      <!--default icon buttons-->\n      <div *ngSwitchDefault\n           [fxLayout]=\"layout\"\n           fxLayout.xs=\"column\"\n           [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\">\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-button\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Google)\">\n          <mat-icon svgIcon=\"google-colored\"></mat-icon>\n          Google\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-button\n                class=\"facebook-filled\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Facebook)\">\n          <mat-icon svgIcon=\"facebook\"></mat-icon>\n          Facebook\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-button\n                class=\"twitter-filled\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Twitter)\">\n          <mat-icon svgIcon=\"twitter\"></mat-icon>\n          Twitter\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-button\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Github)\">\n          <mat-icon svgIcon=\"github\"></mat-icon>\n          GitHub\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-button\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Microsoft)\">\n          <mat-icon svgIcon=\"microsoft\"></mat-icon>\n          Microsoft\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-button\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Yahoo)\">\n          <mat-icon svgIcon=\"yahoo\"></mat-icon>\n          Yahoo\n        </button>\n      </div>\n\n      <!--classic-->\n      <div *ngSwitchCase=\"themes.CLASSIC\"\n           class=\"buttons-classic\"\n           [fxLayout]=\"layout\"\n           fxLayout.xs=\"column\"\n           [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\">\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-button\n                class=\"google-classic\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Google)\">\n          Google\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-button\n                class=\"facebook-classic\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Facebook)\">\n          Facebook\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-button\n                class=\"twitter-classic\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Twitter)\">\n          Twitter\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-button\n                class=\"github-classic\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Github)\">\n          GitHub\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-button\n                class=\"microsoft-classic\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Microsoft)\">\n          Microsoft\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-button\n                class=\"yahoo-classic\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Yahoo)\">\n          Yahoo\n        </button>\n      </div>\n\n      <!--stroked-->\n      <div *ngSwitchCase=\"themes.STROKED\"\n           class=\"buttons-classic\"\n           [fxLayout]=\"layout\"\n           fxLayout.xs=\"column\"\n           [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\">\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-stroked-button\n                class=\"google-classic\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Google)\">\n          Google\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-stroked-button\n                class=\"facebook-classic\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Facebook)\">\n          Facebook\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-stroked-button\n                class=\"twitter-classic\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Twitter)\">\n          Twitter\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-stroked-button\n                class=\"github-classic\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Github)\">\n          GitHub\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-stroked-button\n                class=\"microsoft-classic\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Microsoft)\">\n          Microsoft\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-stroked-button\n                class=\"yahoo-classic\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Yahoo)\">\n          Yahoo\n        </button>\n      </div>\n\n      <!--raised-->\n      <div *ngSwitchCase=\"themes.RAISED\"\n           class=\"buttons-raised\"\n           [fxLayout]=\"layout\"\n           fxLayout.xs=\"column\"\n           [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\">\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-raised-button\n                class=\"google-raised\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Google)\">\n          Google\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-raised-button\n                class=\"facebook-raised\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Facebook)\">\n          Facebook\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-raised-button\n                class=\"twitter-raised\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Twitter)\">\n          Twitter\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-raised-button\n                class=\"github-raised\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Github)\">\n          GitHub\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-raised-button\n                class=\"microsoft-raised\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Microsoft)\">\n          Microsoft\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-raised-button\n                class=\"yahoo-raised\"\n                [ngClass.xs]=\"{'space-full-xs':true}\"\n                (click)=\"authProcess.signInWith(authProvider.Yahoo)\">\n          Yahoo\n        </button>\n      </div>\n\n      <!--fab-->\n      <div *ngSwitchCase=\"themes.FAB\"\n           class=\"buttons-raised\"\n           [fxLayout]=\"layout\"\n           [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\">\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-fab\n                class=\"google-raised\"\n                (click)=\"authProcess.signInWith(authProvider.Google)\">\n          <mat-icon svgIcon=\"google\"></mat-icon>\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-fab\n                class=\"facebook-raised\"\n                (click)=\"authProcess.signInWith(authProvider.Facebook)\">\n          <mat-icon svgIcon=\"facebook\"></mat-icon>\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-fab\n                class=\"twitter-raised\"\n                (click)=\"authProcess.signInWith(authProvider.Twitter)\">\n          <mat-icon svgIcon=\"twitter\"></mat-icon>\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-fab\n                class=\"github-raised\"\n                (click)=\"authProcess.signInWith(authProvider.Github)\">\n          <mat-icon svgIcon=\"github\"></mat-icon>\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-fab\n                class=\"microsoft\"\n                (click)=\"authProcess.signInWith(authProvider.Microsoft)\">\n          <mat-icon svgIcon=\"microsoft\"></mat-icon>\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-fab\n                class=\"yahoo-raised\"\n                (click)=\"authProcess.signInWith(authProvider.Yahoo)\">\n          <mat-icon svgIcon=\"yahoo\"></mat-icon>\n        </button>\n      </div>\n\n      <!--mini-fab-->\n      <div *ngSwitchCase=\"themes.MINI_FAB\"\n           class=\"buttons-raised\"\n           [fxLayout]=\"layout\"\n           fxLayoutAlign.xs=\"center center\"\n           [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\">\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-mini-fab\n                class=\"google-raised\"\n                fxFlexAlign=\"center\"\n                (click)=\"authProcess.signInWith(authProvider.Google)\">\n          <mat-icon svgIcon=\"google\"></mat-icon>\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-mini-fab\n                class=\"facebook-raised\"\n                (click)=\"authProcess.signInWith(authProvider.Facebook)\">\n          <mat-icon svgIcon=\"facebook\"></mat-icon>\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-mini-fab\n                class=\"twitter-raised\"\n                (click)=\"authProcess.signInWith(authProvider.Twitter)\">\n          <mat-icon svgIcon=\"twitter\" class=\"icon-white\"></mat-icon>\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-mini-fab\n                class=\"github-raised\"\n                (click)=\"authProcess.signInWith(authProvider.Github)\">\n          <mat-icon svgIcon=\"github\"></mat-icon>\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-mini-fab\n                class=\"microsoft\"\n                (click)=\"authProcess.signInWith(authProvider.Microsoft)\">\n          <mat-icon svgIcon=\"microsoft\"></mat-icon>\n        </button>\n        <button *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n                [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                mat-mini-fab\n                class=\"yahoo-raised\"\n                (click)=\"authProcess.signInWith(authProvider.Yahoo)\">\n          <mat-icon svgIcon=\"yahoo\"></mat-icon>\n        </button>\n      </div>\n    </div>\n  ",
                        styles: ["\n    :host{display:block}:host .mat-icon{vertical-align:inherit}.space-full-xs{width:100%;margin:.4rem}.facebook-filled mat-icon{fill:#385899}.twitter-filled mat-icon{fill:#1da1f2}.buttons-raised button{color:#fff!important}.buttons-raised .google-raised{background-color:#db4437}.buttons-raised .facebook-raised{background-color:#385899}.buttons-raised .twitter-raised{background-color:#1da1f2}.buttons-raised .github-raised{background-color:#000}.buttons-raised .microsoft-raised{background-color:#0078d4}.buttons-raised .yahoo-raised{background-color:#720e9e}.buttons-raised .phone-raised{background-color:#02bd7e}.buttons-classic button.google-classic{color:#db4437!important}.buttons-classic .facebook-classic{color:#385899!important}.buttons-classic .twitter-classic{color:#1da1f2!important}.buttons-classic .github-classic{color:#000!important}.buttons-classic .microsoft-classic{color:#0078d4!important}.buttons-classic .yahoo-classic{color:#720e9e!important}.buttons-classic .phone-classic{color:#02bd7e}.icon-white{color:#fff}.icon-white mat-icon{fill:#fff}button.microsoft{background:#f8f9fa}\n  "],
                        animations: NgxAuthFirebaseuiAnimations
                    },] },
        ];
        /** @nocollapse */
        AuthProvidersComponent.ctorParameters = function () { return [
            { type: AuthProcessService }
        ]; };
        AuthProvidersComponent.propDecorators = {
            theme: [{ type: i0.Input }],
            layout: [{ type: i0.Input }],
            providers: [{ type: i0.Input }],
            onSuccess: [{ type: i0.Output }],
            onError: [{ type: i0.Output }]
        };
        return AuthProvidersComponent;
    }());

    var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$3 = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    /** @type {?} */
    var EMAIL_REGEX = new RegExp(['^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]+)*)',
        '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
        '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+',
        '[a-zA-Z]{2,}))$'].join(''));
    /** @type {?} */
    var PHONE_NUMBER_REGEX = new RegExp(/^\+(?:[0-9] ?){6,14}[0-9]$/);
    var AuthComponent = /** @class */ (function () {
        function AuthComponent(platformId, auth, authProcess, dialog, config, _activatedRoute, _cdr) {
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
            this.selectedTabChange = new i0.EventEmitter();
            // Password strength api
            this.enableLengthRule = true;
            this.enableLowerCaseLetterRule = true;
            this.enableUpperCaseLetterRule = true;
            this.enableDigitRule = true;
            this.enableSpecialCharRule = true;
            this.onStrengthChanged = new i0.EventEmitter();
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
            this.emailConfirmationText = "A confirmation e-mail has been sent to you. Check your inbox and click on the link \"Confirm my e-mail\" to confirm your e-mail address.";
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
        AuthComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                this.onErrorSubscription = this.onError.subscribe((/**
                 * @return {?}
                 */
                function () { return _this.authenticationError = true; }));
            }
            this.min = this.min != null ? Math.max(this.min, this.config.passwordMinLength) : this.config.passwordMinLength;
            this.max = this.max != null ? Math.min(this.max, this.config.passwordMaxLength) : this.config.passwordMaxLength;
            this.goBackURL = this.chooseBackUrl();
            this.updateAuthSnackbarMessages();
            // auth form's initialization
            this._initSignInFormGroupBuilder();
            this._initSignUpFormGroupBuilder();
            this._initResetPasswordFormGroupBuilder();
        };
        /**
         * @return {?}
         */
        AuthComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.passwordStrength) {
                this.passwordStrength.onStrengthChanged.subscribe((/**
                 * @param {?} strength
                 * @return {?}
                 */
                function (strength) {
                    _this.onStrengthChanged.emit(strength);
                }));
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        AuthComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
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
        };
        /**
         * @return {?}
         */
        AuthComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.onErrorSubscription) {
                this.onErrorSubscription.unsubscribe();
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        AuthComponent.prototype.onTabChange = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.selectedTabChange.emit(event);
            this.tabIndex = event.index;
        };
        /**
         * @return {?}
         */
        AuthComponent.prototype.signOut = /**
         * @return {?}
         */
        function () {
            return __awaiter$3(this, void 0, void 0, function () {
                return __generator$3(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, , 2, 3]);
                            this.isLoading = true;
                            this._cdr.markForCheck();
                            return [4 /*yield*/, this.authProcess.signOut()];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            this.isLoading = false;
                            this._cdr.markForCheck();
                            return [7 /*endfinally*/];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        AuthComponent.prototype.signIn = /**
         * @return {?}
         */
        function () {
            return __awaiter$3(this, void 0, void 0, function () {
                return __generator$3(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.signInFormGroup.valid) {
                                return [2 /*return*/];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 3, 4]);
                            this.isLoading = true;
                            this._cdr.markForCheck();
                            return [4 /*yield*/, this.authProcess.signInWith(this.authProviders.EmailAndPassword, {
                                    email: this.signInFormGroup.value.email,
                                    password: this.signInFormGroup.value.password
                                })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            this.isLoading = false;
                            this._cdr.markForCheck();
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        Object.defineProperty(AuthComponent.prototype, "color", {
            get: /**
             * @return {?}
             */
            function () {
                return this.authenticationError ? 'warn' : 'primary';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AuthComponent.prototype.updateAuthSnackbarMessages = /**
         * @return {?}
         */
        function () {
            this.authProcess.messageOnAuthSuccess = this.messageOnAuthSuccess;
            this.authProcess.messageOnAuthError = this.messageOnAuthError;
        };
        /**
         * @return {?}
         */
        AuthComponent.prototype.createForgotPasswordTab = /**
         * @return {?}
         */
        function () {
            this.passwordResetWished = true;
            this.tabIndex = 2;
            this._cdr.markForCheck();
        };
        /**
         * @param {?=} authProvider
         * @return {?}
         */
        AuthComponent.prototype.processLegalSignUP = /**
         * @param {?=} authProvider
         * @return {?}
         */
        function (authProvider) {
            var _this = this;
            if (this.tosUrl || this.privacyPolicyUrl) {
                /** @type {?} */
                var params = {
                    tosUrl: this.tosUrl,
                    privacyPolicyUrl: this.privacyPolicyUrl,
                    authProvider: authProvider
                };
                this.dialogRef = this.dialog.open(LegalityDialogComponent, { data: params });
                this.dialogRef.afterClosed().subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    if (result && result.checked) {
                        _this._afterSignUpMiddleware(result.authProvider).then((/**
                         * @return {?}
                         */
                        function () { return _this.signUpFormGroup.reset(); }));
                    }
                    _this.dialogRef = null;
                }));
            }
            else {
                this._afterSignUpMiddleware(authProvider).then((/**
                 * @return {?}
                 */
                function () { return _this.signUpFormGroup.reset(); }));
            }
        };
        /**
         * @return {?}
         */
        AuthComponent.prototype.signUp = /**
         * @return {?}
         */
        function () {
            return __awaiter$3(this, void 0, void 0, function () {
                return __generator$3(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, , 2, 3]);
                            this.isLoading = true;
                            this._cdr.markForCheck();
                            return [4 /*yield*/, this.authProcess.signUp(this.signUpFormGroup.value.name, {
                                    email: this.signUpFormGroup.value.email,
                                    password: this.signUpFormGroup.value.password
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            this.isLoading = false;
                            this._cdr.markForCheck();
                            return [7 /*endfinally*/];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        AuthComponent.prototype.signUpAnonymously = /**
         * @return {?}
         */
        function () {
            return __awaiter$3(this, void 0, void 0, function () {
                return __generator$3(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, , 2, 3]);
                            this.isLoading = true;
                            this._cdr.markForCheck();
                            return [4 /*yield*/, this.authProcess.signInWith(this.authProvider.ANONYMOUS)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            this.isLoading = false;
                            this._cdr.markForCheck();
                            return [7 /*endfinally*/];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        AuthComponent.prototype.resetPassword = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.authProcess.resetPassword(this.resetPasswordEmailFormControl.value)
                .then((/**
             * @return {?}
             */
            function () {
                _this.passReset = true;
                // this.tabIndex = 2;
                _this._cdr.markForCheck();
            }));
        };
        /**
         * @private
         * @return {?}
         */
        AuthComponent.prototype.chooseBackUrl = /**
         * @private
         * @return {?}
         */
        function () {
            return this._activatedRoute.snapshot.queryParams['redirectUrl'] || this.goBackURL || '/';
        };
        /**
         * @private
         * @return {?}
         */
        AuthComponent.prototype._initSignInFormGroupBuilder = /**
         * @private
         * @return {?}
         */
        function () {
            this.signInFormGroup = new forms.FormGroup({});
            this.signInFormGroup.registerControl('email', this.signInEmailFormControl = new forms.FormControl('', [
                forms.Validators.required,
                forms.Validators.pattern(EMAIL_REGEX)
            ]));
            this.signInFormGroup.registerControl('password', this.sigInPasswordFormControl = new forms.FormControl('', [
                forms.Validators.required,
                forms.Validators.minLength(this.min),
                forms.Validators.maxLength(this.max)
            ]));
        };
        /**
         * @private
         * @return {?}
         */
        AuthComponent.prototype._initSignUpFormGroupBuilder = /**
         * @private
         * @return {?}
         */
        function () {
            this.signUpFormGroup = new forms.FormGroup({
                name: this.sigUpNameFormControl = new forms.FormControl('', [
                    forms.Validators.required,
                    forms.Validators.minLength(this.config.nameMinLength),
                    forms.Validators.maxLength(this.config.nameMaxLength)
                ]),
                email: this.sigUpEmailFormControl = new forms.FormControl('', [
                    forms.Validators.required,
                    forms.Validators.pattern(EMAIL_REGEX)
                ]),
                password: this.sigUpPasswordFormControl = new forms.FormControl('', [
                    forms.Validators.required,
                    forms.Validators.minLength(this.min),
                    forms.Validators.maxLength(this.max),
                ])
            });
        };
        /**
         * @private
         * @return {?}
         */
        AuthComponent.prototype._initResetPasswordFormGroupBuilder = /**
         * @private
         * @return {?}
         */
        function () {
            this.resetPasswordFormGroup = new forms.FormGroup({
                email: this.resetPasswordEmailFormControl = new forms.FormControl('', [
                    forms.Validators.required,
                    forms.Validators.pattern(EMAIL_REGEX)
                ])
            });
        };
        /**
         * @private
         * @param {?=} authProvider
         * @return {?}
         */
        AuthComponent.prototype._afterSignUpMiddleware = /**
         * @private
         * @param {?=} authProvider
         * @return {?}
         */
        function (authProvider) {
            if (authProvider === this.authProvider.ANONYMOUS) {
                return this.signUpAnonymously();
            }
            return this.signUp();
        };
        AuthComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-auth-firebaseui',
                        template: "\n    <ng-container *ngIf=\"authProcess.user$ | async as user; else showForm\">\n\n      <!-- This component will be shown when:\n        - we just sent a verification mail (notably after sign up)\n        - we arrived from the guard after trying to access a protected route even though we are connected\n      -->\n      <div *ngIf=\"(config.guardProtectedRoutesUntilEmailIsVerified && !user.emailVerified) || (authProcess.emailConfirmationSent && !user.emailVerified); else signedInUser\"\n           fxLayout=\"row\" fxLayoutAlign=\"center center\">\n          <ngx-auth-firebaseui-email-confirmation\n            [template]=\"verifyEmailTemplate\"\n            [email]=\"user.email\"\n            [goBackURL]=\"goBackURL\"\n            [verifyEmailTitleText]=\"verifyEmailTitleText\"\n            [verifyEmailConfirmationText]=\"verifyEmailConfirmationText\"\n            [verifyEmailGoBackText]=\"verifyEmailGoBackText\"\n            [sendNewVerificationEmailText]=\"sendNewVerificationEmailText\"\n            [signOutText]=\"signOutText\"\n            [messageOnEmailConfirmationSuccess]=\"messageOnEmailConfirmationSuccess\"\n            (signOut)=\"signOut()\">\n        </ngx-auth-firebaseui-email-confirmation>\n      </div>\n\n      <ng-template #signedInUser>\n          <div class=\"signed-in-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <img class=\"account-circle\" *ngIf=\"user.photoURL; else noPhoto\" [src]=\"user.photoURL\">\n            <ng-template #noPhoto><mat-icon class=\"account-circle\">account_circle</mat-icon></ng-template>\n            <div class=\"user-display-name mat-title\">{{ user.displayName }}</div>\n            <div class=\"user-email mat-body-2\">{{ user.email }}</div>\n            <div class=\"actions\">\n              <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n              <a mat-stroked-button class=\"go-back-button action-button\" color=\"primary\" [routerLink]=\"goBackURL\">{{ verifyEmailGoBackText }}</a>\n              <button mat-stroked-button class=\"sign-out-button action-button\" color=\"warn\" (click)=\"signOut()\">{{ signOutText }}</button>\n            </div>\n          </div>\n      </ng-template>\n\n    </ng-container>\n\n    <ng-template #showForm>\n      <mat-tab-group [color]=\"color\" [selectedIndex]=\"tabIndex\" (selectedTabChange)=\"onTabChange($event)\">\n        <!--Sign in tab-->\n        <mat-tab [label]=\"signInTabText\">\n          <mat-card>\n            <mat-card-title>{{signInCardTitleText}}</mat-card-title>\n            <mat-card-content>\n              <form  [@animateStagger]=\"{ value: '50' }\"\n                     [formGroup]=\"signInFormGroup\"\n                    (ngSubmit)=\"signIn()\">\n                <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n                  <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                                  [appearance]=\"appearance\">\n                    <mat-label>{{emailText}}</mat-label>\n                    <input matInput\n                          formControlName=\"email\"\n                          required>\n                    <mat-icon matSuffix [color]=\"color\">email</mat-icon>\n                    <mat-error *ngIf=\"signInEmailFormControl.hasError('required')\">\n                      {{emailErrorRequiredText}}\n                    </mat-error>\n                    <mat-error *ngIf=\"signInEmailFormControl.hasError('pattern')\">\n                      {{emailErrorPatternText}}\n                    </mat-error>\n                  </mat-form-field>\n\n                  <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                                [appearance]=\"appearance\">\n                    <mat-label>{{passwordText}}</mat-label>\n                    <input matInput [type]=\"togglePass.type\" [minlength]=\"min\" [maxlength]=\"max\" formControlName=\"password\"\n                          required/>\n                    <mat-pass-toggle-visibility #togglePass matSuffix></mat-pass-toggle-visibility>\n                    <mat-icon matSuffix [color]=\"color\">lock</mat-icon>\n                    <mat-hint align=\"end\" aria-live=\"polite\"> {{ signInFormGroup.value.password.length }}\n                      / {{ max }} </mat-hint>\n                    <mat-error *ngIf=\"sigInPasswordFormControl.hasError('required')\">\n                      {{passwordErrorRequiredText}}\n                    </mat-error>\n                    <mat-error *ngIf=\"sigInPasswordFormControl.hasError('minlength')\">\n                      {{ passwordErrorMinLengthText }}\n                    </mat-error>\n                    <mat-error *ngIf=\"sigInPasswordFormControl.hasError('maxlength')\">\n                      {{ passwordErrorMaxLengthText }}\n                    </mat-error>\n                  </mat-form-field>\n\n                  <button [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                        mat-raised-button\n                          style=\"margin-top: 20px\"\n                          type=\"submit\"\n                          class=\"space-top\"\n                          [color]=\"color\"\n                          [disabled]=\"signInFormGroup.invalid\">\n                    {{loginButtonText}}\n                  </button>\n\n                </div>\n              </form>\n\n              <div fxLayoutAlign=\"center\">\n                <button *ngIf=\"resetPasswordEnabled\"\n                        [@animate]=\"{ value: '*', params: { x: '-50px' } }\"\n                      mat-button\n                      class=\"space-top\"\n                      [color]=\"color\"\n                      (click)=\"createForgotPasswordTab()\">\n                {{forgotPasswordButtonText}}\n              </button>\n            </div>\n\n            </mat-card-content>\n            <mat-card-footer *ngIf=\"isLoading\">\n              <mat-progress-bar [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\"\n                              mode=\"indeterminate\"></mat-progress-bar>\n            </mat-card-footer>\n          </mat-card>\n        </mat-tab>\n\n        <!--tab register-->\n        <mat-tab [label]=\"registerTabText\" *ngIf=\"registrationEnabled\">\n          <mat-card>\n            <mat-card-title>{{registerCardTitleText}}</mat-card-title>\n              <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <form [@animateStagger]=\"{ value: '50' }\"\n                    [formGroup]=\"signUpFormGroup\" (ngSubmit)=\"signUpFormGroup.valid &&\n                processLegalSignUP(authProvider.EmailAndPassword)\">\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n                    <!--name-->\n                    <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                                  [appearance]=\"appearance\">\n                      <!--labels will work only with @angular/material@6.2.0 -->\n                      <mat-label>{{nameText}}</mat-label>\n                      <input\n                        matInput\n                        [minlength]=\"config.nameMinLength\"\n                        [maxlength]=\"config.nameMaxLength\"\n                        [formControl]=\"sigUpNameFormControl\"\n                        required\n                      />\n                      <mat-icon matSuffix [color]=\"color\">person</mat-icon>\n                      <mat-hint align=\"end\" aria-live=\"polite\"> {{ signUpFormGroup.value.name?.length }}\n                        / {{ config.nameMaxLength }} </mat-hint>\n                      <mat-error *ngIf=\"sigUpNameFormControl.hasError('required')\">\n                        {{nameErrorRequiredText}}\n                      </mat-error>\n                      <mat-error *ngIf=\"sigUpNameFormControl.hasError('minlength')\">\n                        {{nameErrorMinLengthText}}\n                      </mat-error>\n                      <mat-error *ngIf=\"sigUpNameFormControl.hasError('maxlength')\">\n                        {{nameErrorMaxLengthText}}\n                      </mat-error>\n                    </mat-form-field>\n\n                    <!--email-->\n                    <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                                  [appearance]=\"appearance\">\n                      <mat-label>{{emailText}}</mat-label>\n                      <input matInput\n                            type=\"email\"\n                            [formControl]=\"sigUpEmailFormControl\"\n                            required>\n                      <mat-icon matSuffix [color]=\"color\">email</mat-icon>\n                      <mat-error *ngIf=\"sigUpEmailFormControl.hasError('required')\">\n                        {{emailErrorRequiredText}}\n                      </mat-error>\n                      <mat-error *ngIf=\"sigUpEmailFormControl.hasError('pattern')\">\n                        {{emailErrorPatternText}}\n                      </mat-error>\n                    </mat-form-field>\n\n                    <!--password-->\n                    <div fxLayout=\"column\">\n                      <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                                    [appearance]=\"appearance\">\n                        <mat-label>{{passwordText}}</mat-label>\n                        <input\n                          matInput\n                          [type]=\"toggle.type\"\n                          name=\"password\"\n                          [formControl]=\"sigUpPasswordFormControl\"\n                          required\n                          [minlength]=\"min\"\n                          [maxlength]=\"max\"\n                        />\n                        <mat-pass-toggle-visibility #toggle matSuffix></mat-pass-toggle-visibility>\n\n                        <mat-icon matSuffix [color]=\"color\">lock</mat-icon>\n\n                        <mat-hint align=\"end\" aria-live=\"polite\">\n                          {{signUpFormGroup.value.password?.length}} / {{ max }}\n                        </mat-hint>\n\n                        <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('required')\" class=\"cut-text\">\n                          {{passwordErrorRequiredText}}\n                        </mat-error>\n\n                        <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('minlength')\" class=\"cut-text\">\n                          {{ passwordErrorMinLengthText }}\n                        </mat-error>\n                        <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('maxlength')\" class=\"cut-text\">\n                          {{ passwordErrorMaxLengthText }}\n                        </mat-error>\n\n                      </mat-form-field>\n\n                      <mat-password-strength #passwordStrength\n                                            [min]=\"min\"\n                                            [max]=\"max\"\n                                            [customValidator]=\"customValidator\"\n                                            [enableLengthRule]=\"enableLengthRule\"\n                                            [enableLowerCaseLetterRule]=\"enableLowerCaseLetterRule\"\n                                            [enableUpperCaseLetterRule]=\"enableUpperCaseLetterRule\"\n                                            [enableDigitRule]=\"enableDigitRule\"\n                                            [enableSpecialCharRule]=\"enableSpecialCharRule\"\n                                            [password]=\"signUpFormGroup.value.password\"\n                                            [externalError]=\"sigUpPasswordFormControl.dirty\">\n                      </mat-password-strength>\n\n                    </div>\n\n                    <button [@animate]=\"{ value: '*', params: { x: '100px' } }\"\n                          mat-raised-button\n                            style=\"margin-top: 20px\"\n                            type=\"submit\"\n                            [disabled]=\"signUpFormGroup.invalid\"\n                            [color]=\"color\">\n                      {{registerButtonText}}\n                    </button>\n\n                  </div>\n                </form>\n\n                <button *ngIf=\"guestEnabled\"\n                        [@animate]=\"{ value: '*', params: { x: '-100px' } }\"\n                      mat-button\n                      style=\"margin-top: 20px\"\n                      [color]=\"color\"\n                      (click)=\"processLegalSignUP(authProvider.ANONYMOUS)\">\n                <mat-icon>fingerprint</mat-icon>\n                {{guestButtonText}}\n              </button>\n\n              </mat-card-content>\n\n              <mat-card-footer *ngIf=\"isLoading\">\n                <mat-progress-bar [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\"\n                                mode=\"indeterminate\"></mat-progress-bar>\n              </mat-card-footer>\n\n          </mat-card>\n        </mat-tab>\n\n        <!--Reset password tab-->\n        <mat-tab *ngIf=\"passwordResetWished\" class=\"reset-password-tab\">\n          <ng-template mat-tab-label>\n            <button mat-icon-button class=\"reset-password-tab__close-button\" (click)=\"passwordResetWished = false\">\n              {{ resetPasswordTabText }}\n              <mat-icon>close</mat-icon>\n            </button>\n          </ng-template>\n          <form [@animateStagger]=\"{ value: '50' }\"\n                [formGroup]=\"resetPasswordFormGroup\"\n                (ngSubmit)=\"resetPasswordFormGroup.valid && resetPassword()\">\n            <mat-card class=\"reset-password-card\">\n              <mat-card-content>\n                <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" class=\"full-width\"\n                                [appearance]=\"appearance\">\n                  <mat-label> {{ resetPasswordTabText }} </mat-label>\n                  <input matInput\n                        [title]=\"resetPasswordInputText\"\n                        formControlName=\"email\"\n                        required>\n                  <mat-icon matSuffix [color]=\"color\">email</mat-icon>\n                  <mat-error *ngIf=\"resetPasswordEmailFormControl.hasError('required')\">\n                    {{resetPasswordErrorRequiredText}}\n                  </mat-error>\n                  <mat-error *ngIf=\"resetPasswordEmailFormControl.hasError('pattern')\">\n                    {{resetPasswordErrorPatternText}}\n                  </mat-error>\n                </mat-form-field>\n                <p *ngIf=\"passReset\">{{resetPasswordInstructionsText}}</p>\n              </mat-card-content>\n              <mat-card-actions fxLayoutAlign=\"center\">\n                <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n                <button [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                        mat-raised-button\n                        type=\"submit\"\n                        [color]=\"color\">\n                  {{resetPasswordActionButtonText}}\n                </button>\n              </mat-card-actions>\n            </mat-card>\n          </form>\n        </mat-tab>\n\n      </mat-tab-group>\n      <mat-divider></mat-divider>\n      <ngx-auth-firebaseui-providers *ngIf=\"tabIndex !== 2\"\n                                     [providers]=\"providers\"\n                                     [theme]=\"providersTheme\">\n      </ngx-auth-firebaseui-providers>\n    </ng-template>\n  ",
                        styles: ["\n    .mat-card{margin:2rem}.space-top{margin-top:.5rem}.full-width{width:100%}.cut-text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.signed-in-container .account-circle{font-size:12rem;width:12rem;height:12rem}.signed-in-container img.account-circle{-o-object-fit:cover;object-fit:cover;border-radius:50%}.signed-in-container .sign-out-button{margin-top:2rem}.signed-in-container .user-display-name{margin-top:1rem}.signed-in-container .user-email{margin-top:-1rem}.signed-in-container .actions{margin-top:2rem}.signed-in-container .actions .action-button,.signed-in-container .actions mat-progress-bar{width:100%}.signed-in-container .actions .action-button{margin-top:1rem}.reset-password-tab mat-progress-bar{margin-bottom:1rem}.reset-password-tab__close-button{width:100%;display:flex;justify-content:space-between;align-items:center}.reset-password-tab__close-button mat-icon{font-size:18px;position:relative;top:-1px}\n  "],
                        animations: NgxAuthFirebaseuiAnimations,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        /** @nocollapse */
        AuthComponent.ctorParameters = function () { return [
            { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
            { type: i2$1.AngularFireAuth },
            { type: AuthProcessService },
            { type: material.MatDialog },
            { type: undefined, decorators: [{ type: i0.Inject, args: [i0.forwardRef((/**
                             * @return {?}
                             */
                            function () { return NgxAuthFirebaseUIConfigToken; })),] }] },
            { type: i2.ActivatedRoute },
            { type: i0.ChangeDetectorRef }
        ]; };
        AuthComponent.propDecorators = {
            matTabGroup: [{ type: i0.ViewChild, args: [material.MatTabGroup, { static: false },] }],
            passwordStrength: [{ type: i0.ViewChild, args: [passwordStrength.MatPasswordStrengthComponent, { static: false },] }],
            providers: [{ type: i0.Input }],
            providersTheme: [{ type: i0.Input }],
            appearance: [{ type: i0.Input }],
            tabIndex: [{ type: i0.Input }],
            registrationEnabled: [{ type: i0.Input }],
            resetPasswordEnabled: [{ type: i0.Input }],
            guestEnabled: [{ type: i0.Input }],
            tosUrl: [{ type: i0.Input }],
            privacyPolicyUrl: [{ type: i0.Input }],
            goBackURL: [{ type: i0.Input }],
            messageOnAuthSuccess: [{ type: i0.Input }],
            messageOnAuthError: [{ type: i0.Input }],
            messageOnEmailConfirmationSuccess: [{ type: i0.Input }],
            onSuccess: [{ type: i0.Output }],
            onError: [{ type: i0.Output }],
            selectedTabChange: [{ type: i0.Output }],
            enableLengthRule: [{ type: i0.Input }],
            enableLowerCaseLetterRule: [{ type: i0.Input }],
            enableUpperCaseLetterRule: [{ type: i0.Input }],
            enableDigitRule: [{ type: i0.Input }],
            enableSpecialCharRule: [{ type: i0.Input }],
            min: [{ type: i0.Input }],
            max: [{ type: i0.Input }],
            customValidator: [{ type: i0.Input }],
            onStrengthChanged: [{ type: i0.Output }],
            verifyEmailTemplate: [{ type: i0.Input }],
            verifyEmailTitleText: [{ type: i0.Input }],
            verifyEmailConfirmationText: [{ type: i0.Input }],
            verifyEmailGoBackText: [{ type: i0.Input }],
            sendNewVerificationEmailText: [{ type: i0.Input }],
            signOutText: [{ type: i0.Input }],
            resetPasswordTabText: [{ type: i0.Input }],
            resetPasswordInputText: [{ type: i0.Input }],
            resetPasswordErrorRequiredText: [{ type: i0.Input }],
            resetPasswordErrorPatternText: [{ type: i0.Input }],
            resetPasswordActionButtonText: [{ type: i0.Input }],
            resetPasswordInstructionsText: [{ type: i0.Input }],
            signInTabText: [{ type: i0.Input }],
            signInCardTitleText: [{ type: i0.Input }],
            loginButtonText: [{ type: i0.Input }],
            forgotPasswordButtonText: [{ type: i0.Input }],
            nameText: [{ type: i0.Input }],
            nameErrorRequiredText: [{ type: i0.Input }],
            nameErrorMinLengthText: [{ type: i0.Input }],
            nameErrorMaxLengthText: [{ type: i0.Input }],
            emailText: [{ type: i0.Input }],
            emailErrorRequiredText: [{ type: i0.Input }],
            emailErrorPatternText: [{ type: i0.Input }],
            passwordText: [{ type: i0.Input }],
            passwordErrorRequiredText: [{ type: i0.Input }],
            passwordErrorMinLengthText: [{ type: i0.Input }],
            passwordErrorMaxLengthText: [{ type: i0.Input }],
            registerTabText: [{ type: i0.Input }],
            registerCardTitleText: [{ type: i0.Input }],
            registerButtonText: [{ type: i0.Input }],
            guestButtonText: [{ type: i0.Input }],
            emailConfirmationTitle: [{ type: i0.Input }],
            emailConfirmationText: [{ type: i0.Input }]
        };
        return AuthComponent;
    }());

    var __awaiter$4 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$4 = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var UserComponent = /** @class */ (function () {
        function UserComponent(auth, authProcess, _fireStoreService, snackBar, config) {
            this.auth = auth;
            this.authProcess = authProcess;
            this._fireStoreService = _fireStoreService;
            this.snackBar = snackBar;
            this.config = config;
            this.canLogout = true;
            this.canEditAccount = true;
            this.canDeleteAccount = true;
            this.onSignOut = new i0.EventEmitter();
            this.onAccountEdited = new i0.EventEmitter();
            this.onAccountDeleted = new i0.EventEmitter();
        }
        /**
         * @protected
         * @return {?}
         */
        UserComponent.prototype.initUpdateFormGroup = /**
         * @protected
         * @return {?}
         */
        function () {
            /** @type {?} */
            var currentUser = this.auth.auth.currentUser;
            this.updateFormGroup = new forms.FormGroup({
                name: this.updateNameFormControl = new forms.FormControl({ value: currentUser.displayName, disabled: this.editMode }, [
                    forms.Validators.required,
                    forms.Validators.minLength(this.config.nameMinLength),
                    forms.Validators.maxLength(this.config.nameMaxLength)
                ]),
                email: this.updateEmailFormControl = new forms.FormControl({ value: currentUser.email, disabled: this.editMode }, [
                    forms.Validators.required,
                    forms.Validators.pattern(EMAIL_REGEX)
                ]),
                phoneNumber: this.updatePhoneNumberFormControl = new forms.FormControl({ value: currentUser.phoneNumber, disabled: this.editMode }, [forms.Validators.pattern(PHONE_NUMBER_REGEX)])
            });
            this.updateFormGroup.enable();
        };
        /**
         * @return {?}
         */
        UserComponent.prototype.changeEditMode = /**
         * @return {?}
         */
        function () {
            this.editMode = !this.editMode;
            this.editMode ? this.initUpdateFormGroup() : this.reset();
        };
        /**
         * @return {?}
         */
        UserComponent.prototype.reset = /**
         * @return {?}
         */
        function () {
            this.updateFormGroup.reset();
            this.updateFormGroup.disable();
            this.updateFormGroup = null;
        };
        /**
         * @return {?}
         */
        UserComponent.prototype.save = /**
         * @return {?}
         */
        function () {
            return __awaiter$4(this, void 0, void 0, function () {
                var user, snackBarMsg, error_1;
                return __generator$4(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.updateFormGroup.dirty) return [3 /*break*/, 12];
                            user = this.auth.auth.currentUser;
                            // ngx-auth-firebaseui-user.updateProfile()
                            // ngx-auth-firebaseui-user.updateEmail()
                            // console.log('form = ', this.updateFormGroup);
                            snackBarMsg = [];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 10, , 11]);
                            if (!this.updateNameFormControl.dirty) return [3 /*break*/, 3];
                            return [4 /*yield*/, user.updateProfile({ displayName: this.updateNameFormControl.value, photoURL: null })];
                        case 2:
                            _a.sent();
                            snackBarMsg.push("your name has been updated to " + user.displayName);
                            _a.label = 3;
                        case 3:
                            if (!this.updateEmailFormControl.dirty) return [3 /*break*/, 5];
                            return [4 /*yield*/, user.updateEmail(this.updateEmailFormControl.value)];
                        case 4:
                            _a.sent();
                            snackBarMsg.push("your email has been updated to " + user.email);
                            _a.label = 5;
                        case 5:
                            if (!this.updatePhoneNumberFormControl.dirty) return [3 /*break*/, 7];
                            return [4 /*yield*/, user.updatePhoneNumber(this.updatePhoneNumberFormControl.value)];
                        case 6:
                            _a.sent();
                            console.log('phone number = ', this.updatePhoneNumberFormControl.value);
                            snackBarMsg.push("your phone number has been updated to " + user.phoneNumber);
                            _a.label = 7;
                        case 7:
                            if (!this.config.enableFirestoreSync) return [3 /*break*/, 9];
                            return [4 /*yield*/, this._fireStoreService.updateUserData(this.authProcess.parseUserInfo(user))];
                        case 8:
                            _a.sent();
                            _a.label = 9;
                        case 9: return [3 /*break*/, 11];
                        case 10:
                            error_1 = _a.sent();
                            this.authProcess.showToast(error_1 && error_1.message ? error_1.message : error_1);
                            console.error(error_1);
                            return [3 /*break*/, 11];
                        case 11:
                            if (snackBarMsg.length > 0) {
                                this.authProcess.showToast(snackBarMsg.join('\\n'));
                            }
                            _a.label = 12;
                        case 12:
                            this.editMode = false;
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        UserComponent.prototype.signOut = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.auth.auth.signOut()
                .then((/**
             * @return {?}
             */
            function () { return _this.onSignOut.emit(); }))
                .catch((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return console.error('An error happened while signing out!', e); }));
        };
        /**
         * Delete the account of the current firebase ngx-auth-firebaseui-user
         *
         * On Success, emit the <onAccountDeleted> event and toast a msg!#
         * Otherwise, log the and toast and error msg!
         *
         */
        /**
         * Delete the account of the current firebase ngx-auth-firebaseui-user
         *
         * On Success, emit the <onAccountDeleted> event and toast a msg!#
         * Otherwise, log the and toast and error msg!
         *
         * @return {?}
         */
        UserComponent.prototype.deleteAccount = /**
         * Delete the account of the current firebase ngx-auth-firebaseui-user
         *
         * On Success, emit the <onAccountDeleted> event and toast a msg!#
         * Otherwise, log the and toast and error msg!
         *
         * @return {?}
         */
        function () {
            return __awaiter$4(this, void 0, void 0, function () {
                var user, error_2;
                return __generator$4(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            user = this.auth.auth.currentUser;
                            // await this.authProcess.deleteAccount();
                            return [4 /*yield*/, this.auth.auth.currentUser.delete()];
                        case 1:
                            // await this.authProcess.deleteAccount();
                            _a.sent();
                            // if (this.config.enableFirestoreSync) {
                            return [4 /*yield*/, this._fireStoreService.deleteUserData(user.uid)];
                        case 2:
                            // if (this.config.enableFirestoreSync) {
                            _a.sent();
                            // }
                            this.onAccountDeleted.emit();
                            this.editMode = false;
                            console.log('Your account has been successfully deleted!');
                            this.authProcess.showToast('Your account has been successfully deleted!');
                            return [3 /*break*/, 4];
                        case 3:
                            error_2 = _a.sent();
                            console.log('Error while delete user account', error_2);
                            this.authProcess.showToast("Error occurred while deleting your account: " + error_2.message);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        UserComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-auth-firebaseui-user',
                        template: "\n    <div *ngIf=\"auth.authState| async as user; then authenticated else none\">\n\n    </div>\n\n    <ng-template #authenticated>\n      <mat-card *ngIf=\"auth.user | async as user\">\n        <!--<form [formGroup]=\"updateFormGroup\" >-->\n        <!--card header-->\n        <mat-card-header fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n          <img mat-card-avatar [src]=\"authProcess?.getUserPhotoUrl()\">\n\n          <div *ngIf=\"user.emailVerified; then emailVerified else emailNotVerified\"></div>\n          <ng-template #emailVerified>\n            <mat-icon color=\"primary\"\n                      matTooltip=\"email is verified\"\n                      matTooltipPosition=\"after\">\n              verified_user\n            </mat-icon>\n          </ng-template>\n          <ng-template #emailNotVerified>\n            <mat-icon color=\"warn\"\n                      matTooltip=\"email is not verified\"\n                      matTooltipPosition=\"after\">\n              warning\n            </mat-icon>\n          </ng-template>\n\n        </mat-card-header>\n\n        <!--card content-->\n        <mat-card-content *ngIf=\"editMode; then edit else readonly\">\n        </mat-card-content>\n\n        <ng-template #edit>\n          <form [formGroup]=\"updateFormGroup\" (submit)=\"save()\">\n\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n              <div fxLayoutAlign=\"center\">\n                <button mat-raised-button color=\"warn\" class=\"edit-button\"\n                        (click)=\"changeEditMode()\">\n                  cancel\n                </button>\n              </div>\n\n              <!--name-->\n              <mat-form-field class=\"full-width\" [appearance]=\"appearance\">\n                <mat-label>Name</mat-label>\n                <input matInput\n                       placeholder=\"Name\"\n                       [formControl]=\"updateNameFormControl\">\n                <mat-icon matSuffix>person</mat-icon>\n                <mat-hint align=\"end\" aria-live=\"polite\"> {{ updateNameFormControl.value?.length }} / {{ config.nameMaxLength }} </mat-hint>\n                <mat-error *ngIf=\"updateNameFormControl.hasError('required')\">\n                  Name is required\n                </mat-error>\n              </mat-form-field>\n\n              <!--email-->\n              <mat-form-field class=\"full-width\" [appearance]=\"appearance\">\n                <mat-label>E-mail</mat-label>\n                <input matInput\n                       placeholder=\"E-mail\"\n                       [formControl]=\"updateEmailFormControl\">\n                <mat-icon matSuffix>email</mat-icon>\n                <mat-error *ngIf=\"updateEmailFormControl.hasError('required')\">\n                  E-mail is required {{updateEmailFormControl.value}}\n                </mat-error>\n                <mat-error *ngIf=\"updateEmailFormControl.hasError('pattern')\">\n                  Please enter a valid e-mail address {{updateEmailFormControl.value}}\n                </mat-error>\n              </mat-form-field>\n\n              <!--phone number-->\n              <mat-form-field class=\"full-width\" [appearance]=\"appearance\">\n                <mat-label>Phone number</mat-label>\n                <input matInput\n                       type=\"number\"\n                       placeholder=\"Phone number\"\n                       [formControl]=\"updatePhoneNumberFormControl\">\n                <mat-icon matSuffix>phone</mat-icon>\n                <mat-hint align=\"end\" aria-live=\"polite\">\n                  The phone number is international. Therefore, it should start with a + sign or 00,\n                  followed by the country code, - and national number e.g: +49-12345678 or 0041-1234567890\n\n                  NOTE : the phone number must be a valid phone credential !!\n                </mat-hint>\n                <mat-error *ngIf=\"updatePhoneNumberFormControl.hasError('pattern')\">\n                  Please enter a valid phone number\n                </mat-error>\n              </mat-form-field>\n\n            </mat-card-content>\n\n            <mat-card-actions fxLayout=\"column\">\n              <button mat-button\n                      color=\"primary\"\n                      type=\"submit\">\n                Save changes\n              </button>\n            </mat-card-actions>\n          </form>\n        </ng-template>\n\n        <ng-template #readonly>\n          <div fxLayoutAlign=\"center\">\n            <button mat-raised-button color=\"primary\" class=\"edit-button\"\n                    (click)=\"changeEditMode()\">\n              edit\n            </button>\n          </div>\n\n          <!--name-->\n          <mat-form-field class=\"full-width\" [appearance]=\"appearance\">\n            <mat-label>Name</mat-label>\n            <input matInput\n                   placeholder=\"Name\"\n                   [value]=\"user.displayName\"\n                   [disabled]=\"!editMode\">\n            <mat-icon matSuffix color=\"primary\">person</mat-icon>\n          </mat-form-field>\n\n          <!--email-->\n          <mat-form-field class=\"full-width\" [appearance]=\"appearance\">\n            <mat-label>E-mail</mat-label>\n            <input matInput\n                   placeholder=\"E-mail\" [value]=\"user.email\"\n                   [disabled]=\"!editMode\">\n            <mat-icon matSuffix color=\"primary\">email</mat-icon>\n          </mat-form-field>\n\n          <!--phone number-->\n          <mat-form-field class=\"full-width\" [appearance]=\"appearance\">\n            <mat-label>Phone number</mat-label>\n            <input matInput\n                   placeholder=\"Phone number\"\n                   [value]=\"user.phoneNumber\"\n                   [disabled]=\"!editMode\">\n            <mat-icon matSuffix color=\"primary\">phone</mat-icon>\n          </mat-form-field>\n\n          <mat-card-actions fxLayout=\"column\">\n            <button *ngIf=\"canLogout\" mat-button color=\"primary\" (click)=\"signOut()\">Sign out</button>\n            <button *ngIf=\"canDeleteAccount\" mat-button color=\"warn\" (click)=\"deleteAccount()\">Delete account</button>\n          </mat-card-actions>\n\n        </ng-template>\n\n      </mat-card>\n\n    </ng-template>\n\n\n    <ng-template #none>\n      <mat-card class=\"none-card\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"center center\">\n          <mat-icon color=\"accent\">warning</mat-icon>\n          <span>You are not logged in!</span>\n        </mat-card-content>\n      </mat-card>\n    </ng-template>\n  ",
                        styles: ["\n    .edit-button{margin:1rem}.full-width{width:100%}.cut-text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.none-card{min-height:430px}.none-card span{font-size:24px;text-align:center;color:rgba(0,0,0,.54)}\n  "]
                    },] },
        ];
        /** @nocollapse */
        UserComponent.ctorParameters = function () { return [
            { type: i2$1.AngularFireAuth },
            { type: AuthProcessService },
            { type: FirestoreSyncService },
            { type: material.MatSnackBar },
            { type: undefined, decorators: [{ type: i0.Inject, args: [i0.forwardRef((/**
                             * @return {?}
                             */
                            function () { return NgxAuthFirebaseUIConfigToken; })),] }] }
        ]; };
        UserComponent.propDecorators = {
            editMode: [{ type: i0.Input }],
            canLogout: [{ type: i0.Input }],
            canEditAccount: [{ type: i0.Input }],
            canDeleteAccount: [{ type: i0.Input }],
            appearance: [{ type: i0.Input }],
            onSignOut: [{ type: i0.Output }],
            onAccountEdited: [{ type: i0.Output }],
            onAccountDeleted: [{ type: i0.Output }]
        };
        return UserComponent;
    }());

    var __awaiter$5 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$5 = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    /** @type {?} */
    var defaultTranslations = {
        verifyEmailTitleText: 'Confirm your e-mail address!',
        verifyEmailConfirmationText: 'A confirmation e-mail has been sent. Check your inbox and click on the link "Confirm my e-mail" to confirm your e-mail address.',
        verifyEmailGoBackText: 'Go back',
        sendNewVerificationEmailText: 'Send new confirmation e-mail',
        signOutText: 'Sign out',
        messageOnEmailConfirmationSuccess: 'A new confirmation e-mail has been sent. Please check your inbox.',
    };
    var EmailConfirmationComponent = /** @class */ (function () {
        function EmailConfirmationComponent(authProcess, _router, _cdr) {
            this.authProcess = authProcess;
            this._router = _router;
            this._cdr = _cdr;
            this.signOut = new i0.EventEmitter();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        EmailConfirmationComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.verifyEmailTemplate && changes.verifyEmailTemplate.currentValue == null) {
                this.verifyEmailTemplate = this.defaultTemplate;
                console.log('ngOnChanges - defaultTemplate:', this.verifyEmailTemplate);
            }
            this.verifyEmailContext = this.createTemplateContext();
        };
        /**
         * @return {?}
         */
        EmailConfirmationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (!this.verifyEmailTemplate) {
                console.log('ngOnInit - defaultTemplate');
                this.verifyEmailTemplate = this.defaultTemplate;
            }
            this.verifyEmailContext = this.createTemplateContext();
            console.log('verifyEmailTemplate:', this.verifyEmailTemplate);
            console.log('verifyEmailContext:', this.verifyEmailContext);
        };
        /**
         * @return {?}
         */
        EmailConfirmationComponent.prototype.continue = /**
         * @return {?}
         */
        function () {
            return __awaiter$5(this, void 0, void 0, function () {
                var error_1;
                return __generator$5(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, this.authProcess.reloadUserInfo()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this._router.navigate([this.goBackURL])];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            this.authProcess.notifyError(error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        EmailConfirmationComponent.prototype.sendNewVerificationEmail = /**
         * @return {?}
         */
        function () {
            return __awaiter$5(this, void 0, void 0, function () {
                var error_2;
                return __generator$5(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, 3, 4]);
                            this.isLoading = true;
                            this._cdr.markForCheck();
                            return [4 /*yield*/, this.authProcess.sendNewVerificationEmail()];
                        case 1:
                            _a.sent();
                            this.authProcess.showToast(this.verifyEmailContext.messageOnEmailConfirmationSuccess);
                            return [3 /*break*/, 4];
                        case 2:
                            error_2 = _a.sent();
                            this.authProcess.notifyError(error_2);
                            return [3 /*break*/, 4];
                        case 3:
                            this.isLoading = false;
                            this._cdr.markForCheck();
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @private
         * @return {?}
         */
        EmailConfirmationComponent.prototype.createTemplateContext = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var context = {
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
        };
        EmailConfirmationComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-auth-firebaseui-email-confirmation',
                        template: "\n    <ng-container *ngTemplateOutlet=\"verifyEmailTemplate; context: verifyEmailContext\"></ng-container>\n    <ng-template #defaultVerifyEmail let-email=\"email\" let-goBackURL=\"goBackURL\" let-verifyEmailTitleText=\"verifyEmailTitleText\" let-verifyEmailConfirmationText=\"verifyEmailConfirmationText\" let-verifyEmailGoBackText=\"verifyEmailGoBackText\" let-signOutText=\"signOutText\" let-sendNewVerificationEmailText=\"sendNewVerificationEmailText\">\n      <mat-card class=\"verify-email\">\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <mat-icon>email</mat-icon>\n          <p class=\"title\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n              <span class=\"mat-subheading-2\">{{ verifyEmailTitleText }}</span>\n              <span class=\"mat-body-2\">{{ email }}</span>\n            </p>\n            <p class=\"subtitle\">{{ verifyEmailConfirmationText }}</p>\n            <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n        </mat-card-content>\n        <mat-card-actions fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <button *ngIf=\"goBackURL\" mat-stroked-button (click)=\"continue()\" class=\"go-back-button action-button\">\n            {{ verifyEmailGoBackText }}\n          </button>\n          <button mat-stroked-button (click)=\"sendNewVerificationEmail()\" class=\"send-new-mail-button action-button\">{{ sendNewVerificationEmailText }}</button>\n          <button mat-stroked-button color=\"warn\" (click)=\"this.signOut.emit()\" class=\"sign-out-button action-button\">{{ signOutText }}</button>\n        </mat-card-actions>\n      </mat-card>\n    </ng-template>\n  ",
                        styles: ["\n    .material-icons{font-size:4rem}.verify-email{width:360px}.verify-email .mat-icon{height:4rem;width:4rem;color:#444}.verify-email .title{margin-top:16px}.verify-email .title .mat-subheading-2{margin-bottom:0}.verify-email .subtitle{margin:16px auto;text-align:justify}.verify-email p{display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0}.verify-email mat-card-actions{text-align:center;margin-top:1rem}.verify-email mat-card-actions .action-button{width:100%}.verify-email mat-card-actions .action-button+.action-button{margin-top:1rem}\n  "],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        /** @nocollapse */
        EmailConfirmationComponent.ctorParameters = function () { return [
            { type: AuthProcessService },
            { type: i2.Router },
            { type: i0.ChangeDetectorRef }
        ]; };
        EmailConfirmationComponent.propDecorators = {
            email: [{ type: i0.Input }],
            goBackURL: [{ type: i0.Input }],
            verifyEmailTitleText: [{ type: i0.Input }],
            verifyEmailConfirmationText: [{ type: i0.Input }],
            verifyEmailGoBackText: [{ type: i0.Input }],
            sendNewVerificationEmailText: [{ type: i0.Input }],
            signOutText: [{ type: i0.Input }],
            messageOnEmailConfirmationSuccess: [{ type: i0.Input }],
            template: [{ type: i0.Input }],
            signOut: [{ type: i0.Output }],
            defaultTemplate: [{ type: i0.ViewChild, args: ['defaultVerifyEmail', { static: true },] }]
        };
        return EmailConfirmationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultAuthFirebaseUIConfig = {
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
    var __generator$6 = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var NgxAuthFirebaseuiAvatarComponent = /** @class */ (function () {
        function NgxAuthFirebaseuiAvatarComponent(afa, dialog) {
            this.afa = afa;
            this.dialog = dialog;
            this.canLogout = true;
            this.onSignOut = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        NgxAuthFirebaseuiAvatarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.user$ = this.afa.user;
            this.user$.subscribe((/**
             * @param {?} user
             * @return {?}
             */
            function (user) {
                _this.user = user;
                _this.displayNameInitials = user ? _this.getDisplayNameInitials(user.displayName) : null;
            }));
        };
        /**
         * @param {?} displayName
         * @return {?}
         */
        NgxAuthFirebaseuiAvatarComponent.prototype.getDisplayNameInitials = /**
         * @param {?} displayName
         * @return {?}
         */
        function (displayName) {
            if (!displayName) {
                return null;
            }
            /** @type {?} */
            var initialsRegExp = displayName.match(/\b\w/g) || [];
            /** @type {?} */
            var initials = ((initialsRegExp.shift() || '') + (initialsRegExp.pop() || '')).toUpperCase();
            return initials;
        };
        /**
         * @return {?}
         */
        NgxAuthFirebaseuiAvatarComponent.prototype.openProfile = /**
         * @return {?}
         */
        function () {
            this.dialog.open(UserComponent);
        };
        /**
         * @return {?}
         */
        NgxAuthFirebaseuiAvatarComponent.prototype.signOut = /**
         * @return {?}
         */
        function () {
            return __awaiter$6(this, void 0, void 0, function () {
                var e_1;
                return __generator$6(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.afa.auth.signOut()];
                        case 1:
                            _a.sent();
                            // Sign-out successful.
                            this.onSignOut.emit();
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            // An error happened.
                            console.error('An error happened while signing out!', e_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        NgxAuthFirebaseuiAvatarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-auth-firebaseui-avatar',
                        template: "\n    <button *ngIf=\"user\"\n            mat-mini-fab\n            [matMenuTriggerFor]=\"posXMenu\"\n            aria-label=\"Open x-positioned menu\"\n            [style.background-image]=\"'url(' + user?.photoURL + ')'\"\n            style=\"background-size: cover\"\n            [matTooltip]=\"user?.displayName\">\n      <span *ngIf=\"user?.photoURL\">{{displayNameInitials}}</span>\n    </button>\n\n    <mat-menu xPosition=\"before\" #posXMenu=\"matMenu\" class=\"before\">\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" style=\"padding-left: 10px; padding-right: 10px\">\n        <button mat-fab\n                [style.background-image]=\"'url(' + user?.photoURL + ')'\"\n                style=\"background-size: cover\">\n          <span *ngIf=\"user?.photoURL\">{{displayNameInitials}}</span>\n        </button>\n        <div fxLayout=\"column\" style=\"padding-left: 10px; padding-right: 10px\">\n          <strong mat-card-title>{{user?.displayName}}</strong>\n          <em mat-card-subtitle style=\"font-style: italic\">{{user?.email}}</em>\n        </div>\n      </div>\n\n      <div fxLayout=\"column\" fxFlex=\"100\">\n        <div class=\"links-menu\" *ngFor=\"let menuItem of links\">\n          <button mat-menu-item (click)=\"menuItem?.callback()\">\n            <mat-icon>{{menuItem?.icon}}</mat-icon>{{menuItem?.text}}</button>\n        </div>\n        <button mat-raised-button fxLayoutAlign=\"center\" color=\"primary\" (click)=\"openProfile()\">Profile\n        </button>\n        <button *ngIf=\"canLogout\" mat-raised-button fxLayoutAlign=\"center\" color=\"warn\" (click)=\"signOut()\">Sign Out\n        </button>\n      </div>\n    </mat-menu>\n  ",
                        styles: ["\n    .mat-raised-button{margin:.2rem 1rem}.links-menu{text-align:center}\n  "]
                    },] },
        ];
        /** @nocollapse */
        NgxAuthFirebaseuiAvatarComponent.ctorParameters = function () { return [
            { type: i2$1.AngularFireAuth },
            { type: material.MatDialog }
        ]; };
        NgxAuthFirebaseuiAvatarComponent.propDecorators = {
            canLogout: [{ type: i0.Input }],
            links: [{ type: i0.Input }],
            onSignOut: [{ type: i0.Output }]
        };
        return NgxAuthFirebaseuiAvatarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoggedInGuard = /** @class */ (function () {
        function LoggedInGuard$1(config, router, authProcess) {
            this.config = config;
            this.router = router;
            this.authProcess = authProcess;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        LoggedInGuard$1.prototype.canActivate = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        function (route, state) {
            var _this = this;
            return this.authProcess.afa.user.pipe(operators.map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) {
                if (user) {
                    if (_this.config.guardProtectedRoutesUntilEmailIsVerified && !user.emailVerified && !user.isAnonymous) {
                        if (_this.config.authGuardFallbackURL) {
                            _this.router.navigate(["" + _this.config.authGuardFallbackURL], { queryParams: { redirectUrl: state.url } });
                        }
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                else {
                    if (_this.config.authGuardFallbackURL) {
                        _this.router.navigate(["/" + _this.config.authGuardFallbackURL], { queryParams: { redirectUrl: state.url } });
                    }
                    return false;
                }
            })));
        };
        LoggedInGuard$1.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        LoggedInGuard$1.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: i0.Inject, args: [NgxAuthFirebaseUIConfigToken,] }] },
            { type: i2.Router },
            { type: AuthProcessService }
        ]; };
        /** @nocollapse */ LoggedInGuard$1.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LoggedInGuard_Factory() { return new LoggedInGuard(i0.ɵɵinject(NgxAuthFirebaseUIConfigToken), i0.ɵɵinject(i2.Router), i0.ɵɵinject(AuthProcessService)); }, token: LoggedInGuard, providedIn: "root" });
        return LoggedInGuard$1;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // This token is the official token containing the final configuration; ie. the merge between default and user provided configurations
    /** @type {?} */
    var NgxAuthFirebaseUIConfigToken = new i0.InjectionToken('NgxAuthFirebaseUIConfigToken');
    // This is an intermediate token containing only user-provided configuration
    /** @type {?} */
    var UserProvidedConfigToken = new i0.InjectionToken('UserProvidedConfigToken');
    var NgxAuthFirebaseUIModule = /** @class */ (function () {
        function NgxAuthFirebaseUIModule(_iconRegistry, _sanitizer, _auth) {
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
        NgxAuthFirebaseUIModule.forRoot = /**
         * @param {?} configFactory
         * @param {?=} appNameFactory
         * @param {?=} config
         * @return {?}
         */
        function (configFactory, appNameFactory, config) {
            if (config === void 0) { config = {}; }
            return {
                ngModule: NgxAuthFirebaseUIModule,
                providers: [
                    {
                        provide: fire.FirebaseOptionsToken,
                        useValue: configFactory
                    },
                    {
                        provide: fire.FirebaseNameOrConfigToken,
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
        };
        /**
         * @return {?}
         */
        NgxAuthFirebaseUIModule.prototype.registerProviderIcons = /**
         * @return {?}
         */
        function () {
            this._iconRegistry
                .addSvgIcon('google', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/google.svg'))
                .addSvgIcon('google-colored', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/google.svg'))
                .addSvgIcon('facebook', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/facebook.svg'))
                .addSvgIcon('twitter', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/twitter.svg'))
                .addSvgIcon('github', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/github-circle.svg'))
                .addSvgIcon('microsoft', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/microsoft.svg'))
                .addSvgIcon('yahoo', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/yahoo.svg'))
                .addSvgIcon('phone', this._sanitizer.bypassSecurityTrustResourceUrl('/assets/phone.svg'));
        };
        NgxAuthFirebaseUIModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            // HTTP
                            i2.RouterModule,
                            http.HttpClientModule,
                            // FLEX_LAYOUT
                            flexLayout.FlexLayoutModule,
                            // FORMS
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            // MATERIAL2
                            tabs.MatTabsModule,
                            card.MatCardModule,
                            input.MatInputModule,
                            button.MatButtonModule,
                            icon.MatIconModule,
                            i3.MatSnackBarModule,
                            divider.MatDividerModule,
                            chips.MatChipsModule,
                            tooltip.MatTooltipModule,
                            dialog.MatDialogModule,
                            checkbox.MatCheckboxModule,
                            progressSpinner.MatProgressSpinnerModule,
                            progressBar.MatProgressBarModule,
                            dialog.MatDialogModule,
                            menu.MatMenuModule,
                            // ANGULAR MATERIAL EXTENSIONS
                            passwordStrength.MatPasswordStrengthModule,
                            // ANGULARFIRE2
                            i2$1.AngularFireAuthModule,
                            i2$2.AngularFirestoreModule,
                        ],
                        exports: [
                            AuthComponent,
                            UserComponent,
                            NgxAuthFirebaseuiAvatarComponent,
                            AuthProvidersComponent,
                            EmailConfirmationComponent,
                            // LoggedInGuard,
                            i2$1.AngularFireAuthModule,
                            i2$2.AngularFirestoreModule,
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
        NgxAuthFirebaseUIModule.ctorParameters = function () { return [
            { type: icon.MatIconRegistry },
            { type: platformBrowser.DomSanitizer },
            { type: AuthProcessService }
        ]; };
        return NgxAuthFirebaseUIModule;
    }());

    exports.AuthComponent = AuthComponent;
    exports.AuthProcessService = AuthProcessService;
    exports.AuthProvider = AuthProvider;
    exports.AuthProvidersComponent = AuthProvidersComponent;
    exports.FirestoreSyncService = FirestoreSyncService;
    exports.Layout = Layout;
    exports.LegalityDialogComponent = LegalityDialogComponent;
    exports.LoggedInGuard = LoggedInGuard;
    exports.NgxAuthFirebaseUIConfigToken = NgxAuthFirebaseUIConfigToken;
    exports.NgxAuthFirebaseUIModule = NgxAuthFirebaseUIModule;
    exports.NgxAuthFirebaseuiAvatarComponent = NgxAuthFirebaseuiAvatarComponent;
    exports.NgxAuthFirebaseuiLoginComponent = NgxAuthFirebaseuiLoginComponent;
    exports.NgxAuthFirebaseuiRegisterComponent = NgxAuthFirebaseuiRegisterComponent;
    exports.Theme = Theme;
    exports.UserComponent = UserComponent;
    exports.UserProvidedConfigToken = UserProvidedConfigToken;
    exports.ɵa = defaultAuthFirebaseUIConfig;
    exports.ɵb = ngxAuthFirebaseUIConfigFactory;
    exports.ɵc = NgxAuthFirebaseuiAnimations;
    exports.ɵd = EmailConfirmationComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-auth-firebaseui.umd.js.map
