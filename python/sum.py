import time

def sum(lst, n):
    for x in lst:
        removed = lst
        removed.remove(x)
        if n in [i + x for i in removed]:
            return True
    return False

# def sum2(lst, n):
#     for i in range(len(lst)):
#         for j in range(i + 1, len(lst)):
#             if lst[i] + lst[j] == n:
#                 return True
#     return False

def test():
    assert sum([-1, 1], 0)
    assert not sum([0,2,3], 4)
    assert sum([0,2,2], 4)
    print("Success!")

if __name__ == "__main__":
    test()