import { UserProfile } from './../model/user_profile';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  userProfile: UserProfile = new UserProfile();

  constructor() { }

  getUserProfile(): Observable<UserProfile> {
    return of(this.userProfile);
  }

  updateUserProfile(userProfile : UserProfile): Observable<UserProfile> {
    this.userProfile = userProfile;
    return of(this.userProfile);
  }


}
