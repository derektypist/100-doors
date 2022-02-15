# 100 Doors

There are 100 doors in a row that are initially closed.  You make 100 passes by the doors.

The first time through, visit every door and *toggle* the door (If the door is closed, open it; if it is open, close it).

The second time, only visit every 2nd door (door 2, 4, 6, ...) and toggle it.

The third time, visit every 3rd door (door 3, 6, 9, ...) etc, until you only visit the 100th door.

The aim is to find out which doors are open.

## UX

**Getting Started**

Enter the number of doors in the input field and click on the Submit Button.  You will see the number of doors as well as the final opened doors, unless you make an invalid input.

Click on the Reset Button to clear that information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any or all of:

    - Entering text (e.g. bus)
    - Entering a number less than 1 or greater than 100
    - Entering a number, but it is not an integer
    - Not entering anything in the input field

As a user, providing my input is valid, I expect to see information such as:

    Number of Doors: 100
    Final Opened Doors: 1,4,9,16,25,36,49,64,81,100

As a user, if I click on the Reset Button, I expect the information to be cleared.

**Information Architcture**

The function `getFinalOpenedDoors(numDoors)` returns a Number Array, `numdoors` is a Number between 1 and 100.

