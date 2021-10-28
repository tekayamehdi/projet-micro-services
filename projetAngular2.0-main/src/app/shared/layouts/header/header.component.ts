import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    loggedin = false;
    language = 'English';
    userrole: string;

    constructor(private translate: TranslateService, private router: Router) {
    }


    ngOnInit() {


    }

    ngDoCheck() {
        this.userrole = sessionStorage.getItem('role');
        // console.log(this.user_role);

        const usersessionid = sessionStorage.getItem('user_session_id');
        if (usersessionid) {
            this.loggedin = true;
        }
    }

    switchLanguage(language: string) {
        this.translate.use(language);
        if (language === 'en') {
            this.language = 'English';
        } else if (language === 'fr') {
            this.language = 'Français';
        }
    }

    logOut() {
        sessionStorage.removeItem('user_session_id');
        sessionStorage.removeItem('role');
        this.router.navigateByUrl('/sign-in');
        location.reload();
    }

}
