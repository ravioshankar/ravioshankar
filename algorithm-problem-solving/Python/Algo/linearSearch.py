
def leaner_search(list, searchItem):
    if(len(list)==0):
        return False
    else:
        for i in range(len(list) - 1):
            if (list[i]== searchItem):
                return i
            else:
                None


sample = [2,4,5,6,7,8,9,10]
result = leaner_search(sample, 5)
print("result ", result)