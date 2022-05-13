

def fibo_rec(numTerm):
    if(numTerm<=1):
        return numTerm
    else:
        return (fibo_rec(numTerm-1) + fibo_rec(numTerm -2))


nterms = int(input("How many terms? "))
result = fibo_rec(nterms)
print("Fibonacci series for term is ", result)