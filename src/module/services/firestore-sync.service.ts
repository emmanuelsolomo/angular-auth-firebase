import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {UserInfo} from 'firebase';

export const collections = {
  moderators: 'moderators',
};

export interface ModeratorInfo { uid: string; email: string; displayName: string, photoURL: string,  phoneNumber: string, providerId: string, bio: string, username: string, type: string};

@Injectable({
  providedIn: 'root'
})
export class FirestoreSyncService {

  constructor(public afs: AngularFirestore) {
    // this.afs.firestore.settings({timestampsInSnapshots: true});
  }

  // get timestamp() {
  //     return firebase.firestore.FieldValue.serverTimestamp();
  // }

  public getUserDocRefByUID(uid: string): AngularFirestoreDocument<ModeratorInfo> {
    return this.afs.doc(`${collections.moderators}/${uid}`);
  }

  public deleteUserData(uid: string): Promise<any> {
    const moderatorRef: AngularFirestoreDocument<ModeratorInfo> = this.getUserDocRefByUID(uid);
    return moderatorRef.delete();
  }


  public updateUserData(user: UserInfo): Promise<any> {
    // Sets user$ data to firestore on login
    const moderatorRef: AngularFirestoreDocument<ModeratorInfo> = this.getUserDocRefByUID(user.uid);
    // const data: UserInfo = {
    //  uid: user.uid,
    //  email: user.email,
    //  displayName: user.displayName,
    //  photoURL: user.photoURL,
    //  phoneNumber: user.phoneNumber,
    //  providerId: user.providerId
    // };
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      providerId: user.providerId,
      bio: 'Ville Propre - Plateforme Admin User',
      username: 'n/a',
      type: 'moderator',
    };
    return moderatorRef.set(data, {merge: true});
  }
}
