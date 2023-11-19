# main() from mecsimcalc
"""def main(inputs):
    letters = inputs['letter_input']
    return {"sum": letters}"""

def choose_theme():
    print("Which theme would you like words for? Enter the number associated with the theme you would like:")
    print("1. Taylor Swift")
    print("2. Harry Styles")
    print("3. Coldplay")
    name = ''
    chosen = int(input())
    if chosen == 1:
        name = 'taylor_swift'
    elif chosen == 2:
        name = 'harry_styles'
    elif chosen == 3:
        name = 'coldplay'
    return name

# split input into a list of individual letters

# opening/reading from file, splitting 
def read_file(filename):
    with open(filename, 'r') as file:
        words = file.read().splitlines()
    return (words)

def find_valid_words(words, letters):
    updated_words=[]
    for word in words:
        add = True
        for letter in letters:
            if letter in word:
                add = False
            if letter not in word and add == False:
                add = False
        if add == True:
            updated_words.append(word)
    return updated_words 

def find_valid_words_using_letters_available(words, letters):
    updated_words = []
    for word in words:
        if all(x in word for x in letters):
            updated_words.append(word)
    return updated_words

def get_input():
    # returns a list of letters the user does NOT have

    # gets input from the user
    letters = input("Enter letters that you do not have seperated by spaces (a b c)\n")

    # splits at spaces and turns into a list of letters
    letters = letters.split()
    return letters
def input_number_of_letters():
    print("Enter the letter and number of letters you have. Once done, input q. Input in this format:")
    print("*letter* number")
    print("for example:a 2")


if __name__ == "__main__":
    '''
    name = choose_theme()
    filename = name+".txt"
    print(filename)
    letters = get_input()
    words = read_file(filename)
    updated_words = find_valid_words(words, letters)
    print()
    print("Possible words include:")
    for i in updated_words:
        print(i)

    '''
    name = choose_theme()
    filename = name+".txt"
    print(filename)
    letters = get_input()
    words = read_file(filename)
    updated_words = find_valid_words_using_letters_available(words, letters)
    print()
    print("Possible words include:")
    for i in updated_words:
        print(i)

    




# go through each letter of each word to see if missing letter is in it
# if yes, skip, if no, print as possible word for bracelet

