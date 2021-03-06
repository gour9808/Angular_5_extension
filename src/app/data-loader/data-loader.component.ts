import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cache } from '../utils/storage.provider';
import { ToastMessageService } from '../services/toast-message.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  @Cache({ pool: 'Session' }) userSession: any;
  comms$: any;
  constructor(private msgService: ToastMessageService, private current: ActivatedRoute, private router: Router, private comms: CommunicatorService) {

    console.log('Init Data Loader');
    console.log("token is on data loader", this.userSession.token);
    if (this.userSession.token) {
      this.router.navigate(['/home'])
    } else {
      this.router.navigate(['/auth/callback'])
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("destroy called");

  }
  
}

