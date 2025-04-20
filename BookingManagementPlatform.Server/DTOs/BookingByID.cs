namespace BookingManagementPlatform.Server.DTOs;
//==================== DTO added by Hala ====================================================

public class BookingByID
    {
        public int RoomId { get; set; }  // المستخدم يختار الغرفة
        public DateOnly? BookingStartDate { get; set; }
        public TimeOnly? BookingStartTime { get; set; }
        public DateOnly? BookingEndDate { get; set; }
        public TimeOnly? BookingEndTime { get; set; }
    }



