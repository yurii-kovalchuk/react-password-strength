This project created with [Vite](https://vitejs.dev/).

# ABOUT

The applications serves for testing password strength.

## HOW IS IT WORK

Password can include: characters (Latin alphabet), digits, symbols.
All you need is just put your password into field. Colors of followed containers will display how strong password is.

The password must contain more than 8 characters, otherwise all containers are going to be red.

1. Easy: the password has only letters/digits/symbols - the first container is going to be red the rest are gray.
2. Medium: the password has combination of letters-symbols/letters-digits/digits-symbols - the first two containers are going to be yellow the last one is gray.
3. Strong: the password has letters, symbols and numbers, all containers are going to be green.

Since this application is testing passwords - all symbols in the field are hidden by default. To see password - press the button "Show" in the right side of the field.
