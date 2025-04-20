using BookingManagementPlatform.Server.Models;
using Microsoft.EntityFrameworkCore;
using BookingManagementPlatform.Server.DataServicee;
using BookingManagementPlatform.Server.IDataSerivcee;
using BookingManagementPlatform.Server.UserServicee;
var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddDbContext<MyDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("YourConnectionString")));
builder.Services.AddScoped<IOmarClass,OmarClass>();
builder.Services.AddScoped<IDataServiceJana, DataServiceJana>();
// Add services to the container.


//CORS
builder.Services.AddCors(

    options => options.AddPolicy(
        "Develop", options =>
        {
            options.AllowAnyHeader();
            options.AllowAnyMethod();
            options.AllowAnyOrigin();
        }

        )
   );


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IEmailService, EmailService>();
builder.Services.AddScoped<IUserServicee, UserService>();
builder.Services.AddHttpContextAccessor();

builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();
app.UseSession();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// CORS
app.UseCors("Develop");

app.MapFallbackToFile("/index.html");

app.Run();
