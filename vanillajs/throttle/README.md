// so closure is made by returned function 

 1. It maintain the parent variable state between multiple call and use the prev state
 2. In case of throttle we use this closure for timerId and lastRun : so that:
        > we can have the measure when the function was last invoked
        > so we can calculate the past time and after the interval is passed we will call function 
        > ensure no function call will be made between the interval