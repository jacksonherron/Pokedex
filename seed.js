const db = require('./models');

const bulbasaur = {
    name: 'Bulbasaur',
    type: 'Grass',
    level: 1,
    health: 10,
    image: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png'
};

const squirtle = {
    name: 'Squirtle',
    type: 'Water',
    level: 1,
    health: 10,
    image: 'https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png'
};

const charmander = {
    name: 'Charmander',
    type: 'Fire',
    level: 1,
    health: 10,
    image: 'https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/500px-004Charmander.png'
};

const pikachu = {
    name: 'Pikachu',
    type: 'Electric',
    level: 1,
    health: 10,
    image: 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/1200px-025Pikachu.png'
};

const pokemonList = [bulbasaur, squirtle];

const Ash = {
    name: 'Ash Ketchum',
    age: 25,
    hometown: 'Pallet Town',
    pokemon: []
}

const badges = [
    { 
        name: 'Boulder Badge',
        town: 'Pewter City',
        gymLeader: 'Brock',
        color: 'Gray',
    },
    {
        name: 'Cascade Badge',
        town: 'Cerulean City',
        gymLeader: 'Misty',
        color: 'Blue',
    }

]


// ----------------- CREATE ----------------- //
// .create('object template', function('error', 'object returned from db'))

// db.Pokemon.create(pikachu, (error, createdPokemon) => {
//     if (error) return console.log(error);
//     else console.log(createdPokemon);
// });

// pokemonList.forEach(pokemon => {
//     db.Pokemon.create(pokemon, (error, createdPokemon) => {
//         if (error) return console.log(error);
//         console.log(createdPokemon);
//     });
// });

// db.Trainer.create(Ash, (error, createdTrainer) => {
//     if (error) return console.log(error);
//     console.log(createdTrainer)
// });


// ----------------- READ ----------------- //
// .find('what we are searching for', function('error', 'array of all objects that it found'))
// .findOne() does the same but returns just one object

// db.Pokemon.find({}, (error, foundPokemons) => {
//     if (error) return console.log(error);
//     console.log(foundPokemons);
// });

// db.Pokemon.findOne({}, (error, foundPokemon) => {
//     if (error) return console.log(error);
//     console.log(foundPokemon);
// });

// db.Trainer.find({}, (error, foundTrainers) => {
//     if (error) return console.log(error);
//     console.log(foundTrainers);
// });


// ----------------- UPDATE ----------------- //
// .findOneAndUpdate('what we are searching for', 'updatedinfo', {new: true}, function('error', 'updatedObject'))

// db.Pokemon.findOneAndUpdate(
//     { name: 'Bulbasaur' },
//     { level: 2 },
//     { new: true },
//     (error, updatedPokemon) => {
//         if (error) return console.log(error);
//         console.log(updatedPokemon);
//     }
// );


// Add single pokemon to Ash by it's id (pikachu)
// const newAsh = {
//     pokemon: ["5d277784c8fe2e02bf1da9a7"]
// }
// db.Trainer.findOneAndUpdate( {name: 'Ash Ketchum'}, newAsh, { new: true }, (error, updatedTrainer) => {
//     if (error) return console.log(error);
//     console.log(updatedTrainer);
//     }
// ) 


// Add multiple pokemon to Ash by their name
// const newAsh = {
//     pokemon: ['Pikachu', 'Bulbasaur']
// };
// const updateTrainer = () => {
//     const ids = []
//     newAsh.pokemon.forEach(name => {
//         db.Pokemon.findOne({ name }, (error, foundPokemon) => {
//             if (error) return console.log(error);
//             ids.push(foundPokemon._id);
//             db.Trainer.findOneAndUpdate(
//                 { name: 'Ash Ketchum' },
//                 { pokemon: ids },
//                 { new: true },
//                 (error, updatedTrainer) => {
//                 if (error) return console.log(error);
//                 console.log(updatedTrainer);
//                 }
//             )
//         });
//     });
// };

// Create and embed a badges

const addBadges = () => {
    const newAshBadges = [];
    badges.forEach(badge => {
        db.Badge.create(badge, (error, createdBadge) => {
            if (error) return console.log(error);
            newAshBadges.push(createdBadge);
            db.Trainer.findOneAndUpdate(
                { name: 'Ash Ketchum' },
                { badges: newAshBadges },
                { new: true },
                (error, updatedTrainer) => {
                    if (error) return console.log(error);
                    console.log(updatedTrainer);
                }
            );
        });
    });
}

addBadges();

// updateTrainer();


// ----------------- DESTROY ----------------- //
// .findOneAndDelete('what we are searching for', function('error', 'deletedPokemon'))

// db.Pokemon.findOneAndDelete({ type: 'Grass' }, (error, deletedPokemon) => {
//     if (error) return console.log(error);
//     console.log(deletedPokemon);
// });