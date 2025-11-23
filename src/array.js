const creiden = ["shrouq", "amir", "rana", "ahmed", "aya"];
creiden[1] = "mohamed";
console.log(creiden)

const users = [{ name: "shrouq", age: 28 }, { name: "amir", age: 25 }];

for (let i = 0; i < users.length; i++) {
    console.log(users[i].name, users[i].age);
}

const numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


const user = { name: "shrouq", age: 28, city: "alexandria", country: "egypt", isfamle: true };
console.log(user.name, user.isfamle)
user.name = "menna";
console.log(user.name);
console.log(user["aga"])