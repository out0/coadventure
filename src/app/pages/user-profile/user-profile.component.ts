
import { Component, OnInit  } from '@angular/core';
import { UserProfile } from './../../model/user_profile';
import { UserProfileService } from './../../services/user-profile.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userProfileService : UserProfileService) {
    this.userProfile = new UserProfile();
  }

  userProfile : UserProfile;

  ngOnInit(): void {
    this.userProfileService.getUserProfile().subscribe(p => this.userProfile = p);
  }

  onUsernameLostFocus() {
    this.userProfileService.updateUserProfile(this.userProfile).subscribe();
  }

  onAddFamilyMemberAdult() {
    this.userProfile.family_adults = this.userProfile.family_adults + 1;
    this.userProfileService.updateUserProfile(this.userProfile).subscribe();
  }

  onRemoveFamilyMemberAdult() {
    if (this.userProfile.family_adults == 0) return;
    this.userProfile.family_adults = this.userProfile.family_adults - 1;
    this.userProfileService.updateUserProfile(this.userProfile).subscribe();
  }

  onAddFamilyMemberTeenager() {
    this.userProfile.family_teenagers = this.userProfile.family_teenagers + 1;
    this.userProfileService.updateUserProfile(this.userProfile).subscribe();
  }

  onRemoveFamilyMemberTeenager() {
    if (this.userProfile.family_teenagers == 0) return;
    this.userProfile.family_teenagers = this.userProfile.family_teenagers - 1;
    this.userProfileService.updateUserProfile(this.userProfile).subscribe();
  }

  onAddFamilyMemberChild() {
    this.userProfile.family_children = this.userProfile.family_children + 1;
    this.userProfileService.updateUserProfile(this.userProfile).subscribe();
  }

  onRemoveFamilyMemberChild() {
    if (this.userProfile.family_children == 0) return;
    this.userProfile.family_children = this.userProfile.family_children - 1;
    this.userProfileService.updateUserProfile(this.userProfile).subscribe();
  }

  onAddFamilyMemberToodler() {
    this.userProfile.family_toodlers = this.userProfile.family_toodlers + 1;
    this.userProfileService.updateUserProfile(this.userProfile).subscribe();
  }

  onRemoveFamilyMemberToodler() {
    if (this.userProfile.family_toodlers == 0) return;
    this.userProfile.family_toodlers = this.userProfile.family_toodlers - 1;
    this.userProfileService.updateUserProfile(this.userProfile).subscribe();
  }

  onAddFamilyMemberElder() {
    this.userProfile.family_elders = this.userProfile.family_elders + 1;
    this.userProfileService.updateUserProfile(this.userProfile).subscribe();
  }

  onRemoveFamilyMemberElder() {
    if (this.userProfile.family_elders == 0) return;
    this.userProfile.family_elders = this.userProfile.family_elders - 1;
    this.userProfileService.updateUserProfile(this.userProfile).subscribe();
  }


}



