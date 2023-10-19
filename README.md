# Test Password Strength

[DEMO](https://M1k1ta.github.io/test-password)

## Task
Create an application to test password strength.

## The Essence of the Assignment
Create a password strength checker with the following requirements:
- Provide a field for entering a password.
- Add three sections under the password field to display the password's strength.
- Password strength should update in real-time.
- Password strength criteria:
  - Only letters/digits/symbols - the password is easy.
  - Combination of letters-symbols/letters-digits/digits-symbols - the password is medium.
  - Has letters, symbols, and numbers - the password is strong.
- The color of the sections depends on the password's strength:
  - If the field is empty, all sections are gray.
  - If the field has fewer than 8 characters, all sections are red.
  - If the password is easy, the first section is red, and the rest are gray.
  - If the password is medium, the first two sections are yellow, and the last one is gray.
  - If the password is strong, all sections are green.

## Technologies
- React
- TypeScript
- classnames
- SCSS
- HTML

Node version: 18.17.0

## Installation
1. Fork this repository.
2. Clone it to your desktop.
3. Run the following command in the console: `npm install` (Node version 18.17.0 is required).
4. Start the application using `npm start`.

## How it Works
The main components of this project include well-styled strength blocks and a function to determine password strength:
1. By using the `nth-child` selector, styles are applied to change the background color of the necessary blocks when using an active class.
2. A function is created to return the password strength. The function uses a strength level value and regular expressions to check for letters, symbols, and numbers in the password. The strength value is incremented based on the presence of each character type. If the password has fewer than 8 characters, a strength of -1 is returned. The current strength is used to change the CSS class using the `classnames` library.

Please note that the `#Task` and `#The essence of the assignment` sections were not changed, as requested.
