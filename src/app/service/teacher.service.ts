import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SubjectAndClass} from "../model/subject.and.class";
import {Page} from "../model/page";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private httpClient: HttpClient) { }

  getTaughtClasses(page: number, size: number): Observable<Page<SubjectAndClass>> {
    return this.httpClient.get<Page<SubjectAndClass>>(`/teacher/classes?page=${page}&size=${size}`);
  }
}
