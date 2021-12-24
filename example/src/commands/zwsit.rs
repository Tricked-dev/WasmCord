use super::prelude::*;

pub fn zwsit_data() -> Plugin {
    Plugin {
        command: "zwsit".to_owned(),
        description: "Adds a bunch of zws's to your text".to_owned(),
        usage: "{c} [Text to append zws to]".to_owned(),
    }
}
#[wasm_bindgen]
pub fn zwsit(input: String) -> String {
    Response::quick(
        format!(
            "\u{200b}{}\u{200b}",
            input
                .chars()
                .into_iter()
                .map(|x| { format!("\u{200b}{}\u{200b}", x) })
                .collect::<String>()
        ),
        true,
    )
}
