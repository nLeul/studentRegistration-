"use strict";
/**
 * parent Course class 
 *
 * 
 */
class Course {
  /**
   * Constructor for Course object
   * @param {string} id the id for the course constructor
   * @param {string} name name for the course constructor 
   * @param {string} code code for the course constructor
   */
  constructor(id, name, code) {
    this._id = id;
    this._name = name;
    this._code = code;
  }
  /**
 * getter for id property
 *
 * @returns {string} returns the course ID
 */
  getId() {
    return this._id;
  }
  /**
   * getter for the course name property 
   *
   * @returns {string} returns  the course Name
   */
  getName() {
    return this._name;
  }
  /**
   * getter for the course property
   *
   * @returns {string} returns the course code
   */
  getCode() {
    return this._code;
  }
}
/**
 * Role object
 *
 * role object that is assigned to each user
 */
let role = {
  admin: "admin",
  faculty: "faculty",
  student: "student"
};
/**
 * courses in the database
 *
 * @returns {Array} returns all the courses
 */
function allCourses() {
  let myCourseDatabase = [];
  myCourseDatabase.push(new Course("101", "ENGLISH", "ENG101"));
  myCourseDatabase.push(new Course("102", "PHYSICS", "PHYS102"));
  myCourseDatabase.push(new Course("103", "BIOLOGY", "BIO103"));
  myCourseDatabase.push(new Course("104", "CHEMISTRY", "CHEM104"));
  myCourseDatabase.push(new Course("105", "MATHS", "MATH105"));
  return myCourseDatabase;
}
/**
 * displays all the courses 
 *
 * @returns {string} returns the course code
 */
function displayAllCourses() {
  let table = document.querySelector("table");
  let data = Object.keys(allCourses()[0]);
  generateTableHead(table, data);
  generateTable(table, allCourses());
}
/**
 *diaplays all courses sorted by name 
 *
 * @returns {string} returns  the course code
 */
function sortCourseName() {
  let table = document.querySelector("table");
  let data = Object.keys(allCourses()[0]);
  generateTableHead(table, data);
  generateTable(table, sortObjectsByHelper(allCourses(), "name"));
}
/**
 * diaplays all courses sorted by code
 *
 * @returns {string} returns the course code
 */
function sortCourseCode() {
  // document.querySelector("table").innerHTML="";
  let table = document.querySelector("table");
  let data = Object.keys(allCourses()[0]);
  generateTableHead(table, data);
  generateTable(table, sortObjectsByHelper(allCourses(), "code"));
}
/**
 * displays sorted values by name 
 * @param {Array} arr input array
 *  @param {string} helper type to be sorted by
 * @returns {Array} returned sorted values by key
 */
