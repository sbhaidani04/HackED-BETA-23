# main() from mecsimcalc
"""def main(inputs):
    letters = inputs['letter_input']
    return {"sum": letters}"""

# split input into a list of individual letters


# opening/reading from file, splitting
def read_file(filename):
    with open(filename, 'r') as file:
        words = file.read().split("\n")
    return (words)

def find_valid_words(words, letters):
    updated_words=words
    print(updated_words)
    for word in updated_words:
        #canMake=True
        print("at:",word)
        for letter in letters:
            if letter in word:
<<<<<<< HEAD
                #canMake=False
                print("Word:",word," letter:",letter)
        #if canMake==False:
        updated_words.remove(word)
         
=======
                updated_words.remove(word)
                break
>>>>>>> 82cb74889cabdb4f0f3cec85bf4e6b381302c062
    return updated_words 

def get_input():
    # returns a list of letters the user does NOT have

    #gets input from the user
    letters = input("Enter letters that you do not have seperated by spaces (a b c)\n")
    #splits at spaces and turns into a list of letters
    letters = letters.split()
    return letters


if __name__ == "__main__":
    filename = input("Filename:")
    letters = get_input()
    words = read_file(filename)
    updated_words = find_valid_words(words, letters)
    print("Possible words include:", updated_words)


# go through each letter of each word to see if missing letter is in it
# if yes, skip, if no, print as possible word for bracelet

