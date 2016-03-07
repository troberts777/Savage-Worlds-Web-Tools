/*
Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Thrilling Tales available from Adamant Entertainment.
*/

if(!chargen_hindrances) {
    var chargen_hindrances = Array();
}

chargen_hindrances = chargen_hindrances.concat(Array(
    {
        name: "Cocky",
        category: "",
        description: Array(
            "The character is a braggart, and must spend the first round of any combat announcing how great he is, or what he’s going to do to any and all opponents. This tendency to boast can be overcome by spending a Bennie.",
            "A villain with this hindrance never delivers a finishing blow to a foe, but instead will always somehow leaves the foe the opportunity to escape.(leaving them to die, placing them in a deathtrap of some kind, or ordering their minions to handle it, etc.)"
        ),
        book: books_list[11],
        prereqs: {},
        incompatible: {},
        major: 0,
        minor: 1,
        page: "p61"
    },
    {
        name: "Glass Jaw",
        category: "",
        description: Array("You don’t handle physical pain and injury well and thus suffer a –2 penalty on all soak rolls"),
        book: books_list[11],
        prereqs: {},
        incompatible: {},
        major: 1,
        minor: 0,
        page: "p61"
    },
    {
        name: "Obligations",
        category: "",
        description: Array(
            "The character has duties which demand a portion of their time and resources. This can range from familial obligations (an elderly relative in your care, for example, or keeping tabs on the family’s investments) to sworn allegiance to an organization (FBI agents are obligated, as are Mobsters, but to different groups). Failure to fulfill such obligations will have serious re-percussions -- the severity of the repercussions determine whether the Hindrance is a minor or major one.",
            "A character with Obligations and Connections to the same organization has a special relationship with the group in question and gains a +2 or +4 bonus to Persuasion rolls (depending upon whether their obligations are minor or major). In essence, the Connection has a vested interest in the character and is more likely to want to see them succeed."),
        book: books_list[11],
        prereqs: {},
        incompatible: {},
        major: 1,
        minor: 0,
        page: "p61"
    },
    {
        name: "Obligations",
        category: "",
        description: Array(
            "The character has duties which demand a portion of their time and resources. This can range from familial obligations (an elderly relative in your care, for example, or keeping tabs on the family’s investments) to sworn allegiance to an organization (FBI agents are obligated, as are Mobsters, but to different groups). Failure to fulfill such obligations will have serious re-percussions -- the severity of the repercussions determine whether the Hindrance is a minor or major one.",
            "A character with Obligations and Connections to the same organization has a special relationship with the group in question and gains a +2 or +4 bonus to Persuasion rolls (depending upon whether their obligations are minor or major). In essence, the Connection has a vested interest in the character and is more likely to want to see them succeed."),
        book: books_list[11],
        prereqs: {},
        incompatible: {},
        major: 0,
        minor: 1,
        page: "p61"
    },
    {
        name: "Savage",
        category: "",
        description: Array("The character is unfamiliar with the trappings of the modern world. The character receives a -2 penalty on all Common Knowledge rolls regarding the modern world, and on all rolls involving familiarity with modern technology (Driving, Piloting, etc.)"),
        book: books_list[11],
        prereqs: {},
        incompatible: {},
        major: 1,
        minor: 0,
        page: "p62"
    },
    {
        name: "Shellshock",
        category: "",
        description: Array("The character recovers slowly from the shock and trauma of combat, whether due to a delicate nature or horrible memories of The Great War. The character suffers a -2 penalty to Spirit rolls to recover from being Shaken."),
        book: books_list[11],
        prereqs: {},
        incompatible: {},
        major: 0,
        minor: 1,
        page: "p62"
    }
));
