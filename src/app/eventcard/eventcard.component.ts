import { Component, OnInit } from '@angular/core';
import { EventService } from '../app.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'event-card',
    templateUrl: 'eventcard.component.html',
    styleUrls: ['eventcard.component.css']
})
export class EventCardComponent implements OnInit {
    constructor(public eventService: EventService) { }
    public currentData: any;
    public dataToShow: any;

    ngOnInit() {
        this.getCurrentNews();
    }

    getCurrentNews() {
        this.eventService.getDataFromNewsApi().subscribe(datas => {
            this.currentData = datas.articles;
            this.dataToShow = this.currentData[0];
            this.getAuthor();
        });
    }

    nextArticle() {
        this.currentData.push(this.currentData.shift());
        this.dataToShow = this.currentData[0];
        this.getAuthor();
    }

    previousArticle() {
        this.currentData.unshift(this.currentData.pop());
        this.dataToShow = this.currentData[0];
        this.getAuthor();
    }

    getAuthor() {
        if (this.dataToShow !== undefined) {
            const author = this.dataToShow.author;
            if (author === undefined || author === '' || author === null) {
                if (this.dataToShow.source.name !== null ) {
                    this.dataToShow.author = this.dataToShow.source.name;
                } else {
                this.dataToShow.author =  this.dataToShow.description.subString(this.dataToShow.description.lastIndexOf('-'));
                }
            }
        }
    }
}
