import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestapiNews{
    newsUrl = "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=f3e76ca1a73b4f9592e156b159f759bc";
    newsData:any;

    constructor(public http:Http){

    }

    getNews(){
        if (this.newsData){
            return Promise.resolve(this.newsData);
        }

        return new Promise(resolve => {
            this.http.get(this.newsUrl)
            .map(res => res.json())
            .subscribe(newsData => {
                this.newsData = newsData;
                resolve(newsData);
            })
        });
    }
}