import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-plantspot',
  templateUrl: './plantspot.component.html',
  styleUrls: ['./plantspot.component.css']
})
export class PlantspotComponent implements OnInit {

  // constructor(public dialog: MatDialog) {}


  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  

  openDialog() {
    // const dialogRef = this.dialog.open(DialogContent);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}

// @Component({
//   selector: 'dialog-content',
//   templateUrl: 'dialog-content.html',
// })
// export class DialogContent {
// }
