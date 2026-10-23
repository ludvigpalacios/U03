# Game Website - Login & Create Account

This is a small front-end project where I built a website with a login page, a create account page, and a simple menu with selection buttons such as **Play**, **Leaderboard**, and **Friends**.

The project focuses on HTML, CSS and JavaScript, especially things like grid layout, event listeners, forms, local storage and reusable code.

## Features

### Start page and login

- Built the first page skeleton with a login button, reference text and basic styling.
- Added a login popup using the `<dialog>` element.
- Added inputs for email and password, with proper labels and attributes for better accessibility.
- The login popup can be opened and closed with event listeners.
- The layout uses CSS grid and flexbox, with colors, shadows and hover effects.

### Create account

- Added a separate create account page.
- Users can enter a username, email and password.
- The page checks for duplicate usernames or emails before saving a new account.
- Input fields use autofill attributes and email suggestions.
- Basic validation checks if a field is empty or if the password is too short.

### Saving accounts

- Accounts are saved in the browser using `localStorage`.
- Existing JSON data is read and parsed into JavaScript when the page loads.
- A `try...catch` block is used to handle invalid JSON or other errors.
- New accounts are added to the saved list and stored back in local storage.

### Login feedback

- When logging in, the entered email and password are checked against the saved accounts.
- A feedback container shows whether the account was found or not.
- The feedback text changes style depending on the result, for example red for a warning and green for a confirmation.

### Menu and styling

- Added selection buttons for **Play**, **Leaderboard** and **Friends**.
- One button is highlighted as selected, with **Play** selected by default.
- The buttons are positioned and sized using CSS grid and `justify-self`.
- Added styling for warning and confirmation messages.

## JavaScript structure

The JavaScript is split into separate files for each page instead of keeping everything in one file.

- `login.js` handles the login page and login logic.
- `createAccount.js` handles creating a new user and duplicate checks.
- Shared or repeated code was cleaned up and reused where possible.
- Button IDs were added so the elements can be used from other scripts.
- Confetti was added for future use.

## What I learned

- Working with `<dialog>` popups.
- Using event listeners for clicks and the Enter key.
- Reading, parsing and saving JSON with `localStorage`.
- Handling errors with `try...catch`.
- Checking arrays for duplicates with `forEach` and conditional statements.
- Building layouts with CSS grid and flexbox.
- Reusing code and keeping JavaScript split into smaller files.

## Technologies

- HTML
- CSS
- JavaScript
- LocalStorage
