/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('restaurants').del();
    await knex('restaurants').insert([
        {
            "id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr",
            "name": "Pacific Spice",
            "address": "123 Main St, Vancouver, BC",
            "latitude": 49.2827,
            "longitude": -123.1207,
            "cuisine": "Asian",
            "priceRange": "$$",
            "start": "2024-01-06T17:00:00Z",
            "end": "2024-01-06T19:00:00Z"
        },
        {
            "id": "2b345678-91c2-3def-8gh0-ijkl2mnopqr",
            "name": "Maple Grillhouse",
            "address": "456 Oak St, Burnaby, BC",
            "latitude": 49.2559,
            "longitude": -123.0046,
            "cuisine": "Canadian",
            "priceRange": "$$$",
            "start": "2024-01-07T18:00:00Z",
            "end": "2024-01-07T20:00:00Z"
        },
        {
            "id": "3c456789-12d3-4efg-9hi0-jkl3mnopqr",
            "name": "Mediterranean Breeze",
            "address": "789 Pine St, Richmond, BC",
            "latitude": 49.1666,
            "longitude": -123.1339,
            "cuisine": "Mediterranean",
            "priceRange": "$$-$$$",
            "start": "2024-01-08T16:30:00Z",
            "end": "2024-01-08T18:30:00Z"
        },
        {
            "id": "4d567890-12e3-4fgh-ij01-klmn4opqr",
            "name": "Sushi Haven",
            "address": "101 Elm St, Surrey, BC",
            "latitude": 49.1875,
            "longitude": -122.8496,
            "cuisine": "Japanese",
            "priceRange": "$$$",
            "start": "2024-01-09T19:00:00Z",
            "end": "2024-01-09T21:00:00Z"
        },
        {
            "id": "5e678901-23f4-5ghi-jkl0-mnop5pqr",
            "name": "Taste of India",
            "address": "234 Cedar St, Delta, BC",
            "latitude": 49.0847,
            "longitude": -123.0584,
            "cuisine": "Indian",
            "priceRange": "$$-$$$",
            "start": "2024-01-10T17:30:00Z",
            "end": "2024-01-10T19:30:00Z"
        },
        {
            "id": "6f789012-34g5-6hij-klm0-nop6pqr",
            "name": "Southwest Grill",
            "address": "345 Birch St, New Westminster, BC",
            "latitude": 49.2068,
            "longitude": -122.9100,
            "cuisine": "Southwestern",
            "priceRange": "$$",
            "start": "2024-01-11T18:30:00Z",
            "end": "2024-01-11T20:30:00Z"
        },
        {
            "id": "7g890123-45h6-7ijk-lmno-7pqr8stuvwxy",
            "name": "French Bistro",
            "address": "567 Spruce St, Coquitlam, BC",
            "latitude": 49.2827,
            "longitude": -122.7922,
            "cuisine": "French",
            "priceRange": "$$$",
            "start": "2024-01-12T17:00:00Z",
            "end": "2024-01-12T19:00:00Z"
        },
        {
            "id": "8h901234-56i7-8jkl-mnop-9qrs0tu1vwxy",
            "name": "Vegetarian Delight",
            "address": "678 Fir St, Langley, BC",
            "latitude": 49.1044,
            "longitude": -122.6596,
            "cuisine": "Vegetarian",
            "priceRange": "$$-$$$",
            "start": "2024-01-13T16:30:00Z",
            "end": "2024-01-13T18:30:00Z"
        },
        {
            "id": "9i012345-67j8-9klm-nopq-1rs2tu3vwxy",
            "name": "Ramen World",
            "address": "789 Oak St, Port Moody, BC",
            "latitude": 49.2838,
            "longitude": -122.8317,
            "cuisine": "Japanese",
            "priceRange": "$$",
            "start": "2024-01-14T19:00:00Z",
            "end": "2024-01-14T21:00:00Z"
        },
        {
            "id": "0j123456-78k9-lmno-pqrs-tuvw1xy2z345",
            "name": "Greek Taverna",
            "address": "890 Cedar St, North Vancouver, BC",
            "latitude": 49.3152,
            "longitude": -123.0736,
            "cuisine": "Greek",
            "priceRange": "$$$",
            "start": "2024-01-15T17:30:00Z",
            "end": "2024-01-15T19:30:00Z"
        }
    ]);
};