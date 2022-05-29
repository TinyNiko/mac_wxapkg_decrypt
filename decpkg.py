# import hexdump
import sys
from Crypto.Cipher import AES


def aes_ecb_dec(data):
    # TODO you should replace key_bytes from _agents.js
    key_bytes = bytes.fromhex('f8 71 14 48 68 4b 47 c6 b3 a9 26 31 a1 f2 7f 43')
    cipher = AES.new(key_bytes, AES.MODE_ECB)
    dec_data = cipher.decrypt(data)
    return dec_data

def main(input_path, output_path):
    data = open(input_path, 'rb').read()
    dec_data = aes_ecb_dec(data[:1024])
    # hexdump.hexdump(dec_data)
    with open(output_path, 'wb') as fd:
        fd.write(dec_data)
        fd.write(data[1024:])

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print(f"{__file__} wxapkg_path output_path")
        sys.exit(0)

    main(sys.argv[1], sys.argv[2])
