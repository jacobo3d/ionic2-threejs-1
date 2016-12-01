/**
 * Created by Roman on 29.11.2016.
 */
import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';

@Injectable()
export class SQLiteService{
  public db:SQLite=new SQLite();
  public dbName:string='data.db';
  public dbLocation:string='default';

  openDatabase(){
   return this.db.openDatabase({
      name: this.dbName,
      location: this.dbLocation // the location field is required
    })
  }

  createMainDB(){
    this.openDatabase().then(() => {
      this.db.executeSql('CREATE TABLE IF NOT EXISTS historyData ( id INTEGER PRIMARY KEY AUTOINCREMENT, level INTEGER, name VARCHAR(32), point TEXT, face TEXT,  time DATE )', {}).then((data) => {
        console.log("TABLE historyData CREATED: " + JSON.stringify(data));
      }, (err) => {
        console.error('Unable to execute sql: ', err);
      });
    }, (err) => {
      console.error('Unable to open database: ', err);
    });
  }

  createAuthDB(){
    this.openDatabase().then(() => {
      this.db.executeSql('CREATE TABLE IF NOT EXISTS appAuth ( firstName TEXT, lastName TEXT, email TEXT, gender TEXT,  age INTEGER, password TEXT )', {}).then((data) => {
        console.log("TABLE appAuth CREATED: "+ JSON.stringify(data));


      }, (err) => {
        console.error('Unable to execute sql: ', err);
      });
    }, (err) => {
      console.error('Unable to open database: ', err);
    });
  }

  insertIntoAuthDB(regData){
    console.log(regData);
    this.openDatabase().then(() => {
      this.db.executeSql('INSERT OR REPLACE INTO appAuth ( firstName, lastName, email, gender, age, password  ) VALUES ( ?,?,?,?,?,?)', ['0ne','two','three','four','five', 'six']).then((data) => {
        console.log("there are: "+ data);
      }, (err) => {
        console.error('Unable to execute sql: ', err);
      });
    }, (err) => {
      console.error('Unable to open database: ', err);
    });
  }

  insertIntoMainDB(textObj){
    this.openDatabase().then(() => {
      this.db.executeSql('INSERT INTO historyData (level, name, point, face,  time ) VALUES ( ?, ?, ?, ?, ? )', [textObj.level, textObj.name, textObj.point, textObj.face, textObj.time]).then((data) => {
        console.log("there are: "+ data);
      }, (err) => {
        console.error('Unable to execute sql: ', err);
      });
    }, (err) => {
      console.error('Unable to open database: ', err);
    });
  }

  getFromAuthDB(){

    this.openDatabase().then(() => {
      this.db.executeSql('SELECT * FROM appAuth',[]).then((data) => {
        console.log("getFromAuthDB: "+data.rows.length);
        if(data.rows.length > 0) {
          for(var i = 0; i < data.rows.length; i++) {
            console.log(JSON.stringify(data.rows.item(i)));
          }
        }
      }, (err) => {
        console.error('Unable to execute sql: ', err);
      });
    }, (err) => {
      console.error('Unable to open database: ', err);
    });

  }

  getFromMainDB(){

    this.openDatabase().then(() => {
      this.db.executeSql('SELECT * FROM historyData',[]).then((data) => {
        console.log("getFromAuthDB: "+data.rows.length);
        if(data.rows.length > 0) {
          for(var i = 0; i < data.rows.length; i++) {
            console.log(JSON.stringify(data.rows.item(i)));
          }
        }
      }, (err) => {
        console.error('Unable to execute sql: ', err);
      });
    }, (err) => {
      console.error('Unable to open database: ', err);
    });

  }

  dropTable(){
    this.openDatabase().then(() => {
      this.db.executeSql('DROP TABLE IF EXISTS appAuth ',null).then((data) => {
        console.log("dropTable: "+JSON.stringify(data));
        if(data.rows.length > 0) {
          for(var i = 0; i < data.rows.length; i++) {
            console.log(JSON.stringify(data.rows.item(i)));
          }
        }
      }, (err) => {
        console.error('Unable to execute sql: ', err);
      });
    }, (err) => {
      console.error('Unable to open database: ', err);
    })
  }

  showAllTables2(){
    this.openDatabase().then(() => {
      this.db.executeSql('SELECT name FROM sqlite_master WHERE type="table"',null).then((data) => {
        console.log("showAllTables2: "+JSON.stringify(data));
        if(data.rows.length > 0) {
          for(var i = 0; i < data.rows.length; i++) {
            console.log(JSON.stringify(data.rows.item(i)));
          }
        }
      }, (err) => {
        console.error('Unable to execute sql: ', err);
      });
    }, (err) => {
      console.error('Unable to open database: ', err);
    })
  }

  showAllTables3(){
    this.openDatabase().then(() => {
      this.db.executeSql('SELECT name FROM sqlite_temp_master WHERE type="table"',null).then((data) => {
        console.log("showAllTables3: "+JSON.stringify(data));
        if(data.rows.length > 0) {
          for(var i = 0; i < data.rows.length; i++) {
            console.log(JSON.stringify(data.rows.item(i)));
          }
        }
      }, (err) => {
        console.error('Unable to execute sql: ', err);
      });
    }, (err) => {
      console.error('Unable to open database: ', err);
    })
  }





}