use super::prelude::*;
const LETTERS: [(char, char); 34] = [
    ('a', 'ɐ'),
    ('b', 'q'),
    ('c', 'ɔ'),
    ('d', 'p'),
    ('p', 'd'),
    ('e', 'ǝ'),
    ('f', 'ɟ'),
    ('g', 'ƃ'),
    ('h', 'ɥ'),
    ('i', 'ı'),
    ('j', 'ɾ'),
    ('k', 'ʞ'),
    ('m', 'ɯ'),
    ('n', 'u'),
    ('r', 'ɹ'),
    ('t', 'ʇ'),
    ('v', 'ʌ'),
    ('w', 'ʍ'),
    ('y', 'ʎ'),
    ('.', '˙'),
    ('[', ']'),
    ('(', ')'),
    ('{', '}'),
    ('?', '¿'),
    ('!', '¡'),
    ('\'', ','),
    ('<', '>'),
    ('>', '<'),
    ('_', '‾'),
    (';', '؛'),
    ('‿', '⁀'),
    ('⁅', '⁆'),
    ('∴', '∵'),
    ('\r', '\n'),
];

pub fn flip_data() -> Plugin {
    Plugin {
        command: "flip".to_owned(),
        description: "flips your text upside down :D".to_owned(),
        usage: "{c} [text to flip]".to_owned(),
    }
}
#[wasm_bindgen]
pub fn flip(input: String) -> String {
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
