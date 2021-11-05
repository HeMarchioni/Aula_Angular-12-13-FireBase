import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-firelist',
  templateUrl: './firelist.component.html',
  styleUrls: ['./firelist.component.css']
})
export class FirelistComponent implements OnInit {

  carro: string;
  tipo: string;
 


  listRef: AngularFireList<any>;
  list: Observable<any[]>;
 
 
   constructor(private db: AngularFireDatabase) {
       this.listRef = db.list('list');
       this.list = this.listRef.snapshotChanges().pipe(
         map(chances =>
           chances.map(c => ({key: c.payload.key, ...c.payload.val()})))
       )
 
 
    }
 
   ngOnInit() {
   }
 
 
 addItem(){
 this.listRef.push(
 {
   carro: this.carro,
   tipo: this.tipo
 });
 this.carro ="";
 this.tipo="";
 }
 
 
 deleteItem(key: string){
   this.listRef.remove(key);
 }
 
 
 }
 