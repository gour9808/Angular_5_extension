import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cache } from '../utils/storage.provider';
import { ToastMessageService } from '../services/toast-message.service';
import { Router } from '@angular/router';
import { CommunicatorService } from '../services/communicator.service';
import { AutoUnsubscribe } from '../utils/auto-unsubscribe';

@Component({
  selector: 'app-data-loader',
  templateUrl: './data-loader.component.html',
  styleUrls: ['./data-loader.component.scss']
})
@AutoUnsubscribe()
export class DataLoaderComponent implements OnInit, OnDestroy {

  times = [{ odd: true }, { odd: false }, { odd: true }, { odd: false }];
  @Cache({ pool: 'User' }) userInfo: any;
  comms$: any;
  constructor(private msgService: ToastMessageService, private router: Router, private comms: CommunicatorService) {
   
    console.log('Init Data Loader');
    this.fetchSession();
  }

  ngOnInit() {
   
  }

  ngOnDestroy() {
    console.log('On Destroy called');
  }

  fetchSession() {

    this.router.navigate(['/home'])

  }

}

