/*
 Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

 This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
 Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
 Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

 The entries in this file are from Thrilling Tales available from Adamant Entertainment.
 */

if (!chargen_edges) {
    var chargen_edges = Array();
}

//

chargen_edges = chargen_edges.concat(Array(
    {
        name: "Brilliant Scientist",
        category: "Power",

        description: "The character is one of the brightest minds in his field. Each raise the character gets on his activation roll reduces the cost of the power by 1 Power Point. This edge applies to all inventions created by the character.",
        book: books_list[11],
        prereqs: {
            rank: 1,
            arcane_background: 1,
            arcane_background_selected: "weird-science",
            attributes: {
                smarts: 3
            },
            skills: Array(
                {
                    name: "Repair",
                    required: 3
                },
                {
                    name: "Weird Science",
                    required: 3
                }
            )
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p62"
    },
    {
        name: "Bring It On!",
        category: "Combat",

        description: "The character is a master of defending against multiple attackers. Opponents get no Gang Up bonus against this character.",
        book: books_list[11],
        prereqs: {
            rank: 1,
            skills: Array(
                {
                    name: "Fighting",
                    required: 4
                }
            )
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p62"
    },
    {
        name: "Charmer",
        category: "Social",

        description: "The character is stunning, and knows how to get the best out of people by using his or her charms. This character may use Persuasion  as a Test of Will against members of the opposite sex, pitting their looks and charm against a foe’s Smarts. The character can add Charisma bonuses to the roll  as well. Note that this Edge is more appropriate for villains than heroes.",
        book: books_list[11],
        prereqs: {
            edges: Array("Attractive"),
            skills: Array(
                {
                    name: "Persuasion",
                    required: 3
                }
            )
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p62"
    },
    {
        name: "Deus Ex Machina",
        category: "Weird",

        description: "The character can snatch victory from the jaws of defeat. By spending a Bennie, the character can escape probable death by creating an excape route, once pe adventure. This escape route can be coincidental, such as a steam ship that just happens to be passing by, or simply convenient, like a column that collapses across a molten stream to provide an exit from a crumbling temple. Any PCs that are with this character can also take advantage of the escape route by spending a Bennie. The fate of NPCs is left up to the GM.",
        book: books_list[11],
        prereqs: {
            rank: 1
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p63"
    },
    {
        name: "Dirty Fighter",
        category: "Combat",

        description: "The character will do anything it takes to win a fight. Note that this Edge is more appropriate for villains than heroes. A Dirty Fighter is particularly good at Trick Maneuvers (see Savage Worlds section on combat), gaining a +2 bonus with them.",
        book: books_list[11],
        prereqs: {
            rank: 1
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p63"
    },
    {
        name: "Font of Information",
        category: "Professional",

        description: "The character has picked up many odd bits of information during his travels. The character may make a Common Knowledge roll at +2 to see whether he knows some relevant information about anything -- local notable people, legendary items, or noteworthy places -- regardless of how specialized or obscure the knowledge.",
        book: books_list[11],
        prereqs: {
            rank: 1,
            attributes: {
                smarts: 3
            }
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p63"
    },
    {
        name: "Failsafe",
        category: "Power",

        description: "The character designs his inventions with failsafes to prevent malfunctions. The devices only ever fail on a critical failure. This edge applies to all inventions created by the character.",
        book: books_list[11],
        prereqs: {
            rank: 2,
            arcane_background: 1,
            arcane_background_selected: "weird-science",
            attributes: {
                smarts: 4
            },
            skills: Array(
                {
                    name: "Repair",
                    required: 4
                },
                {
                    name: "Weird Science",
                    required: 4
                }
            )
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p64"
    },
    {
        name: "Gadget",
        category: "Background",

        description: "The character has the use of a single Weird Science device--as if they had access to the Arcane Background (Weird Science). The device is designed as per a normal Weird Science gizmo, but utlizes another skill rather than Weird Science for use (for example, Piloting or Shooting). This edge is for character concepts where the hero has access to a gizmo, but is not the scientist who built it --for example, a down-on-his-luck air circus pilot who finds a high-tech rocket pack.",
        book: books_list[11],
        prereqs: {
            rank: 1
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p64"
    },
    {
        name: "Halls of Power",
        category: "Social",

        description: "The character’s influence reaches the highest levels of power. The character cannot be found guilty of any crime in a court of law. If brought to trial, the case will be thrown out on a technicality, or an escape will be arranged by contacts within the authorities themselves. In addition, contacts will inform the character of any actions being taken against them by anyone who shares that information with the authorities. This edge is intended primarily for Villains, but some GMs may allow it for outlaw heroes like the Man of Mystery who operate with the tacit approval of the police, etc.",
        book: books_list[11],
        prereqs: {
            rank: 2
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p65"
    },
    {
        name: "Iron Jaw",
        category: "Combat",

        description: "The character can shrug off the mightiest of blows, receiving a +2 bonus to Soak rolls. Just the Thing (Weird) Requirements: Wild Card, Luck Once per session, the character may “suddenly remember” that he has a useful piece of gear on his person. The item must be able to be carried on the character’s person, and the GM is the final arbiter of what can be found.",
        book: books_list[11],
        prereqs: {
            attribute: {
                vigor: 3
            }
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p65"
    },
    {
        name: "Man Without Fear",
        category: "Social",

        description: "The character receives a +2 bonus on Guts checks and Tests of Will.",
        book: books_list[11],
        prereqs: {
            rank: 2,
            skills: Array(
                {
                    name: "Guts",
                    required: 4
                }
            )
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p65"
    },
    {
        name: "Moxie",
        category: "Background",

        description: "The character is a bundle of determination, spirit and resolve. They never give up in the face of adversity. Whenever you spend a Bennie to re-roll a failed test, you may apply a +2 bonus to the attempt.",
        book: books_list[11],
        prereqs: {
            attribute: {
                spirit: 3
            }
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p65"
    },
    {
        name: "Nick of Time",
        category: "Weird",

        description: "The character posesses the uncanny ability to arrive when the Main Hero needs him most. By spending a Bennie, the character can arrive in the scene while there is still time to affect the outcome and rescue the Hero. With each additional Bennie spent, the character may bring along another character to help (the other players may provide those Bennies). The player creates an explanation for their last-minute arrival, with the approval of the GM, in the finest tradition of the pulps.",
        book: books_list[11],
        prereqs: {
            rank: 1
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p65"
    },
    {
        name: "Nine Lives",
        category: "Weird",

        description: "The villain (for this edge is limited to villainous use) possesses the ability to return from what was thought to be certain death. If the villain dies, they may ‘cash in’ their remaining Bennies (minimum of 3, but if they have more, they must spend them all) and survive somehow (thrown clear of the explosion, washing up on a desert island after been thrown overboard, coming to in a hospital when they’ve already been declared dead, etc.) Gamemasters will find that they need to use the “Obscure death” method when using this ability--keeping the final fate of the villain a mystery. Whenever possible, the situation should be described in such a way that verification is difficult if not impossible (a villain who is shot can fall out a nearby window, for example).",
        book: books_list[11],
        prereqs: {
            rank: 2,
            attribute: {
                vigor: 3
            }
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p66"
    },
    {
        name: "Photographic Memory",
        category: "Background",

        description: "The character is able to remember everything they see, hear or read, down to the tiniest detail.",
        book: books_list[11],
        prereqs: {
            attribute: {
                smarts: 4
            }
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p66"
    },
    {
        name: "Really Dirty Fighter",
        category: "Combat",

        description: "An improved version of the the Dirty Fighter edge. The character is a master of dirty tricks -- by describing the trick and spending a Benny, the character can automatically get the Drop on any single opponent, allowing the character to be on Hold, and giving a +4 to attack and damage if they choose to strike. This Edge is more appropriate for villains than heroes.",
        book: books_list[11],
        prereqs: {
            rank: 1,
            edges: Array( "Dirty Fighter" )
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p66"
    },
    {
        name: "Trademark Vehicle",
        category: "Professional",

        description: "The character has a vehicle that they are closely associated with -- a vehicle that they know inside and out. While using this vehicle, the character gains a +1 on all rolls to operate the vehicle (Driving, Piloting or Boating, as appropriate), in addition to the bonuses bestowed by the Ace edge. Additionally, the character also recieves a +2 bonus to Shooting rolls made with the vehicles’ weapons (if any), and a +2 bonus to all Repair rolls to fix the vehicle. If the Trademark Vehicle is destroyed, stolen or otherwise removed from the game, the character can designate a replacement as the new Trademark Vehicle, but the vehicle in question must be used for two full adventures before the benefits of the Edge may be used.",
        book: books_list[11],
        prereqs: {
            rank: 1,
            edges: Array( "Ace" ),
            skills: Array(
                {
                    name: "Driving",
                    required: 4
                }
            )
        },
        incompatible: {},
        char_effects: function( character_object ) {},
        page: "p66"
    }
));

