class TicketHelper {
    constructor(date, timezone = "UTC", businessHours = { start: 9, end: 17 }) {
        this.date = dayjs(date).tz(timezone);
        this.timezone = timezone;
        this.businessHours = businessHours; // Start and end hours of business
      }
  
    calculateSLABreachTime() {
      const slaHours = { urgent: 1, high: 4, medium: 8, low: 24 };
      let deadline = dayjs(this.createdAt).add(slaHours[this.priority], 'hour');
  
      if (!this.isWithinBusinessHours(deadline)) {
        deadline = this.getNextBusinessHour(deadline);
      }
  
      return deadline;
    }
  
    isWithinBusinessHours(date)  {
      const current = dayjs(date);
      const day = current.day();
      const time = current.format('HH:mm');
  
      if (!this.businessHours.workingDays.includes(day)) return false;
  
      return this.businessHours.shifts.some(
        (shift) => time >= shift.start && time <= shift.end
      );
    }

    addBusinessHours(hours) {
        let tempDate = this.date;
    
        while (hours > 0) {
          tempDate = tempDate.add(1, "hour");
    
          // Skip non-business hours
          if (tempDate.hour() >= this.businessHours.shifts[0].start && tempDate.hour() < this.businessHours.shifts[0].end) {
            hours -= 1;
          }
    
          // Skip weekends or non-working days
          if (!tempDate.isBusinessDay()) {
            tempDate = tempDate.add(1, "day").hour(this.businessHours.shifts[0].start);
          }
        }
    
        return new TicketHelper(tempDate, this.timezone, this.businessHours);
      }
  
    getNextBusinessHour(date) {
      // Logic for getting the next business hour
    }
  }
  
  // Usage
  const ticketHelper = new TicketHelper(
    "2025-01-17T12:00:00",
    "high",
    {
      workingDays: [1, 2, 3, 4, 5],
      shifts: [{ start: "09:00", end: "17:00" }],
      timezone: "America/New_York",
    }
  );
  const deadline = ticketHelper.calculateSLABreachTime();
  
  const extendedSLA = ticketHelper.addBusinessHours(4);


  // 2nd example
  class RecurringEvent {
    constructor(startDate, recurrenceRule, timezone = "UTC") {
      this.startDate = dayjs(startDate).tz(timezone);
      this.recurrenceRule = recurrenceRule; // e.g., 'weekly', 'monthly'
      this.timezone = timezone;
    }
  
    getNextOccurrence() {
      switch (this.recurrenceRule) {
        case "weekly":
          return this.startDate.add(1, "week").format("YYYY-MM-DD HH:mm");
        case "monthly":
          return this.startDate.add(1, "month").format("YYYY-MM-DD HH:mm");
        default:
          throw new Error("Unsupported recurrence rule");
      }
    }
  }
  
  // Usage Example
  const event = new RecurringEvent("2025-01-17T10:00:00", "weekly", "Asia/Kolkata");
  
  console.log("Next Occurrence:", event.getNextOccurrence()); // 2025-01-24 10:00
  

// !Interview discussion
// ?1. Set the Context:
// "FreshDesk required advanced date handling for SLAs and recurring events, including business hour calculations, timezone conversions, and recurrence rules."
// ?2. Explain the Problem:
// "These operations needed to work on consistent date instances while encapsulating complex logic, like skipping non-business hours or calculating the next occurrence for events."
// ?3.Highlight the Solution:
// "We implemented a class-based wrapper to encapsulate state (e.g., timezone, business hours) and related operations. This approach ensured consistency, improved readability, and allowed us to extend functionality easily."
// ?4.Show Results:
// "The class-based design reduced redundant code and simplified date handling across modules like ticket SLAs and event scheduling, making the system more maintainable and scalable."