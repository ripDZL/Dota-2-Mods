const mods = [
  {
    "id": "01",
    "category": "Models",
    "title": "HoN Nyan Cat Courier",
    "version": "3 editions",
    "status": "Test",
    "summary": "HoN’s courier with a rainbow trail and popping stars in flight.",
    "notes": "Use one edition at a time. Classic’s flying rainbow and stars were confirmed in-game. HD and Fur still need an in-game retest.",
    "type": "Couriers",
    "image": "nyan-classic.jpg",
    "editions": [
      {
        "name": "Classic",
        "version": "v0.1.2-test",
        "summary": "Original ground and flying courier with the rainbow trail and popping stars.",
        "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/hon-nyan-cat-classic-v0.1.2-test"
      },
      {
        "name": "HD",
        "version": "v0.2.0-test",
        "summary": "Orange HD ground model with the Classic flying courier and effects.",
        "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/hon-nyan-cat-hd-v0.2.0-test"
      },
      {
        "name": "Fur",
        "version": "v0.3.4-test",
        "summary": "3D ground fur and a flat rainbow ribbon during flight.",
        "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/hon-nyan-cat-fur-v0.3.4-test"
      }
    ]
  },
  {
    "id": "03",
    "category": "Models",
    "title": "Kongor over Roshan",
    "version": "HD v0.2.1",
    "status": "Test",
    "summary": "HoN’s Kongor replaces Roshan, with the chosen HD skull artwork.",
    "notes": "The HD edition uses the chosen skull art. Remaster v0.3.0 is a separate experimental build. Live selection, animation and performance still need a check.",
    "type": "Roshan",
    "image": "kongor.png",
    "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/kongor-roshan-hd-v0.2.1"
  },
  {
    "id": "04",
    "category": "Models",
    "title": "Witch Slayer over Lion",
    "version": "v0.1.5",
    "status": "Test",
    "summary": "Witch Slayer replaces Lion, with an animated Graveyard, brighter Mana Drain, and a revised Silver Bullet impact.",
    "notes": "Graveyard erupts outward over cracked ground. Silver Bullet adds a target-centered flash, expanding ring, and blood effects. Designed for default Lion cosmetics. In-game retest pending.",
    "type": "Heroes",
    "image": "witch-slayer.png",
    "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/witch-slayer-lion-v0.1.5"
  },
  {
    "id": "07",
    "category": "Effects",
    "title": "ReBoot HD Emblems",
    "version": "v1.1.1",
    "status": "Packaged",
    "summary": "Fourteen ReBoot-inspired emblems with HD textures and 3D detailing.",
    "notes": "Includes individual emblem packages. The gallery was reviewed, with in-game orientation checks pending.",
    "type": "Emblems",
    "image": "reboot-emblems.png",
    "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/reboot-hd-emblems-v1.1.1"
  },
  {
    "id": "12",
    "category": "Terrain",
    "title": "Immortal Gardens Trees",
    "version": "v0.4.1",
    "status": "Test",
    "summary": "Garden trees on Default Terrain, with corrected Minify load priority.",
    "notes": "Package replay covered all 50 resource paths. Live appearance with the optimizer enabled remains open.",
    "type": "Trees",
    "cover": "Immortal Gardens",
    "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/immortal-gardens-trees-v0.4.1"
  },
  {
    "id": "13",
    "category": "Terrain",
    "title": "TI5 Desert Trees",
    "version": "v0.1.0",
    "status": "Packaged",
    "summary": "Palms, cacti and other TI5 Desert trees on Default Terrain.",
    "notes": "Tree models use Default Terrain placement and lighting. Live cut and regrowth checks remain open.",
    "type": "Trees",
    "cover": "TI5 Desert",
    "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/ti5-desert-trees-v0.1.0"
  },
  {
    "id": "23",
    "category": "Interface",
    "title": "Rank Medal Collections",
    "version": "14 styles",
    "status": "Packaged",
    "summary": "Fourteen rank medal styles with native compact icons and progress stars.",
    "notes": "Aetherforged, PULSE Mono, STRIKE and the ELITE 10 pack, plus the separate ASCENT design. ELITE styles are also available individually. Enable one rank design at a time.",
    "type": "Rank Icons",
    "image": "ranks.png",
    "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/rank-medals-collection"
  },
  {
    "id": "24",
    "category": "Effects",
    "title": "Pink Spell Radius Expanded",
    "version": "v0.1.1",
    "status": "Test",
    "summary": "Pink styling for a wider set of spell targeting indicators.",
    "notes": "Includes the curved targeting preview correction. Live color and alignment checks remain open.",
    "type": "Spell Effects",
    "image": "pink-spell.jpg",
    "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/pink-spell-radius-v0.1.1"
  },
  {
    "id": "25",
    "category": "Effects",
    "title": "Pink Tower Re-Aggro Radius",
    "version": "v0.1.0",
    "status": "Packaged",
    "summary": "Pink styling for the tower re-aggro radius indicator.",
    "notes": "Color-only revision. Live appearance remains open.",
    "type": "Indicators",
    "image": "pink-tower.jpg",
    "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/pink-tower-reaggro-v0.1.0"
  },
  {
    "id": "26",
    "category": "Audio",
    "title": "Mute Character Voices · Keep Announcer",
    "version": "v1.0.0",
    "status": "Test",
    "summary": "Mutes hero responses while preserving announcer and mega-kill audio.",
    "notes": "Offline checks covered the Samuel pack and private Witch Slayer voice files. Live listening remains open.",
    "type": "Voice Lines",
    "cover": "Mute Character Voices",
    "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/mute-character-voices-v1.0.0"
  },
  {
    "id": "27",
    "category": "Audio",
    "title": "HoN Samuel L. Jackson Announcer",
    "version": "v0.1.1",
    "status": "Test",
    "summary": "Uncensored HoN audio for the announcer and mega-kill slots.",
    "notes": "User reported audible lines. The audit found a battle-prep duration warning, so event coverage still needs review.",
    "type": "Announcers",
    "cover": "Samuel L. Jackson",
    "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/hon-samuel-announcer-v0.1.1"
  },
  {
    "id": "28",
    "category": "Audio",
    "title": "Dragon Ball Blink Priority Fix",
    "version": "v0.5.1",
    "status": "Third-party",
    "summary": "Minify compatibility revision for M1su’s Blink Dagger sound.",
    "notes": "Original sound and mod by M1su. This revision changes Minify load priority. Live conflict testing is pending.",
    "type": "Item Effects",
    "image": "dragon-ball.webp",
    "credit": "M1su · fix by ripDZL",
    "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/dragon-ball-blink-v0.5.1"
  },
  {
    "id": "29",
    "category": "Effects",
    "title": "Red Click",
    "version": "v2",
    "status": "Third-party",
    "summary": "Red click and movement indicators adapted from Black Click.",
    "notes": "Red Click is credited to Morecursed and derives from Black Click.",
    "type": "Click Effects",
    "image": "red-click.jpg",
    "credit": "Morecursed",
    "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/red-click-v2"
  },
  {
    "id": "30",
    "category": "Effects",
    "title": "Pink Click FINAL",
    "version": "FINAL",
    "status": "Third-party",
    "summary": "Pink click and movement indicators with corrected particle tint.",
    "notes": "The FINAL revision recolors both the textures and particle color fields. Original package credit goes to Morecursed.",
    "type": "Click Effects",
    "image": "pink-click.jpg",
    "credit": "Morecursed",
    "release": "https://github.com/ripDZL/Dota-2-Mods/releases/tag/pink-click-final"
  }
];
