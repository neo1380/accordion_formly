import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "formly-app-example",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  accordion: FormlyFieldConfig[] = [
    {
      key: "accord",
      type: "accordion",
      templateOptions: {
        activeIndex: 1,
        onOpen: (event) => console.log("Opened"),
        onClose: (event) => console.log("Closed"),
      },
      fieldGroup: [
        {
          key: "accord1",
          templateOptions: { header: "Accordion One" },
          fieldGroup: [
            {
              key: "name",
              type: "input",
              templateOptions: { label: "Name" },
            },
          ],
        },
        {
          key: "accord2",
          templateOptions: { header: "Accordion Two" },
          fieldGroup: [
            {
              key: "age",
              type: "input",
              templateOptions: { label: "age" },
            },
          ],
        },
      ],
    },
  ];
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
