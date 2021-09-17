def blue(_str):
    return f"\033[0;33m{_str}\033[0m"

print(f"""
Hello 😁 ! Use the terminal to code!

1. Start the dev server by running  {blue("$ npm run start")}
2. You can find a video tutorial and explanation on the README.md file.
3. Always read the terminal output, it's your best tool for debugging!
""")