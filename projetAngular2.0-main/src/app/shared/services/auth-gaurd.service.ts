import {Injectable} from '@angular/core';

import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AdminAuthGuardLogin implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const role = sessionStorage.getItem('role');
        if (role === 'admin') {
            this.router.navigate(['/admin-dashboard']);
            return false;
        } else {
            return true;
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class AdminAuthGaurdService {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const role = sessionStorage.getItem('role');
        if (role === 'admin') {
            return true;
        } else {
            this.router.navigate(['/admin-login']);
            return false;
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class SellerBuyerAuthGuardLogin implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const role = sessionStorage.getItem('role');
        if (role === 'seller') {
            this.router.navigate(['/seller-dashboard']);
            return false;
        } else if (role === 'buyer') {
            this.router.navigate(['/buyer-dashboard']);
            return false;
        } else {
            return true;
        }
    }
}


@Injectable({
    providedIn: 'root'
})
export class SellerAuthGaurdService {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const role = sessionStorage.getItem('role');
        if (role === 'seller') {
            return true;
        } else {
            this.router.navigate(['/sign-in']);
            return false;
        }
    }
}


@Injectable({
    providedIn: 'root'
})
export class BuyerAuthGaurdService {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const role = sessionStorage.getItem('role');

        if (role === 'buyer') {
            return true;
        } else {
            this.router.navigate(['/sign-in']);
            return false;
        }
    }
}
