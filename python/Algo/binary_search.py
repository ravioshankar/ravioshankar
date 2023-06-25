def binary_search(list, searchItem):    
    if(len(list)==0):
        return False
    else:
        first = 0
        last = len(list) - 1
        while first <= last:
            midpoint = (first + last)//2
            if(list[midpoint] == searchItem):
                return True
            elif( list[midpoint] > searchItem):
                last = midpoint - 1 
            else:
                first = midpoint + 1
        return None

inputData = [1,3,5,6,7,8,9,10,12,14,16]

result = binary_search([], 11)

print("Search item", result)