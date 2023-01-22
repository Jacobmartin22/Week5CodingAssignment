class MealItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Meal {
    constructor() {
        this.items = [];
    }

    additem(item) {
        this.items.push(item);
    }

    viewMeal() {
        console.log("Here is the meal:")
        for (let item of this.items) {
            console.log(item.name + ": $" + item.price);
        }
    }

    deleteItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemname);
    }
}

const meal = new Meal();

meal.additem(new MealItem("Burrito", 7));
meal.additem(new MealItem("Fried Chicken", 10));
meal.additem(new MealItem("Fries", 4));

meal.viewMeal();

meal.deleteItem("Burrito");

meal.viewMenu