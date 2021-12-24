use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[derive(Serialize, Deserialize)]
pub struct Plugin {
    pub command: String,
    pub description: String,
    pub usage: String,
}

#[derive(Serialize, Deserialize)]
pub struct Response {
    send: bool,
    result: String,
}

#[wasm_bindgen]
pub fn cool() -> String {
    let response = Response {
        send: true,
        result: "This is a response".to_owned(),
    };
    serde_json::to_string(&response).unwrap()
}

#[wasm_bindgen]
pub fn plugin() -> String {
    let mock = Plugin {
        command: "cool".to_owned(),
        description: "Mock people".to_owned(),
        usage: "{c} [people to mock]".to_owned(),
    };
    serde_json::to_string(&vec![mock]).unwrap()
}

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wasm-cord!");
}
