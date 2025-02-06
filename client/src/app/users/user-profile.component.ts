import { Component, signal, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './user.service';
import { of, Subject } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserCardComponent } from './user-card.component';

import { MatCardModule } from '@angular/material/card';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    standalone: true,
    imports: [UserCardComponent, MatCardModule]
})
export class UserProfileComponent {
  private snackBar = inject(MatSnackBar);
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);

  user = toSignal(
    this.route.paramMap.pipe(
      // Map the paramMap into the id
      map((paramMap: ParamMap) => paramMap.get('id')),
      // Maps the `id` string into the Observable<User>,
      // which will emit zero or one values depending on whether there is a
      // `User` with that ID.
      switchMap((id: string) => this.userService.getUserById(id)),
      catchError((_err) => {
        this.error.set({
          help: 'There was a problem loading the user – try again.',
          httpResponse: _err.message,
          message: _err.error?.title,
        });
        return of();
      })
      /*
       * You can uncomment the line that starts with `finalize` below to use that console message
       * as a way of verifying that this subscription is completing.
       * We removed it since we were not doing anything interesting on completion
       * and didn't want to clutter the console log
       */
      // finalize(() => console.log('We got a new user, and we are done!'))
    )
  );
  error = signal({ help: '', httpResponse: '', message: '' });

  // This `Subject` will only ever emit one (empty) value when
  // `ngOnDestroy()` is called, i.e., when this component is
  // destroyed. That can be used ot tell any subscriptions to
  // terminate, allowing the system to free up their resources (like memory).
  private ngUnsubscribe = new Subject<void>();
}
