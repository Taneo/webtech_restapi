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
     * AUFGABE 2
     * Daten löschen anhand der id üper die RestAPI mittels der HTTP-Methode DELETE
     * @param id Number
     * @returns {Observable<Object>}
     */
    delete(id) {
        
    }

    /**
     * AUFGABE 3
     * Daten posten anhand des user Objekts über die RestAPI mittels der HTTP-Methode POST
     * @param user JSON
     * @returns {Observable<Object>}
     */
    create(user) {

    }

    /**
     * AUFGABE 4
     * Daten updaten anhand des user Objekts über die RestAPI mittels der HTTP-Methode PUT
     * @param user JSON
     * @returns {Observable<Object>}
     */
    update(user) {

    }

    /**---------------- END RELEVANT FOR WORKSHOP ----------------**/
}
