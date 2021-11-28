use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(input: &str) {

        let mut a  = input.to_string();
           let mut c:i32 = 0;
           let mut result:i32;
           let chars: Vec<_> = a.chars().rev().collect();  
           for (i,ch) in a.chars().rev().enumerate() {
               if ch == '1' {
                       let temp: i32 = 1+i as i32;
                       c = c ^ temp;
           }
       }
       
       if c == 0 
       {
           a.replace_range((9..11), "");
           a.replace_range((7..8), "");
           a.replace_range((4..5), "");
           alert(&format!("Decoded Hamming-Code {}", a));
       } else {
           c = (c-11) * -1;
        alert(&format!("Bit-Flip at index {}", c));
       }
   
}

