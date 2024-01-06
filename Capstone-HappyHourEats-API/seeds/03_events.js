/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('events').del();
    await knex('events').insert([
        {
            "id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr",
            "title": "Free Birthday Drink at Tim Hortons",
            "description": "Celebrate your birthday with a free drink at Tim Hortons!",
            "birthday": true
        },
        {
            "id": "2b345678-91c2-3def-8gh0-ijkl2mnopqr",
            "title": "Birthday Special at Starbucks",
            "description": "Enjoy a complimentary birthday beverage at Starbucks!",
            "birthday": true
        },
        {
            "id": "3c456789-12d3-4efg-9hi0-jkl3mnopqr",
            "title": "Free Cheesecake at Cactus Club Cafe",
            "description": "Celebrate with a free cheesecake on your birthday at Cactus Club Cafe!",
            "birthday": true
        },
        {
            "id": "4d567890-12e3-4fgh-ij01-klmn4opqr",
            "title": "Buy One Get One Free Burgers at Denny's",
            "description": "Don't miss out on our special deal - buy one burger, get the second one free!",
            "birthday": false,
            "hours_left": 6
        },
        {
            "id": "5e678901-23f4-5ghi-jkl0-mnop5pqr",
            "title": "Happy Hour Special at The Local Pub",
            "description": "Join us for happy hour! Buy one drink and get the second one at half price!",
            "birthday": false,
            "hours_left": 8
        },
        {
            "id": "6f789012-34g5-6hij-klm0-nop6pqr",
            "title": "Birthday Cupcake from Sugar Bliss Bakery",
            "description": "Indulge in a delicious birthday cupcake on us! Visit Sugar Bliss Bakery and enjoy the sweet treat.",
            "birthday": true
        },
        {
            "id": "7g890123-45h6-7ijk-lmno-7pqr8stuvwxy",
            "title": "Free Dessert at Olive Garden",
            "description": "Celebrate your birthday at Olive Garden and receive a complimentary dessert of your choice!",
            "birthday": true
        },
        {
            "id": "8h901234-56i7-8jkl-mnop-9qrs0tu1vwxy",
            "title": "Family Movie Night at the Park",
            "description": "Join us for a family-friendly movie night at the park! Bring your blankets and enjoy the evening under the stars.",
            "birthday": false,
            "hours_left": 10
        },
        {
            "id": "9i012345-67j8-9klm-nopq-1rs2tu3vwxy",
            "title": "Trivia Night at The Board Game Cafe",
            "description": "Challenge your knowledge at our trivia night! Win exciting prizes and enjoy a night filled with fun and friendly competition.",
            "birthday": false,
            "hours_left": 12
        },
        {
            "id": "0j123456-78k9-lmno-pqrs-tuvw1xy2z345",
            "title": "Live Jazz Music at The Jazz Lounge",
            "description": "Immerse yourself in the soulful tunes of live jazz music at The Jazz Lounge. A perfect way to unwind and enjoy the evening.",
            "birthday": false,
            "hours_left": 18
        },
        {
            "id": "va234567-89b1-4cde-8fg0-hij1klmnopqr",
            "title": "BOGO Ice Cream Cones at Sweet Delights",
            "description": "Buy one ice cream cone and get the second one free! Treat yourself to a sweet delight at our ice cream parlor.",
            "birthday": false,
            "hours_left": 4
        },
        {
            "id": "2b545678-91c2-3def-8gh0-ijkl2mnopqr",
            "title": "Artisanal Coffee Tasting at Brew Haven",
            "description": "Explore the world of artisanal coffee with our tasting event at Brew Haven. Sample unique blends and discover your favorite.",
            "birthday": false,
            "hours_left": 14
        }
    ]);
};