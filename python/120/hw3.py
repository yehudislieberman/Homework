import random

the_answer = random.randint(1, 100)
user_guess = None
user_attempts = 0

while user_guess != the_answer:
    try:
        user_guess = int(input("Enter a number between 1 and 100: "))

        if user_guess < 1 or user_guess > 100:
            print("Sorry - your guess is out of range. Enter a number between 1 and 100. ")
            continue

        user_attempts += 1
        if user_guess < the_answer:
            print("Your guess is too low.")
        elif user_guess > the_answer:
            print("Your guess is too high.")
    except ValueError:
        print("Your input was invalid. Please enter a number between 1 and 100.")

print(f"You guessed the correct number in {user_attempts} tries! Congrats!")