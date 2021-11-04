fn main() {

    let input: &[u8; 11] = &[0,0,0,1,1,1,1,0,0,0,0];
    let decoded: [u8; 7] = decode(input);

    for i in 0..decoded.len() {
        print!("{}", decoded[i]);
        if i < decoded.len() - 1 {
            print!(", ")
        }
    }
}


fn decode(input: &[u8; 11]) -> [u8; 7] {
    let mut output: [u8; 7] = [0; 7];
    let mut parities: [u8; 4] = [0; 4];

    for i in 1..12 {
        if !parityCheck(i) {

            let value = input[i - 1];
            for k in 0..4 {
                let masked = (i >> k) & 1;
                if masked == 1 {
                    parities[k] += value;
                }
            }
        }
    }

    let mut error: usize = 0;
    let mut pos: usize = 1;
    for i in 0..4 {

        if parities[i] % 2 != input[pos - 1] {
            error += pos;
        }
        pos <<= 1;
    }

    let mut read: usize = 0;
    for i in 1..=11 {
        if !parityCheck(i) {
            let value = input[i - 1];
            if i != error {
                output[read] = value;
            } else {
                output[read] = !value & 1;
            }
            read += 1;
        }
    }

    return output;
}

fn parityCheck(index: usize) -> bool {
    ((index - 1) & index) == 0
}