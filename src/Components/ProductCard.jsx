import { useSelector } from 'react-redux';

/* eslint-disable react/prop-types */
export default function ProductCard({ plants = [], category, func }) {
  const cart = useSelector(state => state.cart.items);
  console.log("🚀 ~ ProductCard ~ cart:", cart);

  return (
    <div >
      <h2 className='plant_heading'>
        {category}
      </h2>

      <div className='product-list'>
        {
          plants.map((plant, index) => (
            <div key={index} className='product-card'>
              {console.log("🚀 ~ ProductCard ~ cart:", cart[ plant.name ])}
              <img src={plant.image} className='product-image' />
              <div className='product-title'>{plant.name}</div>
              <p>{plant.description}</p>
              <p>{plant.cost}</p>

              <button className="product-button" onClick={() => func(plant)} disabled={cart.some(item => item.name === plant.name)}>Add to Cart</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
