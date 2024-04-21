const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitsSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 34,
//   review: "Pretty solid as a fruit."
// })

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitsSchema,
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name:"Mango",
  rating: 9,
  review: "Best tropical fruit!"
})

mango.save();

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple,
// });
// fruit.save();
// person.save();

Person.updateOne({name: "John"}, {favouriteFruit: mango}).then(
  function(){
    console.log("Successfully updated!");
  },
  function(err){
    console.log(err);
  }
)

// const kiwi = new Fruit({
//   name:"Kiwi",
//   rating: 10,
//   review: "The best fruit!"
// })

// const orange = new Fruit({
//   name:"Orange",
//   rating: 3,
//   review: "Too sour for me"
// })

// const banana = new Fruit({
//   name:"Banana",
//   rating: 3,
//   review: "Weird texture"
// })

// Fruit.insertMany([kiwi, orange, banana])

Fruit.find().then(
  function(fruits){
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  },
  function(err){console.log(err)
  })

  // Fruit.updateOne({_id:"64ad6236f4761f40aaf69ca0"}, {name: "Avocado"}).then(
  //   function(){
  //     console.log("Successfully updated the data");
  //   },
  //   function(err){
  //     console.log(err + " WHAT'S GOING ON!");
  //   }
  // )

// Fruit.deleteOne({name: "Avocado"}).then(
//   function(){
//     console.log("Successful");
//   },
//   function(err){
//     console.log(err);
//   }
// )

// Person.deleteMany({name: "John"}).then(
//   function(x){
//     console.log(`deleted ${x.deletedCount} documents`);
//     mongoose.connection.close();
//   },
//   function(err){
//     console.log(err);
//   }
// )

// mongoose.connection.close();
