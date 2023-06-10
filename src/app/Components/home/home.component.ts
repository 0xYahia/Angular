import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, map } from 'rxjs';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // private subscription!: Subscription;
  private subscriptions: Subscription[] = [];
  storeInfo: StoreData;
  isImageShown: boolean = true;
  constructor(private promoAds: PromotionAdsService) {
    this.storeInfo = new StoreData(
      'ITI Store',
      'https://picsum.photos/400/200',
      ['Cairo', 'Alex', 'Ismailia', 'Assiut']
    );
  }
  ngOnInit(): void {
    let observer = {
      next: (data: string) => console.log(data),
      error: (err: string) => console.log(err),
      complete: () => console.log('Finished Ads'),
    };
    // this.promoAds.getScheduledAds(2).subscribe( // not recommended (old syntax)
    //   (data: string) => console.log(data),
    //   (err: string) => console.log(err),
    //   () => console.log('Finished Ads')
    // );
    // let adsSubscription: Subscription = this.promoAds
    // this.subscription = this.promoAds.getScheduledAds(2).subscribe({
    // let adsSubscription: Subscription = this.promoAds
    //   .getScheduledAds(2)
    //   .subscribe({
    //     next: (data: string) => console.log(data),
    //     error: (err: string) => console.log(err),
    //     complete: () => console.log('Finished Ads'),
    //   });
    // adsSubscription.unsubscribe(); // this wrong because it will unsubscribe before the subscribe
    // because the subscribe is asynchronous code
    // this.subscriptions.push(adsSubscription);
    // let sub = this.promoAds.getSerialAds().subscribe((ads) => console.log(ads));
    // this.subscriptions.push(sub);

    let filtersObservable = this.promoAds.getScheduledAds(2).pipe(
      filter((ad) => ad.includes('White Friday')),
      map((ad) => 'Ad: ' + ad)
    );
    let adsSubscription = filtersObservable.subscribe(observer);
    this.subscriptions.push(adsSubscription);
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
  toggleImage() {
    this.isImageShown = !this.isImageShown;
  }
}
