use super::prelude::*;
const LETTERS: [(char, char); 61] = [
    ('0', '０'),
    ('1', '１'),
    ('2', '２'),
    ('3', '３'),
    ('4', '４'),
    ('5', '５'),
    ('6', '６'),
    ('7', '７'),
    ('8', '８'),
    ('9', '９'),
    ('Q', 'Ｑ'),
    ('W', 'Ｗ'),
    ('R', 'Ｒ'),
    ('T', 'Ｔ'),
    ('Y', 'Ｙ'),
    ('U', 'Ｕ'),
    ('I', 'Ｉ'),
    ('O', 'Ｏ'),
    ('P', 'Ｐ'),
    ('A', 'Ａ'),
    ('S', 'Ｓ'),
    ('D', 'Ｄ'),
    ('F', 'Ｆ'),
    ('G', 'Ｇ'),
    ('H', 'Ｈ'),
    ('J', 'Ｊ'),
    ('K', 'Ｋ'),
    ('L', 'Ｌ'),
    ('Z', 'Ｚ'),
    ('X', 'Ｘ'),
    ('C', 'Ｃ'),
    ('V', 'Ｖ'),
    ('B', 'Ｂ'),
    ('N', 'Ｎ'),
    ('M', 'Ｍ'),
    ('q', 'ｑ'),
    ('w', 'ｗ'),
    ('e', 'ｅ'),
    ('r', 'ｒ'),
    ('t', 'ｔ'),
    ('y', 'ｙ'),
    ('u', 'ｕ'),
    ('i', 'ｉ'),
    ('o', 'ｏ'),
    ('p', 'ｐ'),
    ('a', 'ａ'),
    ('s', 'ｓ'),
    ('d', 'ｄ'),
    ('f', 'ｆ'),
    ('g', 'ｇ'),
    ('h', 'ｈ'),
    ('j', 'ｊ'),
    ('k', 'ｋ'),
    ('l', 'ｌ'),
    ('z', 'ｚ'),
    ('x', 'ｘ'),
    ('c', 'ｃ'),
    ('v', 'ｖ'),
    ('b', 'ｂ'),
    ('n', 'ｎ'),
    ('m', 'ｍ'),
];

pub fn fw_data() -> Plugin {
    Plugin {
        command: "fw".to_owned(),
        description: "ｆｕｌｌ　ｗｉｄｔｈｓ　ｙｏｕｒ　ｔｅｘｔ".to_owned(),
        usage: "{c} [Text you want fullwidth]".to_owned(),
    }
}
#[wasm_bindgen]
pub fn fw(input: String) -> String {
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
