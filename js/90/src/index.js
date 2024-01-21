import { Name } from './hw2.js';
import * as MessageBox from 'messagebox.js';

const name = new Name('Donald')
name.print();

let myMessageBox = new MessageBox()
    .setTitle('Hello world!')
    .setMessage('This is a message box!')
    .addButton("ok", "green")
    .addButton("cancel", "red");

myMessageBox.show().then(response => {
    console.log('The user clicked : ' + response)
});
