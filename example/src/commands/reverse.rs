use super::prelude::*;

pub fn reverse_data() -> Plugin {
    Plugin {
        command: "zwsit".to_owned(),
        description: "Adds a bunch of zws's to your text".to_owned(),
        usage: "{c} [Text to append zws to]".to_owned(),
    }
}
#[wasm_bindgen]
pub fn reverse(input: String) -> String {
    Response::quick(input.chars().rev().collect(), true)
}
