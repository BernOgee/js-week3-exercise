/*  3. Create a class of human

   4. Add a constructor to your human class. The constructor should accept name and age as arguments

   5. Add a talk method to your class.

   6.  The talk method should console.log the name argument + “speaks”

*/
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }


  talk() {
    console.log(this.name + " speaks");
  }
}

// 7. create a Man class that extends the Human class

class Man extends Human {

}


// 8.  Create a new instance of the Man class

var bernard = new Man("Bernard", 26);


//  call the talk method on the new Man instance

bernard.talk();

