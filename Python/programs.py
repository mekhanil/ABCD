#print('Hello World')
'''print 'This message is printed\nusing\nVSC'
x=5
y=9.6
z=x+y
print 'z is', + z
print type(y)
print("Hi",z)
aim = 'breathe'
print 'Your aim is to',aim
print type(aim)
list 
data 
type
-commenting multiple lines
zodiacs = ['Taurus','Capricon',['Virgo','Gemini']] #list data type, sub list
print zodiacs[-2]
alphanumeric_list = ('Roy',50,'Hima',67,'ji',56) #tuple data type
print alphanumeric_list
alphanumeric_list = ('hi')
print alphanumeric_list
print zodiacs[2],zodiacs[0] #printing specific element of list
student = {1:'Gokaai',2:'Sidhu',3:'Rita'}
print student[2]
#read inputs from console
name1 = input ("Enter name:")
print (name1)
#by default it is string, so convert to int 
num1 =int(input ('Enter no 1:'))
num2 =int(input ('Enter no 2:'))
num3 =int(input ('Enter no 3:'))
num4 =int(input ('Enter no 4:'))
print(num1+num2)
print(num3//num4)#floor division
number = int(input('Enter value:'))
country = input('Enter country:')

if(number>0 and country=='India'):
    print('Positive')
elif(number==0):
    print('Zerow')
else:
    print('Negative')

username = input("Enter username:")
password = input("Enter password:")

if(username=='abcd' and password=='1234'):
    print("YAY ! You can login")
elif(username!='abcd' and password!='1234'):
    print("Sorry ! Wrong Data Entered")
elif(password!='1234'):
    print("Sorry ! Wrong Password")
else:
    print("Sorry ! Wrong Username")

#Functions

def display():
    print("Welcome to Functions")

display()

def whoareyou(name):
    print('This is '+ name +' here !')

whoareyou('Karthika')

def squaring(a):
    return(a*a)


a=int(input("Enter no:"))

sq=squaring(a)

print('Square is ',sq)'''

list1 = [1,2,3,4,5]

print(len(list1))

for el in list1:
    print(el)

for el in range(0,10,4):#
    print(el)

marks = [20,40,60,80]
sum1 =0

for el in marks:
    sum1=sum1+el

print('Sum is',sum(marks))

list2 = [(12,23,45),56,(34,67)]

print(list2[0][2])
