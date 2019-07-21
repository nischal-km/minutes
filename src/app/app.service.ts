import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EventService {
    public  API_KEY = 'your_api_key';
    public country: string;

    constructor(public http: HttpClient) {
    }

    getDataFromNewsApi(): Observable<any> {
        this.country = 'in';
        const url = `https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=${this.API_KEY}`;
        return this.http.get(url).pipe();
    }
}
