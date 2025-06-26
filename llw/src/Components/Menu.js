import React from "react";
import recipes from "../Recipes";



const Main = () => {

    const handleOrder = (id) => {
    console.log(id);
    }
    return (
        <div className="menu-container">
           <div className="menu-header">
             <h2>This Weeks Specials!</h2>
             <a href="/Menu"><button aria-label="On Click">Online Menu</button></a>
           </div>

           <div className="cards">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="menu-items">
                  <img src={recipe.image} alt="" />
                  <div className="menu-content">
                    <div className="heading">
                      <h5>{recipe.title}</h5>
                      <p>${recipe.price}</p>
                    </div>
                    <p>{recipe.description}</p>
                    <button className="orderbtn" On Click={() => handleOrder(recipe.id)}>Order Now</button>
                  </div>
                </div>
              ))}
           </div>
        </div>
    )
};

export default Main;