use super::prelude::*;

const LETTERS: [(char, char); 26] = [
    ('q', '🇶'),
    ('w', '🇼'),
    ('e', '🇪'),
    ('r', '🇷'),
    ('t', '🇹'),
    ('y', '🇾'),
    ('u', '🇺'),
    ('i', '🇮'),
    ('o', '🇴'),
    ('p', '🇵'),
    ('a', '🇦'),
    ('s', '🇸'),
    ('d', '🇩'),
    ('f', '🇫'),
    ('g', '🇬'),
    ('h', '🇭'),
    ('j', '🇯'),
    ('k', '🇰'),
    ('l', '🇱'),
    ('z', '🇿'),
    ('x', '🇽'),
    ('c', '🇨'),
    ('v', '🇻'),
    ('b', '🇧'),
    ('n', '🇳'),
    ('m', '🇲'),
];

pub fn emoji_data() -> Plugin {
    Plugin {
        command: "emoji".to_owned(),
        description: "Turn your text into emojis".to_owned(),
        usage: "{c} [Text that will be emojis]".to_owned(),
    }
}
#[wasm_bindgen]
pub fn emoji(input: String) -> String {
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
