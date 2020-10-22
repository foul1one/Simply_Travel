import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class AppService {

    urlNotHome: boolean

    notHome(urlNotHomeParams: boolean) {
        if (urlNotHomeParams) {
            this.urlNotHome = true
        } else if (!urlNotHomeParams) {
            this.urlNotHome = false
        }
        return this.urlNotHome
    }

    isNotHome() {    
        return this.urlNotHome
    }
}