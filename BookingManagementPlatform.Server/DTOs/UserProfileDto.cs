namespace BookingManagementPlatform.Server.DTOs
{
    public class UserProfileDto
    {
        public int UserID { get; set; }        // Assuming you use this as primary key
        public string FirstName { get; set; }  // Or Name
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string? ImagePath { get; set; } // Optional image path or base64
    }

}
