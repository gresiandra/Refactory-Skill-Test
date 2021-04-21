import datetime
import textwrap

def order():

    # Variable inisiation
    inputs = True
    items = []
    prices = []
    total = 0
    totals = ''

    # inputs
    resto = input("resto name: ")
    cashier = input("cashier name: ")
    date = datetime.datetime.now()
    dates = date.strftime("%Y-%m-%d")
    times = date.strftime("%H:%M:%S")
    datetimes = dates + " " + times

    # items and prices inputs
    while inputs != 'x':
        item = input("item: ")
        price = input("price: ")
        items.append(item)
        prices.append(price)
        inputs = input("order again? (enter to continue) (x then enter to exit): ")

    # printing the receipt
    print("Receipt: ")
    print(" ")
    print(" ")
    print(textwrap.fill('{:^30s}'.format(resto), 30))
    print(" ")
    print("Tanggal : " +textwrap.fill(datetimes, 30))
    print(" ")
    print("Nama Kasir : " +textwrap.fill('{:>15s}'.format(cashier), 30))
    print(" ")
    print("==============================")
    for item,price in zip(items, prices):
        print(" ")
        print(textwrap.fill('{:<1}...............{:>1}'.format(item, "Rp" + price), 30))

    for price in prices:
        total = total + int(price)
        totals = str(total)

    print(" ")
    print(" ")
    print(textwrap.fill('{:<1}...............{:>1}'.format("Total", "Rp" + totals), 30))

order()
