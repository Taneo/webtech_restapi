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
        const URL = this.dataUrl + id;
        return this.http.delete(URL); 
    }

    /**
     * AUFGABE 3
     * Daten posten anhand des user Objekts über die RestAPI mittels der HTTP-Methode POST
     * @param user Object
     * @returns {Observable<Object>}
     */
    create(user) {
        return this.http.post(this.dataUrl,
                              JSON.stringify(user), 
                              {headers: this.headers});
    }

    /**
     * AUFGABE 4
     * Daten updaten anhand des user Objekts über die RestAPI mittels der HTTP-Methode PUT
     * @param user Object
     * @returns {Observable<Object>}
     */
    update(user) {
        const URL = this.dataUrl + user.id;
        return this.http.put(URL, 
                            JSON.stringify(user),
                            {headers: this.headers});
    }

    /**---------------- END RELEVANT FOR WORKSHOP ----------------**/
}
