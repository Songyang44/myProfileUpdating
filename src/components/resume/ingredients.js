import React, { useState } from "react";

// 定义所有食材数据
const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" }
];

// 初始化 tabs，选择前 3 个食材
export const initialTabs = allIngredients.slice(0, 3);

// 获取下一个未添加的食材
const getNextIngredient = (ingredients) => {
  const existingLabels = new Set(ingredients.map((ingredient) => ingredient.label));
  return allIngredients.find((ingredient) => !existingLabels.has(ingredient.label));
};

// React 组件
const IngredientsComponent = () => {
  const [ingredients, setIngredients] = useState(initialTabs);

  // 添加下一个食材
  const addNextIngredient = () => {
    const nextIngredient = getNextIngredient(ingredients);
    if (nextIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, nextIngredient]);
    }
  };

  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.icon} {ingredient.label}
          </li>
        ))}
      </ul>
      <button onClick={addNextIngredient}>Add Next Ingredient</button>
    </div>
  );
};

export default IngredientsComponent;
