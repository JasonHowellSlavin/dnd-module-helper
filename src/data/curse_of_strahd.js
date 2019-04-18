const curseOfStrahdModule = {
    locations: [
        {
            path: '/death-house',
            title: 'Death House',
            specifics: {
                monsters: [
                    {
                        name: 'Shadow',
                        location: 'Darklord\'s Shrine',
                        moduleNum: '31',
                    },
                    {
                        name: 'Swarm of Insects',
                        location: 'Elisabeth\'s Crypt',
                        moduleNum: '23',
                        moduleLetter: 'D'
                    },
                    {
                        name: 'Animated Armor',
                        size: 'Medium',
                        alignment: 'Unaligned',
                        location: 'Balcony',
                        moduleNum: '11',
                        traits: [
                            {
                                name: 'Antimagic Susceptibility',
                                description: "The armor is Incapacitated while in the area of an Antimagic Field. If targeted by Dispel Magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall Unconscious for 1 minute."
                            },
                            {
                                name: 'False Apperance',
                                description: "While the armor remains motionless, it is indistinguishable from a normal suit of armor."
                            }
                        ],
                        actions: [
                            {
                                name: "Multiattack",
                                description: "The armor makes two Melee Attacks.",
                            },
                            {
                                name: "Slam",
                                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.",
                            },
                        ],
                        abilityScores: [
                            {ability: 'Str', score: '14'},
                            {ability: 'Dex', score: '11'},
                            {ability: 'Con', score:'13'},
                            {ability: 'Int', score:'1'},
                            {ability: 'Wis', score:'3'},
                            {ability: 'Cha', score:'1'},
                        ],
                        attributes: {
                            ac: '18',
                            hp: '33 (6d8+6)',
                            speed: '25ft',
                            challange: '1 (200xp)',
                            damageImmunities: ['Poison', 'Pyshcic'],
                            conditionImmunities: ['Blinded', 'Charmed', 'Deafened', 'Exhaustion', 'Frightened', 'Paralyzed', 'Petrified', 'Poisioned'],
                            senses: ['Blindsight 60ft', 'passive Perception 6'],
                        },
                        url: "https://roll20.net/compendium/dnd5e/Animated%20Armor#content",
                        image: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/429/241/315/636306156895834255.jpeg",
                    }
                ]
            }

        },
        {
            path: '/barovia-village',
            title: 'Barovia Village'
        },
        {
            path: '/vallaki',
            title: 'Vallaki'
        }
    ]
}


// {
//     name: "",
//     description: "",
// },

export default curseOfStrahdModule;
