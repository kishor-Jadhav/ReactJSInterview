import { BehaviorSubject, Observable  } from 'rxjs';

const sharedDataObservable = new BehaviorSubject<any>({name:'ABC'})
// Function to get the observable for subscription
export const getsharedObservable = (): Observable<any>=>{
  return sharedDataObservable.asObservable();
}

export const upateSharedDataOb =(value:any)=>{
    sharedDataObservable.next(value);
}