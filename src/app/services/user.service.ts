import {Injectable} from '@angular/core';
import {User} from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  checkLogin = 'true';
  userOnline: User = {
    name: 'linh',
    email: 'linh@gmail.com',
    password: '123456',
    age: 300,
    address: 'Hà Nội',
    // tslint:disable-next-line:max-line-length
    image: '',
    status: false
  };
  user: User[] = [
    {
      name: 'linh',
      email: 'linh@gmail.com',
      password: '123456',
      age: 300,
      address: 'Hà Nội',
      // tslint:disable-next-line:max-line-length
      image: '',
      status: false
    },
    {
      name: 'haupham',
      email: 'haupham@gmail.com',
      password: '123456',
      age: 18,
      address: 'Tokyo',
      // tslint:disable-next-line:max-line-length
      image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/21/10/avatar-neytiri.jpg',
      status: false
    },
    {
      name: 'Anh Trí',
      email: 'tri@gmail.com',
      password: '123456',
      age: 18,
      address: 'nghệ an',
      // tslint:disable-next-line:max-line-length
      image: '',
      status: false
    },
    {
      name: 'ducanh',
      email: 'ducanh@gmail.com',
      password: '123456',
      age: 24,
      address: 'sài gòn',
      // tslint:disable-next-line:max-line-length
      image: '',
      status: false
    }
  ];

  checkUser(email: string): User {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].email === email) {
        return this.user[i];
      }
    }
  }

  checkEmailExists(email: string): boolean {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].email === email) {
        return false;
      } else {
        return true;
      }
    }
  }
}
