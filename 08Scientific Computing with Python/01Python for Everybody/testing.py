# # try and exception to understand how it will be working with examples
# try:
#     # this is an example of a code that may raise exception
#     result = 10 / 0
# except ZeroDivisionError:
#     # handle the specific exception
#     print(
#         "Error: This will give us a zero division error that is what is knot known in this all the while"
#     )


try:
    result = 10 / 2
except ZeroDivisionError:
    print("Error: Division by zero")
else:
    print("No error occurred")
finally:
    print("cleanup or finalisation of code")
