# main() from mecsimcalc
"""def main(inputs):
    letters = inputs['letter_input']
    return {"sum": letters}"""

# split input into a list of individual letters


# opening/reading from file, splitting 
def read_file(filename):
    with open(filename, 'r') as file:
        lines = file.read().split()
    return (lines)

def find_letter(lines):
    return 0

def get_input():
    # returns a list of letters the user does NOT have

    #gets input from the user
    letters = input("Enter letters that you do not have seperated by spaces (a b c)\n")
    #splits at spaces and turns into a list of letters
    letters = letters.split()
    return letters


    


# go through each letter of each word to see if missing letter is in it
# if yes, skip, if no, print as possible word for bracelet