function sortObjectsByHelper(arr, helper) {
  if (helper == "first") {
    return arr.sort((value1, value2) => { if (value1._firstName > value2._firstName) { return 1; } else { return -1; } });
  } else if (helper == "last") {
    return arr.sort((value1, value2) => { if (value1._lastName > value2._lastName) { return 1; } else { return -1; } });
  } else if (helper == "name") {
    return arr.sort((value1, value2) => { if (value1._name > value2._name) { return 1; } else { return -1; } });
  } else {
    return arr.sort((value1, value2) => { if (value1._code > value2._code) { return 1; } else { return -1; } });
  }
}
/**
 * to create head of table
 *
 * @param {document} table tag name of table
 * @param {object} data tag name of table
 * @returns {string} to create head
 */
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
  row.style.color = "blue";
  row.style.background = "orange";
}
/**
 * to create head of table
 *
 * @param {document} table tag name of table
 * @param {Array} data tag name of table
 * @returns {string} to create head
 */
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (let key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
/**
 * User class
 *
 * 
 */
class User {
  /**
    * Constructor for creating a new User object
    * @param {string} firstN first Name
    * @param {string} lastN last name
    * @param {string} phone phone number
    * @param {string} rol role type
    * @param {string} email email of user
    * @param {string} password password
    * @param {string} id user id
    */
  constructor(firstN, lastN, phone, rol, email, password, id) {
    this._firstName = firstN;
    this._lastName = lastN;
    this._phone = phone;
    this._role = rol;
    this._email = email;
    this._password = password;
    this._id = id;
  }
  /**
 * to set first name
 * @param {string} name first name
 * @returns {string} to first name
 */
  setFirstName(name) {
    this._firstName = name;
  }
  /**
 * to get first name
 * @returns {string} returns first name
 */
  getFirstName() {
    return this._firstName;
  }
  /**
 * to set last name
 * @param {string} name last name
 * @returns {string} to create head
 */
  setLastName(name) {
    this._lastName = name;
  }
  /**
   * to get last name
   * @returns {string} returns last name
   */
  getLastName() {
    return this._lastName;
  }
  /**
   * to set phone
   * @param {string} phone phoen
   * @returns {string} returns phone
   */
  setPhone(phone) {
    this._phone = phone;
  }
  /**
   * to get phone
   * @returns {string} returns phone
   */
  getPhone() {
    return this._phone;
  }
  /**
   * to set role
   * @param {string} rol role
   * @returns {string} returns role
   */
  setRole(rol) {
    this._role = rol;
  }
  /**
   * to get role
   * @returns {string} reurns role
   */
  getRole() {
    return this._role;
  }
  /**
   * to set email
   * @param {string} email email
   * @returns {string} to create head
   */
  setEmail(email) {
    this._email = email;
  }
  /**
   * to get email
   * @returns {string} returns email
   */
  getEmail() {
    return this._email;
  }
  /**
   * to set password
   * @param {string} pass password
   * @returns {string} returns password
   */
  setPassWord(pass) {
    this._password = pass;
  }
  /**
   * to get password
   * @returns {string} returns password
   */
  getPassWord() {
    return this._password;
  }
  /**
   * to set id
   * @param {string} id id
   * @returns {string} returns id 
   */
  setId(id) {
    this._id = id;
  }
  /**
   * to get id
   * @returns {string} returns id
   */
  getId() {
    return this._id;
  }
}

//////////////////////////////////////////////////////////////////////////////// below sub-classes 
/**
 * A Admin class
 *
 * all admin should have course as like property
 */
class Admin extends User {
  /**
 * Constructor for creating a new Course object
 * @param {string} firstN first Name
 * @param {string} lastN last name
 * @param {string} phone phone number
 * @param {string} email email of user
 * @param {string} password password
 * @param {string} id user id
 */
  constructor(firstN, lastN, phone, email, password, id) {
    super(firstN, lastN, phone, role.admin, email, password, id);
  }
}
/**
 * A Faculty class
 *
 *
 */
class Faculty extends User {
  /**
 * Constructor for creating a new Course object
 * @param {string} firstN first Name
 * @param {string} lastN last name
 * @param {string} phone phone number
 * @param {string} email email of user
 * @param {string} password password
 * @param {string} id user id
 * @param {string} dep user id
 */
  constructor(firstN, lastN, phone, email, password, id, dep) {
    super(firstN, lastN, phone, role.faculty, email, password, id);
    this._departement = dep;
  }
  /**
* to set departement
* @param {string} dep id
* @returns {string} to create head
*/
  setDepartement(dep) {
    this._departement = dep;
  }
  /**
 * to get departement
 * @returns {string} to create head
 */
  getDepartement() {
    return this._departement;
  }
}
/**
 * A Admin class
 *
 * all admin should have course as like property
 */
class Student extends User {
  /**
* Constructor for creating a new Course object
* @param {string} firstN first Name
* @param {string} lastN last name
* @param {string} phone phone number
* @param {string} email email of user
* @param {string} password password
* @param {string} id user id
* @param {string} year user id
* @param {string} gpa user id
*/
  constructor(firstN, lastN, phone, email, password, id, year, gpa) {
    super(firstN, lastN, phone, role.student, email, password, id);
    this._year = year;
    this._gpa = gpa;
    this.courses = [];
  }
  /**
* to set departement
* @param {string} year year
* @returns {string} to create head
*/
  setYear(year) {
    this._year = year;
  }
  /**
   * to get year
   * @returns {string} to create head
   */
  getYear() {
    return this._year;
  }
  /**
   * to get year
   * @returns {string} to create head
   */
  getGpa() {
    return this._gpa;
  }
  /**
  * to set departement
  * @param {string} gpa grad
  * @returns {string} to create head
  */
  setGpa(gpa) {
    this._gpa = gpa;
  }
  /**
   * to get array
   * @returns {Array} to create head
   */
  getStudentCourses() {
    return this.courses;
  }
  /**
   * to set departement
   * @param {string} course grad
   * @returns {string} to create head
   */
  setCourse(course) {
    this.courses.push(course);
  }
}

/**
 * to get array
 * @returns {Array} all user
 */
function allUsers() {
  let myUserDataBase = [];
  let student1 = new Student("Leul", "Necha", "720-451-5972", "lnecha@gmail.com", "1234", "ID1", "2019", "4.0");
  student1.setCourse(new Course("101", "ENGLISH", "ENG101"));
  let student2 = new Student("Getaneh", "Tafere", "720-451-5979", "gtafere@gmail.com", "1234", "ID2", "2019", "4.0");
  student2.setCourse(new Course("102", "PHYSICS", "PHYS102"));
  myUserDataBase.push(student1);
  myUserDataBase.push(student2);
  myUserDataBase.push(new Admin("James", "Bond", "720-451-5973", "jbond@gmail.com", "1234", "ADMIN101"));
  myUserDataBase.push(new Faculty("John", "Doe", "720-451-5975", "jdoe@gmail.com", "1234", "FAC101", "Registrar"));
  myUserDataBase.push(new Faculty("Justin", "Bieber", "720-451-5970", "Jbieber@gmail.edu", "1234", "FAC102", "Registrar"));
  myUserDataBase.push(new Admin("Elizabeth", "Warren", "720-451-5971", "ewarren@gmail.com", "1234", "ADMIN102"));
  myUserDataBase.push(new Student("Getaneh", "Terefe", "720-451-5979", "geterefe@gmail.com", "1234", "ID2", "2019", "4.0"));

  return myUserDataBase;
}
/**
 * to get array
 * @returns {string} all user
 */
function facultySortByFirstName() {
  let tempVal = [];
  for (let ob of allUsers()) {
    if (ob.getRole() == role.faculty) {
      tempVal.push(ob);
    }
  }
  let sorted = sortObjectsByHelper(tempVal, "first");
  let table = document.querySelector("table");
  let data = Object.keys(sorted[0]);
  generateTableHead(table, data);
  generateTable(table, sorted);

}
/**
 * to get array
 * @returns {string} all user
 */
function sortFuctByLastName() {
  let tempVal = [];
  for (let ob of allUsers()) {
    if (ob.getRole() == role.faculty) {
      tempVal.push(ob);
    }
  }
  let sorted = sortObjectsByHelper(tempVal, "last");
  let table = document.querySelector("table");
  let data = Object.keys(sorted[0]);
  generateTableHead(table, data);
  generateTable(table, sorted);

}
/**
 * to get array
 * @returns {string} all user
 */
function sortStdByFirstName() {
  let tempVal = [];
  for (let obj of allUsers()) {
    if (obj.getRole() == role.student) {
      tempVal.push(obj);
    }
  }
  let sorted = sortObjectsByHelper(tempVal, "first");
  let table = document.querySelector("table");
  let data = Object.keys(sorted[0]);
  generateTableHead(table, data);
  generateTable(table, sorted);

}
/**
 * to get array
 * @returns {string} all user
 */
function sortStdByLastName() {
  let tempVal = [];
  for (let obj of allUsers()) {
    if (obj.getRole() == role.student) {
      tempVal.push(obj);
    }
  }
  let sorted = sortObjectsByHelper(tempVal, "last");
  let table = document.querySelector("table");
  let data = Object.keys(sorted[0]);
  generateTableHead(table, data);
  generateTable(table, sorted);

}
/**
 * to get array
 * @returns {string} all user
 */
function loginBtn() {
  let email = document.getElementById("emailid").value;
  let pass = document.getElementById("passwordid").value;
  let tempVal = null;
  for (let user of allUsers()) {
    if (user.getEmail() == email && user.getPassWord() == pass) {
      tempVal = user;
      break;
    }
  }
  if (tempVal == null) {
    window.alert("your password and email does not mathch");
  } else {
    console.log(tempVal);
    if (tempVal.getRole() == role.student) {

      window.open("studentPage.html");
    } else if (tempVal.getRole() == role.faculty) {
      ;
      window.open("facultyPage.html");
    } else {

      window.open("adminPage.html");
    }
  }
}
/**
 * to get array
 * @returns {string} all user
 */
function viewProfile() {
  let email = document.getElementById("proId").value;
  let tempVal = null;
  for (let user of allUsers()) {
    if (user.getEmail() == email) {
      tempVal = user;
      break;
    }
  }
  if (tempVal == null) {
    window.alert("Invalid Email Address!");
  } else {
    let val = tempVal;
    let dis = "FirstName: " + val.getFirstName() + "  LastName:  " + val.getLastName() + "  phone:  " + val.getPhone() + "  you are a: " + val.getRole() + "  email: " + val.getEmail() + "  Entry year: " + val.getYear() + "  GPA: " + val.getGpa();
    document.getElementById("display").innerHTML = dis;
  }
}
/**
 * to get array
 * @returns {string} all user
 */
function updateProfile() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("emailid").value;
  let pass = document.getElementById("passid").value;
  let id = document.getElementById("id").value;
  let oldemail = document.getElementById("oldemail").value;
  let tempVal = null;
  for (let user of allUsers()) {
    if (user.getEmail() == oldemail) {
      tempVal = user;
      break;
    }
  }
  if (tempVal == null) {
    window.alert("Invalid Email Address!");
  } else {
    tempVal.setFirstName(fname);
    tempVal.setLastName(lname);
    tempVal.setEmail(email);
    tempVal.setPassWord(pass);
    tempVal.setId(id);
    let val = tempVal;
    let dis = "FirstName:- " + val.getFirstName() + "  LastName:-  " + val.getLastName() + "  phone:- " + val.getPhone() + "  you Are:-" + val.getRole() + "  email:- " + val.getEmail() + "  Entry:- " + val.getYear() + "  GPA:- " + val.getGpa();
    document.getElementById("display").innerHTML = dis;
  }
}
/**
 * to get array
 * @returns {string} all user
 */
