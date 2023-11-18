# main() from mecsimcalc
"""def main(inputs):
    letters = inputs['letter_input']
    return {"sum": letters}"""

# split input into a list of individual letters


# opening/reading from file, splitting 
def read_file(filename):
    with open(filename, 'r') as file:
        words = file.read().split()
    return (words)

def find_valid_words(words, letters):
    updated_words=words
    for word in updated_words:
        for letter in letters:
            if letter in word:
                updated_words.remove(word)
    return updated_words 

def get_input():
    # returns a list of letters the user does NOT have

    #gets input from the user
    letters = input("Enter letters that you do not have seperated by spaces (a b c)\n")
    #splits at spaces and turns into a list of letters
    letters = letters.split()
    return letters


    


# go through each letter of each word to see if missing letter is in it
# if yes, skip, if no, print as possible word for bracelet

