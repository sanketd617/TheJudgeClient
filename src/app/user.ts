import {fn} from '@angular/compiler/src/output/output_ast';

export class User {
  fname = '';
  lname = '';
  username = '';
  password = '';

  constructor(fname, lname, username, password) {
    this.fname = fname;
    this.lname = lname;
    this.username = username;
    this.password = password;
    localStorage.setItem('fname', fname);
    localStorage.setItem('lname', lname);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }
}
