. Introduce a Class-Based Wrapper for Complex Scenarios
Encapsulate SLA and ticket-related operations in a class to simplify handling state and related logic. (where we want to keep state, so that we dont have to pass parameter to each function)
        Class-Based Advantages:
        1. Method Chaining
        2. State Encapsulation

. Advantages of Encapsulation in Recurring Events
    1. State Management:
        Each recurring event instance tracks its own state (start date, recurrence rule, timezone), avoiding the need to pass these parameters repeatedly.
    2. Consistency Across Operations:
        Operations like getNextOccurrence consistently use the stored recurrence rule and timezone, reducing the risk of errors.
    3. Extendable Design:
        New recurrence rules (e.g., "daily" or "yearly") can be added by extending the class or modifying the getNextOccurrence method.

. Hybrid Approach
Use utility functions for standalone operations like formatTicketTimeWithZone.
Use a class-based approach for stateful operations like SLA deadlines and ticket-specific logic.