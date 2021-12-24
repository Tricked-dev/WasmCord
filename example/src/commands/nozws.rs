use super::prelude::*;

pub fn nozws_data() -> Plugin {
    Plugin {
        command: "nozws".to_owned(),
        description: "Removes all zws's from your text".to_owned(),
        usage: "{c} [Text to remove zws from]".to_owned(),
    }
}
#[wasm_bindgen]
pub fn nozws(input: String) -> String {
    Response::quick(input.replace("\u{200b}", ""), true)
}
