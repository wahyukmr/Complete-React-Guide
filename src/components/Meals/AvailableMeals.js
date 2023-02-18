import { useEffect, useState } from "react";
import UseHttp from "../../hooks/use-http";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
    const [meals, setMeals] = useState([]);
    const { fetchMeals, loading, error } = UseHttp();

    // Menggunakan useEffect untuk memicu side-effect seperti mengambil data dari web ketika beberapa data berubah atau misalnya komponen itu dimuat pertama kali.
    useEffect(() => {
        const applyMealsData = (meals) => {
            const mealsData = [];

            for (const key in meals) {
                mealsData.push({
                    id: key,
                    name: meals[key].name,
                    description: meals[key].description,
                    price: meals[key].price,
                });
            }
            // menggunakan useState untuk merender ulang komponen setelah pengambilan datanya selesai agar bisa diteruskan ke variabel mealsList.
            setMeals(mealsData);
        };

        fetchMeals("meals.json", { method: "GET" }, applyMealsData);
    }, [fetchMeals]);

    if (loading) {
        return (
            <section className={classes.mealsCondition}>
                <h1>Loading...</h1>
            </section>
        );
    }

    if (error) {
        return (
            <section className={classes.mealsCondition}>
                <h1>{error}</h1>
            </section>
        );
    }

    const mealsList = meals.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;
