#File Operations

'''fo = open('datafile1.txt','x')#parameter for create

fo = open('datafile1.txt','a')

fo.write('Meh Meh')

fo = open('datafile1.txt','r')

print (fo.read())

fo = open('datafile.txt','w')

fo.writelines('abcd\n1234')

fp = open('datafile.txt','r')


user = input('Enter username:')
pwd = input('Enter password:')

#content= fp.readlines()
#username = content[0]
#password = content[1]

username=fp.readline().splitlines()
username=username[0]
password=fp.readline()

if(user==username and pwd==password):
    print('Success')
else:
    print('Fail')'''
'''def display():
        print("Name is:",name)
        print("Id is:",id)'''


#CLASSES AND OBJECTS

'''class employee:
    id = 1234
    name="Jo"


e1 = employee()

print(e1.id)
print(e1.name)

class employee:
    id1 = 1234
    name = 'Rita'

    def display1(self):
       return (self.id1)

e1 = employee()

print(e1.display1())


class   ICTAK:
    empcount=25
    location='Trivandrum'

    def display(self):
        print('Employee Count is:',self.empcount)
        print('Location is:',self.location)
    

class ICTAK_RC(ICTAK):
    count = 10
    location = "Pune"

ictak = ICTAK_RC()
print(ictak.empcount)
print(ictak.location)
print(ictak.display())'''




