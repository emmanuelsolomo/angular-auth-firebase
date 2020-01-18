import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthProcessService, NgxAuthFirebaseUIConfig } from '../ngx-auth-firebase-u-i.module';
export declare class LoggedInGuard implements CanActivate {
    private config;
    private router;
    private authProcess;
    constructor(config: NgxAuthFirebaseUIConfig, router: Router, authProcess: AuthProcessService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
}
