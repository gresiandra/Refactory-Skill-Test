def palindromeCheck(words):
    words1 = words[::-1]
    if words.lower() == words1.lower():
        print("the word " + words + " is Palindrome")
    else:
        print("the word " + words + " is NOT Palindrome")

words = input("masukan kata/kalimat: ")
palindromeCheck(words)