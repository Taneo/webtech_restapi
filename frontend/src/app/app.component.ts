import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'Webtechnologien: Tools & Frameworks';
    data: any;
    selectedUser;

    /**---------------- RELEVANT FOR WORKSHOP ----------------**/

    constructor(private dataservice: DataService) {}

    /**
     * Daten über dataservice holen
     */
    getData(): void {
        this.dataservice.getData().subscribe(
            data => this.data = data, 
            error => this.data = error
        );
    }

    /**
     * AUFGABE 2
     * Daten über dataservice anhand einer id löschen
     * @param id Number
     */
    delete(id): void {

    }

    /**
     * AUFGABE 3
     * Daten erschaffen über dataservice mit einem namen und dem alter
     * @param user Object
     */
    create(user) {

    }

    /**
     * AUFGABE 4
     * Daten updaten über dataservice mit einem user Objekt
     * @param user JSON
     */
    update(user) {

    }

    ngOnInit(): void {
        this.getData();
    }

    /**---------------- RELEVANT FOR WORKSHOP ----------------**/

    selectUser(user): void {
        const userU = user.split(' ')[0];
        this.selectedUser = this.getResponseData()[userU - 1];
        console.log(this.selectedUser);
    }

    stringData(data) {
        return JSON.stringify(data);
    }

    getResponseData(){
        let result = this.data ? this.data['response'] : [];
        return result;
    }
}
