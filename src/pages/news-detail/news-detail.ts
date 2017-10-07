import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {
  newsTitle:any;
  newsDescription:any;
  newsImageUrl:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
    console.log(this.navParams.get("title"));
    this.newsTitle = this.navParams.get("title");
    this.newsDescription = this.navParams.get("description");
    this.newsImageUrl = this.navParams.get("urlToImage");
    
    
  }

}
