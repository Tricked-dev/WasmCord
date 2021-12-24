use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

mod commands;
use commands::*;
pub use commands::{emoji, flip, fw, nozws, reverse, small, smaller, zwsit};

///Use wee_alloc a allocator for wasm
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

//Plugin data struct - you can use json! too but a struct is cleaner
#[derive(Serialize, Deserialize)]
pub struct Plugin {
    pub command: String,
    pub description: String,
    pub usage: String,
}

impl Plugin {
    pub fn new(command: String, description: String, usage: String) -> Self {
        Plugin {
            command,
            description,
            usage,
        }
    }
}

#[derive(Serialize, Deserialize)]
pub struct Response {
    send: bool,
    result: String,
}
//Response struct using normal json! is fine too since it returns a json string
impl Response {
    pub fn new(result: String, send: bool) -> Self {
        Response { send, result }
    }
    pub fn quick(result: String, send: bool) -> String {
        serde_json::to_string(&Response::new(result, send)).unwrap()
    }
}

#[wasm_bindgen]
pub fn plugin() -> String {
    serde_json::to_string(&vec![
        fw_data(),
        small_data(),
        flip_data(),
        smaller_data(),
        emoji_data(),
        zwsit_data(),
        nozws_data(),
        reverse_data(),
    ])
    .unwrap()
}
