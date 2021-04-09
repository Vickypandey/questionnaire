import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
    @Output() onMenuIconClick: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() { }


    public sidenavToggle() {
        this.onMenuIconClick.emit();
    }

}