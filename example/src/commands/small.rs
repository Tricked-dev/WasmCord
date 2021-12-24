use super::prelude::*;
const LETTERS: [(char, char); 26] = [
    ('q', 'ǫ'),
    ('w', 'ᴡ'),
    ('e', 'ᴇ'),
    ('r', 'ʀ'),
    ('t', 'ᴛ'),
    ('y', 'ʏ'),
    ('u', 'ᴜ'),
    ('i', 'ɪ'),
    ('o', 'ᴏ'),
    ('p', 'ᴘ'),
    ('a', 'ᴀ'),
    ('s', 's'),
    ('d', 'ᴅ'),
    ('f', 'ꜰ'),
    ('g', 'ɢ'),
    ('h', 'ʜ'),
    ('j', 'ᴊ'),
    ('k', 'ᴋ'),
    ('l', 'ʟ'),
    ('z', 'ᴢ'),
    ('x', 'x'),
    ('c', 'ᴄ'),
    ('v', 'ᴠ'),
    ('b', 'ʙ'),
    ('n', 'ɴ'),
    ('m', 'ᴍ'),
];

pub fn small_data() -> Plugin {
    Plugin {
        command: "small".to_owned(),
        description: "makes your text smaller".to_owned(),
        usage: "{c} [text that you want to make small]".to_owned(),
    }
}
#[wasm_bindgen]
pub fn small(input: String) -> String {
    Response::quick(
        input
            .chars()
            .into_iter()
            .map(|x| {
                let r = LETTERS.iter().find(|name| name.0 == x);
                r.map(|d| d.1).unwrap_or(x)
            })
            .collect::<String>(),
        true,
    )
}
