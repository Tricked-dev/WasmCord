use super::prelude::*;
const LETTERS: [(char, char); 26] = [
    ('q', 'ᑫ'),
    ('w', 'ʷ'),
    ('e', 'ᵉ'),
    ('r', 'ʳ'),
    ('t', 'ᵗ'),
    ('y', 'ʸ'),
    ('u', 'ᵘ'),
    ('i', 'ᶦ'),
    ('o', 'ᵒ'),
    ('p', 'ᵖ'),
    ('a', 'ᵃ'),
    ('s', 'ˢ'),
    ('d', 'ᵈ'),
    ('f', 'ᶠ'),
    ('g', 'ᵍ'),
    ('h', 'ʰ'),
    ('j', 'ʲ'),
    ('k', 'ᵏ'),
    ('l', 'ˡ'),
    ('z', 'ᶻ'),
    ('x', 'ˣ'),
    ('c', 'ᶜ'),
    ('v', 'ᵛ'),
    ('b', 'ᵇ'),
    ('n', 'ⁿ'),
    ('m', 'ᵐ'),
];

pub fn smaller_data() -> Plugin {
    Plugin {
        command: "smaller".to_owned(),
        description: "makes your text smaller".to_owned(),
        usage: "{c} [text that you want to make smaller]".to_owned(),
    }
}
#[wasm_bindgen]
pub fn smaller(input: String) -> String {
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
