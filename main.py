# main() from mecsimcalc
"""def main(inputs):
    letters = inputs['letter_input']
    return {"sum": letters}"""

def choose_theme():
    print("Which theme would you like words for? Enter the number associated with the theme you would like:")
    print("1. taylor_swift.txt")
    print("2. harry_styles.txt")
    name = ''
    chosen = int(input())
    if chosen == 1:
        name = 'taylor_swift'
    elif chosen == 2:
        name = 'harry_styles'
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

def get_input():
    # returns a list of letters the user does NOT have

    #gets input from the user
    letters = input("Enter letters that you do not have seperated by spaces (a b c)\n")
    #splits at spaces and turns into a list of letters
    letters = letters.split()
    return letters


if __name__ == "__main__":
    name = choose_theme()
    filename = name+".txt"
    letters = get_input()
    words = read_file(filename)
    updated_words = find_valid_words(words, letters)
    print()
    print("Possible words include:")
    for i in updated_words:
        print(i)


    


# go through each letter of each word to see if missing letter is in it
# if yes, skip, if no, print as possible word for bracelet

