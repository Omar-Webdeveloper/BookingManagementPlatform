using BookingManagementPlatform.Server.DTOs;

namespace BookingManagementPlatform.Server.IDataSerivcee
{
    public interface IUserServicee
    {
        Task<bool> RegisterAsync(RegisterDto dto);
        Task<string?> LoginAsync(LoginDto dto);
        Task<bool> SendPasswordResetCodeAsync(string email);
        Task<string?> GoogleLoginAsync(string idToken);
        public bool VerifyResetCode(string email, string inputCode);
        Task<bool> ResetPasswordAsync(string email, string newPassword);

    }
}
