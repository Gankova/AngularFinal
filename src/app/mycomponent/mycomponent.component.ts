import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bull',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {

  public myid: string = 'test';
  public lastname: string = 'petrov';
  public styles = {'color': 'red', 'font-size': '32px'};
  public classes = {'myclass': true, 'myclass2': false};
  public human: string = 'child'//man, woman, child

  public users =[
    {
      name: 'Vasia',
      age: 12,
      sex: 'male'

    },
    {
      name: 'Marya',
      age: 112,
      sex: 'female'
    },
    {
      name: 'Valia',
      age: 22,
      sex: 'female'
    }
  ]





  showMessage(name: string) {
    alert(name);
    console.log(this.lastname);
  }

  changeStyle(){
    const randColor = () => Math.trunc(Math.random()*255);
    const r = randColor();
    const g = randColor();
    const b = randColor();
    this.styles['color']=`rgb(${r}, ${g}, ${b})`;

  }
  changeClasses(flag:boolean){
    this.classes.myclass = !flag;
    this.classes.myclass2 = flag;
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  removeUsers(user:any){
    const index = this.users.indexOf(user);
    if(index !==-1){
      this.users.splice(index,1);
    }
  }

}
