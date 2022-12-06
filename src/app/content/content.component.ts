import {Component, OnInit} from '@angular/core';
import {SubjectAndClass} from "../model/subject.and.class";
import {PageEvent} from "@angular/material/paginator";
import {Page} from "../model/page";
import {TeacherService} from "../service/teacher.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  page!: Page<SubjectAndClass>;

  constructor(private teacherService: TeacherService) {
  }

  ngOnInit(): void {
    this.getTaughtClasses();
  }

  getTaughtClasses() {
    this.getTaughtClassesPage(0, 20);
  }

  onPageEvent(event: PageEvent) {
    this.getTaughtClassesPage(event.pageIndex, event.pageSize);
  }

  private getTaughtClassesPage(page: number, size: number) {
    this.teacherService.getTaughtClasses(page, size)
      .subscribe(page => this.page = page);
  }

}
