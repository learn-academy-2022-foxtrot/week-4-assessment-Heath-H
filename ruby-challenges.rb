# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# method called odd_or_even
def odd_or_even(num)
    # use modulo % 2 == 0 to find out if odd or even 
    if num %3 == 0 
    # #{} use this on num to take value and add to string
    "#{num} is even"
    else "#{num} is odd"
    end
end

p odd_or_even(num1)
#Output: "7 is odd"
p odd_or_even(num2)
#output: "42 is even"
p odd_or_even(num3)
#output: "221 is odd"



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels_ever str
    str.delete "aeiouAEIOU"
end

p no_vowels_ever(beatles_album1)
# "Rbbr Sl"
p no_vowels_ever(beatles_album2)
# "Sgt Pppr"
p no_vowels_ever(beatles_album3)
#"Abby Rd"........... need to add AEIOU???
# "bby Rd"



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome(str)
    if str.downcase! == str.reverse 
        p "#{str.capitalize} is a palindrome"
    elsif 
        p "#{str.capitalize} is not a palindrome"
    else
        p "something went wrong"
    end
end 

palindrome(palindrome_tester1)
# "Racecar is a palindrome"
palindrome(palindrome_tester2)
#"#Learn is not a palindrome" --- need to fix typo
#"Learn is not a palindrome"
palindrome(palindrome_tester3)
#"Rotator is a palindrome"