function displayAllStudent() {
  let tempVal = [];
  for (let ob of allUsers()) {
    if (ob.getRole() == role.student) {
      tempVal.push(ob);
    }
  }
  let table = document.querySelector("table");
  let data = Object.keys(allUsers()[0]);
  generateTableHead(table, data);
  generateTable(table, tempVal);
}
/**
 * to get array
 * @returns {string} all user
 */
function displayAllfaculty() {
  let tempVal = [];
  for (let ob of allUsers()) {
    if (ob.getRole() == role.faculty) {
      tempVal.push(ob);
    }
  }
  let table = document.querySelector("table");
  let data = Object.keys(allUsers()[0]);
  generateTableHead(table, data);
  generateTable(table, tempVal);
}
/**
 * to get array
 * @returns {string} all user
 */
function assignCourse() {
  let email = document.getElementById("emailid").value;
  let courseId = document.getElementById("ddlViewBy").value;
  let tempVal = null;
  for (let user of allUsers()) {
    if (user.getEmail() == email) {
      tempVal = user;
      break;
    }
  }
  let coures = null;
  for (let co of allCourses()) {
    if (co.getId() == courseId) {
      coures = co;
      break;
    }
  }
  if (tempVal == null) {
    window.alert("check the student email");
  } else {
    let dis = "couseId:- " + tempVal.getId() + "  courseName:- " + tempVal.getName() + "  courseCode:- " + tempVal.getCode() + "\n";
    tempVal.setCourse(coures);
    var myName = localStorage.getItem("name");
    dis += myName;
    localStorage.setItem("name", "dis");
  }
}

/**
 * to get array
 * @returns {string} all user
 */
function seeStudentCourse() {
  let email = document.getElementById("emailid").value;
  let tempVal = null;
  for (let user of allUsers()) {
    if (user.getEmail() == email) {
      tempVal = user;
    }
  }
  if (tempVal == null) {
    window.alert("check the student email");
  } else {
    let dis = "";
    for (let co of tempVal.getStudentCourses()) {
      dis += "couseId:- " + co.getId() + "  courseName:- " + co.getName() + "  courseCode:- " + co.getCode() + "\n";
    }
    document.getElementById("display").innerHTML = dis;
  }
}