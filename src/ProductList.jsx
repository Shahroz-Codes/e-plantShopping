import React, { useState, useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import { useSelector } from 'react-redux';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { id: "air-0", name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
                { id: "air-1", name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from the air.", cost: "$12" },
                { id: "air-2", name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg", description: "Removes mold spores and purifies the air.", cost: "$18" },
                { id: "air-3", name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity to the air and removes toxins.", cost: "$20" },
                { id: "air-4", name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", description: "Easy to care for and effective at removing toxins.", cost: "$17" },
                { id: "air-5", name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", description: "Purifies the air and has healing properties for skin.", cost: "$14" }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                { id: "fragrant-0", name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3", description: "Calming scent, used in aromatherapy.", cost: "$20" },
                { id: "fragrant-1", name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3", description: "Sweet fragrance, promotes relaxation.", cost: "$18" },
                { id: "fragrant-2", name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating scent, often used in cooking.", cost: "$15" },
                { id: "fragrant-3", name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg", description: "Refreshing aroma, used in teas and cooking.", cost: "$12" },
                { id: "fragrant-4", name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg", description: "Citrusy scent, relieves stress and promotes sleep.", cost: "$14" },
                { id: "fragrant-5", name: "Hyacinth", image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg", description: "Hyacinth is a beautiful flowering plant known for its fragrant.", cost: "$22" }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                { id: "insect-0", name: "Oregano", image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg", description: "Contains compounds that deter certain insects.", cost: "$10" },
                { id: "insect-1", name: "Marigold", image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg", description: "Natural insect repellent, adds color to garden.", cost: "$8" },
                { id: "insect-2", name: "Geraniums", image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg", description: "Repels insects and offers a pleasant scent.", cost: "$20" },
                { id: "insect-3", name: "Basil", image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg", description: "Repels flies and mosquitoes, also culinary.", cost: "$9" },
                { id: "insect-4", name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3", description: "Calming scent, used in aromatherapy.", cost: "$20" },
                { id: "insect-5", name: "Catnip", image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg", description: "Repels mosquitoes and attracts cats.", cost: "$13" }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                { id: "med-0", name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", description: "Soothing gel used for skin ailments.", cost: "$14" },
                { id: "med-1", name: "Echinacea", image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg", description: "Boosts immune system, helps fight colds.", cost: "$16" },
                { id: "med-2", name: "Peppermint", image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg", description: "Relieves digestive issues and headaches.", cost: "$13" },
                { id: "med-3", name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg", description: "Calms nerves and promotes relaxation.", cost: "$14" },
                { id: "med-4", name: "Chamomile", image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg", description: "Soothes anxiety and promotes sleep.", cost: "$15" },
                { id: "med-5", name: "Calendula", image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg", description: "Heals wounds and soothes skin irritations.", cost: "$12" }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                { id: "low-0", name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3", description: "Thrives in low light and requires minimal watering.", cost: "$25" },
                { id: "low-1", name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg", description: "Tolerates neglect and can grow in various conditions.", cost: "$10" },
                { id: "low-2", name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Needs infrequent watering and resists pests.", cost: "$15" },
                { id: "low-3", name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg", description: "Hardy plant that tolerates low light and neglect.", cost: "$20" },
                {
                    id: "low-4",
                    name: "Succulents",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                    description: "Drought-tolerant plants with unique shapes and colors.",
                    cost: "$18"
                },
                {
                    id: "low-5", name: "Aglaonema", image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg", description: "Requires minimal care and adds color to indoor spaces.", cost: "$22"
                }
            ]
        }
    ];
    // const styleObj = {
    //     backgroundColor: '#4CAF50',
    //     color: '#fff!important',
    //     padding: '15px',
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     alignIems: 'center',
    //     fontSize: '20px',
    // }
    // const styleObjUl = {
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     width: '1100px',
    // }
    // const styleA = {
    //     color: 'white',
    //     fontSize: '30px',
    //     textDecoration: 'none',
    // }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };
    const handleAddToCart = (plant) => {
        dispatch(addItem({ ...plant, quantity: 1 }));

    };

    const calculateTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div>
            <div className="navbar" >
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>

                </div>
                    <div className='plant'> <a href="#" onClick={(e) => handlePlantsClick(e)} >Plants</a></div>
                <div >

                    <div style={{ position: 'relative' }}>
                        <a href="#" onClick={(e) => handleCartClick(e)} >

                            <h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="50" width="50"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg></h1></a>
                        <span style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            background: 'red',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '4px 8px',
                            fontSize: '14px'
                        }}>
                            {calculateTotalQuantity()}
                        </span>

                    </div>
                </div>

            </div>
            {
                !showCart ? (
                    <div className="product-grid">

                        {plantsArray.map((category) => (
                            <div key={category.category}>
                                <h2>{category.category}</h2>
                                <div className="product-list">
                                    {category.plants.map((plant, idx) => (
                                        <div key={idx} className="product-card">
                                            <img src={plant.image} alt={plant.name} className="product-image" />
                                            <h3>{plant.name}</h3>
                                            <p>{plant.description}</p>
                                            <p><strong>Price:</strong> {plant.cost}</p>
                                            <button
                                                className={`${cartItems.some(item => item.name === plant.name) ? 'red-button' : 'product-button'}`}
                                                onClick={() => handleAddToCart(plant)}
                                                disabled={cartItems.some(item => item.name === plant.name)}
                                            >
                                                {cartItems.some(item => item.name === plant.name) ? 'Added to Cart' : 'Add to Cart'}
                                            </button>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                ) : (
                    <CartItem onContinueShopping={handleContinueShopping} />
                )
            }
        </div >
    );
}

export default ProductList;
