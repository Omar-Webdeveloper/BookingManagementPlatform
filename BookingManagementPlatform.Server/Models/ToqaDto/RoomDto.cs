namespace BookingManagementPlatform.Server.Models.ToqaDto
{
    public class RoomDto
    {

        public int RoomId { get; set; }

        public string? ServiceName { get; set; }

        public string? Description { get; set; }

        public int? Price { get; set; }

        public int? Duration { get; set; }

        public int? CategoryId { get; set; }

        public string? ServiceImage { get; set; }

        public string? Location { get; set; }

        public int? Capacity { get; set; }

        public string? Seating { get; set; }

        public string? MusicLevel { get; set; }

        public string? ViewLook { get; set; }

        public string? Lighting { get; set; }

    }
}
