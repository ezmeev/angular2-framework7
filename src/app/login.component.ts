/**
 * Created by Code1912 on 2016/8/4.
 */
import {Component,OnInit} from  "angular2/core";
import {Router,RouteParams} from 'angular2/router';
import {User} from '../app/user';
import {CityService} from '../app/city.service';
import {logProperty,MyClassDecorator } from '../app/test';
@Component({
    selector:"div[login]",
    templateUrl:"../app/login.component.html"
})
@MyClassDecorator("LoginComponent")
export  class LoginComponent implements OnInit {

    user:User;
    constructor(private _cityService:CityService) {

    }
    @logProperty
    ngOnInit() {

    }
}