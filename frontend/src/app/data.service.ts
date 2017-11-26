import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

    /**---------------- RELEVANT FOR WORKSHOP ----------------**/
    private dataUrl = 'http://localhost:3000/api/users/';
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {
        console.log('DataService initialized');
    }

    /**
     * Daten holen über die RestAPI mittels der HTTP-Methode GET
     * @returns {Observable<Object>}
     */
    getData() {
        return this.http.get(this.dataUrl);
    }

    /**
     * Daten posten anhand des user Objekts über die RestAPI mittels der HTTP-Methode POST
     * @param user JSON
     * @returns {Observable<Object>}
     */
    create(user) {
        return this.http.post(this.dataUrl, JSON.stringify(user), {headers: this.headers});
    }

    /**
     * Daten updaten anhand des user Objekts über die RestAPI mittels der HTTP-Methode PUT
     * @param user JSON
     * @returns {Observable<Object>}
     */
    update(user) {
        const url = this.dataUrl + user.id;
        return this.http.put(url, JSON.stringify(user), {headers: this.headers});
    }

    /**
     * Daten löschen anhand der id üper die RestAPI mittels der HTTP-Methode DELETE
     * @param id Number
     * @returns {Observable<Object>}
     */
    delete(id) {
        const url = this.dataUrl + id;
        return this.http.delete(url);
    }
    /**---------------- RELEVANT FOR WORKSHOP ----------------**/
}
