def FindLeapYear(yearFrom, yearTo):
    LeapYear = []

    while yearFrom <= yearTo:

        if yearFrom % 4 == 0 and yearFrom % 100 != 0:
            LeapYear.append(yearFrom)

        if yearFrom % 100 == 0 and yearFrom % 400 == 0:
            LeapYear.append(yearFrom)

        yearFrom += 1

    print(LeapYear)

year1 = int(input("Masukan tahun awal: "))
year2 = int(input("Masukan tahun akhir: "))

FindLeapYear(year1, year2)