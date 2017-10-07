import { RestapiNews } from './../../providers/restapi-news';
import { NewsDetailPage } from './../news-detail/news-detail';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newsData:any;
  constructor(
    public navCtrl: NavController,
    public restapiNews: RestapiNews
  ) {
    // this.newsData = ['CNN news', 'Times News', 'other news', 'other news', 'other news', 'other news', 'other news', 'other news'];
    this.getNews();
  }


  goToNewsDetail(news:any){
    this.navCtrl.push(NewsDetailPage, news);
  }

  getNews(){
    this.restapiNews.getNews()
    .then(newsData => {
      this.newsData = newsData.articles;
      console.log(newsData.articles);
    });
  }


}
