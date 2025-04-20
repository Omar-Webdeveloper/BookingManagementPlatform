namespace BookingManagementPlatform.Server.DTOs
{
    //==================== DTO added by Hala ====================================================

    public class getallbookingsDTO
    {
        public int BookingId { get; set; }
        public string RoomName { get; set; }  // من جدول Room
        public string Status { get; set; }
        public DateTime? BookingStartDate { get; set; }
        public TimeOnly? BookingStartTime { get; set; }
        public DateTime? BookingEndDate { get; set; }
        public TimeOnly? BookingEndTime { get; set; }
    
    }
}
