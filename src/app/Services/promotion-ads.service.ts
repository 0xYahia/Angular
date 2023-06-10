import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionAdsService {
  private adsList: string[];
  constructor() {
    this.adsList = [
      'Big Discounts',
      'Sale upt to 50%',
      'Check our White Friday offers',
      // '',
      'Special White Friday offers up to 70%',
    ];
  }

  getScheduledAds(intervalInSeconds: number): Observable<string> {
    return new Observable<string>((observer) => {
      // observer.next()
      // observer.error()
      // observer.complete()
      let counter = 0;
      let adsTimer = setInterval(() => {
        console.log('In interval');
        if (counter == this.adsList.length) observer.complete();
        if (this.adsList[counter] == '') observer.error('No There Ads');
        observer.next(this.adsList[counter++]);
      }, intervalInSeconds * 1000);
      return {
        // Will be called:
        // 1) Error
        // 2) Complete
        // 3) unsubscribe() manually
        unsubscribe() {
          clearInterval(adsTimer);
          console.log('In Obs Unsubscribe');
        },
      };
    });
  }

  getSerialAds(): Observable<string> {
    // return from(this.adsList);
    return of('ad1', 'ad2', 'ad3');
  }
}
