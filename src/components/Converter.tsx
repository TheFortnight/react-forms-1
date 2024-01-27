import { useState } from "react";

function Converter() {

    const hexToRgb = (hexColor: string) => {
        // Check if the input is a string and remove the '#' if present
        const sanitizedHex = typeof hexColor === 'string' ? hexColor.replace(/^#/, '') : hexColor;
      
        // Convert the sanitized hex string to a numeric value
        const numericValue = parseInt(sanitizedHex, 16);
      
        return {
          red: (numericValue >> 16) & 0xFF,
          green: (numericValue >> 8) & 0xFF,
          blue: numericValue & 0xFF,
        };
      };
      

    const [bcColor, setBcColor] = useState('rgb(0 0 0)');

    const handleInput = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
            if (value.length < 7) {
                return;
            }

            const hexColorRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

            if (!hexColorRegex.test(value)) {
                setBcColor('Wrong code!');
                return;
            }

            const rgbObj = hexToRgb(value);

            setBcColor(`rgb(${rgbObj.red} ${rgbObj.green} ${rgbObj.blue})`);
    };

    
    //const bcColor = 'blue';

    return (
        <>
            <div className="color" style={{backgroundColor: bcColor}}>

                COLOR

            </div>
            <input
                type="text"
                placeholder="enter HEX color code"
                onChange={handleInput}
            />
            <p>{bcColor}</p>
        </>
    )
};

export default Converter;