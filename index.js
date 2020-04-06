window.onload = function () {
    let input = document.createElement('div');
    input.className = 'wrap-screen';
    input.innerHTML = '<textarea class="screen-txt" id="screen" rows="5" autofocus></textarea>';
    document.body.append(input);
    let wrapRow = document.createElement('div');
    wrapRow.className = 'wrap-keyboard';
    document.body.append(wrapRow);

    let keyboard = {
      row0: {
        Backquote: ['`', '~', 'ё', 'Ё'], Digit1: ['1', '!', '1', '!'], Digit2: ['2', '@', '2', '&#34;'], Digit3: ['3', '#', '3', '№'],
        Digit4: ['4', '$', '4', ';'], Digit5: ['5', '%', '5', '%'], Digit6: ['6', '^', '6', ':'], Digit7: ['7', '&', '7', '?'], Digit8: ['8', '*', '8', '*'],
        Digit9: ['9', '(', '9', '('], Digit0: ['0', ')', '0', ')'], Minus: ['-', '_', '-', '_'], Equal: ['=', '+', '=', '+'], Backspace: ['Backspace', 'Backspace', 'Backspace', 'Backspace']
      },
      row1: {
        Tab: ['Tab', 'Tab', 'Tab', 'Tab'], KeyQ: ['q', 'Q', 'й', 'Й'], KeyW: ['w', 'W', 'ц', 'Ц'], KeyE: ['e', 'E', 'у', 'У'],
        KeyR: ['r', 'R', 'к', 'К'], KeyT: ['t', 'T', 'е', 'Е'], KeyY: ['y', 'Y', 'н', 'Н'], KeyU: ['u', 'U', 'г', 'Г'], KeyI: ['i', 'I', 'ш', 'Ш'],
        KeyO: ['o', 'O', 'щ', 'Щ'], KeyP: ['p', 'P', 'З', 'з'], BracketLeft: ['[', '{', 'х', 'Х'], BracketRight: [']', '}', 'ъ', 'Ъ'], Backslash: ['&#92;', '|', '&#92;', '&#47;'], Delete: ['Del', 'Del', 'Del', 'Del']
      },
      row2: {
        CapsLock: ['Caps lock', 'Caps lock', 'Caps lock', 'Caps lock'], KeyA: ['a', 'A', 'ф', 'Ф'], KeyS: ['s', 'S', 'ы', 'Ы'], KeyD: ['d', 'D', 'в', 'В'],
        KeyF: ['f', 'F', 'а', 'А'], KeyG: ['g', 'G', 'п', 'П'], KeyH: ['h', 'H', 'р', 'Р'], KeyJ: ['j', 'J', 'о', 'О'], KeyK: ['k', 'K', 'л', 'Л'],
        KeyL: ['l', 'L', 'д', 'Д'], Semicolon: [';', ':', 'ж', 'Ж'], Quote: ['&#781;', '&#782;', 'э', 'Э'], Enter: ['Enter', 'Enter', 'Enter', 'Enter']
      },
      row3: {
        ShiftLeft: ['Shift', 'Shift', 'Shift', 'Shift'], KeyZ: ['z', 'Z', 'я', 'Я'], KeyX: ['x', 'X', 'ч', 'Ч'], KeyC: ['c', 'C', 'с', 'С'],
        KeyV: ['v', 'V', 'м', 'М'], KeyB: ['b', 'B', 'и', 'И'], KeyN: ['n', 'N', 'т', 'Т'], KeyM: ['m', 'M', 'ь', 'Ь'], Comma: [',', '<', 'б', 'Б'],
        Period: ['.', '>', 'ю', 'Ю'], Slash: ['/', '?', '.', ','], ArrowUp: ['&#8593;', '&#8593;', '&#8593;', '&#8593;'], ShiftRight: ['Shift', 'Shift', 'Shift', 'Shift']
      },
      row4: {
        ControlLeft: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], MetaLeft: ['Win', 'Win', 'Win', 'Win'], AltLeft: ['Alt', 'Alt', 'Alt', 'Alt'], Space: [' ', ' ', ' ', ' '],
        AltRight: ['Alt', 'Alt', 'Alt', 'Alt'], ArrowLeft: ['&#8592;', '&#8592;', '&#8592;', '&#8592;'], ArrowDown: ['&#8595;', '&#8595;', '&#8595;', '&#8595;'],
        ArrowRight: ['&#8594;', '&#8594;', '&#8594;', '&#8594;'], ControlRight: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']
      }
    }
    let shift = 'shiftOff';
  
    