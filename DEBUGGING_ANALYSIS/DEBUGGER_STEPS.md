# Debugger Steps

## Breakpoint 1: Form data captured before validation
I set this breakpoint at event.preventDefault(). This is the first line
that runs when the user clicks Submit.

### What I observed
The form submission was paused here. I could see the event object in the
debugger. No validation had run yet and there were no error messages on the
page.

### After stepping through
The code moved to the next line which removes any old error messages from
the page before starting validation.



## Breakpoint 2: Validation rule applied to full name
I set this breakpoint at if (fullName === ""). This is where the code
checks if the full name field is empty.

### What I observed
I could see the variable fullName in the debugger. When I left the field
empty it showed "". When I typed something it showed what I typed.

### After stepping through
When the field was empty the code went inside the if block and called
showInputError. When the field was filled it skipped the if block and
moved to the next validation.



## Breakpoint 3: Error message generated for invalid input
I set this breakpoint at document.createElement("span") inside the
showInputError function. This runs when a validation fails.

### What I observed
I could see the inputElement variable showing which input failed and the
message variable showing the error text that would appear on the page.

### After stepping through
A new span was created and added to the page next to the input that failed.
I could see the error message appear on the form.


## Critical State Analysis

I chose Breakpoint 2 as my critical state because this is where the
validation actually happens.

At this point:
-fullName holds what the user typed
 isValid is still true because nothing has failed yet

If fullName is empty the program sets isValid to false and shows an
error message. If it is not empty the program moves on to check the next
field.

This was interesting to me because I could see how one empty field can
change isValid from true to false and stop the whole form from
submitting. It helped me understand why the isValid variable is so
important in the validation logic.