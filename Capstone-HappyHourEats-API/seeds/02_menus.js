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
            "image_url": "https://example.com/image1.jpg",
            "title": "Szechuan Spiced Edamame",
            "price": 6.99,
            "special_price": 4.99,
            "tag": "Spicy"
        },
        {
            "id": "2b345678-61c2-3def-8gh0-ijkl2mnopqr",
            "restaurant_id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr",
            "image_url": "https://example.com/image2.jpg",
            "title": "Vegetable Spring Rolls",
            "price": 8.99,
            "special_price": 6.99,
            "tag": "Vegetarian"
        },
        {
            "id": "3c456789-15d3-4efg-9hi0-jkl3mnopqr",
            "restaurant_id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr",
            "image_url": "https://example.com/image3.jpg",
            "title": "Thai Basil Chicken Skewers",
            "price": 10.99,
            "special_price": 8.99,
            "tag": "Spicy"
        },
        {
            "id": "4d567890-09e3-4fgh-ij01-klmn4opqr",
            "restaurant_id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr",
            "image_url": "https://example.com/image4.jpg",
            "title": "Mango Avocado Sushi Rolls",
            "price": 12.99,
            "special_price": 10.99,
            "tag": "Gluten Free"
        },
        {
            "id": "5e678901-23f4-5ghi-jklv-mnop5pqr",
            "restaurant_id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr",
            "image_url": "https://example.com/image5.jpg",
            "title": "Spicy Tofu Lettuce Wraps",
            "price": 9.99,
            "special_price": 7.99,
            "tag": "Spicy"
        },
        {
            "id": "6f789012-34g5-6hij-klm0-nop6pqr",
            "restaurant_id": "2b345678-91c2-3def-8gh0-ijkl2mnopqr",
            "image_url": "https://example.com/image6.jpg",
            "title": "Poutine Bites",
            "price": 7.99,
            "special_price": 5.99,
            "tag": "Vegetarian"
        },
        {
            "id": "7g890123-45h6-7ijk-lmno-7pqr8stuvwxy",
            "restaurant_id": "2b345678-91c2-3def-8gh0-ijkl2mnopqr",
            "image_url": "https://example.com/image7.jpg",
            "title": "Maple Glazed Salmon Skewers",
            "price": 11.99,
            "special_price": 9.99,
            "tag": "Gluten Free"
        },
        {
            "id": "8h901234-56i7-8jkl-mnop-9qrs0tu1vwxy",
            "restaurant_id": "2b345678-91c2-3def-8gh0-ijkl2mnopqr",
            "image_url": "https://example.com/image8.jpg",
            "title": "Bison Sliders",
            "price": 13.99,
            "special_price": 11.99,
            "tag": "Spicy"
        },
        {
            "id": "9i012345-67j8-9klm-nopq-1rs2tu3vwxy",
            "restaurant_id": "2b345678-91c2-3def-8gh0-ijkl2mnopqr",
            "image_url": "https://example.com/image9.jpg",
            "title": "Canadian Cheese Platter",
            "price": 15.99,
            "special_price": 13.99,
            "tag": "Vegetarian"
        },
        {
            "id": "0j123456-78k9-lmno-pqrs-tuvw1xy2z345",
            "restaurant_id": "2b345678-91c2-3def-8gh0-ijkl2mnopqr",
            "image_url": "https://example.com/image10.jpg",
            "title": "Smoked Meat Poutine",
            "price": 9.99,
            "special_price": 7.99,
            "tag": "Spicy"
        },
        {
            "id": "a1b2c3d4-5678-90e1-f2gh-i3jk4l5m6n7o",
            "restaurant_id": "3c456789-12d3-4efg-9hi0-jkl3mnopqr",
            "image_url": "https://example.com/mediterranean_image1.jpg",
            "title": "Hummus Trio",
            "price": 8.99,
            "special_price": 6.99,
            "tag": "Vegetarian"
        },
        {
            "id": "b2c3d4e5-6789-01f2-ghi3-jk4l5m6n7o8",
            "restaurant_id": "3c456789-12d3-4efg-9hi0-jkl3mnopqr",
            "image_url": "https://example.com/mediterranean_image2.jpg",
            "title": "Greek Salad Skewers",
            "price": 10.99,
            "special_price": 8.99,
            "tag": "Gluten Free"
        },
        {
            "id": "c3d4e5f6-7890-12g3-hi4-jk5l6m7n8o9",
            "restaurant_id": "3c456789-12d3-4efg-9hi0-jkl3mnopqr",
            "image_url": "https://example.com/mediterranean_image3.jpg",
            "title": "Mediterranean Flatbread",
            "price": 12.99,
            "special_price": 10.99,
            "tag": "Vegetarian"
        },
        {
            "id": "d4e5f6g7-8901-23h4-i5-jk6l7m8n9o0",
            "restaurant_id": "3c456789-12d3-4efg-9hi0-jkl3mnopqr",
            "image_url": "https://example.com/mediterranean_image4.jpg",
            "title": "Stuffed Grape Leaves",
            "price": 9.99,
            "special_price": 7.99,
            "tag": "Vegetarian"
        },
        {
            "id": "e5f6g7h8-9012-34i5-jk6l7m8n9o0",
            "restaurant_id": "3c456789-12d3-4efg-9hi0-jkl3mnopqr",
            "image_url": "https://example.com/mediterranean_image5.jpg",
            "title": "Falafel Sliders",
            "price": 11.99,
            "special_price": 9.99,
            "tag": "Vegetarian"
        },
        {
            "id": "1a23456n-89b1-4cde-8fg0-hij1klmnopqr",
            "restaurant_id": "4d567890-12e3-4fgh-ij01-klmn4opqr",
            "image_url": "https://example.com/japanese_image1.jpg",
            "title": "Sushi Sampler",
            "price": 15.99,
            "special_price": 11.19,
            "tag": "Gluten Free"
        },
        {
            "id": "2b345678-91c2-3def-8ghv-ijkl2mnopqr",
            "restaurant_id": "4d567890-12e3-4fgh-ij01-klmn4opqr",
            "image_url": "https://example.com/japanese_image2.jpg",
            "title": "Teriyaki Chicken Skewers",
            "price": 12.99,
            "special_price": 9.09,
            "tag": "Spicy"
        },
        {
            "id": "3c456789-12d3-4efg-9hi0-jkl3mnopir",
            "restaurant_id": "4d567890-12e3-4fgh-ij01-klmn4opqr",
            "image_url": "https://example.com/japanese_image3.jpg",
            "title": "Miso Soup with Tofu",
            "price": 7.99,
            "special_price": 5.59,
            "tag": "Vegetarian"
        },
        {
            "id": "4d567890-82e3-4fgh-ij01-klmn4opqr",
            "restaurant_id": "4d567890-12e3-4fgh-ij01-klmn4opqr",
            "image_url": "https://example.com/japanese_image4.jpg",
            "title": "Dragon Roll",
            "price": 16.99,
            "special_price": 11.89,
            "tag": "Spicy"
        },
        {
            "id": "5e678901-23f4-5ghi-cvb0-mnop5pqr",
            "restaurant_id": "4d567890-12e3-4fgh-ij01-klmn4opqr",
            "image_url": "https://example.com/japanese_image5.jpg",
            "title": "Green Tea Ice Cream",
            "price": 6.99,
            "special_price": 4.89,
            "tag": "Vegetarian"
        },
        {
            "id": "1a23j567-89b1-4cde-8fg0-hij1klmnopqr",
            "restaurant_id": "5e678901-23f4-5ghi-jkl0-mnop5pqr",
            "image_url": "https://example.com/indian_image1.jpg",
            "title": "Chicken Tikka Masala",
            "price": 14.99,
            "special_price": 10.49,
            "tag": "Spicy"
        },
        {
            "id": "2b345678-91c2-3def-8gh0-ijkl2mlopqr",
            "restaurant_id": "5e678901-23f4-5ghi-jkl0-mnop5pqr",
            "image_url": "https://example.com/indian_image2.jpg",
            "title": "Vegetable Biryani",
            "price": 12.99,
            "special_price": 9.09,
            "tag": "Vegetarian"
        },
        {
            "id": "3c456789-12d3-4efg-9hi0-jkl6mnopqr",
            "restaurant_id": "5e678901-23f4-5ghi-jkl0-mnop5pqr",
            "image_url": "https://example.com/indian_image3.jpg",
            "title": "Paneer Butter Masala",
            "price": 11.99,
            "special_price": 8.39,
            "tag": null
        },
        {
            "id": "4d567890-12e3-4fgh-op01-klmn4opqr",
            "restaurant_id": "5e678901-23f4-5ghi-jkl0-mnop5pqr",
            "image_url": "https://example.com/indian_image4.jpg",
            "title": "Samosa Platter",
            "price": 8.99,
            "special_price": 6.29,
            "tag": "Vegetarian"
        },
        {
            "id": "5e678901-23f4-9ghi-jkl0-mnop5pqr",
            "restaurant_id": "5e678901-23f4-5ghi-jkl0-mnop5pqr",
            "image_url": "https://example.com/indian_image5.jpg",
            "title": "Mango Lassi",
            "price": 5.99,
            "special_price": 4.19,
            "tag": null
        },
        {
            "id": "1a231567-89b1-4cde-8fg0-hij1klmnopqr",
            "restaurant_id": "6f789012-34g5-6hij-klm0-nop6pqr",
            "image_url": "https://example.com/southwestern_image1.jpg",
            "title": "Chili Con Queso Dip",
            "price": 9.99,
            "special_price": 6.99,
            "tag": null
        },
        {
            "id": "2b345678-91c2-3def-8gh0-ijkl2mnopkr",
            "restaurant_id": "6f789012-34g5-6hij-klm0-nop6pqr",
            "image_url": "https://example.com/southwestern_image2.jpg",
            "title": "Street Corn Tacos",
            "price": 11.99,
            "special_price": 8.39,
            "tag": "Vegetarian"
        },
        {
            "id": "3c456789-12d3-4efg-9hi2-jkl3mnopqr",
            "restaurant_id": "6f789012-34g5-6hij-klm0-nop6pqr",
            "image_url": "https://example.com/southwestern_image3.jpg",
            "title": "Fajita Skewers",
            "price": 14.99,
            "special_price": 10.49,
            "tag": null
        },
        {
            "id": "4d567890-12e3-4fgh-ij01-klmn4opis",
            "restaurant_id": "6f789012-34g5-6hij-klm0-nop6pqr",
            "image_url": "https://example.com/southwestern_image4.jpg",
            "title": "Southwest Egg Rolls",
            "price": 10.99,
            "special_price": 7.69,
            "tag": null
        },
        {
            "id": "5e678901-23f4-5ghi-jkl0-mnop9pqr",
            "restaurant_id": "6f789012-34g5-6hij-klm0-nop6pqr",
            "image_url": "https://example.com/southwestern_image5.jpg",
            "title": "Mango Habanero Salsa",
            "price": 8.99,
            "special_price": 6.29,
            "tag": "Spicy"
        },
        {
            "id": "1a234567-89b1-4cde-8fo0-hij1klmnopqr",
            "restaurant_id": "7g890123-45h6-7ijk-lmno-7pqr8stuvwxy",
            "image_url": "https://example.com/french_image1.jpg",
            "title": "Escargot Bourguignon",
            "price": 12.99,
            "special_price": 9.09,
            "tag": null
        },
        {
            "id": "2b345678-91c2-3def-8gh0-ijkl5mnopqr",
            "restaurant_id": "7g890123-45h6-7ijk-lmno-7pqr8stuvwxy",
            "image_url": "https://example.com/french_image2.jpg",
            "title": "Coq au Vin Skewers",
            "price": 14.99,
            "special_price": 10.49,
            "tag": null
        },
        {
            "id": "3c456789-12d3-4rfg-9hi0-jkl3mnopqr",
            "restaurant_id": "7g890123-45h6-7ijk-lmno-7pqr8stuvwxy",
            "image_url": "https://example.com/french_image3.jpg",
            "title": "Croque Monsieur Bites",
            "price": 10.99,
            "special_price": 7.69,
            "tag": null
        },
        {
            "id": "4d567890-12e3-4fgh-ij01-lkmn4opqr",
            "restaurant_id": "7g890123-45h6-7ijk-lmno-7pqr8stuvwxy",
            "image_url": "https://example.com/french_image4.jpg",
            "title": "Ratatouille Tartlets",
            "price": 9.99,
            "special_price": 6.99,
            "tag": "Vegetarian"
        },
        {
            "id": "5e678902-23f4-5ghi-jkl0-mnop5pqr",
            "restaurant_id": "7g890123-45h6-7ijk-lmno-7pqr8stuvwxy",
            "image_url": "https://example.com/french_image5.jpg",
            "title": "Chocolate Mousse Cups",
            "price": 7.99,
            "special_price": 5.59,
            "tag": null
        },
        {
            "id": "1a234567-89b1-4cde-8fg0-hij1klmnopvr",
            "restaurant_id": "8h901234-56i7-8jkl-mnop-9qrs0tu1vwxy",
            "image_url": "https://example.com/vegetarian_image1.jpg",
            "title": "Quinoa Stuffed Bell Peppers",
            "price": 11.99,
            "special_price": 8.39,
            "tag": null
        },
        {
            "id": "2b345678-91c2-3def-8ghr-ijkl2mnopqr",
            "restaurant_id": "8h901234-56i7-8jkl-mnop-9qrs0tu1vwxy",
            "image_url": "https://example.com/vegetarian_image2.jpg",
            "title": "Zucchini Noodles with Pesto",
            "price": 10.99,
            "special_price": 7.69,
            "tag": "Gluten Free"
        },
        {
            "id": "3c456789-ajd3-4efg-9hi0-jkl3mnopqr",
            "restaurant_id": "8h901234-56i7-8jkl-mnop-9qrs0tu1vwxy",
            "image_url": "https://example.com/vegetarian_image3.jpg",
            "title": "Vegan Spring Rolls",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },
        {
            "id": "4d567890-12e3-4fgh-ij01-qlmn4opqr",
            "restaurant_id": "8h901234-56i7-8jkl-mnop-9qrs0tu1vwxy",
            "image_url": "https://example.com/vegetarian_image4.jpg",
            "title": "Sweet Potato Fritters",
            "price": 9.99,
            "special_price": 6.99,
            "tag": null
        },
        {
            "id": "5e67890u-23f4-5ghi-jkl0-mnop5pqr",
            "restaurant_id": "8h901234-56i7-8jkl-mnop-9qrs0tu1vwxy",
            "image_url": "https://example.com/vegetarian_image5.jpg",
            "title": "Caprese Salad Skewers",
            "price": 7.99,
            "special_price": 5.59,
            "tag": "Gluten Free"
        },
        {
            "id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr",
            "restaurant_id": "9i012345-67j8-9klm-nopq-1rs2tu3vwxy",
            "image_url": "https://example.com/japanese_image1.jpg",
            "title": "Tempura Vegetable Sushi Rolls",
            "price": 13.99,
            "special_price": 9.79,
            "tag": "Vegetarian"
        },
        {
            "id": "2b345678-91c2-3def-2gh0-ijkl2mnopqr",
            "restaurant_id": "9i012345-67j8-9klm-nopq-1rs2tu3vwxy",
            "image_url": "https://example.com/japanese_image2.jpg",
            "title": "Chicken Katsu Bites",
            "price": 12.99,
            "special_price": 9.09,
            "tag": null
        },
        {
            "id": "3c456789-67d3-4efg-9hi0-jkl3mnopqr",
            "restaurant_id": "9i012345-67j8-9klm-nopq-1rs2tu3vwxy",
            "image_url": "https://example.com/japanese_image3.jpg",
            "title": "Miso Eggplant Skewers",
            "price": 10.99,
            "special_price": 7.69,
            "tag": "Vegetarian"
        },
        {
            "id": "4d567890-vje3-4fgh-ij01-klmn4opqr",
            "restaurant_id": "9i012345-67j8-9klm-nopq-1rs2tu3vwxy",
            "image_url": "https://example.com/japanese_image4.jpg",
            "title": "Spicy Tuna Hand Rolls",
            "price": 14.99,
            "special_price": 10.49,
            "tag": "Spicy"
        },
        {
            "id": "5e671901-23f4-5ghi-jkl0-mnop5pqr",
            "restaurant_id": "9i012345-67j8-9klm-nopq-1rs2tu3vwxy",
            "image_url": "https://example.com/japanese_image5.jpg",
            "title": "Matcha Green Tea Ice Cream",
            "price": 6.99,
            "special_price": 4.89,
            "tag": "Vegetarian"
        },
        {
            "id": "1a2a9567-89b1-4cde-8fg0-hij1klmnopqr",
            "restaurant_id": "0j123456-78k9-lmno-pqrs-tuvw1xy2z345",
            "image_url": "https://example.com/greek_image1.jpg",
            "title": "Spanakopita Bites",
            "price": 9.99,
            "special_price": 6.99,
            "tag": "Vegetarian"
        },
        {
            "id": "2b345678-91c2-3yyf-8gh0-ijkl2mnopqr",
            "restaurant_id": "0j123456-78k9-lmno-pqrs-tuvw1xy2z345",
            "image_url": "https://example.com/greek_image2.jpg",
            "title": "Souvlaki Skewers",
            "price": 11.99,
            "special_price": 8.39,
            "tag": null
        },
        {
            "id": "3c456789-78d3-4efg-9hi0-jkl3mnopqr",
            "restaurant_id": "0j123456-78k9-lmno-pqrs-tuvw1xy2z345",
            "image_url": "https://example.com/greek_image3.jpg",
            "title": "Dolma Rolls",
            "price": 10.99,
            "special_price": 7.69,
            "tag": "Vegetarian"
        },
        {
            "id": "4d567890-45e3-4fgh-ij01-klmn4opqr",
            "restaurant_id": "0j123456-78k9-lmno-pqrs-tuvw1xy2z345",
            "image_url": "https://example.com/greek_image4.jpg",
            "title": "Greek Salad Cups",
            "price": 8.99,
            "special_price": 6.29,
            "tag": null
        },
        {
            "id": "5e678901-23f4-5ghi-jkl8-mnop5pqr",
            "restaurant_id": "0j123456-78k9-lmno-pqrs-tuvw1xy2z345",
            "image_url": "https://example.com/greek_image5.jpg",
            "title": "Baklava Bites",
            "price": 7.99,
            "special_price": 5.59,
            "tag": null
        }
    ]);
};