public class PaymentDTO
{
    public int BookingId { get; set; }
    public string PaymentMethod { get; set; }
    public string? CardNumber { get; set; }
    public string? CVC { get; set; }
    public DateTime? ExpiryDate { get; set; }
    public decimal Amount { get; set; }
}
