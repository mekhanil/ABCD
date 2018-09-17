
arr = [12,45,6,89,89,78,6,7,89,89,6]

def mostfreq(arr,n):

    arr.sort()
    curr=1;maxi=1;res=arr[0]

    for i in range(1,n):
        if(arr[i]==arr[i-1]):
            curr+=1
        
        elif(arr[i]!=arr[i-1]):
            if(curr>maxi):
                maxi=curr
                res=arr[i-1]
            curr=1
    return res

ans = mostfreq(arr,len(arr))

print('Most Frequent Element is:',ans)

arr.sort()
print(arr)


