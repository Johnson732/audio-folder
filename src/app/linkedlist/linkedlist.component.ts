import { Component, ViewChild } from '@angular/core';
import { Music } from '../music';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-linkedlist',
  templateUrl: './linkedlist.component.html',
  styleUrls: ['./linkedlist.component.css'],
})
export class LinkedlistComponent {
  @ViewChild('form') form: any;

  list: LinkedList<any>;
  arr: any[] = [];

  constructor() {

    this.list = new LinkedList<any>();
  }

  add(): void {
    this.list.add(this.form.value.data);
    this.form.resetForm();
  }
  find(): void {
    let find: any = this.list.find(this.form.value.data2);
    console.log(find);
    this.resetForm();
  }
  remove(): void {
    let remove: any = this.list.remove(this.form.value.data3);
    console.log(remove);
    this.resetForm();
    this.list.print();
  }
  print(): void {
    this.arr = this.list.print();

  }
  resetForm(): void {
    this.form.value.data = '';
  }
  audio = new Audio();

}

class Node<T> {
  data: T;
  next: Node<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data: T): void {
    const newNode = new Node(data); //creating new node with { data }
    if (!this.head) {
      // check head empty or not
      this.head = newNode; // new node as head
    } else {
      let current = this.head; // new current temp var
      while (current.next) {
        // iterate until cur next is null
        current = current.next; // changing current value
      }
      current.next = newNode; // last null as new node
    }
    this.size++; //increase size
  }

  remove(data: any): any {
    if (this.head == null) {
      return 'empty';
    } else {
      let current: any = this.head;
      let prev: any = current;
      while (current != null) {
        if (current.data === data) {
          if (prev) {
            prev.next = current.next;
          } else {
            this.head = current.next;
          }
          this.size--;
          this.print();
          return 'removed';
        } else {
          prev = current;
          current = current.next;
        }
      }
      return 'data not present';
    }
  }

  find(data: any): any {
    if (this.head == null) {
      return 'empty';
    } else {
      let current: any = this.head;
      while (current != null) {
        if (current.data === data) {
          return 'data present';
        }
        current = current.next;
      }
      return 'data not present';
    }
  }

  print(): any {
    let arr: any[] = [];
    let current: any = this.head; //set current
    while (current) {
      //iterate list
      arr.push(current.data);
      console.log(current.data); //print node data
      current = current.next; //go next
    }
    return arr;
  }
}
