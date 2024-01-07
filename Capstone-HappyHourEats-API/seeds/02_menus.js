/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('menus').del();
    await knex('menus').insert([
        {
            "id": "1aa34567-89b1-4cde-8fg0-hij1klmnopqr",
            "restaurant_id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr",
            "image_url": "http://localhost:8080/food/szechuan.jpg",
            "title": "Szechuan Spiced Edamame",
            "price": 6.99,
            "special_price": 4.99,
            "tag": "Spicy"
        },
        {
            "id": "2b345678-61c2-3def-8gh0-ijkl2mnopqr",
            "restaurant_id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr",
            "image_url": "http://localhost:8080/food/SpringRoll.jpg",
            "title": "Vegetable Spring Rolls",
            "price": 8.99,
            "special_price": 6.99,
            "tag": "Vegetarian"
        },
        {
            "id": "3c456789-15d3-4efg-9hi0-jkl3mnopqr",
            "restaurant_id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr",
            "image_url": "http://localhost:8080/food/chicken-skewers.jpg",
            "title": "Thai Basil Chicken Skewers",
            "price": 10.99,
            "special_price": 8.99,
            "tag": "Spicy"
        },
        {
            "id": "4d567890-09e3-4fgh-ij01-klmn4opqr",
            "restaurant_id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr",
            "image_url": "http://localhost:8080/food/SushiRolls.jpg",
            "title": "Mango Avocado Sushi Rolls",
            "price": 12.99,
            "special_price": 10.99,
            "tag": "Gluten Free"
        },
        {
            "id": "5e678901-23f4-5ghi-jklv-mnop5pqr",
            "restaurant_id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr",
            "image_url": "http://localhost:8080/food/LettuceWraps.webp",
            "title": "Spicy Tofu Lettuce Wraps",
            "price": 9.99,
            "special_price": 7.99,
            "tag": "Spicy"
        },
        {
            "id": "6f789012-34g5-6hij-klm0-nop6pqr",
            "restaurant_id": "2b345678-91c2-3def-8gh0-ijkl2mnopqr",
            "image_url": "http://localhost:8080/food/PoutineBites.jpg",
            "title": "Poutine Bites",
            "price": 7.99,
            "special_price": 5.99,
            "tag": "Vegetarian"
        },
        {
            "id": "7g890123-45h6-7ijk-lmno-7pqr8stuvwxy",
            "restaurant_id": "2b345678-91c2-3def-8gh0-ijkl2mnopqr",
            "image_url": "http://localhost:8080/food/SalmonSkewers.jpg",
            "title": "Maple Glazed Salmon Skewers",
            "price": 11.99,
            "special_price": 9.99,
            "tag": "Gluten Free"
        },
        {
            "id": "8h901234-56i7-8jkl-mnop-9qrs0tu1vwxy",
            "restaurant_id": "2b345678-91c2-3def-8gh0-ijkl2mnopqr",
            "image_url": "http://localhost:8080/food/BisonSliders.jpg",
            "title": "Bison Sliders",
            "price": 13.99,
            "special_price": 11.99,
            "tag": "Spicy"
        },
        {
            "id": "9i012345-67j8-9klm-nopq-1rs2tu3vwxy",
            "restaurant_id": "2b345678-91c2-3def-8gh0-ijkl2mnopqr",
            "image_url": "http://localhost:8080/food/CanadianPlatter.jpg",
            "title": "Canadian Cheese Platter",
            "price": 15.99,
            "special_price": 13.99,
            "tag": "Vegetarian"
        },
        {
            "id": "0j123456-78k9-lmno-pqrs-tuvw1xy2z345",
            "restaurant_id": "2b345678-91c2-3def-8gh0-ijkl2mnopqr",
            "image_url": "http://localhost:8080/food/MeatPoutine.jpg",
            "title": "Smoked Meat Poutine",
            "price": 9.99,
            "special_price": 7.99,
            "tag": "Spicy"
        },
        {
            "id": "a1b2c3d4-5678-90e1-f2gh-i3jk4l5m6n7o",
            "restaurant_id": "3c456789-12d3-4efg-9hi0-jkl3mnopqr",
            "image_url": "http://localhost:8080/food/HummusTrio.webp",
            "title": "Hummus Trio",
            "price": 8.99,
            "special_price": 6.99,
            "tag": "Vegetarian"
        },
        {
            "id": "b2c3d4e5-6789-01f2-ghi3-jk4l5m6n7o8",
            "restaurant_id": "3c456789-12d3-4efg-9hi0-jkl3mnopqr",
            "image_url": "http://localhost:8080/food/GreekSkewers.jpg",
            "title": "Greek Salad Skewers",
            "price": 10.99,
            "special_price": 8.99,
            "tag": "Gluten Free"
        },
        {
            "id": "c3d4e5f6-7890-12g3-hi4-jk5l6m7n8o9",
            "restaurant_id": "3c456789-12d3-4efg-9hi0-jkl3mnopqr",
            "image_url": "http://localhost:8080/food/Flatbread.jpg",
            "title": "Mediterranean Flatbread",
            "price": 12.99,
            "special_price": 10.99,
            "tag": "Vegetarian"
        },
        {
            "id": "d4e5f6g7-8901-23h4-i5-jk6l7m8n9o0",
            "restaurant_id": "3c456789-12d3-4efg-9hi0-jkl3mnopqr",
            "image_url": "http://localhost:8080/food/GrapeLeaves.jpg",
            "title": "Stuffed Grape Leaves",
            "price": 9.99,
            "special_price": 7.99,
            "tag": "Vegetarian"
        },
        {
            "id": "e5f6g7h8-9012-34i5-jk6l7m8n9o0",
            "restaurant_id": "3c456789-12d3-4efg-9hi0-jkl3mnopqr",
            "image_url": "http://localhost:8080/food/FalafelSliders.jpg",
            "title": "Falafel Sliders",
            "price": 11.99,
            "special_price": 9.99,
            "tag": "Vegetarian"
        },
        {
            "id": "1a23456n-89b1-4cde-8fg0-hij1klmnopqr",
            "restaurant_id": "4d567890-12e3-4fgh-ij01-klmn4opqr",
            "image_url": "http://localhost:8080/food/SushiSampler.jpg",
            "title": "Sushi Sampler",
            "price": 15.99,
            "special_price": 11.19,
            "tag": "Gluten Free"
        },
        {
            "id": "2b345678-91c2-3def-8ghv-ijkl2mnopqr",
            "restaurant_id": "4d567890-12e3-4fgh-ij01-klmn4opqr",
            "image_url": "http://localhost:8080/food/TeriyakiChickenSkewers.jpg",
            "title": "Teriyaki Chicken Skewers",
            "price": 12.99,
            "special_price": 9.09,
            "tag": "Spicy"
        },
        {
            "id": "3c456789-12d3-4efg-9hi0-jkl3mnopir",
            "restaurant_id": "4d567890-12e3-4fgh-ij01-klmn4opqr",
            "image_url": "http://localhost:8080/food/MisoSoupTofu.webp",
            "title": "Miso Soup with Tofu",
            "price": 7.99,
            "special_price": 5.59,
            "tag": "Vegetarian"
        },
        {
            "id": "4d567890-82e3-4fgh-ij01-klmn4opqr",
            "restaurant_id": "4d567890-12e3-4fgh-ij01-klmn4opqr",
            "image_url": "http://localhost:8080/food/DragonRoll.jpg",
            "title": "Dragon Roll",
            "price": 16.99,
            "special_price": 11.89,
            "tag": "Spicy"
        },
        {
            "id": "5e678901-23f4-5ghi-cvb0-mnop5pqr",
            "restaurant_id": "4d567890-12e3-4fgh-ij01-klmn4opqr",
            "image_url": "http://localhost:8080/food/greentea.jpg",
            "title": "Green Tea Ice Cream",
            "price": 6.99,
            "special_price": 4.89,
            "tag": "Vegetarian"
        },
        {
            "id": "1a23j567-89b1-4cde-8fg0-hij1klmnopqr",
            "restaurant_id": "5e678901-23f4-5ghi-jkl0-mnop5pqr",
            "image_url": "http://localhost:8080/food/tikkamasala.webp",
            "title": "Chicken Tikka Masala",
            "price": 14.99,
            "special_price": 10.49,
            "tag": "Spicy"
        },
        {
            "id": "2b345678-91c2-3def-8gh0-ijkl2mlopqr",
            "restaurant_id": "5e678901-23f4-5ghi-jkl0-mnop5pqr",
            "image_url": "http://localhost:8080/food/vegbiryani.jpg",
            "title": "Vegetable Biryani",
            "price": 12.99,
            "special_price": 9.09,
            "tag": "Vegetarian"
        },
        {
            "id": "3c456789-12d3-4efg-9hi0-jkl6mnopqr",
            "restaurant_id": "5e678901-23f4-5ghi-jkl0-mnop5pqr",
            "image_url": "http://localhost:8080/food/SushiSampler.jpg",
            "title": "Paneer Butter Masala",
            "price": 11.99,
            "special_price": 8.39,
            "tag": null
        },
        {
            "id": "4d567890-12e3-4fgh-op01-klmn4opqr",
            "restaurant_id": "5e678901-23f4-5ghi-jkl0-mnop5pqr",
            "image_url": "http://localhost:8080/food/MeatPoutine.jpg",
            "title": "Samosa Platter",
            "price": 8.99,
            "special_price": 6.29,
            "tag": "Vegetarian"
        },
        {
            "id": "5e678901-23f4-9ghi-jkl0-mnop5pqr",
            "restaurant_id": "5e678901-23f4-5ghi-jkl0-mnop5pqr",
            "image_url": "http://localhost:8080/food/GreekSkewers.jpg",
            "title": "Mango Lassi",
            "price": 5.99,
            "special_price": 4.19,
            "tag": null
        },
        {
            "id": "1a231567-89b1-4cde-8fg0-hij1klmnopqr",
            "restaurant_id": "6f789012-34g5-6hij-klm0-nop6pqr",
            "image_url": "http://localhost:8080/food/PoutineBites.jpg",
            "title": "Chili Con Queso Dip",
            "price": 9.99,
            "special_price": 6.99,
            "tag": null
        },
        {
            "id": "2b345678-91c2-3def-8gh0-ijkl2mnopkr",
            "restaurant_id": "6f789012-34g5-6hij-klm0-nop6pqr",
            "image_url": "http://localhost:8080/food/Flatbread.jpg",
            "title": "Street Corn Tacos",
            "price": 11.99,
            "special_price": 8.39,
            "tag": "Vegetarian"
        },
        {
            "id": "3c456789-12d3-4efg-9hi2-jkl3mnopqr",
            "restaurant_id": "6f789012-34g5-6hij-klm0-nop6pqr",
            "image_url": "http://localhost:8080/food/chicken-skewers.jpg",
            "title": "Fajita Skewers",
            "price": 14.99,
            "special_price": 10.49,
            "tag": null
        },
        {
            "id": "4d567890-12e3-4fgh-ij01-klmn4opis",
            "restaurant_id": "6f789012-34g5-6hij-klm0-nop6pqr",
            "image_url": "http://localhost:8080/food/MisoSoupTofu.webp",
            "title": "Southwest Egg Rolls",
            "price": 10.99,
            "special_price": 7.69,
            "tag": null
        },
        {
            "id": "5e678901-23f4-5ghi-jkl0-mnop9pqr",
            "restaurant_id": "6f789012-34g5-6hij-klm0-nop6pqr",
            "image_url": "http://localhost:8080/food/GrapeLeaves.jpg",
            "title": "Mango Habanero Salsa",
            "price": 8.99,
            "special_price": 6.29,
            "tag": "Spicy"
        },
        {
            "id": "1a234567-89b1-4cde-8fo0-hij1klmnopqr",
            "restaurant_id": "7g890123-45h6-7ijk-lmno-7pqr8stuvwxy",
            "image_url": "http://localhost:8080/food/MisoSoupTofu.webp",
            "title": "Escargot Bourguignon",
            "price": 12.99,
            "special_price": 9.09,
            "tag": null
        },
        {
            "id": "2b345678-91c2-3def-8gh0-ijkl5mnopqr",
            "restaurant_id": "7g890123-45h6-7ijk-lmno-7pqr8stuvwxy",
            "image_url": "http://localhost:8080/food/Flatbread.jpg",
            "title": "Coq au Vin Skewers",
            "price": 14.99,
            "special_price": 10.49,
            "tag": null
        },
        {
            "id": "3c456789-12d3-4rfg-9hi0-jkl3mnopqr",
            "restaurant_id": "7g890123-45h6-7ijk-lmno-7pqr8stuvwxy",
            "image_url": "http://localhost:8080/food/tikkamasala.webp",
            "title": "Croque Monsieur Bites",
            "price": 10.99,
            "special_price": 7.69,
            "tag": null
        },
        {
            "id": "4d567890-12e3-4fgh-ij01-lkmn4opqr",
            "restaurant_id": "7g890123-45h6-7ijk-lmno-7pqr8stuvwxy",
            "image_url": "http://localhost:8080/food/TeriyakiChickenSkewers.jpg",
            "title": "Ratatouille Tartlets",
            "price": 9.99,
            "special_price": 6.99,
            "tag": "Vegetarian"
        },
        {
            "id": "5e678902-23f4-5ghi-jkl0-mnop5pqr",
            "restaurant_id": "7g890123-45h6-7ijk-lmno-7pqr8stuvwxy",
            "image_url": "http://localhost:8080/food/BisonSliders.jpg",
            "title": "Chocolate Mousse Cups",
            "price": 7.99,
            "special_price": 5.59,
            "tag": null
        },
        {
            "id": "1a234567-89b1-4cde-8fg0-hij1klmnopvr",
            "restaurant_id": "8h901234-56i7-8jkl-mnop-9qrs0tu1vwxy",
            "image_url": "http://localhost:8080/food/tikkamasala.webp",
            "title": "Quinoa Stuffed Bell Peppers",
            "price": 11.99,
            "special_price": 8.39,
            "tag": null
        },
        {
            "id": "2b345678-91c2-3def-8ghr-ijkl2mnopqr",
            "restaurant_id": "8h901234-56i7-8jkl-mnop-9qrs0tu1vwxy",
            "image_url": "http://localhost:8080/food/tikkamasala.webp",
            "title": "Zucchini Noodles with Pesto",
            "price": 10.99,
            "special_price": 7.69,
            "tag": "Gluten Free"
        },
        {
            "id": "3c456789-ajd3-4efg-9hi0-jkl3mnopqr",
            "restaurant_id": "8h901234-56i7-8jkl-mnop-9qrs0tu1vwxy",
            "image_url": "http://localhost:8080/food/TeriyakiChickenSkewers.jpg",
            "title": "Vegan Spring Rolls",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },
        {
            "id": "4d567890-12e3-4fgh-ij01-qlmn4opqr",
            "restaurant_id": "8h901234-56i7-8jkl-mnop-9qrs0tu1vwxy",
            "image_url": "http://localhost:8080/food/MisoSoupTofu.webp",
            "title": "Sweet Potato Fritters",
            "price": 9.99,
            "special_price": 6.99,
            "tag": null
        },
        {
            "id": "5e67890u-23f4-5ghi-jkl0-mnop5pqr",
            "restaurant_id": "8h901234-56i7-8jkl-mnop-9qrs0tu1vwxy",
            "image_url": "http://localhost:8080/food/Flatbread.jpg",
            "title": "Caprese Salad Skewers",
            "price": 7.99,
            "special_price": 5.59,
            "tag": "Gluten Free"
        },
        {
            "id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr",
            "restaurant_id": "9i012345-67j8-9klm-nopq-1rs2tu3vwxy",
            "image_url": "http://localhost:8080/food/BisonSliders.jpg",
            "title": "Tempura Vegetable Sushi Rolls",
            "price": 13.99,
            "special_price": 9.79,
            "tag": "Vegetarian"
        },
        {
            "id": "2b345678-91c2-3def-2gh0-ijkl2mnopqr",
            "restaurant_id": "9i012345-67j8-9klm-nopq-1rs2tu3vwxy",
            "image_url": "http://localhost:8080/food/chicken-skewers.jpg",
            "title": "Chicken Katsu Bites",
            "price": 12.99,
            "special_price": 9.09,
            "tag": null
        },
        {
            "id": "3c456789-67d3-4efg-9hi0-jkl3mnopqr",
            "restaurant_id": "9i012345-67j8-9klm-nopq-1rs2tu3vwxy",
            "image_url": "http://localhost:8080/food/chicken-skewers.jpg",
            "title": "Miso Eggplant Skewers",
            "price": 10.99,
            "special_price": 7.69,
            "tag": "Vegetarian"
        },
        {
            "id": "4d567890-vje3-4fgh-ij01-klmn4opqr",
            "restaurant_id": "9i012345-67j8-9klm-nopq-1rs2tu3vwxy",
            "image_url": "http://localhost:8080/food/tikkamasala.webp",
            "title": "Spicy Tuna Hand Rolls",
            "price": 14.99,
            "special_price": 10.49,
            "tag": "Spicy"
        },
        {
            "id": "5e671901-23f4-5ghi-jkl0-mnop5pqr",
            "restaurant_id": "9i012345-67j8-9klm-nopq-1rs2tu3vwxy",
            "image_url": "http://localhost:8080/food/szechuan.jpg",
            "title": "szechuan",
            "price": 6.99,
            "special_price": 4.89,
            "tag": "Vegetarian"
        },
        {
            "id": "5e671901-23f4-5gh-mnop5pqr",
            "restaurant_id": "9qrs0tu1vwxy",
            "image_url": "http://localhost:8080/food/greentea.jpg",
            "title": "Matcha Green Tea Ice Cream",
            "price": 6.99,
            "special_price": 4.89,
            "tag": "Vegetarian"
        },
        {
            "id": "1a2a9567-89b1-4cde-8fg0-hij1klmnopqr",
            "restaurant_id": "0j123456-78k9-lmno-pqrs-tuvw1xy2z345",
            "image_url": "http://localhost:8080/food/TeriyakiChickenSkewers.jpg",
            "title": "Spanakopita Bites",
            "price": 9.99,
            "special_price": 6.99,
            "tag": "Vegetarian"
        },
        {
            "id": "2b345678-91c2-3yyf-8gh0-ijkl2mnopqr",
            "restaurant_id": "0j123456-78k9-lmno-pqrs-tuvw1xy2z345",
            "image_url": "http://localhost:8080/food/tikkamasala.webp",
            "title": "Souvlaki Skewers",
            "price": 11.99,
            "special_price": 8.39,
            "tag": null
        },
        {
            "id": "3c456789-78d3-4efg-9hi0-jkl3mnopqr",
            "restaurant_id": "0j123456-78k9-lmno-pqrs-tuvw1xy2z345",
            "image_url": "http://localhost:8080/food/TeriyakiChickenSkewers.jpg",
            "title": "Dolma Rolls",
            "price": 10.99,
            "special_price": 7.69,
            "tag": "Vegetarian"
        },
        {
            "id": "4d567890-45e3-4fgh-ij01-klmn4opqr",
            "restaurant_id": "0j123456-78k9-lmno-pqrs-tuvw1xy2z345",
            "image_url": "http://localhost:8080/food/tikkamasala.webp",
            "title": "Greek Salad Cups",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },
        {
            "id": "5e678901-23f4-5ghi-jkl8-mnop5pqr",
            "restaurant_id": "0j123456-78k9-lmno-pqrs-tuvw1xy2z345",
            "image_url": "http://localhost:8080/food/TeriyakiChickenSkewers.jpg",
            "title": "Baklava Bites",
            "price": 7.99,
            "special_price": 5.59,
            "tag": null
        },
        {
            "id": "4d567890-45e3-4fgh-ij0klmn4opqr",
            "restaurant_id": "9qrs0tu1vwxy",
            "image_url": "http://localhost:8080/food/tikkamasala.webp",
            "title": "Tikkamasala",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },
        {
            "id": "4d567890-45e3-4fgh-ij01-klmpqr",
            "restaurant_id": "9qrs0tu1vwxy",
            "image_url": "http://localhost:8080/food/HummusTrio.webp",
            "title": "Hummus Trio",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },
        {
            "id": "4d56790-45e3-4fgh-ij01-klmn4opqr",
            "restaurant_id": "9qrs0tu1vwxy",
            "image_url": "http://localhost:8080/food/StreetCornTacos.jpg",
            "title": "Street Corn Tacos",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },{
            "id": "4d7890-45e3-4fgh-ij01-klmn4opqr",
            "restaurant_id": "9qrs0tu1vwxy",
            "image_url": "http://localhost:8080/food/SalmonSkewers.jpg",
            "title": "Salmon skewers",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },{
            "id": "4d567890-4e3-4fgh-ij01-klmn4opqr",
            "restaurant_id": "7pqr8stuvwxy",
            "image_url": "http://localhost:8080/food/PaneerButterMasala.webp",
            "title": "Paneer Butter",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },{
            "id": "4d567890-45e3-4fgh-j01-klmn4opqr",
            "restaurant_id": "7pqr8stuvwxy",
            "image_url": "http://localhost:8080/food/habanero-mango-salsa.jpg",
            "title": "Mango Salsa",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },{
            "id": "4d567890-453-4fgh-ij01-klmn4opqr",
            "restaurant_id": "7pqr8stuvwxy",
            "image_url": "http://localhost:8080/food/EscargotBourguignon.jpg",
            "title": "Escargot Bourguignon",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },{
            "id": "4d90-45e3-4fgh-ij01-klmn4opqr",
            "restaurant_id": "7pqr8stuvwxy",
            "image_url": "http://localhost:8080/food/mangolassi.webp",
            "title": "Mango Lassi",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },{
            "id": "6f789012-34g5-6hij-klm0-nqr",
            "restaurant_id": "klmn4opqr",
            "image_url": "http://localhost:8080/food/CanadianPlatter.jpg",
            "title": "Canadian Platter",
            "price": 7.99,
            "special_price": 5.99,
            "tag": "Vegetarian"
        },{
            "id": "6f789012-34g5-6hij-klm0-nop6p",
            "restaurant_id": "klmn4opqr",
            "image_url": "http://localhost:8080/food/CroqueMonsieurBites.webp",
            "title": "Croque Monsieur Bites",
            "price": 7.99,
            "special_price": 5.99,
            "tag": "Vegetarian"
        },{
            "id": "6f789012-34g5-klm0-nop6pqr",
            "restaurant_id": "klmn4opqr",
            "image_url": "http://localhost:8080/food/GrapeLeaves.jpg",
            "title": "Grape Leaves",
            "price": 7.99,
            "special_price": 5.99,
            "tag": "Vegetarian"
        },{
            "id": "6f789012-34g5-6hij-knop6pqr",
            "restaurant_id": "klmn4opqr",
            "image_url": "http://localhost:8080/food/LettuceWraps.webp",
            "title": "Lettuce Wraps",
            "price": 7.99,
            "special_price": 5.99,
            "tag": "Vegetarian"
        },{
            "id": "6f7812-34g5-6hij-klm0-nop6pqr",
            "restaurant_id": "klmn4opqr",
            "image_url": "http://localhost:8080/food/MeatPoutine.jpg",
            "title": "Lettuce Wraps",
            "price": 7.99,
            "special_price": 5.99,
            "tag": "Vegetarian"
        },
        {
            "id": "567890-45e3-4fgh-ij01-klmn4opqr",
            "restaurant_id": "nop6pqr",
            "image_url": "http://localhost:8080/food/tikkamasala.webp",
            "title": "Tikkamasala",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },
        {
            "id": "4d567890-45e3-4fgh-ij01-klmnqr",
            "restaurant_id": "nop6pqr",
            "image_url": "http://localhost:8080/food/HummusTrio.webp",
            "title": "Hummus Trio",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },
        {
            "id": "4d567890-45e3-4fgh-ij01-n4opqr",
            "restaurant_id": "nop6pqr",
            "image_url": "http://localhost:8080/food/StreetCornTacos.jpg",
            "title": "Street Corn Tacos",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },{
            "id": "4d5678-45e3-4fgh-ij01-klmn4opqr",
            "restaurant_id": "nop6pqr",
            "image_url": "http://localhost:8080/food/SalmonSkewers.jpg",
            "title": "Salmon skewers",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },,
        {
            "id": "1a234567-89b-4cde-8fg0-hij1klmnopqr",
            "restaurant_id": "1rs2tu3vwxy",
            "image_url": "http://localhost:8080/food/BisonSliders.jpg",
            "title": "Tempura Vegetable Sushi Rolls",
            "price": 13.99,
            "special_price": 9.79,
            "tag": "Vegetarian"
        },
        {
            "id": "2b345678-91c2-3def-2gh-ijkl2mnopqr",
            "restaurant_id": "1rs2tu3vwxy",
            "image_url": "http://localhost:8080/food/chicken-skewers.jpg",
            "title": "Chicken Katsu Bites",
            "price": 12.99,
            "special_price": 9.09,
            "tag": null
        },
        {
            "id": "3c456789-67d3-4efg-9i0-jkl3mnopqr",
            "restaurant_id": "1rs2tu3vwxy",
            "image_url": "http://localhost:8080/food/chicken-skewers.jpg",
            "title": "Miso Eggplant Skewers",
            "price": 10.99,
            "special_price": 7.69,
            "tag": "Vegetarian"
        },
        {
            "id": "4d567890-vje3-4fgh1-klmn4opqr",
            "restaurant_id": "1rs2tu3vwxy",
            "image_url": "http://localhost:8080/food/tikkamasala.webp",
            "title": "Spicy Tuna Hand Rolls",
            "price": 14.99,
            "special_price": 10.49,
            "tag": "Spicy"
        },
        {
            "id": "5e671901-23f4-hi-jkl0-mnop5pqr",
            "restaurant_id": "1rs2tu3vwxy",
            "image_url": "http://localhost:8080/food/szechuan.jpg",
            "title": "szechuan",
            "price": 6.99,
            "special_price": 4.89,
            "tag": "Vegetarian"
        }
    ]);
};