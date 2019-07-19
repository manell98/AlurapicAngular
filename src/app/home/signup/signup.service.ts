import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000'

@Injectable({
    providedIn: 'root'
})
export class SignupService {

    constructor(private httpCliente: HttpClient) {}

    checkUserNameTaken(userName: string) {

        return this.httpCliente.get(API_URL + '/user/exists/' + userName);

    }

}