import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class localStorageService {
  
  setItem( key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key) as any);
  }

  // setItemData dưới Local


  constructor() { }
}
