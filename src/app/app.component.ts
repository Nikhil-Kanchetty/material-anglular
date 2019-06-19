import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

export interface PeriodicElement {
  name:     string;
  position: number;
  weight:   number;
  symbol:   string;
}

// This is also for the data table
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,  name: 'Hydrogen',  weight: 1.0079,  symbol: 'H' },
  {position: 2,  name: 'Helium',    weight: 4.0026,  symbol: 'He'},
  {position: 3,  name: 'Lithium',   weight: 6.941,   symbol: 'Li'},
  {position: 4,  name: 'Beryllium', weight: 9.0122,  symbol: 'Be'},
  {position: 5,  name: 'Boron',     weight: 10.811,  symbol: 'B' },
  {position: 6,  name: 'Carbon',    weight: 12.0107, symbol: 'C' },
  {position: 7,  name: 'Nitrogen',  weight: 14.0067, symbol: 'N' },
  {position: 8,  name: 'Oxygen',    weight: 15.9994, symbol: 'O' },
  {position: 9,  name: 'Fluorine',  weight: 18.9984, symbol: 'F' },
  {position: 10, name: 'Neon',      weight: 20.1797, symbol: 'Ne'}, 
];


@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:        string = 'angular-mat';
  sideNavOpen:  boolean = false;
  slectedValue: string; 
  options:      string[] = ['Angular','React','Vue'];
  optionsObject:object[] = [
    { name: 'Nikhil'   },
    { name: 'Chandhu'  },
    { name: 'ashok'    },
    { name: 'Ramchand' }
  ]
  
  // change the below property to zero to hide the badge
  notifications=0; 

  // This is for side nav component
  sideNavToggle() {
    this.sideNavOpen = true;
  }
  log(state) {
    console.log(state);
  }
  display(subject) {
    return subject ? subject.name : undefined; 
  } 

  // for date picker
  // Note: Month Starts from zero
  minDate = new Date();
  maxDate = new Date(2025, 4, 22);

  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  //snack bar always used its own service in angular called snack bar service, you can pass the cmd like dismiss and undo to the method to perform similar operations 
  // constructor(private snackBar: MatSnackBar, private dialog:MatDialog){}
  // openSnack(message, action){
  //   let snackBarRef = this.snackBar.open(message, action, {duration: 1000});

  //   snackBarRef.afterDismissed().subscribe( () => {
  //     console.log("Dismissed");
  //   });

  //   snackBarRef.onAction().subscribe( () => {
  //     console.log("This is on aciton of the snack bar");
  //   });

  // }

  // // for dialog, it also uses a service from angular so, add it to the previous constructor 
  // // open method in the dialog takes two arguments they are component and optional parameter
  // openDialog() {
  //   let dialogRef = this.dialog.open(DialogExampleComponent, {data: { name: 'Nikhil'}});
  //   dialogRef.afterClosed().subscribe(
  //     result => { console.log(`Dialog result is: ${result}`); } 
  //   )
  // }

  // this is for the data table
  // The below displayedColumns array is used to display the order and properties that has to be displayed form the data 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

  // implimenting the datasource filter by adding a instance of the class
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // implimenting the sorting in mat
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    console.log(this.sort);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  // this is for including the pagination of the table in the module
  @ViewChild(MatPaginator) paginator: MatPaginator;


  // for virtual scrolling
  numbers = [];
  constructor() {
    for(let i=0; i<=1000; i++) {
      this.numbers.push(i)
    }
  }

}
